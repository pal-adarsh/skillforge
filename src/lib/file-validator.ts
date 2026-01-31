/**
 * File Upload Security & Validation
 * Implements comprehensive file validation including magic number verification
 */

import { logger } from './logger';
import { ContentSecurity } from './security';

// ========================================
// File Type Signatures (Magic Numbers)
// ========================================

interface FileSignature {
  mime: string;
  extension: string;
  signatures: string[];
  maxSize: number; // in bytes
}

const FILE_SIGNATURES: Record<string, FileSignature> = {
  pdf: {
    mime: 'application/pdf',
    extension: 'pdf',
    signatures: ['25504446'], // %PDF
    maxSize: 10 * 1024 * 1024, // 10MB
  },
  png: {
    mime: 'image/png',
    extension: 'png',
    signatures: ['89504e47'],
    maxSize: 5 * 1024 * 1024, // 5MB
  },
  jpeg: {
    mime: 'image/jpeg',
    extension: 'jpg',
    signatures: ['ffd8ffe0', 'ffd8ffe1', 'ffd8ffe2', 'ffd8ffe3'],
    maxSize: 5 * 1024 * 1024, // 5MB
  },
  gif: {
    mime: 'image/gif',
    extension: 'gif',
    signatures: ['47494638'],
    maxSize: 5 * 1024 * 1024, // 5MB
  },
  webp: {
    mime: 'image/webp',
    extension: 'webp',
    signatures: ['52494646'], // RIFF (first 4 bytes)
    maxSize: 5 * 1024 * 1024, // 5MB
  },
};

// ========================================
// Validation Functions
// ========================================

interface ValidationResult {
  valid: boolean;
  errors: string[];
  warnings: string[];
}

/**
 * Read file magic numbers
 */
async function getFileMagicNumbers(file: File, bytes: number = 4): Promise<string> {
  const buffer = await file.slice(0, bytes).arrayBuffer();
  const uint8Array = new Uint8Array(buffer);
  return Array.from(uint8Array)
    .map(b => b.toString(16).padStart(2, '0'))
    .join('');
}

/**
 * Validate file type by magic numbers (more secure than extension)
 */
export async function validateFileType(
  file: File,
  allowedTypes: string[]
): Promise<ValidationResult> {
  const result: ValidationResult = {
    valid: true,
    errors: [],
    warnings: [],
  };

  try {
    const magicNumbers = await getFileMagicNumbers(file);
    let matchFound = false;

    for (const type of allowedTypes) {
      const signature = FILE_SIGNATURES[type];
      if (!signature) {
        result.warnings.push(`Unknown file type: ${type}`);
        continue;
      }

      // Check if magic numbers match
      if (signature.signatures.some(sig => magicNumbers.startsWith(sig))) {
        matchFound = true;

        // Also verify MIME type matches
        if (file.type !== signature.mime) {
          result.warnings.push(
            `MIME type mismatch: file reports ${file.type} but content is ${signature.mime}`
          );
        }

        break;
      }
    }

    if (!matchFound) {
      result.valid = false;
      result.errors.push(
        `Invalid file type. Expected: ${allowedTypes.join(', ')}. Got magic numbers: ${magicNumbers}`
      );
    }
  } catch (error) {
    result.valid = false;
    result.errors.push('Failed to read file');
    logger.error('File type validation error', error);
  }

  return result;
}

/**
 * Validate file size
 */
export function validateFileSize(
  file: File,
  maxSize: number
): ValidationResult {
  const result: ValidationResult = {
    valid: true,
    errors: [],
    warnings: [],
  };

  if (file.size === 0) {
    result.valid = false;
    result.errors.push('File is empty');
    return result;
  }

  if (file.size > maxSize) {
    result.valid = false;
    result.errors.push(
      `File too large. Max size: ${formatBytes(maxSize)}, got: ${formatBytes(file.size)}`
    );
  }

  if (file.size > maxSize * 0.9) {
    result.warnings.push('File is close to size limit');
  }

  return result;
}

/**
 * Validate filename
 */
