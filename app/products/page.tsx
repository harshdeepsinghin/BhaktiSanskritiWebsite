'use client'

import React from 'react';
import Image from 'next/image';
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
    t('products.feature4')
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
              <div className="mb-6 flex justify-center">
                <Image
                  src="/book-cover.webp"
                  alt="Bhakti Vrittika Book Cover"
                  width={150}
                  height={200}
                  className="rounded-lg shadow-lg object-cover"
                  priority
                />
              </div>
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
                {/* Order Methods Section */}
                <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white p-8 rounded-xl">
                  <div className="text-center">
                    <h3 className={`text-2xl font-bold mb-4 ${language === 'hi' ? 'font-sanskrit' : 'font-english'}`}>
                      🛒 {language === 'hi' ? 'ऑर्डर करने के तरीके' : 'Order Methods'}
                    </h3>
                    <p className={`mb-8 opacity-90 text-lg ${language === 'hi' ? 'font-sanskrit' : 'font-english'}`}>
                      {language === 'hi'
                        ? 'केवल ₹411/- में प्राप्त करें यह अनमोल मार्गदर्शिका'
                        : 'Get this precious guide for only ₹411/-'
                      }
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                      {/* Google Form Order */}
                      <a
                        href="https://docs.google.com/forms/d/e/1FAIpQLSc1uTSH78x7b_kRMwMNqvsgDX0f41nFaUF5KX_e36uN-rMEBA/viewform?usp=dialog"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-orange-600 px-6 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 shadow-lg flex items-center justify-center"
                      >
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clipRule="evenodd" />
                        </svg>
                        {language === 'hi' ? 'ORDER NOW' : 'ORDER NOW'}
                      </a>

                      {/* WhatsApp Chat */}
                      <a
                        href="https://wa.me/919650863999?text=Hi,%20I%20want%20to%20order%20Bhakti%20Vrittika%20for%20₹411"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-green-500 text-white px-6 py-4 rounded-lg font-bold text-lg hover:bg-green-600 transition-all duration-200 transform hover:scale-105 shadow-lg flex items-center justify-center"
                      >
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.109" />
                        </svg>
                        {language === 'hi' ? 'CHAT NOW FOR ORDER' : 'CHAT NOW FOR ORDER'}
                      </a>
                    </div>
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
            <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSc1uTSH78x7b_kRMwMNqvsgDX0f41nFaUF5KX_e36uN-rMEBA/viewform?usp=dialog"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity inline-flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clipRule="evenodd" />
                </svg>
                {language === 'hi' ? 'ORDER NOW' : 'ORDER NOW'}
              </a>
              <a
                href="https://wa.me/919650863999?text=Hi,%20I%20want%20to%20order%20Bhakti%20Vrittika%20for%20₹411"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-600 transition-opacity inline-flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.109" />
                </svg>
                {language === 'hi' ? 'CHAT NOW FOR ORDER' : 'CHAT NOW FOR ORDER'}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}