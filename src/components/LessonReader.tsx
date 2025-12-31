import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti"; // Make sure to install this!
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  ArrowLeft, 
  BookOpen, 
  CheckCircle, 
  Clock, 
  Trophy,
  Eye,
  EyeOff,
  Maximize2,
  X,
  Copy,
  Check,
  Type,
  Settings
} from "lucide-react";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Lesson } from "@/data/lessons";
import { useProgressTracking } from "@/hooks/useProgressTracking";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/data/translations";
import { getTranslatedLesson } from "@/data/lessonTranslations";
import { LessonTestChatbot } from "./LessonTestChatbot";

interface LessonReaderProps {
  lesson: Lesson;
  onBack: () => void;
  onComplete?: (lessonId: string) => void;
}

// --- Sub-Component: Copyable Code Block ---
const CodeBlock = ({ language, children }: { language: string, children: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(children);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group my-6 rounded-lg overflow-hidden border border-white/10 shadow-xl">
      <div className="flex items-center justify-between bg-black/40 px-4 py-2 text-xs text-muted-foreground border-b border-white/5">
        <span className="uppercase font-mono tracking-wider">{language}</span>
        <Button
          variant="ghost"
          size="icon"
          className="h-6 w-6 hover:bg-white/10"
          onClick={handleCopy}
        >
          {copied ? <Check className="h-3 w-3 text-green-400" /> : <Copy className="h-3 w-3" />}
        </Button>
      </div>
      <SyntaxHighlighter
        style={tomorrow as any}
        language={language}
        PreTag="div"
        customStyle={{ margin: 0, borderRadius: 0, background: 'rgba(0,0,0,0.3)' }}
      >
        {children}
      </SyntaxHighlighter>
    </div>
  );
};

// --- Sub-Component: Zoomable Image ---
const ZoomableImage = ({ src, alt, ...props }: any) => {
  return (
    <div className="group relative flex justify-center my-8">
      <div className="relative overflow-hidden rounded-xl shadow-2xl border border-white/10 bg-black/20">
        <img
          src={src}
          alt={alt}
          loading="lazy"
          {...props}
          className="
            max-w-full 
            h-auto 
            max-h-[500px] 
            object-contain
            transition-transform 
            duration-500 
            ease-out
            group-hover:scale-[1.05]
          "
        />
      </div>
    </div>
  );
};



