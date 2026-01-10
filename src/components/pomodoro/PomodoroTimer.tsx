import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  Settings, 
  Coffee, 
  Brain,
  Timer,
  Volume2,
  VolumeX,
  Target,
  Flame,
  ChevronDown,
  ChevronUp,
  Sparkles,
  CheckCircle2,
  Bell,
  BellOff
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

type TimerMode = 'focus' | 'shortBreak' | 'longBreak';

interface PomodoroSettings {
  focusDuration: number;
  shortBreakDuration: number;
  longBreakDuration: number;
  sessionsUntilLongBreak: number;
  autoStartBreaks: boolean;
  autoStartFocus: boolean;
  soundEnabled: boolean;
  notificationsEnabled: boolean;
}

const DEFAULT_SETTINGS: PomodoroSettings = {
  focusDuration: 25,
  shortBreakDuration: 5,
  longBreakDuration: 15,
  sessionsUntilLongBreak: 4,
  autoStartBreaks: false,
  autoStartFocus: false,
  soundEnabled: true,
  notificationsEnabled: true,
};

const TIMER_MODES: Record<TimerMode, { label: string; icon: React.ElementType; color: string; bgColor: string }> = {
  focus: { label: 'Focus', icon: Brain, color: 'text-primary', bgColor: 'bg-primary/10' },
  shortBreak: { label: 'Short Break', icon: Coffee, color: 'text-green-500', bgColor: 'bg-green-500/10' },
  longBreak: { label: 'Long Break', icon: Sparkles, color: 'text-purple-500', bgColor: 'bg-purple-500/10' },
};

