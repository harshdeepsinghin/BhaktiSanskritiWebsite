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
    'nav.products': 'Products',
    'nav.gallery': 'Gallery',
    'nav.contact': 'Contact Us',
    
    // Home Page
    'home.title': 'Welcome to Bhakti Sanskriti',
    'home.description': 'A research institution dedicated to the preservation of sacred traditions and the dissemination of divine knowledge. Its purpose is to enrich culture, spirituality, and tradition through the harmonious integration of devotion and scripture.',
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
    
    // Products Page
    'products.title': 'Our Products',
    'products.subtitle': 'Complete Vedic & Scripture-Approved Shiva Worship Guide',
    'products.description': 'A comprehensive guide for authentic Shiva worship with mantras and traditional methods.',
    'products.productName': 'Bhakti Vrittika',
    'products.fullName': 'Complete Vedic & Scripture-Approved Simple Shiva Worship Method with Mantras',
    'products.serviceAmount': 'Service Amount',
    'products.features': 'Features',
    'products.contactOrder': 'Contact to Order',
    'products.orderText': 'Get this precious guide for only ₹411/-',
    'products.orderNow': 'Order Now',
    'products.feature1': 'Vedic & Scripture-Approved Method',
    'products.feature2': 'Complete Shiva Worship Process',
    'products.feature3': 'Simple and Clear Instructions',
    'products.feature4': 'Mantra-Based Worship Method',
    'products.feature5': 'Traditional Worship System',
    
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
    'footer.copyright': '© 2025 Bhakti Sanskriti. All rights reserved.',
  },
  hi: {
    // Navigation
    'nav.home': 'होमपेज',
    'nav.about': 'संस्थान के बारे में',
    'nav.services': 'हमारी सेवाएँ',
    'nav.products': 'उत्पाद',
    'nav.gallery': 'गैलरी',
    'nav.contact': 'संपर्क करें',
    
    // Home Page
    'home.title': 'भक्ति संस्कृति में आपका स्वागत है',
    'home.description': 'एक शोध-संस्था जो पवित्र परंपराओं के संरक्षण और दिव्य ज्ञान के प्रसार के लिए समर्पित है। इसका उद्देश्य श्रद्धा और शास्त्र के समन्वय से संस्कृति, आध्यात्म और परंपरा को पुलकित करना है।',
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
    
    // Products Page
    'products.title': 'हमारे उत्पाद',
    'products.subtitle': 'वैदिक व शास्त्र सम्मत सम्पूर्ण शिव पूजा मार्गदर्शिका',
    'products.description': 'मंत्रयुक्त और पारंपरिक विधियों के साथ प्रामाणिक शिव पूजा की संपूर्ण मार्गदर्शिका।',
    'products.productName': 'भक्ति वृत्तिका',
    'products.fullName': 'वैदिक व शास्त्र सम्मत सम्पूर्ण शिव पूजा सरल विधि व मन्त्रयुक्त',
    'products.serviceAmount': 'सेवा राशि',
    'products.features': 'विशेषताएं',
    'products.contactOrder': 'आदेश देने के लिए संपर्क करें',
    'products.orderText': 'केवल ₹411/- में प्राप्त करें यह अनमोल मार्गदर्शिका',
    'products.orderNow': 'अभी ऑर्डर करें',
    'products.feature1': 'वैदिक व शास्त्र सम्मत विधि',
    'products.feature2': 'सम्पूर्ण शिव पूजा प्रक्रिया',
    'products.feature3': 'सरल और स्पष्ट निर्देश',
    'products.feature4': 'मन्त्रयुक्त पूजा विधि',
    'products.feature5': 'वैदिक एवं शास्त्र सम्मत पद्धति',
    
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
    'footer.copyright': '© 2025 भक्ति संस्कृति। सभी अधिकार सुरक्षित।',
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