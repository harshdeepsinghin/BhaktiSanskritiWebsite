'use client'

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { Calendar, Users, BookOpen, Music, Flower, Star } from 'lucide-react';

export default function Services() {
  const { t } = useLanguage();

  const services = [
    {
      icon: <Calendar className="w-8 h-8 text-primary" />,
      title: 'Festival Celebrations',
      description: 'Traditional Hindu festivals celebrated with authentic rituals and community participation',
      features: ['Diwali Celebrations', 'Holi Festivities', 'Navratri Programs', 'Janmashtami Events']
    },
    {
      icon: <Users className="w-8 h-8 text-secondary" />,
      title: 'Cultural Programs',
      description: 'Educational and cultural events to promote Hindu traditions and values',
      features: ['Cultural Workshops', 'Traditional Dance', 'Spiritual Discourses', 'Community Gatherings']
    },
    {
      icon: <BookOpen className="w-8 h-8 text-accent" />,
      title: 'Spiritual Education',
      description: 'Learning programs for all ages to understand Hindu philosophy and practices',
      features: ['Vedic Studies', 'Sanskrit Classes', 'Bhagavad Gita Study', 'Meditation Training']
    },
    {
      icon: <Music className="w-8 h-8 text-primary" />,
      title: 'Devotional Music',
      description: 'Traditional bhajans, kirtans, and devotional singing programs',
      features: ['Bhajan Sessions', 'Kirtan Programs', 'Classical Music', 'Devotional Concerts']
    },
    {
      icon: <Flower className="w-8 h-8 text-secondary" />,
      title: 'Puja Services',
      description: 'Professional puja and ritual services for various occasions',
      features: ['Home Pujas', 'Temple Services', 'Special Ceremonies', 'Yajnas & Homas']
    },
    {
      icon: <Star className="w-8 h-8 text-accent" />,
      title: 'Youth Programs',
      description: 'Special programs designed for youth to connect with their cultural roots',
      features: ['Youth Camps', 'Leadership Training', 'Cultural Competitions', 'Skill Development']
    }
  ];

  return (
    <div className="space-y-16 py-8">
      {/* Header */}
      <section className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 font-sanskrit">
          {t('services.title')}
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          {t('services.subtitle')}
        </p>
      </section>

      {/* Services Grid */}
      {/* <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="h-full hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  {service.icon}
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section> */}

      {/* Call to Action */}
      <section className="bg-gradient-spiritual text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Community</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Become part of our spiritual family and participate in our various programs and services
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+917017075603" 
              className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Call Us Now
            </a>
            <a 
              href="https://wa.me/917017075603" 
              target="_blank" rel="noopener noreferrer"
              className="bg-secondary text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}