import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import DifferenceSection from '@/components/DifferenceSection';
import WhyZebraWell from '@/components/WhyZebraWell';
import ProductGrid from '@/components/ProductGrid';
import Comparison from '@/components/Comparison';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import FloatingCTA from '@/components/FloatingCTA';
import SampleRequestModal from '@/components/SampleRequestModal';
import OurStory from '@/components/OurStory';

export default function Home() {
  // Add scroll animation functionality
  useEffect(() => {
    const fadeElements = document.querySelectorAll('.fade-in');
    
    const checkFade = () => {
      fadeElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('appear');
        }
      });
    };
    
    window.addEventListener('scroll', checkFade);
    checkFade(); // Check on initial load
    
    return () => {
      window.removeEventListener('scroll', checkFade);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <DifferenceSection />
      <ProductGrid />
      {/* AvaCore component removed as requested */}
      <OurStory />
      <WhyZebraWell />
      <Comparison />
      <Contact />
      <Footer />
      <FloatingCTA />
      <SampleRequestModal />
    </div>
  );
}
