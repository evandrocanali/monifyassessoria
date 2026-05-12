import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import LanguageSelector from './LanguageSelector';

const Navbar = () => {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav.home'), href: '#inicio' },
    { name: t('nav.services'), href: '#servicos' },
    { name: t('nav.insights'), href: '#insights' },
    { name: t('nav.about'), href: '#sobre' },
    { name: t('nav.contact'), href: '#contato' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img src="/logo-premium.png" alt="Monify Logo" className="h-12 w-auto mr-4" />
            <span className="text-3xl font-cinzel font-bold text-gradient-gold tracking-widest">MONIFY</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="hidden lg:flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-white/80 hover:text-brand-gold transition-colors font-outfit uppercase tracking-tighter"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="hidden lg:flex items-center space-x-6">
              <LanguageSelector />
              <a 
                href="#contato"
                className="px-6 py-2.5 bg-brand-gold text-brand-charcoal font-bold rounded-full hover:bg-white transition-all duration-300 text-sm shadow-lg shadow-brand-gold/20"
              >
                {t('nav.simulate')}
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-brand-gold focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-nav overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-4 text-base font-medium text-white hover:text-brand-gold font-outfit"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 flex flex-col gap-4 px-4">
                <LanguageSelector />
                <a 
                  href="#contato"
                  onClick={() => setIsOpen(false)}
                  className="w-full py-4 bg-brand-gold text-brand-charcoal font-bold rounded-xl text-center shadow-lg"
                >
                  {t('nav.simulate')}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
