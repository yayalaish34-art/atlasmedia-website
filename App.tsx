import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsBar from './components/StatsBar';
import WhatWeDo from './components/WhatWeDo';
import ProcessSteps from './components/ProcessSteps';
import ViralShowcase from './components/ViralShowcase';
import CTA from './components/CTA';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-dark text-white selection:bg-brand-pink selection:text-white overflow-x-hidden tech-grid">
      <Navbar />
      
      <main>
        <Hero />
        <StatsBar />
        <WhatWeDo />
        <ProcessSteps />
        <CTA />
      </main>

      <Footer />
    </div>
  );
};

export default App;