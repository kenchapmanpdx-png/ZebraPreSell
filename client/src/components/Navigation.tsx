import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import ZebraLogo from "./ZebraLogo";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Our Story", href: "/#story" },
    { name: "Products", href: "/#products" },
    { name: "Ingredients", href: "/#ingredients" },
    { name: "FAQ", href: "/#faq" },
  ];

  return (
    // HEADER: Deep Green Background + Copper/Beige Accents
    <nav 
      className={`fixed w-full z-50 transition-all duration-500 ease-in-out border-b border-[#C89F87]/20 ${
        scrolled 
          ? "py-3 shadow-xl bg-[#0f2e24]" 
          : "py-5 bg-[#0f2e24]"
      }`}
    >
      {/* ZEBRA TEXTURE: Subtle and Sophisticated */}
      <div 
        className="absolute inset-0 opacity-[0.07] pointer-events-none mix-blend-overlay"
        style={{ 
          backgroundImage: 'url("/zebra-pattern.jpg")', 
          backgroundSize: '300px' 
        }}
      ></div>

      <div className="container mx-auto px-6 flex justify-between items-center relative z-10">

        {/* LOGO: Zebra Head inside Cream Circle with Copper Border */}
        <Link href="/">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="w-12 h-12 bg-[#FDFBF7] rounded-full flex items-center justify-center border-2 border-[#C8592B] shadow-md transition-transform duration-300 group-hover:scale-110">
              <ZebraLogo className="w-7 h-7 text-[#0f2e24] fill-current" />
            </div>

            <div className="flex flex-col">
              <span className="text-xl font-serif font-bold tracking-tight text-[#FDFBF7] leading-none">
                Zebra<span className="text-[#C8592B]">Well</span>
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#E6B8A2] font-medium mt-1">
                Clinical Grade
              </span>
            </div>
          </div>
        </Link>

        {/* DESKTOP LINKS - Rose Gold & Cream */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-[#FDFBF7]/90 hover:text-[#E6B8A2] transition-colors uppercase tracking-widest relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#C8592B] transition-all group-hover:w-full"></span>
            </a>
          ))}

          <Link href="/preorder">
            <button className="bg-gradient-to-r from-[#C8592B] to-[#B04A20] text-white px-7 py-2.5 rounded-full font-bold text-sm shadow-lg shadow-[#0f2e24]/50 hover:shadow-orange-900/20 transition-all hover:-translate-y-0.5 border border-[#E6B8A2]/20">
              Pre-Order
            </button>
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button 
          className="md:hidden text-[#FDFBF7]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#0f2e24] border-t border-[#C89F87]/20 shadow-2xl animate-in slide-in-from-top-2">
           {/* Mobile Texture */}
           <div 
            className="absolute inset-0 opacity-[0.05] pointer-events-none mix-blend-overlay"
            style={{ backgroundImage: 'url("/zebra-pattern.jpg")' }}
          ></div>

          <div className="flex flex-col p-6 space-y-6 relative z-10 text-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xl font-serif font-medium text-[#FDFBF7] hover:text-[#C8592B]"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
             <Link href="/preorder">
              <button className="w-full bg-[#C8592B] text-white py-4 rounded-lg font-bold mt-4 shadow-md border border-[#E6B8A2]/30">
                Pre-Order Now
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}