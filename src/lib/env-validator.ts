/**
 * Environment Variable Validator
 * Ensures critical env vars are present and properly formatted
 */

const requiredEnvVars = {
  VITE_SUPABASE_URL: (value: string) => value.startsWith('https://'),
  VITE_SUPABASE_PUBLISHABLE_KEY: (value: string) => value.length > 20,
  VITE_GEMINI_API_KEY: (value: string) => value.startsWith('AIza'),
} as const;

export function validateEnvironment(): void {
  const errors: string[] = [];

  Object.entries(requiredEnvVars).forEach(([key, validator]) => {
    const value = import.meta.env[key];
    
    if (!value) {
      errors.push(`Missing required environment variable: ${key}`);
    } else if (!validator(value)) {
      errors.push(`Invalid format for environment variable: ${key}`);
    }
  });

  if (errors.length > 0) {
    console.error('Environment validation failed:', errors);
    throw new Error('Application configuration error. Please check environment variables.');
  }
}

// Obfuscate API keys in logs
export function safeLogApiKey(key: string): string {
  if (!key || key.length < 8) return '***';
  return `${key.substring(0, 4)}...${key.substring(key.length - 4)}`;
}
