import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { X, Download, Smartphone } from "lucide-react";

interface InstallPromptProps {
  isVisible: boolean;
  onInstall: () => void;
  onDismiss: () => void;
}

export const InstallPrompt = ({ isVisible, onInstall, onDismiss }: InstallPromptProps) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
          >
            <Card className="glass-card p-6 max-w-md w-full relative">
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-2 right-2"
                onClick={onDismiss}
              >
                <X className="h-4 w-4" />
              </Button>

              <div className="text-center space-y-4">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring" }}
                  className="w-16 h-16 mx-auto bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center"
                >
                  <Smartphone className="h-8 w-8 text-white" />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <h3 className="text-xl font-bold mb-2">Install QuestWeave</h3>
                  <p className="text-muted-foreground text-sm">
                    Get the full app experience! Install QuestWeave on your device for:
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="space-y-2 text-left"
                >
                  <div className="flex items-center space-x-2 text-sm">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span>Offline learning capability</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span>Faster loading times</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span>Push notifications for reminders</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span>Native app-like experience</span>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex space-x-3 pt-2"
                >
                  <Button
                    onClick={onInstall}
                    className="flex-1 glow-primary"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Install App
                  </Button>
                  <Button
                    variant="outline"
                    onClick={onDismiss}
                    className="flex-1"
                  >
                    Maybe Later
                  </Button>
                </motion.div>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};