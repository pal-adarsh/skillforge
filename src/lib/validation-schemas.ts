/**
 * Comprehensive Input Validation Schemas
 * Using Zod for type-safe validation
 */

import { z } from 'zod';

// Common password validation rules
const passwordRules = z
  .string()
  .min(8, 'Password must be at least 8 characters')
  .max(128, 'Password must not exceed 128 characters')
  .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
  .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
  .regex(/[0-9]/, 'Password must contain at least one number')
  .regex(/[!@#$%^&*(),.?":{}|<>]/, 'Password must contain at least one special character');

// Common email validation
const emailRules = z
  .string()
  .email('Please enter a valid email address')
  .max(254, 'Email must not exceed 254 characters')
  .transform((email) => email.toLowerCase().trim());

// ========================================
// Authentication Schemas
// ========================================

export const LoginSchema = z.object({
  email: emailRules,
  password: z.string().min(1, 'Password is required'),
});

export const SignUpSchema = z.object({
  email: emailRules,
  password: passwordRules,
  confirmPassword: z.string(),
  fullName: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must not exceed 100 characters')
    .regex(/^[a-zA-Z\s'-]+$/, 'Name can only contain letters, spaces, hyphens, and apostrophes')
    .transform((name) => name.trim()),
}).refine((data) => data.password === data.confirmPassword, {
  message: 'Passwords do not match',
  path: ['confirmPassword'],
});

export const PasswordResetSchema = z.object({
  email: emailRules,
});

export const PasswordChangeSchema = z.object({
  currentPassword: z.string().min(1, 'Current password is required'),
  newPassword: passwordRules,
  confirmNewPassword: z.string(),
}).refine((data) => data.newPassword === data.confirmNewPassword, {
  message: 'Passwords do not match',
  path: ['confirmNewPassword'],
}).refine((data) => data.currentPassword !== data.newPassword, {
  message: 'New password must be different from current password',
  path: ['newPassword'],
});

// ========================================
// User Profile Schemas
// ========================================

export const UserProfileSchema = z.object({
  fullName: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must not exceed 100 characters')
    .optional(),
  bio: z
    .string()
    .max(500, 'Bio must not exceed 500 characters')
    .optional(),
  avatarUrl: z
    .string()
    .url('Please enter a valid URL')
    .optional()
    .or(z.literal('')),
});

// ========================================
// File Upload Schemas
// ========================================

export const PDFUploadSchema = z.object({
  file: z.custom<File>((file) => file instanceof File, 'Please select a file')
    .refine((file) => file.type === 'application/pdf', 'Only PDF files are allowed')
    .refine((file) => file.size <= 10 * 1024 * 1024, 'File size must not exceed 10MB'),
});

export const ImageUploadSchema = z.object({
  file: z.custom<File>((file) => file instanceof File, 'Please select a file')
    .refine(
      (file) => ['image/jpeg', 'image/png', 'image/gif', 'image/webp'].includes(file.type),
      'Only JPEG, PNG, GIF, and WebP images are allowed'
    )
    .refine((file) => file.size <= 5 * 1024 * 1024, 'File size must not exceed 5MB'),
});

// ========================================
// Content Creation Schemas
// ========================================

export const NoteSchema = z.object({
  title: z
    .string()
    .min(1, 'Title is required')
    .max(200, 'Title must not exceed 200 characters')
    .transform((title) => title.trim()),
  content: z
    .string()
    .max(100000, 'Content is too long')
    .optional(),
  tags: z
    .array(z.string().max(50, 'Tag must not exceed 50 characters'))
    .max(10, 'Maximum 10 tags allowed')
    .optional(),
});

export const QuizAnswerSchema = z.object({
  questionId: z.string().uuid('Invalid question ID'),
  answer: z
    .string()
    .min(1, 'Answer is required')
    .max(1000, 'Answer is too long'),
  timeTaken: z.number().min(0).max(3600), // Max 1 hour per question
});

// ========================================
// Search & Query Schemas
// ========================================

export const SearchQuerySchema = z.object({
  query: z
    .string()
    .min(1, 'Search query is required')
    .max(500, 'Search query is too long')
    .transform((q) => q.trim()),
  page: z.number().int().min(1).default(1),
  limit: z.number().int().min(1).max(100).default(20),
  sortBy: z.enum(['relevance', 'date', 'title']).default('relevance'),
  sortOrder: z.enum(['asc', 'desc']).default('desc'),
});

// ========================================
// AI/Chat Schemas
// ========================================

export const ChatMessageSchema = z.object({
  message: z
    .string()
    .min(1, 'Message is required')
    .max(10000, 'Message is too long'),
  conversationId: z.string().uuid().optional(),
  context: z
    .string()
    .max(50000, 'Context is too long')
    .optional(),
});

export const AIQuerySchema = z.object({
  query: z
    .string()
    .min(1, 'Query is required')
    .max(5000, 'Query is too long'),
  documentIds: z
    .array(z.string().uuid())
    .max(10, 'Maximum 10 documents can be queried at once')
    .optional(),
  language: z
    .string()
    .length(2, 'Invalid language code')
    .default('en'),
  options: z.object({
    includeSourceCitations: z.boolean().default(true),
    maxTokens: z.number().int().min(100).max(4000).default(2000),
    temperature: z.number().min(0).max(1).default(0.7),
  }).optional(),
});

// ========================================
// Settings Schemas
// ========================================

export const UserSettingsSchema = z.object({
  theme: z.enum(['light', 'dark', 'system']).default('system'),
  language: z.string().min(2).max(5).default('en'),
  notifications: z.object({
    email: z.boolean().default(true),
    push: z.boolean().default(true),
    achievements: z.boolean().default(true),
    reminders: z.boolean().default(true),
  }).optional(),
  accessibility: z.object({
    reduceMotion: z.boolean().default(false),
    highContrast: z.boolean().default(false),
    fontSize: z.enum(['small', 'medium', 'large', 'xlarge']).default('medium'),
  }).optional(),
});

// ========================================
// Utility Functions
// ========================================

/**
 * Safely validate input and return result with typed errors
 */
export function validateInput<T>(
  schema: z.ZodSchema<T>,
  data: unknown
): { success: true; data: T } | { success: false; errors: z.ZodError['errors'] } {
  const result = schema.safeParse(data);
  
  if (result.success) {
    return { success: true, data: result.data };
  }
  
  return { success: false, errors: result.error.errors };
}

/**
 * Get user-friendly error messages from Zod errors
 */
export function formatValidationErrors(errors: z.ZodError['errors']): string[] {
  return errors.map((error) => {
    const path = error.path.join('.');
    return path ? `${path}: ${error.message}` : error.message;
  });
}

/**
 * Validate and sanitize a single field
 */
export function validateField<T>(
  schema: z.ZodSchema<T>,
  value: unknown
): { valid: boolean; value?: T; error?: string } {
  const result = schema.safeParse(value);
  
  if (result.success) {
    return { valid: true, value: result.data };
  }
  
  return { valid: false, error: result.error.errors[0]?.message };
}

// ========================================
// Type Exports
// ========================================

export type LoginInput = z.infer<typeof LoginSchema>;
export type SignUpInput = z.infer<typeof SignUpSchema>;
export type UserProfileInput = z.infer<typeof UserProfileSchema>;
export type NoteInput = z.infer<typeof NoteSchema>;
export type SearchQueryInput = z.infer<typeof SearchQuerySchema>;
export type ChatMessageInput = z.infer<typeof ChatMessageSchema>;
export type AIQueryInput = z.infer<typeof AIQuerySchema>;
export type UserSettingsInput = z.infer<typeof UserSettingsSchema>;
