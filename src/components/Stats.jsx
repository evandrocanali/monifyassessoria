import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { label: 'MILHÕES FINANCIADOS', value: '150+' },
  { label: 'FAMÍLIAS ATENDIDAS', value: '800+' },
  { label: 'BANCOS PARCEIROS', value: '12' },
  { label: 'ANOS DE MERCADO', value: '16' }
];

const Stats = () => {
  return (
    <section className="bg-brand-charcoal py-20 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="text-4xl md:text-5xl font-cinzel font-black text-gradient-gold mb-2">
                {stat.value}
              </div>
              <div className="text-[10px] md:text-xs font-outfit font-bold tracking-[0.2em] text-white/40 uppercase">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
