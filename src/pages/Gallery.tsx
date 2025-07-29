import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Play, Image as ImageIcon } from 'lucide-react';

const Gallery = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'photos' | 'videos'>('photos');

  const photos = [
    {
      id: 1,
      title: 'Diwali Celebration 2024',
      image: 'https://images.unsplash.com/photo-1604519316306-c0e5e8d99bf5?w=400',
      description: 'Community Diwali celebration with traditional lighting ceremony'
    },
    {
      id: 2,
      title: 'Bhajan Session',
      image: 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400',
      description: 'Weekly devotional singing gathering'
    },
    {
      id: 3,
      title: 'Cultural Workshop',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400',
      description: 'Traditional arts and crafts learning session'
    },
    {
      id: 4,
      title: 'Meditation Retreat',
      image: 'https://images.unsplash.com/photo-1545389336-cf090694435e?w=400',
      description: 'Peaceful meditation and yoga session'
    },
    {
      id: 5,
      title: 'Youth Program',
      image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400',
      description: 'Cultural education program for young participants'
    },
    {
      id: 6,
      title: 'Festival Preparation',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400',
      description: 'Community coming together for festival preparations'
    }
  ];

  const videos = [
    {
      id: 1,
      title: 'Maha Shivaratri Celebration',
      thumbnail: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
      youtubeId: 'dQw4w9WgXcQ',
      description: 'Special Maha Shivaratri puja and celebration'
    },
    {
      id: 2,
      title: 'Bhagavad Gita Discourse',
      thumbnail: 'https://images.unsplash.com/photo-1544568100-847a948585b9?w=400',
      youtubeId: 'dQw4w9WgXcQ',
      description: 'Weekly spiritual discourse on Bhagavad Gita'
    },
    {
      id: 3,
      title: 'Cultural Dance Performance',
      thumbnail: 'https://images.unsplash.com/photo-1594736797933-d0d8e1699bc9?w=400',
      youtubeId: 'dQw4w9WgXcQ',
      description: 'Traditional Indian classical dance performance'
    },
    {
      id: 4,
      title: 'Community Kirtan',
      thumbnail: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400',
      youtubeId: 'dQw4w9WgXcQ',
      description: 'Group devotional singing session'
    }
  ];

  return (
    <div className="space-y-16 py-8">
      {/* Header */}
      <section className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 font-sanskrit">
          {t('gallery.title')}
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          {t('gallery.subtitle')}
        </p>
      </section>

      {/* Tab Navigation */}
      <section className="container mx-auto px-4">
        <div className="flex justify-center mb-8">
          <div className="bg-muted rounded-lg p-1 flex">
            <Button
              variant={activeTab === 'photos' ? 'default' : 'ghost'}
              onClick={() => setActiveTab('photos')}
              className="flex items-center space-x-2"
            >
              <ImageIcon className="w-4 h-4" />
              <span>{t('gallery.photos')}</span>
            </Button>
            <Button
              variant={activeTab === 'videos' ? 'default' : 'ghost'}
              onClick={() => setActiveTab('videos')}
              className="flex items-center space-x-2"
            >
              <Play className="w-4 h-4" />
              <span>{t('gallery.videos')}</span>
            </Button>
          </div>
        </div>

        {/* Photo Gallery */}
        {activeTab === 'photos' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {photos.map((photo) => (
              <Card key={photo.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={photo.image}
                    alt={photo.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-lg mb-2">{photo.title}</h3>
                  <p className="text-muted-foreground text-sm">{photo.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Video Gallery */}
        {activeTab === 'videos' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {videos.map((video) => (
              <Card key={video.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video relative overflow-hidden group cursor-pointer">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center group-hover:bg-opacity-50 transition-all">
                    <div className="w-16 h-16 bg-white bg-opacity-80 rounded-full flex items-center justify-center">
                      <Play className="w-8 h-8 text-primary ml-1" />
                    </div>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-lg mb-2">{video.title}</h3>
                  <p className="text-muted-foreground text-sm mb-3">{video.description}</p>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => window.open(`https://youtube.com/watch?v=${video.youtubeId}`, '_blank')}
                  >
                    <Play className="w-4 h-4 mr-2" />
                    Watch Video
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </section>

      {/* Featured Content */}
      <section className="bg-gradient-spiritual text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Share Your Moments</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Have beautiful moments from our events? Share them with our community
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:photos@bhaktisanskriti.org" 
              className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Email Photos
            </a>
            <a 
              href="https://wa.me/91xxxxxxxxxx" 
              className="bg-secondary text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              WhatsApp Share
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;