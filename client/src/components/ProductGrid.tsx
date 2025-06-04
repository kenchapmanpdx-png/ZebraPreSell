import ZebraBackground from './ZebraBackground';

export default function ProductGrid() {
  return (
    <section id="products" className="pt-1 pb-4 md:pt-2 md:pb-6 relative overflow-hidden">
      <ZebraBackground />
      <div className="container mx-auto px-6 relative z-1">
        <h2 className="text-3xl md:text-4xl font-lora text-forest text-center mb-4 fade-in">Products</h2>
        <p className="text-xl text-neutral-dark/80 fade-in max-w-2xl mx-auto font-lora mb-8 text-center">
          Our comprehensive AM and PM formulas provide targeted support throughout the day, addressing the unique needs of individuals with EDS, POTS, and MCAS.
        </p>
        <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto">
          {/* Left Column - AM Formula */}
          <div className="w-full md:w-1/2 flex flex-col gap-8">
            <div id="am-formula" className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl shadow-lg p-6 md:p-8 border-t-4 border-yellow-400 fade-in transform transition-all hover:-translate-y-2 hover:shadow-xl">
              <div className="flex items-center mb-6">
                <div className="relative w-16 h-20 mr-4">
                  <div className="absolute inset-0 rounded-lg bg-yellow-100/50 border border-yellow-200"></div>
                  <div className="absolute bottom-0 left-0 right-0 h-3/4 bg-gradient-to-t from-yellow-200/40 to-yellow-100/20 rounded-b-lg rounded-t-3xl shadow-inner"></div>
                  <div className="absolute inset-0 flex items-center justify-center flex-col">
                    <div className="w-8 h-8 rounded-full border-2 border-yellow-400/40 bg-white flex items-center justify-center mb-1">
                      <i className="fas fa-sun text-sm text-yellow-600"></i>
                    </div>
                    <div className="text-[8px] font-bold text-forest">ZebraWell™</div>
                    <div className="text-[6px] text-yellow-600">AM Formula</div>
                  </div>
                </div>
                <div>
                  <h3 className="text-3xl font-lora text-orange-600">ZebraWell AM Formula</h3>
                  <div className="flex items-center">
                    <span className="text-sm text-neutral-dark/70 font-medium">Morning energizing formula</span>
                    <span className="ml-3 px-2 py-0.5 rounded-md bg-yellow-100 text-xs text-orange-600 font-medium">Daily Foundation</span>
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <ul className="space-y-2">
                  {[
                    { name: "Magnesium Malate", dosage: "1,500 mg", description: "Essential for energy production and muscle function" },
                    { name: "CoQ10 (Ubiquinol)", dosage: "300 mg", description: "Active form of CoQ10 for mitochondrial energy support" },
                    { name: "Vitamin D3", dosage: "4,000 IU", description: "Supports immune function and bone health" },
                    { name: "Vitamin K2 (MK-7)", dosage: "200 mcg", description: "Directs calcium to bones and away from arteries" },
                    { name: "PEA (Ultra-micronized)", dosage: "600 mg", description: "Natural pain relief and inflammation support" },
                    { name: "Alpha-GPC", dosage: "300 mg", description: "Cognitive support and acetylcholine production" },
                    { name: "ALCAR", dosage: "600 mg", description: "Brain and mitochondrial support" },
                    { name: "Taurine", dosage: "500 mg", description: "Cardiovascular and nervous system support" },
                    { name: "Thiamine (Benfotiamine)", dosage: "150 mg", description: "Advanced B1 for nervous system health" },
                    { name: "B2 (Riboflavin-5-Phosphate)", dosage: "10 mg", description: "Active B2 for energy metabolism" },
                    { name: "B6 (Pyridoxal-5-Phosphate)", dosage: "10 mg", description: "Active B6 for neurotransmitter support" },
                    { name: "B12 (Methyl + Adenosyl)", dosage: "500 mcg", description: "Dual-form B12 for optimal absorption" },
                    { name: "Folate (L-5-MTHF)", dosage: "800 mcg", description: "Active folate for methylation support" },
                    { name: "Zinc Glycinate", dosage: "60 mg", description: "Highly absorbable zinc for immune support" },
                    { name: "Copper Glycinate", dosage: "10 mg", description: "Balanced copper for connective tissue health" },
                    { name: "Silicon (ch-OSA)", dosage: "200 mg", description: "Bioavailable silicon for connective tissue support" }
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <i className="fas fa-flask text-orange-500 mt-1 mr-3 flex-shrink-0"></i>
                      <div className="w-full">
                        <div className="flex justify-between items-start">
                          <span className="font-medium text-sm">{item.name}</span>
                          <span className="text-xs text-orange-600 bg-yellow-100 px-2 py-0.5 rounded ml-2 flex-shrink-0">{item.dosage}</span>
                        </div>
                        <p className="text-xs text-neutral-dark/70">{item.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              
              <button className="w-full py-3 px-6 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-lg transition-colors flex items-center justify-center">
                <i className="fas fa-info-circle mr-2"></i>
                Product Details
              </button>
            </div>
          </div>
          
          {/* Right Column - PM Formula */}
          <div className="w-full md:w-1/2 flex flex-col gap-8">
            <div id="pm-formula" className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl shadow-lg p-6 md:p-8 border-t-4 border-forest fade-in transform transition-all hover:-translate-y-2 hover:shadow-xl">
              <div className="flex items-center mb-6">
                <div className="relative w-16 h-20 mr-4">
                  <div className="absolute inset-0 rounded-lg bg-forest/5 border border-forest/20"></div>
                  <div className="absolute bottom-0 left-0 right-0 h-3/4 bg-gradient-to-t from-forest/20 to-forest/5 rounded-b-lg rounded-t-3xl shadow-inner"></div>
                  <div className="absolute inset-0 flex items-center justify-center flex-col">
                    <div className="w-8 h-8 rounded-full border-2 border-forest/30 bg-white flex items-center justify-center mb-1">
                      <i className="fas fa-moon text-sm text-forest"></i>
                    </div>
                    <div className="text-[8px] font-bold text-forest">ZebraWell™</div>
                    <div className="text-[6px] text-forest">PM Formula</div>
                  </div>
                </div>
                <div>
                  <h3 className="text-3xl font-lora text-forest">ZebraWell PM Formula</h3>
                  <div className="flex items-center">
                    <span className="text-sm text-neutral-dark/70 font-medium">Evening recovery formula</span>
                    <span className="ml-3 px-2 py-0.5 rounded-md bg-forest-light text-xs text-forest font-medium">Recovery Support</span>
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <ul className="space-y-2">
                  {[
                    { name: "Magnesium Malate", dosage: "1,500 mg", description: "Supports relaxation and muscle recovery" },
                    { name: "PEA (Ultra-micronized)", dosage: "600 mg", description: "Enhanced evening dose for pain relief" },
                    { name: "Alpha-GPC", dosage: "300 mg", description: "Supports brain health and recovery" },
                    { name: "ALCAR", dosage: "600 mg", description: "Enhanced evening dose for neurological support" },
                    { name: "Taurine", dosage: "500 mg", description: "Promotes relaxation and cardiovascular health" },
                    { name: "Hyaluronic Acid", dosage: "300 mg", description: "Joint lubrication and tissue hydration" },
                    { name: "R-Lipoic Acid", dosage: "200 mg", description: "Powerful antioxidant for nerve and mitochondrial health" },
                    { name: "L-Theanine", dosage: "150 mg", description: "Promotes calm focus and relaxation" }
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <i className="fas fa-flask text-forest mt-1 mr-3 flex-shrink-0"></i>
                      <div className="w-full">
                        <div className="flex justify-between items-start">
                          <span className="font-medium text-sm">{item.name}</span>
                          <span className="text-xs text-forest bg-forest-light/50 px-2 py-0.5 rounded ml-2 flex-shrink-0">{item.dosage}</span>
                        </div>
                        <p className="text-xs text-neutral-dark/70">{item.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              
              <button className="w-full py-3 px-6 bg-forest hover:bg-forest/90 text-white font-medium rounded-lg transition-colors flex items-center justify-center">
                <i className="fas fa-info-circle mr-2"></i>
                Product Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}