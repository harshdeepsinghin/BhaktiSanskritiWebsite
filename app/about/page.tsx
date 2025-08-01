'use client'

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { Target, Eye, Heart } from 'lucide-react';

export default function About() {
  const { t, language, setLanguage } = useLanguage();

  const aboutContent = {
    hi: (
      <>
        <section className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 font-sanskrit">परिचय – देवभूमि भारत संस्थान</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">"श्रद्धा, शोध और संस्कृति का अद्भुत समन्वय"</p>
        </section>
        <section className="bg-muted py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none text-muted-foreground mx-auto text-center" style={{ fontFamily: 'Noto Sans Devanagari, serif', lineHeight: 2, fontSize: '1.15rem', wordBreak: 'break-word' }}>
                <p><b>श्रावण मास की वो दिव्य घड़ी…</b></p>
                <p>जब किसी मन में जगी एक जिज्ञासा —<br />"क्या मेरी पूजा पूरी हुई...? क्या मेरी भक्ति स्वीकार हुई...?"</p>
                <p>ईश्वर ने भक्त की जिज्ञासा को पहचान लिया...<br />इस सावन महादेव प्रेरणा ने जन्म दिया एक शोध को —<br />और उस शोध ने आकार लिया <b>"भक्ति वृतिका"</b> <br/> — एक अनुपम, शोध आधारित और आत्मिक पूजन-पद्धति के रूप में।</p>
                <p>देवभूमि भारत संस्थान का जन्म केवल एक संगठन के रूप में नहीं हुआ,<br />बल्कि एक दिव्य अनुभूति और शोधपरक यात्रा के रूप में हुआ है।<br />यह संस्थान भारत की आध्यात्मिक परंपराओं, विधियों,<br />और सांस्कृतिक ज्ञान को अनुभव, प्रयोग, और शुद्ध श्रद्धा के साथ फिर से जाग्रत करने का कार्य करता है।</p>
                <br />
                <p><b>हमारा विश्वास है:</b></p>
                <ul style={{ marginBottom: 16 }}>
                  <li>⁠जिज्ञासा + शोध = सच्चा अध्यात्म</li>
                  <li>श्रद्धा + विधि = सच्ची भक्ति</li>
                </ul>
                <h3 className="mt-8 mb-2">🎯 हमारी पहली प्रकाशित रचना :</h3>
                <p><b>"भक्ति वृतिका" – संपूर्ण शिव पूजन</b><br />⁠सिद्ध मंत्रों, सरल विधियों और वैदिक भावों से सुसज्जित<br />यह केवल एक पूजन किट नहीं —<br />बल्कि वह प्रेरणा है, जो साक्षात महादेव की कृपा से जन्मी।</p>
                <p>यह रचना उन करोड़ों श्रद्धालुओं की चिंता, संशय और अपूर्णता के भावों का उत्तर है —<br />जो अक्सर यह सोचते हैं:<br />"क्या मेरी पूजा सही है...? क्या विधि में कोई त्रुटि रह गई...?"<br />"क्या मेरे भाव प्रभु तक पहुँचते हैं...?"</p>
                <h3 className="mt-8 mb-2">📚 हमारा कार्यक्षेत्र :</h3>
                <ul style={{ marginBottom: 16 }}>
                  <li>प्राचीन भारतीय धर्मशास्त्र, पूजा विधियाँ व ग्रंथों पर शोध</li>
                  <li>आध्यात्मिक उत्पादों व साहित्य का निर्माण</li>
                  <li>भारत के राज्यों की संस्कृति-प्रधान कलाओं, उत्पादों व प्रतीकों को नई पहचान</li>
                </ul>
                <h3 className="mt-8 mb-2">🛕 हमारा उद्देश्य:</h3>
                <p>⁠"भारत की भू-परंपराओं, ऋषि परंपरा और आत्मिक साधना को यथार्थ, प्रयोगसिद्ध और समकालीन रूप में प्रस्तुत करना।"</p>
                <p>🌐 और इसलिए...</p>
                <p>देवभूमि भारत संस्थान एक "आध्यात्मिक शोध संस्थान" है —<br />जहाँ जिज्ञासा से उत्तर निकलते हैं,<br />और उत्तरों से पथ निर्मित होते हैं।</p>
                <p>⁠🔱 "भक्ति संस्कृति" — हमारा डिजिटल मंच, <br />जहां श्रद्धा, शोध और संस्कृति मिलकर</p>
              </div>
            </div>
          </div>
        </section>
      </>
    ),
    en: (
      <>
        <section className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 font-sanskrit">About – Devbhoomi Bharat Institute</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">"A unique confluence of faith, research, and culture"</p>
        </section>
        <section className="bg-muted py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none text-muted-foreground mx-auto">
                <p><b>The divine moment of Shravan month…</b></p>
                <p>When a curiosity arose in a devotee's mind —<br />"Was my worship complete...? Was my devotion accepted...?"</p>
                <p>God recognized the devotee's curiosity...<br />This Sawan, Mahadev's inspiration gave birth to a research —<br />and that research took shape as <b>"Bhakti Vritika"</b> — a unique, research-based, and soulful worship method.</p>
                <p>Devbhoomi Bharat Institute was not born merely as an organization,<br />but as a divine experience and a research journey.<br />This institute works to reawaken India's spiritual traditions, methods, and cultural knowledge with experience, experimentation, and pure faith.</p>
                <p><b>Our Belief:</b></p>
                <ul style={{ marginBottom: 16 }}>
                  <li>Curiosity + Research = True Spirituality</li>
                  <li>Faith + Method = True Devotion</li>
                </ul>
                <h3 className="mt-8 mb-2">🎯 Our First Published Work:</h3>
                <p><b>"Bhakti Vritika" – Complete Shiva Worship</b><br />Enriched with proven mantras, simple methods, and Vedic sentiments<br />This is not just a worship kit —<br />but an inspiration born from the grace of Mahadev himself.</p>
                <p>This work answers the concerns, doubts, and feelings of incompleteness of millions of devotees —<br />who often wonder:<br />"Is my worship correct...? Was there any mistake in the method...?"<br />"Do my feelings reach the Lord...?"</p>
                <h3 className="mt-8 mb-2">📚 Our Work Area:</h3>
                <ul style={{ marginBottom: 16 }}>
                  <li>Research on ancient Indian scriptures, worship methods, and texts</li>
                  <li>Creation of spiritual products and literature</li>
                  <li>Giving new identity to culture-centric arts, products, and symbols of Indian states</li>
                </ul>
                <h3 className="mt-8 mb-2">🛕 Our Objective:</h3>
                <p>"To present India's geo-traditions, rishi tradition, and spiritual practice in a realistic, experimental, and contemporary form."</p>
                <p>🌐 And so...</p>
                <p>Devbhoomi Bharat Institute is a "spiritual research institute" —<br />where answers emerge from curiosity,<br />and paths are created from answers.</p>
                <p>⁠🔱 "Bhakti Sanskriti" — our digital platform, <br />where faith, research, and culture come together</p>
              </div>
            </div>
          </div>
        </section>
      </>
    )
  };

  return (
    <div className="space-y-16 py-8">
      {aboutContent[language]}

      {/* Core Values */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-primary mb-12 font-sanskrit">
          🌱 हमारे मूल्य (Core Values)
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="text-center p-6">
            <CardContent className="pt-6">
              <div className="text-4xl mb-4">🕉️</div>
              <h3 className="text-xl font-semibold mb-2">शुद्धता (Purity)</h3>
              <p className="text-muted-foreground">
                हर रचना, हर मंत्र, हर विधि – केवल शास्त्रसंगत और भावसमृद्ध।
              </p>
            </CardContent>
          </Card>
          <Card className="text-center p-6">
            <CardContent className="pt-6">
              <div className="text-4xl mb-4">🔬</div>
              <h3 className="text-xl font-semibold mb-2">शोध (Research)</h3>
              <p className="text-muted-foreground">
                हम परंपराओं को सिर्फ मानते नहीं, उन्हें अनुभव, जाँच और प्रयोग से प्रमाणित करते हैं।
              </p>
            </CardContent>
          </Card>
          <Card className="text-center p-6">
            <CardContent className="pt-6">
              <div className="text-4xl mb-4">🙏</div>
              <h3 className="text-xl font-semibold mb-2">श्रद्धा (Devotion)</h3>
              <p className="text-muted-foreground">
                हर प्रयास में ईश्वरीय प्रेरणा और मन की पूर्ण निष्ठा।
              </p>
            </CardContent>
          </Card>
          <Card className="text-center p-6">
            <CardContent className="pt-6">
              <div className="text-4xl mb-4">🌿</div>
              <h3 className="text-xl font-semibold mb-2">संस्कृति (Cultural Integrity)</h3>
              <p className="text-muted-foreground">
                भारत की विविध सांस्कृतिक विरासत को सम्मान और आधुनिक अभिव्यक्ति के साथ प्रस्तुत करना।
              </p>
            </CardContent>
          </Card>
          <Card className="text-center p-6">
            <CardContent className="pt-6">
              <div className="text-4xl mb-4">📘</div>
              <h3 className="text-xl font-semibold mb-2">ज्ञानप्रवाह (Knowledge Sharing)</h3>
              <p className="text-muted-foreground">
                हमारा हर उत्पाद, हर लेखन, हर प्रस्तुति – ज्ञान बाँटने और चेतना जगाने का माध्यम हो।
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}