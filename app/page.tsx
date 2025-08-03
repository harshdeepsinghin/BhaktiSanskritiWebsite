'use client'

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { Heart, Users, Calendar, ArrowRight } from 'lucide-react';

export default function Home() {
  const { t } = useLanguage();

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
      <div className="bg-card py-2 md:py-4">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-xl md:text-2xl font-bold font-sanskrit text-card-foreground">
            {t('home.title')}
          </h2>
        </div>
      </div>

      {/* Home Content */}
      <section className="py-16">
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
                <h3 className="text-xl font-semibold mb-2">{t('services.cultural')}</h3>
                <p className="text-muted-foreground">Traditional cultural events and programs</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Users className="w-12 h-12 text-secondary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{t('services.education')}</h3>
                <p className="text-muted-foreground">Spiritual learning and guidance</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Calendar className="w-12 h-12 text-secondary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{t('services.festivals')}</h3>
                <p className="text-muted-foreground">Traditional festival celebrations</p>
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