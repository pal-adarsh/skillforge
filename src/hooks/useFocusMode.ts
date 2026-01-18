import { useState, useEffect, useCallback, useRef } from 'react';

interface FocusModeData {
  isEnabled: boolean;
  totalScreenTime: number;
  focusModeTime: number;
  lastSessionTimestamp: number;
  sessionsCount: number;
  tabSwitchCount: number;
}

interface FocusModeReturn {
  isFocusModeEnabled: boolean;
  toggleFocusMode: () => void;
  screenTimeData: FocusModeData;
  showInactivityAlert: boolean;
  dismissInactivityAlert: () => void;
  showWelcomeBackMessage: boolean;
  dismissWelcomeBackMessage: () => void;
  motivationalMessage: string;
  tabSwitchCount: number;
  isFullscreen: boolean;
  exitFullscreen: () => void;
}

interface UseFocusModeProps {
  userName?: string;
}

const STORAGE_KEY = 'skillforge_focus_mode';
const INACTIVITY_TIMEOUT = 30000; // 30 seconds

const motivationalMessages = [
  "Welcome back! Let's continue learning 💪",
  "Great to see you again! Ready to learn? 🚀",
  "You're back! Let's make progress together 📚",
  "Welcome back, scholar! Time to grow 🌟",
  "Refocused and ready? Let's do this! ⚡",
  "Back in action! Your future self will thank you 🎯",
];

