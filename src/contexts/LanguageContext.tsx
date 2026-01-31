import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '@/data/translations';

type Language = 'en' | 'es' | 'fr' | 'hi';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem('app-language');
      return (saved as Language) || 'en';
    } catch {
      return 'en';
    }
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem('app-language', lang);
    } catch (e) {
      console.warn('Failed to save language to localStorage:', e);
    }
  };

  const t = (key: string): string => {
    // Get translation from the translations object
    const translation = translations[language]?.[key as keyof typeof translations.en];
    // Return translation if found, otherwise return the key itself
    return translation || key;
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
