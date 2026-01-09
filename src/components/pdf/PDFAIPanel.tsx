import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MessageSquare,
  Send,
  Loader2,
  FileText,
  Sparkles,
  BookOpen,
  Languages,
  Volume2,
  GitBranch,
  Copy,
  Check,
  ChevronDown,
  Lightbulb,
  HelpCircle,
  FileSearch,
  Scale,
  Mic,
  StopCircle,
} from 'lucide-react';
import { PDFDocument } from './pdf-utils';
import {
  askGeminiAboutPDF,
  generatePDFSummary,
  generatePDFStudyQuestions,
  generatePDFFlowchart,
  explainPDFContent,
  translatePDFContent,
  generatePDFAudioScript,
  comparePDFs,
  SUPPORTED_LANGUAGES,
} from './pdf-gemini';
import { MermaidFlowchart } from '../notes/MermaidFlowchart';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

interface PDFAIPanelProps {
  pdfs: PDFDocument[];
  selectedPDF: PDFDocument | null;
  onSelectPDF: (pdf: PDFDocument | null) => void;
}

export const PDFAIPanel: React.FC<PDFAIPanelProps> = ({
  pdfs,
  selectedPDF,
  onSelectPDF,
}) => {
  const [activeTab, setActiveTab] = useState<'chat' | 'flowchart' | 'audio'>('chat');
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [flowchartCode, setFlowchartCode] = useState<string>('');
  const [flowchartType, setFlowchartType] = useState<'mindmap' | 'flowchart'>('mindmap');
  const [audioScript, setAudioScript] = useState('');
  const [audioStyle, setAudioStyle] = useState<'lecture' | 'podcast' | 'summary'>('lecture');
  const [isPlaying, setIsPlaying] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const speechRef = useRef<SpeechSynthesisUtterance | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const addMessage = (role: 'user' | 'assistant', content: string) => {
    const newMessage: Message = {
      id: `msg-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      role,
      content,
      timestamp: new Date(),
    };
    setMessages(prev => [...prev, newMessage]);
    return newMessage;
  };

  const handleSend = async () => {
    if (!inputValue.trim() || isLoading || pdfs.length === 0) return;

    const query = inputValue.trim();
    setInputValue('');
    addMessage('user', query);
    setIsLoading(true);

    try {
      const docsToSearch = selectedPDF ? [selectedPDF] : pdfs;
      const response = await askGeminiAboutPDF(query, docsToSearch, selectedLanguage);
      
      if (response.error) {
        addMessage('assistant', `❌ Error: ${response.error}`);
      } else {
        addMessage('assistant', response.text);
      }
    } catch (error) {
      addMessage('assistant', '❌ Failed to get response. Please try again.');
    }

    setIsLoading(false);
  };

  const handleQuickAction = async (action: string) => {
    if (isLoading || pdfs.length === 0) return;

    const targetPDF = selectedPDF || pdfs[0];
    setIsLoading(true);

    try {
      let response;
      switch (action) {
        case 'summary':
          addMessage('user', `📄 Generate summary of "${targetPDF.name}"`);
          response = await generatePDFSummary(targetPDF, selectedLanguage);
          break;
        case 'questions':
          addMessage('user', `❓ Generate study questions from "${targetPDF.name}"`);
          response = await generatePDFStudyQuestions(targetPDF, 10, 'medium', selectedLanguage);
          break;
        case 'keypoints':
          addMessage('user', `🎯 Extract key points from "${targetPDF.name}"`);
          response = await explainPDFContent(targetPDF, 'keypoints', selectedLanguage);
          break;
        case 'simplify':
          addMessage('user', `✨ Simplify content of "${targetPDF.name}"`);
          response = await explainPDFContent(targetPDF, 'simplify', selectedLanguage);
          break;
        case 'explain':
          addMessage('user', `💡 Explain "${targetPDF.name}" in detail`);
          response = await explainPDFContent(targetPDF, 'explain', selectedLanguage);
          break;
        case 'translate':
          addMessage('user', `🌐 Translate "${targetPDF.name}" to ${SUPPORTED_LANGUAGES.find(l => l.code === selectedLanguage)?.name}`);
          response = await translatePDFContent(targetPDF, selectedLanguage);
          break;
        case 'compare':
          if (pdfs.length < 2) {
            addMessage('assistant', '❌ Need at least 2 PDFs to compare.');
            setIsLoading(false);
            return;
          }
          addMessage('user', `⚖️ Compare all uploaded PDFs`);
          response = await comparePDFs(pdfs, selectedLanguage);
          break;
        default:
          return;
      }

      if (response?.error) {
        addMessage('assistant', `❌ Error: ${response.error}`);
      } else if (response) {
        addMessage('assistant', response.text);
      }
    } catch (error) {
      addMessage('assistant', '❌ Failed to process. Please try again.');
    }

    setIsLoading(false);
  };

  const handleGenerateFlowchart = async () => {
    if (isLoading || pdfs.length === 0) return;

    const targetPDF = selectedPDF || pdfs[0];
    setIsLoading(true);

    try {
      const result = await generatePDFFlowchart(targetPDF, flowchartType);
      
      if ('error' in result) {
        setFlowchartCode('');
      } else {
        setFlowchartCode(result.mermaidCode);
      }
    } catch (error) {
      console.error('Flowchart error:', error);
    }

    setIsLoading(false);
  };

  const handleGenerateAudio = async () => {
    if (isLoading || pdfs.length === 0) return;

    const targetPDF = selectedPDF || pdfs[0];
    setIsLoading(true);

    try {
      const response = await generatePDFAudioScript(targetPDF, audioStyle, selectedLanguage);
      
      if (response.error) {
        setAudioScript(`Error: ${response.error}`);
      } else {
        setAudioScript(response.text);
      }
    } catch (error) {
      setAudioScript('Failed to generate audio script.');
    }

    setIsLoading(false);
  };

  const handlePlayAudio = () => {
    if (!audioScript) return;

    if (isPlaying) {
      window.speechSynthesis.cancel();
      setIsPlaying(false);
      return;
    }

    const utterance = new SpeechSynthesisUtterance(audioScript);
    utterance.lang = selectedLanguage === 'en' ? 'en-US' : selectedLanguage;
    utterance.rate = 0.9;
    utterance.pitch = 1;
    utterance.onend = () => setIsPlaying(false);
    utterance.onerror = () => setIsPlaying(false);
    
    speechRef.current = utterance;
    window.speechSynthesis.speak(utterance);
    setIsPlaying(true);
  };

  const copyToClipboard = async (text: string, id: string) => {
    await navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  if (pdfs.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-full text-center p-8">
        <FileSearch className="w-16 h-16 text-white/20 mb-4" />
        <h3 className="text-xl font-semibold text-white mb-2">No PDFs Uploaded</h3>
        <p className="text-white/60 max-w-md">
          Upload PDF documents to start using AI-powered analysis. You can ask questions, 
          generate summaries, create study materials, and more.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full">
      {/* Header with PDF selector */}
      <div className="p-4 border-b border-white/10">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-semibold text-white flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-indigo-400" />
            PDF AI Assistant
          </h3>
          <select
            value={selectedLanguage}
            onChange={(e) => setSelectedLanguage(e.target.value)}
            className="px-3 py-1.5 rounded-lg bg-white/10 text-white text-sm border border-white/20 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            {SUPPORTED_LANGUAGES.map(lang => (
              <option key={lang.code} value={lang.code} className="bg-gray-900">
                {lang.name}
              </option>
            ))}
          </select>
        </div>

        {/* PDF Selector */}
        <div className="relative">
          <select
            value={selectedPDF?.id || 'all'}
            onChange={(e) => {
              const pdf = pdfs.find(p => p.id === e.target.value);
              onSelectPDF(pdf || null);
            }}
            className="w-full px-3 py-2 rounded-lg bg-white/5 text-white text-sm border border-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500 appearance-none cursor-pointer"
          >
            <option value="all" className="bg-gray-900">All PDFs ({pdfs.length})</option>
            {pdfs.map(pdf => (
              <option key={pdf.id} value={pdf.id} className="bg-gray-900">
                {pdf.name}
              </option>
            ))}
          </select>
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40 pointer-events-none" />
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-white/10">
        {[
          { id: 'chat', label: 'Chat', icon: MessageSquare },
          { id: 'flowchart', label: 'Flowchart', icon: GitBranch },
          { id: 'audio', label: 'Audio', icon: Volume2 },
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as typeof activeTab)}
            className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium transition-colors ${
              activeTab === tab.id
                ? 'text-indigo-400 border-b-2 border-indigo-400 bg-indigo-500/10'
                : 'text-white/60 hover:text-white hover:bg-white/5'
            }`}
          >
            <tab.icon className="w-4 h-4" />
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="flex-1 overflow-hidden">
        {activeTab === 'chat' && (
          <div className="flex flex-col h-full">
            {/* Quick Actions */}
            <div className="p-3 border-b border-white/10 bg-white/5">
              <div className="flex flex-wrap gap-2">
                {[
                  { action: 'summary', icon: FileText, label: 'Summary' },
                  { action: 'questions', icon: HelpCircle, label: 'Questions' },
                  { action: 'keypoints', icon: Lightbulb, label: 'Key Points' },
                  { action: 'simplify', icon: Sparkles, label: 'Simplify' },
                  { action: 'explain', icon: BookOpen, label: 'Explain' },
                  { action: 'translate', icon: Languages, label: 'Translate' },
                  { action: 'compare', icon: Scale, label: 'Compare', disabled: pdfs.length < 2 },
                ].map(({ action, icon: Icon, label, disabled }) => (
                  <button
                    key={action}
                    onClick={() => handleQuickAction(action)}
                    disabled={isLoading || disabled}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                      disabled
                        ? 'bg-white/5 text-white/30 cursor-not-allowed'
                        : 'bg-white/10 text-white/80 hover:bg-indigo-500/30 hover:text-indigo-300'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    {label}
                  </button>
                ))}
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <MessageSquare className="w-12 h-12 text-white/20 mb-3" />
                  <p className="text-white/60 text-sm">
                    Ask questions about your PDFs or use quick actions above
                  </p>
                </div>
              ) : (
                <AnimatePresence>
                  {messages.map(message => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[85%] rounded-2xl px-4 py-2.5 ${
                          message.role === 'user'
                            ? 'bg-indigo-600 text-white'
                            : 'bg-white/10 text-white/90'
                        }`}
                      >
                        <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                        {message.role === 'assistant' && (
                          <button
                            onClick={() => copyToClipboard(message.content, message.id)}
                            className="mt-2 text-xs text-white/50 hover:text-white/80 flex items-center gap-1"
                          >
                            {copiedId === message.id ? (
                              <>
                                <Check className="w-3 h-3" />
                                Copied!
                              </>
                            ) : (
                              <>
                                <Copy className="w-3 h-3" />
                                Copy
                              </>
                            )}
                          </button>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-white/10">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && handleSend()}
                  placeholder="Ask anything about your PDFs..."
                  className="flex-1 px-4 py-2.5 rounded-xl bg-white/10 text-white placeholder-white/40 border border-white/20 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  disabled={isLoading}
                />
                <button
                  onClick={handleSend}
                  disabled={isLoading || !inputValue.trim()}
                  className="px-4 py-2.5 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  {isLoading ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <Send className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'flowchart' && (
          <div className="flex flex-col h-full p-4">
            <div className="flex gap-2 mb-4">
              <select
                value={flowchartType}
                onChange={(e) => setFlowchartType(e.target.value as typeof flowchartType)}
                className="px-3 py-2 rounded-lg bg-white/10 text-white text-sm border border-white/20 focus:outline-none"
              >
                <option value="mindmap" className="bg-gray-900">Mind Map</option>
                <option value="flowchart" className="bg-gray-900">Flowchart</option>
              </select>
              <button
                onClick={handleGenerateFlowchart}
                disabled={isLoading}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 disabled:opacity-50 transition-colors"
              >
                {isLoading ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <GitBranch className="w-4 h-4" />
                )}
                Generate {flowchartType === 'mindmap' ? 'Mind Map' : 'Flowchart'}
              </button>
            </div>

            <div className="flex-1 overflow-auto rounded-xl bg-white/5 border border-white/10 p-4">
              {flowchartCode ? (
                <MermaidFlowchart code={flowchartCode} />
              ) : (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <GitBranch className="w-12 h-12 text-white/20 mb-3" />
                  <p className="text-white/60 text-sm">
                    Generate a visual representation of your PDF content
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === 'audio' && (
          <div className="flex flex-col h-full p-4">
            <div className="flex gap-2 mb-4">
              <select
                value={audioStyle}
                onChange={(e) => setAudioStyle(e.target.value as typeof audioStyle)}
                className="px-3 py-2 rounded-lg bg-white/10 text-white text-sm border border-white/20 focus:outline-none"
              >
                <option value="lecture" className="bg-gray-900">Lecture Style</option>
                <option value="podcast" className="bg-gray-900">Podcast Style</option>
                <option value="summary" className="bg-gray-900">Brief Summary</option>
              </select>
              <button
                onClick={handleGenerateAudio}
                disabled={isLoading}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 disabled:opacity-50 transition-colors"
              >
                {isLoading ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <Volume2 className="w-4 h-4" />
                )}
                Generate Audio Script
              </button>
            </div>

            {audioScript && (
              <div className="flex gap-2 mb-4">
                <button
                  onClick={handlePlayAudio}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                    isPlaying
                      ? 'bg-red-600 hover:bg-red-700'
                      : 'bg-green-600 hover:bg-green-700'
                  } text-white`}
                >
                  {isPlaying ? (
                    <>
                      <StopCircle className="w-4 h-4" />
                      Stop
                    </>
                  ) : (
                    <>
                      <Mic className="w-4 h-4" />
                      Play
                    </>
                  )}
                </button>
                <button
                  onClick={() => copyToClipboard(audioScript, 'audio')}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors"
                >
                  {copiedId === 'audio' ? (
                    <>
                      <Check className="w-4 h-4" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      Copy Script
                    </>
                  )}
                </button>
              </div>
            )}

            <div className="flex-1 overflow-auto rounded-xl bg-white/5 border border-white/10 p-4">
              {audioScript ? (
                <p className="text-white/80 text-sm whitespace-pre-wrap leading-relaxed">
                  {audioScript}
                </p>
              ) : (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <Volume2 className="w-12 h-12 text-white/20 mb-3" />
                  <p className="text-white/60 text-sm">
                    Generate an audio script from your PDF for text-to-speech
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PDFAIPanel;
