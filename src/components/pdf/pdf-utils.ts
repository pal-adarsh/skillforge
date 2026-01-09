import * as pdfjsLib from 'pdfjs-dist';

// Set worker source - use CDN for reliability
pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;

export interface PDFDocument {
  id: string;
  name: string;
  size: number;
  pageCount: number;
  text: string;
  uploadedAt: Date;
  metadata?: {
    title?: string;
    author?: string;
    subject?: string;
    creator?: string;
  };
}

export interface PDFExtractionResult {
  text: string;
  pageCount: number;
  metadata?: {
    title?: string;
    author?: string;
    subject?: string;
    creator?: string;
  };
}

/**
 * Extract text content from a PDF file
 */
export async function extractTextFromPDF(file: File): Promise<PDFExtractionResult | null> {
  try {
    const arrayBuffer = await file.arrayBuffer();
    const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
    
    let fullText = '';
    const pageCount = pdf.numPages;
    
    // Extract text from each page
    for (let i = 1; i <= pageCount; i++) {
      const page = await pdf.getPage(i);
      const textContent = await page.getTextContent();
      const pageText = textContent.items
        .map((item: any) => item.str)
        .join(' ');
      fullText += `\n--- Page ${i} ---\n${pageText}\n`;
    }
    
    // Get metadata
    const metadata = await pdf.getMetadata();
    const info = metadata.info as Record<string, any> | undefined;
    
    return {
      text: fullText.trim(),
      pageCount,
      metadata: info ? {
        title: info.Title,
        author: info.Author,
        subject: info.Subject,
        creator: info.Creator,
      } : undefined,
    };
  } catch (error) {
    console.error('PDF extraction error:', error);
    return null;
  }
}

/**
 * Get a preview of the PDF text (first N characters)
 */
export function getPDFPreview(text: string, maxLength: number = 500): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
}

/**
 * Estimate reading time for PDF content
 */
export function estimateReadingTime(text: string): number {
  const wordsPerMinute = 200;
  const words = text.split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}

/**
 * Format file size for display
 */
export function formatFileSize(bytes: number): string {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}
