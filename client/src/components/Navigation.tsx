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
    <nav 
      className={`fixed w-full z-50 transition-all duration-500 ease-in-out ${
        scrolled 
          ? "py-4 shadow-md bg-[#FDFBF7]/95 backdrop-blur-md border-b border-[#C89F87]/20" 
          : "py-8 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center relative z-10">

        {/* LOGO: MAX SIZE */}
        <Link href="/">
          <div className="flex items-center gap-4 group cursor-pointer">
            <div className="w-20 h-20 bg-[#FDFBF7] rounded-full flex items-center justify-center border-[3px] border-[#C8592B] shadow-lg transition-transform duration-300 group-hover:scale-105">
              <ZebraLogo className="w-12 h-12 text-[#2c1810] fill-current" />
            </div>

            <div className="flex flex-col justify-center">
              <span className="text-3xl font-serif font-bold tracking-tight text-[#2c1810] leading-none">
                Zebra<span className="text-[#C8592B]">Well</span>
              </span>
              <span className="text-xs uppercase tracking-[0.25em] text-[#C8592B] font-bold mt-1 ml-1">
                Clinical Grade
              </span>
            </div>
          </div>
        </Link>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-base font-bold text-[#2c1810] hover:text-[#C8592B] transition-colors uppercase tracking-widest relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#C8592B] transition-all group-hover:w-full"></span>
            </a>
          ))}

          <Link href="/preorder">
            <button className="bg-[#C8592B] text-white px-8 py-3 rounded-full font-bold text-base shadow-xl hover:bg-[#B04A20] transition-all hover:-translate-y-0.5">
              Pre-Order
            </button>
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button 
          className="md:hidden text-[#2c1810]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#FDFBF7] border-t border-[#C89F87]/20 shadow-2xl animate-in slide-in-from-top-2">
          <div className="flex flex-col p-8 space-y-6 relative z-10 text-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-2xl font-serif font-bold text-[#2c1810] hover:text-[#C8592B]"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
             <Link href="/preorder">
              <button className="w-full bg-[#C8592B] text-white py-4 rounded-xl font-bold mt-4 shadow-md text-lg">
                Pre-Order Now
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}