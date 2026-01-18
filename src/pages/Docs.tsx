import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  FileText,
  Sparkles,
  Copy,
  CheckCheck,
  Loader2,
  FileQuestion,
  BookOpen,
  Lightbulb
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/data/translations";
import { useFocusMode } from "@/hooks/useFocusMode";
import { FocusModeToggle } from "@/components/ui/focus-mode-toggle";
import { InactivityAlert, WelcomeBackMessage } from "@/components/ui/focus-mode-alerts";
// Local implementations for gemini-docs helpers (fallbacks / simple async mocks)
const generateSummary = async (content: string): Promise<string> => {
  // simulate async processing
  await new Promise((r) => setTimeout(r, 300));
  if (!content) return "";
  const sentences = content.match(/[^.!?]+[.!?]+/g);
  if (sentences && sentences.length > 0) {
    return sentences.slice(0, 3).join(" ").trim();
  }
  return content.slice(0, 300).trim();
};

const localSummaryFallback = (content: string): string => {
  if (!content) return "No content provided.";
  return content.slice(0, 300).trim();
};

const generateQuestions = async (content: string): Promise<string[]> => {
  // simulate async processing
  await new Promise((r) => setTimeout(r, 300));
  if (!content) return [];
  const sentences = content.match(/[^.!?]+[.!?]+/g) || [content];
  return sentences.slice(0, 5).map((s) => `What is the meaning of: ${s.trim()}`);
};

const localQuestionsFallback = (content: string): string[] => {
  if (!content) return [];
  const snippet = content.slice(0, 200) + (content.length > 200 ? "..." : "");
  return [`Summarize: ${snippet}`];
};

import { useToast } from "@/hooks/use-toast";

