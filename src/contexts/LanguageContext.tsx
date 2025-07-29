import React, { createContext, useContext, useState, useEffect } from 'react';

interface LanguageContextType {
  language: 'en' | 'hi';
  setLanguage: (lang: 'en' | 'hi') => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.services': 'Our Services',
    'nav.shivpoojan': 'Shivpoojan Kit',
    'nav.gallery': 'Gallery',
    'nav.contact': 'Contact Us',
    
    // Home Page
    'home.title': 'Welcome to Bhakti Sanskriti',
    'home.subtitle': 'Preserving Sacred Traditions, Spreading Divine Knowledge',
    'home.description': 'Dedicated to promoting Hindu culture, spirituality, and traditional values through various cultural programs and services.',
    'home.explore': 'Explore Our Services',
    
    // About Page
    'about.title': 'About Us',
    'about.subtitle': 'Our Mission & Vision',
    'about.mission': 'To preserve and promote Hindu dharma, culture, and spiritual values in modern society.',
    'about.vision': 'Creating a spiritually enlightened society rooted in ancient wisdom and traditions.',
    
    // Services Page
    'services.title': 'Our Services',
    'services.subtitle': 'Dedicated to Spiritual Growth',
    'services.cultural': 'Cultural Programs',
    'services.education': 'Spiritual Education',
    'services.festivals': 'Festival Celebrations',
    
    // Shivpoojan Page
    'shivpoojan.title': 'Shivpoojan Kit',
    'shivpoojan.subtitle': 'Complete Worship Kit for Lord Shiva',
    'shivpoojan.description': 'Everything you need for authentic Shiva worship and puja rituals.',
    
    // Gallery Page
    'gallery.title': 'Gallery',
    'gallery.subtitle': 'Moments of Divine Grace',
    'gallery.photos': 'Photo Gallery',
    'gallery.videos': 'Video Gallery',
    
    // Contact Page
    'contact.title': 'Contact Us',
    'contact.subtitle': 'Get in Touch',
    'contact.whatsapp': 'WhatsApp',
    'contact.call': 'Call Us',
    'contact.email': 'Email Us',
    
    // Footer
    'footer.copyright': '© 2024 Bhakti Sanskriti. All rights reserved.',
  },
  hi: {
    // Navigation
    'nav.home': 'होमपेज',
    'nav.about': 'संस्थान के बारे में',
    'nav.services': 'हमारी सेवाएँ',
    'nav.shivpoojan': 'शिवपूजन किट',
    'nav.gallery': 'गैलरी',
    'nav.contact': 'संपर्क करें',
    
    // Home Page
    'home.title': 'भक्ति संस्कृति में आपका स्वागत है',
    'home.subtitle': 'पवित्र परंपराओं का संरक्षण, दिव्य ज्ञान का प्रसार',
    'home.description': 'विभिन्न सांस्कृतिक कार्यक्रमों और सेवाओं के माध्यम से हिंदू संस्कृति, आध्यात्म और पारंपरिक मूल्यों को बढ़ावा देने के लिए समर्पित।',
    'home.explore': 'हमारी सेवाएं देखें',
    
    // About Page
    'about.title': 'संस्थान के बारे में',
    'about.subtitle': 'हमारा मिशन और विजन',
    'about.mission': 'आधुनिक समाज में हिंदू धर्म, संस्कृति और आध्यात्मिक मूल्यों का संरक्षण और संवर्धन करना।',
    'about.vision': 'प्राचीन ज्ञान और परंपराओं में निहित आध्यात्मिक रूप से प्रबुद्ध समाज का निर्माण।',
    
    // Services Page
    'services.title': 'हमारी सेवाएँ',
    'services.subtitle': 'आध्यात्मिक विकास के लिए समर्पित',
    'services.cultural': 'सांस्कृतिक कार्यक्रम',
    'services.education': 'आध्यात्मिक शिक्षा',
    'services.festivals': 'त्योहार समारोह',
    
    // Shivpoojan Page
    'shivpoojan.title': 'शिवपूजन किट',
    'shivpoojan.subtitle': 'भगवान शिव की पूर्ण पूजा किट',
    'shivpoojan.description': 'प्रामाणिक शिव पूजा और पूजा अनुष्ठानों के लिए आपकी आवश्यकता की हर चीज।',
    
    // Gallery Page
    'gallery.title': 'गैलरी',
    'gallery.subtitle': 'दिव्य कृपा के क्षण',
    'gallery.photos': 'फोटो गैलरी',
    'gallery.videos': 'वीडियो गैलरी',
    
    // Contact Page
    'contact.title': 'संपर्क करें',
    'contact.subtitle': 'संपर्क में रहें',
    'contact.whatsapp': 'व्हाट्सऐप',
    'contact.call': 'कॉल करें',
    'contact.email': 'ईमेल करें',
    
    // Footer
    'footer.copyright': '© 2024 भक्ति संस्कृति। सभी अधिकार सुरक्षित।',
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<'en' | 'hi'>('en');

  useEffect(() => {
    const savedLang = localStorage.getItem('language') as 'en' | 'hi' | null;
    if (savedLang) {
      setLanguage(savedLang);
    } else {
      // Auto-detect browser language
      const browserLang = navigator.language.toLowerCase();
      if (browserLang.includes('hi') || browserLang.includes('hindi')) {
        setLanguage('hi');
      }
    }
  }, []);

  const handleSetLanguage = (lang: 'en' | 'hi') => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
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