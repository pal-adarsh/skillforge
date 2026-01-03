import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Play, Lock, CheckCircle, Clock } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/data/translations";

/* ---------------------------------------
   TYPES
---------------------------------------- */
export interface LessonCardProps {
  title: string;
  description: string;
  duration: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced" | string;
  progress: number;
  isLocked: boolean;
  isCompleted: boolean;
  image?: string;
  category: string;
  onClick?: () => void;
}

/* ---------------------------------------
   ONLINE / OFFLINE DETECTION
---------------------------------------- */
const isOnline =
  typeof navigator !== "undefined" && navigator.onLine;

/* ---------------------------------------
   COMPONENT
---------------------------------------- */
export const LessonCard = ({
  title,
  description,
  duration,
  difficulty,
  progress,
  isLocked,
  isCompleted,
  image,
  category,
  onClick,
}: LessonCardProps) => {
  const { language } = useLanguage();
  const t = translations[language];

  /* ---------------------------------------
     DISABLE ANIMATION OFFLINE
  ---------------------------------------- */
  const motionProps = isOnline
    ? {
        whileHover: { y: -5, scale: 1.02 },
        whileTap: { scale: 0.98 },
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.3 },
      }
    : {};

  /* ---------------------------------------
     HELPERS
  ---------------------------------------- */
  const getDifficultyColor = (level: string) => {
    const normalized = level.toLowerCase();
    if (normalized === "beginner") return "bg-green-500/20 text-green-400";
    if (normalized === "intermediate") return "bg-yellow-500/20 text-yellow-400";
    if (normalized === "advanced") return "bg-red-500/20 text-red-400";
    return "bg-gray-500/20 text-gray-400";
  };

  const getDifficultyText = (level: string) => {
    const normalized = level.toLowerCase();
    if (normalized === "beginner") return t.beginner;
    if (normalized === "intermediate") return t.intermediate;
    if (normalized === "advanced") return t.advanced;
    return level;
  };

  /* ---------------------------------------
     RENDER
  ---------------------------------------- */
  return (
    <motion.div {...motionProps}>
      <Card
        className={`glass-card overflow-hidden cursor-pointer transition-all duration-300 ${
          isLocked ? "opacity-60 cursor-not-allowed" : "hover:glow-primary"
        }`}
        onClick={!isLocked ? onClick : undefined}
      >
        {/* ---------------- IMAGE HEADER (ONLINE ONLY) ---------------- */}
        {image && isOnline && (
          <div className="relative h-48 min-h-[12rem] bg-muted/30 overflow-hidden">
            <img
              src={image}
              alt={title}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />

            {/* Category badge */}
            <Badge className="absolute top-3 left-3 bg-primary/20 text-primary border-primary/30">
              {category}
            </Badge>

            {/* Status icon */}
            <div className="absolute top-3 right-3">
              {isLocked ? (
                <div className="p-2 rounded-full bg-muted/30">
                  <Lock className="h-4 w-4 text-muted-foreground" />
                </div>
              ) : isCompleted ? (
                <div className="p-2 rounded-full bg-green-500/20">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                </div>
              ) : (
                <div className="p-2 rounded-full bg-primary/20 glow-primary">
                  <Play className="h-4 w-4 text-primary" />
                </div>
              )}
            </div>
          </div>
        )}

        {/* ---------------- CONTENT ---------------- */}
        <div className="p-6">
          {/* Title */}
          <h3 className="text-lg font-semibold mb-2 line-clamp-1">
            {title}
          </h3>

          {/* Description */}
          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
            {description}
          </p>

          {/* Meta */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span>{duration}</span>
            </div>

            <Badge className={getDifficultyColor(difficulty)}>
              {getDifficultyText(difficulty)}
            </Badge>
          </div>

          {/* Progress */}
          {!isLocked && (
            <div className="mb-4">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-muted-foreground">Progress</span>
                <span className="font-medium">{progress}%</span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>
          )}

          {/* Action Button */}
          <Button
            disabled={isLocked}
            className={`w-full ${
              isCompleted
                ? "bg-green-500/20 text-green-400 hover:bg-green-500/30"
                : isLocked
                ? "opacity-50"
                : "glow-primary"
            }`}
          >
            {isLocked ? (
              <>
                <Lock className="h-4 w-4 mr-2" />
                {t.locked}
              </>
            ) : isCompleted ? (
              <>
                <CheckCircle className="h-4 w-4 mr-2" />
                {t.completed}
              </>
            ) : progress > 0 ? (
              <>
                <Play className="h-4 w-4 mr-2" />
                {t.continueLesson}
              </>
            ) : (
              <>
                <Play className="h-4 w-4 mr-2" />
                {t.startLesson}
              </>
            )}
          </Button>
        </div>
      </Card>
    </motion.div>
  );
};
