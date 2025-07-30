import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Phone, Mail, MessageCircle, MapPin, Clock, Users } from 'lucide-react';

const Contact = () => {
  const { t } = useLanguage();

  const contactMethods = [
    {
      icon: <MessageCircle className="w-8 h-8 text-green-500" />,
      title: t('contact.whatsapp'),
      description: 'Quick response on WhatsApp',
      action: 'Send Message',
      link: 'https://wa.me/917017075603',
      color: 'bg-muted-foreground'
    },
    {
      icon: <Phone className="w-8 h-8 text-blue-500" />,
      title: t('contact.call'),
      description: 'Direct phone consultation',
      action: 'Call Now',
      link: 'tel:+917017075603',
      color: 'bg-muted-foreground'
    },
    {
      icon: <Mail className="w-8 h-8 text-purple-500" />,
      title: t('contact.email'),
      description: 'Detailed inquiries via email',
      action: 'Send Email',
      link: 'mailto:info@bhaktisanskriti.org',
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
                <h3 className="text-xl font-semibold mb-2">{method.title}</h3>
                <p className="text-background mb-6">{method.description}</p>
                <a href={method.link}>
                  <Button variant="default" className="w-full">
                    {method.action}
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
                  <h3 className="font-semibold mb-3">General Inquiries</h3>
                  <div className="space-y-2">
                    <a href="tel:+917017075603" className="flex items-center text-muted-foreground hover:text-primary transition-colors">
                      <Phone className="w-4 h-4 mr-3" />
                      +91 XXXXX XXXXX
                    </a>
                    <a href="mailto:info@bhaktisanskriti.org" className="flex items-center text-muted-foreground hover:text-primary transition-colors">
                      <Mail className="w-4 h-4 mr-3" />
                      info@bhaktisanskriti.org
                    </a>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-3">Program Coordination</h3>
                  <div className="space-y-2">
                    <a href="tel:+917017075603" className="flex items-center text-muted-foreground hover:text-primary transition-colors">
                      <Phone className="w-4 h-4 mr-3" />
                      +91 XXXXX XXXXX
                    </a>
                    <a href="mailto:programs@bhaktisanskriti.org" className="flex items-center text-muted-foreground hover:text-primary transition-colors">
                      <Mail className="w-4 h-4 mr-3" />
                      programs@bhaktisanskriti.org
                    </a>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-3">Emergency Contact</h3>
                  <a href="https://wa.me/917017075603" className="flex items-center text-muted-foreground hover:text-green-600 transition-colors" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-4 h-4 mr-3" />
                    WhatsApp: +91 XXXXX XXXXX
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

      {/* Call to Action */}
      <section className="bg-gradient-spiritual text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Spiritual Community</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Connect with us today and become part of our growing spiritual family
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/917017075603" 
              target="_blank" rel="noopener noreferrer"
              className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Join WhatsApp Group
            </a>
            <a 
              href="tel:+91xxxxxxxxxx" 
              className="bg-secondary text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity inline-flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Schedule Visit
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;