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
      name: "Zinc (Bisglycinate or Picolinate)",
      description: "Supports immune, skin, and tissue repair.",
      dosage: "15 mg",
      note: "Gentle, bioavailable form"
    },
    {
      name: "Thiamine HCl",
      description: "Boosts nerve signaling and energy production.",
      dosage: "50 mg",
      note: "Especially helpful for POTS"
    },
    {
      name: "Riboflavin-5'-Phosphate",
      description: "Supports energy production and cellular function.",
      dosage: "25 mg",
      note: "Active form of B2"
    },
    {
      name: "Niacinamide",
      description: "Helps cellular repair and energy metabolism.",
      dosage: "50 mg",
      note: "Gentle form of B3"
    },
    {
      name: "Pantothenic Acid",
      description: "Supports adrenal function and energy production.",
      dosage: "100 mg",
      note: "Stress support vitamin"
    },
    {
      name: "P-5-P (B6)",
      description: "Active form of B6, supports over 100 enzyme reactions.",
      dosage: "25 mg",
      note: "Neurotransmitter support"
    },
    {
      name: "Folate (L-5-MTHF)",
      description: "Bioavailable form of folate for methylation support.",
      dosage: "400 mcg DFE",
      note: "Methylation cycle support"
    },
    {
      name: "Methylcobalamin (B12)",
      description: "Active form of B12, supports nervous system and energy.",
      dosage: "500 mcg",
      note: "Neurological support"
    },
    {
      name: "Biotin",
      description: "Supports metabolism, skin, hair and nails.",
      dosage: "300 mcg",
      note: "Supports connective tissues"
    },
    {
      name: "PEA (Micronized)",
      description: "Natural anti-inflammatory and mast cell modulating.",
      dosage: "400 mg",
      note: "Comfort and inflammation support"
    },
    {
      name: "Potassium Citrate",
      description: "Important for nerve and muscle function; often low in POTS.",
      dosage: "99 mg",
      note: "Electrolyte balance support"
    },
    {
      name: "Selenium",
      description: "Antioxidant mineral supporting thyroid and immune function.",
      dosage: "100 mcg",
      note: "Antioxidant enzyme support"
    },
    {
      name: "Molybdenum",
      description: "Cofactor for enzymes that metabolize sulfites and toxins.",
      dosage: "50 mcg",
      note: "Detoxification support"
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-earth-cream rounded-xl shadow-lg p-6 md:p-8 border-t-4 border-forest fade-in transform transition-all hover:-translate-y-2 hover:shadow-xl lg:col-span-3">
            <div className="flex items-center mb-6">
              <div className="relative w-16 h-20 mr-4">
                <div className="absolute inset-0 rounded-lg bg-sage/5 border border-sage/20"></div>
                <div className="absolute bottom-0 left-0 right-0 h-3/4 bg-gradient-to-t from-sage/20 to-sage/5 rounded-b-lg rounded-t-3xl shadow-inner"></div>
                <div className="absolute inset-0 flex items-center justify-center flex-col">
                  <div className="w-8 h-8 rounded-full border-2 border-forest/30 bg-white flex items-center justify-center mb-1">
                    <i className="fas fa-flask text-sm text-forest"></i>
                  </div>
                  <div className="text-[8px] font-bold text-forest">ZebraWell™</div>
                  <div className="text-[6px] text-sage">Core Formula</div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-lora text-forest">Core Formula</h3>
                <div className="flex items-center">
                  <span className="text-sm text-neutral-dark/70 font-medium">Dosage: 6-8 capsules/day</span>
                  <span className="ml-3 px-2 py-0.5 rounded-md bg-forest-light text-xs text-forest font-medium">Foundational Support</span>
                </div>
              </div>
            </div>
            
            <ul className="mb-6 space-y-2">
              {ingredients.map((ingredient, index) => (
                <li key={index} className="flex items-start">
                  <i className="fas fa-flask text-forest mt-1 mr-3"></i>
                  <div className="w-full">
                    <div className="flex justify-between items-start">
                      <span className="font-medium">{ingredient.name}</span>
                      <span className="text-xs text-forest bg-forest-light/50 px-2 py-0.5 rounded ml-2">{ingredient.dosage}</span>
                    </div>
                    <p className="text-sm text-neutral-dark/70">{ingredient.description}</p>
                    <p className="text-xs text-neutral-dark/90 italic mt-1">{ingredient.note}</p>
                  </div>
                </li>
              ))}
            </ul>
            
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
