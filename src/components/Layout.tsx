import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Globe } from 'lucide-react';
import { HamburgerMenu } from './ui/HamburgerMenu';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();

  const navigation = [
    { name: t('nav.home'), href: '/', key: 'home' },
    { name: t('nav.about'), href: '/about', key: 'about' },
    { name: t('nav.services'), href: '/services', key: 'services' },
    { name: t('nav.shivpoojan'), href: '/shivpoojan', key: 'shivpoojan', disabled: true },
    { name: t('nav.gallery'), href: '/gallery', key: 'gallery', disabled: true },
    { name: t('nav.contact'), href: '/contact', key: 'contact' },
  ];

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between w-full">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <img src="/android-chrome-192x192.png" alt="Logo" className="w-10 h-10 object-cover rounded-full" />
              <div className="hidden md:block">
                <h1 className="text-xl font-bold text-primary font-sanskrit">
                  {language === 'hi' ? 'भक्ति संस्कृति' : 'Bhakti Sanskriti'}
                </h1>
              </div>
            </Link>

            {/* Language Toggle and Hamburger for mobile */}
            <div className="flex items-center space-x-2 ml-auto">
              <Globe className="w-4 h-4 text-muted-foreground" />
              <Button
                variant={language === 'en' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setLanguage('en')}
                className="text-xs"
              >
                EN
              </Button>
              <Button
                variant={language === 'hi' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setLanguage('hi')}
                className="text-xs"
              >
                हि
              </Button>
              <span className="block lg:hidden">
                <HamburgerMenu onClick={() => setMobileMenuOpen((v) => !v)} />
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8 ml-8">
              {navigation.map((item) => (
                item.disabled ? (
                  <span
                    key={item.key}
                    className="text-sm font-medium text-muted-foreground opacity-50 cursor-not-allowed"
                    title="Coming Soon"
                  >
                    {item.name}
                  </span>
                ) : (
                  <Link
                    key={item.key}
                    to={item.href}
                    className={`text-sm font-medium transition-colors hover:text-primary ${
                      location.pathname === item.href
                        ? 'text-primary border-b-2 border-primary'
                        : 'text-muted-foreground'
                    }`}
                    onClick={e => {
                      if (location.pathname === item.href) {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }
                    }}
                  >
                    {item.name}
                  </Link>
                )
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
              className={`fixed top-0 right-0 h-full w-64 bg-card shadow-lg transform transition-transform duration-300 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
              onClick={e => e.stopPropagation()}
            >
              <div className="flex flex-col h-full p-6">
                <div className="flex items-center justify-between mb-8">
                  <span className="text-lg font-bold font-sanskrit text-primary">{language === 'hi' ? 'भक्ति संस्कृति' : 'Bhakti Sanskriti'}</span>
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
                    item.disabled ? (
                      <span
                        key={item.key}
                        className="text-base font-medium text-muted-foreground opacity-50 cursor-not-allowed"
                        title="Coming Soon"
                      >
                        {item.name}
                      </span>
                    ) : (
                      <Link
                        key={item.key}
                        to={item.href}
                        className={`text-base font-medium transition-colors hover:text-primary ${
                          location.pathname === item.href
                            ? 'text-primary border-b border-primary'
                            : 'text-muted-foreground'
                        }`}
                        onClick={e => {
                          setMobileMenuOpen(false);
                          if (location.pathname === item.href) {
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                          }
                        }}
                      >
                        {item.name}
                      </Link>
                    )
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
      <footer className="bg-card border-t border-border mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <img src="/android-chrome-192x192.png" alt="Logo" className="w-8 h-8 object-cover rounded-full" />
              <h3 className="text-lg font-semibold text-primary font-sanskrit">
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