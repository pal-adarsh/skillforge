/**
 * Asset utilities for handling broken images and providing fallbacks
 */

// Fallback image as base64 SVG (prevents external requests)
export const FALLBACK_IMAGE = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%231a1a2e'/%3E%3Ctext x='50%25' y='45%25' dominant-baseline='middle' text-anchor='middle' fill='%236366f1' font-family='system-ui' font-size='48'%3E📚%3C/text%3E%3Ctext x='50%25' y='60%25' dominant-baseline='middle' text-anchor='middle' fill='%23888' font-family='system-ui' font-size='14'%3EImage not available%3C/text%3E%3C/svg%3E`;

// Category-specific fallback images
export const CATEGORY_FALLBACKS: Record<string, string> = {
  coding: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%231a1a2e'/%3E%3Ctext x='50%25' y='45%25' dominant-baseline='middle' text-anchor='middle' fill='%236366f1' font-family='system-ui' font-size='48'%3E💻%3C/text%3E%3Ctext x='50%25' y='60%25' dominant-baseline='middle' text-anchor='middle' fill='%23888' font-family='system-ui' font-size='14'%3ECoding%3C/text%3E%3C/svg%3E`,
  science: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%231a1a2e'/%3E%3Ctext x='50%25' y='45%25' dominant-baseline='middle' text-anchor='middle' fill='%236366f1' font-family='system-ui' font-size='48'%3E🔬%3C/text%3E%3Ctext x='50%25' y='60%25' dominant-baseline='middle' text-anchor='middle' fill='%23888' font-family='system-ui' font-size='14'%3EScience%3C/text%3E%3C/svg%3E`,
  health: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%231a1a2e'/%3E%3Ctext x='50%25' y='45%25' dominant-baseline='middle' text-anchor='middle' fill='%236366f1' font-family='system-ui' font-size='48'%3E🏥%3C/text%3E%3Ctext x='50%25' y='60%25' dominant-baseline='middle' text-anchor='middle' fill='%23888' font-family='system-ui' font-size='14'%3EHealth%3C/text%3E%3C/svg%3E`,
  general: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%231a1a2e'/%3E%3Ctext x='50%25' y='45%25' dominant-baseline='middle' text-anchor='middle' fill='%236366f1' font-family='system-ui' font-size='48'%3E📖%3C/text%3E%3Ctext x='50%25' y='60%25' dominant-baseline='middle' text-anchor='middle' fill='%23888' font-family='system-ui' font-size='14'%3EGeneral Knowledge%3C/text%3E%3C/svg%3E`,
  emotional: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%231a1a2e'/%3E%3Ctext x='50%25' y='45%25' dominant-baseline='middle' text-anchor='middle' fill='%236366f1' font-family='system-ui' font-size='48'%3E💝%3C/text%3E%3Ctext x='50%25' y='60%25' dominant-baseline='middle' text-anchor='middle' fill='%23888' font-family='system-ui' font-size='14'%3EEmotional Intelligence%3C/text%3E%3C/svg%3E`,
  critical: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%231a1a2e'/%3E%3Ctext x='50%25' y='45%25' dominant-baseline='middle' text-anchor='middle' fill='%236366f1' font-family='system-ui' font-size='48'%3E🧠%3C/text%3E%3Ctext x='50%25' y='60%25' dominant-baseline='middle' text-anchor='middle' fill='%23888' font-family='system-ui' font-size='14'%3ECritical Thinking%3C/text%3E%3C/svg%3E`,
};

/**
 * Get fallback image for a category
 */
export function getFallbackImage(category?: string): string {
  if (!category) return FALLBACK_IMAGE;
  
  const categoryLower = category.toLowerCase();
  
  for (const [key, value] of Object.entries(CATEGORY_FALLBACKS)) {
    if (categoryLower.includes(key)) {
      return value;
    }
  }
  
  return FALLBACK_IMAGE;
}

/**
 * Image loading handler with fallback
 */
export function handleImageError(
  event: React.SyntheticEvent<HTMLImageElement>,
  fallbackSrc?: string
) {
  const img = event.currentTarget;
  if (img.src !== (fallbackSrc || FALLBACK_IMAGE)) {
    img.src = fallbackSrc || FALLBACK_IMAGE;
  }
}

/**
 * Preload critical images
 */
export function preloadImages(urls: string[]): Promise<void[]> {
  return Promise.all(
    urls.map(
      (url) =>
        new Promise<void>((resolve) => {
          const img = new Image();
          img.onload = () => resolve();
          img.onerror = () => resolve(); // Don't fail, just continue
          img.src = url;
        })
    )
  );
}

/**
 * Check if an image URL is valid and accessible
 */
export async function isImageAccessible(url: string): Promise<boolean> {
  try {
    const response = await fetch(url, { method: 'HEAD', mode: 'no-cors' });
    return true;
  } catch {
    return false;
  }
}

/**
 * Lazy load image with IntersectionObserver
 */
export function createLazyImageObserver(
  onIntersect: (entry: IntersectionObserverEntry) => void
): IntersectionObserver {
  return new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          onIntersect(entry);
        }
      });
    },
    {
      rootMargin: '50px 0px',
      threshold: 0.01,
    }
  );
}
