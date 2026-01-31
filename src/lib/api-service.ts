/**
 * Secure API Service Layer
 * Handles all external API calls with proper error handling, rate limiting, and retry logic
 */

import { logger } from '@/lib/logger';
import { rateLimiter, RATE_LIMITS } from '@/lib/rate-limiter';

// ========================================
// Types
// ========================================

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  code?: string;
  retryable?: boolean;
}

export interface RetryConfig {
  maxRetries: number;
  baseDelay: number;
  maxDelay: number;
}

// ========================================
// Error Classes
// ========================================

export class ApiError extends Error {
  constructor(
    message: string,
    public code: string,
    public statusCode: number = 500,
    public retryable: boolean = false,
    public originalError?: unknown
  ) {
    super(message);
    this.name = 'ApiError';
    Object.setPrototypeOf(this, ApiError.prototype);
  }
}

export class RateLimitError extends ApiError {
  constructor(message: string = 'Rate limit exceeded. Please try again later.') {
    super(message, 'RATE_LIMIT_EXCEEDED', 429, true);
    this.name = 'RateLimitError';
  }
}

export class NetworkError extends ApiError {
  constructor(message: string = 'Network error. Please check your connection.') {
    super(message, 'NETWORK_ERROR', 0, true);
    this.name = 'NetworkError';
  }
}

export class AuthenticationError extends ApiError {
  constructor(message: string = 'Authentication failed. Please sign in again.') {
    super(message, 'AUTH_ERROR', 401, false);
    this.name = 'AuthenticationError';
  }
}

// ========================================
// API Configuration
// ========================================

const DEFAULT_RETRY_CONFIG: RetryConfig = {
  maxRetries: 3,
  baseDelay: 1000,
  maxDelay: 10000,
};

// ========================================
// Utility Functions
// ========================================

/**
 * Sleep for a specified duration
 */
function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Calculate exponential backoff delay
 */
function calculateBackoff(attempt: number, config: RetryConfig): number {
  const delay = config.baseDelay * Math.pow(2, attempt);
  const jitter = Math.random() * 1000;
  return Math.min(delay + jitter, config.maxDelay);
}

/**
 * Check if an error is retryable
 */
function isRetryableError(error: unknown): boolean {
  if (error instanceof ApiError) {
    return error.retryable;
  }
  
  if (error instanceof Error) {
    // Network errors are retryable
    if (error.message.includes('fetch') || error.message.includes('network')) {
      return true;
    }
  }
  
  return false;
}

/**
 * Convert unknown error to ApiError
 */
export function toApiError(error: unknown): ApiError {
  if (error instanceof ApiError) {
    return error;
  }
  
  if (error instanceof Error) {
    // Check for specific error types
    if (error.message.includes('network') || error.message.includes('fetch')) {
      return new NetworkError(error.message);
    }
    
    if (error.message.includes('401') || error.message.includes('unauthorized')) {
      return new AuthenticationError(error.message);
    }
    
    if (error.message.includes('429') || error.message.includes('rate limit')) {
      return new RateLimitError(error.message);
    }
    
    return new ApiError(error.message, 'UNKNOWN_ERROR', 500, false, error);
  }
  
  return new ApiError('An unexpected error occurred', 'UNKNOWN_ERROR', 500, false, error);
}

// ========================================
// Main API Functions
// ========================================

/**
 * Execute an API call with retry logic and error handling
 */
export async function executeWithRetry<T>(
  operation: () => Promise<T>,
  config: Partial<RetryConfig> = {}
): Promise<ApiResponse<T>> {
  const retryConfig = { ...DEFAULT_RETRY_CONFIG, ...config };
  let lastError: ApiError | null = null;
  
  for (let attempt = 0; attempt <= retryConfig.maxRetries; attempt++) {
    try {
      const result = await operation();
      return { success: true, data: result };
    } catch (error) {
      lastError = toApiError(error);
      
      logger.warn(`API call failed (attempt ${attempt + 1}/${retryConfig.maxRetries + 1})`, {
        error: lastError.message,
        code: lastError.code,
        retryable: lastError.retryable,
      });
      
      // Don't retry if not retryable or last attempt
      if (!isRetryableError(error) || attempt === retryConfig.maxRetries) {
        break;
      }
      
      // Wait before retrying
      const delay = calculateBackoff(attempt, retryConfig);
      logger.debug(`Retrying in ${delay}ms...`);
      await sleep(delay);
    }
  }
  
  logger.error('API call failed after all retries', lastError);
  
  return {
    success: false,
    error: lastError?.message || 'Unknown error',
    code: lastError?.code || 'UNKNOWN_ERROR',
    retryable: lastError?.retryable || false,
  };
}

/**
 * Execute an API call with rate limiting
 */
export async function executeWithRateLimit<T>(
  key: string,
  operation: () => Promise<T>,
  rateLimitConfig: { maxRequests: number; windowMs: number } = RATE_LIMITS.GENERAL
): Promise<ApiResponse<T>> {
  // Check rate limit
  if (!rateLimiter.check(key, rateLimitConfig)) {
    logger.warn('Rate limit exceeded', { key });
    return {
      success: false,
      error: 'Rate limit exceeded. Please try again later.',
      code: 'RATE_LIMIT_EXCEEDED',
      retryable: true,
    };
  }
  
  return executeWithRetry(operation);
}

