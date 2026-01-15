import { GoogleGenerativeAI } from "@google/generative-ai";

// Try to initialize Gemini client; in many setups this package is intended for server-side
// usage. We still attempt to initialize it, but handle failures gracefully and provide
// a local fallback so the Docs UI remains functional even if the API is unreachable.
const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY || "";
let genAI: any | null = null;

try {
  genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
} catch (err) {
  // Not fatal — we'll use a local fallback if the client can't be constructed.
  console.warn("Gemini client initialization failed (running fallback):", err);
  genAI = null;
}

export function localSummaryFallback(content: string, maxSentences = 3): string {
  const sentences = content
    .replace(/\s+/g, ' ')
    .split(/(?<=[.!?])\s+/)
    .map(s => s.trim())
    .filter(Boolean);

  if (sentences.length === 0) return '';
  return sentences.slice(0, maxSentences).join(' ').slice(0, 1000).trim();
}

export function localQuestionsFallback(content: string, count = 5): string[] {
  // Simple heuristic fallback: pick important sentences and turn them into generic prompts.
  const sentences = content
    .replace(/\s+/g, ' ')
    .split(/(?<=[.!?])\s+/)
    .map(s => s.trim())
    .filter(Boolean)
    .slice(0, Math.max(count, 10));

  const questions: string[] = [];

  for (let i = 0; i < Math.min(count, sentences.length); i++) {
    const s = sentences[i];
    // If sentence contains ' is ' try to form a 'What is X?' question
    const isMatch = s.match(/\b([A-Z][^\s,.-]{2,}?)\s+is\b/i);
    if (isMatch) {
      const subject = isMatch[1];
      questions.push(`What is ${subject}?`);
      continue;
    }

    // Fallback: ask to summarize/explain the sentence
    const short = s.length > 80 ? s.slice(0, 77).trim() + '...' : s;
    questions.push(`Explain: ${short}`);
  }

  // If we still have fewer than requested, pad with generic comprehension prompts
  while (questions.length < count) {
    questions.push('Describe the main idea of the text.');
  }

  return questions;
}

/**
 * Generate a summary of the provided content using Gemini AI (with local fallback)
 */
export async function generateSummary(content: string): Promise<string> {
  if (!content || content.trim().length === 0) return '';

  // If client not available, return local fallback
  if (!genAI) {
    return localSummaryFallback(content);
  }

  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

    const prompt = `Please provide a concise and comprehensive summary of the following content. Focus on the key points, main ideas, and important details:\n\n${content}\n\nSummary:`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = typeof response.text === 'function' ? response.text() : String(response);

    if (!text || !text.trim()) {
      return localSummaryFallback(content);
    }

    return text.trim();
  } catch (error) {
    console.error('Error generating summary:', error);
    return localSummaryFallback(content);
  }
}

/**
 * Generate questions based on the provided content using Gemini AI (with local fallback)
 */
export async function generateQuestions(content: string): Promise<string[]> {
  if (!content || content.trim().length === 0) return [];

  if (!genAI) {
    return localQuestionsFallback(content);
  }

  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

    const prompt = `Based on the following content, generate 5-7 thoughtful questions that test understanding of the material. Include a mix of recall, comprehension, application and analysis questions. Provide ONLY the questions, one per line, without numbering or prefixes.\n\nContent:\n${content}\n\nQuestions:`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = typeof response.text === 'function' ? response.text() : String(response);

    if (!text || !text.trim()) {
      return localQuestionsFallback(content);
    }

    const questions = text
      .split(/\r?\n/)
      .map(q => q.trim())
      .filter(q => q.length > 0 && !q.match(/^[0-9]+\./))
      .map(q => q.replace(/^[-•*]\s*/, ''))
      .filter(q => q.endsWith('?') || q.toLowerCase().startsWith('explain') || q.toLowerCase().startsWith('describe'));

    return questions.length > 0 ? questions.slice(0, 7) : localQuestionsFallback(content, 5);
  } catch (error) {
    console.error('Error generating questions:', error);
    return localQuestionsFallback(content);
  }
}
