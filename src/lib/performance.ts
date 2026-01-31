/**
 * Performance Optimization Utilities
 * Provides memoization, debouncing, throttling, and other performance helpers
 */

import { useCallback, useEffect, useRef, useState } from 'react';

// ========================================
// Debounce Hook
// ========================================

/**
 * Debounce a value - only updates after the specified delay
 */
export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

/**
 * Debounce a callback function
 */
export function useDebouncedCallback<T extends (...args: never[]) => unknown>(
  callback: T,
  delay: number
): T {
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();
  const callbackRef = useRef(callback);

  // Update callback ref when callback changes
  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  const debouncedCallback = useCallback(
    (...args: Parameters<T>) => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        callbackRef.current(...args);
      }, delay);
    },
    [delay]
  ) as T;

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return debouncedCallback;
}

// ========================================
// Throttle Hook
// ========================================

/**
 * Throttle a callback function - only executes once per interval
 */
export function useThrottledCallback<T extends (...args: never[]) => unknown>(
  callback: T,
  delay: number
): T {
  const lastRan = useRef<number>(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  const throttledCallback = useCallback(
    (...args: Parameters<T>) => {
      const now = Date.now();
      const remaining = delay - (now - lastRan.current);

      if (remaining <= 0) {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
          timeoutRef.current = undefined;
        }
        lastRan.current = now;
        callbackRef.current(...args);
      } else if (!timeoutRef.current) {
        timeoutRef.current = setTimeout(() => {
          lastRan.current = Date.now();
          timeoutRef.current = undefined;
          callbackRef.current(...args);
        }, remaining);
      }
    },
    [delay]
  ) as T;

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return throttledCallback;
}

// ========================================
// Intersection Observer Hook
// ========================================

interface UseIntersectionObserverOptions {
  threshold?: number | number[];
  root?: Element | null;
  rootMargin?: string;
  freezeOnceVisible?: boolean;
}

/**
 * Hook for lazy loading elements when they enter the viewport
 */
export function useIntersectionObserver<T extends Element>(
  options: UseIntersectionObserverOptions = {}
): [React.RefObject<T>, boolean] {
  const { threshold = 0, root = null, rootMargin = '0px', freezeOnceVisible = false } = options;
  const [isIntersecting, setIsIntersecting] = useState(false);
  const elementRef = useRef<T>(null);
  const frozen = useRef(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Don't observe if already frozen
    if (frozen.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isCurrentlyIntersecting = entry.isIntersecting;
        setIsIntersecting(isCurrentlyIntersecting);

        // Freeze after first visible
        if (freezeOnceVisible && isCurrentlyIntersecting) {
          frozen.current = true;
          observer.unobserve(element);
        }
      },
      { threshold, root, rootMargin }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold, root, rootMargin, freezeOnceVisible]);

  return [elementRef, isIntersecting];
}

// ========================================
// Previous Value Hook
// ========================================

/**
 * Track the previous value of a variable
 */
export function usePrevious<T>(value: T): T | undefined {
  const ref = useRef<T>();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}

// ========================================
// Memoization Utilities
// ========================================

/**
 * Simple memoization function with LRU cache
 */
export function memoize<T extends (...args: Parameters<T>) => ReturnType<T>>(
  fn: T,
  maxSize: number = 100
): T {
  const cache = new Map<string, ReturnType<T>>();
  const keys: string[] = [];

  return ((...args: Parameters<T>): ReturnType<T> => {
    const key = JSON.stringify(args);

    if (cache.has(key)) {
      return cache.get(key)!;
    }

    const result = fn(...args);
    cache.set(key, result);
    keys.push(key);

    // Evict oldest entry if cache is full
    if (keys.length > maxSize) {
      const oldestKey = keys.shift()!;
      cache.delete(oldestKey);
    }

    return result;
  }) as T;
}

// ========================================
// Request Idle Callback
// ========================================

/**
 * Schedule work during browser idle periods
 */
export function useIdleCallback(
  callback: () => void,
  options?: IdleRequestOptions
): void {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    if (!('requestIdleCallback' in window)) {
      // Fallback for Safari
      const timeoutId = setTimeout(callbackRef.current, 1);
      return () => clearTimeout(timeoutId);
    }

    const id = requestIdleCallback(callbackRef.current, options);
    return () => cancelIdleCallback(id);
  }, [options]);
}

// ========================================
// Performance Measurement
// ========================================

/**
 * Measure execution time of a function
 */
export function measurePerformance<T>(
  name: string,
  fn: () => T
): T {
  const start = performance.now();
  const result = fn();
  const end = performance.now();
  
  if (import.meta.env.DEV) {
    console.log(`[Performance] ${name}: ${(end - start).toFixed(2)}ms`);
  }
  
  return result;
}

/**
 * Measure execution time of an async function
 */
export async function measurePerformanceAsync<T>(
  name: string,
  fn: () => Promise<T>
): Promise<T> {
  const start = performance.now();
  const result = await fn();
  const end = performance.now();
  
  if (import.meta.env.DEV) {
    console.log(`[Performance] ${name}: ${(end - start).toFixed(2)}ms`);
  }
  
  return result;
}

// ========================================
// Image Preloading
// ========================================

/**
 * Preload images for better UX
 */
export function preloadImages(urls: string[]): Promise<void[]> {
  return Promise.all(
    urls.map((url) =>
      new Promise<void>((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve();
        img.onerror = reject;
        img.src = url;
      })
    )
  );
}

/**
 * Hook for preloading images
 */
export function usePreloadImages(urls: string[]): boolean {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (urls.length === 0) {
      setLoaded(true);
      return;
    }

    preloadImages(urls)
      .then(() => setLoaded(true))
      .catch(() => setLoaded(true)); // Still set loaded even on error
  }, [urls]);

  return loaded;
}

export default {
  useDebounce,
  useDebouncedCallback,
  useThrottledCallback,
  useIntersectionObserver,
  usePrevious,
  memoize,
  useIdleCallback,
  measurePerformance,
  measurePerformanceAsync,
  preloadImages,
  usePreloadImages,
};
