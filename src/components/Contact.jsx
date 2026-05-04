import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

const InstagramIcon = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-brand-charcoal relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-brand-gray rounded-3xl overflow-hidden border border-white/5">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Contact Info */}
            <div className="p-12 lg:p-20 bg-gradient-to-br from-brand-charcoal to-brand-gray">
              <h2 className="text-4xl font-cinzel font-bold text-white mb-8">VAMOS <span className="text-gradient-gold">CONVERSAR?</span></h2>
              <p className="text-white/50 mb-12 text-lg">Sua próxima grande conquista começa com uma decisão estratégica. Estamos prontos para te guiar.</p>
              
              <div className="space-y-8">
                <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 rounded-full bg-brand-gold/10 flex items-center justify-center group-hover:bg-brand-gold transition-colors">
                    <Phone className="text-brand-gold group-hover:text-black transition-colors" size={20} />
                  </div>
                  <div>
                    <p className="text-white/30 text-xs uppercase tracking-widest font-bold">Telefone / WhatsApp</p>
                    <p className="text-white font-outfit font-bold text-xl">(14) 98841-4686</p>
                  </div>
                </div>

                <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 rounded-full bg-brand-gold/10 flex items-center justify-center group-hover:bg-brand-gold transition-colors">
                    <Mail className="text-brand-gold group-hover:text-black transition-colors" size={20} />
                  </div>
                  <div>
                    <p className="text-white/30 text-xs uppercase tracking-widest font-bold">Email</p>
                    <p className="text-white font-outfit font-bold text-xl">contato@monify.com.br</p>
                  </div>
                </div>

                <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 rounded-full bg-brand-gold/10 flex items-center justify-center group-hover:bg-brand-gold transition-colors">
                    <MapPin className="text-brand-gold group-hover:text-black transition-colors" size={20} />
                  </div>
                  <div>
                    <p className="text-white/30 text-xs uppercase tracking-widest font-bold">Escritório</p>
                    <p className="text-white font-outfit font-bold text-lg">Bauru, SP</p>
                  </div>
                </div>
              </div>

              <div className="mt-16 pt-16 border-t border-white/5 flex gap-6">
                <a href="https://www.instagram.com/monify.assessoria/" target="_blank" rel="noreferrer" className="text-white/30 hover:text-brand-gold transition-colors">
                  <InstagramIcon size={28} />
                </a>
                <a href="#" className="text-white/30 hover:text-brand-gold transition-colors">
                  <MessageCircle size={28} />
                </a>
              </div>
            </div>

            {/* CTA Box */}
            <div className="p-12 lg:p-20 flex flex-col justify-center items-center text-center">
              <div className="mb-10 text-brand-gold">
                <MessageCircle size={80} strokeWidth={1} />
              </div>
              <h3 className="text-3xl font-cinzel font-bold text-white mb-6">SIMULAÇÃO IMEDIATA</h3>
              <p className="text-white/50 mb-10 max-w-sm">Receba uma análise preliminar de crédito em poucos minutos via WhatsApp.</p>
              
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://wa.me/5514988414686"
                className="btn-premium px-16 py-6 text-xl rounded-full shadow-[0_0_30px_rgba(212,175,55,0.2)]"
              >
                INICIAR SIMULAÇÃO
              </motion.a>
              <p className="mt-6 text-xs text-white/20 uppercase tracking-widest font-bold font-inter">Atendimento humano e especializado</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 bg-brand-charcoal border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="flex items-center justify-center mb-8">
          <img src="/logo-premium.png" alt="Monify Logo" className="h-8 w-auto mr-3 grayscale" />
          <span className="text-xl font-cinzel font-bold text-white/50 tracking-widest uppercase">MONIFY</span>
        </div>
        <p className="text-white/20 text-sm font-inter">
          &copy; {new Date().getFullYear()} Monify Assessoria Financeira & Imobiliária. Todos os direitos reservados.
          <br />
          <span className="text-[10px] mt-2 block">Premium Financial Advisory Service</span>
        </p>
      </div>
    </footer>
  );
};

export { Contact, Footer };
