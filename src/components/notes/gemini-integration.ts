import { GoogleGenerativeAI } from '@google/generative-ai';
import { NotePage, Block } from './types';
import { 
  processDocumentForRAG, 
  generateRAGResponse, 
  RAGDocument,
  chunkText,
  searchChunks
} from '@/lib/rag-engine';
import { logger } from '@/lib/logger';

// Secure API key handling - never use hardcoded fallbacks
const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

if (!GEMINI_API_KEY) {
  logger.error('VITE_GEMINI_API_KEY is not configured. AI features will be unavailable.');
}

const genAI = GEMINI_API_KEY ? new GoogleGenerativeAI(GEMINI_API_KEY) : null;

// Cache for processed RAG documents
const ragNotesCache = new Map<string, RAGDocument>();

export interface GeminiResponse {
  text: string;
  error?: string;
  sources?: { source: string; relevance: string }[];
  confidence?: number;
}

export interface FlowchartData {
  mermaidCode: string;
  title: string;
}

// Convert page blocks to text for RAG context
export function pageToText(page: NotePage): string {
  let text = `# ${page.title}\n\n`;
  
  for (const block of page.blocks) {
    switch (block.type) {
      case 'heading1':
        text += `# ${block.content}\n`;
        break;
      case 'heading2':
        text += `## ${block.content}\n`;
        break;
      case 'heading3':
        text += `### ${block.content}\n`;
        break;
      case 'bulleted-list':
        text += `• ${block.content}\n`;
        break;
      case 'numbered-list':
        text += `${block.properties?.index || 1}. ${block.content}\n`;
        break;
      case 'todo':
        text += `[${block.properties?.checked ? 'x' : ' '}] ${block.content}\n`;
        break;
      case 'quote':
        text += `> ${block.content}\n`;
        break;
      case 'code':
        text += `\`\`\`${block.properties?.language || ''}\n${block.content}\n\`\`\`\n`;
        break;
      case 'divider':
        text += `---\n`;
        break;
      default:
        if (block.content) {
          text += `${block.content}\n`;
        }
    }
    text += '\n';
  }
  
  return text;
}

/**
 * Process notes for RAG (with caching)
 */
function getRAGDocumentsFromNotes(pages: NotePage[]): RAGDocument[] {
  return pages.map(page => {
    // Check cache
    if (ragNotesCache.has(page.id)) {
      const cached = ragNotesCache.get(page.id)!;
      // Check if content changed by comparing title
      if (cached.name === page.title) {
        return cached;
      }
    }
    
    // Process and cache
    const content = pageToText(page);
    const ragDoc = processDocumentForRAG(page.id, page.title, content);
    ragNotesCache.set(page.id, ragDoc);
    return ragDoc;
  });
}

// Ask Gemini about the notes (Advanced RAG with chunking)
export async function askGeminiAboutNotes(
  query: string,
  pages: NotePage[],
  language: string = 'en'
): Promise<GeminiResponse> {
  try {
    // Use advanced RAG engine
    const ragDocuments = getRAGDocumentsFromNotes(pages);
    const ragResponse = await generateRAGResponse(query, ragDocuments, language);
    
    if (ragResponse.error) {
      return { text: '', error: ragResponse.error };
    }
    
    // Format sources
    const sources = ragResponse.sources.map(s => ({
      source: s.chunk.source,
      relevance: s.relevance
    }));
    
    // Add confidence indicator
    let responseText = ragResponse.answer;
    if (!ragResponse.grounded && ragResponse.confidence < 30) {
      responseText = `⚠️ *Low confidence - This question may not be directly covered in your notes.*\n\n${responseText}`;
    }
    
    return { 
      text: responseText,
      sources,
      confidence: ragResponse.confidence
    };
  } catch (error) {
    console.error('Gemini API Error:', error);
    return { 
      text: '', 
      error: error instanceof Error ? error.message : 'Failed to get response from AI' 
    };
  }
}

// Generate a summary of notes
export async function generateNoteSummary(
  page: NotePage,
  language: string = 'en'
): Promise<GeminiResponse> {
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
    
    const content = pageToText(page);
    const languageInstruction = language !== 'en' 
      ? `Please respond in ${getLanguageName(language)}. ` 
      : '';
    
    const prompt = `${languageInstruction}Please provide a concise summary of the following notes:

${content}

Provide a clear, well-organized summary highlighting the key points.`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    
    return { text: response.text() };
  } catch (error) {
    console.error('Gemini API Error:', error);
    return { 
      text: '', 
      error: error instanceof Error ? error.message : 'Failed to generate summary' 
    };
  }
}

// Generate a flowchart from notes using Mermaid
export async function generateFlowchartFromNotes(
  page: NotePage,
  chartType: 'flowchart' | 'mindmap' | 'sequence' | 'class' = 'flowchart'
): Promise<FlowchartData | { error: string }> {
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
    
    const content = pageToText(page);
    
    const chartTypePrompts = {
      flowchart: 'Create a Mermaid flowchart (using flowchart TD) that visualizes the main concepts and their relationships from these notes.',
      mindmap: 'Create a Mermaid mindmap that organizes the main topics and subtopics from these notes.',
      sequence: 'Create a Mermaid sequence diagram if the notes describe a process or interaction between entities.',
      class: 'Create a Mermaid class diagram if the notes describe objects, classes, or entities with properties and relationships.',
    };
    
    const prompt = `Analyze the following notes and ${chartTypePrompts[chartType]}

Notes:
${content}

IMPORTANT: Return ONLY valid Mermaid code, nothing else. Do not include any explanation or markdown code blocks. Just the raw Mermaid syntax.

For flowcharts, use this format:
flowchart TD
    A[Start] --> B[Step 1]
    B --> C[Step 2]

For mindmaps, use this format:
mindmap
  root((Main Topic))
    Topic 1
      Subtopic 1
      Subtopic 2
    Topic 2`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    let mermaidCode = response.text().trim();
    
    // Clean up the response
    mermaidCode = mermaidCode
      .replace(/```mermaid\n?/g, '')
      .replace(/```\n?/g, '')
      .trim();
    
    return {
      mermaidCode,
      title: `${page.title} - ${chartType.charAt(0).toUpperCase() + chartType.slice(1)}`
    };
  } catch (error) {
    console.error('Gemini API Error:', error);
    return { 
      error: error instanceof Error ? error.message : 'Failed to generate flowchart' 
    };
  }
}

