import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Partners from './components/Partners';
import Services from './components/Services';
import Insights from './components/Insights';
import About from './components/About';
import { Contact, Footer } from './components/Contact';
import { LanguageProvider } from './LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <div className="bg-brand-charcoal min-h-screen text-white font-inter selection:bg-brand-gold selection:text-brand-charcoal">
        <Navbar />
        <Hero />
        <Stats />
        <Partners />
        <Services />
        <About />
        <Insights />
        <Contact />
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
