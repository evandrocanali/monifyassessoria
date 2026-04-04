import React from 'react';
import { motion } from 'framer-motion';
import { Home, RefreshCw, BarChart, Scale, ShieldCheck, Handshake, ChevronRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Home size={32} />,
      title: 'Financiamento Imobiliário',
      description: 'Consultoria completa para aquisição patrimonial com as taxas mais competitivas do mercado.',
    },
    {
      icon: <RefreshCw size={32} />,
      title: 'Refinanciamento (CGI)',
      description: 'Maximize o potencial do seu imóvel em capital estratégico para seus novos projetos.',
    },
    {
      icon: <BarChart size={32} />,
      title: 'Consórcio Imobiliário',
      description: 'Construção inteligente de patrimônio de forma planejada, segura e sem incidência de juros.',
    },
    {
      icon: <Scale size={32} />,
      title: 'Portabilidade de Crédito',
      description: 'Otimização de contratos vigentes, reduzindo custos financeiros e amortizando parcelas.',
    },
    {
      icon: <ShieldCheck size={32} />,
      title: 'Seguros e Garantias',
      description: 'Proteção integral para sua família e para o patrimônio que você construiu com esforço.',
    },
    {
      icon: <Handshake size={32} />,
      title: 'Consultoria Estratégica',
      description: 'Análise 360° do seu perfil para traçar o roteiro mais eficiente até a sua conquista.',
    },
  ];

  return (
    <section id="serviços" className="relative overflow-hidden bg-white/5 py-32">
      {/* Background Decoration */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary/5 blur-[150px] -z-10" />

      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 mb-4"
            >
              <span className="w-12 h-px bg-secondary" />
              <span className="text-secondary text-sm font-bold tracking-[0.3em] uppercase">Soluções</span>
            </motion.div>
            <h2 className="text-4xl lg:text-6xl font-heading font-bold text-white">
              Consultoria Especializada em <span className="text-gradient-gold">Resultados</span>.
            </h2>
          </div>
          <p className="text-white/40 lg:max-w-xs text-sm uppercase tracking-widest leading-loose">
            Atuamos com precisão técnica e olhar estratégico para garantir o melhor negócio.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-secondary/20 transition-all duration-700"
            >
              {/* Icon Container */}
              <div className="w-16 h-16 rounded-2xl bg-white/[0.03] flex items-center justify-center text-secondary border border-white/5 mb-8 transition-all duration-700 group-hover:scale-110 group-hover:bg-secondary group-hover:text-primary">
                {service.icon}
              </div>

              <h3 className="text-2xl font-heading font-bold text-white mb-4 group-hover:text-secondary transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-white/50 text-base leading-relaxed mb-8">
                {service.description}
              </p>

              <button className="flex items-center gap-2 text-secondary text-sm font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-[-10px] group-hover:translate-x-0">
                Saiba Mais <ChevronRight size={16} />
              </button>

              {/* Hover Glow */}
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent opacity-0 group-hover:opacity-30 transition-opacity duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
