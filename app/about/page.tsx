'use client'

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function About() {
  const { language } = useLanguage();

  const aboutContent = {
    hi: (
      <>
        <section className="container mx-auto px-4 text-center py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 font-sanskrit">
            हमारे बारे में (परिचय)
          </h1>
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-muted-foreground mx-auto" style={{ fontFamily: 'Noto Sans Devanagari, serif', lineHeight: 2, fontSize: '1.15rem' }}>
              {/* Your Hindi content will go here */}
              <h3 style={{ marginTop: '2rem', marginBottom: '1rem', fontSize: '1.5rem', fontWeight: 'bold', color: '#d97706', textAlign: 'left' }}>देवभूमि भारत संस्थान</h3>
              <div style={{ textAlign: 'left' }}>
                एक ऐसा आध्यात्मिक एवं सांस्कृतिक मंच जिसकी नींव स्वयं पावन श्रावण मास में महादेव की प्रेरणा से रखी गई।
                <br /><br />
                यह संस्थान एक अनूठे समर्पण और शोध की साधना का परिणाम है —
                <br />
                जहाँ आध्यात्मिक आत्मबल, ईश्वरीय कृपा, और संस्कृति की धरोहरों का संरक्षण, संवर्धन और समाजीकरण किया जाता है।
              </div>
              <h3 style={{ marginTop: '2rem', marginBottom: '1rem', fontSize: '1.5rem', fontWeight: 'bold', color: '#d97706', textAlign: 'left' }}>हमारा उद्देश्य है:</h3>
              <ul style={{ textAlign: 'left', marginTop: '1rem', listStyle: 'none', paddingLeft: 0 }}>
                <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start' }}>
                  <span style={{ color: '#d97706', marginRight: '0.5rem', fontSize: '1.2rem' }}>•</span>
                  वैदिक और पौराणिक ग्रंथों में निहित गूढ़ ज्ञान को सरल विधियों द्वारा आमजन तक पहुँचाना।
                </li>
                <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start' }}>
                  <span style={{ color: '#d97706', marginRight: '0.5rem', fontSize: '1.2rem' }}>•</span>
                  मंत्र, ध्यान, पूजन-पद्धतियों और संस्कृति को शोध आधारित स्वरूप में प्रस्तुत करना।
                </li>
                <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start' }}>
                  <span style={{ color: '#d97706', marginRight: '0.5rem', fontSize: '1.2rem' }}>•</span>
                  सनातन परंपराओं को आधुनिक संवेदना के साथ जोड़ना।
                </li>
              </ul>
              <br />
              <div style={{ textAlign: 'center', fontStyle: 'italic', fontSize: '1.2rem', padding: '1.5rem', borderLeft: '4px solid #d97706', margin: '2rem 0' }}>
                देवभूमि भारत संस्थान केवल एक संगठन नहीं,
                <br />
                बल्कि यह एक जीवंत साधना है,
                <br />
                जो आस्था को ज्ञान से जोड़ती है,
                <br />
                और भक्ति को अनुभूति बनाती है।
                <br /><br />
                <em>यही प्रयास है — श्रद्धा, शोध और संस्कृति का त्रिवेणी संगम।</em>
              </div>
            </div>
          </div>
        </section>
      </>
    ),
    en: (
      <>
        <section className="container mx-auto px-4 text-center py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 font-sanskrit">
            About Us
          </h1>
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-muted-foreground mx-auto" style={{ lineHeight: 2, fontSize: '1.15rem' }}>
              {/* Your English content will go here */}
              <h3 style={{ marginTop: '2rem', marginBottom: '1rem', fontSize: '1.5rem', fontWeight: 'bold', color: '#d97706', textAlign: 'left' }}>Devbhoomi Bharat Institute</h3>
              <div style={{ textAlign: 'left' }}>
                A spiritual and cultural platform whose foundation was laid in the sacred month of Shravan with the inspiration of Lord Mahadev himself.
                <br /><br />
                This institute is the result of a unique dedication and research practice —
                <br />
                where spiritual strength, divine grace, and the preservation, promotion and socialization of cultural heritage is carried out.
              </div>
              <h3 style={{ marginTop: '2rem', marginBottom: '1rem', fontSize: '1.5rem', fontWeight: 'bold', color: '#d97706', textAlign: 'left' }}>Our Purpose is:</h3>
              <ul style={{ textAlign: 'left', marginTop: '1rem', listStyle: 'none', paddingLeft: 0 }}>
                <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start' }}>
                  <span style={{ color: '#d97706', marginRight: '0.5rem', fontSize: '1.2rem' }}>•</span>
                  To bring the profound knowledge contained in Vedic and Puranic texts to the common people through simple methods.
                </li>
                <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start' }}>
                  <span style={{ color: '#d97706', marginRight: '0.5rem', fontSize: '1.2rem' }}>•</span>
                  To present mantras, meditation, worship methods and culture in a research-based form.
                </li>
                <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start' }}>
                  <span style={{ color: '#d97706', marginRight: '0.5rem', fontSize: '1.2rem' }}>•</span>
                  To connect Sanatan traditions with modern sensibilities.
                </li>
              </ul>
              <br />
              <div style={{ textAlign: 'center', fontStyle: 'italic', fontSize: '1.2rem', padding: '1.5rem', borderLeft: '4px solid #d97706', margin: '2rem 0' }}>
                "Devbhoomi Bharat Institute is not just an organization,
                <br />
                but it is a living practice,
                <br />
                that connects faith with knowledge,
                <br />
                and transforms devotion into experience."
                <br /><br />
                <em>This is the endeavor — the confluence of faith, research and culture.</em>
              </div>
            </div>
          </div>
        </section>
      </>
    )
  };

  return (
    <div className="space-y-0">
      {aboutContent[language]}

      {/* Product Redirect */}
      <section className="bg-gradient-spiritual text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 font-sanskrit">
            {language === 'hi' ? 'भक्ति वृत्तिका प्राप्त करें' : 'Get Bhakti Vrittika'}
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto" style={{ fontFamily: language === 'hi' ? 'Noto Sans Devanagari, serif' : 'inherit' }}>
            {language === 'hi' 
              ? 'अपनी आध्यात्मिक यात्रा शुरू करें हमारी संपूर्ण शिव पूजा मार्गदर्शिका के साथ'
              : 'Begin your spiritual journey with our complete Shiva worship guide'
            }
          </p>
          <div className="flex justify-center">
            <a
              href="/products"
              className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
            >
              {language === 'hi' ? 'उत्पाद देखें' : 'View Products'}
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}