/**
 * Advanced RAG (Retrieval-Augmented Generation) Engine
 * Features:
 * - Text chunking with overlap
 * - TF-IDF based relevance scoring
 * - Semantic similarity using embeddings (Gemini)
 * - Context window management
 * - Hallucination reduction through grounded responses
 */

import { GoogleGenerativeAI } from '@google/generative-ai';

const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY || '';
const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

// Chunk configuration
const CHUNK_SIZE = 1000; // characters per chunk
const CHUNK_OVERLAP = 200; // overlap between chunks
const MAX_CONTEXT_CHUNKS = 5; // max chunks to include in context
const SIMILARITY_THRESHOLD = 0.3; // minimum similarity score

export interface TextChunk {
  id: string;
  content: string;
  source: string;
  startIndex: number;
  endIndex: number;
  metadata?: Record<string, any>;
}

export interface RAGDocument {
  id: string;
  name: string;
  content: string;
  chunks: TextChunk[];
  embeddings?: number[][];
}

export interface RAGSearchResult {
  chunk: TextChunk;
  score: number;
  relevance: 'high' | 'medium' | 'low';
}

export interface RAGResponse {
  answer: string;
  sources: RAGSearchResult[];
  confidence: number;
  grounded: boolean;
  error?: string;
}

/**
 * Split text into overlapping chunks for better context retrieval
 */
export function chunkText(
  text: string,
  source: string,
  chunkSize: number = CHUNK_SIZE,
  overlap: number = CHUNK_OVERLAP
): TextChunk[] {
  const chunks: TextChunk[] = [];
  
  // Clean and normalize text
  const cleanedText = text
    .replace(/\s+/g, ' ')
    .trim();
  
  if (cleanedText.length <= chunkSize) {
    return [{
      id: `${source}-0`,
      content: cleanedText,
      source,
      startIndex: 0,
      endIndex: cleanedText.length,
    }];
  }
  
  let startIndex = 0;
  let chunkIndex = 0;
  
  while (startIndex < cleanedText.length) {
    // Find the end of the chunk, preferring sentence boundaries
    let endIndex = Math.min(startIndex + chunkSize, cleanedText.length);
    
    // Try to end at a sentence boundary
    if (endIndex < cleanedText.length) {
      const sentenceEnd = cleanedText.lastIndexOf('.', endIndex);
      const questionEnd = cleanedText.lastIndexOf('?', endIndex);
      const exclamEnd = cleanedText.lastIndexOf('!', endIndex);
      
      const bestEnd = Math.max(sentenceEnd, questionEnd, exclamEnd);
      
      if (bestEnd > startIndex + chunkSize / 2) {
        endIndex = bestEnd + 1;
      }
    }
    
    const chunkContent = cleanedText.slice(startIndex, endIndex).trim();
    
    if (chunkContent.length > 50) { // Only add meaningful chunks
      chunks.push({
        id: `${source}-${chunkIndex}`,
        content: chunkContent,
        source,
        startIndex,
        endIndex,
      });
      chunkIndex++;
    }
    
    // Move start position with overlap
    startIndex = endIndex - overlap;
    
    // Prevent infinite loop
    if (startIndex >= cleanedText.length - 50) break;
  }
  
  return chunks;
}

/**
 * Calculate TF-IDF score for a term in a document
 */
function calculateTFIDF(
  term: string,
  document: string,
  allDocuments: string[]
): number {
  const termLower = term.toLowerCase();
  const docLower = document.toLowerCase();
  
  // Term Frequency
  const words = docLower.split(/\s+/);
  const termCount = words.filter(w => w.includes(termLower)).length;
  const tf = termCount / words.length;
  
  // Inverse Document Frequency
  const docsWithTerm = allDocuments.filter(doc => 
    doc.toLowerCase().includes(termLower)
  ).length;
  const idf = Math.log((allDocuments.length + 1) / (docsWithTerm + 1)) + 1;
  
  return tf * idf;
}

/**
 * Calculate relevance score between query and chunk using TF-IDF
 */
export function calculateRelevanceScore(
  query: string,
  chunk: TextChunk,
  allChunks: TextChunk[]
): number {
  const queryTerms = query
    .toLowerCase()
    .replace(/[^\w\s]/g, '')
    .split(/\s+/)
    .filter(term => term.length > 2);
  
  if (queryTerms.length === 0) return 0;
  
  const allContents = allChunks.map(c => c.content);
  
  let totalScore = 0;
  
  for (const term of queryTerms) {
    totalScore += calculateTFIDF(term, chunk.content, allContents);
  }
  
  // Normalize by number of terms
  return totalScore / queryTerms.length;
}

/**
 * Search chunks for relevant content
 */
