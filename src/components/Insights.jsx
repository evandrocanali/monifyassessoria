import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Building2, TrendingUp, BarChart3 } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const Insights = () => {
  const { t } = useLanguage();

  const news = [
    {
      title: t('insights.item1.title'),
      category: t('insights.item1.category'),
      date: '12 MAI 2026',
      desc: t('insights.item1.desc'),
      icon: <Building2 size={28} className="text-brand-gold" />,
    },
    {
      title: t('insights.item2.title'),
      category: t('insights.item2.category'),
      date: '10 MAI 2026',
      desc: t('insights.item2.desc'),
      icon: <TrendingUp size={28} className="text-brand-gold" />,
    },
    {
      title: t('insights.item3.title'),
      category: t('insights.item3.category'),
      date: '08 MAI 2026',
      desc: t('insights.item3.desc'),
      icon: <BarChart3 size={28} className="text-brand-gold" />,
    },
  ];

  return (
    <section id="insights" className="py-24 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight">
              {t('insights.title')} <span className="text-brand-gold">{t('insights.subtitle')}</span>
            </h2>
            <p className="text-white/60 text-lg max-w-xl">
              {t('insights.desc')}
            </p>
          </motion.div>
          <motion.a
            href="https://www.instagram.com/monifyassessoria/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 text-brand-gold font-bold hover:text-white transition-colors group"
          >
            {t('insights.more')}
            <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {news.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-brand-charcoal border border-white/5 rounded-2xl overflow-hidden group"
            >
              <div className="p-8">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-[10px] uppercase tracking-widest font-bold text-brand-gold bg-brand-gold/10 px-3 py-1 rounded-full">
                    {item.category}
                  </span>
                  <span className="text-xs text-white/30 font-inter">{item.date}</span>
                </div>
                <div className="mb-6">{item.icon}</div>
                <h3 className="text-xl font-outfit font-bold text-white mb-4 group-hover:text-brand-gold transition-colors">
                  {item.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed mb-6">
                  {item.desc}
                </p>
                <div className="h-[1px] w-full bg-white/5 group-hover:bg-brand-gold/30 transition-colors"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Insights;
