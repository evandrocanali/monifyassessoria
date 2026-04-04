import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Calculator from './components/Calculator';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-primary text-white selection:bg-secondary selection:text-primary overflow-x-hidden">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Modern Trust Section (Glass Banner) */}
        <div className="relative z-20 -mt-10 lg:-mt-20 container mx-auto">
          <div className="glass p-12 lg:p-16 rounded-[2rem] flex flex-col lg:flex-row items-center justify-between gap-12 shadow-2xl">
            <div className="max-w-xl">
              <h2 className="text-3xl lg:text-4xl font-heading mb-4 text-gradient-gold italic">"Compromisso com o seu Patrimônio"</h2>
              <p className="text-white/60 text-lg leading-relaxed">
                Entregamos excelência em cada negociação, garantindo que cada etapa seja estratégica, clara e segura para seus investimentos.
              </p>
            </div>
            <div className="w-px h-24 bg-white/10 hidden lg:block" />
            <div className="flex gap-12">
              <div className="text-center">
                <span className="block text-4xl lg:text-5xl font-black text-white">+15</span>
                <span className="text-[10px] uppercase tracking-widest text-secondary font-bold">Anos de Experiência</span>
              </div>
              <div className="text-center">
                <span className="block text-4xl lg:text-5xl font-black text-white">100%</span>
                <span className="text-[10px] uppercase tracking-widest text-secondary font-bold">Transparência</span>
              </div>
            </div>
          </div>
        </div>

        <Services />
        <About />
        <Calculator />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