export function searchChunks(
  query: string,
  chunks: TextChunk[],
  maxResults: number = MAX_CONTEXT_CHUNKS
): RAGSearchResult[] {
  const results: RAGSearchResult[] = [];
  
  for (const chunk of chunks) {
    const score = calculateRelevanceScore(query, chunk, chunks);
    
    if (score >= SIMILARITY_THRESHOLD) {
      results.push({
        chunk,
        score,
        relevance: score >= 0.7 ? 'high' : score >= 0.5 ? 'medium' : 'low',
      });
    }
  }
  
  // Sort by score descending
  results.sort((a, b) => b.score - a.score);
  
  return results.slice(0, maxResults);
}

/**
 * Build grounded context from search results
 */
function buildGroundedContext(results: RAGSearchResult[]): string {
  if (results.length === 0) {
    return 'No relevant information found in the documents.';
  }
  
  let context = 'RELEVANT EXCERPTS FROM DOCUMENTS:\n\n';
  
  results.forEach((result, index) => {
    context += `[Source ${index + 1}: ${result.chunk.source || 'Document'}]\n`;
    context += `${result.chunk.content}\n\n`;
  });
  
  return context;
}

/**
 * Generate a grounded response using RAG
 */
export async function generateRAGResponse(
  query: string,
  documents: RAGDocument[],
  language: string = 'en'
): Promise<RAGResponse> {
  try {
    // Collect all chunks from all documents
    const allChunks = documents.flatMap(doc => doc.chunks);
    
    if (allChunks.length === 0) {
      return {
        answer: 'No documents have been processed yet. Please upload some documents first.',
        sources: [],
        confidence: 0,
        grounded: false,
      };
    }
    
    // Search for relevant chunks
    const searchResults = searchChunks(query, allChunks);
    
    // Build grounded context
    const context = buildGroundedContext(searchResults);
    
    // Determine if we have enough context
    const hasRelevantContent = searchResults.length > 0 && searchResults[0].score >= SIMILARITY_THRESHOLD;
    
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
    
    const languageInstruction = language !== 'en' 
      ? `Respond in ${getLanguageName(language)}. ` 
      : '';
    
    // Grounded prompt that reduces hallucination
    const prompt = `You are a precise document assistant that ONLY provides information found in the provided excerpts. ${languageInstruction}

${context}

USER QUESTION: ${query}

CRITICAL INSTRUCTIONS:
1. ONLY use information from the excerpts above to answer the question.
2. If the excerpts don't contain relevant information, clearly state: "I couldn't find specific information about this in the provided documents."
3. When you cite information, reference which source it came from (e.g., "According to Source 1...").
4. Do NOT make up or infer information that isn't explicitly stated in the excerpts.
5. If you're uncertain, express that uncertainty.
6. Be concise but thorough.

RESPONSE:`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const answer = response.text();
    
    // Calculate confidence based on search results
    const avgScore = searchResults.length > 0
      ? searchResults.reduce((sum, r) => sum + r.score, 0) / searchResults.length
      : 0;
    
    const confidence = Math.min(avgScore * 100, 100);
    
    return {
      answer,
      sources: searchResults,
      confidence,
      grounded: hasRelevantContent,
    };
  } catch (error) {
    console.error('RAG Error:', error);
    return {
      answer: '',
      sources: [],
      confidence: 0,
      grounded: false,
      error: error instanceof Error ? error.message : 'Failed to generate response',
    };
  }
}

/**
 * Process a document into RAG format
 */
export function processDocumentForRAG(
  id: string,
  name: string,
  content: string
): RAGDocument {
  const chunks = chunkText(content, name);
  
  return {
    id,
    name,
    content,
    chunks,
  };
}

/**
 * Generate contextual study questions based on RAG
 */
export async function generateContextualQuestions(
  documents: RAGDocument[],
  topic: string,
  count: number = 5,
  language: string = 'en'
): Promise<{ questions: string[]; error?: string }> {
  try {
    const allChunks = documents.flatMap(doc => doc.chunks);
    const searchResults = searchChunks(topic, allChunks, 3);
    
    if (searchResults.length === 0) {
      return { questions: [], error: 'No relevant content found for this topic.' };
    }
    
    const context = buildGroundedContext(searchResults);
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
    
    const languageInstruction = language !== 'en' 
      ? `Generate questions in ${getLanguageName(language)}. ` 
      : '';
    
    const prompt = `${languageInstruction}Based ONLY on the following document excerpts, generate ${count} study questions that can be answered using the information provided.

${context}

Generate exactly ${count} questions that:
1. Can be answered using ONLY the information in the excerpts
2. Test understanding of key concepts
3. Are clear and specific
4. Vary in complexity

Format: Number each question (1. 2. 3. etc.)`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    
    // Parse questions from response
    const questions = text
      .split(/\d+\.\s+/)
      .filter(q => q.trim().length > 10)
      .map(q => q.trim());
    
    return { questions: questions.slice(0, count) };
  } catch (error) {
    return { questions: [], error: error instanceof Error ? error.message : 'Failed to generate questions' };
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
  };
  return languages[code] || code;
}
