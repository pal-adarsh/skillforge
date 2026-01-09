import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Sparkles,
  Send,
  Loader2,
  MessageSquare,
  GitBranch,
  FileText,
  Languages,
  Mic,
  MicOff,
  Volume2,
  Copy,
  RefreshCw,
  Wand2,
  BookOpen,
  HelpCircle,
  Lightbulb,
  CheckCircle
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';
import { NotePage } from './types';
import { MermaidFlowchart } from './MermaidFlowchart';
import {
  askGeminiAboutNotes,
  generateNoteSummary,
  generateFlowchartFromNotes,
  generateStudyQuestions,
  improveNotes,
  translateNotes,
  generateAudioScript,
  SUPPORTED_LANGUAGES,
  FlowchartData,
} from './gemini-integration';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

interface AIAssistantPanelProps {
  currentPage: NotePage | null;
  allPages: NotePage[];
  onUpdatePage?: (page: NotePage) => void;
}

export function AIAssistantPanel({ currentPage, allPages, onUpdatePage }: AIAssistantPanelProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [flowchartData, setFlowchartData] = useState<FlowchartData | null>(null);
  const [audioScript, setAudioScript] = useState<string | null>(null);
  const [isRecording, setIsRecording] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const addMessage = (role: 'user' | 'assistant', content: string) => {
    setMessages(prev => [...prev, {
      id: Date.now().toString(),
      role,
      content,
      timestamp: new Date(),
    }]);
  };

  const handleSendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const query = input.trim();
    setInput('');
    addMessage('user', query);
    setIsLoading(true);

    try {
      const response = await askGeminiAboutNotes(query, allPages, selectedLanguage);
      
      if (response.error) {
        addMessage('assistant', `Sorry, I encountered an error: ${response.error}`);
      } else {
        addMessage('assistant', response.text);
      }
    } catch (error) {
      addMessage('assistant', 'Sorry, something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleGenerateSummary = async () => {
    if (!currentPage) {
      toast({ title: 'No page selected', description: 'Please select a page first' });
      return;
    }

    setIsLoading(true);
    try {
      const response = await generateNoteSummary(currentPage, selectedLanguage);
      
      if (response.error) {
        toast({ title: 'Error', description: response.error, variant: 'destructive' });
      } else {
        addMessage('assistant', `📝 **Summary of "${currentPage.title}":**\n\n${response.text}`);
      }
    } catch (error) {
      toast({ title: 'Error', description: 'Failed to generate summary', variant: 'destructive' });
    } finally {
      setIsLoading(false);
    }
  };

  const handleGenerateFlowchart = async (type: 'flowchart' | 'mindmap' = 'flowchart') => {
    if (!currentPage) {
      toast({ title: 'No page selected', description: 'Please select a page first' });
      return;
    }

    setIsLoading(true);
    try {
      const result = await generateFlowchartFromNotes(currentPage, type);
      
      if ('error' in result) {
        toast({ title: 'Error', description: result.error, variant: 'destructive' });
      } else {
        setFlowchartData(result);
        addMessage('assistant', `Generated ${type} for "${currentPage.title}". View it in the Flowchart tab.`);
      }
    } catch (error) {
      toast({ title: 'Error', description: 'Failed to generate flowchart', variant: 'destructive' });
    } finally {
      setIsLoading(false);
    }
  };

  const handleGenerateQuestions = async () => {
    if (!currentPage) {
      toast({ title: 'No page selected', description: 'Please select a page first' });
      return;
    }

    setIsLoading(true);
    try {
      const response = await generateStudyQuestions(currentPage, 5, selectedLanguage);
      
      if (response.error) {
        toast({ title: 'Error', description: response.error, variant: 'destructive' });
      } else {
        addMessage('assistant', `📚 **Study Questions for "${currentPage.title}":**\n\n${response.text}`);
      }
    } catch (error) {
      toast({ title: 'Error', description: 'Failed to generate questions', variant: 'destructive' });
    } finally {
      setIsLoading(false);
    }
  };

  const handleImproveNotes = async (action: 'expand' | 'simplify' | 'organize' | 'correct') => {
    if (!currentPage) {
      toast({ title: 'No page selected', description: 'Please select a page first' });
      return;
    }

    setIsLoading(true);
    try {
      const response = await improveNotes(currentPage, action, selectedLanguage);
      
      if (response.error) {
        toast({ title: 'Error', description: response.error, variant: 'destructive' });
      } else {
        addMessage('assistant', `✨ **${action.charAt(0).toUpperCase() + action.slice(1)}ed Notes:**\n\n${response.text}`);
      }
    } catch (error) {
      toast({ title: 'Error', description: 'Failed to improve notes', variant: 'destructive' });
    } finally {
      setIsLoading(false);
    }
  };

  const handleTranslate = async () => {
    if (!currentPage) {
      toast({ title: 'No page selected', description: 'Please select a page first' });
      return;
    }

    setIsLoading(true);
    try {
      const response = await translateNotes(currentPage, selectedLanguage);
      
      if (response.error) {
        toast({ title: 'Error', description: response.error, variant: 'destructive' });
      } else {
        addMessage('assistant', `🌐 **Translated to ${SUPPORTED_LANGUAGES.find(l => l.code === selectedLanguage)?.name}:**\n\n${response.text}`);
      }
    } catch (error) {
      toast({ title: 'Error', description: 'Failed to translate notes', variant: 'destructive' });
    } finally {
      setIsLoading(false);
    }
  };

  const handleGenerateAudioScript = async (style: 'lecture' | 'podcast' | 'summary' = 'lecture') => {
    if (!currentPage) {
      toast({ title: 'No page selected', description: 'Please select a page first' });
      return;
    }

    setIsLoading(true);
    try {
      const response = await generateAudioScript(currentPage, style, selectedLanguage);
      
      if (response.error) {
        toast({ title: 'Error', description: response.error, variant: 'destructive' });
      } else {
        setAudioScript(response.text);
        addMessage('assistant', `🎙️ Generated ${style} audio script. View it in the Audio tab.`);
      }
    } catch (error) {
      toast({ title: 'Error', description: 'Failed to generate audio script', variant: 'destructive' });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSpeak = (text: string) => {
    if ('speechSynthesis' in window) {
      if (isSpeaking) {
        window.speechSynthesis.cancel();
        setIsSpeaking(false);
        return;
      }

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = selectedLanguage;
      utterance.onend = () => setIsSpeaking(false);
      window.speechSynthesis.speak(utterance);
      setIsSpeaking(true);
    } else {
      toast({ title: 'Not supported', description: 'Speech synthesis is not supported in your browser' });
    }
  };

  const handleCopy = async (text: string) => {
    await navigator.clipboard.writeText(text);
    toast({ title: 'Copied!', description: 'Content copied to clipboard' });
  };

  return (
    <Card className="glass-card h-full flex flex-col">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-primary" />
          AI Assistant
        </CardTitle>
        
        <div className="flex items-center gap-2 mt-2">
          <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
            <SelectTrigger className="w-32 h-8">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {SUPPORTED_LANGUAGES.map(lang => (
                <SelectItem key={lang.code} value={lang.code}>
                  {lang.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          
          {currentPage && (
            <Badge variant="secondary" className="truncate max-w-[150px]">
              {currentPage.title || 'Untitled'}
            </Badge>
          )}
        </div>
      </CardHeader>

      <Tabs defaultValue="chat" className="flex-1 flex flex-col">
        <TabsList className="mx-4">
          <TabsTrigger value="chat" className="gap-1">
            <MessageSquare className="h-3 w-3" />
            Chat
          </TabsTrigger>
          <TabsTrigger value="flowchart" className="gap-1">
            <GitBranch className="h-3 w-3" />
            Flowchart
          </TabsTrigger>
          <TabsTrigger value="audio" className="gap-1">
            <Volume2 className="h-3 w-3" />
            Audio
          </TabsTrigger>
        </TabsList>

        <TabsContent value="chat" className="flex-1 flex flex-col p-4 pt-2">
          {/* Quick Actions */}
          <div className="flex flex-wrap gap-1 mb-3">
            <Button 
              variant="outline" 
              size="sm" 
              className="h-7 text-xs"
              onClick={handleGenerateSummary}
              disabled={isLoading || !currentPage}
            >
              <FileText className="h-3 w-3 mr-1" />
              Summary
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              className="h-7 text-xs"
              onClick={handleGenerateQuestions}
              disabled={isLoading || !currentPage}
            >
              <HelpCircle className="h-3 w-3 mr-1" />
              Questions
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              className="h-7 text-xs"
              onClick={() => handleGenerateFlowchart('flowchart')}
              disabled={isLoading || !currentPage}
            >
              <GitBranch className="h-3 w-3 mr-1" />
              Flowchart
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              className="h-7 text-xs"
              onClick={handleTranslate}
              disabled={isLoading || !currentPage}
            >
              <Languages className="h-3 w-3 mr-1" />
              Translate
            </Button>
          </div>

          {/* Improve Actions */}
          <div className="flex flex-wrap gap-1 mb-3">
            <span className="text-xs text-muted-foreground mr-1 flex items-center">
              <Wand2 className="h-3 w-3 mr-1" />
              Improve:
            </span>
            {(['expand', 'simplify', 'organize', 'correct'] as const).map(action => (
              <Button
                key={action}
                variant="ghost"
                size="sm"
                className="h-6 text-xs"
                onClick={() => handleImproveNotes(action)}
                disabled={isLoading || !currentPage}
              >
                {action}
              </Button>
            ))}
          </div>

          {/* Messages */}
          <ScrollArea className="flex-1 pr-4" ref={scrollRef}>
            <div className="space-y-4">
              {messages.length === 0 && (
                <div className="text-center py-8 text-muted-foreground">
                  <Lightbulb className="h-8 w-8 mx-auto mb-2 opacity-50" />
                  <p className="text-sm">Ask me anything about your notes!</p>
                  <p className="text-xs mt-1">I can summarize, explain, translate, or create flowcharts.</p>
                </div>
              )}
              
              <AnimatePresence>
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={cn(
                      "flex gap-2",
                      message.role === 'user' ? "justify-end" : "justify-start"
                    )}
                  >
                    <div
                      className={cn(
                        "max-w-[85%] rounded-lg px-3 py-2 text-sm",
                        message.role === 'user'
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted"
                      )}
                    >
                      <div className="whitespace-pre-wrap">{message.content}</div>
                      {message.role === 'assistant' && (
                        <div className="flex items-center gap-1 mt-2 pt-2 border-t border-border/50">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-6 w-6"
                            onClick={() => handleCopy(message.content)}
                          >
                            <Copy className="h-3 w-3" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-6 w-6"
                            onClick={() => handleSpeak(message.content)}
                          >
                            <Volume2 className={cn("h-3 w-3", isSpeaking && "text-primary")} />
                          </Button>
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
              
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex gap-2"
                >
                  <div className="bg-muted rounded-lg px-3 py-2">
                    <Loader2 className="h-4 w-4 animate-spin" />
                  </div>
                </motion.div>
              )}
            </div>
          </ScrollArea>

          {/* Input */}
          <div className="flex gap-2 mt-3">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Ask about your notes..."
              disabled={isLoading}
            />
            <Button onClick={handleSendMessage} disabled={isLoading || !input.trim()}>
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </TabsContent>

        <TabsContent value="flowchart" className="flex-1 p-4 pt-2 overflow-auto">
          {flowchartData ? (
            <MermaidFlowchart
              code={flowchartData.mermaidCode}
              title={flowchartData.title}
              onRefresh={() => handleGenerateFlowchart('flowchart')}
              isLoading={isLoading}
            />
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-muted-foreground">
              <GitBranch className="h-12 w-12 mb-4 opacity-50" />
              <p className="text-sm mb-4">No flowchart generated yet</p>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleGenerateFlowchart('flowchart')}
                  disabled={isLoading || !currentPage}
                >
                  Generate Flowchart
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleGenerateFlowchart('mindmap')}
                  disabled={isLoading || !currentPage}
                >
                  Generate Mindmap
                </Button>
              </div>
            </div>
          )}
        </TabsContent>

        <TabsContent value="audio" className="flex-1 p-4 pt-2 overflow-auto">
          {audioScript ? (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-medium flex items-center gap-2">
                  <Mic className="h-4 w-4" />
                  Audio Script
                </h3>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleSpeak(audioScript)}
                  >
                    {isSpeaking ? <MicOff className="h-4 w-4 mr-1" /> : <Volume2 className="h-4 w-4 mr-1" />}
                    {isSpeaking ? 'Stop' : 'Read Aloud'}
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleCopy(audioScript)}
                  >
                    <Copy className="h-4 w-4 mr-1" />
                    Copy
                  </Button>
                </div>
              </div>
              
              <ScrollArea className="h-[300px] rounded-lg border p-4">
                <div className="whitespace-pre-wrap text-sm">{audioScript}</div>
              </ScrollArea>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-muted-foreground">
              <Mic className="h-12 w-12 mb-4 opacity-50" />
              <p className="text-sm mb-4">No audio script generated yet</p>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleGenerateAudioScript('lecture')}
                  disabled={isLoading || !currentPage}
                >
                  Lecture Style
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleGenerateAudioScript('podcast')}
                  disabled={isLoading || !currentPage}
                >
                  Podcast Style
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleGenerateAudioScript('summary')}
                  disabled={isLoading || !currentPage}
                >
                  Summary
                </Button>
              </div>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </Card>
  );
}
