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
    <div className="bg-brand-charcoal min-h-screen text-white flex items-center justify-center">
      <h1 className="text-4xl font-bold">Monify Assessoria - Test Render</h1>
    </div>
  );
}

export default App;
