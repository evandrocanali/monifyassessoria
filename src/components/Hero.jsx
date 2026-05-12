import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

import { useLanguage } from '../LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background with optimized gradients */}
      <div className="absolute inset-0 bg-[#0A0A0A]" />
      <div className="absolute inset-0 bg-gradient-to-b from-brand-gold/5 via-transparent to-transparent" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-gold/10 rounded-full blur-[120px]" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-brand-gold/5 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 w-full relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full border border-brand-gold/30 bg-brand-gold/5 text-brand-gold text-xs font-bold tracking-[0.2em] mb-8 uppercase">
              {t('hero.badge')}
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.1] mb-8 tracking-tighter">
              {t('hero.title1')}<br />
              <span className="text-brand-gold">{t('hero.title2')}</span><br />
              {t('hero.title3')}
            </h1>
            <p className="text-lg md:text-xl text-white/60 mb-12 leading-relaxed max-w-2xl font-light">
              {t('hero.desc')}
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              <a 
                href="https://wa.me/5514988414686"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-8 py-4 bg-brand-gold text-brand-charcoal font-bold rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-xl shadow-brand-gold/20 text-center"
              >
                <span className="relative z-10">{t('hero.btn1')}</span>
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </a>
              <a 
                href="#servicos"
                className="px-8 py-4 border border-white/20 text-white font-bold rounded-full hover:bg-white/5 transition-all text-center"
              >
                {t('hero.btn2')}
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-brand-gold/50 cursor-pointer"
        onClick={() => document.getElementById('servicos').scrollIntoView({ behavior: 'smooth' })}
      >
        <ChevronDown size={40} />
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 -left-20 w-64 h-64 bg-brand-gold/10 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-brand-gold/5 rounded-full blur-[120px]"></div>
    </section>
  );
};

export default Hero;
