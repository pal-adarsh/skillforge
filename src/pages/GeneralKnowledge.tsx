import { useState, useEffect, useRef } from "react";
import { useNetworkStatus } from "@/hooks/useNetworkStatus";
import { useAntiCheat } from "@/hooks/useAntiCheat";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import ReactMarkdown from "react-markdown";
import {
  BookOpen,
  GraduationCap,
  ArrowLeft,
  ChevronRight,
  CheckCircle2,
  XCircle,
  Newspaper,
  Atom,
  Landmark,
  Globe,
  Scale,
  TreePine,
  Medal,
  Rocket,
  TrendingUp,
  Church,
  Lightbulb,
  Sparkles,
  Play,
  Lock,
  Clock,
  Check,
  Volume2,
  VolumeX
} from "lucide-react";
import { gkCategories, GKCategory, GKTopic } from "@/data/gkLearnData";
import { gkTestCategories, GKTestCategory } from "@/data/gkTestData";
import { useFocusMode } from "@/hooks/useFocusMode";
import { FocusModeToggle } from "@/components/ui/focus-mode-toggle";
import { InactivityAlert, WelcomeBackMessage } from "@/components/ui/focus-mode-alerts";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Newspaper,
  Atom,
  Landmark,
  Globe,
  Scale,
  TreePine,
  Medal,
  Rocket,
  TrendingUp,
  Church,
};

