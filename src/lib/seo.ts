import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  type?: 'website' | 'article';
  noIndex?: boolean;
}

// Page-specific SEO configurations
const PAGE_SEO: Record<string, SEOProps> = {
  '/': {
    title: 'SkillForge - Elite Learning Platform',
    description: 'Master real-world skills with our premium AI-powered learning platform featuring interactive lessons, quizzes, and personalized learning paths.',
    keywords: ['learning platform', 'skill development', 'online education', 'AI learning', 'interactive courses'],
  },
  '/dashboard': {
    title: 'Dashboard - SkillForge',
    description: 'Track your learning progress, view achievements, and continue your skill development journey.',
    keywords: ['learning dashboard', 'progress tracking', 'achievements'],
  },
  '/lessons': {
    title: 'Lessons - SkillForge',
    description: 'Explore our comprehensive collection of interactive lessons covering life skills, emotional intelligence, critical thinking, and more.',
    keywords: ['online lessons', 'skill lessons', 'learning modules', 'interactive education'],
  },
  '/quiz': {
    title: 'Quizzes - SkillForge',
    description: 'Test your knowledge with engaging quizzes and earn XP points as you learn.',
    keywords: ['online quizzes', 'skill assessment', 'learning tests'],
  },
  '/notes': {
    title: 'Smart Notes - SkillForge',
    description: 'Create, organize, and enhance your notes with AI-powered assistance.',
    keywords: ['smart notes', 'note taking', 'AI notes', 'study notes'],
  },
  '/pdf-analyzer': {
    title: 'PDF Analyzer - SkillForge',
    description: 'Upload and analyze PDF documents with AI. Get summaries, ask questions, and generate study materials.',
    keywords: ['pdf analyzer', 'document AI', 'pdf summary', 'study tool'],
  },
  '/pomodoro': {
    title: 'Pomodoro Timer - SkillForge',
    description: 'Boost your productivity with the Pomodoro technique. Focus timer with breaks and session tracking.',
    keywords: ['pomodoro timer', 'focus timer', 'productivity tool'],
  },
  '/leaderboard': {
    title: 'Leaderboard - SkillForge',
    description: 'See how you rank among other learners. Compete and climb the leaderboard.',
    keywords: ['leaderboard', 'learning ranking', 'competition'],
  },
  '/profile': {
    title: 'Profile - SkillForge',
    description: 'Manage your profile, view your achievements, and customize your learning experience.',
    keywords: ['user profile', 'achievements', 'settings'],
  },
  '/rewards': {
    title: 'Rewards - SkillForge',
    description: 'Earn rewards and badges as you complete lessons and achieve milestones.',
    keywords: ['learning rewards', 'badges', 'achievements'],
  },
};

const DEFAULT_SEO: SEOProps = {
  title: 'SkillForge - Elite Learning Platform',
  description: 'Master real-world skills with our premium AI-powered learning platform.',
  keywords: ['learning', 'education', 'skills', 'online courses'],
  image: 'https://skillforge-learn.vercel.app/og-image.png',
  type: 'website',
};

export function useSEO(props?: SEOProps) {
  const location = useLocation();

  useEffect(() => {
    const pageSEO = PAGE_SEO[location.pathname] || {};
    const seo = { ...DEFAULT_SEO, ...pageSEO, ...props };

    // Update document title
    document.title = seo.title || DEFAULT_SEO.title!;

    // Update meta tags
    updateMetaTag('description', seo.description || DEFAULT_SEO.description!);
    updateMetaTag('keywords', (seo.keywords || DEFAULT_SEO.keywords!).join(', '));

    // Open Graph tags
    updateMetaTag('og:title', seo.title || DEFAULT_SEO.title!, 'property');
    updateMetaTag('og:description', seo.description || DEFAULT_SEO.description!, 'property');
    updateMetaTag('og:image', seo.image || DEFAULT_SEO.image!, 'property');
    updateMetaTag('og:type', seo.type || DEFAULT_SEO.type!, 'property');
    updateMetaTag('og:url', window.location.href, 'property');

    // Twitter Card tags
    updateMetaTag('twitter:title', seo.title || DEFAULT_SEO.title!);
    updateMetaTag('twitter:description', seo.description || DEFAULT_SEO.description!);
    updateMetaTag('twitter:image', seo.image || DEFAULT_SEO.image!);

    // Canonical URL
    updateLink('canonical', window.location.href);

    // Robots meta tag
    if (seo.noIndex) {
      updateMetaTag('robots', 'noindex, nofollow');
    } else {
      updateMetaTag('robots', 'index, follow');
    }
  }, [location.pathname, props]);
}

function updateMetaTag(name: string, content: string, attribute: 'name' | 'property' = 'name') {
  let element = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;
  
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, name);
    document.head.appendChild(element);
  }
  
  element.content = content;
}

function updateLink(rel: string, href: string) {
  let element = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement;
  
  if (!element) {
    element = document.createElement('link');
    element.rel = rel;
    document.head.appendChild(element);
  }
  
  element.href = href;
}

// SEO Component for wrapping pages
export function SEOHead({ title, description, keywords, image, type, noIndex }: SEOProps) {
  useSEO({ title, description, keywords, image, type, noIndex });
  return null;
}

// Structured data for the website
export function getStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'SkillForge',
    description: 'Master real-world skills with our premium AI-powered learning platform.',
    url: 'https://skillforge-learn.vercel.app',
    applicationCategory: 'EducationalApplication',
    operatingSystem: 'Web Browser',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    author: {
      '@type': 'Organization',
      name: 'SkillForge',
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://skillforge-learn.vercel.app/lessons?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };
}
