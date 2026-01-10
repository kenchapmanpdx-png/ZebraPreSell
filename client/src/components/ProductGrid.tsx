import { useMemo } from 'react';
import { Sparkles, Moon, Zap, ShieldCheck } from 'lucide-react'; // Using clean icons

// Data constants (kept locally for component purity)
const amBenefits = ["Mitochondrial Energy", "Methylation Support", "Mast Cell Stabilization", "Connective Tissue"];
const pmBenefits = ["Collagen Cross-linking", "Overnight Repair", "Histamine Metabolism", "Relaxation Support"];
const powderBenefits = ["Mast Cell Stabilization", "Collagen Substrates", "MMP Inhibition", "ECM Protection"];

export default function ProductGrid() {
  return (
    <section id="products" className="py-20 md:py-28 bg-[#F5F5F0]">
      <div className="container mx-auto px-4 md:px-6">

        {/* Header - Centered & Clean */}
        <div className="text-center mb-16 md:mb-20">
          <span className="text-[#C8592B] font-bold tracking-widest text-xs uppercase mb-3 block">The Collection</span>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-[#0f2e24] mb-6">
            Engineered for <span className="italic text-[#0f2e24]/70">Stability</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
            Targeted support for the unique physiology of EDS and POTS. 
            <br className="hidden md:block"/>
            No fillers. No fluff. Just clinical doses.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* AM Formula Card - LUXURY MATTE GREEN */}
          <div className="group relative bg-[#0f2e24] rounded-[2rem] p-8 md:p-10 overflow-hidden shadow-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
            {/* Subtle Texture Overlay */}
            <div className="absolute inset-0 opacity-10 bg-[url('/zebra-pattern.jpg')] bg-cover mix-blend-overlay transition-opacity duration-500 group-hover:opacity-20"></div>

            <div className="relative z-10">
              <div className="flex justify-between items-start mb-6">
                <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center text-[#F9C365] border border-white/10">
                  <Zap size={28} />
                </div>
                <span className="bg-[#C8592B] text-white text-xs font-bold px-3 py-1 rounded-full">
                  MORNING
                </span>
              </div>

              <h3 className="text-3xl font-serif font-bold text-white mb-2">AM Formula</h3>
              <p className="text-[#F9C365] font-medium tracking-wide text-sm mb-6 uppercase">Fuel + Focus</p>

              <p className="text-gray-300 text-lg leading-relaxed mb-8 font-light">
                Targeted mitochondrial support and gentle mast cell stabilization for sustained energy without the crash.
              </p>

              {/* Ingredients / Benefits Tags */}
              <div className="flex flex-wrap gap-2">
                {amBenefits.map((benefit, i) => (
                  <span key={i} className="px-3 py-1.5 rounded-lg border border-white/20 text-gray-200 text-xs font-medium bg-white/5">
                    {benefit}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* PM Formula Card - LUXURY MATTE GREEN */}
          <div className="group relative bg-[#0f2e24] rounded-[2rem] p-8 md:p-10 overflow-hidden shadow-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
             {/* Subtle Texture Overlay */}
             <div className="absolute inset-0 opacity-10 bg-[url('/zebra-pattern.jpg')] bg-cover mix-blend-overlay transition-opacity duration-500 group-hover:opacity-20"></div>

            <div className="relative z-10">
              <div className="flex justify-between items-start mb-6">
                <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center text-[#A6A6C3] border border-white/10">
                  <Moon size={28} />
                </div>
                <span className="bg-[#5A5A85] text-white text-xs font-bold px-3 py-1 rounded-full">
                  EVENING
                </span>
              </div>

              <h3 className="text-3xl font-serif font-bold text-white mb-2">PM Formula</h3>
              <p className="text-[#A6A6C3] font-medium tracking-wide text-sm mb-6 uppercase">Repair + Recover</p>

              <p className="text-gray-300 text-lg leading-relaxed mb-8 font-light">
                Supports overnight collagen synthesis and tissue repair with strategic mineral timing and histamine support.
              </p>

              <div className="flex flex-wrap gap-2">
                {pmBenefits.map((benefit, i) => (
                  <span key={i} className="px-3 py-1.5 rounded-lg border border-white/20 text-gray-200 text-xs font-medium bg-white/5">
                    {benefit}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Powder / Foundation Card - Spans Full Width */}
          <div className="md:col-span-2 group relative bg-white rounded-[2rem] p-8 md:p-12 shadow-xl border border-stone-200 overflow-hidden hover:border-[#C8592B]/30 transition-all duration-500">
             <div className="absolute top-0 right-0 w-64 h-64 bg-[#C8592B]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

             <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-12">
                <div className="w-16 h-16 rounded-2xl bg-[#C8592B]/10 flex items-center justify-center text-[#C8592B] flex-shrink-0">
                  <ShieldCheck size={32} />
                </div>

                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl md:text-3xl font-serif font-bold text-[#0f2e24] mb-2">Daily Foundation Powder</h3>
                  <p className="text-[#C8592B] font-medium text-sm uppercase mb-4">The Clinical Baseline</p>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6 max-w-2xl">
                     Delivers therapeutic doses of quercetin, vitamin C, and amino acids that would require too many capsules to take comfortably. The ultimate foundation.
                  </p>

                  <div className="flex flex-wrap justify-center md:justify-start gap-2">
                    {powderBenefits.map((benefit, i) => (
                      <span key={i} className="px-3 py-1.5 rounded-lg bg-[#E8EDE6] text-[#0f2e24] text-xs font-bold">
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex-shrink-0">
                  <button className="bg-[#0f2e24] text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:bg-[#C8592B] transition-colors">
                    View Supplement Facts
                  </button>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}