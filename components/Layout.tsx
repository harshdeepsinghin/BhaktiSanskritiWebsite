'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Globe, Menu, X } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { language, setLanguage, t } = useLanguage();
  const pathname = usePathname();

  const navigation = [
    { name: t('nav.home'), href: '/', key: 'home' },
    { name: t('nav.about'), href: '/about', key: 'about' },
    { name: t('nav.services'), href: '/services', key: 'services' },
    { name: t('nav.shivpoojan'), href: '/shivpoojan', key: 'shivpoojan' },
    { name: t('nav.gallery'), href: '/gallery', key: 'gallery' },
    { name: t('nav.contact'), href: '/contact', key: 'contact' },
  ];

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-secondary border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between w-full">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <img src="/android-chrome-192x192.png" alt="Logo" className="w-10 h-10 object-cover rounded-full" />
              <div className="hidden md:block">
                <h1 className="text-xl font-bold text-primary">
                  <span className={language === 'hi' ? 'font-sanskrit' : 'font-english'}>
                    {language === 'hi' ? 'भक्ति संस्कृति' : 'Bhakti Sanskriti'}
                  </span>
                </h1>
              </div>
            </Link>

            {/* Language Toggle and Hamburger for mobile */}
            <div className="flex items-center space-x-2 ml-auto">
              <Globe className="w-4 h-4 text-muted-foreground" />
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setLanguage('en')}
                className={`text-xs border border-primary text-primary shadow-none transition-colors duration-200
                  ${language === 'en' ? 'bg-primary text-primary-foreground' : 'bg-transparent'}
                  hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground`}
              >
                EN
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setLanguage('hi')}
                className={`text-xs border border-primary text-primary shadow-none transition-colors duration-200
                  ${language === 'hi' ? 'bg-primary text-primary-foreground' : 'bg-transparent'}
                  hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground`}
              >
                हि
              </Button>
              <button 
                className="block lg:hidden p-2 text-muted-foreground hover:text-primary"
                onClick={() => setMobileMenuOpen((v) => !v)}
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8 ml-8">
              {navigation.map((item) => (
                <Link
                  key={item.key}
                  href={item.href}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    pathname === item.href
                      ? 'text-primary border-b-2 border-primary'
                      : 'text-muted-foreground'
                  }`}
                  onClick={e => {
                    if (pathname === item.href) {
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                  }}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Mobile Navigation Slide-in Drawer */}
          <div
            className={`fixed inset-0 z-50 transition-all duration-300 lg:hidden ${mobileMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
            style={{ background: mobileMenuOpen ? 'rgba(0,0,0,0.3)' : 'transparent' }}
            onClick={() => setMobileMenuOpen(false)}
          >
            <aside
              className={`fixed top-0 right-0 h-full w-64 bg-secondary shadow-lg transform transition-transform duration-300 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
              onClick={e => e.stopPropagation()}
            >
              <div className="flex flex-col h-full p-6">
                <div className="flex items-center justify-between mb-8">
                  <span className={`text-lg font-bold text-primary ${language === 'hi' ? 'font-sanskrit' : 'font-english'}`}>{language === 'hi' ? 'भक्ति संस्कृति' : 'Bhakti Sanskriti'}</span>
                  <button
                    className="text-2xl text-muted-foreground hover:text-primary focus:outline-none"
                    onClick={() => setMobileMenuOpen(false)}
                    aria-label="Close menu"
                  >
                    &times;
                  </button>
                </div>
                <nav className="flex flex-col gap-4">
                  {navigation.map((item) => (
                <Link
                  key={item.key}
                  href={item.href}
                  className={`text-base font-medium transition-colors hover:text-primary ${
                    pathname === item.href
                      ? 'text-primary border-b border-primary'
                      : 'text-muted-foreground'
                  }`}
                  onClick={e => {
                    setMobileMenuOpen(false);
                    if (pathname === item.href) {
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                  }}
                >
                  {item.name}
                </Link>
                  ))}
                </nav>
                <div className="mt-auto flex gap-2 pt-8">
                  <Button
                    variant={language === 'en' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setLanguage('en')}
                    className="text-xs w-full"
                  >
                    EN
                  </Button>
                  <Button
                    variant={language === 'hi' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setLanguage('hi')}
                    className="text-xs w-full"
                  >
                    हि
                  </Button>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-secondary border-t border-border mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <img src="/android-chrome-192x192.png" alt="Logo" className="w-8 h-8 object-cover rounded-full" />
              <h3 className={`text-lg font-semibold text-primary ${language === 'hi' ? 'font-sanskrit' : 'font-english'}`}>
                {language === 'hi' ? 'भक्ति संस्कृति' : 'Bhakti Sanskriti'}
              </h3>
            </div>
            <p className="text-sm text-muted-foreground">
              {t('footer.copyright')}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;