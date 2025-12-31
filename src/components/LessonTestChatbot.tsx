import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { 
  MessageCircle, 
  X, 
  Brain, 
  CheckCircle, 
  XCircle,
  Loader2,
  Trophy,
  RotateCcw
} from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface Question {
  id: number;
  type: "mcq" | "truefalse" | "shortanswer";
  question: string;
  options?: string[];
  correctAnswer: string;
  explanation: string;
}

interface TestData {
  testTitle: string;
  questions: Question[];
}

interface LessonTestChatbotProps {
  lessonTitle: string;
  lessonContent: string;
  lessonDifficulty: string;
}

export const LessonTestChatbot = ({ 
  lessonTitle, 
  lessonContent, 
  lessonDifficulty 
}: LessonTestChatbotProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [testData, setTestData] = useState<TestData | null>(null);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);
  const { toast } = useToast();

  const generateTest = async () => {
    setIsLoading(true);
    setTestData(null);
    setAnswers({});
    setShowResults(false);

    try {
      const { data, error } = await supabase.functions.invoke('generate-test', {
        body: {
          lessonTitle,
          lessonContent: lessonContent.substring(0, 4000),
          difficulty: lessonDifficulty
        }
      });

      if (error) {
        // Check if it's a rate limit error
        if (error.message?.includes('429') || error.context?.status === 429) {
          throw new Error('API is busy. Please wait a moment and try again.');
        }
        throw error;
      }
      
      if (data?.error) {
        throw new Error(data.isRateLimit 
          ? 'API is busy. Please wait a moment and try again.' 
          : data.error
        );
      }

      setTestData(data);
      toast({
        title: "Test Generated!",
        description: `${data.questions?.length || 5} questions ready for you.`,
      });
    } catch (error) {
      console.error('Error generating test:', error);
      toast({
        title: "Error",
        description: "Failed to generate test. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleAnswerChange = (questionId: number, answer: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: answer }));
  };

  const calculateScore = () => {
    if (!testData) return { correct: 0, total: 0 };
    
    let correct = 0;
    testData.questions.forEach(q => {
      const userAnswer = answers[q.id]?.toLowerCase().trim();
      const correctAnswer = q.correctAnswer.toLowerCase().trim();
      
      if (q.type === "shortanswer") {
        // For short answers, check if key words are present
        const keywords = correctAnswer.split(/\s+/);
        const matches = keywords.filter(kw => userAnswer?.includes(kw.toLowerCase()));
        if (matches.length >= keywords.length / 2) correct++;
      } else {
        if (userAnswer === correctAnswer) correct++;
      }
    });
    
    return { correct, total: testData.questions.length };
  };

  const submitTest = () => {
    setShowResults(true);
    const { correct, total } = calculateScore();
    toast({
      title: "Test Submitted!",
      description: `You scored ${correct}/${total} (${Math.round((correct/total)*100)}%)`,
    });
  };

  const resetTest = () => {
    setTestData(null);
    setAnswers({});
    setShowResults(false);
  };

  const { correct, total } = calculateScore();
  const allAnswered = testData ? Object.keys(answers).length === testData.questions.length : false;

  return (
    <>
      {/* Floating Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1 }}
      >
        <Button
          onClick={() => setIsOpen(true)}
          className="h-14 w-14 rounded-full shadow-lg bg-primary hover:bg-primary/90"
          size="icon"
        >
          <Brain className="h-6 w-6" />
        </Button>
      </motion.div>

      {/* Chatbot Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 400 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 400 }}
            className="fixed right-0 top-0 h-full w-full sm:w-[420px] z-50 shadow-2xl"
          >
            <Card className="h-full flex flex-col bg-background/95 backdrop-blur-lg border-l border-border rounded-none">
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-border">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <Brain className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">AI Test Generator</h3>
                    <p className="text-xs text-muted-foreground">Test your knowledge</p>
                  </div>
                </div>
                <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                  <X className="h-5 w-5" />
                </Button>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {!testData && !isLoading && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center py-8"
                  >
                    <Brain className="h-16 w-16 mx-auto mb-4 text-primary/50" />
                    <h4 className="text-lg font-semibold mb-2">Ready to Test Yourself?</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Generate a quick 5-question test based on:
                    </p>
                    <Badge className="mb-6">{lessonTitle}</Badge>
                    <Button 
                      onClick={generateTest} 
                      className="w-full"
                      size="lg"
                    >
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Generate Test
                    </Button>
                  </motion.div>
                )}

                {isLoading && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center py-16"
                  >
                    <Loader2 className="h-12 w-12 mx-auto mb-4 text-primary animate-spin" />
                    <p className="text-muted-foreground">Generating your test...</p>
                    <p className="text-xs text-muted-foreground mt-2">Powered by Gemini AI</p>
                  </motion.div>
                )}

                {testData && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="space-y-4"
                  >
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold">{testData.testTitle}</h4>
                      <Button variant="ghost" size="sm" onClick={resetTest}>
                        <RotateCcw className="h-4 w-4 mr-1" />
                        New Test
                      </Button>
                    </div>

                    {testData.questions.map((q, idx) => (
                      <Card key={q.id} className="p-4 bg-muted/50">
                        <div className="flex items-start gap-2 mb-3">
                          <Badge variant="outline" className="text-xs shrink-0">
                            Q{idx + 1}
                          </Badge>
                          <Badge variant="secondary" className="text-xs shrink-0">
                            {q.type === "mcq" ? "MCQ" : q.type === "truefalse" ? "T/F" : "Short"}
                          </Badge>
                        </div>
                        <p className="text-sm font-medium mb-3">{q.question}</p>

                        {q.type === "mcq" && q.options && (
                          <RadioGroup
                            value={answers[q.id] || ""}
                            onValueChange={(v) => handleAnswerChange(q.id, v)}
                            disabled={showResults}
                          >
                            {q.options.map((opt, optIdx) => {
                              const optLetter = opt.charAt(0);
                              const isCorrect = showResults && optLetter.toLowerCase() === q.correctAnswer.toLowerCase();
                              const isSelected = answers[q.id] === optLetter;
                              const isWrong = showResults && isSelected && !isCorrect;
                              
                              return (
                                <div 
                                  key={optIdx} 
                                  className={`flex items-center space-x-2 p-2 rounded-md transition-colors ${
                                    isCorrect ? 'bg-green-500/20' : isWrong ? 'bg-red-500/20' : ''
                                  }`}
                                >
                                  <RadioGroupItem value={optLetter} id={`q${q.id}-opt${optIdx}`} />
                                  <Label htmlFor={`q${q.id}-opt${optIdx}`} className="text-sm cursor-pointer flex-1">
                                    {opt}
                                  </Label>
                                  {showResults && isCorrect && <CheckCircle className="h-4 w-4 text-green-500" />}
                                  {showResults && isWrong && <XCircle className="h-4 w-4 text-red-500" />}
                                </div>
                              );
                            })}
                          </RadioGroup>
                        )}

                        {q.type === "truefalse" && (
                          <RadioGroup
                            value={answers[q.id] || ""}
                            onValueChange={(v) => handleAnswerChange(q.id, v)}
                            disabled={showResults}
                            className="flex gap-4"
                          >
                            {["True", "False"].map((opt) => {
                              const isCorrect = showResults && opt.toLowerCase() === q.correctAnswer.toLowerCase();
                              const isSelected = answers[q.id]?.toLowerCase() === opt.toLowerCase();
                              const isWrong = showResults && isSelected && !isCorrect;
                              
                              return (
                                <div 
                                  key={opt}
                                  className={`flex items-center space-x-2 p-2 px-4 rounded-md transition-colors ${
                                    isCorrect ? 'bg-green-500/20' : isWrong ? 'bg-red-500/20' : 'bg-background'
                                  }`}
                                >
                                  <RadioGroupItem value={opt} id={`q${q.id}-${opt}`} />
                                  <Label htmlFor={`q${q.id}-${opt}`} className="cursor-pointer">{opt}</Label>
                                  {showResults && isCorrect && <CheckCircle className="h-4 w-4 text-green-500" />}
                                  {showResults && isWrong && <XCircle className="h-4 w-4 text-red-500" />}
                                </div>
                              );
                            })}
                          </RadioGroup>
                        )}

                        {q.type === "shortanswer" && (
                          <div>
                            <Input
                              placeholder="Type your answer..."
                              value={answers[q.id] || ""}
                              onChange={(e) => handleAnswerChange(q.id, e.target.value)}
                              disabled={showResults}
                              className="text-sm"
                            />
                            {showResults && (
                              <p className="text-xs text-muted-foreground mt-2">
                                <strong>Expected:</strong> {q.correctAnswer}
                              </p>
                            )}
                          </div>
                        )}

                        {showResults && (
                          <p className="text-xs text-muted-foreground mt-3 p-2 bg-background rounded">
                            💡 {q.explanation}
                          </p>
                        )}
                      </Card>
                    ))}
                  </motion.div>
                )}
              </div>

              {/* Footer */}
              {testData && !showResults && (
                <div className="p-4 border-t border-border">
                  <Button 
                    onClick={submitTest} 
                    className="w-full"
                    disabled={!allAnswered}
                  >
                    <CheckCircle className="h-4 w-4 mr-2" />
                    Submit Test ({Object.keys(answers).length}/{testData.questions.length} answered)
                  </Button>
                </div>
              )}

              {showResults && (
                <div className="p-4 border-t border-border">
                  <Card className="p-4 bg-primary/10 border-primary/30">
                    <div className="flex items-center gap-3">
                      <Trophy className="h-8 w-8 text-primary" />
                      <div>
                        <p className="font-semibold">Your Score</p>
                        <p className="text-2xl font-bold text-primary">
                          {correct}/{total} ({Math.round((correct/total)*100)}%)
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              )}
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
