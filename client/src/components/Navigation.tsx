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
    <nav id="main-nav" className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-1 md:py-2 shadow-md' : 'py-2 md:py-3'} border-b border-sage/10 relative`} 
         style={{
           background: '#1D4526'
         }}>
      {/* Zebra pattern overlay */}
      <div 
        className="absolute inset-0 bg-repeat"
        style={{
          backgroundImage: 'url(/zebra-pattern.jpg)',
          opacity: 0.025,
          backgroundSize: '800px 400px'
        }}
      ></div>
      <div className="container mx-auto px-3 md:px-4 flex justify-between items-center relative z-10">
        {/* Logo */}
        <a href="#" className="flex items-center ml-0 md:ml-[-20px]">
          <div className="scale-115">
            <ZebraLogo />
          </div>
          <div className="flex flex-col">
            <span className="text-5xl sm:text-3xl md:text-5xl lg:text-6xl font-lora"><span className="text-white font-medium">Zebra</span><span className="text-terra font-normal">Well</span></span>
            <span className="text-sm sm:text-base md:text-lg lg:text-xl text-white font-lora ml-1 -mt-1 tracking-wide">Supplements</span>
          </div>
          <div className="hidden md:flex flex-col ml-6 border-l border-white/20 pl-6">
            <span className="text-xl text-white/90 font-medium font-sans">Supporting EDS & POTS</span>
            <span className="text-xl text-white/70 font-lora italic">Wellness for the Rare and Resilient</span>
          </div>
        </a>

        {/* Desktop Navigation - Hidden for presale page */}
        <div className="hidden">
        </div>

        {/* Mobile Menu Button - Hidden for presale page */}
        <div className="hidden">
        </div>
      </div>

      {/* Mobile Navigation - Hidden for presale page */}
      <div className="hidden">
      </div>
    </nav>
  );
}