const GeneralKnowledge = () => {
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
  const [activeTab, setActiveTab] = useState<"learn" | "test">("learn");
  const [selectedLearnCategory, setSelectedLearnCategory] = useState<GKCategory | null>(null);
  const [selectedTopic, setSelectedTopic] = useState<GKTopic | null>(null);
  const [selectedTestCategory, setSelectedTestCategory] = useState<GKTestCategory | null>(null);

  // Track completed topics to unlock advanced levels
  const [completedTopics, setCompletedTopics] = useState<string[]>([]);

  // Quiz states
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);

  // Enable anti-cheat only when actively taking a test
  const isTestActive = activeTab === "test" && selectedTestCategory !== null && !quizCompleted;
  useAntiCheat({ enabled: isTestActive, showWarnings: true });

  const handleSelectLearnCategory = (category: GKCategory) => {
    setSelectedLearnCategory(category);
    setSelectedTopic(null);
  };

  const isTopicLocked = (topic: GKTopic, category: GKCategory) => {
    // Beginner and Intermediate topics are always unlocked
    if (topic.difficulty === "Beginner" || topic.difficulty === "Intermediate") {
      return false;
    }

    // Only Advanced topics are locked until all Beginner topics are completed
    const beginnerTopics = category.topics.filter(
      t => t.difficulty === "Beginner"
    );

    const allBeginnersCompleted = beginnerTopics.every(
      t => completedTopics.includes(t.id)
    );

    return !allBeginnersCompleted;
  };


  const handleSelectTopic = (topic: GKTopic) => {
    if (selectedLearnCategory && isTopicLocked(topic, selectedLearnCategory)) return;
    setSelectedTopic(topic);
  };

  const handleMarkTopicComplete = () => {
    if (selectedTopic && !completedTopics.includes(selectedTopic.id)) {
      setCompletedTopics([...completedTopics, selectedTopic.id]);
    }
    // Optional: Auto-navigate back after completion
    handleBackToLearnCategories();
  };

  const handleBackToLearnCategories = () => {
    if (selectedTopic) {
      setSelectedTopic(null);
    } else {
      setSelectedLearnCategory(null);
    }
  };

  const handleSelectTestCategory = (category: GKTestCategory) => {
    setSelectedTestCategory(category);
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setAnswers({});
    setQuizCompleted(false);
  };

  const handleBackToTestCategories = () => {
    setSelectedTestCategory(null);
    setQuizCompleted(false);
  };

  const handleAnswerSelect = (answer: string) => {
    if (showResult) return;
    setSelectedAnswer(answer);
  };

  const handleSubmitAnswer = () => {
    if (!selectedAnswer || !selectedTestCategory) return;

    // stop any ongoing speech when submitting
    if (window.speechSynthesis) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }

    const currentQuestion = selectedTestCategory.questions[currentQuestionIndex];
    const isCorrect = selectedAnswer === currentQuestion.correctAnswer;

    if (isCorrect) {
      setScore(score + 1);
    }

    setAnswers({ ...answers, [currentQuestion.id]: selectedAnswer });
    setShowResult(true);
  };

  const handleNextQuestion = () => {
    if (!selectedTestCategory) return;
    // stop any ongoing speech when moving to next question
    if (window.speechSynthesis) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }

    if (currentQuestionIndex < selectedTestCategory.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const speakQuestion = () => {
    if (!selectedTestCategory) return;

    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }

    const currentQuestion = selectedTestCategory.questions[currentQuestionIndex];
    const speech = new SpeechSynthesisUtterance();
    speech.text = currentQuestion.question;
    speech.rate = 0.9;
    speech.pitch = 1;
    speech.volume = 1;

    speech.onend = () => setIsSpeaking(false);
    speech.onerror = () => setIsSpeaking(false);

    window.speechSynthesis.speak(speech);
    setIsSpeaking(true);
  };

  // cleanup speech on unmount
  useEffect(() => {
    return () => {
      if (window.speechSynthesis) window.speechSynthesis.cancel();
    };
  }, []);

  const renderLearnCategories = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {gkCategories.map((category, index) => {
        const IconComponent = iconMap[category.icon] || BookOpen;
        return (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <Card
              className="h-full cursor-pointer cyber-glass-card group"
              onClick={() => handleSelectLearnCategory(category)}
            >
              {/* Neon glow background */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${category.color} opacity-10 blur-3xl rounded-full transform translate-x-10 -translate-y-10 group-hover:opacity-30 transition-opacity`} />

              {/* optional category image */}
              {category.image && (
                <div className="w-full h-40 overflow-hidden">
                  <img src={category.image} alt={category.title} className="w-full h-full object-cover" />
                </div>
              )}

              <CardHeader className="pb-3 relative z-10">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${category.color} shadow-lg flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 cyber-icon-glow`}>
                  <IconComponent className="h-7 w-7 text-white" />
                </div>
                <CardTitle className="cyber-subtitle text-xl group-hover:text-[#ff0080] transition-colors">{category.title}</CardTitle>
                <CardDescription className="text-sm leading-relaxed text-gray-400">{category.description}</CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="flex items-center justify-between mt-2">
                  <Badge variant="secondary" className="cyber-badge-purple">
                    {category.topics.length} Topics
                  </Badge>
                  <div className="w-8 h-8 rounded-full bg-[#ff0080]/20 flex items-center justify-center group-hover:bg-[#ff0080] group-hover:text-white transition-all cyber-pulse">
                    <ChevronRight className="h-4 w-4" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        );
      })}
    </div>
  );

  const renderTopicsList = () => {
    if (!selectedLearnCategory) return null;
    const IconComponent = iconMap[selectedLearnCategory.icon] || BookOpen;

    return (
      <div className="space-y-8">
        {/* Category Header Section */}
        <div className="relative overflow-hidden rounded-3xl bg-card border border-border/50 p-8 shadow-sm">
          <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${selectedLearnCategory.color} opacity-10 blur-3xl rounded-full transform translate-x-20 -translate-y-20`} />

          <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-6">
            <Button
              variant="outline"
              size="icon"
              onClick={handleBackToLearnCategories}
              className="rounded-full h-10 w-10 bg-background/50 backdrop-blur-sm border-2 hover:bg-background"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>

            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${selectedLearnCategory.color} shadow-lg flex items-center justify-center`}>
              <IconComponent className="h-8 w-8 text-white" />
            </div>

            <div className="space-y-1">
              <div className="flex items-center gap-2 text-sm text-muted-foreground uppercase tracking-wider font-semibold">
                <Sparkles className="h-3 w-3 text-primary" />
                Selected Category
              </div>
              <h2 className="text-3xl font-bold tracking-tight">{selectedLearnCategory.title}</h2>
              <p className="text-muted-foreground max-w-2xl">{selectedLearnCategory.description}</p>
            </div>
          </div>
        </div>

        {/* Topics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {selectedLearnCategory.topics.map((topic, index) => {
            const isLocked = isTopicLocked(topic, selectedLearnCategory);
            const isCompleted = completedTopics.includes(topic.id);

            return (
              <motion.div
                key={topic.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Card
                  className={`group h-full flex flex-col transition-all duration-300 overflow-hidden relative
                    ${isLocked
                      ? 'bg-muted/30 border-dashed border-2 cursor-not-allowed opacity-75'
                      : 'cursor-pointer hover:shadow-xl hover:shadow-primary/5 hover:border-primary/40'
                    }
                  `}
                  onClick={() => handleSelectTopic(topic)}
                >
                  {/* Lock Overlay */}
                  {isLocked && (
                    <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-background/60 backdrop-blur-[2px]">
                      <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-2 shadow-sm">
                        <Lock className="h-5 w-5 text-muted-foreground" />
                      </div>
                      <p className="text-xs font-medium text-muted-foreground bg-background/80 px-3 py-1 rounded-full border border-border/50">
                        Complete Beginner Topics to Unlock
                      </p>
                    </div>
                  )}

                  {/* Complete Badge Overlay */}
                  {isCompleted && (
                    <div className="absolute top-4 right-4 z-20 bg-green-500 text-white text-[10px] font-bold px-2 py-1 rounded-full flex items-center gap-1 shadow-sm">
                      <Check className="h-3 w-3" /> DONE
                    </div>
                  )}

                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex gap-2">
                        {/* Difficulty Badge */}
                        <Badge variant="outline" className={`
                          ${topic.difficulty === 'Beginner' ? 'border-green-500/50 text-green-600 bg-green-500/5' : ''}
                          ${topic.difficulty === 'Intermediate' ? 'border-yellow-500/50 text-yellow-600 bg-yellow-500/5' : ''}
                          ${topic.difficulty === 'Advanced' ? 'border-red-500/50 text-red-600 bg-red-500/5' : ''}
                        `}>
                          {topic.difficulty}
                        </Badge>
                      </div>
                      {/* Read Time */}
                      <div className="flex items-center text-xs text-muted-foreground gap-1">
                        <Clock className="h-3 w-3" />
                        {topic.readTime}
                      </div>
                    </div>
                    <CardTitle className="text-xl mb-2 text-primary line-clamp-1" title={topic.title}>
                      {topic.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground text-sm line-clamp-3 leading-relaxed">
                      {topic.content}
                    </p>
                  </CardContent>

                  <CardFooter className="pt-0 pb-6">
                    <Button
                      variant="ghost"
                      disabled={isLocked}
                      className="w-full justify-between group-hover:bg-primary/5 group-hover:text-primary transition-all"
                    >
                      <span className="font-medium">
                        {isCompleted ? "Read Again" : "Start Reading"}
                      </span>
                      {isLocked ? (
                        <Lock className="h-4 w-4 text-muted-foreground/50" />
                      ) : (
                        <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      )}
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    );
  };

  const renderTopicContent = () => {
    if (!selectedTopic || !selectedLearnCategory) return null;
    const isCompleted = completedTopics.includes(selectedTopic.id);

    return (
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <Button variant="ghost" className="hover:scale-125 hover:text-primary" size="icon" onClick={handleBackToLearnCategories}>
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>{selectedLearnCategory.title}</span>
              <ChevronRight className="h-3 w-3" />
              <Badge variant="outline" className="text-xs">{selectedTopic.difficulty}</Badge>
            </div>
            <h2 className="text-2xl font-bold mt-1">{selectedTopic.title}</h2>
          </div>
        </div>

        <Card className="border-border/50 shadow-lg">
          <CardContent className="p-8 space-y-8">
            <div className="prose prose-slate dark:prose-invert max-w-none">
              <ReactMarkdown
                components={{
                  p: ({ children, node, ...props }) => {
                    const isFirstParagraph =
                      node?.position?.start?.offset === 0;

                    return (
                      <p
                        className={`text-md leading-loose text-foreground/90 ${isFirstParagraph
                          ? "first-letter:text-5xl first-letter:font-bold first-letter:text-primary first-letter:mr-3 first-letter:float-left"
                          : ""
                          }`}
                      >
                        {children}
                      </p>
                    );
                  },
                  img: ({ src, alt }) => {
                    const ContentImage = ({ src, alt }: { src?: string; alt?: string }) => {
                      const { isOnline } = useNetworkStatus();
                      const [hasError, setHasError] = useState(false);

                      // Don't render images when offline
                      if (!isOnline) {
                        return null;
                      }

                      if (hasError) {
                        return (
                          <div className="w-48 h-32 rounded-md mx-auto overflow-hidden bg-muted/10 flex items-center justify-center">
                            <div className="text-xs text-muted-foreground text-center">Image not available</div>
                          </div>
                        );
                      }

                      return (
                        <div className="w-48 h-32 rounded-md mx-auto overflow-hidden bg-muted/10">
                          <img
                            src={src ?? ''}
                            alt={alt ?? ''}
                            className="w-full h-full object-cover"
                            onError={() => setHasError(true)}
                          />
                        </div>
                      );
                    };

                    return <ContentImage src={src ?? ''} alt={alt ?? ''} />;
                  },
                }}
              >
                {selectedTopic.content}
              </ReactMarkdown>
            </div>


            {selectedTopic.keyPoints && selectedTopic.keyPoints.length > 0 && (
              <div className="bg-muted/30 rounded-2xl p-6 border border-border/50">
                <h3 className="text-lg font-semibold text-primary flex items-center gap-2 mb-4">
                  <Sparkles className="h-4 w-4" />
                  Key Takeaways
                </h3>
                <div className="grid gap-3">
                  {selectedTopic.keyPoints.map((point, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3 p-3 rounded-lg bg-background shadow-sm border border-border/50"
                    >
                      <div className="mt-1 bg-green-500/10 p-1 rounded-full">
                        <CheckCircle2 className="h-3 w-3 text-green-600 dark:text-green-400 shrink-0" />
                      </div>
                      <span className="text-foreground/80 leading-relaxed">{point}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {selectedTopic.funFacts && selectedTopic.funFacts.length > 0 && (
              <div className="bg-muted/30 rounded-2xl p-6 border border-border/50">
                <h3 className="text-lg font-semibold text-primary flex items-center gap-2 mb-4">
                  <Sparkles className="h-4 w-4" />
                  Fun Facts
                </h3>
                <div className="grid gap-3">
                  {selectedTopic.funFacts.map((fact, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      className="flex items-start gap-3 p-3 rounded-lg bg-background shadow-sm border border-border/50"
                    >
                      <div className="mt-1 bg-primary/10 p-1 rounded-full">
                        <Sparkles className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-foreground/80 leading-relaxed">{fact}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            <div className="pt-8 border-t flex justify-center">
              {!isCompleted ? (
                <Button size="lg" onClick={handleMarkTopicComplete} className="w-full sm:w-auto gap-2">
                  <CheckCircle2 className="h-4 w-4" />
                  Mark as Completed
                </Button>
              ) : (
                <Button size="lg" variant="outline" disabled className="w-full sm:w-auto gap-2 text-green-600 border-green-200 bg-green-50">
                  <Check className="h-4 w-4" />
                  Completed
                </Button>
              )}
            </div>

          </CardContent>
        </Card>
      </div>
    );
  };

  const renderTestCategories = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {gkTestCategories.map((category, index) => {
        const IconComponent = iconMap[category.icon] || GraduationCap;
        return (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <Card
              className="cursor-pointer hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/30 group overflow-hidden"
              onClick={() => handleSelectTestCategory(category)}
            >
              <CardHeader className="pb-3">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                  <IconComponent className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-lg group-hover:text-primary transition-colors">{category.title}</CardTitle>
                <CardDescription className="text-sm">{category.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary">{category.questions.length} Questions</Badge>
                  <Button size="sm" variant="ghost" className="group-hover:bg-primary/10 group-hover:text-primary">
                    Start <Play className="ml-2 h-3 w-3" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        );
      })}
    </div>
  );

  const renderQuiz = () => {
    if (!selectedTestCategory) return null;

    if (quizCompleted) {
      return (
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={handleBackToTestCategories}>
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <h2 className="text-2xl font-bold">Quiz Completed!</h2>
          </div>

          <Card className="border-border/50 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-purple-600" />
            <CardContent className="p-12 text-center space-y-8">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring" }}
                className="w-32 h-32 rounded-full bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center mx-auto mb-6"
              >
                <Medal className="h-16 w-16 text-primary" />
              </motion.div>

              <div className="space-y-2">
                <h3 className="text-4xl font-bold">
                  {score} <span className="text-muted-foreground text-2xl">/ {selectedTestCategory.questions.length}</span>
                </h3>
                <p className="text-lg text-muted-foreground max-w-md mx-auto">
                  {score >= selectedTestCategory.questions.length * 0.8
                    ? "Outstanding! You have a solid grasp of this topic."
                    : score >= selectedTestCategory.questions.length * 0.5
                      ? "Good effort! Review the topics to score higher next time."
                      : "Keep practicing! Don't give up, learning takes time."}
                </p>
              </div>

              <div className="flex gap-4 justify-center pt-4">
                <Button variant="outline" size="lg" onClick={handleBackToTestCategories}>
                  Explore Other Topics
                </Button>
                <Button size="lg" onClick={() => handleSelectTestCategory(selectedTestCategory)}>
                  Retry Quiz
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      );
    }

    const currentQuestion = selectedTestCategory.questions[currentQuestionIndex];
    const progress = ((currentQuestionIndex + 1) / selectedTestCategory.questions.length) * 100;

    return (
      <div className="space-y-6 max-w-6xl mx-auto">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={handleBackToTestCategories}>
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div className="flex-1">
            <h2 className="text-xl font-bold">{selectedTestCategory.title}</h2>
            <div className="flex items-center gap-2 mt-1">
              <Badge variant="outline" className="text-xs">
                Question {currentQuestionIndex + 1}/{selectedTestCategory.questions.length}
              </Badge>
              <Badge variant="secondary" className="text-xs bg-primary/10 text-primary">
                Current Score: {score}
              </Badge>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>Progress</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        <Card className="border-border/50 shadow-md">
          <CardContent className="p-6 md:p-8 space-y-8 select-none">
            <div className="space-y-4">
              <Badge className="mb-2">
                {currentQuestion.type === "mcq" ? "Multiple Choice" : "True / False"}
              </Badge>
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-xl md:text-2xl font-medium leading-relaxed select-none flex-1">
                  {currentQuestion.question}
                </h3>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={speakQuestion}
                  className="h-8 w-8"
                  title="Read question aloud"
                >
                  {isSpeaking ? (
                    <VolumeX className="h-4 w-4" />
                  ) : (
                    <Volume2 className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </div>

            <div className="grid gap-3 select-none">
              {currentQuestion.type === "mcq" && currentQuestion.options ? (
                currentQuestion.options.map((option, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: showResult ? 1 : 1.01 }}
                    whileTap={{ scale: showResult ? 1 : 0.99 }}
                    className={`w-full p-4 rounded-xl text-left transition-all border-2 relative overflow-hidden ${showResult
                      ? option === currentQuestion.correctAnswer
                        ? "bg-green-500/10 border-green-500/50 text-green-700 dark:text-green-400"
                        : option === selectedAnswer
                          ? "bg-red-500/10 border-red-500/50 text-red-700 dark:text-red-400"
                          : "bg-muted/30 border-transparent opacity-50"
                      : selectedAnswer === option
                        ? "bg-primary/10 border-primary shadow-sm"
                        : "bg-card border-border hover:bg-primary/10 hover:border-primary/60"
                      }`}
                    onClick={() => handleAnswerSelect(option)}
                    disabled={showResult}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{option}</span>
                      {showResult && option === currentQuestion.correctAnswer && (
                        <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" />
                      )}
                      {showResult && option === selectedAnswer && option !== currentQuestion.correctAnswer && (
                        <XCircle className="h-5 w-5 text-red-500 shrink-0" />
                      )}
                    </div>
                  </motion.button>
                ))
              ) : (
                ["true", "false"].map((option) => (
                  <motion.button
                    key={option}
                    whileHover={{ scale: showResult ? 1 : 1.01 }}
                    whileTap={{ scale: showResult ? 1 : 0.99 }}
                    className={`w-full p-6 rounded-xl text-left transition-all border-2 ${showResult
                      ? option === currentQuestion.correctAnswer
                        ? "bg-green-500/10 border-green-500/50"
                        : option === selectedAnswer
                          ? "bg-red-500/10 border-red-500/50"
                          : "bg-muted/30 border-transparent opacity-50"
                      : selectedAnswer === option
                        ? "bg-primary/10 border-primary"
                        : "bg-card border-border hover:border-blue-500/50 hover:bg-blue-50/50"
                      }`}
                    onClick={() => handleAnswerSelect(option)}
                    disabled={showResult}
                  >
                    <div className="flex items-center justify-between">
                      <span className="capitalize font-semibold text-lg">{option}</span>
                      {showResult && option === currentQuestion.correctAnswer && (
                        <CheckCircle2 className="h-6 w-6 text-green-500" />
                      )}
                      {showResult && option === selectedAnswer && option !== currentQuestion.correctAnswer && (
                        <XCircle className="h-6 w-6 text-red-500" />
                      )}
                    </div>
                  </motion.button>
                ))
              )}
            </div>

            <AnimatePresence>
              {showResult && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="rounded-lg bg-muted/50 border border-border overflow-hidden"
                >
                  <div className="p-4 flex gap-3">
                    <Lightbulb className="h-5 w-5 text-yellow-500 shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-sm text-foreground mb-1">Explanation</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {currentQuestion.explanation}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="flex justify-end pt-4">
              {!showResult ? (
                <Button size="lg" onClick={handleSubmitAnswer} disabled={!selectedAnswer} className="w-full sm:w-auto">
                  Submit Answer
                </Button>
              ) : (
                <Button size="lg" onClick={handleNextQuestion} className="w-full sm:w-auto">
                  {currentQuestionIndex < selectedTestCategory.questions.length - 1
                    ? "Next Question"
                    : "See Results"}
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    );
  };

  return (
    <div className="cyber-gk-page min-h-screen pt-16 pb-12 cyber-bg relative overflow-hidden">
      {/* Cyberpunk Background Effects */}
      <div className="cyber-gradient-overlay" />
      <div className="cyber-grid" />

      {/* Floating Orbs */}
      <div className="cyber-orb cyber-orb-pink" />
      <div className="cyber-orb cyber-orb-purple" />
      <div className="cyber-orb cyber-orb-cyan" />

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

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10 text-center"
        >
          <h1 className="cyber-title text-4xl md:text-6xl mb-6">
            General Knowledge
          </h1>
          <p className="text-gray-300 text-lg max-w-4xl mx-auto leading-relaxed">
            Expand your horizons with our curated learning materials and challenge yourself with interactive quizzes.
            <br />
            <span className="cyber-text-glow font-semibold">A chronological GK journey tracing knowledge from the birth of the universe to today's world.</span>
          </p>
        </motion.div>

        <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as "learn" | "test")} className="space-y-8">
          <div className="flex justify-center">
            <TabsList className="grid w-full max-w-md grid-cols-2 p-1 cyber-glass-card">
              <TabsTrigger value="learn" className="flex items-center gap-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#ff0080] data-[state=active]:to-[#8b5cf6] data-[state=active]:text-white transition-all font-['Orbitron'] font-semibold">
                <BookOpen className="h-4 w-4" />
                Learn
              </TabsTrigger>
              <TabsTrigger value="test" className="flex items-center gap-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#ff0080] data-[state=active]:to-[#8b5cf6] data-[state=active]:text-white transition-all font-['Orbitron'] font-semibold">
                <GraduationCap className="h-4 w-4" />
                Test
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="learn" className="space-y-6 focus-visible:outline-none">
            <AnimatePresence mode="wait">
              {selectedTopic ? (
                <motion.div
                  key="topic-content"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {renderTopicContent()}
                </motion.div>
              ) : selectedLearnCategory ? (
                <motion.div
                  key="topics-list"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {renderTopicsList()}
                </motion.div>
              ) : (
                <motion.div
                  key="categories"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  {renderLearnCategories()}
                </motion.div>
              )}
            </AnimatePresence>
          </TabsContent>

          <TabsContent value="test" className="space-y-6 focus-visible:outline-none">
            <AnimatePresence mode="wait">
              {selectedTestCategory ? (
                <motion.div
                  key="quiz"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  {renderQuiz()}
                </motion.div>
              ) : (
                <motion.div
                  key="test-categories"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                >
                  {renderTestCategories()}
                </motion.div>
              )}
            </AnimatePresence>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default GeneralKnowledge;