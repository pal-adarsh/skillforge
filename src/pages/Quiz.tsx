import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Brain, 
  Trophy, 
  Clock, 
  CheckCircle, 
  XCircle,
  RotateCcw,
  Play,
  Target,
  Award,
  Filter,
  Code,
  Atom,
  Book,
  Check,
  Volume2,
  VolumeX
} from "lucide-react";
import { quizQuestions } from "@/data/quizzes";
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/data/translations';

// Types for local storage
interface QuizProgress {
  completed: boolean;
  score: number;
  totalQuestions: number;
  date: number;
  category: string;
  subcategory: string;
}

interface CategoryProgress {
  [categoryId: string]: QuizProgress[];
}

export default function Quiz() {
  const { language } = useLanguage();
  const t: Record<string, string> = translations[language] as unknown as Record<string, string>;
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string>("");
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);
  const [userAnswers, setUserAnswers] = useState<number[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>("all");
  const [quizStarted, setQuizStarted] = useState(false);
  const [completedQuizzes, setCompletedQuizzes] = useState<CategoryProgress>({});
  const [isSpeaking, setIsSpeaking] = useState(false);

  // Load completed quizzes from localStorage on component mount
  useEffect(() => {
    const savedProgress = localStorage.getItem('quizProgress');
    if (savedProgress) {
      try {
        setCompletedQuizzes(JSON.parse(savedProgress));
      } catch (e) {
        console.error('Failed to parse quiz progress from localStorage', e);
      }
    }
  }, []);

  // Save quiz progress to localStorage
  const saveQuizProgress = (category: string, subcategory: string, score: number, totalQuestions: number) => {
    const newProgress: QuizProgress = {
      completed: true,
      score,
      totalQuestions,
      date: Date.now(),
      category,
      subcategory
    };

    const updatedProgress = { ...completedQuizzes };
    
    if (!updatedProgress[category]) {
      updatedProgress[category] = [];
    }
    
    // Check if this specific quiz (category + subcategory) was already completed
    const existingIndex = updatedProgress[category].findIndex(
      item => item.subcategory === subcategory
    );
    
    if (existingIndex >= 0) {
      // Update existing progress
      updatedProgress[category][existingIndex] = newProgress;
    } else {
      // Add new progress
      updatedProgress[category].push(newProgress);
    }
    
    setCompletedQuizzes(updatedProgress);
    localStorage.setItem('quizProgress', JSON.stringify(updatedProgress));
  };

  // Check if a specific category/subcategory is completed
  const isQuizCompleted = (categoryId: string, subcategoryId: string = "all") => {
    if (!completedQuizzes[categoryId]) return false;
    
    return completedQuizzes[categoryId].some(
      progress => progress.subcategory === subcategoryId
    );
  };

  // Get the best score for a category/subcategory
  const getBestScore = (categoryId: string, subcategoryId: string = "all") => {
    if (!completedQuizzes[categoryId]) return null;
    
    const relevantScores = completedQuizzes[categoryId].filter(
      progress => progress.subcategory === subcategoryId
    );
    
    if (relevantScores.length === 0) return null;
    
    return Math.max(...relevantScores.map(progress => progress.score));
  };

  // Function to speak the question
  const speakQuestion = () => {
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }

    const speech = new SpeechSynthesisUtterance();
    speech.text = currentQuizQuestions[currentQuestion].question;
    speech.rate = 0.9;
    speech.pitch = 1;
    speech.volume = 1;
    
    speech.onend = () => {
      setIsSpeaking(false);
    };
    
    speech.onerror = () => {
      setIsSpeaking(false);
    };
    
    window.speechSynthesis.speak(speech);
    setIsSpeaking(true);
  };

  // Clean up speech synthesis when component unmounts or quiz completes
  useEffect(() => {
    return () => {
      if (window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  // Anti-cheating: Prevent context menu (right-click)
  useEffect(() => {
    const preventContextMenu = (e: MouseEvent) => {
      if (quizStarted && !quizCompleted) {
        e.preventDefault();
        return false;
      }
    };

    document.addEventListener('contextmenu', preventContextMenu);
    return () => document.removeEventListener('contextmenu', preventContextMenu);
  }, [quizStarted, quizCompleted]);

  // Anti-cheating: Prevent copy, cut, and paste
  useEffect(() => {
    const preventCopyPaste = (e: ClipboardEvent) => {
      if (quizStarted && !quizCompleted) {
        e.preventDefault();
        return false;
      }
    };

    document.addEventListener('copy', preventCopyPaste);
    document.addEventListener('cut', preventCopyPaste);
    document.addEventListener('paste', preventCopyPaste);

    return () => {
      document.removeEventListener('copy', preventCopyPaste);
      document.removeEventListener('cut', preventCopyPaste);
      document.removeEventListener('paste', preventCopyPaste);
    };
  }, [quizStarted, quizCompleted]);

  // Anti-cheating: Block developer tools and harmful keyboard shortcuts
  useEffect(() => {
    const preventKeyboardShortcuts = (e: KeyboardEvent) => {
      if (!quizStarted || quizCompleted) return;

      // Block F12 (DevTools)
      if (e.key === 'F12') {
        e.preventDefault();
        return false;
      }

      // Block Ctrl+Shift+I (DevTools)
      if (e.ctrlKey && e.shiftKey && e.key === 'I') {
        e.preventDefault();
        return false;
      }

      // Block Ctrl+Shift+J (Console)
      if (e.ctrlKey && e.shiftKey && e.key === 'J') {
        e.preventDefault();
        return false;
      }

      // Block Ctrl+Shift+C (Inspect Element)
      if (e.ctrlKey && e.shiftKey && e.key === 'C') {
        e.preventDefault();
        return false;
      }

      // Block Cmd+Option+I (Mac DevTools)
      if (e.metaKey && e.altKey && e.key === 'I') {
        e.preventDefault();
        return false;
      }

      // Block Cmd+Option+J (Mac Console)
      if (e.metaKey && e.altKey && e.key === 'J') {
        e.preventDefault();
        return false;
      }

      // Block Cmd+Option+C (Mac Inspect)
      if (e.metaKey && e.altKey && e.key === 'C') {
        e.preventDefault();
        return false;
      }

      // Block Ctrl+U (View Source)
      if (e.ctrlKey && e.key === 'u') {
        e.preventDefault();
        return false;
      }

      // Block Ctrl+S (Save Page)
      if (e.ctrlKey && e.key === 's') {
        e.preventDefault();
        return false;
      }

      // Block Ctrl+P (Print)
      if (e.ctrlKey && e.key === 'p') {
        e.preventDefault();
        return false;
      }

      // Block Ctrl+C (Copy)
      if (e.ctrlKey && e.key === 'c') {
        e.preventDefault();
        return false;
      }

      // Block PrintScreen key
      if (e.key === 'PrintScreen') {
        e.preventDefault();
        return false;
      }

      // Block Win+Shift+S (Windows Screenshot)
      if (e.metaKey && e.shiftKey && e.key === 'S') {
        e.preventDefault();
        return false;
      }
    };

    document.addEventListener('keydown', preventKeyboardShortcuts);
    return () => document.removeEventListener('keydown', preventKeyboardShortcuts);
  }, [quizStarted, quizCompleted]);

  const categories = [
    { id: "all", name: t.allCategories || "All Categories", icon: Brain },
    { id: "coding", name: t.coding || "Coding", icon: Code },
    { id: "science", name: t.science || "Science", icon: Atom },
    { id: "general", name: t.generalKnowledge || "General Knowledge", icon: Book },
    { id: "nature", name: t.nature || "Nature", icon: Atom },
    { id: "human-body", name: t.humanBody || "Human Body", icon: Brain },
    { id: "environment", name: t.environment || "Environment", icon: Book },
    { id: "hygiene", name: t.hygiene || "Hygiene", icon: Book },
    { id: "first-aid", name: t.firstAid || "First Aid", icon: Brain },
    { id: "folk-tales", name: t.folkTales || "Folk Tales", icon: Book }
  ];

  // Get subcategories based on tags within each category
  const getSubcategories = (categoryId: string) => {
    if (categoryId === "all") return [];
    
    const categoryQuestions = quizQuestions.filter(q => q.category === categoryId);
    const tags = [...new Set(categoryQuestions.flatMap(q => q.tags))];
    
    return tags.map(tag => ({
      id: tag,
      name: tag.charAt(0).toUpperCase() + tag.slice(1),
      count: categoryQuestions.filter(q => q.tags.includes(tag)).length
    }));
  };

  const filteredQuestions = selectedCategory === "all" 
    ? quizQuestions 
    : selectedSubcategory === "all"
      ? quizQuestions.filter(q => q.category === selectedCategory)
      : quizQuestions.filter(q => q.category === selectedCategory && q.tags.includes(selectedSubcategory));

  const currentQuizQuestions = filteredQuestions.slice(0, 10); // Limit to 10 questions per category

  const handleAnswer = (answer: string) => {
    setSelectedAnswer(answer);
  };

  const nextQuestion = () => {
    // Stop any ongoing speech when moving to next question
    if (window.speechSynthesis) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
    
    const answerIndex = parseInt(selectedAnswer);
    const newUserAnswers = [...userAnswers, answerIndex];
    setUserAnswers(newUserAnswers);
    
    if (answerIndex === currentQuizQuestions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    
    setShowResult(true);
    
    setTimeout(() => {
      if (currentQuestion + 1 < currentQuizQuestions.length) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer("");
        setShowResult(false);
        setTimeLeft(30);
      } else {
        setQuizCompleted(true);
        // Save quiz progress to localStorage
        saveQuizProgress(
          selectedCategory, 
          selectedSubcategory, 
          score + (answerIndex === currentQuizQuestions[currentQuestion].correctAnswer ? 1 : 0), 
          currentQuizQuestions.length
        );
      }
    }, 2000);
  };

  const restartQuiz = () => {
    // Stop any ongoing speech when restarting
    if (window.speechSynthesis) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
    
    setCurrentQuestion(0);
    setSelectedAnswer("");
    setScore(0);
    setShowResult(false);
    setQuizCompleted(false);
    setQuizStarted(false);
    setTimeLeft(30);
    setUserAnswers([]);
  };

  const startQuiz = () => {
    setQuizStarted(true);
    setCurrentQuestion(0);
    setScore(0);
    setTimeLeft(30);
  };

  const resetSelection = () => {
    setSelectedSubcategory("all");
  };

  const calculatePercentage = () => Math.round((score / currentQuizQuestions.length) * 100);
  
  const getScoreColor = () => {
    const percentage = calculatePercentage();
    if (percentage >= 80) return "text-green-400";
    if (percentage >= 60) return "text-yellow-400";
    return "text-red-400";
  };

  if (quizCompleted) {
    return (
      <div className="min-h-screen pt-20 pb-8">
        <div className="container mx-auto px-4 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center"
          >
            <Card className="glass-card p-8">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
              >
                <Award className={`h-20 w-20 mx-auto mb-6 ${getScoreColor()} animate-pulse-glow`} />
              </motion.div>
              
              <h1 className="text-3xl font-bold mb-4 glow-text">{t.quizCompletedTitle}</h1>
              
              <div className="mb-6">
                <div className={`text-6xl font-bold mb-2 ${getScoreColor()}`}>
                  {calculatePercentage()}%
                </div>
                <p className="text-xl text-muted-foreground">
                  {t.quizYouScored.replace('{score}', String(score)).replace('{total}', String(currentQuizQuestions.length))}
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="text-center p-4 glass rounded-lg">
                  <Target className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <div className="text-2xl font-bold">{score}</div>
                  <div className="text-sm text-muted-foreground">{t.correctLabel}</div>
                </div>
                
                <div className="text-center p-4 glass rounded-lg">
                  <XCircle className="h-8 w-8 mx-auto mb-2 text-red-400" />
                  <div className="text-2xl font-bold">{currentQuizQuestions.length - score}</div>
                  <div className="text-sm text-muted-foreground">{t.incorrectLabel}</div>
                </div>
                
                <div className="text-center p-4 glass rounded-lg">
                  <Trophy className="h-8 w-8 mx-auto mb-2 text-accent" />
                  <div className="text-2xl font-bold">{Math.floor(Math.random() * 100) + 50}</div>
                  <div className="text-sm text-muted-foreground">{t.pointsLabel}</div>
                </div>
              </div>
              
              <div className="flex gap-4 justify-center">
                <Button onClick={restartQuiz} className="glow-primary">
                  <RotateCcw className="h-4 w-4 mr-2" />
                  {t.retakeQuiz}
                </Button>
                
                <Button variant="outline">
                  <Brain className="h-4 w-4 mr-2" />
                  {t.reviewAnswers}
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    );
  }

  // Category Selection Screen
  if (!quizStarted) {
    return (
      <div className="min-h-screen pt-20 pb-8">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12 text-center"
          >
            <h1 className="text-4xl font-bold mb-4 glow-text">{t.chooseQuizCategory}</h1>
            <p className="text-xl text-muted-foreground">{t.testYourKnowledge}</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 mb-8">
            {categories.map((category, index) => {
              const isCompleted = isQuizCompleted(category.id);
              const bestScore = getBestScore(category.id);
              
              return (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Card 
                    className={`glass-card p-6 cursor-pointer transition-all duration-300 hover:glow-primary relative ${
                      selectedCategory === category.id ? 'ring-2 ring-primary bg-primary/5' : ''
                    }`}
                    onClick={() => setSelectedCategory(category.id)}
                  >
                    {isCompleted && (
                      <div className="absolute top-2 right-2 bg-green-500 rounded-full p-1">
                        <Check className="h-4 w-4 text-white" />
                      </div>
                    )}
                    
                    <div className="text-center">
                      <div className="p-4 rounded-full bg-primary/10 w-fit mx-auto mb-4">
                        <category.icon className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="font-semibold text-lg mb-2">{category.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {category.id === "all" 
                          ? `${quizQuestions.length} ${t.questionsLabel}` 
                          : `${quizQuestions.filter(q => q.category === category.id).length} ${t.questionsLabel}`
                        }
                      </p>
                      
                      {bestScore !== null && (
                        <div className="mt-2 text-xs text-green-400">
                          {t.bestLabel} {bestScore}/{category.id === "all" ? quizQuestions.length : quizQuestions.filter(q => q.category === category.id).length}
                        </div>
                      )}
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Subcategory Selection */}
          {selectedCategory !== "all" && getSubcategories(selectedCategory).length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mb-8"
            >
              <h3 className="text-2xl font-semibold mb-4 text-center">
                {t.chooseTopic.replace('{category}', categories.find(c => c.id === selectedCategory)?.name || '')}
              </h3>
              
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <Card 
                  className={`glass-card p-4 cursor-pointer transition-all duration-300 hover:glow-primary relative ${
                    selectedSubcategory === "all" ? 'ring-2 ring-primary bg-primary/5' : ''
                  }`}
                  onClick={() => setSelectedSubcategory("all")}
                >
                  {isQuizCompleted(selectedCategory, "all") && (
                    <div className="absolute top-2 right-2 bg-green-500 rounded-full p-1">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                  )}
                  
                  <div className="text-center">
                    <h4 className="font-semibold mb-1">{t.allTopics}</h4>
                    <p className="text-sm text-muted-foreground">
                      {quizQuestions.filter(q => q.category === selectedCategory).length} {t.questionsLabel}
                    </p>
                    
                    {isQuizCompleted(selectedCategory, "all") && (
                      <div className="mt-1 text-xs text-green-400">
                        {t.bestLabel} {getBestScore(selectedCategory, "all")}/{quizQuestions.filter(q => q.category === selectedCategory).length}
                      </div>
                    )}
                  </div>
                </Card>
                
                {getSubcategories(selectedCategory).map((subcategory, index) => {
                  const isSubCompleted = isQuizCompleted(selectedCategory, subcategory.id);
                  const bestSubScore = getBestScore(selectedCategory, subcategory.id);
                  
                  return (
                    <motion.div
                      key={subcategory.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                    >
                      <Card 
                        className={`glass-card p-4 cursor-pointer transition-all duration-300 hover:glow-primary relative ${
                          selectedSubcategory === subcategory.id ? 'ring-2 ring-primary bg-primary/5' : ''
                        }`}
                        onClick={() => setSelectedSubcategory(subcategory.id)}
                      >
                        {isSubCompleted && (
                          <div className="absolute top-2 right-2 bg-green-500 rounded-full p-1">
                            <Check className="h-3 w-3 text-white" />
                          </div>
                        )}
                        
                        <div className="text-center">
                          <h4 className="font-semibold mb-1">{subcategory.name}</h4>
                                <p className="text-sm text-muted-foreground">
                                  {subcategory.count} {t.questionsLabel}
                                </p>
                          
                          {bestSubScore !== null && (
                            <div className="mt-1 text-xs text-green-400">
                              {t.bestLabel} {bestSubScore}/{subcategory.count}
                            </div>
                          )}
                        </div>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>

              <div className="text-center">
                <Button 
                  variant="outline" 
                  onClick={resetSelection}
                  className="mr-4"
                >
                  {t.backToCategories}
                </Button>
              </div>
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-center"
          >
            <Card className="glass-card p-6 max-w-md mx-auto">
              <h3 className="font-semibold mb-4">{t.quizDetails}</h3>
              <div className="space-y-2 text-sm text-muted-foreground mb-6">
                <div className="flex justify-between">
                  <span>{t.questionsColon}</span>
                  <span>{Math.min(10, filteredQuestions.length)}</span>
                </div>
                <div className="flex justify-between">
                  <span>{t.timePerQuestion}</span>
                  <span>{t.timePerQuestionValue}</span>
                </div>
                <div className="flex justify-between">
                  <span>{t.categoryLabel}</span>
                  <span>
                    {categories.find(c => c.id === selectedCategory)?.name}
                    {selectedCategory !== "all" && selectedSubcategory !== "all" && (
                      <> - {selectedSubcategory.charAt(0).toUpperCase() + selectedSubcategory.slice(1)}</>
                    )}
                  </span>
                </div>
              </div>
              
              <Button 
                onClick={startQuiz} 
                size="lg" 
                className="w-full glow-primary"
                disabled={filteredQuestions.length === 0}
              >
                <Play className="h-4 w-4 mr-2" />
                {isQuizCompleted(selectedCategory, selectedSubcategory) ? t.retakeQuiz : t.startQuiz}
              </Button>
            </Card>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 pb-8 select-none">
      <div className="container mx-auto px-4 max-w-2xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 text-center"
        >
          <h1 className="text-4xl font-bold mb-4 glow-text">{t.interactiveQuizTitle}</h1>
          <p className="text-xl text-muted-foreground">{t.interactiveQuizSubtitle}</p>
        </motion.div>

        {/* Progress */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <Card className="glass-card p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">
                {t.questionOfLabel.replace('{current}', String(currentQuestion + 1)).replace('{total}', String(currentQuizQuestions.length))}
              </span>
              <Badge className="bg-primary/20 text-primary border-primary/30">
                {currentQuizQuestions[currentQuestion].category}
              </Badge>
            </div>
            <Progress 
              value={((currentQuestion + 1) / currentQuizQuestions.length) * 100} 
              className="h-2"
            />
          </Card>
        </motion.div>

        {/* Question Card */}
        <motion.div
          key={currentQuestion}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Card className="glass-card p-8 mb-6">
            {/* Timer and Speak Button */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>{t.timeLeftLabel.replace('{seconds}', String(timeLeft))}</span>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <Trophy className="h-4 w-4" />
                  <span>{t.scoreLabel.replace('{score}', String(score)).replace('{total}', String(currentQuestion + (showResult ? 1 : 0)))}</span>
                </div>
                
                {/* Speak Button */}
                <Button
                  variant="outline"
                  size="icon"
                  onClick={speakQuestion}
                  className="h-8 w-8"
                  title={t.readQuestionAloud}
                >
                  {isSpeaking ? (
                    <VolumeX className="h-4 w-4" />
                  ) : (
                    <Volume2 className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </div>

            {/* Question */}
            <h2 className="text-2xl font-semibold mb-8 leading-relaxed">
              {currentQuizQuestions[currentQuestion].question}
            </h2>

            {/* Answer Options */}
            {!showResult ? (
              <RadioGroup value={selectedAnswer} onValueChange={handleAnswer}>
                <div className="space-y-4">
                  {currentQuizQuestions[currentQuestion].options.map((option, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Label 
                        htmlFor={`option-${index}`}
                        className="flex items-center space-x-3 p-4 rounded-lg border border-border hover:bg-muted/20 cursor-pointer transition-all duration-200"
                      >
                        <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                        <span className="flex-1 text-lg">{option}</span>
                      </Label>
                    </motion.div>
                  ))}
                </div>
              </RadioGroup>
            ) : (
              <div className="space-y-4">
                {currentQuizQuestions[currentQuestion].options.map((option, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0.5 }}
                    animate={{ opacity: 1 }}
                    className={`flex items-center space-x-3 p-4 rounded-lg border transition-all duration-300 ${
                      index === currentQuizQuestions[currentQuestion].correctAnswer
                        ? "border-green-400 bg-green-400/10"
                        : index === userAnswers[currentQuestion] && index !== currentQuizQuestions[currentQuestion].correctAnswer
                          ? "border-red-400 bg-red-400/10"
                          : "border-border bg-muted/10"
                    }`}
                  >
                    {index === currentQuizQuestions[currentQuestion].correctAnswer ? (
                      <CheckCircle className="h-5 w-5 text-green-400" />
                    ) : index === userAnswers[currentQuestion] ? (
                      <XCircle className="h-5 w-5 text-red-400" />
                    ) : (
                      <div className="h-5 w-5 rounded-full border border-muted-foreground" />
                    )}
                    <span className="flex-1 text-lg">{option}</span>
                  </motion.div>
                ))}
                
                {/* Explanation */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="mt-6 p-4 bg-primary/5 border border-primary/20 rounded-lg"
                >
                  <h4 className="font-semibold mb-2 text-primary">{t.explanationLabel}</h4>
                  <p className="text-muted-foreground">{currentQuizQuestions[currentQuestion].explanation}</p>
                </motion.div>
              </div>
            )}

            {/* Submit Button */}
            {!showResult && (
              <div className="mt-8">
                <Button 
                  onClick={nextQuestion}
                  disabled={!selectedAnswer}
                  size="lg"
                  className="w-full glow-primary"
                >
                  {currentQuestion + 1 === currentQuizQuestions.length ? "Finish Quiz" : "Next Question"}
                  <Play className="h-4 w-4 ml-2" />
                </Button>
              </div>
            )}
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
