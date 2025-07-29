import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Globe } from 'lucide-react';

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
    { name: t('nav.shivpoojan'), href: '/shivpoojan', key: 'shivpoojan' },
    { name: t('nav.gallery'), href: '/gallery', key: 'gallery' },
    { name: t('nav.contact'), href: '/contact', key: 'contact' },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <img src="/android-chrome-192x192.png" alt="Logo" className="w-10 h-10 object-cover rounded-full" />
              <div className="hidden md:block">
                <h1 className="text-xl font-bold text-primary font-sanskrit">
                  {language === 'hi' ? 'भक्ति संस्कृति' : 'Bhakti Sanskriti'}
                </h1>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
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
              ))}
            </nav>

            {/* Language Toggle */}
            <div className="flex items-center space-x-2">
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
            </div>
          </div>

          {/* Mobile Navigation */}
          <nav className="lg:hidden mt-4 flex flex-wrap gap-4">
            {navigation.map((item) => (
              <Link
                key={item.key}
                to={item.href}
                className={`text-xs font-medium transition-colors hover:text-primary ${
                  location.pathname === item.href
                    ? 'text-primary border-b border-primary'
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
            ))}
          </nav>
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