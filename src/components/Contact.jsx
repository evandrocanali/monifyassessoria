import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

const InstagramIcon = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

import { useLanguage } from '../LanguageContext';

export const Contact = () => {
  const { t } = useLanguage();

  return (
    <section id="contato" className="py-24 bg-brand-charcoal relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-white mb-8 uppercase leading-tight">
              {t('contact.title')}<br />
              <span className="text-brand-gold">{t('contact.subtitle')}</span>
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-12 max-w-md">
              {t('contact.desc')}
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center border border-white/10">
                  <Phone size={20} className="text-brand-gold" />
                </div>
                <div>
                  <p className="text-white/40 text-xs uppercase font-bold tracking-widest mb-1">{t('contact.phone')}</p>
                  <p className="text-white font-bold">(14) 98841-4686</p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center border border-white/10">
                  <Mail size={20} className="text-brand-gold" />
                </div>
                <div>
                  <p className="text-white/40 text-xs uppercase font-bold tracking-widest mb-1">{t('contact.email')}</p>
                  <p className="text-white font-bold">monifyassessoria@hotmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center border border-white/10">
                  <MapPin size={20} className="text-brand-gold" />
                </div>
                <div>
                  <p className="text-white/40 text-xs uppercase font-bold tracking-widest mb-1">{t('contact.office')}</p>
                  <p className="text-white font-bold">Bauru/SP - Brasil</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-3xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            
            <h3 className="text-2xl font-black text-white mb-4 uppercase">{t('contact.simulation')}</h3>
            <p className="text-white/60 mb-8 leading-relaxed">
              {t('contact.simulation_desc')}
            </p>

            <a 
              href="https://wa.me/5514988414686"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full py-5 bg-brand-gold text-brand-charcoal font-black rounded-2xl hover:bg-white transition-all duration-300 shadow-xl shadow-brand-gold/20 uppercase tracking-widest"
            >
              <MessageSquare size={20} />
              {t('contact.btn')}
            </a>
            
            <p className="mt-6 text-center text-white/30 text-xs font-bold uppercase tracking-widest">
              {t('contact.human')}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="py-12 border-t border-white/5 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="flex items-center justify-center gap-2 mb-8">
          <div className="w-8 h-8 bg-brand-gold rounded-lg flex items-center justify-center">
            <span className="text-brand-charcoal font-black text-xl italic leading-none">M</span>
          </div>
          <span className="text-2xl font-black text-white italic tracking-tighter uppercase">MONIFY</span>
        </div>
        
        <p className="text-white/20 text-sm font-inter">
          &copy; {new Date().getFullYear()} Monify Assessoria Financeira & Imobiliária. {t('footer.rights')}
          <br />
          <span className="text-[10px] mt-2 block uppercase tracking-[0.2em] text-brand-gold font-bold">{t('footer.tagline')}</span>
          <br />
          <span className="text-[10px] mt-2 block text-white/10">
            {t('footer.developed')} <a href="http://www.nresolutions.com.br" target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors underline decoration-brand-gold/30">NRE Solutions</a>
          </span>
        </p>
      </div>
    </footer>
  );
};