export default function Docs() {
  const { language } = useLanguage();
  const t: Record<string, string> = translations[language] as unknown as Record<string, string>;
  const { toast } = useToast();
  const {
    isFocusModeEnabled,
    toggleFocusMode,
    screenTimeData,
    tabSwitchCount,
    isFullscreen,
    exitFullscreen,
    showInactivityAlert,
    dismissInactivityAlert,
    showWelcomeBackMessage,
    dismissWelcomeBackMessage,
    motivationalMessage
  } = useFocusMode({ userName: 'User' });

  const [content, setContent] = useState("");
  const [summary, setSummary] = useState("");
  const [questions, setQuestions] = useState<string[]>([]);
  const [isGeneratingSummary, setIsGeneratingSummary] = useState(false);
  const [isGeneratingQuestions, setIsGeneratingQuestions] = useState(false);
  const [copiedSummary, setCopiedSummary] = useState(false);
  const [copiedQuestions, setCopiedQuestions] = useState(false);

  const handleGenerateSummary = async () => {
    if (!content.trim()) {
      toast({
        title: "Content Required",
        description: "Please paste some content to summarize",
        variant: "destructive"
      });
      return;
    }

    setIsGeneratingSummary(true);
    try {
      const result = await generateSummary(content);
      if (!result || !result.trim()) {
        const fallback = localSummaryFallback(content);
        setSummary(fallback);
        toast({ title: "Summary Generated (fallback)", description: "Used local fallback summary." });
      } else {
        setSummary(result);
        toast({ title: "Summary Generated", description: "Content has been successfully summarized" });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to generate summary. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsGeneratingSummary(false);
    }
  };

  const handleGenerateQuestions = async () => {
    if (!content.trim()) {
      toast({
        title: "Content Required",
        description: "Please paste some content to generate questions",
        variant: "destructive"
      });
      return;
    }

    setIsGeneratingQuestions(true);
    try {
      const result = await generateQuestions(content);
      if (!result || result.length === 0) {
        const fallback = localQuestionsFallback(content);
        setQuestions(fallback);
        toast({ title: "Questions Generated (fallback)", description: `Used local fallback: generated ${fallback.length} questions.` });
      } else {
        setQuestions(result);
        toast({ title: "Questions Generated", description: `Generated ${result.length} questions from your content` });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to generate questions. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsGeneratingQuestions(false);
    }
  };

  const copyToClipboard = (text: string, type: 'summary' | 'questions') => {
    navigator.clipboard.writeText(text);
    if (type === 'summary') {
      setCopiedSummary(true);
      setTimeout(() => setCopiedSummary(false), 2000);
    } else {
      setCopiedQuestions(true);
      setTimeout(() => setCopiedQuestions(false), 2000);
    }
    toast({
      title: "Copied!",
      description: `${type === 'summary' ? 'Summary' : 'Questions'} copied to clipboard`,
    });
  };

  return (
    <div className="min-h-screen pt-20 pb-8">
      {/* Focus Mode Toggle - Upper Right */}
      <div className="fixed top-20 right-4 z-40">
        <FocusModeToggle
          isEnabled={isFocusModeEnabled}
          onToggle={toggleFocusMode}
          totalTime={screenTimeData.totalScreenTime}
          focusTime={screenTimeData.focusModeTime}
          tabSwitchCount={tabSwitchCount}
          isFullscreen={isFullscreen}
          onExitFullscreen={exitFullscreen}
          userName="User"
        />
      </div>

      {/* Focus Mode Alerts */}
      <InactivityAlert
        show={showInactivityAlert}
        onDismiss={dismissInactivityAlert}
      />
      <WelcomeBackMessage
        show={showWelcomeBackMessage}
        message={motivationalMessage}
        onDismiss={dismissWelcomeBackMessage}
      />

      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 rounded-xl bg-gradient-to-br from-primary to-accent">
              <FileText className="h-8 w-8 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-4xl font-bold gradient-text">AI Document Assistant</h1>
              <p className="text-muted-foreground text-lg">
                Summarize content and generate questions using AI
              </p>
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Input Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Card className="glass-card p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-primary" />
                  <h2 className="text-xl font-semibold">Your Content</h2>
                </div>
                <Badge variant="outline">{content.length} characters</Badge>
              </div>

              <Textarea
                placeholder="Paste your content here... (articles, notes, documents, etc.)"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="min-h-[400px] mb-4 font-mono text-sm"
              />

              <div className="flex gap-3">
                <Button
                  onClick={handleGenerateSummary}
                  disabled={isGeneratingSummary || !content.trim()}
                  className="flex-1"
                >
                  {isGeneratingSummary ? (
                    <>
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                      Summarizing...
                    </>
                  ) : (
                    <>
                      <Sparkles className="h-4 w-4 mr-2" />
                      Generate Summary
                    </>
                  )}
                </Button>

                <Button
                  onClick={handleGenerateQuestions}
                  disabled={isGeneratingQuestions || !content.trim()}
                  variant="secondary"
                  className="flex-1"
                >
                  {isGeneratingQuestions ? (
                    <>
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <FileQuestion className="h-4 w-4 mr-2" />
                      Generate Questions
                    </>
                  )}
                </Button>
              </div>
            </Card>
          </motion.div>

          {/* Output Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            {/* Summary Card */}
            <Card className="glass-card p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Lightbulb className="h-5 w-5 text-primary" />
                  <h2 className="text-xl font-semibold">Summary</h2>
                </div>
                {summary && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => copyToClipboard(summary, 'summary')}
                  >
                    {copiedSummary ? (
                      <CheckCheck className="h-4 w-4 text-green-500" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </Button>
                )}
              </div>

              {summary ? (
                <div className="prose prose-sm dark:prose-invert max-w-none">
                  <p className="text-sm leading-relaxed whitespace-pre-wrap">
                    {summary}
                  </p>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-12 text-muted-foreground">
                  <Sparkles className="h-12 w-12 mb-3 opacity-50" />
                  <p className="text-sm">Your AI-generated summary will appear here</p>
                </div>
              )}
            </Card>

            {/* Questions Card */}
            <Card className="glass-card p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <FileQuestion className="h-5 w-5 text-primary" />
                  <h2 className="text-xl font-semibold">Questions</h2>
                </div>
                {questions.length > 0 && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => copyToClipboard(questions.join('\n\n'), 'questions')}
                  >
                    {copiedQuestions ? (
                      <CheckCheck className="h-4 w-4 text-green-500" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </Button>
                )}
              </div>

              {questions.length > 0 ? (
                <div className="space-y-3">
                  {questions.map((question, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="p-3 rounded-lg bg-muted/30 border border-border/50"
                    >
                      <div className="flex gap-3">
                        <Badge variant="outline" className="shrink-0">
                          Q{index + 1}
                        </Badge>
                        <p className="text-sm leading-relaxed">{question}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-12 text-muted-foreground">
                  <FileQuestion className="h-12 w-12 mb-3 opacity-50" />
                  <p className="text-sm">AI-generated questions will appear here</p>
                </div>
              )}
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