// Generate study questions from notes
export async function generateStudyQuestions(
  page: NotePage,
  count: number = 5,
  language: string = 'en'
): Promise<GeminiResponse> {
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
    
    const content = pageToText(page);
    const languageInstruction = language !== 'en' 
      ? `Please respond in ${getLanguageName(language)}. ` 
      : '';
    
    const prompt = `${languageInstruction}Based on the following notes, generate ${count} study questions that would help someone review and understand the material:

${content}

Format each question on a new line, numbered 1-${count}.`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    
    return { text: response.text() };
  } catch (error) {
    console.error('Gemini API Error:', error);
    return { 
      text: '', 
      error: error instanceof Error ? error.message : 'Failed to generate questions' 
    };
  }
}

// Improve or expand notes
export async function improveNotes(
  page: NotePage,
  action: 'expand' | 'simplify' | 'organize' | 'correct',
  language: string = 'en'
): Promise<GeminiResponse> {
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
    
    const content = pageToText(page);
    const languageInstruction = language !== 'en' 
      ? `Please respond in ${getLanguageName(language)}. ` 
      : '';
    
    const actionPrompts = {
      expand: 'Expand these notes with more details, examples, and explanations while keeping the original structure.',
      simplify: 'Simplify these notes to make them easier to understand. Use simpler language and shorter sentences.',
      organize: 'Reorganize these notes into a clearer, more logical structure with proper headings and sections.',
      correct: 'Review and correct any grammar, spelling, or factual errors in these notes.',
    };
    
    const prompt = `${languageInstruction}${actionPrompts[action]}

Original notes:
${content}

Please provide the improved version in a clear, formatted way.`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    
    return { text: response.text() };
  } catch (error) {
    console.error('Gemini API Error:', error);
    return { 
      text: '', 
      error: error instanceof Error ? error.message : 'Failed to improve notes' 
    };
  }
}

// Translate notes to another language
export async function translateNotes(
  page: NotePage,
  targetLanguage: string
): Promise<GeminiResponse> {
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
    
    const content = pageToText(page);
    const languageName = getLanguageName(targetLanguage);
    
    const prompt = `Translate the following notes to ${languageName}. Maintain the same formatting and structure:

${content}`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    
    return { text: response.text() };
  } catch (error) {
    console.error('Gemini API Error:', error);
    return { 
      text: '', 
      error: error instanceof Error ? error.message : 'Failed to translate notes' 
    };
  }
}

// Convert notes to audio script
export async function generateAudioScript(
  page: NotePage,
  style: 'lecture' | 'podcast' | 'summary' = 'lecture',
  language: string = 'en'
): Promise<GeminiResponse> {
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
    
    const content = pageToText(page);
    const languageInstruction = language !== 'en' 
      ? `Please respond in ${getLanguageName(language)}. ` 
      : '';
    
    const stylePrompts = {
      lecture: 'Convert these notes into a detailed educational lecture script that explains each concept thoroughly.',
      podcast: 'Convert these notes into an engaging podcast script with a conversational tone.',
      summary: 'Convert these notes into a brief audio summary script that covers the key points.',
    };
    
    const prompt = `${languageInstruction}${stylePrompts[style]}

Notes:
${content}

Format the script so it's ready to be read aloud. Include natural pauses and transitions.`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    
    return { text: response.text() };
  } catch (error) {
    console.error('Gemini API Error:', error);
    return { 
      text: '', 
      error: error instanceof Error ? error.message : 'Failed to generate audio script' 
    };
  }
}

function getLanguageName(code: string): string {
  const languages: Record<string, string> = {
    en: 'English',
    es: 'Spanish',
    fr: 'French',
    de: 'German',
    it: 'Italian',
    pt: 'Portuguese',
    ru: 'Russian',
    zh: 'Chinese',
    ja: 'Japanese',
    ko: 'Korean',
    ar: 'Arabic',
    hi: 'Hindi',
    bn: 'Bengali',
    ta: 'Tamil',
    te: 'Telugu',
    mr: 'Marathi',
    gu: 'Gujarati',
    kn: 'Kannada',
    ml: 'Malayalam',
    pa: 'Punjabi',
  };
  return languages[code] || code;
}

export const SUPPORTED_LANGUAGES = [
  { code: 'en', name: 'English' },
  { code: 'es', name: 'Spanish' },
  { code: 'fr', name: 'French' },
  { code: 'de', name: 'German' },
  { code: 'it', name: 'Italian' },
  { code: 'pt', name: 'Portuguese' },
  { code: 'ru', name: 'Russian' },
  { code: 'zh', name: 'Chinese' },
  { code: 'ja', name: 'Japanese' },
  { code: 'ko', name: 'Korean' },
  { code: 'ar', name: 'Arabic' },
  { code: 'hi', name: 'Hindi' },
  { code: 'bn', name: 'Bengali' },
  { code: 'ta', name: 'Tamil' },
  { code: 'te', name: 'Telugu' },
];
