'use client'

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { ShoppingCart, Star, Package, Heart } from 'lucide-react';

export default function Shivpoojan() {
  const { t } = useLanguage();

  const kitItems = [
    {
      name: 'Basic Shiva Puja Kit',
      price: '₹499',
      image: '🔱',
      features: ['Shiva Lingam', 'Rudraksha Mala', 'Incense Sticks', 'Diya & Oil', 'Puja Guide'],
      rating: 4.8
    },
    {
      name: 'Premium Worship Set',
      price: '₹999',
      image: '🕉️',
      features: ['Crystal Shiva Lingam', 'Silver Kalash', 'Premium Incense', 'Meditation Mat', 'Sacred Books'],
      rating: 4.9
    },
    {
      name: 'Complete Ritual Kit',
      price: '₹1,499',
      image: '📿',
      features: ['Marble Shiva Lingam', 'Copper Vessels', 'Authentic Herbs', 'Yantra Set', 'Audio Mantras'],
      rating: 5.0
    },
    {
      name: 'Family Puja Package',
      price: '₹2,999',
      image: '🏛️',
      features: ['Large Shiva Murti', 'Complete Vessel Set', 'Family Puja Items', 'Decoration Set', 'Guide Book'],
      rating: 4.7
    }
  ];

  return (
    <div className="space-y-16 py-8">
      {/* Header */}
      <section className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 font-sanskrit">
          {t('shivpoojan.title')}
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-4">
          {t('shivpoojan.subtitle')}
        </p>
        <p className="text-muted-foreground">
          {t('shivpoojan.description')}
        </p>
      </section>

      {/* Featured Kits */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-primary mb-12 font-sanskrit">
          Complete Worship Kits
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {kitItems.map((kit, index) => (
            <Card key={index} className="h-full hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="text-6xl mb-4">{kit.image}</div>
                <CardTitle className="text-lg">{kit.name}</CardTitle>
                <div className="flex items-center justify-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-4 h-4 ${i < Math.floor(kit.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                    />
                  ))}
                  <span className="text-sm text-muted-foreground ml-1">({kit.rating})</span>
                </div>
                <div className="text-2xl font-bold text-secondary">{kit.price}</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {kit.features.map((feature, idx) => (
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
      </section>

      {/* Contact for Orders */}
      <section className="bg-gradient-spiritual text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Order Your Puja Kit Today</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Contact us to place your order or for custom puja kit requirements
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/917017075603" 
              className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              target="_blank" rel="noopener noreferrer"
            >
              WhatsApp Order
            </a>
            <a 
              href="tel:+917017075603" 
              className="bg-secondary text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Call to Order
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}