import { ReactNode } from "react";
import { useFocusMode } from "@/hooks/useFocusMode";
import { FocusModeToggle } from "./focus-mode-toggle";
import { InactivityAlert, WelcomeBackMessage } from "./focus-mode-alerts";

interface FocusModeWrapperProps {
  children: ReactNode;
  showToggle?: boolean;
}

export const FocusModeWrapper = ({ children, showToggle = true }: FocusModeWrapperProps) => {
  const {
    isFocusModeEnabled,
    toggleFocusMode,
    screenTimeData,
    showInactivityAlert,
    dismissInactivityAlert,
    showWelcomeBackMessage,
    dismissWelcomeBackMessage,
    motivationalMessage,
  } = useFocusMode();

  return (
    <>
      {/* Focus Mode Toggle */}
      {showToggle && (
        <div className="sticky top-16 z-40 bg-background/80 backdrop-blur-xl border-b border-border/30 py-3">
          <div className="container mx-auto px-4 flex justify-end">
            <FocusModeToggle
              isEnabled={isFocusModeEnabled}
              onToggle={toggleFocusMode}
              totalTime={screenTimeData.totalScreenTime}
              focusTime={screenTimeData.focusModeTime}
            />
          </div>
        </div>
      )}

      {/* Inactivity Alert */}
      <InactivityAlert
        show={showInactivityAlert}
        onDismiss={dismissInactivityAlert}
      />

      {/* Welcome Back Message */}
      <WelcomeBackMessage
        show={showWelcomeBackMessage}
        message={motivationalMessage}
        onDismiss={dismissWelcomeBackMessage}
      />

      {/* Page Content */}
      {children}
    </>
  );
};
