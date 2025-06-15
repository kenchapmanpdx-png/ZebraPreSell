import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import DifferenceSection from '@/components/DifferenceSection';

import ProductGrid from '@/components/ProductGrid';
import Comparison from '@/components/Comparison';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import FloatingCTA from '@/components/FloatingCTA';
import SampleRequestModal from '@/components/SampleRequestModal';
import OurStory from '@/components/OurStory';
import Testimonials from '@/components/Testimonials';
import BuyNow from '@/components/BuyNow';
import WhatYouGet from '@/components/WhatYouGet';
import ClinicalRationale from '@/components/ClinicalRationale';

export default function Home() {
  // Add scroll animation functionality
  useEffect(() => {
    const animatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');
    
    const checkAnimation = () => {
      animatedElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('appear');
        }
      });
    };
    
    window.addEventListener('scroll', checkAnimation);
    checkAnimation(); // Check on initial load
    
    return () => {
      window.removeEventListener('scroll', checkAnimation);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <ProductGrid />
      <DifferenceSection />
      <WhatYouGet />
      <Comparison />
      <OurStory />
      <Testimonials />
      <Contact />
      <Footer />
      <FloatingCTA />
      <SampleRequestModal />
    </div>
  );
}
