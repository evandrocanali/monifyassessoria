import React from 'react';
import { motion } from 'framer-motion';
import { Home, RefreshCw, Layers, ShieldCheck } from 'lucide-react';

const services = [
  {
    title: 'Financiamento Imobiliário',
    desc: 'As melhores condições para você conquistar o seu imóvel.',
    icon: <Home className="w-10 h-10 text-brand-gold" />,
    delay: 0.1
  },
  {
    title: 'Refinanciamento (Home Equity)',
    desc: 'Use o valor do seu imóvel para realizar projetos, investir ou quitar dívidas com mais economia.',
    icon: <RefreshCw className="w-10 h-10 text-brand-gold" />,
    delay: 0.2
  },

  {
    title: 'Crédito Estruturado',
    desc: 'Soluções sob medida para perfis de alta renda e investimentos de grande porte.',
    icon: <ShieldCheck className="w-10 h-10 text-brand-gold" />,
    delay: 0.4
  }
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-brand-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-cinzel font-bold text-white mb-4"
          >
            SOLUÇÕES <span className="text-gradient-gold">MONIFY</span>
          </motion.h2>
          <div className="h-1 w-24 bg-brand-gold mx-auto mb-6"></div>
          <p className="text-white/60 max-w-2xl mx-auto font-inter text-lg">
            Combinamos conhecimento técnico e relacionamento bancário para garantir o melhor resultado financeiro.
          </p>
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
