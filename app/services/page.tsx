'use client'

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Services() {
  const { language } = useLanguage();

  const servicesContent = {
    hi: (
      <>
        {/* Header */}
        <section className="container mx-auto px-4 text-center py-8">
          <h1 className="text-4xl md:text-5xl font-bold text-primary font-sanskrit">
            हमारी सेवाएं
          </h1>
        </section>

        {/* Bhakti Vrittika Origin */}
        <section className="bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 style={{ marginTop: '2rem', marginBottom: '1rem', fontSize: '1.5rem', fontWeight: 'bold', color: '#d97706', textAlign: 'center' }}>
                🪔 भक्ति वृत्तिका — उत्पत्ति और प्रेरणा
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground mx-auto" style={{ fontFamily: 'Noto Sans Devanagari, serif', lineHeight: 2, fontSize: '1.15rem' }}>
                <p><b>श्रावण मास की वो दिव्य घड़ी...</b></p>
                <p>जब किसी मन में जगी एक जिज्ञासा —<br />"क्या मेरी पूजा पूरी हुई...? क्या मेरी भक्ति स्वीकार हुई...?"</p>
                <p>ईश्वर ने भक्त की जिज्ञासा को पहचान लिया...<br />इस सावन महादेव प्रेरणा ने जन्म दिया एक शोध को —<br />और उस शोध ने आकार लिया <b>भक्ति वृत्तिका</b> के रूप में।</p>
                <br></br>
              </div>
            </div>
          </div>
        </section>

        {/* Bhakti Vrittika Kit */}
        <section>
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 style={{ marginTop: '2rem', marginBottom: '1rem', fontSize: '1.5rem', fontWeight: 'bold', color: '#d97706', textAlign: 'center' }}>
                📦 भक्ति वृत्तिका किट — क्या है?
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground mx-auto mb-12" style={{ fontFamily: 'Noto Sans Devanagari, serif', lineHeight: 2, fontSize: '1.15rem' }}>
                <p><b>भक्ति वृत्तिका</b> एक अनुपम, शोध आधारित और आध्यात्मिक पूजन-पद्धति है।</p>
                <p>यह किट उन भक्तों के लिए है जो केवल कर्मकांड नहीं, एक दिव्य अनुभव की तलाश में हैं।</p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
                <Card className="text-center p-3 md:p-6">
                  <CardContent className="pt-3 md:pt-6">
                    <div className="text-3xl md:text-4xl mb-2 md:mb-4">🛕</div>
                    <h3 className="text-base md:text-lg font-semibold mb-1 md:mb-2 font-sanskrit">विशेष पूजन सामग्री</h3>
                    <p className="text-muted-foreground text-sm md:text-sm">शास्त्रसंगत और पवित्र सामग्री</p>
                  </CardContent>
                </Card>

                <Card className="text-center p-3 md:p-6">
                  <CardContent className="pt-3 md:pt-6">
                    <div className="text-3xl md:text-4xl mb-2 md:mb-4">📿</div>
                    <h3 className="text-base md:text-lg font-semibold mb-1 md:mb-2 font-sanskrit">मंत्र और साधना निर्देश</h3>
                    <p className="text-muted-foreground text-sm md:text-sm">सिद्ध मंत्रों के साथ विधि निर्देश</p>
                  </CardContent>
                </Card>

                <Card className="text-center p-3 md:p-6">
                  <CardContent className="pt-3 md:pt-6">
                    <div className="text-3xl md:text-4xl mb-2 md:mb-4">🧘‍♂️</div>
                    <h3 className="text-base md:text-lg font-semibold mb-1 md:mb-2 font-sanskrit">अनुभवशील ध्यान विधियाँ</h3>
                    <p className="text-muted-foreground text-sm md:text-sm">गहन आध्यात्मिक अनुभव के लिए</p>
                  </CardContent>
                </Card>

                <Card className="text-center p-3 md:p-6">
                  <CardContent className="pt-3 md:pt-6">
                    <div className="text-3xl md:text-4xl mb-2 md:mb-4">📚</div>
                    <h3 className="text-base md:text-lg font-semibold mb-1 md:mb-2 font-sanskrit">शोध से प्रमाणित परंपरा</h3>
                    <p className="text-muted-foreground text-sm md:text-sm">प्राचीन परंपरा की पुनर्स्थापना</p>
                  </CardContent>
                </Card>
              </div>
              <br /><br /><br />
            </div>
          </div>
        </section>
      </>
    ),
    en: (
      <>
        {/* Header */}
        <section className="container mx-auto px-4 text-center py-8">
          <h1 className="text-4xl md:text-5xl font-bold text-primary font-sanskrit">
            Our Services
          </h1>
        </section>

        {/* Bhakti Vrittika Origin */}
        <section className="bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 style={{ marginTop: '2rem', marginBottom: '1rem', fontSize: '1.5rem', fontWeight: 'bold', color: '#d97706', textAlign: 'center' }}>
                🪔 Bhakti Vrittika — Origin and Inspiration
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground mx-auto">
                <p><b>That divine moment of Shravan month...</b></p>
                <p>When a curiosity arose in someone's mind —<br />"Was my worship complete...? Was my devotion accepted...?"</p>
                <p>God recognized the devotee's curiosity...<br />This Sawan, Mahadev's inspiration gave birth to a research —<br />and that research took shape as <b>Bhakti Vrittika</b>.</p>
                <br></br>
              </div>
            </div>
          </div>
        </section>

        {/* Bhakti Vrittika Kit */}
        <section>
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 style={{ marginTop: '2rem', marginBottom: '1rem', fontSize: '1.5rem', fontWeight: 'bold', color: '#d97706', textAlign: 'center' }}>
                📦 Bhakti Vrittika Kit — What is it?
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground mx-auto mb-12">
                <p><b>Bhakti Vrittika</b> is a unique, research-based and spiritual worship methodology.</p>
                <p>This kit is for those devotees who seek not just rituals, but a divine experience.</p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
                <Card className="text-center p-3 md:p-6">
                  <CardContent className="pt-3 md:pt-6">
                    <div className="text-3xl md:text-4xl mb-2 md:mb-4">🛕</div>
                    <h3 className="text-base md:text-lg font-semibold mb-1 md:mb-2">Special Worship Materials</h3>
                    <p className="text-muted-foreground text-sm md:text-sm">Scriptural and sacred materials</p>
                  </CardContent>
                </Card>

                <Card className="text-center p-3 md:p-6">
                  <CardContent className="pt-3 md:pt-6">
                    <div className="text-3xl md:text-4xl mb-2 md:mb-4">📿</div>
                    <h3 className="text-base md:text-lg font-semibold mb-1 md:mb-2">Mantras and Practice Instructions</h3>
                    <p className="text-muted-foreground text-sm md:text-sm">Proven mantras with method instructions</p>
                  </CardContent>
                </Card>

                <Card className="text-center p-3 md:p-6">
                  <CardContent className="pt-3 md:pt-6">
                    <div className="text-3xl md:text-4xl mb-2 md:mb-4">🧘‍♂️</div>
                    <h3 className="text-base md:text-lg font-semibold mb-1 md:mb-2">Experiential Meditation Methods</h3>
                    <p className="text-muted-foreground text-sm md:text-sm">For deep spiritual experiences</p>
                  </CardContent>
                </Card>

                <Card className="text-center p-3 md:p-6">
                  <CardContent className="pt-3 md:pt-6">
                    <div className="text-3xl md:text-4xl mb-2 md:mb-4">📚</div>
                    <h3 className="text-base md:text-lg font-semibold mb-1 md:mb-2">Research-Proven Tradition</h3>
                    <p className="text-muted-foreground text-sm md:text-sm">Revival of ancient traditions</p>
                  </CardContent>
                </Card>
              </div>
              <br /><br /><br />
            </div>
          </div>
        </section>
      </>
    )
  };

  return (
    <div className="space-y-0">
      {servicesContent[language]}

      {/* Call to Action */}
      <section className="bg-gradient-spiritual text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 font-sanskrit">
            {language === 'hi' ? 'हमारे समुदाय से जुड़ें' : 'Join Our Community'}
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto" style={{ fontFamily: language === 'hi' ? 'Noto Sans Devanagari, serif' : 'inherit' }}>
            {language === 'hi' 
              ? 'हमारे आध्यात्मिक परिवार का हिस्सा बनें और हमारे विभिन्न कार्यक्रमों और सेवाओं में भाग लें'
              : 'Become part of our spiritual family and participate in our various programs and services'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+917017075603"
              className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              {language === 'hi' ? 'अभी कॉल करें' : 'Call Us Now'}
            </a>
            <a
              href="https://wa.me/917017075603"
              target="_blank" rel="noopener noreferrer"
              className="bg-secondary text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              {language === 'hi' ? 'व्हाट्सऐप करें' : 'WhatsApp Us'}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}