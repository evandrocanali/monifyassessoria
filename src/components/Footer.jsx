import React from 'react';
import { ShieldCheck, Mail, Phone, MapPin, ArrowUp } from 'lucide-react';
import logo from '../assets/logotipo_novo.png';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-primary pt-32 pb-12 overflow-hidden border-t border-white/5">
      {/* Decorative Gradient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-secondary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 mb-24">
          
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-10">
            <div className="flex items-center gap-6">
              <img src={logo} alt="Monify Logo" className="h-16 w-auto drop-shadow-[0_0_15px_rgba(201,160,80,0.3)]" />
              <div className="flex flex-col">
                <span className="text-2xl font-heading font-extrabold tracking-[0.2em] text-white leading-none">MONIFY</span>
                <span className="text-[10px] uppercase tracking-[0.4em] text-secondary font-bold mt-1">Assessoria Premium</span>
              </div>
            </div>
            
            <p className="text-white/40 text-lg leading-relaxed max-w-md">
              Elevando o padrão da assessoria financeira e imobiliária. Transformamos patrimônio em legado com estratégia, transparência e excelência técnica.
            </p>

            <div className="flex gap-6">
              <a href="#" className="text-white/30 hover:text-secondary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className="text-white/30 hover:text-secondary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="#" className="text-white/30 hover:text-secondary transition-colors"><Mail size={24} /></a>
            </div>
          </div>

          {/* Links Column 1 */}
          <div className="lg:col-span-2 space-y-8">
            <h4 className="text-white text-xs font-bold uppercase tracking-[0.3em]">Navegação</h4>
            <ul className="space-y-4">
              {['Home', 'Serviços', 'Sobre', 'Simulador', 'Contato'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-white/40 hover:text-secondary text-sm font-medium transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Column 2 */}
          <div className="lg:col-span-2 space-y-8">
            <h4 className="text-white text-xs font-bold uppercase tracking-[0.3em]">Legal</h4>
            <ul className="space-y-4">
              {['Privacidade', 'Termos de Uso', 'Cookies', 'LGPD'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-white/40 hover:text-secondary text-sm font-medium transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Compliance Column */}
          <div className="lg:col-span-3 space-y-8">
            <h4 className="text-white text-xs font-bold uppercase tracking-[0.3em]">Segurança</h4>
            <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/5 space-y-4">
              <div className="flex items-center gap-3 text-secondary">
                <ShieldCheck size={20} />
                <span className="text-[10px] font-bold uppercase tracking-widest">Antifraude</span>
              </div>
              <p className="text-white/30 text-[11px] leading-relaxed">
                A Monify nunca solicita depósitos antecipados para liberação de crédito. Nossas operações são 100% transparentes e regulamentadas.
              </p>
            </div>
            
            <button 
              onClick={scrollToTop}
              className="flex items-center gap-3 text-white/20 hover:text-secondary transition-all group"
            >
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-secondary transition-all">
                <ArrowUp size={18} />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest">Voltar ao Topo</span>
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="text-[10px] text-white/20 font-bold uppercase tracking-[0.4em]">
            © 2026 MONIFY - TODOS OS DIREITOS RESERVADOS
          </p>
          <div className="flex items-center gap-8 text-[10px] text-white/20 font-bold uppercase tracking-[0.2em]">
            <span>CNPJ: 00.000.000/0001-00</span>
            <span className="hidden md:block">Sede Administrativa - São Paulo, SP</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
