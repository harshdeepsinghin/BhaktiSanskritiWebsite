import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { Heart, Users, Calendar } from 'lucide-react';

const Home = () => {
  const { t } = useLanguage();

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="bg-gradient-spiritual text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-sanskrit">
            {t('home.title')}
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            {t('home.subtitle')}
          </p>
          <p className="text-lg mb-8 opacity-80 max-w-2xl mx-auto">
            {t('home.description')}
          </p>
          <Link to="/services">
            <Button size="lg" variant="secondary" className="font-semibold">
              {t('home.explore')}
            </Button>
          </Link>
        </div>
      </section>

      {/* Services Preview */}
      <section className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4 font-sanskrit">
            {t('services.title')}
          </h2>
          <p className="text-muted-foreground text-lg">
            {t('services.subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
      </section>

      {/* Featured Content */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6 font-sanskrit">
                {t('shivpoojan.title')}
              </h2>
              <p className="text-muted-foreground mb-6 text-lg">
                {t('shivpoojan.description')}
              </p>
              <Link to="/shivpoojan">
                <Button variant="default" size="lg">
                  Learn More
                </Button>
              </Link>
            </div>
            <div className="bg-card rounded-lg p-8 text-center">
              <div className="text-6xl mb-4">🕉️</div>
              <h3 className="text-xl font-semibold mb-2">Sacred Worship Kit</h3>
              <p className="text-muted-foreground">Complete set for authentic rituals</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;