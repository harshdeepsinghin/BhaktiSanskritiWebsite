import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { ShoppingCart, Star, Package, Heart } from 'lucide-react';

const Shivpoojan = () => {
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

  const accessories = [
    { name: 'Rudraksha Mala', price: '₹299', image: '📿' },
    { name: 'Brass Diya Set', price: '₹199', image: '🪔' },
    { name: 'Incense Variety Pack', price: '₹149', image: '🔥' },
    { name: 'Sacred Water Kalash', price: '₹399', image: '🏺' },
    { name: 'Meditation Cushion', price: '₹599', image: '🪑' },
    { name: 'Puja Bell Set', price: '₹249', image: '🔔' }
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
                {/* <Button className="w-full" variant="default">
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Add to Cart
                </Button> */}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Individual Accessories */}
      {/* <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-primary mb-12 font-sanskrit">
            Individual Puja Items
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {accessories.map((item, index) => (
              <Card key={index} className="text-center hover:shadow-md transition-shadow">
                <CardContent className="pt-6 pb-4">
                  <div className="text-3xl mb-3">{item.image}</div>
                  <h3 className="font-semibold text-sm mb-2">{item.name}</h3>
                  <div className="text-lg font-bold text-secondary mb-3">{item.price}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* About Shiva Worship */}
      {/* <section className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6 font-sanskrit">
                The Sacred Art of Shiva Worship
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Lord Shiva worship is one of the most ancient and sacred traditions in Hinduism. 
                Our carefully curated puja kits contain everything needed for authentic worship, 
                following traditional Vedic guidelines.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Heart className="w-5 h-5 text-secondary mt-1" />
                  <div>
                    <h4 className="font-semibold">Authentic Materials</h4>
                    <p className="text-sm text-muted-foreground">All items sourced according to Vedic standards</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Package className="w-5 h-5 text-secondary mt-1" />
                  <div>
                    <h4 className="font-semibold">Complete Guide</h4>
                    <p className="text-sm text-muted-foreground">Step-by-step worship instructions included</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-gradient-spiritual rounded-lg p-8 text-white">
                <div className="text-8xl mb-4">🔱</div>
                <h3 className="text-xl font-semibold mb-2">Om Namah Shivaya</h3>
                <p className="opacity-90">Sacred mantra for Lord Shiva</p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

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
};

export default Shivpoojan;