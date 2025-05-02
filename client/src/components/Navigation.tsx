import { useState, useEffect } from 'react';
import ZebraLogo from './ZebraLogo';

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Handle scroll effect for sticky navigation
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setScrolled(scrollTop > 100);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // Handle mobile menu links - close menu when a link is clicked
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav id="main-nav" className={`fixed top-0 w-full bg-white z-50 transition-all duration-300 ${scrolled ? 'py-2 shadow-md' : 'py-3'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <ZebraLogo />
          <span className="text-2xl font-bold text-lavender">Zebra<span className="text-teal">Well</span></span>
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#home" className="font-semibold hover:text-lavender transition-colors">Home</a>
          <a href="#why" className="font-semibold hover:text-lavender transition-colors">Why ZebraWell</a>
          <a href="#avacore" className="font-semibold hover:text-lavender transition-colors">AvaCore</a>
          <a href="#boosters" className="font-semibold hover:text-lavender transition-colors">Boosters</a>
          <a href="#comparison" className="font-semibold hover:text-lavender transition-colors">Comparison</a>
          <a href="#contact" className="font-semibold hover:text-lavender transition-colors">Contact</a>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-neutral-dark focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          <i className="fas fa-bars text-2xl"></i>
        </button>
      </div>
      
      {/* Mobile Navigation */}
      <div className={`md:hidden bg-white border-t border-neutral-medium pb-4 px-4 ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <a href="#home" onClick={handleLinkClick} className="block py-2 font-semibold hover:text-lavender transition-colors">Home</a>
        <a href="#why" onClick={handleLinkClick} className="block py-2 font-semibold hover:text-lavender transition-colors">Why ZebraWell</a>
        <a href="#avacore" onClick={handleLinkClick} className="block py-2 font-semibold hover:text-lavender transition-colors">AvaCore</a>
        <a href="#boosters" onClick={handleLinkClick} className="block py-2 font-semibold hover:text-lavender transition-colors">Boosters</a>
        <a href="#comparison" onClick={handleLinkClick} className="block py-2 font-semibold hover:text-lavender transition-colors">Comparison</a>
        <a href="#contact" onClick={handleLinkClick} className="block py-2 font-semibold hover:text-lavender transition-colors">Contact</a>
      </div>
    </nav>
  );
}
