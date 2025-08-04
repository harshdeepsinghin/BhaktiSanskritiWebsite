'use client'

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { Heart, Users, Calendar, ArrowRight } from 'lucide-react';

export default function Home() {
  const { t, language } = useLanguage();

  const serviceDescriptions = {
    cultural: {
      hi: "पारंपरिक सांस्कृतिक कार्यक्रम और समुदायिक भागीदारी",
      en: "Traditional cultural events and programs"
    },
    education: {
      hi: "आध्यात्मिक शिक्षा और मार्गदर्शन",
      en: "Spiritual learning and guidance"
    },
    festivals: {
      hi: "पारंपरिक त्योहारों का मनाना",
      en: "Traditional festival celebrations"
    }
  };

  return (
    <div>
      {/* Responsive Image */}
      <div className="w-full">
        <Image
          src="/home.jpeg"
          alt="Sacred Home"
          width={1920}
          height={1080}
          className="w-full h-auto object-cover"
          priority
          quality={90}
        />
      </div>


      {/* Company Name */}
      <div className="bg-card py-6 md:py-8">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-2xl md:text-4xl font-bold font-sanskrit text-card-foreground">
            {t('home.title')}
          </h1>
        </div>
      </div>

      {/* Inspiration Story */}
      <div className="from-primary/10 py-8 md:py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto" style={{ textAlign: 'center', fontStyle: 'italic', fontSize: '1.2rem', padding: '1.5rem', borderLeft: '4px solid #d97706', margin: '2rem auto' }}>
            <p className="text-lg md:text-xl text-muted-foreground mb-4 font-sanskrit" style={{ fontFamily: 'Noto Sans Devanagari, serif', lineHeight: 1.8 }}>
              "श्रावण मास की वो दिव्य घड़ी जब किसी मन में जगी एक जिज्ञासा..."
            </p>
            <p className="text-base md:text-lg text-muted-foreground font-sanskrit" style={{ fontFamily: 'Noto Sans Devanagari, serif', lineHeight: 1.8 }}>
              — यही वह क्षण था जिसने भक्ति वृत्तिका को जन्म दिया।
            </p>
          </div>
        </div>
      </div>

      {/* Home Content */}
      <section className="py-1">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-lg mb-8 text-muted-foreground max-w-2xl mx-auto">
              {t('home.description')}
            </p>
            <Link href="/services">
              <Button size="lg" variant="default" className="font-semibold">
                {t('home.explore')}
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Heart className="w-12 h-12 text-secondary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2 font-sanskrit">{t('services.cultural')}</h3>
                <p className="text-muted-foreground" style={{ fontFamily: language === 'hi' ? 'Noto Sans Devanagari, serif' : 'inherit' }}>
                  {serviceDescriptions.cultural[language]}
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Users className="w-12 h-12 text-secondary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2 font-sanskrit">{t('services.education')}</h3>
                <p className="text-muted-foreground" style={{ fontFamily: language === 'hi' ? 'Noto Sans Devanagari, serif' : 'inherit' }}>
                  {serviceDescriptions.education[language]}
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Calendar className="w-12 h-12 text-secondary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2 font-sanskrit">{t('services.festivals')}</h3>
                <p className="text-muted-foreground" style={{ fontFamily: language === 'hi' ? 'Noto Sans Devanagari, serif' : 'inherit' }}>
                  {serviceDescriptions.festivals[language]}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6 font-sanskrit">
                {t('shivpoojan.title')}
              </h2>
              <p className="text-muted-foreground mb-6 text-lg">
                {t('shivpoojan.description')}
              </p>
              <Link href="/shivpoojan">
                <Button variant="default" size="lg">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}