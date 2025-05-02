export default function AvaCore() { // Keeping function name for compatibility, but redesigning for earthy theme
  const ingredients = [
    {
      name: "Magnesium (Glycinate Chelate)",
      description: "Calms nerves, supports muscle function and energy metabolism.",
      dosage: "250mg per serving",
      note: "Essential for POTS and EDS support",
      image: "https://images.unsplash.com/photo-1577898094685-68a85153f6a9?auto=format&fit=crop&w=600&h=400&q=80"
    },
    {
      name: "Vitamin C (Buffered Ascorbates)",
      description: "Antioxidant, supports collagen, immune function, and adrenal health.",
      dosage: "1000mg per serving",
      note: "Critical for connective tissue integrity",
      image: "https://images.unsplash.com/photo-1584362917165-526a968579e8?auto=format&fit=crop&w=600&h=400&q=80"
    },
    {
      name: "CoQ10 (Ubiquinone)",
      description: "Supports mitochondrial energy and cardiovascular health.",
      dosage: "100mg per serving",
      note: "Vital for energy and cardiac function",
      image: "https://images.unsplash.com/photo-1579613832125-5d34a13ffe2a?auto=format&fit=crop&w=600&h=400&q=80"
    },
    {
      name: "PEA (Micronized)",
      description: "Natural anti-inflammatory, pain-relieving, and mast cell modulating.",
      dosage: "400mg per serving",
      note: "Supports comfort and inflammation balance",
      image: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&w=600&h=400&q=80"
    },
    {
      name: "Taurine (L-Taurine)",
      description: "Modulates nervous system, stabilizes cell membranes, helps with POTS.",
      dosage: "500mg per serving",
      note: "Key support for sensitive systems",
      image: "https://images.unsplash.com/photo-1616048056617-93b94a339009?auto=format&fit=crop&w=600&h=400&q=80"
    }
  ];

  return (
    <section id="avacore" className="py-16 md:py-24 grain-texture">
      <div className="container mx-auto px-6">
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
              className="bg-earth-cream border border-neutral-medium rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1 fade-in"
            >
              <div className="h-48 bg-neutral-light flex items-center justify-center p-6 relative">
                <div className="absolute top-3 right-3 px-2 py-0.5 bg-terra-light rounded text-xs text-terra-dark font-medium">
                  {ingredient.dosage}
                </div>
                <div className="relative w-32 h-40">
                  <div className="absolute inset-0 rounded-lg bg-sage/5 natural-texture border border-sage/20"></div>
                  <div className="absolute bottom-0 left-0 right-0 h-3/4 bg-gradient-to-t from-sage/20 to-sage/5 rounded-b-lg rounded-t-3xl shadow-inner"></div>
                  <div className="absolute inset-0 flex items-center justify-center flex-col">
                    <div className="w-16 h-16 rounded-full border-2 border-sage/30 bg-white flex items-center justify-center mb-2">
                      <i className="fas fa-leaf text-2xl text-sage"></i>
                    </div>
                    <div className="text-xs font-bold text-forest">ZebraWell™</div>
                    <div className="text-[10px] text-sage">Core Formula</div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-lora font-medium mb-2 text-forest">{ingredient.name}</h3>
                <p className="text-neutral-dark/80 mb-3">{ingredient.description}</p>
                <div>
                  <hr className="my-3 border-neutral-medium" />
                  <div className="flex items-center mb-1">
                    <i className="fas fa-seedling text-sage mr-2"></i>
                    <p className="text-sm font-medium">{ingredient.note}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
