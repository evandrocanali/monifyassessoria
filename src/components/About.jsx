import React from 'react';
import { motion } from 'framer-motion';
import { Target, ShieldCheck, TrendingUp } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-padding overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Escritório Premium" 
                className="w-full grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            {/* Experience Badge */}
            <div className="absolute -bottom-10 -right-10 glass-card p-8 rounded-2xl z-20 hidden md:block">
              <span className="text-5xl font-cinzel font-black text-brand-gold block">16+</span>
              <span className="text-white/70 font-outfit uppercase tracking-tighter text-sm">Anos de Experiência</span>
            </div>
            
            {/* Background Decorative */}
            <div className="absolute -top-20 -left-20 w-80 h-80 bg-brand-gold/5 rounded-full blur-[100px]"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-cinzel font-bold text-white mb-8">
              A ESTRATÉGIA POR TRÁS DO <span className="text-gradient-gold">SUCESSO</span>
            </h2>
            <p className="text-white/60 text-lg mb-8 leading-relaxed font-inter">
              A Monify nasceu da necessidade de um atendimento consultivo e técnico no mercado de crédito imobiliário. Não somos apenas intermediários; somos seus estrategistas financeiros.
            </p>

            <div className="space-y-6">
              {[
                { title: 'Foco em Você', desc: 'Soluções personalizadas para seus objetivos.', icon: <Target className="text-brand-gold shrink-0 mt-1" size={24} /> },
                { title: 'Segurança', desc: 'Processos seguros, transparentes e sem burocracia.', icon: <ShieldCheck className="text-brand-gold shrink-0 mt-1" size={24} /> },
                { title: 'Resultados', desc: 'Estratégia inteligente para decisões que geram realização.', icon: <TrendingUp className="text-brand-gold shrink-0 mt-1" size={24} /> }
              ].map((item, i) => (
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
