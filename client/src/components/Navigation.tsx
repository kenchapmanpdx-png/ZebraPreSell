import { useState, useEffect } from 'react';
import ZebraLogo from './ZebraLogo';

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Handle scroll effect for sticky navigation
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setScrolled(scrollTop > 50);
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
    <nav id="main-nav" className={`fixed top-0 w-full bg-white z-50 transition-all duration-300 ${scrolled ? 'py-2 header-shadow' : 'py-4'}`}>
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <ZebraLogo />
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="#home" className="nav-link py-2">HOME</a>
          <a href="#products" className="nav-link py-2">PRODUCTS</a>
          <a href="#story" className="nav-link py-2">OUR STORY</a>
          <a href="#why" className="nav-link py-2">WHY ZEBRAWELL</a>
          <a href="#comparison" className="nav-link py-2">RESEARCH</a>
          <a href="#contact" className="btn btn-primary text-xs uppercase tracking-wider font-medium py-2 px-4">Contact Us</a>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-[hsl(var(--inw-text))] focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      
      {/* Mobile Navigation */}
      <div className={`md:hidden bg-white border-t border-[hsl(var(--inw-gray))] pb-4 px-4 ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="py-3 space-y-3">
          <a href="#home" onClick={handleLinkClick} className="nav-link block py-2">HOME</a>
          <a href="#products" onClick={handleLinkClick} className="nav-link block py-2">PRODUCTS</a>
          <a href="#story" onClick={handleLinkClick} className="nav-link block py-2">OUR STORY</a>
          <a href="#why" onClick={handleLinkClick} className="nav-link block py-2">WHY ZEBRAWELL</a>
          <a href="#comparison" onClick={handleLinkClick} className="nav-link block py-2">RESEARCH</a>
          <a href="#contact" onClick={handleLinkClick} className="btn btn-primary block text-center mt-4 text-xs uppercase tracking-wider">Contact Us</a>
        </div>
      </div>
    </nav>
  );
}
