import { motion, AnimatePresence } from "framer-motion";
import { X, AlertCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

interface InactivityAlertProps {
  show: boolean;
  onDismiss: () => void;
}

export const InactivityAlert = ({ show, onDismiss }: InactivityAlertProps) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: -100, opacity: 0, scale: 0.9 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: -100, opacity: 0, scale: 0.9 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="fixed top-24 right-4 z-50 max-w-sm"
        >
          <div className="relative rounded-xl border border-amber-500/30 bg-gradient-to-br from-amber-50/95 via-orange-50/95 to-amber-100/95 dark:from-amber-950/95 dark:via-orange-950/95 dark:to-amber-900/95 backdrop-blur-xl shadow-2xl p-4">
            {/* Glow Effect */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-amber-400/10 via-orange-400/10 to-amber-500/10 blur-xl" />
            
            {/* Close Button */}
            <button
              onClick={onDismiss}
              className="absolute top-2 right-2 p-1 rounded-md hover:bg-black/5 dark:hover:bg-white/5 transition-colors z-10"
              aria-label="Dismiss alert"
            >
              <X className="h-4 w-4 text-amber-700 dark:text-amber-300" />
            </button>

            {/* Content */}
            <div className="relative flex items-start gap-3">
              <div className="mt-0.5">
                <AlertCircle className="h-5 w-5 text-amber-600 dark:text-amber-400" />
              </div>
              <div className="flex-1 space-y-2">
                <h4 className="font-semibold text-amber-900 dark:text-amber-100">
                  Still there?
                </h4>
                <p className="text-sm text-amber-800 dark:text-amber-200">
                  You haven't interacted with the lesson for 30 seconds. Stay focused and keep learning! 📚
                </p>
                <Button
                  onClick={onDismiss}
                  size="sm"
                  className="w-full bg-amber-600 hover:bg-amber-700 text-white dark:bg-amber-500 dark:hover:bg-amber-600"
                >
                  I'm here, let's continue!
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

interface WelcomeBackMessageProps {
  show: boolean;
  message: string;
  onDismiss: () => void;
}

export const WelcomeBackMessage = ({ show, message, onDismiss }: WelcomeBackMessageProps) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: -100, opacity: 0, scale: 0.9 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: -100, opacity: 0, scale: 0.9 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="fixed top-24 left-1/2 -translate-x-1/2 z-50 max-w-md w-[90%]"
        >
          <div className="relative rounded-xl border border-primary/30 bg-gradient-to-br from-background/95 via-primary/5 to-background/95 backdrop-blur-xl shadow-2xl p-4">
            {/* Glow Effect */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10 blur-xl animate-pulse" />
            
            {/* Close Button */}
            <button
              onClick={onDismiss}
              className="absolute top-2 right-2 p-1 rounded-md hover:bg-muted/50 transition-colors z-10"
              aria-label="Dismiss message"
            >
              <X className="h-4 w-4 text-muted-foreground" />
            </button>

            {/* Content */}
            <div className="relative flex items-center gap-3">
              <motion.div
                animate={{ 
                  rotate: [0, 10, -10, 10, 0],
                  scale: [1, 1.1, 1, 1.1, 1]
                }}
                transition={{ 
                  duration: 1.5,
                  ease: "easeInOut"
                }}
              >
                <Sparkles className="h-6 w-6 text-primary" />
              </motion.div>
              <div className="flex-1">
                <p className="font-semibold text-foreground text-center">
                  {message}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