export function PomodoroTimer() {
  const { toast } = useToast();
  const [settings, setSettings] = useState<PomodoroSettings>(() => {
    const saved = localStorage.getItem('pomodoroSettings');
    return saved ? JSON.parse(saved) : DEFAULT_SETTINGS;
  });
  const [mode, setMode] = useState<TimerMode>('focus');
  const [timeLeft, setTimeLeft] = useState(settings.focusDuration * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [completedSessions, setCompletedSessions] = useState(0);
  const [totalFocusTime, setTotalFocusTime] = useState(0);
  const [showSettings, setShowSettings] = useState(false);
  const [dailyGoal, setDailyGoal] = useState(4);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [notificationPermission, setNotificationPermission] = useState<NotificationPermission>('default');

  // Request notification permission on mount
  useEffect(() => {
    if ('Notification' in window) {
      setNotificationPermission(Notification.permission);
      if (Notification.permission === 'default' && settings.notificationsEnabled) {
        Notification.requestPermission().then(permission => {
          setNotificationPermission(permission);
        });
      }
    }
  }, [settings.notificationsEnabled]);

  const getCurrentDuration = useCallback((currentMode: TimerMode) => {
    switch (currentMode) {
      case 'focus': return settings.focusDuration * 60;
      case 'shortBreak': return settings.shortBreakDuration * 60;
      case 'longBreak': return settings.longBreakDuration * 60;
    }
  }, [settings]);

  const progress = ((getCurrentDuration(mode) - timeLeft) / getCurrentDuration(mode)) * 100;

  useEffect(() => {
    localStorage.setItem('pomodoroSettings', JSON.stringify(settings));
  }, [settings]);

  useEffect(() => {
    audioRef.current = new Audio('/notification.mp3');
    audioRef.current.volume = 0.5;
    return () => {
      if (audioRef.current) {
        audioRef.current = null;
      }
    };
  }, []);

  const playNotificationSound = useCallback(() => {
    if (settings.soundEnabled && audioRef.current) {
      audioRef.current.play().catch(() => {});
    }
  }, [settings.soundEnabled]);

  const showNotification = useCallback((title: string, body: string) => {
    if (settings.notificationsEnabled && 'Notification' in window && Notification.permission === 'granted') {
      new Notification(title, {
        body,
        icon: '/icon-192.png',
        badge: '/icon-192.png',
        tag: 'pomodoro-timer',
        requireInteraction: false,
      });
    }
  }, [settings.notificationsEnabled]);

  const switchMode = useCallback((newMode: TimerMode, autoStart = false) => {
    setMode(newMode);
    setTimeLeft(getCurrentDuration(newMode));
    setIsRunning(autoStart);
  }, [getCurrentDuration]);

  const handleTimerComplete = useCallback(() => {
    playNotificationSound();
    
    if (mode === 'focus') {
      const newCompletedSessions = completedSessions + 1;
      setCompletedSessions(newCompletedSessions);
      setTotalFocusTime(prev => prev + settings.focusDuration);
      
      const message = `You've completed ${newCompletedSessions} sessions today.`;
      
      toast({
        title: "🎉 Focus session complete!",
        description: message,
      });
      
      showNotification("🎉 Focus Session Complete!", message);

      if (newCompletedSessions % settings.sessionsUntilLongBreak === 0) {
        switchMode('longBreak', settings.autoStartBreaks);
      } else {
        switchMode('shortBreak', settings.autoStartBreaks);
      }
    } else {
      const message = "Ready for another focus session?";
      
      toast({
        title: "☕ Break time over!",
        description: message,
      });
      
      showNotification("☕ Break Time Over!", message);
      switchMode('focus', settings.autoStartFocus);
    }
  }, [mode, completedSessions, settings, toast, playNotificationSound, showNotification, switchMode]);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    } else if (isRunning && timeLeft === 0) {
      handleTimerComplete();
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning, timeLeft, handleTimerComplete]);

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const toggleTimer = () => setIsRunning(!isRunning);
  
  const resetTimer = () => {
    setIsRunning(false);
    setTimeLeft(getCurrentDuration(mode));
  };

  const currentModeConfig = TIMER_MODES[mode];
  const Icon = currentModeConfig.icon;

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      {/* Main Timer Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="glass-card overflow-hidden relative">
          <div className={cn("absolute inset-0 opacity-20", currentModeConfig.bgColor)} />
          
          <CardContent className="relative p-8">
            {/* Mode Selector */}
            <div className="flex justify-center gap-2 mb-8">
              {(Object.entries(TIMER_MODES) as [TimerMode, typeof TIMER_MODES[TimerMode]][]).map(([key, config]) => (
                <Button
                  key={key}
                  variant={mode === key ? "default" : "ghost"}
                  size="sm"
                  onClick={() => switchMode(key)}
                  className={cn(
                    "gap-2 transition-all",
                    mode === key && "shadow-lg"
                  )}
                >
                  <config.icon className="h-4 w-4" />
                  {config.label}
                </Button>
              ))}
            </div>

            {/* Timer Display */}
            <div className="flex flex-col items-center">
              <motion.div
                key={mode}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="relative"
              >
                {/* Circular Progress */}
                <div className="relative w-64 h-64">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle
                      cx="128"
                      cy="128"
                      r="120"
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="none"
                      className="text-muted/20"
                    />
                    <motion.circle
                      cx="128"
                      cy="128"
                      r="120"
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="none"
                      strokeLinecap="round"
                      className={currentModeConfig.color}
                      strokeDasharray={2 * Math.PI * 120}
                      strokeDashoffset={2 * Math.PI * 120 * (1 - progress / 100)}
                      initial={{ strokeDashoffset: 2 * Math.PI * 120 }}
                      animate={{ strokeDashoffset: 2 * Math.PI * 120 * (1 - progress / 100) }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                    />
                  </svg>
                  
                  {/* Timer Text */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <Icon className={cn("h-8 w-8 mb-2", currentModeConfig.color)} />
                    <span className="text-5xl font-bold font-mono tracking-wider">
                      {formatTime(timeLeft)}
                    </span>
                    <span className="text-sm text-muted-foreground mt-2">
                      {currentModeConfig.label}
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Controls */}
              <div className="flex items-center gap-4 mt-8">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={resetTimer}
                  className="h-12 w-12 rounded-full"
                >
                  <RotateCcw className="h-5 w-5" />
                </Button>
                
                <Button
                  size="lg"
                  onClick={toggleTimer}
                  className={cn(
                    "h-16 w-16 rounded-full shadow-lg transition-all",
                    isRunning && "bg-red-500 hover:bg-red-600"
                  )}
                >
                  {isRunning ? (
                    <Pause className="h-6 w-6" />
                  ) : (
                    <Play className="h-6 w-6 ml-1" />
                  )}
                </Button>
                
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setShowSettings(!showSettings)}
                  className="h-12 w-12 rounded-full"
                >
                  <Settings className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="glass-card">
          <CardContent className="p-4 text-center">
            <div className="flex items-center justify-center mb-2">
              <CheckCircle2 className="h-5 w-5 text-primary" />
            </div>
            <div className="text-2xl font-bold">{completedSessions}</div>
            <div className="text-xs text-muted-foreground">Sessions Done</div>
          </CardContent>
        </Card>
        
        <Card className="glass-card">
          <CardContent className="p-4 text-center">
            <div className="flex items-center justify-center mb-2">
              <Target className="h-5 w-5 text-green-500" />
            </div>
            <div className="text-2xl font-bold">{completedSessions}/{dailyGoal}</div>
            <div className="text-xs text-muted-foreground">Daily Goal</div>
          </CardContent>
        </Card>
        
        <Card className="glass-card">
          <CardContent className="p-4 text-center">
            <div className="flex items-center justify-center mb-2">
              <Timer className="h-5 w-5 text-purple-500" />
            </div>
            <div className="text-2xl font-bold">{totalFocusTime}m</div>
            <div className="text-xs text-muted-foreground">Focus Time</div>
          </CardContent>
        </Card>
        
        <Card className="glass-card">
          <CardContent className="p-4 text-center">
            <div className="flex items-center justify-center mb-2">
              <Flame className="h-5 w-5 text-orange-500" />
            </div>
            <div className="text-2xl font-bold">{Math.floor(completedSessions / settings.sessionsUntilLongBreak)}</div>
            <div className="text-xs text-muted-foreground">Cycles Done</div>
          </CardContent>
        </Card>
      </div>

      {/* Daily Progress */}
      <Card className="glass-card">
        <CardContent className="p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium">Daily Progress</span>
            <span className="text-sm text-muted-foreground">
              {Math.round((completedSessions / dailyGoal) * 100)}%
            </span>
          </div>
          <Progress value={(completedSessions / dailyGoal) * 100} className="h-2" />
          <div className="flex justify-between mt-2">
            {Array.from({ length: dailyGoal }).map((_, i) => (
              <div
                key={i}
                className={cn(
                  "w-6 h-6 rounded-full flex items-center justify-center text-xs",
                  i < completedSessions 
                    ? "bg-primary text-primary-foreground" 
                    : "bg-muted"
                )}
              >
                {i < completedSessions ? "✓" : i + 1}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Settings Panel */}
      <AnimatePresence>
        {showSettings && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="h-5 w-5" />
                  Timer Settings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Duration Settings */}
                <div className="space-y-4">
                  <div>
                    <Label className="flex items-center justify-between mb-2">
                      <span>Focus Duration</span>
                      <Badge variant="secondary">{settings.focusDuration} min</Badge>
                    </Label>
                    <Slider
                      value={[settings.focusDuration]}
                      onValueChange={([value]) => setSettings(s => ({ ...s, focusDuration: value }))}
                      min={5}
                      max={60}
                      step={5}
                    />
                  </div>
                  
                  <div>
                    <Label className="flex items-center justify-between mb-2">
                      <span>Short Break</span>
                      <Badge variant="secondary">{settings.shortBreakDuration} min</Badge>
                    </Label>
                    <Slider
                      value={[settings.shortBreakDuration]}
                      onValueChange={([value]) => setSettings(s => ({ ...s, shortBreakDuration: value }))}
                      min={1}
                      max={15}
                      step={1}
                    />
                  </div>
                  
                  <div>
                    <Label className="flex items-center justify-between mb-2">
                      <span>Long Break</span>
                      <Badge variant="secondary">{settings.longBreakDuration} min</Badge>
                    </Label>
                    <Slider
                      value={[settings.longBreakDuration]}
                      onValueChange={([value]) => setSettings(s => ({ ...s, longBreakDuration: value }))}
                      min={5}
                      max={30}
                      step={5}
                    />
                  </div>
                  
                  <div>
                    <Label className="flex items-center justify-between mb-2">
                      <span>Sessions Until Long Break</span>
                      <Badge variant="secondary">{settings.sessionsUntilLongBreak}</Badge>
                    </Label>
                    <Slider
                      value={[settings.sessionsUntilLongBreak]}
                      onValueChange={([value]) => setSettings(s => ({ ...s, sessionsUntilLongBreak: value }))}
                      min={2}
                      max={8}
                      step={1}
                    />
                  </div>
                  
                  <div>
                    <Label className="flex items-center justify-between mb-2">
                      <span>Daily Goal (Sessions)</span>
                      <Badge variant="secondary">{dailyGoal}</Badge>
                    </Label>
                    <Slider
                      value={[dailyGoal]}
                      onValueChange={([value]) => setDailyGoal(value)}
                      min={1}
                      max={12}
                      step={1}
                    />
                  </div>
                </div>

                {/* Toggle Settings */}
                <div className="space-y-4 pt-4 border-t">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Coffee className="h-4 w-4" />
                      <Label>Auto-start Breaks</Label>
                    </div>
                    <Switch
                      checked={settings.autoStartBreaks}
                      onCheckedChange={(checked) => setSettings(s => ({ ...s, autoStartBreaks: checked }))}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Brain className="h-4 w-4" />
                      <Label>Auto-start Focus</Label>
                    </div>
                    <Switch
                      checked={settings.autoStartFocus}
                      onCheckedChange={(checked) => setSettings(s => ({ ...s, autoStartFocus: checked }))}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {settings.soundEnabled ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
                      <Label>Sound Notifications</Label>
                    </div>
                    <Switch
                      checked={settings.soundEnabled}
                      onCheckedChange={(checked) => setSettings(s => ({ ...s, soundEnabled: checked }))}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {settings.notificationsEnabled ? <Bell className="h-4 w-4" /> : <BellOff className="h-4 w-4" />}
                      <Label>Browser Notifications</Label>
                    </div>
                    <Switch
                      checked={settings.notificationsEnabled}
                      onCheckedChange={(checked) => {
                        setSettings(s => ({ ...s, notificationsEnabled: checked }));
                        if (checked && 'Notification' in window && Notification.permission === 'default') {
                          Notification.requestPermission().then(permission => {
                            setNotificationPermission(permission);
                            if (permission !== 'granted') {
                              toast({
                                title: "Notifications Blocked",
                                description: "Please enable notifications in your browser settings.",
                                variant: "destructive",
                              });
                            }
                          });
                        }
                      }}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
