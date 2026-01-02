import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowLeft } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'bg-black/90 backdrop-blur-md py-4 border-b border-gray-800' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="w-8 h-8 bg-brand-pink rounded-sm rotate-45 flex items-center justify-center">
            <span className="text-white font-bold -rotate-45 text-xl">A</span>
          </div>
          <span className="text-2xl font-bold tracking-tighter">AtlasMedia</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <button onClick={() => scrollToSection('what-we-do')} className="hover:text-brand-pink transition-colors">מה אנחנו עושים</button>
          <button onClick={() => scrollToSection('how-it-works')} className="hover:text-brand-pink transition-colors">איך זה עובד</button>
          
          <button 
            onClick={() => scrollToSection('contact')}
            className="bg-brand-pink hover:bg-rose-600 text-white px-6 py-2 rounded-full transition-all transform hover:scale-105 flex items-center gap-2"
          >
            צור קשר
            <ArrowLeft className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black border-b border-gray-800 p-6 flex flex-col gap-4 shadow-2xl">
          <button onClick={() => scrollToSection('what-we-do')} className="text-right hover:text-brand-pink py-2">מה אנחנו עושים</button>
          <button onClick={() => scrollToSection('how-it-works')} className="text-right hover:text-brand-pink py-2">איך זה עובד</button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="bg-brand-pink text-white px-6 py-3 rounded-lg text-center font-bold"
          >
            בוא נדבר
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;