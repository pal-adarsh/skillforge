import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Play, Lock, CheckCircle, Clock, Bookmark } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/data/translations";
import { useNetworkStatus } from "@/hooks/useNetworkStatus";
import { useEffect, useState, useRef } from "react";

export interface LessonCardProps {
  title: string;
  description: string;
  duration: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced" | string;
  progress: number;
  isLocked: boolean;
  isCompleted: boolean;
  isBookmarked?: boolean;
  image?: string;
  category: string;
  onClick?: () => void;
}

export const LessonCard = ({
  title,
  description,
  duration,
  difficulty,
  progress,
  isLocked,
  isCompleted,
  isBookmarked = false,
  image,
  category,
  onClick
}: LessonCardProps) => {
  const { language } = useLanguage();
  const t = translations[language];
  const { isOnline } = useNetworkStatus();
  const [imageAvailable, setImageAvailable] = useState<boolean>(true); // Start true for static imports
  const imgRef = useRef<HTMLImageElement | null>(null);

  // Only reset availability when offline
  useEffect(() => {
    if (!isOnline || !image) {
      setImageAvailable(false);
    }
  }, [isOnline, image]);
  const getDifficultyColor = (level: string) => {
    const normalizedLevel = level.charAt(0).toUpperCase() + level.slice(1).toLowerCase();
    switch (normalizedLevel) {
      case "Beginner": return "bg-green-500/20 text-green-400";
      case "Intermediate": return "bg-yellow-500/20 text-yellow-400";
      case "Advanced": return "bg-red-500/20 text-red-400";
      default: return "bg-gray-500/20 text-gray-400";
    }
  };
  
  const getDifficultyTranslation = (level: string) => {
    const normalizedLevel = level.charAt(0).toUpperCase() + level.slice(1).toLowerCase();
    switch (normalizedLevel) {
      case "Beginner": return t.beginner;
      case "Intermediate": return t.intermediate;
      case "Advanced": return t.advanced;
      default: return level;
    }
  };


  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card 
        className={`glass-card overflow-hidden cursor-pointer transition-all duration-300 hover:glow-primary ${
          isLocked ? "opacity-60" : ""
        }`}
        onClick={!isLocked ? onClick : undefined}
      >
        {/* Image section: only render when online and image exists */}
        {image && isOnline && (
          <div className="relative h-48 overflow-hidden">
            <img
              ref={imgRef}
              src={image}
              alt={title}
              onError={() => setImageAvailable(false)}
              className="w-full h-full object-cover"
            />

            {/* Show placeholder only if error */}
            {!imageAvailable && (
              <div className="absolute inset-0 flex items-center justify-center bg-muted/10">
                <div className="text-center px-4">
                  <div className="inline-flex items-center justify-center p-3 rounded-md bg-muted/20 mb-2">
                    <Play className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <div className="text-sm font-medium text-muted-foreground">{category}</div>
                  <div className="text-[11px] text-muted-foreground/70">Image not available</div>
                </div>
              </div>
            )}

            <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent pointer-events-none" />

            {/* Category Badge */}
            <Badge className="absolute top-3 left-3 bg-primary/20 text-primary border-primary/30">
              {category}
            </Badge>

            {/* Status Icon */}
            <div className="absolute top-3 right-3 flex items-center gap-2">
              {isBookmarked && (
                <div className="p-2 rounded-full bg-primary/20 backdrop-blur-sm">
                  <Bookmark className="h-4 w-4 text-primary fill-primary" />
                </div>
              )}
              {isLocked ? (
                <div className="p-2 rounded-full bg-muted/20 backdrop-blur-sm">
                  <Lock className="h-4 w-4 text-muted-foreground" />
                </div>
              ) : isCompleted ? (
                <div className="p-2 rounded-full bg-green-500/20 backdrop-blur-sm">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                </div>
              ) : (
                <div className="p-2 rounded-full bg-primary/20 backdrop-blur-sm glow-primary">
                  <Play className="h-4 w-4 text-primary" />
                </div>
              )}
            </div>
          </div>
        )}
        
        <div className="p-6">
          {/* Title and Description */}
          <h3 className="text-lg font-semibold mb-2 line-clamp-1">{title}</h3>
          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{description}</p>
          
          {/* Meta Information */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span>{duration}</span>
            </div>
            
            <Badge className={getDifficultyColor(difficulty)}>
              {getDifficultyTranslation(difficulty)}
            </Badge>
          </div>
          
          {/* Progress */}
          {!isLocked && (
            <div className="mb-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-muted-foreground">Progress</span>
                <span className="text-sm font-medium">{progress}%</span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>
          )}
          
          {/* Action Button */}
          <Button 
            className={`w-full ${
              isCompleted 
                ? "bg-green-500/20 text-green-400 hover:bg-green-500/30" 
                : isLocked 
                  ? "opacity-50 cursor-not-allowed"
                  : "glow-primary"
            }`}
            disabled={isLocked}
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