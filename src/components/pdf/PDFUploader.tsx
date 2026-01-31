import React, { useCallback, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FileUp, 
  File, 
  X, 
  Loader2, 
  AlertCircle, 
  FileText,
  Trash2 
} from 'lucide-react';
import { PDFDocument, extractTextFromPDF, formatFileSize, estimateReadingTime } from './pdf-utils';
import { validateFile } from '@/lib/file-validator';
import { logger } from '@/lib/logger';

interface PDFUploaderProps {
  onPDFsChange: (pdfs: PDFDocument[]) => void;
  pdfs: PDFDocument[];
  maxFiles?: number;
  maxSizeMB?: number;
}

export const PDFUploader: React.FC<PDFUploaderProps> = ({
  onPDFsChange,
  pdfs,
  maxFiles = 5,
  maxSizeMB = 20,
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [processingFile, setProcessingFile] = useState<string | null>(null);

  const processFiles = async (files: FileList | File[]) => {
    setError(null);
    const fileArray = Array.from(files);
    
    // Validate file count
    if (pdfs.length + fileArray.length > maxFiles) {
      setError(`Maximum ${maxFiles} files allowed`);
      return;
    }

    // Validate each file with comprehensive security checks
    const validatedFiles: File[] = [];
    
    for (const file of fileArray) {
      const validation = await validateFile(file, {
        allowedTypes: ['pdf'],
        maxSize: maxSizeMB * 1024 * 1024,
        scanContent: true,
      });

      if (!validation.valid) {
        setError(`${file.name}: ${validation.errors.join(', ')}`);
        logger.warn('File validation failed', {
          filename: file.name,
          errors: validation.errors,
        });
        continue;
      }

      if (validation.warnings.length > 0) {
        logger.warn('File validation warnings', {
          filename: file.name,
          warnings: validation.warnings,
        });
      }

      validatedFiles.push(file);
    }

    if (validatedFiles.length === 0) return;

    setIsProcessing(true);
    const newPdfs: PDFDocument[] = [];

    for (const file of validatedFiles) {
      try {
        setProcessingFile(file.name);
        const extracted = await extractTextFromPDF(file);
        
        if (extracted) {
          const pdfDoc: PDFDocument = {
            id: `pdf-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
            name: file.name,
            text: extracted.text,
            pageCount: extracted.pageCount,
            size: file.size,
            uploadedAt: new Date(),
            metadata: extracted.metadata,
          };
          newPdfs.push(pdfDoc);
        }
      } catch (err) {
        console.error(`Error processing ${file.name}:`, err);
        setError(`Failed to process ${file.name}`);
      }
    }

    setProcessingFile(null);
    setIsProcessing(false);

    if (newPdfs.length > 0) {
      onPDFsChange([...pdfs, ...newPdfs]);
    }
  };

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (e.dataTransfer.files) {
      processFiles(e.dataTransfer.files);
    }
  }, [pdfs, maxFiles, maxSizeMB]);

  const handleFileSelect = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      processFiles(e.target.files);
    }
    e.target.value = '';
  }, [pdfs, maxFiles, maxSizeMB]);

  const removePDF = (id: string) => {
    onPDFsChange(pdfs.filter(pdf => pdf.id !== id));
  };

  const clearAll = () => {
    onPDFsChange([]);
    setError(null);
  };

  return (
    <div className="space-y-4">
      {/* Upload Area */}
      <motion.div
        className={`relative border-2 border-dashed rounded-xl p-8 transition-all duration-200 ${
          isDragging
            ? 'border-primary bg-primary/10'
            : 'border-border hover:border-primary/50 bg-muted/30'
        } ${isProcessing ? 'pointer-events-none opacity-60' : 'cursor-pointer'}`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => !isProcessing && document.getElementById('pdf-input')?.click()}
        whileHover={{ scale: isProcessing ? 1 : 1.01 }}
        whileTap={{ scale: isProcessing ? 1 : 0.99 }}
      >
        <input
          id="pdf-input"
          type="file"
          accept="application/pdf"
          multiple
          className="hidden"
          onChange={handleFileSelect}
          disabled={isProcessing}
        />

        <div className="flex flex-col items-center gap-3 text-center">
          <motion.div
            animate={isDragging ? { scale: 1.1 } : { scale: 1 }}
            className={`p-4 rounded-full ${
              isDragging ? 'bg-indigo-500/20' : 'bg-white/10'
            }`}
          >
            {isProcessing ? (
              <Loader2 className="w-8 h-8 text-indigo-400 animate-spin" />
            ) : (
              <FileUp className={`w-8 h-8 ${isDragging ? 'text-indigo-400' : 'text-white/60'}`} />
            )}
          </motion.div>
          
          <div>
            <p className="text-white font-medium">
              {isProcessing 
                ? `Processing ${processingFile}...` 
                : isDragging 
                  ? 'Drop your PDFs here' 
                  : 'Drag & drop PDFs here'}
            </p>
            <p className="text-sm text-white/50 mt-1">
              or click to browse (max {maxFiles} files, {maxSizeMB}MB each)
            </p>
          </div>
        </div>
      </motion.div>

      {/* Error Message */}
      <AnimatePresence>
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex items-center gap-2 p-3 rounded-lg bg-red-500/20 text-red-300 text-sm"
          >
            <AlertCircle className="w-4 h-4 flex-shrink-0" />
            <span>{error}</span>
            <button 
              onClick={() => setError(null)}
              className="ml-auto hover:text-red-100"
            >
              <X className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Uploaded PDFs List */}
      <AnimatePresence>
        {pdfs.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-2"
          >
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">
                {pdfs.length} PDF{pdfs.length > 1 ? 's' : ''} uploaded
              </span>
              <button
                onClick={clearAll}
                className="text-xs text-destructive hover:text-destructive/80 flex items-center gap-1"
              >
                <Trash2 className="w-3 h-3" />
                Clear all
              </button>
            </div>

            <div className="space-y-2">
              {pdfs.map((pdf, index) => (
                <motion.div
                  key={pdf.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center gap-3 p-3 rounded-lg bg-muted/30 border border-border group hover:bg-muted/50 transition-colors"
                >
                  <div className="p-2 rounded-lg bg-primary/20">
                    <FileText className="w-5 h-5 text-primary" />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <p className="font-medium truncate">{pdf.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {pdf.pageCount} pages • {formatFileSize(pdf.size)} • ~{estimateReadingTime(pdf.text)} min read
                    </p>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      removePDF(pdf.id);
                    }}
                    className="p-2 rounded-lg opacity-0 group-hover:opacity-100 hover:bg-destructive/20 text-muted-foreground hover:text-destructive transition-all"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PDFUploader;
