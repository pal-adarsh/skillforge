import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { progressRateLimiter, logSecurityEvent } from '@/lib/security-utils';

export interface LessonProgress {
  id?: string;
  user_id: string;
  lesson_id: string;
  category: string;
  completed: boolean;
  progress_percentage: number;
  started_at?: string;
  completed_at?: string;
}

export interface QuizProgress {
  id?: string;
  user_id: string;
  quiz_id: string;
  category: string;
  difficulty: string;
  score: number;
  total_questions: number;
  completed: boolean;
  time_taken?: number;
  answers?: any;
  completed_at?: string;
}

export const useProgressTracking = () => {
  const { user } = useAuth();
  const [lessonProgress, setLessonProgress] = useState<LessonProgress[]>([]);
  const [quizProgress, setQuizProgress] = useState<QuizProgress[]>([]);
  const [loading, setLoading] = useState(false);

  // Load progress from local storage with validation
  const loadLocalProgress = () => {
    try {
      const localLessonProgress = localStorage.getItem('lesson_progress');
      const localQuizProgress = localStorage.getItem('quiz_progress');
      
      if (localLessonProgress) {
        const parsed = JSON.parse(localLessonProgress);
        // Validate data structure
        if (Array.isArray(parsed) && parsed.every(item => 
          typeof item === 'object' && 
          item.lesson_id && 
          item.user_id && 
          typeof item.progress_percentage === 'number'
        )) {
          setLessonProgress(parsed);
        }
      }
      if (localQuizProgress) {
        const parsed = JSON.parse(localQuizProgress);
        // Validate data structure
        if (Array.isArray(parsed) && parsed.every(item => 
          typeof item === 'object' && 
          item.quiz_id && 
          item.user_id && 
          typeof item.score === 'number'
        )) {
          setQuizProgress(parsed);
        }
      }
    } catch (error) {
      // Clear corrupted data
      localStorage.removeItem('lesson_progress');
      localStorage.removeItem('quiz_progress');
      console.warn('Corrupted local storage data cleared');
    }
  };

  // Save progress to local storage
  const saveToLocalStorage = (lessons: LessonProgress[], quizzes: QuizProgress[]) => {
    localStorage.setItem('lesson_progress', JSON.stringify(lessons));
    localStorage.setItem('quiz_progress', JSON.stringify(quizzes));
  };

  // Fetch progress from Supabase
  const fetchProgress = async () => {
    if (!user) return;

    setLoading(true);
    try {
      const [lessonsResponse, quizzesResponse] = await Promise.all([
        supabase
          .from('lesson_progress')
          .select('*')
          .eq('user_id', user.id),
        supabase
          .from('quiz_progress')
          .select('*')
          .eq('user_id', user.id)
      ]);

      if (lessonsResponse.data) {
        setLessonProgress(lessonsResponse.data);
      }
      if (quizzesResponse.data) {
        setQuizProgress(quizzesResponse.data);
      }

      // Save to local storage
      saveToLocalStorage(
        lessonsResponse.data || [],
        quizzesResponse.data || []
      );
    } catch (error) {
      console.warn('Failed to fetch progress from database');
    } finally {
      setLoading(false);
    }
  };

  // Sync local progress to Supabase
  const syncToSupabase = async () => {
    if (!user) return;

    try {
      // Sync lesson progress
      for (const lesson of lessonProgress) {
        if (!lesson.id) {
          await supabase
            .from('lesson_progress')
            .upsert({
              user_id: user.id,
              lesson_id: lesson.lesson_id,
              category: lesson.category,
              completed: lesson.completed,
              progress_percentage: lesson.progress_percentage,
              started_at: lesson.started_at,
              completed_at: lesson.completed_at
            });
        }
      }

      // Sync quiz progress
      for (const quiz of quizProgress) {
        if (!quiz.id) {
          await supabase
            .from('quiz_progress')
            .upsert({
              user_id: user.id,
              quiz_id: quiz.quiz_id,
              category: quiz.category,
              difficulty: quiz.difficulty,
              score: quiz.score,
              total_questions: quiz.total_questions,
              completed: quiz.completed,
              time_taken: quiz.time_taken,
              answers: quiz.answers,
              completed_at: quiz.completed_at
            });
        }
      }

      // Refresh data after sync
      await fetchProgress();
    } catch (error) {
      console.warn('Failed to sync progress to database');
    }
  };

  // Input validation helper
  const validateInput = (value: string, type: 'lessonId' | 'category' | 'quizId' | 'difficulty'): boolean => {
    if (!value || typeof value !== 'string') return false;
    const maxLength = type === 'category' || type === 'difficulty' ? 50 : 100;
    return value.trim().length > 0 && value.length <= maxLength && /^[a-zA-Z0-9_-]+$/.test(value);
  };

  // Update lesson progress
  const updateLessonProgress = async (
    lessonId: string,
    category: string,
    progressPercentage: number,
    completed: boolean = false
  ) => {
    // Input validation
    if (!validateInput(lessonId, 'lessonId') || !validateInput(category, 'category')) {
      logSecurityEvent('Invalid input to updateLessonProgress', { lessonId, category });
      return;
    }

    // Rate limiting
    if (!progressRateLimiter.isAllowed(user.id)) {
      logSecurityEvent('Rate limit exceeded for lesson progress update', { userId: user.id });
      return;
    }
    
    if (typeof progressPercentage !== 'number' || progressPercentage < 0 || progressPercentage > 100) {
      console.warn('Invalid progress percentage');
      return;
    }

    // Only proceed if user is authenticated for database operations
    if (!user) {
      console.warn('User not authenticated - skipping progress update');
      return;
    }

    const progressData: LessonProgress = {
      user_id: user.id,
      lesson_id: lessonId,
      category,
      completed,
      progress_percentage: progressPercentage,
      started_at: new Date().toISOString(),
      completed_at: completed ? new Date().toISOString() : undefined
    };

    // Update local state
    const updatedProgress = lessonProgress.filter(p => p.lesson_id !== lessonId);
    updatedProgress.push(progressData);
    setLessonProgress(updatedProgress);

    // Save to local storage
    saveToLocalStorage(updatedProgress, quizProgress);

    // Save to Supabase
    try {
      const wasCompleted = lessonProgress.find(p => p.lesson_id === lessonId)?.completed || false;
      
      await supabase
        .from('lesson_progress')
        .upsert({
          user_id: user.id,
          lesson_id: lessonId,
          category,
          completed,
          progress_percentage: progressPercentage,
          completed_at: completed ? new Date().toISOString() : null
        });
      
      // Award gamification points if lesson just completed
      if (completed && !wasCompleted) {
        // Update user statistics for lesson completion
        await supabase.rpc('increment_lesson_stats', { p_user_id: user.id });
      }
    } catch (error) {
      // Don't log sensitive error details
      console.warn('Failed to save lesson progress to database');
      throw new Error('Failed to save progress');
    }
  };

  // Update quiz progress
  const updateQuizProgress = async (
    quizId: string,
    category: string,
    difficulty: string,
    score: number,
    totalQuestions: number,
    timeTaken?: number,
    answers?: any
  ) => {
    // Input validation
    if (!validateInput(quizId, 'quizId') || 
        !validateInput(category, 'category') || 
        !validateInput(difficulty, 'difficulty')) {
      logSecurityEvent('Invalid input to updateQuizProgress', { quizId, category, difficulty });
      return;
    }

    // Rate limiting
    if (!progressRateLimiter.isAllowed(user.id)) {
      logSecurityEvent('Rate limit exceeded for quiz progress update', { userId: user.id });
      return;
    }

    if (typeof score !== 'number' || score < 0 || 
        typeof totalQuestions !== 'number' || totalQuestions <= 0 ||
        score > totalQuestions) {
      console.warn('Invalid score or totalQuestions');
      return;
    }

    if (!user) {
      console.warn('User not authenticated - skipping quiz progress update');
      return;
    }

    // Sanitize answers if provided
    const sanitizedAnswers = answers ? 
      (Array.isArray(answers) ? answers.filter(a => typeof a === 'number') : null) : null;

    const progressData: QuizProgress = {
      user_id: user.id,
      quiz_id: quizId,
      category,
      difficulty,
      score,
      total_questions: totalQuestions,
      completed: true,
      time_taken: timeTaken,
      answers: sanitizedAnswers,
      completed_at: new Date().toISOString()
    };

    // Update local state
    const updatedProgress = quizProgress.filter(
      p => !(p.quiz_id === quizId && p.difficulty === difficulty)
    );
    updatedProgress.push(progressData);
    setQuizProgress(updatedProgress);

    // Save to local storage
    saveToLocalStorage(lessonProgress, updatedProgress);

    // Save to Supabase
    try {
      await supabase
        .from('quiz_progress')
        .upsert({
          user_id: user.id,
          quiz_id: quizId,
          category,
          difficulty,
          score,
          total_questions: totalQuestions,
          completed: true,
          time_taken: timeTaken,
          answers: sanitizedAnswers,
          completed_at: new Date().toISOString()
        });
      
      // Award gamification points for quiz completion
      await supabase.rpc('increment_quiz_stats', { 
        p_user_id: user.id,
        p_score: score,
        p_total: totalQuestions
      });
    } catch (error) {
      console.warn('Failed to save quiz progress to database');
      throw new Error('Failed to save quiz progress');
    }
  };

  // Get lesson progress for specific lesson
  const getLessonProgress = (lessonId: string) => {
    return lessonProgress.find(p => p.lesson_id === lessonId);
  };

  // Get quiz progress for specific quiz and difficulty
  const getQuizProgress = (quizId: string, difficulty: string) => {
    return quizProgress.find(p => p.quiz_id === quizId && p.difficulty === difficulty);
  };

  // Get progress stats
  const getProgressStats = () => {
    const completedLessons = lessonProgress.filter(p => p.completed).length;
    const totalQuizzes = quizProgress.length;
    const averageQuizScore = totalQuizzes > 0 
      ? Math.round(quizProgress.reduce((sum, q) => sum + (q.score / q.total_questions * 100), 0) / totalQuizzes)
      : 0;

    return {
      completedLessons,
      totalQuizzes,
      averageQuizScore,
      totalLessons: lessonProgress.length
    };
  };

  // Initialize progress tracking
  useEffect(() => {
    if (user) {
      fetchProgress();
    } else {
      loadLocalProgress();
    }
  }, [user]);

  // Check for internet connection and sync when back online
  useEffect(() => {
    const handleOnline = () => {
      if (user) {
        syncToSupabase();
      }
    };

    window.addEventListener('online', handleOnline);
    return () => window.removeEventListener('online', handleOnline);
  }, [user, lessonProgress, quizProgress]);

  return {
    lessonProgress,
    quizProgress,
    loading,
    updateLessonProgress,
    updateQuizProgress,
    getLessonProgress,
    getQuizProgress,
    getProgressStats,
    syncToSupabase
  };
};