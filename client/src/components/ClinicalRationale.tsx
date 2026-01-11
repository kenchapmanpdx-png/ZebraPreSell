import React from 'react';
import { Brain, Heart, Activity, Shield, Zap, Droplets } from 'lucide-react';

export default function ClinicalRationale() {
  const benefits = [
    {
      icon: <Activity className="w-8 h-8 text-[#C8592B]" />,
      title: "Autonomic Balance",
      description: "Supports the nervous system to help manage heart rate and blood pressure fluctuations common in POTS."
    },
    {
      icon: <Shield className="w-8 h-8 text-[#0f2e24]" />,
      title: "Mast Cell Stabilization",
      description: "Ingredients selected to be low-histamine and gentle, avoiding triggers for MCAS patients."
    },
    {
      icon: <Zap className="w-8 h-8 text-[#C8592B]" />,
      title: "Connective Tissue Support",
      description: "Nutrients that aid in collagen synthesis and joint stability for Ehlers-Danlos Syndrome."
    },
    {
      icon: <Brain className="w-8 h-8 text-[#0f2e24]" />,
      title: "Brain Fog Reduction",
      description: "Targeted support for cognitive clarity and mental energy levels."
    },
    {
      icon: <Heart className="w-8 h-8 text-[#C8592B]" />,
      title: "Cardiovascular Health",
      description: "Promotes healthy blood flow and circulation to reduce dizziness and fatigue."
    },
    {
      icon: <Droplets className="w-8 h-8 text-[#0f2e24]" />,
      title: "Optimal Absorption",
      description: "Bioavailable forms of vitamins and minerals to ensure your body actually uses them."
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#C8592B] font-bold tracking-widest uppercase text-sm mb-2 block">
            The Science
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#0f2e24] mb-4">
            Why Each Ingredient Matters
          </h2>
          <p className="text-lg text-[#5D4037]">
            We don't do "fairy dusting." Every ingredient is included at a therapeutic dose to target specific mechanisms in POTS, EDS, and MCAS.
          </p>
        </div>

        {/* GRID LAYOUT - CHUNKING FOR SCANNABILITY */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((item, index) => (
            <div 
              key={index} 
              className="p-8 rounded-2xl bg-[#FDFBF7] border border-[#E8DCCA] hover:border-[#C8592B]/30 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="mb-4 p-3 bg-white rounded-xl inline-block shadow-sm group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-[#2c1810] mb-3">
                {item.title}
              </h3>
              <p className="text-[#5D4037] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}