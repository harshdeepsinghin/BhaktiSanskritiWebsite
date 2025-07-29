import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { Target, Eye, Heart } from 'lucide-react';

const About = () => {
  const { t } = useLanguage();

  return (
    <div className="space-y-16 py-8">
      {/* Header */}
      <section className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 font-sanskrit">
          {t('about.title')}
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          {t('about.subtitle')}
        </p>
      </section>

      {/* Mission & Vision */}
      {/* <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="p-6">
            <CardContent className="pt-6">
              <Target className="w-12 h-12 text-primary mb-4" />
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                {t('about.mission')}
              </p>
            </CardContent>
          </Card>
          
          <Card className="p-6">
            <CardContent className="pt-6">
              <Eye className="w-12 h-12 text-secondary mb-4" />
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                {t('about.vision')}
              </p>
            </CardContent>
          </Card>
        </div>
      </section> */}

      {/* About Content */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-primary mb-6">
                  Dedicated to Spiritual Growth
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Bhakti Sanskriti is committed to preserving the rich heritage of Hindu culture and spirituality. 
                  Through various programs, workshops, and community initiatives, we aim to create awareness 
                  about our ancient traditions and their relevance in modern life.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Our organization focuses on promoting devotional practices, cultural education, and 
                  spiritual development through authentic teachings and traditional methodologies.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-gradient-spiritual rounded-full w-48 h-48 mx-auto flex items-center justify-center mb-6">
                  <span className="text-white text-6xl">🕉️</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Traditional Values</h3>
                <p className="text-muted-foreground">Preserving ancient wisdom for future generations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      {/* <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-primary mb-12 font-sanskrit">
          Our Core Values
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="text-center p-6">
            <CardContent className="pt-6">
              <Heart className="w-12 h-12 text-secondary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Devotion</h3>
              <p className="text-muted-foreground">
                Cultivating pure devotion and love for the divine
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-center p-6">
            <CardContent className="pt-6">
              <div className="text-4xl mb-4">📿</div>
              <h3 className="text-xl font-semibold mb-2">Tradition</h3>
              <p className="text-muted-foreground">
                Maintaining authentic spiritual practices and customs
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-center p-6">
            <CardContent className="pt-6">
              <div className="text-4xl mb-4">🌺</div>
              <h3 className="text-xl font-semibold mb-2">Service</h3>
              <p className="text-muted-foreground">
                Selfless service to society and spiritual community
              </p>
            </CardContent>
          </Card>
        </div>
      </section> */}
    </div>
  );
};

export default About;