import { motion } from "framer-motion";
import { Focus, Timer, Repeat, Maximize2, Minimize2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface FocusModeToggleProps {
  isEnabled: boolean;
  onToggle: () => void;
  totalTime?: number;
  focusTime?: number;
  tabSwitchCount?: number;
  isFullscreen?: boolean;
  onExitFullscreen?: () => void;
  userName?: string;
}

const formatTime = (milliseconds: number): string => {
  const totalSeconds = Math.floor(milliseconds / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);

  if (hours > 0) {
    return `${hours}h ${minutes}m`;
  }
  return `${minutes}m`;
};

export const FocusModeToggle = ({
  isEnabled,
  onToggle,
  totalTime = 0,
  focusTime = 0,
  tabSwitchCount = 0,
  isFullscreen = false,
  onExitFullscreen,
  userName = "User"
}: FocusModeToggleProps) => {
  return (
    <div className="flex items-center gap-3">
      {/* Tab Switch Count - LEFTMOST */}
      {tabSwitchCount > 0 && (
        <Tooltip>
          <TooltipTrigger asChild>
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-amber-500/10 text-xs text-amber-600 dark:text-amber-400 border border-amber-500/20">
              <Repeat className="h-3.5 w-3.5" />
              <span>{tabSwitchCount}</span>
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p className="text-xs">Tab Switches</p>
          </TooltipContent>
        </Tooltip>
      )}

      {/* Screen Time Display - MIDDLE (ALWAYS VISIBLE) */}
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-muted/50 text-xs text-muted-foreground">
            <Timer className="h-3.5 w-3.5" />
            <span>
              {isEnabled && focusTime > 0 ? formatTime(focusTime) : formatTime(totalTime)}
            </span>
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <div className="text-xs space-y-1">
            <p>Total Time: {formatTime(totalTime)}</p>
            {isEnabled && <p>Focus Time: {formatTime(focusTime)}</p>}
          </div>
        </TooltipContent>
      </Tooltip>

      {/* Exit Fullscreen Button */}
      {isFullscreen && onExitFullscreen && (
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="outline"
              size="sm"
              onClick={onExitFullscreen}
              className="gap-2"
            >
              <Minimize2 className="h-4 w-4" />
              <span className="hidden sm:inline">Exit Fullscreen</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p className="text-xs">Exit fullscreen mode (ESC)</p>
          </TooltipContent>
        </Tooltip>
      )}

      {/* Focus Mode Toggle - RIGHTMOST */}
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant={isEnabled ? "default" : "outline"}
            size="sm"
            onClick={onToggle}
            className={`relative flex items-center gap-2 transition-all duration-300 ${isEnabled
                ? "bg-gradient-to-r from-primary to-accent hover:opacity-90 glow-primary"
                : "hover:bg-muted"
              }`}
          >
            <motion.div
              animate={{ rotate: isEnabled ? 360 : 0 }}
              transition={{ duration: 0.5 }}
            >
              {isEnabled ? <Focus className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
            </motion.div>
            <span className="hidden sm:inline font-medium">
              {isEnabled ? "Focus Mode ON" : "Focus Mode"}
            </span>

            {/* Pulse effect when enabled */}
            {isEnabled && (
              <motion.div
                className="absolute inset-0 rounded-md bg-primary/30"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            )}
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p className="text-xs">
            {isEnabled
              ? "Disable Focus Mode & exit fullscreen"
              : "Enable Focus Mode & enter fullscreen for distraction-free learning"}
          </p>
        </TooltipContent>
      </Tooltip>
    </div>
  );
};
