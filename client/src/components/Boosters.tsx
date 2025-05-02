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
    <section id="boosters" className="py-16 md:py-24 subtle-waves relative">
      <div className="absolute inset-0 bg-earth-cream/40 z-0"></div>
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-3xl md:text-4xl font-lora text-forest text-center mb-12 fade-in">Targeted Boosters</h2>
        <p className="text-lg text-center max-w-3xl mx-auto mb-12 text-neutral-dark/80 font-lora fade-in">
          Our specialized boosters address specific symptoms and needs, designed to complement ZebraWell Core Formula with targeted support.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* POTS Booster */}
          <div className="bg-earth-cream rounded-xl shadow-lg p-6 md:p-8 border-t-4 border-sage fade-in transform transition-all hover:-translate-y-2 hover:shadow-xl">
            <div className="flex items-center mb-6">
              <div className="relative w-16 h-20 mr-4">
                <div className="absolute inset-0 rounded-lg bg-sage/5 natural-texture border border-sage/20"></div>
                <div className="absolute bottom-0 left-0 right-0 h-3/4 bg-gradient-to-t from-sage/20 to-sage/5 rounded-b-lg rounded-t-3xl shadow-inner"></div>
                <div className="absolute inset-0 flex items-center justify-center flex-col">
                  <div className="w-8 h-8 rounded-full border-2 border-sage/30 bg-white flex items-center justify-center mb-1">
                    <i className="fas fa-heartbeat text-sm text-sage"></i>
                  </div>
                  <div className="text-[8px] font-bold text-forest">ZebraWell™</div>
                  <div className="text-[6px] text-sage">POTS Booster</div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-lora text-forest">POTS Booster</h3>
                <div className="flex items-center">
                  <span className="text-sm text-neutral-dark/70 font-medium">Dosage: 3-4 capsules/day</span>
                  <span className="ml-3 px-2 py-0.5 rounded-md bg-sage-light text-xs text-sage-dark font-medium">Energy Support</span>
                </div>
              </div>
            </div>
            
            <ul className="mb-6 space-y-2">
              {potsBooster.map((item, index) => (
                <li key={index} className="flex items-start">
                  <i className="fas fa-leaf text-sage mt-1 mr-3"></i>
                  <div className="w-full">
                    <div className="flex justify-between items-start">
                      <span className="font-medium">{item.name}</span>
                      <span className="text-xs text-sage-dark bg-sage-light/50 px-2 py-0.5 rounded ml-2">{item.dosage}</span>
                    </div>
                    <p className="text-sm text-neutral-dark/70">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
            
            <button className="w-full py-3 px-6 bg-terra hover:bg-terra-dark text-white font-medium rounded-lg transition-colors flex items-center justify-center">
              <i className="fas fa-seedling mr-2"></i>
              View Details
            </button>
          </div>
          
          {/* EDS Booster */}
          <div className="bg-earth-cream rounded-xl shadow-lg p-6 md:p-8 border-t-4 border-terra fade-in transform transition-all hover:-translate-y-2 hover:shadow-xl">
            <div className="flex items-center mb-6">
              <div className="relative w-16 h-20 mr-4">
                <div className="absolute inset-0 rounded-lg bg-terra/5 natural-texture border border-terra/20"></div>
                <div className="absolute bottom-0 left-0 right-0 h-3/4 bg-gradient-to-t from-terra/20 to-terra/5 rounded-b-lg rounded-t-3xl shadow-inner"></div>
                <div className="absolute inset-0 flex items-center justify-center flex-col">
                  <div className="w-8 h-8 rounded-full border-2 border-terra/30 bg-white flex items-center justify-center mb-1">
                    <i className="fas fa-bone text-sm text-terra"></i>
                  </div>
                  <div className="text-[8px] font-bold text-forest">ZebraWell™</div>
                  <div className="text-[6px] text-terra">hEDS Booster</div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-lora text-forest">hEDS Booster</h3>
                <div className="flex items-center">
                  <span className="text-sm text-neutral-dark/70 font-medium">Dosage: 1-3 capsules/day</span>
                  <span className="ml-3 px-2 py-0.5 rounded-md bg-terra-light text-xs text-terra-dark font-medium">Connective Tissue</span>
                </div>
              </div>
            </div>
            
            <ul className="mb-6 space-y-2">
              {edsBooster.map((item, index) => (
                <li key={index} className="flex items-start">
                  <i className="fas fa-leaf text-terra mt-1 mr-3"></i>
                  <div className="w-full">
                    <div className="flex justify-between items-start">
                      <span className="font-medium">{item.name}</span>
                      <span className="text-xs text-terra-dark bg-terra-light/50 px-2 py-0.5 rounded ml-2">{item.dosage}</span>
                    </div>
                    <p className="text-sm text-neutral-dark/70">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
            
            <button className="w-full py-3 px-6 bg-terra hover:bg-terra-dark text-white font-medium rounded-lg transition-colors flex items-center justify-center">
              <i className="fas fa-seedling mr-2"></i>
              View Details
            </button>
          </div>
          
          {/* MCAS Booster */}
          <div className="bg-earth-cream rounded-xl shadow-lg p-6 md:p-8 border-t-4 border-forest fade-in transform transition-all hover:-translate-y-2 hover:shadow-xl">
            <div className="flex items-center mb-6">
              <div className="relative w-16 h-20 mr-4">
                <div className="absolute inset-0 rounded-lg bg-forest/5 natural-texture border border-forest/20"></div>
                <div className="absolute bottom-0 left-0 right-0 h-3/4 bg-gradient-to-t from-forest/20 to-forest/5 rounded-b-lg rounded-t-3xl shadow-inner"></div>
                <div className="absolute inset-0 flex items-center justify-center flex-col">
                  <div className="w-8 h-8 rounded-full border-2 border-forest/30 bg-white flex items-center justify-center mb-1">
                    <i className="fas fa-leaf text-sm text-forest"></i>
                  </div>
                  <div className="text-[8px] font-bold text-forest">ZebraWell™</div>
                  <div className="text-[6px] text-sage">MCAS Booster</div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-lora text-forest">MCAS Booster</h3>
                <div className="flex items-center">
                  <span className="text-sm text-neutral-dark/70 font-medium">Dosage: 1-2 capsules/day</span>
                  <span className="ml-3 px-2 py-0.5 rounded-md bg-forest-light text-xs text-forest font-medium">Histamine Control</span>
                </div>
              </div>
            </div>
            
            <ul className="mb-6 space-y-2">
              {mcasBooster.map((item, index) => (
                <li key={index} className="flex items-start">
                  <i className="fas fa-flask text-forest mt-1 mr-3"></i>
                  <div className="w-full">
                    <div className="flex justify-between items-start">
                      <span className="font-medium">{item.name}</span>
                      <span className="text-xs text-forest bg-forest-light/50 px-2 py-0.5 rounded ml-2">{item.dosage}</span>
                    </div>
                    <p className="text-sm text-neutral-dark/70">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
            
            <button className="w-full py-3 px-6 bg-forest hover:bg-forest/90 text-white font-medium rounded-lg transition-colors flex items-center justify-center">
              <i className="fas fa-microscope mr-2"></i>
              Clinical Research
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
