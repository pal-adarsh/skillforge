// This file exports all lessons from the skill-based learning framework
import { skillLessons } from './standards/skills';

export interface Lesson {
  id: string;
  title: string;
  description: string;
  category: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  duration: string;
  points: number;
  image?: string;
  content?: string;
  tags?: string[];
}

// Normalize lessons data
const normalizeDifficulty = (difficulty: string): "Beginner" | "Intermediate" | "Advanced" => {
  const lower = difficulty.toLowerCase();
  if (lower === 'beginner') return 'Beginner';
  if (lower === 'intermediate') return 'Intermediate';
  if (lower === 'advanced') return 'Advanced';
  return 'Beginner';
};

// Export all lessons from skill categories with normalized data
export const lessons: Lesson[] = skillLessons.map(lesson => ({
  ...lesson,
  difficulty: normalizeDifficulty(lesson.difficulty),
  duration: typeof lesson.duration === 'number' ? `${lesson.duration} min` : lesson.duration
}));

// Helper function to get lessons by category
export const getLessonsByCategory = (categoryId: string): Lesson[] => {
  return lessons.filter(lesson => lesson.category === categoryId);
};

// Helper function to get a single lesson by ID
export const getLessonById = (lessonId: string): Lesson | undefined => {
  return lessons.find(lesson => lesson.id === lessonId);
};

// Helper function to get lessons count
export const getLessonsCount = (): number => {
  return lessons.length;
};
