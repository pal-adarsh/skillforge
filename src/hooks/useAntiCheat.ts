import { useEffect, useState, useCallback } from 'react';
import { toast } from 'sonner';

interface UseAntiCheatOptions {
  enabled: boolean;
  showWarnings?: boolean;
}

export const useAntiCheat = ({
  enabled,
  showWarnings = true,
}: UseAntiCheatOptions) => {
  const [screenCaptureAttempted, setScreenCaptureAttempted] = useState(false);

  const showSecurityWarning = useCallback(
    (message: string) => {
      if (!showWarnings) return;

      toast.warning(message, {
        duration: 3000,
        position: 'top-center',
      });
    },
    [showWarnings]
  );

  useEffect(() => {
    if (!enabled) return;

    /* ================= CONTEXT MENU ================= */
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      showSecurityWarning('Right-click is disabled during the test');
      return false;
    };

    /* ================= KEYBOARD ================= */
    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();
      const ctrl = e.ctrlKey || e.metaKey;
      const shift = e.shiftKey;
      const alt = e.altKey;

      /* ---------- SCREENSHOT KEYS ---------- */
      if (
        key === 'printscreen' ||                // PrintScreen
        (alt && key === 'printscreen') ||       // Alt + PrintScreen
        (ctrl && key === 'printscreen') ||      // Ctrl + PrintScreen
        (shift && ctrl && ['3', '4', '5'].includes(key)) // macOS screenshots
      ) {
        e.preventDefault();
        setScreenCaptureAttempted(true);
        showSecurityWarning('Screenshots are not allowed during the test');
        return false;
      }

      /* ---------- DEVTOOLS ---------- */
      if (
        key === 'f12' ||
        (ctrl && shift && ['i', 'j', 'c', 'k', 'm'].includes(key)) ||
        (e.metaKey && alt && ['i', 'j', 'c'].includes(key)) // macOS
      ) {
        e.preventDefault();
        showSecurityWarning('Developer tools are disabled during the test');
        return false;
      }

      /* ---------- BLOCK COMMON SHORTCUTS ---------- */
      const blockedCtrlKeys = [
        'c', // copy
        'x', // cut
        'v', // paste
        'a', // select all
        's', // save
        'p', // print
        'u', // view source
        'r', // reload
        'w', // close tab
        'n', // new window
        'f', // find
        'h', // history
        'j', // downloads
      ];

      if (ctrl && blockedCtrlKeys.includes(key)) {
        e.preventDefault();
        showSecurityWarning('Keyboard shortcuts are disabled during the test');
        return false;
      }

      /* ---------- BLOCK REFRESH ---------- */
      if (key === 'f5') {
        e.preventDefault();
        showSecurityWarning('Page refresh is disabled during the test');
        return false;
      }
    };

    /* ================= CLIPBOARD ================= */
    const blockClipboard = (e: ClipboardEvent) => {
      e.preventDefault();
      showSecurityWarning('Clipboard actions are disabled during the test');
      return false;
    };

    /* ================= VISIBILITY (TAB SWITCH) ================= */
    const handleVisibilityChange = () => {
      if (document.hidden) {
        showSecurityWarning('Please stay on this tab during the test');
      }
    };

    /* ================= WINDOW BLUR (Win + Shift + S) ================= */
    const handleWindowBlur = () => {
      setScreenCaptureAttempted(true);
      showSecurityWarning('Screen capture tools are not allowed during the test');
    };

    /* ================= MOUSE ================= */
    const handleMouseDown = (e: MouseEvent) => {
      // Middle click (open in new tab)
      if (e.button === 1) {
        e.preventDefault();
        showSecurityWarning('Mouse shortcuts are disabled during the test');
      }
    };

    const handleDragStart = (e: DragEvent) => {
      e.preventDefault();
      return false;
    };

    /* ================= ADD LISTENERS ================= */
    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('copy', blockClipboard);
    document.addEventListener('cut', blockClipboard);
    document.addEventListener('paste', blockClipboard);
    document.addEventListener('visibilitychange', handleVisibilityChange);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('dragstart', handleDragStart);
    window.addEventListener('blur', handleWindowBlur);

    /* ================= CLEANUP ================= */
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('copy', blockClipboard);
      document.removeEventListener('cut', blockClipboard);
      document.removeEventListener('paste', blockClipboard);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('dragstart', handleDragStart);
      window.removeEventListener('blur', handleWindowBlur);
    };
  }, [enabled, showSecurityWarning]);

  return { screenCaptureAttempted };
};
