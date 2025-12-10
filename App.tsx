import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Process from './components/Process';
import SupportedSites from './components/SupportedSites';
import ChinaImport from './components/ChinaImport';
import Features from './components/Features';
import Services from './components/Services';
import QuoteForm from './components/QuoteForm';
import About from './components/About';
import Blog from './components/Blog';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Process />
        <SupportedSites />
        <ChinaImport />
        <Features />
        <Services />
        <QuoteForm />
        <About />
        <Blog />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default App;