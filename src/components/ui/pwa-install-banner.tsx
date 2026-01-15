import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, X, Smartphone } from "lucide-react";
import { usePWAInstall } from "@/hooks/usePWAInstall";

export const PWAInstallBanner = () => {
  const { showInstallPrompt, installApp, dismissPrompt, isInstallable } = usePWAInstall();

  if (!isInstallable || !showInstallPrompt) {
    return null;
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -100, opacity: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="fixed top-20 left-1/2 -translate-x-1/2 z-[60] w-[90%] max-w-md"
      >
        <div className="relative rounded-2xl border border-primary/30 bg-gradient-to-br from-background/95 via-background/98 to-background/95 backdrop-blur-xl shadow-2xl p-6">
          {/* Glow Effect */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10 blur-xl" />
          
          {/* Close Button */}
          <button
            onClick={dismissPrompt}
            className="absolute top-3 right-3 p-1.5 rounded-lg hover:bg-muted/50 transition-colors z-10"
            aria-label="Dismiss install prompt"
          >
            <X className="h-4 w-4 text-muted-foreground" />
          </button>

          {/* Content */}
          <div className="relative flex flex-col items-center text-center space-y-4">
            {/* Icon */}
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl animate-pulse" />
              <div className="relative p-3 rounded-full bg-gradient-to-br from-primary to-accent">
                <Smartphone className="h-6 w-6 text-primary-foreground" />
              </div>
            </div>

            {/* Text */}
            <div className="space-y-2">
              <h3 className="text-lg font-bold gradient-text">
                Install SkillForge App
              </h3>
              <p className="text-sm text-muted-foreground max-w-xs">
                Add to your home screen for quick access and offline learning!
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-3 w-full">
              <Button
                onClick={dismissPrompt}
                variant="outline"
                size="sm"
                className="flex-1"
              >
                Not Now
              </Button>
              <Button
                onClick={installApp}
                size="sm"
                className="flex-1 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity"
              >
                <Download className="h-4 w-4 mr-2" />
                Install
              </Button>
            </div>
          </div>

          {/* Bottom Accent Line */}
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent rounded-b-2xl" />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
