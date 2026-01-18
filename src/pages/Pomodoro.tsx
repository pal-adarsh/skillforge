import { motion } from 'framer-motion';
import { PomodoroTimer } from '@/components/pomodoro/PomodoroTimer';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Timer, Brain, Coffee, Target, TrendingUp, Sparkles } from 'lucide-react';
import { useFocusMode } from "@/hooks/useFocusMode";
import { FocusModeToggle } from "@/components/ui/focus-mode-toggle";
import { InactivityAlert, WelcomeBackMessage } from "@/components/ui/focus-mode-alerts";

export default function Pomodoro() {
  const {
    isFocusModeEnabled,
    toggleFocusMode,
    screenTimeData,
    tabSwitchCount,
    isFullscreen,
    exitFullscreen,
    showInactivityAlert,
    dismissInactivityAlert,
    showWelcomeBackMessage,
    dismissWelcomeBackMessage,
    motivationalMessage
  } = useFocusMode({ userName: 'User' });

  return (
    <div className="min-h-screen pt-20 pb-8">
      {/* Focus Mode Toggle - Upper Right */}
      <div className="fixed top-20 right-4 z-40">
        <FocusModeToggle
          isEnabled={isFocusModeEnabled}
          onToggle={toggleFocusMode}
          totalTime={screenTimeData.totalScreenTime}
          focusTime={screenTimeData.focusModeTime}
          tabSwitchCount={tabSwitchCount}
          isFullscreen={isFullscreen}
          onExitFullscreen={exitFullscreen}
          userName="User"
        />
      </div>

      {/* Focus Mode Alerts */}
      <InactivityAlert
        show={showInactivityAlert}
        onDismiss={dismissInactivityAlert}
      />
      <WelcomeBackMessage
        show={showWelcomeBackMessage}
        message={motivationalMessage}
        onDismiss={dismissWelcomeBackMessage}
      />

      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Card className="glass-card overflow-hidden relative">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-[80px]" />

            <div className="relative p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-primary/10 border border-primary/30">
                  <Timer className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h1 className="text-3xl font-display font-bold">Pomodoro Timer</h1>
                  <p className="text-muted-foreground">Stay focused and boost your productivity</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mt-4">
                <Badge variant="outline" className="gap-1">
                  <Brain className="h-3 w-3" /> Deep Focus
                </Badge>
                <Badge variant="outline" className="gap-1">
                  <Coffee className="h-3 w-3" /> Smart Breaks
                </Badge>
                <Badge variant="outline" className="gap-1">
                  <Target className="h-3 w-3" /> Goal Tracking
                </Badge>
                <Badge variant="outline" className="gap-1">
                  <TrendingUp className="h-3 w-3" /> Progress Stats
                </Badge>
              </div>
            </div>
          </Card>
        </motion.section>

        {/* Timer Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <PomodoroTimer />
        </motion.section>

        {/* Tips Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-8"
        >
          <Card className="glass-card">
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-primary" />
                Pomodoro Technique Tips
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-muted/50">
                  <h3 className="font-medium mb-2">🎯 Stay Focused</h3>
                  <p className="text-sm text-muted-foreground">
                    During focus sessions, eliminate all distractions. Close unnecessary tabs, put your phone away, and commit fully to the task.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-muted/50">
                  <h3 className="font-medium mb-2">☕ Take Real Breaks</h3>
                  <p className="text-sm text-muted-foreground">
                    Step away from your screen during breaks. Stretch, walk around, or grab a drink. Your brain needs rest to maintain peak performance.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-muted/50">
                  <h3 className="font-medium mb-2">📝 Plan Your Sessions</h3>
                  <p className="text-sm text-muted-foreground">
                    Before starting, decide what you'll accomplish in each session. Having a clear goal makes focus easier and more rewarding.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-muted/50">
                  <h3 className="font-medium mb-2">🔄 Be Consistent</h3>
                  <p className="text-sm text-muted-foreground">
                    The Pomodoro Technique works best with consistency. Try to complete your daily goal of sessions to build a productive habit.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </motion.section>
      </div>
    </div>
  );
}
