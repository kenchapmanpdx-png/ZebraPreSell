import { Link } from "wouter";
import ZebraLogo from "./ZebraLogo";
import { Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    // CHANGED: Background to Light Cream (#FDFBF7), Text to Dark (#2c1810)
    <footer className="bg-[#FDFBF7] text-[#2c1810] pt-20 pb-10 border-t border-[#E8DCCA]">
      <div className="container mx-auto px-6">

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

          {/* Brand Column */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <ZebraLogo className="w-10 h-10 text-[#0f2e24] fill-current" />
              <span className="text-2xl font-serif font-bold text-[#0f2e24]">
                Zebra<span className="text-[#C8592B]">Well</span>
              </span>
            </div>
            <p className="text-[#5D4037] mb-6 max-w-md leading-relaxed">
              Clinical-grade support for the POTS, EDS, and MCAS community. 
              Built by patients, for patients. 100% transparent, 0% fillers.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-[#E8DCCA] flex items-center justify-center text-[#0f2e24] hover:bg-[#C8592B] hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#E8DCCA] flex items-center justify-center text-[#0f2e24] hover:bg-[#C8592B] hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#E8DCCA] flex items-center justify-center text-[#0f2e24] hover:bg-[#C8592B] hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Links Column 1 */}
          <div>
            <h4 className="font-bold text-[#0f2e24] uppercase tracking-wider mb-6 text-sm">Company</h4>
            <ul className="space-y-4">
              <li><Link href="/our-promise" className="text-[#5D4037] hover:text-[#C8592B] transition-colors">Our Promise</Link></li>
              <li><Link href="/#story" className="text-[#5D4037] hover:text-[#C8592B] transition-colors">Our Story</Link></li>
              <li><Link href="/#faq" className="text-[#5D4037] hover:text-[#C8592B] transition-colors">FAQ</Link></li>
              <li><a href="mailto:hello@zebrawell.com" className="text-[#5D4037] hover:text-[#C8592B] transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div>
            <h4 className="font-bold text-[#0f2e24] uppercase tracking-wider mb-6 text-sm">Products</h4>
            <ul className="space-y-4">
              <li><Link href="/#products" className="text-[#5D4037] hover:text-[#C8592B] transition-colors">Daily Foundation</Link></li>
              <li><Link href="/#ingredients" className="text-[#5D4037] hover:text-[#C8592B] transition-colors">Ingredients</Link></li>
              <li><Link href="/#science" className="text-[#5D4037] hover:text-[#C8592B] transition-colors">The Science</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#E8DCCA] flex flex-col md:flex-row justify-between items-center text-sm text-[#8D6E63]">
          <p>© 2025 ZebraWell. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-[#0f2e24] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#0f2e24] transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-[#0f2e24] transition-colors">Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
}