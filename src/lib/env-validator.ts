/**
 * Environment Variable Validator
 * Ensures critical env vars are present and properly formatted
 */

import { logger } from './logger';

// Environment variable configuration with validation rules
interface EnvVarConfig {
  required: boolean;
  validator?: (value: string) => boolean;
  description: string;
}

const envVarConfigs: Record<string, EnvVarConfig> = {
  VITE_SUPABASE_URL: {
    required: false, // Has fallback
    validator: (value: string) => value.startsWith('https://'),
    description: 'Supabase project URL',
  },
  VITE_SUPABASE_ANON_KEY: {
    required: false, // Has fallback
    validator: (value: string) => value.length > 20,
    description: 'Supabase anonymous/public key',
  },
  VITE_GEMINI_API_KEY: {
    required: false, // Optional - AI features will be disabled without it
    validator: (value: string) => value.startsWith('AIza'),
    description: 'Google Gemini API key for AI features',
  },
} as const;

export interface EnvValidationResult {
  isValid: boolean;
  errors: string[];
  warnings: string[];
  features: {
    ai: boolean;
    supabase: boolean;
  };
}

/**
 * Validate all environment variables
 */
export function validateEnvironment(): EnvValidationResult {
  const result: EnvValidationResult = {
    isValid: true,
    errors: [],
    warnings: [],
    features: {
      ai: false,
      supabase: false,
    },
  };

  Object.entries(envVarConfigs).forEach(([key, config]) => {
    const value = import.meta.env[key];
    
    if (!value) {
      if (config.required) {
        result.errors.push(`Missing required environment variable: ${key} (${config.description})`);
        result.isValid = false;
      } else {
        result.warnings.push(`Optional environment variable not set: ${key} (${config.description})`);
      }
    } else if (config.validator && !config.validator(value)) {
      result.errors.push(`Invalid format for environment variable: ${key} (${config.description})`);
      result.isValid = false;
    }
  });

  // Check feature availability
  result.features.ai = !!import.meta.env.VITE_GEMINI_API_KEY;
  result.features.supabase = !!(import.meta.env.VITE_SUPABASE_URL || import.meta.env.VITE_SUPABASE_ANON_KEY);

  // Log results
  if (result.errors.length > 0) {
    logger.error('Environment validation failed', { errors: result.errors });
  }
  if (result.warnings.length > 0) {
    logger.warn('Environment validation warnings', { warnings: result.warnings });
  }

  return result;
}

/**
 * Check if a specific feature is available
 */
export function isFeatureAvailable(feature: 'ai' | 'supabase'): boolean {
  const result = validateEnvironment();
  return result.features[feature];
}

/**
 * Obfuscate API keys in logs
 */
export function safeLogApiKey(key: string): string {
  if (!key || key.length < 8) return '***';
  return `${key.substring(0, 4)}...${key.substring(key.length - 4)}`;
}

/**
 * Get environment variable with type safety
 */
export function getEnvVar(key: string, defaultValue?: string): string {
  const value = import.meta.env[key];
  if (!value && defaultValue !== undefined) {
    return defaultValue;
  }
  return value || '';
}

/**
 * Check if running in production
 */
export function isProduction(): boolean {
  return import.meta.env.PROD || import.meta.env.MODE === 'production';
}

/**
 * Check if running in development
 */
export function isDevelopment(): boolean {
  return import.meta.env.DEV || import.meta.env.MODE === 'development';
}
