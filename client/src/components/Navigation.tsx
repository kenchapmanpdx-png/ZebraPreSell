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
    <nav id="main-nav" className={`fixed top-0 w-full bg-medical-blue/90 z-50 transition-all duration-300 ${scrolled ? 'py-2 shadow-md' : 'py-3'} border-b border-white/20`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center ml-[-20px]">
          <ZebraLogo />
          <div className="flex flex-col">
            <span className="text-5xl font-lora"><span className="text-white font-medium">Zebra</span><span className="text-neon font-normal">Well</span></span>
            <span className="text-lg text-white/80 font-lora ml-1 -mt-1 tracking-wide">Supplements</span>
          </div>
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="#home" className="font-medium text-white hover:text-neon transition-colors">Home</a>
          <a href="#products" className="font-medium text-white hover:text-neon transition-colors">Products</a>
          <a href="#story" className="font-medium text-white hover:text-neon transition-colors">Our Story</a>
          <a href="#why" className="font-medium text-white hover:text-neon transition-colors">Why ZebraWell</a>
          <a href="#comparison" className="font-medium text-white hover:text-neon transition-colors">Research</a>
          <a href="#contact" className="font-medium text-white hover:text-neon transition-colors">Contact Us</a>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      
      {/* Mobile Navigation */}
      <div className={`md:hidden bg-earth-cream border-t border-sage/10 pb-4 px-4 ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <a href="#home" onClick={handleLinkClick} className="block py-2 font-medium hover:text-terra transition-colors">Home</a>
        <a href="#products" onClick={handleLinkClick} className="block py-2 font-medium hover:text-terra transition-colors">Products</a>
        <a href="#story" onClick={handleLinkClick} className="block py-2 font-medium hover:text-terra transition-colors">Our Story</a>
        <a href="#why" onClick={handleLinkClick} className="block py-2 font-medium hover:text-terra transition-colors">Why ZebraWell</a>
        <a href="#comparison" onClick={handleLinkClick} className="block py-2 font-medium hover:text-terra transition-colors">Research</a>
        <a href="#contact" onClick={handleLinkClick} className="block py-2 font-medium hover:text-terra transition-colors">Contact Us</a>
      </div>
    </nav>
  );
}