// ========================================
// Gemini API Service
// ========================================

interface GeminiConfig {
  maxTokens?: number;
  temperature?: number;
  model?: string;
}

const DEFAULT_GEMINI_CONFIG: GeminiConfig = {
  maxTokens: 2000,
  temperature: 0.7,
  model: 'gemini-1.5-flash',
};

/**
 * Check if Gemini API is available
 */
export function isGeminiAvailable(): boolean {
  return !!import.meta.env.VITE_GEMINI_API_KEY;
}

/**
 * Generate content using Gemini API
 */
export async function generateContent(
  prompt: string,
  config: Partial<GeminiConfig> = {}
): Promise<ApiResponse<string>> {
  if (!isGeminiAvailable()) {
    return {
      success: false,
      error: 'AI features are not available. Please configure the API key.',
      code: 'API_NOT_CONFIGURED',
      retryable: false,
    };
  }
  
  const fullConfig = { ...DEFAULT_GEMINI_CONFIG, ...config };
  
  return executeWithRateLimit('gemini_generate', async () => {
    const { GoogleGenerativeAI } = await import('@google/generative-ai');
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: fullConfig.model! });
    
    const result = await model.generateContent({
      contents: [{ role: 'user', parts: [{ text: prompt }] }],
      generationConfig: {
        maxOutputTokens: fullConfig.maxTokens,
        temperature: fullConfig.temperature,
      },
    });
    
    const response = result.response;
    const text = response.text();
    
    if (!text) {
      throw new ApiError('No response generated', 'EMPTY_RESPONSE', 500, true);
    }
    
    return text;
  }, RATE_LIMITS.GEMINI_API);
}

/**
 * Chat with Gemini using conversation history
 */
export async function chatWithGemini(
  messages: Array<{ role: 'user' | 'model'; content: string }>,
  config: Partial<GeminiConfig> = {}
): Promise<ApiResponse<string>> {
  if (!isGeminiAvailable()) {
    return {
      success: false,
      error: 'AI features are not available. Please configure the API key.',
      code: 'API_NOT_CONFIGURED',
      retryable: false,
    };
  }
  
  const fullConfig = { ...DEFAULT_GEMINI_CONFIG, ...config };
  
  return executeWithRateLimit('gemini_chat', async () => {
    const { GoogleGenerativeAI } = await import('@google/generative-ai');
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: fullConfig.model! });
    
    const chat = model.startChat({
      history: messages.slice(0, -1).map((msg) => ({
        role: msg.role,
        parts: [{ text: msg.content }],
      })),
      generationConfig: {
        maxOutputTokens: fullConfig.maxTokens,
        temperature: fullConfig.temperature,
      },
    });
    
    const lastMessage = messages[messages.length - 1];
    const result = await chat.sendMessage(lastMessage.content);
    const response = result.response;
    const text = response.text();
    
    if (!text) {
      throw new ApiError('No response generated', 'EMPTY_RESPONSE', 500, true);
    }
    
    return text;
  }, RATE_LIMITS.GEMINI_API);
}

// ========================================
// Health Check
// ========================================

export interface HealthStatus {
  status: 'healthy' | 'degraded' | 'unhealthy';
  services: {
    gemini: { available: boolean; configured: boolean };
    supabase: { available: boolean };
    storage: { available: boolean };
  };
  timestamp: string;
}

/**
 * Check health of all services
 */
export async function checkHealth(): Promise<HealthStatus> {
  const status: HealthStatus = {
    status: 'healthy',
    services: {
      gemini: { available: false, configured: isGeminiAvailable() },
      supabase: { available: false },
      storage: { available: false },
    },
    timestamp: new Date().toISOString(),
  };
  
  // Check Gemini
  if (status.services.gemini.configured) {
    try {
      const result = await generateContent('Hello', { maxTokens: 10 });
      status.services.gemini.available = result.success;
    } catch {
      status.services.gemini.available = false;
    }
  }
  
  // Check localStorage
  try {
    const testKey = '__health_check__';
    localStorage.setItem(testKey, 'test');
    localStorage.removeItem(testKey);
    status.services.storage.available = true;
  } catch {
    status.services.storage.available = false;
  }
  
  // Check Supabase (basic connectivity)
  try {
    const { supabase } = await import('@/integrations/supabase/client');
    const { error } = await supabase.from('profiles').select('id').limit(1);
    status.services.supabase.available = !error;
  } catch {
    status.services.supabase.available = false;
  }
  
  // Determine overall status
  const allServicesUp = Object.values(status.services).every(
    (s) => 'available' in s ? s.available : true
  );
  const anyServiceDown = Object.values(status.services).some(
    (s) => 'available' in s && !s.available
  );
  
  if (!allServicesUp && anyServiceDown) {
    status.status = 'degraded';
  }
  
  const criticalServicesDown = !status.services.supabase.available;
  if (criticalServicesDown) {
    status.status = 'unhealthy';
  }
  
  return status;
}

export default {
  executeWithRetry,
  executeWithRateLimit,
  generateContent,
  chatWithGemini,
  checkHealth,
  isGeminiAvailable,
  toApiError,
};
