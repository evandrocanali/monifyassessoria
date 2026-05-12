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
      <div className="bg-brand-charcoal min-h-screen text-white font-inter">
        <Navbar />
        <Hero />
        <Stats />
        <Partners />
        <Services />
        <div className="bg-blue-500 p-20 text-center">
          <h1 className="text-4xl font-bold text-white">Stats, Partners & Services Loaded</h1>
        </div>
      </div>
    </LanguageProvider>
  );
}

export default App;
