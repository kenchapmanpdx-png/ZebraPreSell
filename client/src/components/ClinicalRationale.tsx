import React from "react";
import { Check, ShieldCheck } from "lucide-react";

export default function ClinicalRationale() {
  // Grouped for better cognitive load (UX best practice)
  const ingredients = [
    { name: "Magnesium Malate", benefit: "Energy production & muscle function", category: "Energy" },
    { name: "CoQ10 (Ubiquinol)", benefit: "Mitochondrial energy support", category: "Energy" },
    { name: "Vitamin D3", benefit: "Immune & bone health", category: "Structural" },
    { name: "Vitamin K2", benefit: "Bone mineralization", category: "Structural" },
    { name: "PEA", benefit: "Pain relief & inflammation", category: "Relief" },
    { name: "Alpha-GPC", benefit: "Cognitive support", category: "Brain" },
    { name: "ALCAR", benefit: "Brain & mitochondrial support", category: "Brain" },
    { name: "Taurine", benefit: "Cardiovascular support", category: "Flow" },
    { name: "Thiamine", benefit: "Nervous system health", category: "Nerve" },
    { name: "B2 (R5P)", benefit: "Energy metabolism", category: "Energy" },
    { name: "B6 (P5P)", benefit: "Neurotransmitter support", category: "Brain" },
    { name: "B12 (Dual-form)", benefit: "Energy & nerve function", category: "Energy" },
    { name: "Folate (L-5-MTHF)", benefit: "Methylation support", category: "Genetics" },
    { name: "Zinc Glycinate", benefit: "Immune support", category: "Immunity" },
    { name: "Copper Glycinate", benefit: "Connective tissue health", category: "Structural" },
    { name: "Silicon (ch-OSA)", benefit: "Collagen synthesis", category: "Structural" },
    // PM Specifics
    { name: "L-Theanine", benefit: "Relaxation & sleep", category: "Calm" },
    { name: "Hyaluronic Acid", benefit: "Joint lubrication", category: "Structural" },
    { name: "R-Lipoic Acid", benefit: "Antioxidant & nerve health", category: "Nerve" },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#FDFBF7] relative">
      <div className="container mx-auto px-4 max-w-7xl">

        {/* SECTION HEADER */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-[#E8DCCA]/30 border border-[#C8592B]/20 text-[#C8592B] text-xs font-bold uppercase tracking-widest shadow-sm">
            <ShieldCheck size={14} />
            Clinical Grade Formulation
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#0f2e24] mb-4">
            Why Each Ingredient <span className="text-[#C8592B] italic">Matters</span>
          </h2>
          <p className="text-[#5D4037] max-w-2xl mx-auto text-lg">
            No fillers. No fluff. Just highly bioavailable nutrients engineered for complex biologies.
          </p>
        </div>

        {/* INGREDIENT GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {ingredients.map((item, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-5 shadow-sm border border-[#E6B8A2]/30 hover:shadow-md hover:border-[#C8592B]/50 transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#C8592B]/70 bg-[#FDFBF7] px-2 py-1 rounded-md">
                  {item.category}
                </span>
                <div className="w-2 h-2 rounded-full bg-[#D4E4BC] group-hover:bg-[#C8592B] transition-colors"></div>
              </div>

              <h3 className="text-lg font-bold text-[#0f2e24] mb-1 group-hover:text-[#C8592B] transition-colors">
                {item.name}
              </h3>

              <p className="text-sm text-[#5D4037] leading-tight">
                {item.benefit}
              </p>
            </div>
          ))}
        </div>

        {/* BOTTOM CALLOUT */}
        <div className="mt-12 text-center">
          <p className="text-sm text-[#0f2e24]/60 italic">
            * These statements have not been evaluated by the Food and Drug Administration.
          </p>
        </div>

      </div>
    </section>
  );
}