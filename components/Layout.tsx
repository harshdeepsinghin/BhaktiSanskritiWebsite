'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Globe, Menu } from 'lucide-react';

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
    { name: t('nav.products'), href: '/products', key: 'products' },
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
              <div>
                <h1 className="text-sm md:text-xl font-bold text-primary">
                  <span className={language === 'hi' ? 'font-sanskrit' : 'font-english'}>
                    {language === 'hi' ? 'भक्ति संस्कृति' : 'Bhakti Sanskriti'}
                  </span>
                </h1>
                <p className={`text-xs opacity-75 ${language === 'hi' ? 'font-sanskrit' : 'font-english'} hidden md:block`}>
                  {language === 'hi' ? 'देवभूमि भारत संस्थान' : 'Devbhoomi Bharat Sansthan'}
                </p>
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
      <footer className="bg-gradient-spiritual text-white mt-16">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-4">
                <img src="/android-chrome-192x192.png" alt="Logo" className="w-12 h-12 object-cover rounded-full border-2 border-white/20" />
                <div>
                  <h3 className={`text-xl font-bold ${language === 'hi' ? 'font-sanskrit' : 'font-english'}`}>
                    {language === 'hi' ? 'भक्ति संस्कृति' : 'Bhakti Sanskriti'}
                  </h3>
                  <p className={`text-sm opacity-80 ${language === 'hi' ? 'font-sanskrit' : 'font-english'}`}>
                    {language === 'hi' ? 'देवभूमि भारत संस्थान' : 'Devbhoomi Bharat Sansthan'}
                  </p>
                </div>
              </div>
              <p className="text-sm opacity-90 leading-relaxed">
                {language === 'hi' 
                  ? 'हिंदू संस्कृति, आध्यात्म और पारंपरिक मूल्यों को बढ़ावा देने के लिए समर्पित संस्थान।'
                  : 'An organization dedicated to promoting Hindu culture, spirituality, and traditional values through various cultural programs and services.'
                }
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">
                {language === 'hi' ? 'त्वरित लिंक' : 'Quick Links'}
              </h4>
              <nav className="space-y-2">
                {navigation.map((item) => (
                  <Link
                    key={item.key}
                    href={item.href}
                    className="block text-sm opacity-80 hover:opacity-100 hover:text-white transition-all duration-200 hover:translate-x-1"
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">
                {language === 'hi' ? 'हमारी सेवाएं' : 'Our Services'}
              </h4>
              <div className="space-y-2 text-sm opacity-80">
                <p className="hover:opacity-100 transition-opacity">
                  {language === 'hi' ? 'पूजा और अनुष्ठान' : 'Puja & Rituals'}
                </p>
                <p className="hover:opacity-100 transition-opacity">
                  {language === 'hi' ? 'सांस्कृतिक कार्यक्रम' : 'Cultural Programs'}
                </p>
                <p className="hover:opacity-100 transition-opacity">
                  {language === 'hi' ? 'आध्यात्मिक परामर्श' : 'Spiritual Guidance'}
                </p>
                <p className="hover:opacity-100 transition-opacity">
                  {language === 'hi' ? 'उत्पाद' : 'Products'}
                </p>
                <p className="hover:opacity-100 transition-opacity">
                  {language === 'hi' ? 'धार्मिक शिक्षा' : 'Religious Education'}
                </p>
              </div>
            </div>

            {/* Contact & Social */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">
                {language === 'hi' ? 'संपर्क करें' : 'Get In Touch'}
              </h4>
              
              {/* Contact Info */}
              <div className="space-y-3 text-sm opacity-80 mb-6">
                <div className="flex items-start space-x-2">
                  <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <div className="hover:opacity-100 transition-opacity leading-relaxed">
                      {language === 'hi' ? (
                        <>
                          <p className="font-medium">देवभूमि भारत संस्थान</p>
                          <p>कार्यालय पता - खसरा नंबर 145,</p>
                          <p>साहकोला पांडे गांव,</p>
                          <p>भीमताल (नैनीताल)</p>
                        </>
                      ) : (
                        <>
                          <p className="font-medium">Devbhoomi Bharat Sansthan</p>
                          <p>Office Address - Khasra No. 145,</p>
                          <p>Sahkola Pande Village,</p>
                          <p>Bhimtal (Nainital)</p>
                        </>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <a href="mailto:support@bhaktisanskriti.org" className="hover:opacity-100 transition-opacity hover:underline">
                    support@bhaktisanskriti.org
                  </a>
                </div>
                
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span className="hover:opacity-100 transition-opacity">
                    {language === 'hi' ? 'संपर्क के लिए ईमेल करें' : 'Contact via Email'}
                  </span>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <p className="text-sm font-medium mb-3 text-white">
                  {language === 'hi' ? 'हमसे जुड़ें' : 'Follow Us'}
                </p>
                <div className="flex space-x-3">
                  <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors group">
                    <svg className="w-4 h-4 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors group">
                    <svg className="w-4 h-4 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors group">
                    <svg className="w-4 h-4 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors group">
                    <svg className="w-4 h-4 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/20 mt-8 pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-sm opacity-80">
                <p>
                  © 2025 {language === 'hi' ? 'भक्ति संस्कृति - देवभूमि भारत संस्थान' : 'Bhakti Sanskriti - Devbhoomi Bharat Sansthan'}. 
                  {language === 'hi' ? ' सभी अधिकार सुरक्षित।' : ' All rights reserved.'}
                </p>
              </div>
              
              <div className="flex items-center space-x-6 text-sm opacity-80">
                <Link href="/privacy" className="hover:opacity-100 transition-opacity hover:underline">
                  {language === 'hi' ? 'गोपनीयता नीति' : 'Privacy Policy'}
                </Link>
                <Link href="/terms" className="hover:opacity-100 transition-opacity hover:underline">
                  {language === 'hi' ? 'नियम और शर्तें' : 'Terms of Service'}
                </Link>
                <div className="flex items-center space-x-2">
                  <Globe className="w-4 h-4" />
                  <span>{language === 'hi' ? 'हिंदी' : 'English'}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;