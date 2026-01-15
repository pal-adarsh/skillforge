import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
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
  Code,
  Atom,
  Book,
  Check,
  Volume2,
  VolumeX,
  ArrowLeft,
  Sparkles,
  Layers
} from "lucide-react";
import { quizQuestions } from "@/data/quizzes";
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/data/translations';
import { useFocusMode } from "@/hooks/useFocusMode";
import { FocusModeToggle } from "@/components/ui/focus-mode-toggle";

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
  const { 
    isFocusModeEnabled, 
    toggleFocusMode, 
    screenTimeData, 
    tabSwitchCount,
    isFullscreen,
    exitFullscreen
  } = useFocusMode();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string>("");
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);
  const [userAnswers, setUserAnswers] = useState<number[]>([]);
  
  // Navigation State
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null);
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

  // --------------------------------------------------------------------------
  // Filter Logic
  // --------------------------------------------------------------------------

  const categories = [
    { id: "coding", name: t.coding || "Coding", icon: Code, color: "from-blue-500 to-cyan-500" },
    { id: "science", name: t.science || "Science", icon: Atom, color: "from-purple-500 to-pink-500" },
    { id: "environment", name: t.environment || "Environment", icon: Book, color: "from-teal-500 to-emerald-500" },
    { id: "hygiene", name: t.hygiene || "Hygiene", icon: Sparkles, color: "from-cyan-500 to-blue-500" },
    { id: "first-aid", name: t.firstAid || "First Aid", icon: CheckCircle, color: "from-red-600 to-red-400" },
    { id: "folk-tales", name: t.folkTales || "Folk Tales", icon: Book, color: "from-indigo-500 to-violet-500" }
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
    : !selectedSubcategory || selectedSubcategory === "all"
      ? quizQuestions.filter(q => q.category === selectedCategory)
      : quizQuestions.filter(q => q.category === selectedCategory && q.tags.includes(selectedSubcategory));

  const currentQuizQuestions = filteredQuestions.slice(0, 10); // Limit to 10 questions per category

  // --------------------------------------------------------------------------
  // Audio & Anti-Cheat Logic
  // --------------------------------------------------------------------------

  const speakQuestion = () => {
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }

    const speech = new SpeechSynthesisUtterance();
    speech.text = currentQuizQuestions[currentQuestion].question;
    speech.rate = 0.9;
    
    speech.onend = () => setIsSpeaking(false);
    speech.onerror = () => setIsSpeaking(false);
    
    window.speechSynthesis.speak(speech);
    setIsSpeaking(true);
  };

  useEffect(() => {
    return () => {
      if (window.speechSynthesis) window.speechSynthesis.cancel();
    };
  }, []);

  // Simple anti-cheat hook
  useEffect(() => {
    const preventActions = (e: Event) => {
      if (quizStarted && !quizCompleted) {
        e.preventDefault();
        return false;
      }
    };
    
    if (quizStarted && !quizCompleted) {
        document.addEventListener('contextmenu', preventActions);
        document.addEventListener('copy', preventActions);
        document.addEventListener('cut', preventActions);
        document.addEventListener('paste', preventActions);
    }
    return () => {
        document.removeEventListener('contextmenu', preventActions);
        document.removeEventListener('copy', preventActions);
        document.removeEventListener('cut', preventActions);
        document.removeEventListener('paste', preventActions);
    };
  }, [quizStarted, quizCompleted]);


  // --------------------------------------------------------------------------
  // Quiz Flow Logic
  // --------------------------------------------------------------------------

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setSelectedSubcategory(null); // Reset subcategory when changing category
  };

  const handleSubcategorySelect = (subId: string) => {
    setSelectedSubcategory(subId);
  };

  const handleAnswer = (answer: string) => {
    setSelectedAnswer(answer);
  };

  const nextQuestion = () => {
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
        saveQuizProgress(
          selectedCategory, 
          selectedSubcategory || "all", 
          score + (answerIndex === currentQuizQuestions[currentQuestion].correctAnswer ? 1 : 0), 
          currentQuizQuestions.length
        );
      }
    }, 2000);
  };

  const restartQuiz = () => {
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
    // Don't reset category, so they stay in the result view or start view
  };

  const startQuiz = () => {
    setQuizStarted(true);
    setCurrentQuestion(0);
    setScore(0);
    setTimeLeft(30);
  };

  const handleBackToCategories = () => {
  setQuizCompleted(false);   // 🔑 unlocks view
  setQuizStarted(false);    // optional but recommended
  setSelectedCategory("all");
  setSelectedSubcategory(null);
  setCurrentQuestion(0);
  setScore(0);
};


  const handleBackToSubcategories = () => {
    setSelectedSubcategory(null);
  };

  const calculatePercentage = () => Math.round((score / currentQuizQuestions.length) * 100);
  
  const getScoreColor = () => {
    const percentage = calculatePercentage();
    if (percentage >= 80) return "text-green-500";
    if (percentage >= 60) return "text-yellow-500";
    return "text-red-500";
  };


  // --------------------------------------------------------------------------
  // Render Views
  // --------------------------------------------------------------------------

  if (quizCompleted) {
    return (
      <div className="min-h-screen pt-24 pb-8 bg-background/50">
        <div className="container mx-auto px-4 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center"
          >
            <Card className="border-none shadow-2xl bg-gradient-to-b from-card to-background p-8 overflow-hidden relative">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-purple-600" />
              
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.2, type: "spring" }}
                className="mb-8"
              >
                <div className="w-24 h-24 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                  <Award className={`h-12 w-12 ${getScoreColor()}`} />
                </div>
              </motion.div>
              
              <h1 className="text-3xl font-bold mb-2">{t.quizCompletedTitle}</h1>
              <p className="text-muted-foreground mb-8">You've completed the {selectedCategory} challenge!</p>
              
              <div className="mb-8 p-6 bg-muted/30 rounded-2xl border border-border/50">
                <div className={`text-6xl font-bold mb-2 ${getScoreColor()}`}>
                  {calculatePercentage()}%
                </div>
                <p className="text-lg font-medium text-muted-foreground">
                  {t.quizYouScored.replace('{score}', String(score)).replace('{total}', String(currentQuizQuestions.length))}
                </p>
              </div>
              
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center p-4 bg-green-500/10 rounded-xl border border-green-500/20">
                  <CheckCircle className="h-6 w-6 mx-auto mb-2 text-green-500" />
                  <div className="text-xl font-bold text-green-700 dark:text-green-400">{score}</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">{t.correctLabel}</div>
                </div>
                
                <div className="text-center p-4 bg-red-500/10 rounded-xl border border-red-500/20">
                  <XCircle className="h-6 w-6 mx-auto mb-2 text-red-500" />
                  <div className="text-xl font-bold text-red-700 dark:text-red-400">{currentQuizQuestions.length - score}</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">{t.incorrectLabel}</div>
                </div>
                
                <div className="text-center p-4 bg-primary/10 rounded-xl border border-primary/20">
                  <Trophy className="h-6 w-6 mx-auto mb-2 text-primary" />
                  <div className="text-xl font-bold text-primary">{score * 10}</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">XP Earned</div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button onClick={restartQuiz} size="lg" className="w-full sm:w-auto gap-2">
                  <RotateCcw className="h-4 w-4" />
                  {t.retakeQuiz}
                </Button>
                
                <Button variant="outline" size="lg" onClick={handleBackToCategories} className="w-full sm:w-auto gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  All Categories
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    );
  }

  // --------------------------------------------------------------------------
  // Main Selection Logic
  // --------------------------------------------------------------------------

  if (!quizStarted) {
    return (
      <div className="min-h-screen pt-24 pb-12 bg-background/50 relative">
        {/* Decorative background */}
        <div className="fixed inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none -z-10" />

        <div className="container mx-auto px-4 max-w-8xl">
          <AnimatePresence mode="wait">
            
            {/* VIEW 1: CATEGORY SELECTION */}
            {selectedCategory === "all" && (
              <motion.div
                key="categories"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-center mb-12">
                  <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
                    {t.chooseQuizCategory}
                  </h1>
                  <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    {t.testYourKnowledge}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                  {categories.map((category, index) => {
                    const isCompleted = isQuizCompleted(category.id);
                    const bestScore = getBestScore(category.id);
                    
                    return (
                      <motion.div
                        key={category.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                        whileHover={{ y: -5 }}
                      >
                        <Card 
                          className="h-full cursor-pointer hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 border-border/50 group overflow-hidden relative"
                          onClick={() => handleCategorySelect(category.id)}
                        >
                          <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${category.color} opacity-10 blur-3xl rounded-full transform translate-x-10 -translate-y-10 group-hover:opacity-20 transition-opacity`} />
                          
                          <div className="p-6 relative z-10">
                             {isCompleted && (
                                <div className="absolute top-4 right-4 bg-green-500 text-white text-[10px] font-bold px-2 py-1 rounded-full flex items-center gap-1 shadow-sm">
                                  <Check className="h-3 w-3" /> DONE
                                </div>
                              )}

                            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${category.color} shadow-lg flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                              <category.icon className="h-7 w-7 text-white" />
                            </div>
                            
                            <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">{category.name}</h3>
                            <p className="text-sm text-muted-foreground mb-4">
                               {quizQuestions.filter(q => q.category === category.id).length} {t.questionsLabel}
                            </p>

                            {bestScore !== null ? (
                                <div className="flex items-center gap-2 text-xs font-medium text-green-600 bg-green-500/10 px-3 py-1.5 rounded-full w-fit">
                                  <Trophy className="h-3 w-3" />
                                  Best: {bestScore}
                                </div>
                            ) : (
                                <div className="flex items-center gap-2 text-xs text-muted-foreground/50 px-1">
                                  <Brain className="h-3 w-3" />
                                  Not started
                                </div>
                            )}
                          </div>
                        </Card>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {/* VIEW 2: SUBCATEGORY SELECTION */}
            {selectedCategory !== "all" && (
              <motion.div
                key="subcategories"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className="max-w-7xl mx-auto"
              >
                <Button 
  variant="ghost"
  onClick={handleBackToCategories}
  className="group mb-8 -ml-4 flex items-center gap-2 transition-all hover:bg-muted/50 hover:scale-110 hover:text-orange-500"
>
  <ArrowLeft 
    className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1.5"
  />
  {t.backToCategories}
</Button>


                <div className="flex items-center gap-4 mb-8">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${categories.find(c => c.id === selectedCategory)?.color} shadow-lg flex items-center justify-center`}>
                     {(() => {
                        const CatIcon = categories.find(c => c.id === selectedCategory)?.icon || Book;
                        return <CatIcon className="h-8 w-8 text-white" />
                     })()}
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold">{categories.find(c => c.id === selectedCategory)?.name}</h2>
                    <p className="text-muted-foreground">Select a specific topic to master</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6 mb-8">
                   {/* Option 1: ALL TOPICS */}
                   <Card 
                      className={`cursor-pointer hover:shadow-lg transition-all duration-300 p-6 border-2 relative overflow-hidden group
                        ${selectedSubcategory === "all" || selectedSubcategory === null 
                          ? 'border-primary bg-primary/5' 
                          : 'border-border/50 hover:border-primary/30'}`}
                      onClick={() => handleSubcategorySelect("all")}
                    >
                       <div className="flex justify-between items-start">
                         <div className="p-3 bg-background rounded-xl shadow-sm group-hover:scale-105 transition-transform">
                            <Layers className="h-6 w-6 text-foreground" />
                         </div>
                         {isQuizCompleted(selectedCategory, "all") && (
                            <Badge className="bg-green-500 text-black hover:bg-green-600">Completed</Badge>
                         )}
                       </div>
                       <div className="mt-4">
                          <h3 className="font-bold text-lg">All Topics Mix</h3>
                          <p className="text-sm text-muted-foreground mt-1">
                             Challenge yourself with questions from the entire {categories.find(c => c.id === selectedCategory)?.name} collection.
                          </p>
                          <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
                             <span className="bg-muted px-2 py-1 rounded-md">
                                {quizQuestions.filter(q => q.category === selectedCategory).length} Questions
                             </span>
                          </div>
                       </div>
                    </Card>

                    {/* Option 2: SPECIFIC SUBCATEGORIES */}
                    {getSubcategories(selectedCategory).map((subcategory) => (
                       <Card 
                        key={subcategory.id}
                        className={`cursor-pointer hover:shadow-lg transition-all duration-300 p-6 border-2 relative overflow-hidden group
                          ${selectedSubcategory === subcategory.id 
                            ? 'border-primary bg-primary/5' 
                            : 'border-border/50 hover:border-primary/30'}`}
                        onClick={() => handleSubcategorySelect(subcategory.id)}
                      >
                         <div className="flex justify-between items-start">
                           <div className="p-3 bg-background rounded-xl shadow-sm group-hover:scale-105 transition-transform">
                              <Target className="h-6 w-6 text-primary" />
                           </div>
                           {isQuizCompleted(selectedCategory, subcategory.id) && (
                              <Badge className="bg-green-500 text-black hover:bg-green-600">Completed</Badge>
                           )}
                         </div>
                         <div className="mt-4">
                            <h3 className="font-bold text-lg">{subcategory.name}</h3>
                            <p className="text-sm text-muted-foreground mt-1">
                               Focus specifically on {subcategory.name} questions.
                            </p>
                            <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
                               <span className="bg-muted px-2 py-1 rounded-md">
                                  {subcategory.count} Questions
                               </span>
                            </div>
                         </div>
                      </Card>
                    ))}
                </div>

                {/* START QUIZ PANEL - Only visible when a subcategory is picked (or 'all' is default) */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-card border border-border/50 rounded-2xl p-6 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6"
                >
                    <div className="flex items-center gap-4">
                       <div className="p-4 bg-primary/10 rounded-full">
                          <Brain className="h-6 w-6 text-primary" />
                       </div>
                       <div>
                          <h4 className="font-bold text-lg">Ready to start?</h4>
                          <p className="text-sm text-muted-foreground">
                            Topic: <span className="text-foreground font-medium">
                                {selectedSubcategory && selectedSubcategory !== 'all' 
                                  ? selectedSubcategory.charAt(0).toUpperCase() + selectedSubcategory.slice(1) 
                                  : "All Topics"}
                            </span>
                          </p>
                       </div>
                    </div>

                    <Button 
  onClick={startQuiz} 
  size="lg"
  className="group w-full md:w-auto px-8 py-6 text-lg shadow-lg shadow-primary/20 
             hover:shadow-primary/40 transition-all"
>
  Start Quiz
  <Play 
    className="ml-2 h-5 w-5 fill-current transition-transform duration-300 
               group-hover:translate-x-1.5"
  />
</Button>

                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    );
  }

  // --------------------------------------------------------------------------
  // Active Quiz View
  // --------------------------------------------------------------------------

  return (
    <div className="min-h-screen pt-24 pb-12 bg-background select-none">
      {/* Focus Mode Toggle - Upper Right */}
      <div className="fixed top-20 right-4 z-40">
        <FocusModeToggle
          isEnabled={isFocusModeEnabled}
          onToggle={toggleFocusMode}
          totalTime={screenTimeData.totalTime}
          focusTime={screenTimeData.focusTime}
          tabSwitchCount={tabSwitchCount}
          isFullscreen={isFullscreen}
          onExitFullscreen={exitFullscreen}
        />
      </div>
      
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Header Area */}
        <div className="mb-8 flex items-center justify-between">
            <Button
  variant="ghost"
  size="sm"
  onClick={() => setQuizStarted(false)}
  className="group text-white hover:text-orange-500 transition-all"
>
  <XCircle
    className="h-5 w-5 mr-2 transition-transform duration-300 
               group-hover:scale-125 group-hover:rotate-90"
  />
  Quit
</Button>

            <div className="flex items-center gap-2">
                <Badge variant="outline" className="px-3 py-1">
                    {categories.find(c => c.id === selectedCategory)?.name}
                </Badge>
                {selectedSubcategory && selectedSubcategory !== 'all' && (
                    <Badge variant="secondary" className="px-3 py-1">
                        {selectedSubcategory}
                    </Badge>
                )}
            </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
           <div className="flex justify-between text-sm mb-2 font-medium">
              <span>Question {currentQuestion + 1} of {currentQuizQuestions.length}</span>
              <span className="text-muted-foreground">{Math.round(((currentQuestion + 1) / currentQuizQuestions.length) * 100)}%</span>
           </div>
           <Progress value={((currentQuestion + 1) / currentQuizQuestions.length) * 100} className="h-2" />
        </div>

        {/* Question Card */}
        <motion.div
          key={currentQuestion}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Card className="border-border/50 shadow-xl overflow-hidden">
            <div className="p-6 md:p-8">
              
              {/* Question Header: Timer & Tools */}
              <div className="flex items-center justify-between mb-6 pb-6 border-b border-border/50">
                <div className="flex items-center gap-2 bg-muted/50 px-3 py-1.5 rounded-full text-sm font-medium">
                   <Clock className="h-4 w-4 text-primary" />
                   <span>{timeLeft}s</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5 bg-yellow-500/10 text-yellow-600 px-3 py-1.5 rounded-full text-sm font-bold">
                    <Trophy className="h-4 w-4" />
                    <span>{score}</span>
                  </div>
                  
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={speakQuestion}
                    className={`rounded-full ${isSpeaking ? 'bg-primary/20 text-primary' : ''}`}
                  >
                    {isSpeaking ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                  </Button>
                </div>
              </div>

              {/* The Question */}
              <h2 className="text-2xl md:text-3xl font-bold mb-8 leading-relaxed text-foreground">
                {currentQuizQuestions[currentQuestion].question}
              </h2>

              {/* Options */}
              <RadioGroup value={selectedAnswer} onValueChange={handleAnswer} className="space-y-4">
                  {currentQuizQuestions[currentQuestion].options.map((option, index) => {
                     // Determine styling based on state
                     let containerStyle = "border-border hover:border-orange-500/60 hover:bg-orange-500/10 cursor-pointer";
                     let icon = <div className="h-5 w-5 rounded-full border-2 border-muted-foreground/30" />;
                     
                     if (showResult) {
                        if (index === currentQuizQuestions[currentQuestion].correctAnswer) {
                           containerStyle = "border-green-500 bg-green-500/10 text-green-700 dark:text-green-400";
                           icon = <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400" />;
                        } else if (index === parseInt(selectedAnswer)) {
                           containerStyle = "border-red-500 bg-red-500/10 text-red-700 dark:text-red-400";
                           icon = <XCircle className="h-5 w-5 text-red-600 dark:text-red-400" />;
                        } else {
                           containerStyle = "opacity-50 border-transparent bg-muted/20";
                        }
                     } else if (parseInt(selectedAnswer) === index) {
                        containerStyle = "border-primary bg-primary/5 shadow-sm ring-1 ring-primary/20";
                        icon = <div className="h-5 w-5 rounded-full border-[5px] border-primary" />;
                     }

                     return (
                      <motion.div
                        key={index}
                        whileHover={!showResult ? { scale: 1.01 } : {}}
                        whileTap={!showResult ? { scale: 0.99 } : {}}
                        className={`relative rounded-xl border-2 transition-all duration-200 ${containerStyle}`}
                      >
                        <Label 
                          htmlFor={`option-${index}`}
                          className="flex items-center gap-4 p-5 w-full h-full cursor-pointer"
                        >
                          {!showResult && <RadioGroupItem value={index.toString()} id={`option-${index}`} className="sr-only" />}
                          <div className="shrink-0">{icon}</div>
                          <span className="text-lg font-medium">{option}</span>
                        </Label>
                      </motion.div>
                    );
                  })}
              </RadioGroup>

               {/* Explanation Panel */}
               <AnimatePresence>
                 {showResult && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="mt-6 overflow-hidden"
                    >
                       <div className="bg-muted/50 rounded-xl p-5 border border-border">
                          <h4 className="flex items-center gap-2 font-bold text-sm text-muted-foreground uppercase tracking-wider mb-2">
                             <Sparkles className="h-4 w-4 text-yellow-500" /> Explanation
                          </h4>
                          <p className="text-foreground/90 leading-relaxed">
                             {currentQuizQuestions[currentQuestion].explanation}
                          </p>
                       </div>
                    </motion.div>
                 )}
               </AnimatePresence>
            </div>

            {/* Footer Action */}
            <div className="p-6 bg-muted/20 border-t border-border/50 flex justify-end">
               {!showResult ? (
                  <Button 
                    onClick={nextQuestion}
                    disabled={!selectedAnswer}
                    size="lg"
                    className="w-full sm:w-auto px-8 font-semibold shadow-lg shadow-primary/20"
                  >
                    Submit Answer
                  </Button>
               ) : (
                  <Button 
                    onClick={nextQuestion}
                    size="lg"
                    className="w-full sm:w-auto px-8 font-semibold"
                  >
                    {currentQuestion + 1 === currentQuizQuestions.length ? "Finish Quiz" : "Next Question"}
                    <Play className="h-4 w-4 ml-2 fill-current" />
                  </Button>
               )}
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}