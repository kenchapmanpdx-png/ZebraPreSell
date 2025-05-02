export default function Boosters() {
  const potsBooster = [
    { name: "L-Carnitine L-Tartrate", description: "Transports fatty acids into mitochondria for energy; supports fatigue" },
    { name: "D-Ribose", description: "Replenishes cellular ATP levels, aids in energy recovery" },
    { name: "Thiamine HCl", description: "Boosts mitochondrial energy, often deficient in POTS patients" },
    { name: "PQQ", description: "Stimulates new mitochondrial growth and repair" },
    { name: "Potassium Citrate", description: "Critical for blood pressure, fluid balance, and nerve function" },
    { name: "R-Lipoic Acid", description: "Recycles antioxidants, supports mitochondrial and nerve health" },
    { name: "Hesperidin", description: "Strengthens blood vessels, improves circulation and autonomic tone" }
  ];

  const edsBooster = [
    { name: "Copper", description: "Required for collagen cross-linking and elastin integrity" },
    { name: "Manganese", description: "Cofactor for connective tissue enzymes" },
    { name: "Silicon (from Bamboo)", description: "Supports synthesis of collagen, skin, bones, and joints" },
    { name: "Hyaluronic Acid", description: "Lubricates joints and hydrates skin/connective tissues" },
    { name: "Vitamin C", description: "Essential for collagen production and antioxidant support" }
  ];
  
  const mcasBooster = [
    { name: "Quercetin", description: "Natural mast cell stabilizer and anti-inflammatory" },
    { name: "Luteolin", description: "Anti-inflammatory, neuroprotective, and MCAS-supportive bioflavonoid" },
    { name: "Nettle Leaf Extract", description: "Reduces histamine and allergic responses, anti-inflammatory" }
  ];

  return (
    <section id="boosters" className="py-16 md:py-24 bg-medical-gray relative">
      <div className="absolute inset-0 bg-white/60 z-0"></div>
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 fade-in">Targeted Boosters</h2>
        <p className="text-lg text-center max-w-3xl mx-auto mb-12 text-neutral-dark/80 fade-in">
          Our specialized boosters address specific symptoms and needs, designed to complement ZebraWell Core Formula with targeted support.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* POTS Booster */}
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 border-t-4 border-teal fade-in transform transition-all hover:-translate-y-2 hover:shadow-xl">
            <div className="flex items-center mb-6">
              <div className="relative w-16 h-20 mr-4">
                <div className="absolute inset-0 rounded-lg bg-teal/5 zebra-pattern border border-teal/20"></div>
                <div className="absolute bottom-0 left-0 right-0 h-3/4 bg-gradient-to-t from-teal/20 to-teal/5 rounded-b-lg rounded-t-3xl shadow-inner"></div>
                <div className="absolute inset-0 flex items-center justify-center flex-col">
                  <div className="w-8 h-8 rounded-full border-2 border-teal/30 bg-white flex items-center justify-center mb-1">
                    <i className="fas fa-heartbeat text-sm text-teal"></i>
                  </div>
                  <div className="text-[8px] font-bold text-teal">ZebraWell™</div>
                  <div className="text-[6px] text-teal/70">POTS Booster</div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold">POTS Booster</h3>
                <div className="flex items-center">
                  <span className="text-sm text-neutral-dark/70 font-medium">Dosage: 3-4 capsules/day</span>
                  <span className="ml-3 px-2 py-0.5 rounded-md bg-medical-blue/10 text-xs text-medical-blue font-semibold">Energy Support</span>
                </div>
              </div>
            </div>
            
            <ul className="mb-6 space-y-2">
              {potsBooster.map((item, index) => (
                <li key={index} className="flex items-start">
                  <i className="fas fa-flask text-medical-blue mt-1 mr-3"></i>
                  <div>
                    <span className="font-semibold">{item.name}</span>
                    <p className="text-sm text-neutral-dark/70">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
            
            <button className="w-full py-3 px-6 bg-medical-blue hover:bg-medical-blue/90 text-white font-semibold rounded-lg transition-colors flex items-center justify-center">
              <i className="fas fa-microscope mr-2"></i>
              View Research
            </button>
          </div>
          
          {/* EDS Booster */}
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 border-t-4 border-lavender fade-in transform transition-all hover:-translate-y-2 hover:shadow-xl">
            <div className="flex items-center mb-6">
              <div className="relative w-16 h-20 mr-4">
                <div className="absolute inset-0 rounded-lg bg-lavender/5 zebra-pattern border border-lavender/20"></div>
                <div className="absolute bottom-0 left-0 right-0 h-3/4 bg-gradient-to-t from-lavender/20 to-lavender/5 rounded-b-lg rounded-t-3xl shadow-inner"></div>
                <div className="absolute inset-0 flex items-center justify-center flex-col">
                  <div className="w-8 h-8 rounded-full border-2 border-lavender/30 bg-white flex items-center justify-center mb-1">
                    <i className="fas fa-bone text-sm text-lavender"></i>
                  </div>
                  <div className="text-[8px] font-bold text-lavender">ZebraWell™</div>
                  <div className="text-[6px] text-lavender/70">hEDS Booster</div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold">hEDS Booster</h3>
                <div className="flex items-center">
                  <span className="text-sm text-neutral-dark/70 font-medium">Dosage: 1-3 capsules/day</span>
                  <span className="ml-3 px-2 py-0.5 rounded-md bg-medical-blue/10 text-xs text-medical-blue font-semibold">Connective Tissue</span>
                </div>
              </div>
            </div>
            
            <ul className="mb-6 space-y-2">
              {edsBooster.map((item, index) => (
                <li key={index} className="flex items-start">
                  <i className="fas fa-flask text-medical-blue mt-1 mr-3"></i>
                  <div>
                    <span className="font-semibold">{item.name}</span>
                    <p className="text-sm text-neutral-dark/70">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
            
            <button className="w-full py-3 px-6 bg-medical-blue hover:bg-medical-blue/90 text-white font-semibold rounded-lg transition-colors flex items-center justify-center">
              <i className="fas fa-microscope mr-2"></i>
              View Research
            </button>
          </div>
          
          {/* MCAS Booster */}
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 border-t-4 border-teal-light fade-in transform transition-all hover:-translate-y-2 hover:shadow-xl">
            <div className="flex items-center mb-6">
              <div className="relative w-16 h-20 mr-4">
                <div className="absolute inset-0 rounded-lg bg-teal-light/5 zebra-pattern border border-teal-light/20"></div>
                <div className="absolute bottom-0 left-0 right-0 h-3/4 bg-gradient-to-t from-teal-light/20 to-teal-light/5 rounded-b-lg rounded-t-3xl shadow-inner"></div>
                <div className="absolute inset-0 flex items-center justify-center flex-col">
                  <div className="w-8 h-8 rounded-full border-2 border-teal-light/30 bg-white flex items-center justify-center mb-1">
                    <i className="fas fa-leaf text-sm text-teal-light"></i>
                  </div>
                  <div className="text-[8px] font-bold text-teal-light">ZebraWell™</div>
                  <div className="text-[6px] text-teal-light/70">MCAS Booster</div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold">MCAS Booster</h3>
                <div className="flex items-center">
                  <span className="text-sm text-neutral-dark/70 font-medium">Dosage: 1-2 capsules/day</span>
                  <span className="ml-3 px-2 py-0.5 rounded-md bg-medical-blue/10 text-xs text-medical-blue font-semibold">Histamine Control</span>
                </div>
              </div>
            </div>
            
            <ul className="mb-6 space-y-2">
              {mcasBooster.map((item, index) => (
                <li key={index} className="flex items-start">
                  <i className="fas fa-flask text-medical-blue mt-1 mr-3"></i>
                  <div>
                    <span className="font-semibold">{item.name}</span>
                    <p className="text-sm text-neutral-dark/70">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
            
            <button className="w-full py-3 px-6 bg-medical-blue hover:bg-medical-blue/90 text-white font-semibold rounded-lg transition-colors flex items-center justify-center">
              <i className="fas fa-microscope mr-2"></i>
              View Research
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