export function validateFilename(filename: string): ValidationResult {
  const result: ValidationResult = {
    valid: true,
    errors: [],
    warnings: [],
  };

  // Check length
  if (filename.length > 255) {
    result.valid = false;
    result.errors.push('Filename too long (max 255 characters)');
  }

  // Check for path traversal
  if (/\.\.[\/\\]/.test(filename)) {
    result.valid = false;
    result.errors.push('Filename contains path traversal characters');
  }

  // Check for dangerous characters
  if (/[<>:"|?*\x00-\x1f]/.test(filename)) {
    result.valid = false;
    result.errors.push('Filename contains invalid characters');
  }

  // Check for multiple extensions (potential disguise)
  const parts = filename.split('.');
  if (parts.length > 2) {
    result.warnings.push('Multiple file extensions detected');
  }

  // Check for suspicious extensions
  const suspiciousExtensions = [
    'exe', 'bat', 'cmd', 'com', 'pif', 'scr', 'vbs', 'js',
    'jar', 'app', 'deb', 'rpm', 'dmg', 'pkg',
  ];
  const ext = filename.split('.').pop()?.toLowerCase();
  if (ext && suspiciousExtensions.includes(ext)) {
    result.valid = false;
    result.errors.push(`Potentially dangerous file extension: .${ext}`);
  }

  return result;
}

/**
 * Scan file content for malicious patterns (for text files)
 */
export async function scanFileContent(file: File): Promise<ValidationResult> {
  const result: ValidationResult = {
    valid: true,
    errors: [],
    warnings: [],
  };

  // Only scan text-based files
  if (!file.type.startsWith('text/') && file.type !== 'application/pdf') {
    return result;
  }

  try {
    // Read first 100KB for scanning
    const sampleSize = Math.min(file.size, 100 * 1024);
    const buffer = await file.slice(0, sampleSize).arrayBuffer();
    const text = new TextDecoder().decode(buffer);

    const { isSafe, threats } = ContentSecurity.detectMaliciousPatterns(text);

    if (!isSafe) {
      result.valid = false;
      result.errors.push(...threats);
    }
  } catch (error) {
    result.warnings.push('Could not scan file content');
    logger.error('File content scan error', error);
  }

  return result;
}

/**
 * Comprehensive file validation
 */
export async function validateFile(
  file: File,
  options: {
    allowedTypes: string[];
    maxSize?: number;
    scanContent?: boolean;
  }
): Promise<ValidationResult> {
  const { allowedTypes, maxSize, scanContent = true } = options;

  const results: ValidationResult[] = [];

  // Validate filename
  results.push(validateFilename(file.name));

  // Validate file type
  results.push(await validateFileType(file, allowedTypes));

  // Validate size
  if (maxSize) {
    results.push(validateFileSize(file, maxSize));
  } else {
    // Use default from signature
    const type = allowedTypes[0];
    const signature = FILE_SIGNATURES[type];
    if (signature) {
      results.push(validateFileSize(file, signature.maxSize));
    }
  }

  // Scan content
  if (scanContent) {
    results.push(await scanFileContent(file));
  }

  // Combine results
  const combined: ValidationResult = {
    valid: results.every(r => r.valid),
    errors: results.flatMap(r => r.errors),
    warnings: results.flatMap(r => r.warnings),
  };

  if (!combined.valid) {
    logger.warn('File validation failed', {
      filename: file.name,
      size: file.size,
      type: file.type,
      errors: combined.errors,
    });
  }

  return combined;
}

/**
 * Sanitize filename for safe storage
 */
export function sanitizeFilename(filename: string): string {
  // Remove path components
  filename = filename.split(/[/\\]/).pop() || 'unnamed';
  
  // Replace invalid characters
  filename = filename.replace(/[^a-zA-Z0-9._-]/g, '_');
  
  // Remove multiple dots
  filename = filename.replace(/\.{2,}/g, '.');
  
  // Limit length
  if (filename.length > 200) {
    const ext = filename.split('.').pop();
    const name = filename.substring(0, 190);
    filename = `${name}.${ext}`;
  }
  
  return filename;
}

/**
 * Generate unique safe filename
 */
export function generateSafeFilename(originalFilename: string, userId?: string): string {
  const sanitized = sanitizeFilename(originalFilename);
  const timestamp = Date.now();
  const random = Math.random().toString(36).substring(2, 8);
  const userPrefix = userId ? `${userId.substring(0, 8)}_` : '';
  
  const ext = sanitized.split('.').pop();
  const nameWithoutExt = sanitized.substring(0, sanitized.lastIndexOf('.'));
  
  return `${userPrefix}${timestamp}_${random}_${nameWithoutExt}.${ext}`;
}

/**
 * Format bytes to human-readable string
 */
function formatBytes(bytes: number): string {
  if (bytes === 0) return '0 Bytes';
  
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
}

export default {
  validateFile,
  validateFileType,
  validateFileSize,
  validateFilename,
  scanFileContent,
  sanitizeFilename,
  generateSafeFilename,
};
