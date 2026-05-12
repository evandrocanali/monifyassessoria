import React from 'react';
import { motion } from 'framer-motion';
import { Home, Building2, Briefcase } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      title: t('services.item1.title'),
      description: t('services.item1.desc'),
      icon: Home,
    },
    {
      title: t('services.item2.title'),
      description: t('services.item2.desc'),
      icon: Building2,
    },
    {
      title: t('services.item3.title'),
      description: t('services.item3.desc'),
      icon: Briefcase,
    },
  ];

  return (
    <section id="servicos" className="py-24 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight uppercase">
              {t('services.title')} <span className="text-brand-gold">{t('services.subtitle')}</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto text-lg leading-relaxed">
              {t('services.desc')}
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: s.delay }}
              className="glass-card p-8 rounded-xl flex flex-col items-center text-center group"
            >
              <div className="mb-6 p-4 bg-white/5 rounded-full group-hover:bg-brand-gold/10 transition-colors">
                {s.icon}
              </div>
              <h3 className="text-xl font-outfit font-bold text-white mb-4 group-hover:text-brand-gold transition-colors">
                {s.title}
              </h3>
              <p className="text-white/50 leading-relaxed text-sm">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
