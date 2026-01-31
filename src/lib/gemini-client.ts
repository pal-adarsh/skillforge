/**
 * Secure Gemini API Client
 * Routes all AI requests through Supabase Edge Functions for security
 */

import { supabase } from '@/integrations/supabase/client';
import { logger } from './logger';
import { csrfManager } from './security';

interface GeminiGenerateOptions {
  prompt: string;
  maxTokens?: number;
  temperature?: number;
}

interface GeminiResponse {
  success: boolean;
  text?: string;
  error?: string;
  usage?: {
    promptTokens: number;
    completionTokens: number;
  };
}

/**
 * Generate content using Gemini AI through secure Edge Function
 * This prevents API key exposure and provides rate limiting, auth, and logging
 */
export async function generateWithGemini(
  options: GeminiGenerateOptions
): Promise<GeminiResponse> {
  try {
    // Get authenticated session
    const { data: { session }, error: sessionError } = await supabase.auth.getSession();
    
    if (sessionError || !session) {
      logger.warn('No active session for Gemini API call');
      return {
        success: false,
        error: 'Please sign in to use AI features',
      };
    }

    // Validate input
    if (!options.prompt || typeof options.prompt !== 'string') {
      return {
        success: false,
        error: 'Invalid prompt',
      };
    }

    if (options.prompt.length > 10000) {
      return {
        success: false,
        error: 'Prompt too long (max 10,000 characters)',
      };
    }

    // Call Edge Function with auth and CSRF token
    const { data, error } = await supabase.functions.invoke('gemini-generate', {
      body: {
        prompt: options.prompt,
        maxTokens: options.maxTokens || 2000,
        temperature: options.temperature !== undefined ? options.temperature : 0.7,
      },
      headers: {
        'X-CSRF-Token': csrfManager.getToken(),
      },
    });

    if (error) {
      logger.error('Gemini Edge Function error', error);
      return {
        success: false,
        error: error.message || 'AI generation failed',
      };
    }

    if (!data || !data.success) {
      return {
        success: false,
        error: data?.error || 'AI generation failed',
      };
    }

    logger.info('Gemini API call successful', {
      promptLength: options.prompt.length,
      responseLength: data.text?.length || 0,
    });

    return {
      success: true,
      text: data.text,
      usage: data.usage,
    };
  } catch (error) {
    logger.error('Gemini API client error', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}

/**
 * Chat with Gemini using conversation history
 */
export async function chatWithGemini(
  messages: Array<{ role: 'user' | 'assistant'; content: string }>
): Promise<GeminiResponse> {
  // Convert messages to a single prompt with context
  const prompt = messages
    .map(msg => `${msg.role === 'user' ? 'User' : 'Assistant'}: ${msg.content}`)
    .join('\n\n') + '\n\nAssistant:';

  return generateWithGemini({ prompt });
}

/**
 * Analyze PDF content with AI
 */
export async function analyzePDFWithGemini(
  pdfText: string,
  query?: string
): Promise<GeminiResponse> {
  const prompt = query
    ? `Analyze the following PDF content and answer this question: ${query}\n\nPDF Content:\n${pdfText.substring(0, 8000)}`
    : `Summarize the following PDF content:\n\n${pdfText.substring(0, 8000)}`;

  return generateWithGemini({ prompt, maxTokens: 3000 });
}

/**
 * Generate study notes from content
 */
export async function generateStudyNotes(
  content: string,
  topic: string
): Promise<GeminiResponse> {
  const prompt = `Create comprehensive study notes for the topic "${topic}" based on the following content. Include key points, definitions, and examples.\n\nContent:\n${content}`;

  return generateWithGemini({ prompt, maxTokens: 3000 });
}

/**
 * Generate quiz questions from content
 */
export async function generateQuizQuestions(
  content: string,
  count: number = 5
): Promise<GeminiResponse> {
  const prompt = `Generate ${count} multiple-choice quiz questions based on the following content. Format each question with 4 options and indicate the correct answer.\n\nContent:\n${content.substring(0, 5000)}`;

  return generateWithGemini({ prompt, maxTokens: 2000 });
}

export default {
  generateWithGemini,
  chatWithGemini,
  analyzePDFWithGemini,
  generateStudyNotes,
  generateQuizQuestions,
};
