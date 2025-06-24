import ZebraBackground from './ZebraBackground';

export default function Boosters() {
  const amFormula = [
    { name: "Magnesium Malate", description: "Essential for energy production and muscle function", dosage: "1,500 mg" },
    { name: "CoQ10 (Ubiquinol)", description: "Active form of CoQ10 for mitochondrial energy support", dosage: "300 mg" },
    { name: "Vitamin D3", description: "Supports immune function and bone health", dosage: "4,000 IU" },
    { name: "Vitamin K2 (MK-7)", description: "Directs calcium to bones and away from arteries", dosage: "200 mcg" },
    { name: "PEA (Ultra-micronized)", description: "Natural pain relief and inflammation support", dosage: "600 mg" },
    { name: "Alpha-GPC", description: "Cognitive support and acetylcholine production", dosage: "300 mg" },
    { name: "ALCAR", description: "Brain and mitochondrial support", dosage: "600 mg" },
    { name: "Taurine", description: "Cardiovascular and nervous system support", dosage: "500 mg" },
    { name: "Thiamine (Benfotiamine)", description: "Advanced B1 for nervous system health", dosage: "150 mg" },
    { name: "B2 (Riboflavin-5-Phosphate)", description: "Active B2 for energy metabolism", dosage: "10 mg" },
    { name: "B6 (Pyridoxal-5-Phosphate)", description: "Active B6 for neurotransmitter support", dosage: "10 mg" },
    { name: "B12 (Methyl + Adenosyl)", description: "Dual-form B12 for optimal absorption", dosage: "500 mcg" },
    { name: "Folate (L-5-MTHF)", description: "Active folate for methylation support", dosage: "800 mcg" },
    { name: "Zinc Glycinate", description: "Highly absorbable zinc for immune support", dosage: "60 mg" },
    { name: "Copper Glycinate", description: "Balanced copper for connective tissue health", dosage: "10 mg" },
    { name: "Silicon (ch-OSA)", description: "Bioavailable silicon for connective tissue support", dosage: "200 mg" }
  ];

  const pmFormula = [
    { name: "Magnesium Malate", description: "Supports relaxation and muscle recovery", dosage: "1,500 mg" },
    { name: "PEA (Ultra-micronized)", description: "Enhanced evening dose for pain relief", dosage: "600 mg" },
    { name: "Alpha-GPC", description: "Supports brain health and recovery", dosage: "300 mg" },
    { name: "ALCAR", description: "Enhanced evening dose for neurological support", dosage: "600 mg" },
    { name: "Taurine", description: "Promotes relaxation and cardiovascular health", dosage: "500 mg" },
    { name: "Hyaluronic Acid", description: "Joint lubrication and tissue hydration", dosage: "300 mg" },
    { name: "R-Lipoic Acid", description: "Powerful antioxidant for nerve and mitochondrial health", dosage: "200 mg" },
    { name: "L-Theanine", description: "Promotes calm focus and relaxation", dosage: "150 mg" }
  ];

  return (
    <section id="boosters" className="py-16 md:py-24 relative overflow-hidden">
      <ZebraBackground />
      <div className="container mx-auto px-6 relative z-1">
        <h2 className="text-3xl md:text-4xl font-lora text-forest text-center mb-12 fade-in">ZebraWell Formulas</h2>
        <p className="text-lg text-center max-w-3xl mx-auto mb-12 text-neutral-dark/80 font-lora fade-in">
          Our comprehensive AM and PM formulas provide targeted support throughout the day and night, addressing the unique needs of individuals with EDS and POTS.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* AM Formula */}
          <div className="bg-earth-cream rounded-xl shadow-lg p-6 md:p-8 border-t-4 border-sage fade-in transform transition-all hover:-translate-y-2 hover:shadow-xl" style={{ borderColor: '#74c365' }}>
            <div className="flex items-center mb-6">
              <div className="relative w-16 h-20 mr-4">
                <div className="absolute inset-0 rounded-lg bg-sage/5 border border-sage/20"></div>
                <div className="absolute bottom-0 left-0 right-0 h-3/4 bg-gradient-to-t from-sage/20 to-sage/5 rounded-b-lg rounded-t-3xl shadow-inner"></div>
                <div className="absolute inset-0 flex items-center justify-center flex-col">
                  <div className="w-8 h-8 rounded-full border-2 border-sage/30 bg-white flex items-center justify-center mb-1">
                    <i className="fas fa-sun text-sm text-sage"></i>
                  </div>
                  <div className="text-[8px] font-bold text-forest">ZebraWell</div>
                  <div className="text-[6px] text-sage">AM Formula</div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-lora text-forest">ZebraWell AM Formula</h3>
                <div className="flex items-center">
                  <span className="text-sm text-neutral-dark/70 font-medium">Morning energizing formula</span>
                  <span className="ml-3 px-2 py-0.5 rounded-md text-xs font-medium" style={{ backgroundColor: 'rgba(116, 195, 101, 0.2)', color: '#2a7635' }}>Daily Foundation</span>
                </div>
              </div>
            </div>
            
            <div className="mb-6 max-h-80 overflow-y-auto">
              <ul className="space-y-2">
                {amFormula.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <i className="fas fa-flask text-sage mt-1 mr-3 flex-shrink-0"></i>
                    <div className="w-full">
                      <div className="flex justify-between items-start">
                        <span className="font-medium text-sm">{item.name}</span>
                        <span className="text-xs text-sage-dark bg-sage-light/50 px-2 py-0.5 rounded ml-2 flex-shrink-0">{item.dosage}</span>
                      </div>
                      <p className="text-xs text-neutral-dark/70">{item.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            
            <button className="w-full py-3 px-6 text-white font-medium rounded-lg transition-colors flex items-center justify-center hover:bg-opacity-90" style={{ backgroundColor: '#74c365' }}>
              <i className="fas fa-info-circle mr-2"></i>
              Product Details
            </button>
          </div>
          
          {/* PM Formula */}
          <div className="bg-earth-cream rounded-xl shadow-lg p-6 md:p-8 border-t-4 border-forest fade-in transform transition-all hover:-translate-y-2 hover:shadow-xl">
            <div className="flex items-center mb-6">
              <div className="relative w-16 h-20 mr-4">
                <div className="absolute inset-0 rounded-lg bg-forest/5 border border-forest/20"></div>
                <div className="absolute bottom-0 left-0 right-0 h-3/4 bg-gradient-to-t from-forest/20 to-forest/5 rounded-b-lg rounded-t-3xl shadow-inner"></div>
                <div className="absolute inset-0 flex items-center justify-center flex-col">
                  <div className="w-8 h-8 rounded-full border-2 border-forest/30 bg-white flex items-center justify-center mb-1">
                    <i className="fas fa-moon text-sm text-forest"></i>
                  </div>
                  <div className="text-[8px] font-bold text-forest">ZebraWell</div>
                  <div className="text-[6px] text-forest">PM Formula</div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-lora text-forest">ZebraWell PM Formula</h3>
                <div className="flex items-center">
                  <span className="text-sm text-neutral-dark/70 font-medium">Evening recovery formula</span>
                  <span className="ml-3 px-2 py-0.5 rounded-md bg-forest-light text-xs text-forest font-medium">Recovery Support</span>
                </div>
              </div>
            </div>
            
            <div className="mb-6 max-h-80 overflow-y-auto">
              <ul className="space-y-2">
                {pmFormula.map((item, index) => (
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
    </section>
  );
}