export const LessonReader = ({ lesson, onBack, onComplete }: LessonReaderProps) => {
  // State
  const [readingProgress, setReadingProgress] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [readingTime, setReadingTime] = useState(0);
  const [isReading, setIsReading] = useState(false);
  const [showStickyHeader, setShowStickyHeader] = useState(false);
  const [fontSize, setFontSize] = useState<'sm' | 'base' | 'lg'>('base');
  
  // Hooks
  const { updateLessonProgress, getLessonProgress } = useProgressTracking();
  const { language } = useLanguage();
  const t = translations[language];
  const translatedLesson = getTranslatedLesson(lesson.id, language);

  // Load Initial Progress
  useEffect(() => {
    const progress = getLessonProgress(lesson.id);
    if (progress) {
      setReadingProgress(progress.progress_percentage);
      setIsCompleted(progress.completed);
    }
  }, [lesson.id, getLessonProgress]);

  // Timer
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isReading) {
      interval = setInterval(() => {
        setReadingTime(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isReading]);

  // Scroll Handler (Progress + Sticky Header)
  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      
      const newProgress = Math.min(scrolled, 100);
      setReadingProgress(newProgress);
      setShowStickyHeader(winScroll > 300); // Show header after scrolling down 300px
      
      // Save progress periodically
      if (newProgress > readingProgress && newProgress % 10 === 0) {
        updateLessonProgress(lesson.id, lesson.category, newProgress, false);
      }
      
      if (scrolled > 90 && !isCompleted) {
        handleComplete();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lesson.id, lesson.category, readingProgress, isCompleted, updateLessonProgress]);

  // Completion Handler
  const handleComplete = async () => {
    if (!isCompleted) {
      setIsCompleted(true);
      setReadingProgress(100);
      await updateLessonProgress(lesson.id, lesson.category, 100, true);
      
      // Trigger Confetti
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });

      onComplete?.(lesson.id);
    }
  };

  // Helpers
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner": return "bg-green-500/10 text-green-400 border-green-500/20";
      case "Intermediate": return "bg-yellow-500/10 text-yellow-400 border-yellow-500/20";
      case "Advanced": return "bg-red-500/10 text-red-400 border-red-500/20";
      default: return "bg-gray-500/10 text-gray-400 border-gray-500/20";
    }
  };

  const proseSizeClass = {
    sm: "prose-sm",
    base: "prose-lg",
    lg: "prose-xl"
  };

  return (
    <div className="min-h-screen pt-20 pb-16 bg-gradient-to-b from-background to-background/95">
      
      {/* Sticky Header (appears on scroll) */}
      <AnimatePresence>
        {showStickyHeader && (
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-md border-b border-border/40 shadow-sm"
          >
            <div className="container mx-auto px-4 h-16 flex items-center justify-between gap-4">
              <div className="flex items-center gap-4 flex-1 overflow-hidden">
                <Button variant="ghost" size="icon" onClick={onBack} className="shrink-0">
                  <ArrowLeft className="h-4 w-4" />
                </Button>
                <div className="flex flex-col min-w-0">
                  <span className="font-semibold truncate text-sm">{translatedLesson?.title}</span>
                  <Progress value={readingProgress} className="h-1 w-full mt-1" />
                </div>
              </div>
              <div className="flex items-center gap-2 shrink-0 text-xs text-muted-foreground">
                <BookOpen className="h-3 w-3" />
                <span>{Math.round(readingProgress)}%</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="container mx-auto px-4 max-w-4xl relative">
        
        {/* Navigation & Controls */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between mb-6"
        >
          <Button 
            variant="ghost" 
            onClick={onBack}
            className="hover:glow-primary group"
          >
            <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            {t.backToLessons}
          </Button>

          {/* Reading Controls */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="gap-2">
                <Settings className="h-4 w-4" />
                <span className="hidden sm:inline">Display</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <div className="p-2">
                <p className="text-xs font-medium text-muted-foreground mb-2 flex items-center gap-2">
                  <Type className="h-3 w-3" /> Text Size
                </p>
                <div className="flex gap-1 bg-secondary/30 p-1 rounded-md">
                  <Button 
                    variant={fontSize === 'sm' ? 'secondary' : 'ghost'} 
                    size="sm" 
                    className="flex-1 h-8 text-xs"
                    onClick={() => setFontSize('sm')}
                  >
                    A
                  </Button>
                  <Button 
                    variant={fontSize === 'base' ? 'secondary' : 'ghost'} 
                    size="sm" 
                    className="flex-1 h-8 text-sm"
                    onClick={() => setFontSize('base')}
                  >
                    A
                  </Button>
                  <Button 
                    variant={fontSize === 'lg' ? 'secondary' : 'ghost'} 
                    size="sm" 
                    className="flex-1 h-8 text-lg font-bold"
                    onClick={() => setFontSize('lg')}
                  >
                    A
                  </Button>
                </div>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        </motion.div>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Card className="glass-card p-6 sm:p-8 overflow-hidden relative">
            {/* Background decorative blob */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />

            <div className="relative z-10">
              <div className="flex flex-wrap items-center gap-2 mb-6">
                <Badge className="bg-primary/20 text-primary border-primary/30">
                  {lesson.category}
                </Badge>
                <Badge variant="outline" className={getDifficultyColor(lesson.difficulty)}>
                  {translatedLesson ? t[lesson.difficulty.toLowerCase()] : lesson.difficulty}
                </Badge>
                {lesson.tags.map(tag => (
                  <Badge key={tag} variant="secondary" className="text-xs text-muted-foreground bg-secondary/50">
                    #{tag}
                  </Badge>
                ))}
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 tracking-tight text-foreground">
                {translatedLesson?.title || lesson.title}
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-2xl">
                {translatedLesson?.description || lesson.description}
              </p>

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-6 border-t border-border/50">
                <div className="flex flex-wrap items-center gap-6 text-sm font-medium text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-full bg-secondary/50">
                      <Clock className="h-4 w-4 text-primary" />
                    </div>
                    <span>{lesson.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-full bg-secondary/50">
                      <BookOpen className="h-4 w-4 text-primary" />
                    </div>
                    <span>{formatTime(readingTime)} read</span>
                  </div>
                  {isCompleted && (
                    <Badge variant="default" className="bg-green-500/20 text-green-400 hover:bg-green-500/20 border-green-500/50">
                      <CheckCircle className="h-3 w-3 mr-1" />
                      Completed
                    </Badge>
                  )}
                </div>

                <div className="flex items-center gap-3">
                   <Button
                    onClick={() => setIsReading(!isReading)}
                    variant={isReading ? "default" : "outline"}
                    className={isReading ? "shadow-lg shadow-primary/20" : ""}
                  >
                    {isReading ? <Eye className="h-4 w-4 mr-2" /> : <EyeOff className="h-4 w-4 mr-2" />}
                    {isReading ? "Focus Mode" : t.startReading} 
                  </Button>

                  {!isCompleted && (
                    <Button
                      onClick={handleComplete}
                      variant="ghost"
                      className="text-muted-foreground hover:text-green-400"
                    >
                      Mark Complete
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Main Content Area */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="glass-card p-6 sm:p-10 md:p-12 mb-12">
            <div className={`prose prose-invert ${proseSizeClass[fontSize]} max-w-none prose-headings:scroll-mt-24 prose-a:text-primary hover:prose-a:text-primary/80 prose-img:rounded-xl`}>
              <ReactMarkdown
                components={{
                  code({node, className, children, ...props}: any) {
                    const match = /language-(\w+)/.exec(className || '');
                    const isInline = !match;
                    const codeString = String(children).replace(/\n$/, '');

                    return !isInline ? (
                      <CodeBlock language={match[1] || 'text'}>
                        {codeString}
                      </CodeBlock>
                    ) : (
                      <code className="bg-secondary/50 text-primary px-1.5 py-0.5 rounded font-mono text-[0.9em]" {...props}>
                        {children}
                      </code>
                    );
                  },
                  h1: ({children}) => <h1 className="text-3xl font-bold mt-12 mb-6 text-foreground border-b border-border/50 pb-4">{children}</h1>,
                  h2: ({children}) => <h2 className="text-2xl font-semibold mt-10 mb-4 text-foreground/90 flex items-center gap-2"><span className="w-1.5 h-8 bg-primary rounded-full inline-block"></span>{children}</h2>,
                  h3: ({children}) => <h3 className="text-xl font-semibold mt-8 mb-3 text-foreground/80">{children}</h3>,
                  p: ({children}) => <p className="mb-6 leading-7 text-muted-foreground/90">{children}</p>,
                  ul: ({children}) => <ul className="mb-6 pl-6 space-y-2 list-disc marker:text-primary">{children}</ul>,
                  ol: ({children}) => <ol className="mb-6 pl-6 space-y-2 list-decimal marker:text-primary font-medium">{children}</ol>,
                  li: ({children}) => <li className="pl-2">{children}</li>,
                  blockquote: ({children}) => (
                    <blockquote className="border-l-4 border-primary pl-6 italic my-8 text-xl text-muted-foreground bg-secondary/10 py-4 pr-4 rounded-r-xl">
                      "{children}"
                    </blockquote>
                  ),
                  strong: ({children}) => <strong className="font-bold text-foreground">{children}</strong>,
                  hr: () => <hr className="my-10 border-border/50" />,
                  table: ({children}) => <div className="overflow-x-auto my-8 border border-white/10 rounded-lg"><table className="w-full text-left border-collapse">{children}</table></div>,
                  th: ({children}) => <th className="bg-secondary/30 p-4 font-semibold text-foreground border-b border-white/10">{children}</th>,
                  td: ({children}) => <td className="p-4 border-b border-white/5 text-muted-foreground">{children}</td>,
                  // New Zoomable Image Component
                  img: ({node, ...props}) => (
                     <ZoomableImage {...props} />
                  ),
                }}
              >
                {translatedLesson?.content || lesson.content}
              </ReactMarkdown>
            </div>
          </Card>
        </motion.div>

        {/* Completion Card (Animated) */}
        <AnimatePresence>
          {isCompleted && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              className="mt-8 mb-20"
            >
              <Card className="bg-gradient-to-br from-green-500/10 to-transparent border-green-500/30 p-8 text-center relative overflow-hidden">
                 <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
                 <div className="relative z-10">
                    <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse-glow">
                      <Trophy className="h-10 w-10 text-green-400" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2 text-foreground">{t.congratulations}</h3>
                    <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                      {t.lessonCompleted} You've earned <strong>{lesson.points} XP</strong> for your dedication!
                    </p>
                    <div className="flex justify-center gap-4">
                      <Button onClick={onBack} size="lg" className="glow-primary min-w-[150px]">
                        {t.backButton}
                      </Button>
                    </div>
                 </div>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* AI Test Chatbot (Fixed at bottom right) */}
      <LessonTestChatbot
        lessonTitle={translatedLesson?.title || lesson.title}
        lessonContent={translatedLesson?.content || lesson.content || ''}
        lessonDifficulty={lesson.difficulty}
      />
    </div>
  );
};