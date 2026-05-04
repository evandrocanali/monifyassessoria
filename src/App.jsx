import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import Insights from './components/Insights';
import About from './components/About';
import { Contact, Footer } from './components/Contact';

function App() {
  return (
    <div className="bg-brand-charcoal min-h-screen selection:bg-brand-gold selection:text-black">
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <About />
      <Insights />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
