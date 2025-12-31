import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Star, Trophy, Zap, Crown } from "lucide-react";

interface AchievementBadgeProps {
  name: string;
  description: string;
  rarity: "common" | "rare" | "epic" | "legendary";
  earned: boolean;
  className?: string;
}

const rarityConfig = {
  common: {
    color: "text-gray-400",
    bgColor: "bg-gray-400/20",
    borderColor: "border-gray-400/30",
    icon: Star
  },
  rare: {
    color: "text-blue-400",
    bgColor: "bg-blue-400/20",
    borderColor: "border-blue-400/30",
    icon: Trophy
  },
  epic: {
    color: "text-purple-400",
    bgColor: "bg-purple-400/20",
    borderColor: "border-purple-400/30",
    icon: Zap
  },
  legendary: {
    color: "text-yellow-400",
    bgColor: "bg-yellow-400/20",
    borderColor: "border-yellow-400/30",
    icon: Crown
  }
};

export function AchievementBadge({ 
  name, 
  description, 
  rarity, 
  earned, 
  className = "" 
}: AchievementBadgeProps) {
  const config = rarityConfig[rarity];
  const Icon = config.icon;

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 200 }}
      className={`flex items-center space-x-3 p-4 rounded-lg border transition-all duration-300 ${
        earned 
          ? `${config.bgColor} ${config.borderColor}` 
          : 'border-muted/30 bg-muted/5 opacity-50'
      } ${className}`}
    >
      <div className={`p-2 rounded-full ${earned ? config.bgColor : 'bg-muted/20'}`}>
        <Icon className={`h-5 w-5 ${earned ? config.color : 'text-muted-foreground'}`} />
      </div>
      
      <div className="flex-1">
        <div className="flex items-center space-x-2">
          <span className="font-medium">{name}</span>
          <Badge 
            variant="outline" 
            className={`text-xs ${earned ? config.borderColor + ' ' + config.color : 'border-muted text-muted-foreground'}`}
          >
            {rarity}
          </Badge>
        </div>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      
      {earned && (
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        >
          <Star className={`h-4 w-4 ${config.color}`} />
        </motion.div>
      )}
    </motion.div>
  );
}