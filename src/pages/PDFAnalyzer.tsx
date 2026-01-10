import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  Sparkles, 
  ArrowLeft, 
  Upload,
  Bot,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import PDFUploader from '../components/pdf/PDFUploader';
import PDFAIPanel from '../components/pdf/PDFAIPanel';
import { PDFDocument } from '../components/pdf/pdf-utils';

const PDFAnalyzer: React.FC = () => {
  const navigate = useNavigate();
  const [pdfs, setPdfs] = useState<PDFDocument[]>([]);
  const [selectedPDF, setSelectedPDF] = useState<PDFDocument | null>(null);
  const [showAIPanel, setShowAIPanel] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 pt-24">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-4">
              <button
                onClick={() => navigate('/dashboard')}
                className="p-2 rounded-lg hover:bg-muted transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-gradient-to-br from-primary to-accent">
                  <FileText className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold">PDF Analyzer</h1>
                  <p className="text-muted-foreground">AI-powered PDF analysis & Q&A</p>
                </div>
              </div>
            </div>

            {pdfs.length > 0 && (
              <Button
                onClick={() => setShowAIPanel(!showAIPanel)}
                variant={showAIPanel ? "default" : "outline"}
                className="gap-2"
              >
                <Bot className="w-4 h-4" />
                {showAIPanel ? 'Hide AI Panel' : 'Show AI Panel'}
              </Button>
            )}
          </div>
        </motion.div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto">
        <div className={`grid ${showAIPanel && pdfs.length > 0 ? 'grid-cols-1 lg:grid-cols-2 gap-6' : 'grid-cols-1'}`}>
          {/* Left Side - Upload and PDFs */}
          <motion.div
            layout
            className="space-y-6"
          >
            {/* Upload Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass-card rounded-xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/20">
                  <Upload className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-lg font-semibold">Upload PDFs</h2>
              </div>
              <PDFUploader pdfs={pdfs} onPDFsChange={setPdfs} maxFiles={5} maxSizeMB={20} />
            </motion.div>

            {/* Features Info */}
            {pdfs.length === 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="glass-card rounded-xl p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-primary to-accent">
                    <Sparkles className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <h2 className="text-lg font-semibold">AI-Powered Features</h2>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { title: 'Ask Questions', desc: 'Chat with your PDFs using Gemini AI' },
                    { title: 'Summarize', desc: 'Get concise summaries of documents' },
                    { title: 'Study Questions', desc: 'Generate quiz questions for learning' },
                    { title: 'Key Points', desc: 'Extract main ideas and concepts' },
                    { title: 'Simplify', desc: 'Make complex content easier to understand' },
                    { title: 'Translate', desc: 'Translate to 15+ languages' },
                    { title: 'Mind Maps', desc: 'Visualize content as flowcharts' },
                    { title: 'Audio Scripts', desc: 'Convert to audio-friendly format' },
                  ].map((feature, idx) => (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2 + idx * 0.05 }}
                      className="p-4 rounded-xl bg-muted/50 border border-border"
                    >
                      <h3 className="font-medium">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{feature.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* PDF Preview Cards */}
            {pdfs.length > 0 && !showAIPanel && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="glass-card rounded-xl p-6"
              >
                <h2 className="text-lg font-semibold mb-4">Uploaded Documents</h2>
                <div className="space-y-3">
                  {pdfs.map((pdf) => (
                    <motion.div
                      key={pdf.id}
                      layoutId={pdf.id}
                      className="p-4 rounded-xl bg-muted/50 border border-border hover:bg-muted transition-colors cursor-pointer"
                      onClick={() => {
                        setSelectedPDF(pdf);
                        setShowAIPanel(true);
                      }}
                    >
                      <div className="flex items-start gap-3">
                        <div className="p-2 rounded-lg bg-primary/20">
                          <FileText className="w-5 h-5 text-primary" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-medium truncate">{pdf.name}</h3>
                          <p className="text-sm text-muted-foreground mt-1">
                            {pdf.pageCount} pages • {pdf.text.split(/\s+/).length.toLocaleString()} words
                          </p>
                          <p className="text-xs text-muted-foreground mt-2 line-clamp-2">
                            {pdf.text.slice(0, 200)}...
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                <Button
                  onClick={() => setShowAIPanel(true)}
                  className="w-full mt-4 gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  Analyze with AI
                </Button>
              </motion.div>
            )}
          </motion.div>

          {/* Right Side - AI Panel */}
          {showAIPanel && pdfs.length > 0 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="glass-card rounded-xl overflow-hidden"
              style={{ height: 'calc(100vh - 180px)' }}
            >
              <PDFAIPanel
                pdfs={pdfs}
                selectedPDF={selectedPDF}
                onSelectPDF={setSelectedPDF}
              />
            </motion.div>
          )}
        </div>
      </main>
      </div>
    </div>
  );
};

export default PDFAnalyzer;
