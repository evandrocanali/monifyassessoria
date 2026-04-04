import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, TrendingUp, Handshake } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[105svh] flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Parallax-like effect */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/hero-house.png" 
          alt="Modern Luxury House" 
          className="w-full h-full object-cover"
        />
        {/* Modern Overlay: Gradient for contrast, subtle blur at edges */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent lg:via-primary/40 lg:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-60" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl lg:max-w-6xl">
          {/* Subtle Accent Label */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="w-12 h-px bg-secondary" />
            <span className="text-secondary text-sm lg:text-base font-bold tracking-[0.3em] uppercase">Excelência em Patrimônio</span>
          </motion.div>

          {/* MAIN HEADINGS - "CHAMATIVOS" */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-heading font-black text-white leading-tight mb-8 tracking-tighter"
          >
            TRANSFORME SEU <br /> 
            <span className="text-gradient-gold">FUTURO</span> EM REALIDADE.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-white/60 text-lg lg:text-2xl max-w-2xl lg:max-w-3xl mb-12 font-medium leading-relaxed"
          >
            Assessoria financeira e imobiliária estratégica para quem exige o extraordinário. 
            Segurança, rentabilidade e confiança em cada transação.
          </motion.p>

          {/* CTA Group removed as per request */}

          {/* Trust Badges / Stats Overlay Hook */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 1 }}
            className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8 border-t border-white/5 pt-12"
          >
            <div className="flex items-center gap-4">
              <ShieldCheck className="text-secondary" size={24} />
              <div>
                <p className="text-white font-bold text-xl leading-none">+500</p>
                <p className="text-white/40 text-xs uppercase tracking-widest mt-1">Famílias Atendidas</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <TrendingUp className="text-secondary" size={24} />
              <div>
                <p className="text-white font-bold text-xl leading-none">R$ 200M+</p>
                <p className="text-white/40 text-xs uppercase tracking-widest mt-1">Crédito Aprovado</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Handshake className="text-secondary" size={24} />
              <div>
                <p className="text-white font-bold text-xl leading-none">98%</p>
                <p className="text-white/40 text-xs uppercase tracking-widest mt-1">Taxa de Sucesso</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Modern Decoration */}
      <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-secondary/5 blur-[120px] rounded-full pointer-events-none" />
    </section>
  );
};

export default Hero;
