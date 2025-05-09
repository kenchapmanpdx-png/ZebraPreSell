export default function Boosters() {
  const potsBooster = [
    { name: "L-Carnitine L-Tartrate", description: "Transports fatty acids into mitochondria for energy; supports fatigue", dosage: "1000 mg" },
    { name: "D-Ribose", description: "Replenishes cellular ATP levels, aids in energy recovery", dosage: "500 mg" },
    { name: "Thiamine HCl", description: "Boosts mitochondrial energy, often deficient in POTS patients", dosage: "50 mg" },
    { name: "PQQ", description: "Stimulates new mitochondrial growth and repair", dosage: "10 mg" },
    { name: "Potassium Citrate", description: "Critical for blood pressure, fluid balance, and nerve function", dosage: "250 mg" },
    { name: "R-Lipoic Acid", description: "Recycles antioxidants, supports mitochondrial and nerve health", dosage: "150 mg" },
    { name: "Hesperidin", description: "Strengthens blood vessels, improves circulation and autonomic tone", dosage: "150 mg" }
  ];

  const edsBooster = [
    { name: "Copper", description: "Required for collagen cross-linking and elastin integrity", dosage: "1 mg" },
    { name: "Manganese", description: "Cofactor for connective tissue enzymes", dosage: "2 mg" },
    { name: "Silicon (from Bamboo)", description: "Supports synthesis of collagen, skin, bones, and joints", dosage: "10 mg" },
    { name: "Hyaluronic Acid", description: "Lubricates joints and hydrates skin/connective tissues", dosage: "100 mg" },
    { name: "Vitamin C", description: "Essential for collagen production and antioxidant support", dosage: "1000 mg" }
  ];
  
  const mcasBooster = [
    { name: "Quercetin", description: "Natural mast cell stabilizer and anti-inflammatory", dosage: "500 mg" },
    { name: "Luteolin", description: "Anti-inflammatory, neuroprotective, and MCAS-supportive bioflavonoid", dosage: "100 mg" },
    { name: "Nettle Leaf Extract", description: "Reduces histamine and allergic responses, anti-inflammatory", dosage: "200 mg" }
  ];

  return (
    <section id="products" className="py-20 bg-[hsl(var(--inw-gray-light))]">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--inw-text))] mb-4 uppercase tracking-wide">Targeted Formulations</h2>
          <div className="w-24 h-1 inw-gradient mx-auto mb-6"></div>
          <p className="text-[hsl(var(--inw-gray-dark))] max-w-3xl mx-auto">
            Our specialized boosters address specific symptoms and needs, formulated specifically for the unique challenges of rare conditions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* POTS Booster */}
          <div className="product-card group overflow-hidden transition-all duration-300 hover:shadow-lg">
            <div className="product-image relative">
              <div className="absolute inset-0 bg-[hsl(var(--inw-teal))] opacity-90"></div>
              <div className="relative p-6 text-white z-10">
                <span className="inline-block px-3 py-1 bg-white/20 rounded-sm text-xs uppercase tracking-wider font-medium mb-2">Energy Support</span>
                <h3 className="text-2xl font-bold mb-1 uppercase tracking-wide">POTS Booster</h3>
                <p className="text-white/80 mb-3">Support for autonomic dysfunction</p>
                <div className="flex items-center text-xs">
                  <span className="bg-white/30 px-2 py-1 rounded-sm">3-4 capsules/day</span>
                </div>
              </div>
            </div>
            
            <div className="product-content">
              <ul className="space-y-4 mb-6">
                {potsBooster.slice(0, 4).map((item, index) => (
                  <li key={index} className="flex items-start bg-[hsla(var(--inw-teal),0.15)] rounded-sm p-3 shadow-sm">
                    <div className="w-1 h-8 bg-[hsl(var(--inw-teal))] mt-0 mr-3 flex-shrink-0"></div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-[hsl(var(--inw-teal))]">{item.name}</span>
                        <span className="text-xs bg-[hsl(var(--inw-teal))] px-2 py-0.5 rounded-sm text-white font-medium">{item.dosage}</span>
                      </div>
                      <p className="text-sm text-[hsl(var(--inw-gray-dark))]">{item.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
              
              <div className="flex justify-between items-center border-t border-[hsl(var(--inw-gray))] pt-4">
                <span className="text-[hsl(var(--inw-teal))] font-bold">$42.99</span>
                <button className="btn btn-primary text-xs uppercase tracking-wider py-2 px-4">View Details</button>
              </div>
            </div>
          </div>
          
          {/* EDS Booster */}
          <div className="product-card group overflow-hidden transition-all duration-300 hover:shadow-lg">
            <div className="product-image relative">
              <div className="absolute inset-0 bg-[hsl(var(--inw-green))] opacity-90"></div>
              <div className="relative p-6 text-white z-10">
                <span className="inline-block px-3 py-1 bg-white/20 rounded-sm text-xs uppercase tracking-wider font-medium mb-2">Connective Tissue</span>
                <h3 className="text-2xl font-bold mb-1 uppercase tracking-wide">hEDS Booster</h3>
                <p className="text-white/80 mb-3">Support for connective tissue health</p>
                <div className="flex items-center text-xs">
                  <span className="bg-white/30 px-2 py-1 rounded-sm">1-3 capsules/day</span>
                </div>
              </div>
            </div>
            
            <div className="product-content">
              <ul className="space-y-4 mb-6">
                {edsBooster.map((item, index) => (
                  <li key={index} className="flex items-start bg-[hsla(var(--inw-green-light),0.1)] rounded-sm p-3 shadow-sm">
                    <div className="w-1 h-8 bg-[hsl(var(--inw-green))] mt-0 mr-3 flex-shrink-0"></div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-[hsl(var(--inw-text))]">{item.name}</span>
                        <span className="text-xs bg-[hsl(var(--inw-gray-light))] px-2 py-0.5 rounded-sm text-[hsl(var(--inw-green))]">{item.dosage}</span>
                      </div>
                      <p className="text-sm text-[hsl(var(--inw-gray-dark))]">{item.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
              
              <div className="flex justify-between items-center border-t border-[hsl(var(--inw-gray))] pt-4">
                <span className="text-[hsl(var(--inw-green))] font-bold">$38.99</span>
                <button className="btn btn-accent text-xs uppercase tracking-wider py-2 px-4">View Details</button>
              </div>
            </div>
          </div>
          
          {/* MCAS Booster */}
          <div className="product-card group overflow-hidden transition-all duration-300 hover:shadow-lg">
            <div className="product-image relative">
              <div className="absolute inset-0 inw-gradient opacity-80"></div>
              <div className="relative p-6 text-white z-10">
                <span className="inline-block px-3 py-1 bg-white/20 rounded-sm text-xs uppercase tracking-wider font-medium mb-2">Histamine Control</span>
                <h3 className="text-2xl font-bold mb-1 uppercase tracking-wide">MCAS Booster</h3>
                <p className="text-white/80 mb-3">Support for mast cell stabilization</p>
                <div className="flex items-center text-xs">
                  <span className="bg-white/30 px-2 py-1 rounded-sm">1-2 capsules/day</span>
                </div>
              </div>
            </div>
            
            <div className="product-content">
              <ul className="space-y-4 mb-6">
                {mcasBooster.map((item, index) => (
                  <li key={index} className="flex items-start bg-[hsla(var(--inw-teal),0.05)] rounded-sm p-3 shadow-sm">
                    <div className="w-1 h-8 inw-gradient mt-0 mr-3 flex-shrink-0"></div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-[hsl(var(--inw-text))]">{item.name}</span>
                        <span className="text-xs bg-[hsl(var(--inw-gray-light))] px-2 py-0.5 rounded-sm text-[hsl(var(--inw-teal))]">{item.dosage}</span>
                      </div>
                      <p className="text-sm text-[hsl(var(--inw-gray-dark))]">{item.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
              
              <div className="flex justify-between items-center border-t border-[hsl(var(--inw-gray))] pt-4">
                <span className="text-[hsl(var(--inw-teal))] font-bold">$34.99</span>
                <button className="btn btn-primary text-xs uppercase tracking-wider py-2 px-4">View Details</button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <a href="#contact" className="btn btn-accent text-sm uppercase tracking-wider py-2 px-6">Request Free Samples</a>
        </div>
      </div>
    </section>
  );
}
