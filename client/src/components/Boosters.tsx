export default function Boosters() {
  const amFormula = [
    { name: "Magnesium Malate", description: "Supports muscle relaxation, energy production; reduces cramps and pain in EDS", dosage: "1,500 mg" },
    { name: "CoQ10 (Ubiquinol)", description: "Enhances energy production; supports heart health and reduces oxidative stress in POTS", dosage: "300 mg" },
    { name: "Vitamin D3", description: "Promotes bone health, immune function; supports joint stability in EDS", dosage: "4,000 IU" },
    { name: "Vitamin K2 (MK-7)", description: "Directs calcium to bones; supports vascular health and joint integrity in EDS", dosage: "200 mcg" },
    { name: "PEA (Ultra-micronized)", description: "Reduces chronic pain, inflammation; alleviates EDS-related joint pain", dosage: "600 mg" },
    { name: "Alpha-GPC", description: "Enhances cognitive function; improves brain fog in POTS", dosage: "300 mg" },
    { name: "ALCAR", description: "Boosts energy, nerve health; helps with fatigue and clarity in POTS", dosage: "600 mg" },
    { name: "Taurine", description: "Regulates heart rhythm; stabilizes autonomic dysfunction in POTS", dosage: "500 mg" },
    { name: "Thiamine", description: "Supports nerve function, energy; reduces fatigue in POTS", dosage: "150 mg" },
    { name: "B2", description: "Aids energy production; supports headache prevention and fatigue reduction", dosage: "10 mg" },
    { name: "B6", description: "Supports neurotransmitter synthesis; helps nerve health and mood stability", dosage: "10 mg" },
    { name: "B12", description: "Supports nerve health, energy; reduces fatigue in POTS", dosage: "500 mcg" },
    { name: "Folate", description: "Supports methylation, energy; reduces homocysteine levels", dosage: "800 mcg" },
    { name: "Zinc Glycinate", description: "Supports immune function, collagen formation; aids connective tissue in EDS", dosage: "~60 mg" },
    { name: "Copper Glycinate", description: "Supports collagen, elastin; aids connective tissue and vascular health in EDS", dosage: "~10 mg" },
    { name: "Silicon (ch-OSA)", description: "Enhances collagen synthesis; supports joint and skin health in EDS", dosage: "~200 mg" }
  ];

  const pmFormula = [
    { name: "Magnesium Malate", description: "Promotes muscle relaxation, sleep; reduces nighttime cramps in EDS", dosage: "1,500 mg" },
    { name: "PEA (Ultra-micronized)", description: "Reduces evening pain, inflammation; supports restful sleep", dosage: "600 mg" },
    { name: "Alpha-GPC", description: "Supports brain health during sleep; reduces brain fog for POTS", dosage: "300 mg" },
    { name: "ALCAR", description: "Supports nerve repair, energy; aids in fatigue reduction", dosage: "600 mg" },
    { name: "Taurine", description: "Calms nervous system; promotes relaxation and sleep in POTS", dosage: "500 mg" },
    { name: "Hyaluronic Acid", description: "Supports joint lubrication; reduces stiffness in EDS during rest", dosage: "300 mg" },
    { name: "R-Lipoic Acid", description: "Reduces oxidative stress; aids nighttime recovery and pain reduction", dosage: "200 mg" },
    { name: "L-Theanine", description: "Promotes relaxation, sleep; reduces autonomic overstimulation in POTS", dosage: "150 mg" }
  ];

  return (
    <section id="products" className="py-20 bg-white relative">
      <div className="absolute inset-0 bg-[url('@assets/zebra-pattern.svg')] opacity-30 z-0" style={{ backgroundSize: '400px 400px', transform: 'rotate(30deg)' }}></div>
      <div className="absolute inset-0 bg-[url('@assets/zebra-pattern.svg')] opacity-30 z-0" style={{ backgroundSize: '300px 300px', transform: 'rotate(-15deg)' }}></div>
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--inw-text))] mb-4 uppercase tracking-wide">Targeted Formulations</h2>
          <div className="w-24 h-1 inw-gradient mx-auto mb-6"></div>
          <p className="text-[hsl(var(--inw-gray-dark))] max-w-3xl mx-auto">
            Our comprehensive AM/PM system supports your day and night cycles, formulated specifically for the unique challenges of rare conditions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* AM Formula */}
          <div className="product-card group overflow-hidden bg-white transition-all duration-300 hover:shadow-lg">
            <div className="product-image relative">
              <div className="absolute inset-0 bg-[hsl(var(--inw-teal))]"></div>
              <div className="relative p-6 text-white z-10">
                <span className="inline-block px-3 py-1 bg-white/20 rounded-sm text-xs uppercase tracking-wider font-medium mb-2">Daytime Support</span>
                <h3 className="text-2xl font-bold mb-1 uppercase tracking-wide">AvaCore AM Formula</h3>
                <p className="text-white/80 mb-3">Comprehensive daytime support for EDS, POTS & related conditions</p>
                <div className="flex items-center text-xs">
                  <span className="bg-white/30 px-2 py-1 rounded-sm">4-6 capsules each morning</span>
                </div>
              </div>
            </div>
            
            <div className="product-content">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                {amFormula.map((item, index) => (
                  <div key={index} className="bg-[hsl(var(--inw-teal))] bg-opacity-80 rounded-sm p-2 shadow-sm">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-semibold text-white">{item.name}</span>
                      <span className="text-xs bg-white px-2 py-0.5 rounded-sm text-[hsl(var(--inw-teal))] font-medium">{item.dosage}</span>
                    </div>
                    <p className="text-xs text-white text-opacity-90">{item.description}</p>
                  </div>
                ))}
              </div>
              
              <div className="flex justify-between items-center border-t border-[hsl(var(--inw-gray))] pt-4">
                <span className="text-[hsl(var(--inw-teal))] font-bold">$64.99</span>
                <button className="btn btn-primary text-xs uppercase tracking-wider py-2 px-4">View All Ingredients</button>
              </div>
            </div>
          </div>
          
          {/* PM Formula */}
          <div className="product-card group overflow-hidden bg-white transition-all duration-300 hover:shadow-lg">
            <div className="product-image relative">
              <div className="absolute inset-0 bg-[hsl(var(--inw-green))]"></div>
              <div className="relative p-6 text-white z-10">
                <span className="inline-block px-3 py-1 bg-white/20 rounded-sm text-xs uppercase tracking-wider font-medium mb-2">Evening Support</span>
                <h3 className="text-2xl font-bold mb-1 uppercase tracking-wide">AvaCore PM Formula</h3>
                <p className="text-white/80 mb-3">Nighttime recovery and sleep support for EDS, POTS & related conditions</p>
                <div className="flex items-center text-xs">
                  <span className="bg-white/30 px-2 py-1 rounded-sm">3-4 capsules each evening</span>
                </div>
              </div>
            </div>
            
            <div className="product-content">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                {pmFormula.map((item, index) => (
                  <div key={index} className="bg-[hsl(var(--inw-green))] bg-opacity-80 rounded-sm p-2 shadow-sm">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-semibold text-white">{item.name}</span>
                      <span className="text-xs bg-white px-2 py-0.5 rounded-sm text-[hsl(var(--inw-green))] font-medium">{item.dosage}</span>
                    </div>
                    <p className="text-xs text-white text-opacity-90">{item.description}</p>
                  </div>
                ))}
              </div>
              
              <div className="flex justify-between items-center border-t border-[hsl(var(--inw-gray))] pt-4">
                <span className="text-[hsl(var(--inw-green))] font-bold">$54.99</span>
                <button className="btn btn-accent text-xs uppercase tracking-wider py-2 px-4">View All Ingredients</button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-[hsl(var(--inw-teal-light))] p-6 rounded-lg inline-block max-w-2xl">
            <h3 className="text-xl font-bold text-[hsl(var(--inw-teal))] mb-3">Complete System Package</h3>
            <p className="text-[hsl(var(--inw-text))] mb-4">
              Get the complete day & night system for optimal 24-hour support for your EDS, POTS & related conditions.
            </p>
            <div className="text-2xl font-bold text-[hsl(var(--inw-teal))] mb-4">$109.99 <span className="text-sm text-[hsl(var(--inw-gray-dark))] font-normal">(Save $10)</span></div>
            <a href="#contact" className="btn btn-accent text-sm uppercase tracking-wider py-3 px-6">Request Free Samples</a>
          </div>
        </div>
      </div>
    </section>
  );
}
