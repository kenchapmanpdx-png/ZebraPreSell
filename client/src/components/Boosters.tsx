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
    <section id="products" className="py-20 bg-[hsl(var(--capstone-gray))]">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--capstone-slate))] mb-4">Targeted Supplements</h2>
          <div className="w-24 h-1 bg-[hsl(var(--capstone-blue))] mx-auto mb-6"></div>
          <p className="text-[hsl(var(--capstone-gray-dark))] max-w-3xl mx-auto">
            Our specialized boosters address specific symptoms and needs, formulated specifically for the unique challenges of rare conditions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* POTS Booster */}
          <div className="product-card">
            <div className="product-image relative">
              <div className="absolute inset-0 bg-[hsl(var(--capstone-blue))] opacity-90"></div>
              <div className="relative p-6 text-white z-10">
                <span className="inline-block px-3 py-1 bg-white/20 rounded-md text-sm font-medium mb-2">Energy Support</span>
                <h3 className="text-2xl font-bold mb-1">POTS Booster</h3>
                <p className="text-white/80 mb-3">Support for autonomic dysfunction</p>
                <div className="flex items-center text-sm">
                  <span className="bg-white/30 px-2 py-1 rounded">3-4 capsules/day</span>
                </div>
              </div>
            </div>
            
            <div className="product-content">
              <ul className="space-y-4 mb-6">
                {potsBooster.slice(0, 4).map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-[hsl(var(--capstone-blue))] mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-[hsl(var(--capstone-slate))]">{item.name}</span>
                        <span className="text-xs bg-[hsl(var(--capstone-gray))] px-2 py-0.5 rounded">{item.dosage}</span>
                      </div>
                      <p className="text-sm text-[hsl(var(--capstone-gray-dark))]">{item.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
              
              <div className="flex justify-between items-center border-t border-[hsl(var(--capstone-gray))] pt-4">
                <span className="text-[hsl(var(--capstone-slate))] font-bold">$42.99</span>
                <button className="btn btn-primary text-sm py-2 px-4">View Details</button>
              </div>
            </div>
          </div>
          
          {/* EDS Booster */}
          <div className="product-card">
            <div className="product-image relative">
              <div className="absolute inset-0 bg-[hsl(var(--capstone-highlight))] opacity-90"></div>
              <div className="relative p-6 text-white z-10">
                <span className="inline-block px-3 py-1 bg-white/20 rounded-md text-sm font-medium mb-2">Connective Tissue</span>
                <h3 className="text-2xl font-bold mb-1">hEDS Booster</h3>
                <p className="text-white/80 mb-3">Support for connective tissue health</p>
                <div className="flex items-center text-sm">
                  <span className="bg-white/30 px-2 py-1 rounded">1-3 capsules/day</span>
                </div>
              </div>
            </div>
            
            <div className="product-content">
              <ul className="space-y-4 mb-6">
                {edsBooster.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-[hsl(var(--capstone-highlight))] mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-[hsl(var(--capstone-slate))]">{item.name}</span>
                        <span className="text-xs bg-[hsl(var(--capstone-gray))] px-2 py-0.5 rounded">{item.dosage}</span>
                      </div>
                      <p className="text-sm text-[hsl(var(--capstone-gray-dark))]">{item.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
              
              <div className="flex justify-between items-center border-t border-[hsl(var(--capstone-gray))] pt-4">
                <span className="text-[hsl(var(--capstone-slate))] font-bold">$38.99</span>
                <button className="btn btn-primary text-sm py-2 px-4">View Details</button>
              </div>
            </div>
          </div>
          
          {/* MCAS Booster */}
          <div className="product-card">
            <div className="product-image relative">
              <div className="absolute inset-0 bg-[hsl(var(--capstone-navy))] opacity-90"></div>
              <div className="relative p-6 text-white z-10">
                <span className="inline-block px-3 py-1 bg-white/20 rounded-md text-sm font-medium mb-2">Histamine Control</span>
                <h3 className="text-2xl font-bold mb-1">MCAS Booster</h3>
                <p className="text-white/80 mb-3">Support for mast cell stabilization</p>
                <div className="flex items-center text-sm">
                  <span className="bg-white/30 px-2 py-1 rounded">1-2 capsules/day</span>
                </div>
              </div>
            </div>
            
            <div className="product-content">
              <ul className="space-y-4 mb-6">
                {mcasBooster.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-[hsl(var(--capstone-navy))] mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-[hsl(var(--capstone-slate))]">{item.name}</span>
                        <span className="text-xs bg-[hsl(var(--capstone-gray))] px-2 py-0.5 rounded">{item.dosage}</span>
                      </div>
                      <p className="text-sm text-[hsl(var(--capstone-gray-dark))]">{item.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
              
              <div className="flex justify-between items-center border-t border-[hsl(var(--capstone-gray))] pt-4">
                <span className="text-[hsl(var(--capstone-slate))] font-bold">$34.99</span>
                <button className="btn btn-primary text-sm py-2 px-4">View Details</button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <a href="#contact" className="btn btn-accent">Request Free Samples</a>
        </div>
      </div>
    </section>
  );
}
