'use client'

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { Star } from 'lucide-react';

export default function Products() {
  const { t, language } = useLanguage();

  // Static product info to avoid hydration issues
  const productInfo = {
    price: '₹411/-',
    image: '🕉️',
    rating: 5.0
  };

  const features = [
    t('products.feature1'),
    t('products.feature2'),
    t('products.feature3'),
    t('products.feature4'),
    t('products.feature5')
  ];

  return (
    <div className="space-y-16 py-8">
      {/* Header */}
      <section className="container mx-auto px-4 text-center">
        <h1 className={`text-4xl md:text-5xl font-bold text-primary mb-6 ${language === 'hi' ? 'font-sanskrit' : 'font-english'}`}>
          {t('products.title')}
        </h1>
        <p className={`text-xl text-muted-foreground max-w-2xl mx-auto mb-4 ${language === 'hi' ? 'font-sanskrit' : 'font-english'}`}>
          {t('products.subtitle')}
        </p>
        <p className={`text-muted-foreground ${language === 'hi' ? 'font-sanskrit' : 'font-english'}`}>
          {t('products.description')}
        </p>
      </section>

      {/* Product Information */}
      <section className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="text-center pb-6">
              <div className="text-8xl mb-6">{productInfo.image}</div>
              <CardTitle className={`text-2xl md:text-3xl mb-4 ${language === 'hi' ? 'font-sanskrit' : 'font-english'}`}>
                {t('products.productName')}
              </CardTitle>
              <p className={`text-lg text-muted-foreground mb-4 leading-relaxed ${language === 'hi' ? 'font-sanskrit' : 'font-english'}`}>
                {t('products.fullName')}
              </p>
              <div className="flex items-center justify-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
                <span className="text-sm text-muted-foreground ml-2">({productInfo.rating})</span>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="space-y-8">
                <div>
                  <h3 className={`text-xl font-semibold mb-6 text-secondary ${language === 'hi' ? 'font-sanskrit' : 'font-english'}`}>
                    {t('products.features')}
                  </h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {features.map((feature, idx) => (
                      <li key={idx} className={`text-secondary flex items-start p-3 bg-muted-foreground rounded-lg ${language === 'hi' ? 'font-sanskrit' : 'font-english'}`}>
                        <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="text-center mb-6">
                  <p className={`text-lg mb-2 ${language === 'hi' ? 'font-sanskrit' : 'font-english'}`}>
                    {t('products.serviceAmount')}
                  </p>
                  <div className="text-4xl font-bold text-secondary">{productInfo.price}</div>
                </div>
                {/* Contact to Order Section */}
                <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white p-6 rounded-xl">
                  <div className="text-center">
                    <h3 className={`text-2xl font-bold mb-4 ${language === 'hi' ? 'font-sanskrit' : 'font-english'}`}>
                      📞 {t('products.contactOrder')}
                    </h3>
                    <p className={`mb-6 opacity-90 ${language === 'hi' ? 'font-sanskrit' : 'font-english'}`}>
                      {t('products.orderText')}
                    </p>
                    <a
                      href="mailto:contact@bhaktisanskriti.org"
                      className="inline-flex items-center bg-white text-orange-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 shadow-lg"
                    >
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                      {t('products.orderNow')}
                    </a>
                    <p className="mt-4 text-sm opacity-80">
                      contact@bhaktisanskriti.org
                    </p>
                  </div>
                </div>
              </div>

            </CardContent>
          </Card>
        </div>
      </section>

      {/* About the Product */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className={`text-3xl font-bold mb-8 text-primary ${language === 'hi' ? 'font-sanskrit' : 'font-english'}`}>
              {language === 'hi' ? 'भक्ति वृत्तिका के बारे में' : 'About Bhakti Vrittika'}
            </h2>
            <div className={`text-lg leading-relaxed space-y-6 text-muted-foreground ${language === 'hi' ? 'font-sanskrit' : 'font-english'}`}>
              <p>
                {language === 'hi'
                  ? 'भक्ति वृत्तिका एक संपूर्ण शिव पूजा मार्गदर्शिका है जो वैदिक और शास्त्र सम्मत विधियों पर आधारित है। यह सरल भाषा में लिखी गई है ताकि हर भक्त आसानी से भगवान शिव की पूजा कर सके।'
                  : 'Bhakti Vrittika is a complete Shiva worship guide based on Vedic and scripture-approved methods. It is written in simple language so that every devotee can easily worship Lord Shiva.'
                }
              </p>
              <p>
                {language === 'hi'
                  ? 'इसमें मंत्रयुक्त पूजा विधि, पारंपरिक पूजा पद्धति, और सभी आवश्यक निर्देश शामिल हैं। यह देवभूमि भारत संस्थान द्वारा तैयार किया गया है।'
                  : 'It includes mantra-based worship methods, traditional worship systems, and all necessary instructions. This has been prepared by Devbhoomi Bharat Sansthan.'
                }
              </p>
            </div>
            <div className="mt-12">
              <a
                href="mailto:contact@bhaktisanskriti.org"
                className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity inline-block"
              >
                {language === 'hi' ? 'अभी आदेश दें' : 'Order Now'}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}