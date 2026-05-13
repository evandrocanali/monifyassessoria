import React from 'react';
import { motion } from 'framer-motion';
import { Target, ShieldCheck, TrendingUp } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const About = () => {
  const { t } = useLanguage();

  const features = [
    { title: t('about.pillar1.title'), desc: t('about.pillar1.desc'), icon: <Target className="text-brand-gold shrink-0 mt-1" size={24} /> },
    { title: t('about.pillar2.title'), desc: t('about.pillar2.desc'), icon: <ShieldCheck className="text-brand-gold shrink-0 mt-1" size={24} /> },
    { title: t('about.pillar3.title'), desc: t('about.pillar3.desc'), icon: <TrendingUp className="text-brand-gold shrink-0 mt-1" size={24} /> }
  ];

  return (
    <section id="sobre" className="section-padding overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight">
              {t('about.title')}<br />
              <span className="text-brand-gold">{t('about.subtitle')}</span>
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-12 max-w-xl">
              {t('about.desc')}
            </p>

            <div className="space-y-6">
              {features.map((item, i) => (
                <div key={i} className="flex gap-4">
                  {item.icon}
                  <div>
                    <h4 className="text-white font-outfit font-bold text-lg mb-1">{item.title}</h4>
                    <p className="text-white/40 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <a href="#contact" className="btn-premium px-12 py-4 inline-block">
                CONHEÇA NOSSO MÉTODO
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
