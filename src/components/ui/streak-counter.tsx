import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Flame, Calendar, Target } from "lucide-react";

interface StreakCounterProps {
  currentStreak: number;
  bestStreak: number;
  streakTarget: number;
  className?: string;
}

export function StreakCounter({ 
  currentStreak, 
  bestStreak, 
  streakTarget = 30,
  className = "" 
}: StreakCounterProps) {
  const streakPercentage = Math.min((currentStreak / streakTarget) * 100, 100);
  
  const getStreakColor = () => {
    if (currentStreak >= streakTarget) return "text-yellow-400";
    if (currentStreak >= streakTarget * 0.7) return "text-orange-400";
    if (currentStreak >= streakTarget * 0.4) return "text-red-400";
    return "text-gray-400";
  };

  const getStreakGradient = () => {
    if (currentStreak >= streakTarget) return "from-yellow-400 to-orange-400";
    if (currentStreak >= streakTarget * 0.7) return "from-orange-400 to-red-400";
    if (currentStreak >= streakTarget * 0.4) return "from-red-400 to-pink-400";
    return "from-gray-400 to-gray-500";
  };

  return (
    <Card className={`glass-card p-6 ${className}`}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold flex items-center">
          <Flame className={`h-5 w-5 mr-2 ${getStreakColor()}`} />
          Learning Streak
        </h3>
        <Badge className={`${getStreakColor().replace('text-', 'bg-').replace('400', '400/20')} ${getStreakColor().replace('text-', 'border-').replace('400', '400/30')} ${getStreakColor()}`}>
          {currentStreak} Days
        </Badge>
      </div>
      
      <div className="space-y-4">
        <div className="text-center">
          <motion.div 
            className={`text-4xl font-bold mb-2 ${getStreakColor()}`}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            {currentStreak}
          </motion.div>
          <p className="text-sm text-muted-foreground">
            {currentStreak >= streakTarget ? "Target achieved!" : `${streakTarget - currentStreak} days to target`}
          </p>
        </div>
        
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Progress to {streakTarget} days</span>
            <span className="font-medium">{Math.round(streakPercentage)}%</span>
          </div>
          <div className="h-2 w-full bg-muted/20 rounded-full overflow-hidden">
            <motion.div 
              className={`h-full bg-gradient-to-r ${getStreakGradient()}`}
              initial={{ width: 0 }}
              animate={{ width: `${streakPercentage}%` }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4 text-center">
          <div className="p-3 rounded-lg bg-muted/10">
            <Calendar className="h-4 w-4 mx-auto mb-1 text-primary" />
            <div className="font-semibold">{bestStreak}</div>
            <div className="text-xs text-muted-foreground">Best Streak</div>
          </div>
          <div className="p-3 rounded-lg bg-muted/10">
            <Target className="h-4 w-4 mx-auto mb-1 text-secondary" />
            <div className="font-semibold">{streakTarget}</div>
            <div className="text-xs text-muted-foreground">Target</div>
          </div>
        </div>
      </div>
    </Card>
  );
}