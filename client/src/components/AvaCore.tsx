export default function AvaCore() {
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
    <section id="avacore" className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 fade-in">ZebraWell™ Core Formula</h2>
          <p className="text-lg text-neutral-dark/80 fade-in">
            Our flagship daily formula (6–8 capsules/day) designed specifically for EDS, POTS, and MCAS support. 
            ZebraWell Core delivers essential nutrients in their most bioavailable forms to support 
            foundational mitochondrial, nervous system, and connective tissue health.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ingredients.map((ingredient, index) => (
            <div 
              key={index}
              className="bg-white border border-neutral-medium rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1 fade-in group"
            >
              <div className="h-48 bg-lavender/10 flex items-center justify-center p-6">
                <img 
                  src={ingredient.image} 
                  alt={ingredient.name}
                  className="max-h-full object-contain"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{ingredient.name}</h3>
                <p className="text-neutral-dark/80 mb-3">{ingredient.description}</p>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <hr className="my-3 border-neutral-medium" />
                  <p className="text-sm text-teal font-semibold">{ingredient.dosage}</p>
                  <p className="text-sm italic">{ingredient.note}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
