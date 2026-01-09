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
import PDFUploader from '../components/pdf/PDFUploader';
import PDFAIPanel from '../components/pdf/PDFAIPanel';
import { PDFDocument } from '../components/pdf/pdf-utils';

const PDFAnalyzer: React.FC = () => {
  const navigate = useNavigate();
  const [pdfs, setPdfs] = useState<PDFDocument[]>([]);
  const [selectedPDF, setSelectedPDF] = useState<PDFDocument | null>(null);
  const [showAIPanel, setShowAIPanel] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-black/30 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => navigate('/dashboard')}
                className="p-2 rounded-lg hover:bg-white/10 text-white/60 hover:text-white transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-white">PDF Analyzer</h1>
                  <p className="text-sm text-white/60">AI-powered PDF analysis & Q&A</p>
                </div>
              </div>
            </div>

            {pdfs.length > 0 && (
              <button
                onClick={() => setShowAIPanel(!showAIPanel)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all ${
                  showAIPanel
                    ? 'bg-indigo-600 text-white'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                <Bot className="w-5 h-5" />
                {showAIPanel ? 'Hide AI Panel' : 'Show AI Panel'}
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
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
              className="rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-indigo-500/20">
                  <Upload className="w-5 h-5 text-indigo-400" />
                </div>
                <h2 className="text-lg font-semibold text-white">Upload PDFs</h2>
              </div>
              <PDFUploader pdfs={pdfs} onPDFsChange={setPdfs} maxFiles={5} maxSizeMB={20} />
            </motion.div>

            {/* Features Info */}
            {pdfs.length === 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 backdrop-blur-xl border border-white/10 p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-lg font-semibold text-white">AI-Powered Features</h2>
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
                      className="p-4 rounded-xl bg-white/5 border border-white/10"
                    >
                      <h3 className="text-white font-medium">{feature.title}</h3>
                      <p className="text-sm text-white/60 mt-1">{feature.desc}</p>
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
                className="rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-6"
              >
                <h2 className="text-lg font-semibold text-white mb-4">Uploaded Documents</h2>
                <div className="space-y-3">
                  {pdfs.map((pdf) => (
                    <motion.div
                      key={pdf.id}
                      layoutId={pdf.id}
                      className="p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors cursor-pointer"
                      onClick={() => {
                        setSelectedPDF(pdf);
                        setShowAIPanel(true);
                      }}
                    >
                      <div className="flex items-start gap-3">
                        <div className="p-2 rounded-lg bg-indigo-500/20">
                          <FileText className="w-5 h-5 text-indigo-400" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-white font-medium truncate">{pdf.name}</h3>
                          <p className="text-sm text-white/60 mt-1">
                            {pdf.pageCount} pages • {pdf.text.split(/\s+/).length.toLocaleString()} words
                          </p>
                          <p className="text-xs text-white/40 mt-2 line-clamp-2">
                            {pdf.text.slice(0, 200)}...
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                <button
                  onClick={() => setShowAIPanel(true)}
                  className="w-full mt-4 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium hover:from-indigo-700 hover:to-purple-700 transition-all"
                >
                  <Sparkles className="w-5 h-5" />
                  Analyze with AI
                </button>
              </motion.div>
            )}
          </motion.div>

          {/* Right Side - AI Panel */}
          {showAIPanel && pdfs.length > 0 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 overflow-hidden"
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
  );
};

export default PDFAnalyzer;
