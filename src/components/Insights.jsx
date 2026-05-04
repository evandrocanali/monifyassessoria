import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Landmark, FileCheck } from 'lucide-react';

const news = [
  {
    title: 'Modernização em SP: O Novo Sistema de Licenciamento',
    category: 'Mercado Imobiliário',
    date: 'Maio 2024',
    icon: <FileCheck className="text-brand-gold" size={24} />,
    desc: 'Como as novas mudanças no SIURB impactam a agilidade dos novos empreendimentos em São Paulo.'
  },
  {
    title: 'Expansão do Crédito Imobiliário em 2024',
    category: 'Economia',
    date: 'Abril 2024',
    icon: <TrendingUp className="text-brand-gold" size={24} />,
    desc: 'Bancos sinalizam maior abertura para financiamentos de médio e alto padrão este ano.'
  },
  {
    title: 'Taxas Selic e o Impacto nos Financiamentos',
    category: 'Financeiro',
    date: 'Março 2024',
    icon: <Landmark className="text-brand-gold" size={24} />,
    desc: 'O que esperar das próximas reuniões do Copom e como garantir as melhores taxas hoje.'
  }
];

const Insights = () => {
  return (
    <section id="insights" className="section-padding bg-brand-gray/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="mb-6 md:mb-0">
            <h2 className="text-4xl font-cinzel font-bold text-white mb-2">INSIGHTS DO <span className="text-gradient-gold">MERCADO</span></h2>
            <p className="text-white/50 font-inter">Informação estratégica para suas decisões patrimoniais.</p>
          </div>
          <a href="https://www.instagram.com/monify.assessoria/" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-brand-gold hover:text-white transition-colors font-bold uppercase tracking-widest text-sm">
            VER MAIS NO INSTAGRAM <ArrowRight size={18} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {news.map((item, i) => (
            <motion.div
              key={i}
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
