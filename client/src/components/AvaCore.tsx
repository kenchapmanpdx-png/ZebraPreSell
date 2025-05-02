import ZebraBackground from './ZebraBackground';

export default function AvaCore() { // Keeping function name for compatibility, but redesigning for earthy theme
  const ingredients = [
    {
      name: "Magnesium (Glycinate Chelate)",
      description: "Calms nerves, supports muscle function and energy metabolism.",
      dosage: "250 mg",
      note: "Essential for POTS and EDS support"
    },
    {
      name: "Vitamin C (Buffered Ascorbates)",
      description: "Antioxidant, supports collagen, immune function, and adrenal health.",
      dosage: "1000 mg",
      note: "Critical for connective tissue integrity"
    },
    {
      name: "CoQ10 (Ubiquinone)",
      description: "Supports mitochondrial energy and cardiovascular health.",
      dosage: "100 mg",
      note: "Vital for energy production"
    },
    {
      name: "Taurine (L-Taurine)",
      description: "Modulates nervous system, stabilizes cell membranes, helps with POTS.",
      dosage: "500 mg",
      note: "Supports cellular stability"
    },
    {
      name: "Vitamin D3",
      description: "Supports immune, bone, and mood regulation.",
      dosage: "2000 IU / 50 mcg",
      note: "Important for overall wellness"
    },
    {
      name: "Vitamin K2 (MK-7)",
      description: "Directs calcium to bones, supports cardiovascular health.",
      dosage: "100 mcg",
      note: "Works synergistically with D3"
    },
    {
      name: "Zinc (Bisglycinate)",
      description: "Supports immune, skin, and tissue repair.",
      dosage: "15 mg",
      note: "Gentle, bioavailable form"
    },
    {
      name: "PEA (Micronized)",
      description: "Natural anti-inflammatory, pain-relieving, and mast cell modulating.",
      dosage: "400 mg",
      note: "Comfort and inflammation support"
    },
    {
      name: "B-Complex Vitamins",
      description: "Full spectrum of bioavailable B vitamins for energy, methylation and nervous system.",
      dosage: "Various",
      note: "Includes P-5-P, 5-MTHF, and Methylcobalamin"
    },
    {
      name: "Potassium Citrate",
      description: "Important for nerve and muscle function; often low in POTS.",
      dosage: "99 mg",
      note: "Electrolyte balance support"
    },
    {
      name: "Trace Minerals",
      description: "Including Selenium, Molybdenum and other cofactors for enzyme function.",
      dosage: "Various",
      note: "Complete mineral support"
    }
  ];

  return (
    <section id="avacore" className="py-16 md:py-24 relative overflow-hidden">
      <ZebraBackground />
      <div className="container mx-auto px-6 relative z-1">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-lora mb-6 fade-in text-forest">ZebraWell™ Core Formula</h2>
          <div className="flex flex-wrap justify-center items-center gap-2 mb-4 fade-in">
            <span className="px-3 py-1 rounded-full bg-sage-light text-xs text-forest font-medium mx-1">Natural Ingredients</span>
            <span className="px-3 py-1 rounded-full bg-terra-light text-xs text-terra-dark font-medium mx-1">Pure & Organic</span>
            <span className="px-3 py-1 rounded-full bg-sage-light text-xs text-forest font-medium mx-1">Allergen-Free</span>
          </div>
          <p className="text-lg text-neutral-dark/80 fade-in max-w-2xl mx-auto font-lora">
            Our flagship daily formula (6–8 capsules/day) designed specifically for EDS, POTS, and MCAS support. 
            ZebraWell Core delivers essential nutrients in their most bioavailable forms to support 
            foundational mitochondrial, nervous system, and connective tissue health.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ingredients.map((ingredient, index) => (
            <div 
              key={index}
              className="bg-earth-cream rounded-xl shadow-lg p-6 md:p-8 border-t-4 border-sage fade-in transform transition-all hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="flex items-center mb-6">
                <div className="relative w-16 h-20 mr-4">
                  <div className="absolute inset-0 rounded-lg bg-sage/5 border border-sage/20"></div>
                  <div className="absolute bottom-0 left-0 right-0 h-3/4 bg-gradient-to-t from-sage/20 to-sage/5 rounded-b-lg rounded-t-3xl shadow-inner"></div>
                  <div className="absolute inset-0 flex items-center justify-center flex-col">
                    <div className="w-8 h-8 rounded-full border-2 border-sage/30 bg-white flex items-center justify-center mb-1">
                      <i className="fas fa-flask text-sm text-sage"></i>
                    </div>
                    <div className="text-[8px] font-bold text-forest">ZebraWell™</div>
                    <div className="text-[6px] text-sage">Core Formula</div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-lora text-forest">{ingredient.name}</h3>
                  <div className="flex items-center">
                    <span className="text-sm text-neutral-dark/70 font-medium">Dosage: {ingredient.dosage}</span>
                  </div>
                </div>
              </div>
              
              <p className="text-neutral-dark/80 mb-3">{ingredient.description}</p>
              <hr className="my-3 border-neutral-medium" />
              <div className="flex items-center mb-1">
                <i className="fas fa-vial text-sage mr-2"></i>
                <p className="text-sm font-medium">{ingredient.note}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
