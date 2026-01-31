/**
 * Accessibility Utilities
 * Provides helpers for improving application accessibility (a11y)
 */

import React, { useCallback, useEffect, useRef, useState } from 'react';

// ========================================
// Focus Management
// ========================================

/**
 * Hook to trap focus within a container (for modals, dialogs, etc.)
 */
export function useFocusTrap(isActive: boolean = true) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isActive || !containerRef.current) return;

    const container = containerRef.current;
    const focusableSelector =
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
    
    const focusableElements = container.querySelectorAll<HTMLElement>(focusableSelector);
    const firstFocusable = focusableElements[0];
    const lastFocusable = focusableElements[focusableElements.length - 1];

    // Store previously focused element
    const previouslyFocused = document.activeElement as HTMLElement;

    // Focus first element
    firstFocusable?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;

      if (e.shiftKey) {
        // Shift + Tab
        if (document.activeElement === firstFocusable) {
          e.preventDefault();
          lastFocusable?.focus();
        }
      } else {
        // Tab
        if (document.activeElement === lastFocusable) {
          e.preventDefault();
          firstFocusable?.focus();
        }
      }
    };

    container.addEventListener('keydown', handleKeyDown);

    return () => {
      container.removeEventListener('keydown', handleKeyDown);
      previouslyFocused?.focus();
    };
  }, [isActive]);

  return containerRef;
}

/**
 * Hook to manage focus on route changes
 */
export function useFocusOnMount(shouldFocus: boolean = true) {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (shouldFocus && elementRef.current) {
      // Small delay to ensure DOM is ready
      requestAnimationFrame(() => {
        elementRef.current?.focus();
      });
    }
  }, [shouldFocus]);

  return elementRef;
}

// ========================================
// Keyboard Navigation
// ========================================

interface UseArrowNavigationOptions {
  orientation?: 'horizontal' | 'vertical' | 'both';
  loop?: boolean;
  onSelect?: (index: number) => void;
}

/**
 * Hook for arrow key navigation through a list of items
 */
export function useArrowNavigation(
  itemCount: number,
  options: UseArrowNavigationOptions = {}
) {
  const { orientation = 'vertical', loop = true, onSelect } = options;
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      const isVertical = orientation === 'vertical' || orientation === 'both';
      const isHorizontal = orientation === 'horizontal' || orientation === 'both';

      let newIndex = activeIndex;

      switch (e.key) {
        case 'ArrowUp':
          if (isVertical) {
            e.preventDefault();
            newIndex = activeIndex > 0 ? activeIndex - 1 : loop ? itemCount - 1 : 0;
          }
          break;
        case 'ArrowDown':
          if (isVertical) {
            e.preventDefault();
            newIndex = activeIndex < itemCount - 1 ? activeIndex + 1 : loop ? 0 : itemCount - 1;
          }
          break;
        case 'ArrowLeft':
          if (isHorizontal) {
            e.preventDefault();
            newIndex = activeIndex > 0 ? activeIndex - 1 : loop ? itemCount - 1 : 0;
          }
          break;
        case 'ArrowRight':
          if (isHorizontal) {
            e.preventDefault();
            newIndex = activeIndex < itemCount - 1 ? activeIndex + 1 : loop ? 0 : itemCount - 1;
          }
          break;
        case 'Home':
          e.preventDefault();
          newIndex = 0;
          break;
        case 'End':
          e.preventDefault();
          newIndex = itemCount - 1;
          break;
        case 'Enter':
        case ' ':
          e.preventDefault();
          onSelect?.(activeIndex);
          return;
        default:
          return;
      }

      setActiveIndex(newIndex);
    },
    [activeIndex, itemCount, loop, orientation, onSelect]
  );

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.addEventListener('keydown', handleKeyDown);
    return () => container.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  return { containerRef, activeIndex, setActiveIndex };
}

// ========================================
// Screen Reader Announcements
// ========================================

let announcer: HTMLDivElement | null = null;

function getAnnouncer(): HTMLDivElement {
  if (announcer) return announcer;

  announcer = document.createElement('div');
  announcer.setAttribute('aria-live', 'polite');
  announcer.setAttribute('aria-atomic', 'true');
  announcer.setAttribute('role', 'status');
  announcer.style.cssText = `
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  `;
  document.body.appendChild(announcer);

  return announcer;
}

/**
 * Announce a message to screen readers
 */
export function announce(message: string, priority: 'polite' | 'assertive' = 'polite'): void {
  const el = getAnnouncer();
  el.setAttribute('aria-live', priority);
  
  // Clear and set message with delay to ensure announcement
  el.textContent = '';
  setTimeout(() => {
    el.textContent = message;
  }, 100);
}

/**
 * Hook for announcing messages to screen readers
 */
export function useAnnounce() {
  return useCallback((message: string, priority: 'polite' | 'assertive' = 'polite') => {
    announce(message, priority);
  }, []);
}

// ========================================
// Reduced Motion
// ========================================

/**
 * Hook to check if user prefers reduced motion
 */
export function usePrefersReducedMotion(): boolean {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    const handler = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  return prefersReducedMotion;
}

// ========================================
// Skip Link
// ========================================

interface SkipLinkProps {
  targetId: string;
  children?: React.ReactNode;
}

/**
 * Skip to main content link for keyboard users
 */
export function SkipLink({ targetId, children = 'Skip to main content' }: SkipLinkProps) {
  return (
    <a
      href={`#${targetId}`}
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-background focus:text-foreground focus:rounded-md focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary"
    >
      {children}
    </a>
  );
}

// ========================================
// Visually Hidden
// ========================================

interface VisuallyHiddenProps {
  children: React.ReactNode;
  as?: keyof JSX.IntrinsicElements;
}

/**
 * Component to visually hide content while keeping it accessible to screen readers
 */
export function VisuallyHidden({ children, as: Component = 'span' }: VisuallyHiddenProps) {
  return (
    <Component className="sr-only">
      {children}
    </Component>
  );
}

// ========================================
// Focus Visible
// ========================================

/**
 * Hook to detect if focus should be visible (keyboard navigation)
 */
export function useFocusVisible(): boolean {
  const [focusVisible, setFocusVisible] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        setFocusVisible(true);
      }
    };

    const handleMouseDown = () => {
      setFocusVisible(false);
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleMouseDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleMouseDown);
    };
  }, []);

  return focusVisible;
}

// ========================================
// ARIA Helpers
// ========================================

/**
 * Generate unique ID for ARIA relationships
 */
let idCounter = 0;
export function useUniqueId(prefix: string = 'id'): string {
  const [id] = useState(() => `${prefix}-${++idCounter}`);
  return id;
}

/**
 * Get ARIA attributes for expandable elements
 */
export function getExpandableProps(isExpanded: boolean, controlsId: string) {
  return {
    'aria-expanded': isExpanded,
    'aria-controls': controlsId,
  };
}

/**
 * Get ARIA attributes for selected items
 */
export function getSelectableProps(isSelected: boolean) {
  return {
    'aria-selected': isSelected,
    tabIndex: isSelected ? 0 : -1,
  };
}

export default {
  useFocusTrap,
  useFocusOnMount,
  useArrowNavigation,
  announce,
  useAnnounce,
  usePrefersReducedMotion,
  SkipLink,
  VisuallyHidden,
  useFocusVisible,
  useUniqueId,
  getExpandableProps,
  getSelectableProps,
};
