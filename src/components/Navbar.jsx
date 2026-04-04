import React, { useState, useEffect } from 'react';
import { Mail, Menu, X } from 'lucide-react';
import logo from '../assets/logotipo_novo.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-700 ${isScrolled ? 'py-4 glass-dark shadow-2xl' : 'py-8 bg-transparent'}`}>
      <div className="container mx-auto flex items-center justify-between">
        
        {/* LOGO FOCUS */}
        <div className="flex items-center gap-6 group cursor-pointer">
          <div className="relative">
            <img 
              src={logo} 
              alt="Monify Logo" 
              className={`transition-all duration-700 ${isScrolled ? 'h-14' : 'h-20 lg:h-24'} drop-shadow-[0_0_15px_rgba(201,160,80,0.4)] group-hover:scale-110`}
            />
            {!isScrolled && (
              <div className="absolute -inset-2 bg-secondary/10 blur-2xl rounded-full -z-10 group-hover:bg-secondary/20 transition-all duration-700" />
            )}
          </div>
          <div className="flex flex-col">
            <span className="text-2xl lg:text-3xl font-heading font-extrabold tracking-[0.2em] text-white leading-none">MONIFY</span>
            <span className="text-[10px] uppercase tracking-[0.4em] text-secondary font-bold mt-1">Assessoria Premium</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-12">
          {['Serviços', 'Sobre', 'Simulador', 'Contato'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="text-sm font-semibold tracking-widest uppercase text-white/70 hover:text-secondary transition-colors duration-300 relative group"
            >
              {item}
              <span className="absolute -bottom-2 left-0 w-0 h-px bg-secondary transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Action Buttons & Contacts */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-4 text-white/50">
            <a href="https://wa.me/5514988414686" target="_blank" rel="noreferrer" className="hover:text-[#25D366] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-[#E1306C] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="mailto:contato@monify.com.br" className="hover:text-secondary transition-colors"><Mail size={20} /></a>
          </div>
          <button className="btn-premium">Fale Conosco</button>
        </div>

        {/* Mobile Menu Icon */}
        <button 
          className="lg:hidden text-white p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-primary/95 z-[-1] lg:hidden transition-all duration-500 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {['Serviços', 'Sobre', 'Simulador', 'Contato'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="text-2xl font-heading tracking-widest uppercase text-white hover:text-secondary"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <button className="btn-premium mt-4">Fale Conosco</button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
