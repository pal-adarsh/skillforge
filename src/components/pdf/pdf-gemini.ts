import { GoogleGenerativeAI } from '@google/generative-ai';
import { PDFDocument } from './pdf-utils';

const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY || 'AIzaSyDJC5a882ruaC4XL6ejY3h_uJzpga-yLLA';

const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

export interface GeminiResponse {
  text: string;
  error?: string;
}

export interface FlowchartData {
  mermaidCode: string;
  title: string;
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

/**
 * Ask Gemini about uploaded PDFs (RAG-style)
 */
export async function askGeminiAboutPDF(
  query: string,
  pdfs: PDFDocument[],
  language: string = 'en'
): Promise<GeminiResponse> {
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
    
    // Create context from all PDFs
    const context = pdfs.map(pdf => 
      `=== Document: ${pdf.name} ===\n${pdf.text}`
    ).join('\n\n---\n\n');
    
    const languageInstruction = language !== 'en' 
      ? `Please respond in ${getLanguageName(language)}. ` 
      : '';
    
    const prompt = `You are a helpful assistant that answers questions based on uploaded PDF documents. 
${languageInstruction}
Here are the contents of the uploaded PDF documents:

${context}

User's question: ${query}

Please provide a helpful and accurate answer based on the PDF content above. If the information isn't in the documents, say so clearly. When referencing information, mention which document it came from.`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    
    return { text: response.text() };
  } catch (error) {
    console.error('Gemini API Error:', error);
    return { 
      text: '', 
      error: error instanceof Error ? error.message : 'Failed to get response from AI' 
    };
  }
}

/**
 * Generate a summary of a PDF
 */
export async function generatePDFSummary(
  pdf: PDFDocument,
  language: string = 'en'
): Promise<GeminiResponse> {
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
    
    const languageInstruction = language !== 'en' 
      ? `Please respond in ${getLanguageName(language)}. ` 
      : '';
    
    const prompt = `${languageInstruction}Please provide a comprehensive summary of the following PDF document "${pdf.name}":

${pdf.text}

Provide a clear, well-organized summary that:
1. Highlights the main topics and key points
2. Identifies important concepts, facts, or arguments
3. Notes any conclusions or recommendations
4. Is structured with clear sections if the document covers multiple topics`;

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

/**
 * Generate study questions from a PDF
 */
export async function generatePDFStudyQuestions(
  pdf: PDFDocument,
  count: number = 10,
  difficulty: 'easy' | 'medium' | 'hard' = 'medium',
  language: string = 'en'
): Promise<GeminiResponse> {
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
    
    const languageInstruction = language !== 'en' 
      ? `Please respond in ${getLanguageName(language)}. ` 
      : '';
    
    const difficultyInstructions = {
      easy: 'Focus on basic recall and understanding. Questions should test fundamental concepts.',
      medium: 'Include a mix of recall, understanding, and application questions.',
      hard: 'Focus on analysis, evaluation, and application. Include questions that require critical thinking.',
    };
    
    const prompt = `${languageInstruction}Based on the following PDF document "${pdf.name}", generate ${count} study questions:

${pdf.text}

Difficulty level: ${difficulty}
${difficultyInstructions[difficulty]}

Format each question as follows:
Q1: [Question]
A1: [Answer]

Q2: [Question]
A2: [Answer]

... and so on.

Make sure the questions cover the main topics and important details from the document.`;

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

/**
 * Generate a flowchart/mindmap from PDF content
 */
export async function generatePDFFlowchart(
  pdf: PDFDocument,
  chartType: 'flowchart' | 'mindmap' | 'sequence' = 'mindmap'
): Promise<FlowchartData | { error: string }> {
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
    
    const chartTypePrompts = {
      flowchart: 'Create a Mermaid flowchart (using flowchart TD) that visualizes the main concepts, processes, or steps described in this document.',
      mindmap: 'Create a Mermaid mindmap that organizes the main topics, subtopics, and key concepts from this document.',
      sequence: 'Create a Mermaid sequence diagram if the document describes a process, workflow, or interaction between entities.',
    };
    
    const prompt = `Analyze the following PDF document and ${chartTypePrompts[chartType]}

Document: ${pdf.name}
Content:
${pdf.text.slice(0, 15000)} ${pdf.text.length > 15000 ? '... [truncated]' : ''}

IMPORTANT: Return ONLY valid Mermaid code, nothing else. Do not include any explanation or markdown code blocks. Just the raw Mermaid syntax.

For mindmaps, use this format:
mindmap
  root((Main Topic))
    Topic 1
      Subtopic 1
      Subtopic 2
    Topic 2
      Subtopic 3

For flowcharts, use this format:
flowchart TD
    A[Start] --> B[Step 1]
    B --> C[Step 2]`;

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
      title: `${pdf.name} - ${chartType.charAt(0).toUpperCase() + chartType.slice(1)}`
    };
  } catch (error) {
    console.error('Gemini API Error:', error);
    return { 
      error: error instanceof Error ? error.message : 'Failed to generate flowchart' 
    };
  }
}

