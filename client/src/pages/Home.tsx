import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import WhyZebra from '@/components/WhyZebra'; // ADDED THIS
import DifferenceSection from '@/components/DifferenceSection';
import ProductGrid from '@/components/ProductGrid';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import FloatingCTA from '@/components/FloatingCTA';
import SampleRequestModal from '@/components/SampleRequestModal';
import OurStory from '@/components/OurStory';
import InteractiveIngredientMap from '@/components/InteractiveIngredientMap';
import SimpleReservationSection from '@/components/SimpleReservationSection';
import Testimonials from '@/components/Testimonials';
import BuyNow from '@/components/BuyNow';
import WhatYouGet from '@/components/WhatYouGet';
import ClinicalRationale from '@/components/ClinicalRationale';

export default function Home() {
  // Scroll animation functionality
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
    checkAnimation();

    return () => {
      window.removeEventListener('scroll', checkAnimation);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />

      {/* Added WhyZebra here to bridge the Hero and Story */}
      <WhyZebra />

      <OurStory />
      <ProductGrid />
      <SimpleReservationSection />
      <InteractiveIngredientMap />
      <DifferenceSection />
      <WhatYouGet />
      <Testimonials />
      <Contact />
      <Footer />
      <FloatingCTA />
      <SampleRequestModal />
    </div>
  );
}