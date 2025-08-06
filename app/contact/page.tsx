'use client'

import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Phone, Mail, MessageCircle, MapPin, Clock, Users } from 'lucide-react';

export default function Contact() {
  const { t, language } = useLanguage();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const contactMethods = [
    {
      icon: <MessageCircle className="w-8 h-8 text-green-500" />,
      title: t('contact.whatsapp'),
      description: {
        hi: 'व्हाट्सऐप पर त्वरित उत्तर',
        en: 'Quick response on WhatsApp'
      },
      action: {
        hi: 'संदेश भेजें',
        en: 'Send Message'
      },
      link: 'https://wa.me/919650863999',
      color: 'bg-muted-foreground'
    },

    {
      icon: <Mail className="w-8 h-8 text-purple-500" />,
      title: t('contact.email'),
      description: {
        hi: 'ईमेल के माध्यम से विस्तृत पूछताछ',
        en: 'Detailed inquiries via email'
      },
      action: {
        hi: 'ईमेल भेजें',
        en: 'Send Email'
      },
      link: 'mailto:support@bhaktisanskriti.org',
      color: 'bg-muted-foreground'
    }
  ];

  const officeHours = [
    { day: 'Monday - Friday', time: '9:00 AM - 6:00 PM' },
    { day: 'Saturday', time: '10:00 AM - 4:00 PM' },
    { day: 'Sunday', time: 'By Appointment' }
  ];

  return (
    <div className="space-y-16 py-8">
      {/* Header */}
      <section className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 font-sanskrit">
          {t('contact.title')}
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          {t('contact.subtitle')}
        </p>
      </section>

      {/* Contact Methods */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactMethods.map((method, index) => (
            <Card key={index} className={`${method.color} border-0 transition-colors`}>
              <CardContent className="p-8 text-center">
                <div className="flex justify-center mb-6">
                  {method.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 font-sanskrit">{method.title}</h3>
                <p className="text-background mb-6" style={{ fontFamily: isClient && language === 'hi' ? 'Noto Sans Devanagari, serif' : 'inherit' }}>
                  {isClient ? method.description[language] : method.description.en}
                </p>
                <a href={method.link}>
                  <Button variant="default" className="w-full">
                    {isClient ? method.action[language] : method.action.en}
                  </Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Information */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Office Information */}
          <Card className="p-6">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-bold text-primary mb-6 flex items-center">
                <MapPin className="w-6 h-6 mr-3" />
                Visit Our Center
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-1">Address</h3>
                  <p className="text-muted-foreground">
                    Clock Tower<br />
                    Dehradun<br />
                    Uttarakhand - 248001<br />
                    India
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    Office Hours
                  </h3>
                  <div className="space-y-1">
                    {officeHours.map((schedule, idx) => (
                      <div key={idx} className="flex justify-between text-sm">
                        <span className="text-muted-foreground">{schedule.day}</span>
                        <span className="font-medium">{schedule.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Contact */}
          <Card className="p-6">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-bold text-primary mb-6 flex items-center">
                <Users className="w-6 h-6 mr-3" />
                Get in Touch
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-3">Contact Number</h3>
                  <a href="https://wa.me/919650863999" className="flex items-center text-muted-foreground hover:text-green-600 transition-colors" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-4 h-4 mr-3" />
                    WhatsApp: +91 96508 63999
                  </a>
                </div>

                <div>
                  <h3 className="font-semibold mb-3">E-Mail ID</h3>
                  <a href="mailto:support@bhaktisanskriti.org" className="flex items-center text-muted-foreground hover:text-primary transition-colors">
                    <Mail className="w-4 h-4 mr-3" />
                    support@bhaktisanskriti.org
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Map Section */}
      <section className="container mx-auto px-4">
        <Card className="overflow-hidden">
          <div className="aspect-video bg-muted flex items-center justify-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3071.74114435665!2d78.03923607556455!3d30.324295074783848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390929ea85275763%3A0xdc5852f79736305f!2sClock%20Tower!5e1!3m2!1sen!2sin!4v1753788488082!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Location Map"
            ></iframe>
          </div>
        </Card>
      </section>

    </div>
  );
}