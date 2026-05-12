import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("/hero-bg.png")' }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-brand-charcoal/80 via-brand-charcoal/40 to-brand-charcoal"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="text-brand-gold font-outfit font-semibold tracking-[0.3em] uppercase text-sm mb-4 block">
            Assessoria Imobiliária & Financeira
          </span>
          <h1 className="text-5xl md:text-8xl font-cinzel font-black text-white mb-6 leading-tight">
            SEU SONHO, <br />
            NOSSA <span className="text-gradient-gold">ESTRATÉGIA.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/70 font-inter max-w-2xl mx-auto mb-10 leading-relaxed">
            Assessoria financeira especializada em soluções de crédito que transformam planos em conquistas.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/5514988414686"
              className="btn-premium px-10 py-5 text-lg w-full sm:w-auto text-center"
            >
              FALAR COM ESPECIALISTA
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#services"
              className="bg-white/5 backdrop-blur-md border border-white/10 text-white font-bold px-10 py-5 text-lg rounded-[4px] hover:bg-white/10 transition-all w-full sm:w-auto text-center"
            >
              VER SERVIÇOS
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-brand-gold/50 cursor-pointer"
        onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}
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