export const useFocusMode = (props?: UseFocusModeProps): FocusModeReturn => {
  const userName = props?.userName || 'User';
  const [isFocusModeEnabled, setIsFocusModeEnabled] = useState(false);
  const [showInactivityAlert, setShowInactivityAlert] = useState(false);
  const [showWelcomeBackMessage, setShowWelcomeBackMessage] = useState(false);
  const [motivationalMessage, setMotivationalMessage] = useState('');
  const [screenTimeData, setScreenTimeData] = useState<FocusModeData>({
    isEnabled: false,
    totalScreenTime: 0,
    focusModeTime: 0,
    lastSessionTimestamp: Date.now(),
    sessionsCount: 0,
    tabSwitchCount: 0,
  });

  const [isFullscreen, setIsFullscreen] = useState(false);
  const [tabSwitchCount, setTabSwitchCount] = useState(0);
  const [currentDisplayTime, setCurrentDisplayTime] = useState({ total: 0, focus: 0 });

  const inactivityTimerRef = useRef<NodeJS.Timeout | null>(null);
  const sessionStartRef = useRef<number>(Date.now());
  const focusModeStartRef = useRef<number | null>(null);
  const lastActivityRef = useRef<number>(Date.now());
  const isVisibleRef = useRef<boolean>(true);

  // Load data from localStorage
  useEffect(() => {
    const loadFocusModeData = async () => {
      try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
          const data: FocusModeData = JSON.parse(stored);
          setScreenTimeData(data);
          setIsFocusModeEnabled(data.isEnabled);
          setTabSwitchCount(data.tabSwitchCount || 0);

          if (data.isEnabled) {
            focusModeStartRef.current = Date.now();

            // Re-enter fullscreen if focus mode was enabled
            try {
              if (document.documentElement.requestFullscreen && !document.fullscreenElement) {
                await document.documentElement.requestFullscreen();
                setIsFullscreen(true);
              }
            } catch (error) {
              console.log('Fullscreen request failed on load:', error);
            }
          }
        }
      } catch (error) {
        console.error('Failed to load focus mode data:', error);
      }
    };

    loadFocusModeData();
    sessionStartRef.current = Date.now();

    // Track fullscreen changes
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  // Save data to localStorage
  const saveFocusModeData = useCallback((data: Partial<FocusModeData>) => {
    try {
      const currentData = { ...screenTimeData, ...data };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(currentData));
      setScreenTimeData(currentData);
    } catch (error) {
      console.error('Failed to save focus mode data:', error);
    }
  }, [screenTimeData]);

  // Calculate and save session time
  const updateSessionTime = useCallback(() => {
    const now = Date.now();
    const sessionDuration = now - sessionStartRef.current;
    const focusDuration = focusModeStartRef.current
      ? now - focusModeStartRef.current
      : 0;

    saveFocusModeData({
      totalScreenTime: screenTimeData.totalScreenTime + sessionDuration,
      focusModeTime: screenTimeData.focusModeTime + focusDuration,
      lastSessionTimestamp: now,
    });

    // Reset session start
    sessionStartRef.current = now;
    if (isFocusModeEnabled && focusModeStartRef.current) {
      focusModeStartRef.current = now;
    }
  }, [screenTimeData, isFocusModeEnabled, saveFocusModeData]);

  // Get current screen time (for real-time display)
  const getCurrentScreenTime = useCallback(() => {
    const now = Date.now();
    const sessionDuration = now - sessionStartRef.current;
    const focusDuration = focusModeStartRef.current
      ? now - focusModeStartRef.current
      : 0;

    return {
      total: screenTimeData.totalScreenTime + sessionDuration,
      focus: screenTimeData.focusModeTime + focusDuration,
    };
  }, [screenTimeData]);

  // Toggle Focus Mode
  const toggleFocusMode = useCallback(async () => {
    const newState = !isFocusModeEnabled;
    setIsFocusModeEnabled(newState);

    if (newState) {
      focusModeStartRef.current = Date.now();

      // Save focus mode enabled state to localStorage
      saveFocusModeData({
        isEnabled: true,
      });

      // Enter fullscreen mode
      try {
        if (document.documentElement.requestFullscreen) {
          await document.documentElement.requestFullscreen();
          setIsFullscreen(true);
        }
      } catch (error) {
        console.log('Fullscreen request failed:', error);
      }
    } else {
      // Save focus mode time when turning off
      if (focusModeStartRef.current) {
        const focusDuration = Date.now() - focusModeStartRef.current;
        saveFocusModeData({
          isEnabled: false,
          focusModeTime: screenTimeData.focusModeTime + focusDuration,
        });
        focusModeStartRef.current = null;
      }

      // Exit fullscreen mode
      if (document.fullscreenElement) {
        await document.exitFullscreen();
        setIsFullscreen(false);
      }
    }

    saveFocusModeData({ isEnabled: newState });
  }, [isFocusModeEnabled, screenTimeData, saveFocusModeData]);

  // Exit fullscreen function
  const exitFullscreen = useCallback(async () => {
    if (document.fullscreenElement) {
      await document.exitFullscreen();
      setIsFullscreen(false);
    }
  }, []);

  // Play audio alert for inactivity
  const playInactivityAudio = useCallback((userName: string) => {
    try {
      // Cancel any ongoing speech
      window.speechSynthesis.cancel();

      const speech = new SpeechSynthesisUtterance();
      speech.text = `Hello ${userName}! Are you still there? Please respond if you're listening.`;
      speech.rate = 0.85; // Slower for better clarity
      speech.pitch = 1.1; // Slightly higher pitch for friendlier tone
      speech.volume = 1;
      speech.lang = 'en-US';

      // Try to use a better voice if available
      const voices = window.speechSynthesis.getVoices();
      const preferredVoice = voices.find(voice =>
        voice.name.includes('Google') ||
        voice.name.includes('Microsoft') ||
        voice.name.includes('Samantha') ||
        voice.name.includes('Karen')
      );

      if (preferredVoice) {
        speech.voice = preferredVoice;
      }

      window.speechSynthesis.speak(speech);
    } catch (error) {
      console.error('Failed to play audio alert:', error);
    }
  }, []);

  // Reset inactivity timer
  const resetInactivityTimer = useCallback(() => {
    if (!isFocusModeEnabled) return;

    lastActivityRef.current = Date.now();
    setShowInactivityAlert(false);

    if (inactivityTimerRef.current) {
      clearTimeout(inactivityTimerRef.current);
    }

    inactivityTimerRef.current = setTimeout(() => {
      if (isVisibleRef.current && isFocusModeEnabled) {
        setShowInactivityAlert(true);
        // Play audio alert
        playInactivityAudio(userName);
      }
    }, INACTIVITY_TIMEOUT);
  }, [isFocusModeEnabled, userName, playInactivityAudio]);

  // Track user activity
  useEffect(() => {
    if (!isFocusModeEnabled) {
      if (inactivityTimerRef.current) {
        clearTimeout(inactivityTimerRef.current);
        inactivityTimerRef.current = null;
      }
      return;
    }

    const activityEvents = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart', 'click'];

    activityEvents.forEach(event => {
      window.addEventListener(event, resetInactivityTimer, { passive: true });
    });

    // Start initial timer
    resetInactivityTimer();

    return () => {
      activityEvents.forEach(event => {
        window.removeEventListener(event, resetInactivityTimer);
      });
      if (inactivityTimerRef.current) {
        clearTimeout(inactivityTimerRef.current);
      }
    };
  }, [isFocusModeEnabled, resetInactivityTimer]);

  // Track page visibility (tab switch, minimize)
  useEffect(() => {
    const handleVisibilityChange = () => {
      const isVisible = !document.hidden;
      isVisibleRef.current = isVisible;

      if (!isVisible) {
        // User left the page - save current session
        updateSessionTime();
        if (inactivityTimerRef.current) {
          clearTimeout(inactivityTimerRef.current);
        }
      } else {
        // User returned to the page
        if (isFocusModeEnabled) {
          // Increment tab switch count and save to localStorage
          const newTabSwitchCount = tabSwitchCount + 1;
          setTabSwitchCount(newTabSwitchCount);
          saveFocusModeData({ tabSwitchCount: newTabSwitchCount });

          // Show welcome back message
          const randomMessage = motivationalMessages[
            Math.floor(Math.random() * motivationalMessages.length)
          ];
          setMotivationalMessage(randomMessage);
          setShowWelcomeBackMessage(true);

          // Restart session tracking
          sessionStartRef.current = Date.now();
          if (focusModeStartRef.current !== null) {
            focusModeStartRef.current = Date.now();
          }

          // Reset inactivity timer
          resetInactivityTimer();
        }
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [isFocusModeEnabled, resetInactivityTimer, updateSessionTime]);

  // Save session on unmount/exit
  useEffect(() => {
    const handleBeforeUnload = () => {
      updateSessionTime();

      // Increment sessions count
      saveFocusModeData({
        sessionsCount: screenTimeData.sessionsCount + 1,
      });
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      // Save on component unmount
      handleBeforeUnload();
    };
  }, [updateSessionTime, saveFocusModeData, screenTimeData.sessionsCount]);

  // Auto-save every minute - ALWAYS ACTIVE
  useEffect(() => {
    const saveInterval = setInterval(() => {
      // Always save screen time, regardless of focus mode state
      updateSessionTime();
    }, 60000); // Every minute

    return () => clearInterval(saveInterval);
  }, [updateSessionTime]);

  // Update display time every second for real-time tracking
  useEffect(() => {
    const displayInterval = setInterval(() => {
      const currentTime = getCurrentScreenTime();
      setCurrentDisplayTime(currentTime);
    }, 1000); // Every second

    return () => clearInterval(displayInterval);
  }, [getCurrentScreenTime]);

  const dismissInactivityAlert = useCallback(() => {
    setShowInactivityAlert(false);
    resetInactivityTimer();
  }, [resetInactivityTimer]);

  const dismissWelcomeBackMessage = useCallback(() => {
    setShowWelcomeBackMessage(false);
  }, []);

  return {
    isFocusModeEnabled,
    toggleFocusMode,
    screenTimeData: {
      ...screenTimeData,
      totalScreenTime: currentDisplayTime.total,
      focusModeTime: currentDisplayTime.focus,
    },
    showInactivityAlert,
    dismissInactivityAlert,
    showWelcomeBackMessage,
    dismissWelcomeBackMessage,
    motivationalMessage,
    tabSwitchCount,
    isFullscreen,
    exitFullscreen,
  };
};
