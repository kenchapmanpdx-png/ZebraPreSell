import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'wouter';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import ProductGrid from '@/components/ProductGrid';
import InteractiveIngredientMap from '@/components/InteractiveIngredientMap';
import OurStory from '@/components/OurStory';
import WhyZebraWell from '@/components/WhyZebraWell';
import ClinicalRationale from '@/components/ClinicalRationale';
import Testimonials from '@/components/Testimonials';
import WhatYouGet from '@/components/WhatYouGet';
import Contact from '@/components/Contact';
import AOS from 'aos';
import 'aos/dist/aos.css';

function SectionButton() {
  return (
    <div className="flex justify-center py-8">
      <Link to="/preorder">
        <button className="bg-terra text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:bg-terra/90 transition-all duration-300 hover:scale-[1.05]">
          Join Reservation List
        </button>
      </Link>
    </div>
  );
}

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <>
      <Helmet>
        <title>ZebraWell - Clinical-Grade Supplements for POTS & EDS</title>
        <meta name="description" content="Therapeutic clinical-grade supplements designed specifically for POTS and Ehlers-Danlos Syndrome (EDS). Join our reservation list." />
        <meta name="keywords" content="POTS, EDS, supplements, clinical-grade, postural orthostatic tachycardia syndrome, ehlers-danlos syndrome, zebra, rare disease" />
        <meta property="og:title" content="ZebraWell - Clinical-Grade Supplements for POTS & EDS" />
        <meta property="og:description" content="Therapeutic clinical-grade supplements for POTS and EDS. Join our reservation list to be the first to know when available." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://zebrawell.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ZebraWell - Clinical-Grade Supplements for POTS & EDS" />
        <meta name="twitter:description" content="Therapeutic clinical-grade supplements for rare conditions. Join our reservation list." />
      </Helmet>

      <div className="min-h-screen">
        <Navigation />
        <Hero />
        <SectionButton />
        <ProductGrid />
        <SectionButton />
        <InteractiveIngredientMap />
        <SectionButton />
        <OurStory />
        <SectionButton />
        <WhyZebraWell />
        <SectionButton />
        <ClinicalRationale />
        <SectionButton />
        <Testimonials />
        <SectionButton />
        <WhatYouGet />
        <Contact />
      </div>
    </>
  );
}