/**
 * Explain or simplify PDF content
 */
export async function explainPDFContent(
  pdf: PDFDocument,
  action: 'explain' | 'simplify' | 'elaborate' | 'keypoints',
  language: string = 'en'
): Promise<GeminiResponse> {
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
    
    const languageInstruction = language !== 'en' 
      ? `Please respond in ${getLanguageName(language)}. ` 
      : '';
    
    const actionPrompts = {
      explain: 'Explain the content of this document in detail. Break down complex concepts and provide context where needed.',
      simplify: 'Simplify this document content to make it easier to understand. Use simpler language, shorter sentences, and everyday examples.',
      elaborate: 'Elaborate on the content of this document. Add more details, examples, and explanations to enhance understanding.',
      keypoints: 'Extract and list the key points from this document. Format them as clear, concise bullet points.',
    };
    
    const prompt = `${languageInstruction}${actionPrompts[action]}

Document: ${pdf.name}
Content:
${pdf.text}

Please provide a comprehensive and helpful response.`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    
    return { text: response.text() };
  } catch (error) {
    console.error('Gemini API Error:', error);
    return { 
      text: '', 
      error: error instanceof Error ? error.message : 'Failed to process content' 
    };
  }
}

/**
 * Translate PDF content to another language
 */
export async function translatePDFContent(
  pdf: PDFDocument,
  targetLanguage: string
): Promise<GeminiResponse> {
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
    
    const languageName = getLanguageName(targetLanguage);
    
    const prompt = `Translate the following PDF document content to ${languageName}. Maintain the structure and formatting as much as possible:

Document: ${pdf.name}
Original Content:
${pdf.text}

Provide the full translation:`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    
    return { text: response.text() };
  } catch (error) {
    console.error('Gemini API Error:', error);
    return { 
      text: '', 
      error: error instanceof Error ? error.message : 'Failed to translate content' 
    };
  }
}

/**
 * Generate an audio script from PDF content
 */
export async function generatePDFAudioScript(
  pdf: PDFDocument,
  style: 'lecture' | 'podcast' | 'summary' = 'lecture',
  language: string = 'en'
): Promise<GeminiResponse> {
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
    
    const languageInstruction = language !== 'en' 
      ? `Please respond in ${getLanguageName(language)}. ` 
      : '';
    
    const stylePrompts = {
      lecture: 'Convert this PDF content into a detailed educational lecture script. Explain each concept thoroughly as if teaching to students.',
      podcast: 'Convert this PDF content into an engaging podcast script. Use a conversational, friendly tone that keeps listeners interested.',
      summary: 'Convert this PDF content into a brief audio summary script. Cover only the essential points in a concise manner.',
    };
    
    const prompt = `${languageInstruction}${stylePrompts[style]}

Document: ${pdf.name}
Content:
${pdf.text}

Format the script so it's ready to be read aloud. Include:
- Natural pauses (indicated by "...")
- Emphasis on key points
- Smooth transitions between topics
- A clear introduction and conclusion`;

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

/**
 * Compare multiple PDFs
 */
export async function comparePDFs(
  pdfs: PDFDocument[],
  language: string = 'en'
): Promise<GeminiResponse> {
  try {
    if (pdfs.length < 2) {
      return { text: '', error: 'Need at least 2 PDFs to compare' };
    }
    
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
    
    const languageInstruction = language !== 'en' 
      ? `Please respond in ${getLanguageName(language)}. ` 
      : '';
    
    const documentsText = pdfs.map(pdf => 
      `=== Document: ${pdf.name} ===\n${pdf.text.slice(0, 5000)}${pdf.text.length > 5000 ? '... [truncated]' : ''}`
    ).join('\n\n');
    
    const prompt = `${languageInstruction}Compare and contrast the following ${pdfs.length} PDF documents:

${documentsText}

Provide a detailed comparison that includes:
1. **Common Themes**: What topics or concepts appear in multiple documents?
2. **Key Differences**: What are the main differences between the documents?
3. **Unique Points**: What unique information does each document provide?
4. **Summary Table**: A brief comparison table if applicable
5. **Recommendation**: Which document would be best for what purpose?`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    
    return { text: response.text() };
  } catch (error) {
    console.error('Gemini API Error:', error);
    return { 
      text: '', 
      error: error instanceof Error ? error.message : 'Failed to compare documents' 
    };
  }
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
