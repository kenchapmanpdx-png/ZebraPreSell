import { useMemo } from 'react';
import ZebraBackground from './ZebraBackground';
import { amFormulaIngredients, pmFormulaIngredients, powderIngredients } from '../data/ingredientData';

const amBenefits = ["Mitochondrial Energy", "Methylation Support", "Mast Cell Stabilization", "Connective Tissue"];
const pmBenefits = ["Collagen Cross-linking", "Overnight Repair", "Histamine Metabolism", "Relaxation Support"];
const powderBenefits = ["Mast Cell Stabilization", "Collagen Substrates", "MMP Inhibition", "ECM Protection"];

export default function ProductGrid() {
  const memoizedAmIngredients = useMemo(() => amFormulaIngredients, []);
  const memoizedPmIngredients = useMemo(() => pmFormulaIngredients, []);
  const memoizedPowderIngredients = useMemo(() => powderIngredients, []);

  return (
    <section id="products" className="pt-4 md:pt-12 pb-4 md:pb-8 relative overflow-hidden" style={{
      background: 'linear-gradient(180deg, #F3ECE1 0%, #E8DCC9 100%)'
    }}>
      <ZebraBackground />
      <div className="container mx-auto px-4 md:px-6 relative z-1">
        <div className="text-center mb-6 md:mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-lora font-bold text-terra mb-6" data-aos="fade-up">
            Our Products
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-terra to-[#89B317] mx-auto mb-6" data-aos="fade-up" data-aos-delay="100"></div>
          <p className="text-xl md:text-2xl text-forest/90 max-w-4xl mx-auto font-lora leading-relaxed" data-aos="fade-up" data-aos-delay="200">
            <strong>Comprehensive <span className="text-yellow-500">AM</span> and <span className="text-[#303051]">PM</span> formulas</strong> providing targeted support throughout the day and night, specifically designed for the unique needs of individuals with EDS and POTS.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* AM + PM Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
            {/* AM Formula Card */}
            <div 
              className="rounded-2xl p-6 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              style={{
                background: 'linear-gradient(135deg, #0f2e24 0%, #2d5a3d 50%, #0f2e24 100%)'
              }}
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-xl mb-3">
                ☀️
              </div>
              <h3 className="text-[#C8592B] text-xl md:text-2xl font-bold mb-1">ZebraWell AM Formula</h3>
              <p className="text-white/80 text-sm mb-3">Fuel + Focus</p>
              <p className="text-white/90 text-sm leading-relaxed mb-4">
                Targeted mitochondrial support, methylation optimization, and gentle 
                mast cell stabilization for sustained energy without overstimulation.
              </p>
              <div className="flex flex-wrap gap-1.5">
                {amBenefits.map((benefit, i) => (
                  <span key={i} className="bg-yellow-500 text-gray-900 px-2.5 py-1 rounded-full text-xs font-medium">
                    {benefit}
                  </span>
                ))}
              </div>
            </div>

            {/* PM Formula Card */}
            <div 
              className="rounded-2xl p-6 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              style={{
                background: 'linear-gradient(135deg, #0f2e24 0%, #2d5a3d 50%, #0f2e24 100%)'
              }}
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-xl mb-3">
                🌙
              </div>
              <h3 className="text-[#C8592B] text-xl md:text-2xl font-bold mb-1">ZebraWell PM Formula</h3>
              <p className="text-white/80 text-sm mb-3">Repair + Recover</p>
              <p className="text-white/90 text-sm leading-relaxed mb-4">
                Support overnight collagen synthesis and tissue repair with strategic 
                mineral timing and histamine metabolism support.
              </p>
              <div className="flex flex-wrap gap-1.5">
                {pmBenefits.map((benefit, i) => (
                  <span key={i} className="bg-[#5A5A85] text-white px-2.5 py-1 rounded-full text-xs font-medium">
                    {benefit}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Powder Row */}
          <div 
            className="rounded-2xl p-6 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            style={{
              background: 'linear-gradient(135deg, #0f2e24 0%, #2d5a3d 50%, #0f2e24 100%)'
            }}
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="flex items-start gap-5">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-xl flex-shrink-0">
                🥄
              </div>
              <div className="flex-1">
                <h3 className="text-[#C8592B] text-xl md:text-2xl font-bold mb-1">ZebraWell Daily Powder</h3>
                <p className="text-white/80 text-sm mb-3">Foundation + Protection</p>
                <p className="text-white/90 text-sm leading-relaxed mb-4">
                  High-dose mast cell stabilizers and collagen building blocks in a mixable powder. 
                  Delivers therapeutic doses of quercetin, vitamin C, and amino acids that would require too many capsules.
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {powderBenefits.map((benefit, i) => (
                    <span key={i} className="bg-[#2d5a3d] text-white px-2.5 py-1 rounded-full text-xs font-medium border border-white/30">
                      {benefit}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
