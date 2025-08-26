'use client'

import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { Star } from 'lucide-react';

export default function Products() {
  const { t, language } = useLanguage();

  // Updated product catalog (static to avoid hydration issues)
  const products = [
    {
      id: 'full-kit',
      nameHi: 'संपूर्ण भक्ति किट (Best Value Combo)',
      nameEn: 'Complete Bhakti Kit (Best Value Combo)',
      mrp: '₹1100',
      price: '₹699/-',
      itemsHi: [
        '� भक्ति वृत्तिका — “संपूर्ण शिव पूजन: वैदिक व शास्त्रसम्मत सरल विधि” — अलौकिक और अनोखी रचना, क्रम स्पष्ट, मंत्र शुद्ध और उच्चारण संकेत के साथ।',
        '📿 रुद्राक्ष जाप माला (पाँच मुखी, असली नेपाल की) — प्रमाणित लैब-टेस्ट सर्टिफिकेट सहित।',
        '👜 जूट बैग — सुंदर, मज़बूत और बहुउपयोगी।'
      ],
      itemsEn: [
        'Bhakti Vrittika — Complete Shiva Pooja guide (Vedic & scripture-aligned)',
        'Rudraksha mala (5-face) — genuine Nepal beads with lab certificate',
        'Jute bag — durable and multi-purpose'
      ],
      image: '/book-cover.webp'
    },
    {
      id: 'light-kit',
      nameHi: 'सहज भक्ति किट (Light Combo)',
      nameEn: 'Simple Bhakti Kit (Light Combo)',
      mrp: '₹600',
      price: '₹399/-',
      itemsHi: [
        '📖 भक्ति वृत्तिका — शिव पूजन की सरल विधि।',
        '👜 जूट बैग — मज़बूत और बहुउपयोगी।'
      ],
      itemsEn: [
        'Bhakti Vrittika — simple Shiva pooja method',
        'Jute bag — sturdy and multi-use'
      ],
      image: '/placeholder.svg'
    },
    {
      id: 'rudraksha-mala',
      nameHi: 'भक्ति जाप माला (Premium Rudraksha)',
      nameEn: 'Bhakti Japa Mala (Premium Rudraksha)',
      mrp: '₹700',
      price: '₹499/-',
      itemsHi: [
        'असली नेपाल की पाँच मुखी रुद्राक्ष जाप माला — प्रमाणित लैब-टेस्ट सर्टिफिकेट सहित।',
        'प्रीमियम पैकेजिंग के साथ।'
      ],
      itemsEn: [
        'Genuine Nepal 5-faced Rudraksha mala with lab certificate',
        'Premium packaging included'
      ],
      image: '/placeholder.svg'
    }
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

      {/* Product Information - multiple product cards */}
      <section className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-8">
            {products.map((p, idx) => {
              const name = language === 'hi' ? p.nameHi : p.nameEn;
              const items = language === 'hi' ? p.itemsHi : p.itemsEn;
              const whatsappText = encodeURIComponent(
                `${language === 'hi' ? 'नमस्ते, मैं' : 'Hi, I want to order'} ${name} for ${p.price}`
              );
              const googleFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSc1uTSH78x7b_kRMwMNqvsgDX0f41nFaUF5KX_e36uN-rMEBA/viewform?usp=dialog';

              // Alternate image side on md+ screens: even idx -> image left, odd idx -> image right
              const reverse = idx % 2 === 1;
              const buttonAlignClass = reverse ? 'md:justify-start justify-center' : 'md:justify-end justify-center';

              return (
                <Card key={p.id} className="hover:shadow-lg transition-shadow">
                  <div className={`flex flex-col md:flex-row ${reverse ? 'md:flex-row-reverse' : ''} items-stretch`}>
                    {/* Image column */}
                    <div className="md:w-1/3 flex items-center justify-center bg-muted p-6">
                      <Image src={p.image} alt={name} width={300} height={300} className="rounded-md object-contain max-h-72 max-w-full" />
                    </div>

                    {/* Content column */}
                    <div className="md:w-2/3 p-6 flex flex-col">
                      <div>
                        <h3 className={`text-2xl font-bold mb-2 ${language === 'hi' ? 'font-sanskrit' : 'font-english'}`}>{name}</h3>
                        <p className={`text-sm text-muted-foreground mb-4 ${language === 'hi' ? 'font-sanskrit' : 'font-english'}`}>
                          <span className="line-through mr-2">{language === 'hi' ? `MRP ${p.mrp}` : `MRP ${p.mrp}`}</span>
                          <span className="text-2xl font-extrabold text-secondary">{p.price}</span>
                          <span className="text-sm text-muted-foreground ml-3">{language === 'hi' ? 'Special Launching Offer' : 'Special Launching Offer'}</span>
                        </p>

                        <h4 className={`text-lg font-semibold mb-2 ${language === 'hi' ? 'font-sanskrit' : 'font-english'}`}>{language === 'hi' ? 'शामिल वस्तुएँ:' : 'Includes:'}</h4>
                        <ul className="list-disc list-inside mb-6 space-y-2 text-sm text-secondary">
                          {items.map((it, i) => (
                            <li key={i} className={`${language === 'hi' ? 'font-sanskrit' : 'font-english'}`}>{it}</li>
                          ))}
                        </ul>
                      </div>

                      {/* Actions aligned bottom-right */}
                      <div className={`mt-auto flex gap-3 ${buttonAlignClass}`}>
                        <a href={googleFormUrl} target="_blank" rel="noreferrer" className="bg-orange-600 text-white px-5 py-3 rounded-lg font-semibold shadow-md hover:opacity-95">
                          {language === 'hi' ? 'ORDER NOW' : 'ORDER NOW'}
                        </a>
                        <a href={`https://wa.me/919205282333?text=${whatsappText}`} target="_blank" rel="noreferrer" className="bg-green-600 text-white px-5 py-3 rounded-lg font-semibold shadow-md hover:opacity-95">
                          {language === 'hi' ? 'CHAT NOW FOR ORDER' : 'CHAT NOW FOR ORDER'}
                        </a>
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
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
                href="https://wa.me/919205282333?text=Hi,%20I%20want%20to%20order%20Bhakti%20Vrittika%20for%20₹411"
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