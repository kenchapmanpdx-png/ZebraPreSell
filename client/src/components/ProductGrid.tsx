import ZebraBackground from './ZebraBackground';

export default function ProductGrid() {
  return (
    <section id="products" className="pt-1 pb-8 md:pt-2 md:pb-12 relative overflow-hidden">
      <ZebraBackground />
      <div className="container mx-auto px-6 relative z-1">
        <h2 className="text-3xl md:text-4xl font-lora text-forest text-center mb-4 fade-in">Products</h2>
        <p className="text-xl text-neutral-dark/80 fade-in max-w-2xl mx-auto font-lora mb-8 text-center">
          AvaCore ingredients are selected to support all three conditions. Boosters are then added to provide more targeted support.
        </p>
        <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto">
          {/* Left Column */}
          <div className="w-full md:w-1/2 flex flex-col gap-8">
            {/* Core Formula */}
            <div id="avacore" className="bg-earth-cream rounded-xl shadow-lg p-6 md:p-8 border-t-4 border-forest fade-in transform transition-all hover:-translate-y-2 hover:shadow-xl">
              <div className="flex items-center mb-6">
                <div className="relative w-16 h-20 mr-4">
                  <div className="absolute inset-0 rounded-lg bg-sage/5 border border-sage/20"></div>
                  <div className="absolute bottom-0 left-0 right-0 h-3/4 bg-gradient-to-t from-sage/20 to-sage/5 rounded-b-lg rounded-t-3xl shadow-inner"></div>
                  <div className="absolute inset-0 flex items-center justify-center flex-col">
                    <div className="w-8 h-8 rounded-full border-2 border-forest/30 bg-white flex items-center justify-center mb-1">
                      <i className="fas fa-flask text-sm text-forest"></i>
                    </div>
                    <div className="text-[8px] font-bold text-forest">ZebraWell™</div>
                    <div className="text-[6px] text-sage">AvaCore</div>
                  </div>
                </div>
                <div>
                  <h3 className="text-3xl font-lora text-forest">AvaCore</h3>
                  <div className="flex items-center">
                    <span className="text-sm text-neutral-dark/70 font-medium">Dosage: 6-8 capsules/day</span>
                    <span className="ml-3 px-2 py-0.5 rounded-md bg-forest-light text-xs text-forest font-medium">Foundational Support</span>
                  </div>
                </div>
              </div>
              
              <ul className="mb-6 space-y-2">
                {/* Core Formula ingredients */}
                <li className="flex items-start">
                  <i className="fas fa-flask text-forest mt-1 mr-3"></i>
                  <div className="w-full">
                    <div className="flex justify-between items-start">
                      <span className="font-medium">Magnesium (Glycinate Chelate)</span>
                      <span className="text-xs text-forest bg-forest-light/50 px-2 py-0.5 rounded ml-2">250 mg</span>
                    </div>
                    <p className="text-sm text-neutral-dark/70">Calms nerves, supports muscle function and energy metabolism</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-flask text-forest mt-1 mr-3"></i>
                  <div className="w-full">
                    <div className="flex justify-between items-start">
                      <span className="font-medium">Vitamin C (Buffered Ascorbates)</span>
                      <span className="text-xs text-forest bg-forest-light/50 px-2 py-0.5 rounded ml-2">1000 mg</span>
                    </div>
                    <p className="text-sm text-neutral-dark/70">Antioxidant, supports collagen, immune function, and adrenal health</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-flask text-forest mt-1 mr-3"></i>
                  <div className="w-full">
                    <div className="flex justify-between items-start">
                      <span className="font-medium">CoQ10 (Ubiquinone)</span>
                      <span className="text-xs text-forest bg-forest-light/50 px-2 py-0.5 rounded ml-2">100 mg</span>
                    </div>
                    <p className="text-sm text-neutral-dark/70">Supports mitochondrial energy and cardiovascular health</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-flask text-forest mt-1 mr-3"></i>
                  <div className="w-full">
                    <div className="flex justify-between items-start">
                      <span className="font-medium">Taurine (L-Taurine)</span>
                      <span className="text-xs text-forest bg-forest-light/50 px-2 py-0.5 rounded ml-2">500 mg</span>
                    </div>
                    <p className="text-sm text-neutral-dark/70">Modulates nervous system, stabilizes cell membranes, helps with POTS</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-flask text-forest mt-1 mr-3"></i>
                  <div className="w-full">
                    <div className="flex justify-between items-start">
                      <span className="font-medium">Vitamin D3</span>
                      <span className="text-xs text-forest bg-forest-light/50 px-2 py-0.5 rounded ml-2">2000 IU / 50 mcg</span>
                    </div>
                    <p className="text-sm text-neutral-dark/70">Supports immune, bone, and mood regulation</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-flask text-forest mt-1 mr-3"></i>
                  <div className="w-full">
                    <div className="flex justify-between items-start">
                      <span className="font-medium">Vitamin K2 (MK-7)</span>
                      <span className="text-xs text-forest bg-forest-light/50 px-2 py-0.5 rounded ml-2">100 mcg</span>
                    </div>
                    <p className="text-sm text-neutral-dark/70">Directs calcium to bones, supports cardiovascular health</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-flask text-forest mt-1 mr-3"></i>
                  <div className="w-full">
                    <div className="flex justify-between items-start">
                      <span className="font-medium">Zinc (Bisglycinate or Picolinate)</span>
                      <span className="text-xs text-forest bg-forest-light/50 px-2 py-0.5 rounded ml-2">15 mg</span>
                    </div>
                    <p className="text-sm text-neutral-dark/70">Supports immune, skin, and tissue repair</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-flask text-forest mt-1 mr-3"></i>
                  <div className="w-full">
                    <div className="flex justify-between items-start">
                      <span className="font-medium">Thiamine HCl</span>
                      <span className="text-xs text-forest bg-forest-light/50 px-2 py-0.5 rounded ml-2">50 mg</span>
                    </div>
                    <p className="text-sm text-neutral-dark/70">Boosts nerve signaling and energy production</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-flask text-forest mt-1 mr-3"></i>
                  <div className="w-full">
                    <div className="flex justify-between items-start">
                      <span className="font-medium">Riboflavin-5'-Phosphate</span>
                      <span className="text-xs text-forest bg-forest-light/50 px-2 py-0.5 rounded ml-2">25 mg</span>
                    </div>
                    <p className="text-sm text-neutral-dark/70">Supports energy production and cellular function</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-flask text-forest mt-1 mr-3"></i>
                  <div className="w-full">
                    <div className="flex justify-between items-start">
                      <span className="font-medium">Niacinamide</span>
                      <span className="text-xs text-forest bg-forest-light/50 px-2 py-0.5 rounded ml-2">50 mg</span>
                    </div>
                    <p className="text-sm text-neutral-dark/70">Helps cellular repair and energy metabolism</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-flask text-forest mt-1 mr-3"></i>
                  <div className="w-full">
                    <div className="flex justify-between items-start">
                      <span className="font-medium">Pantothenic Acid</span>
                      <span className="text-xs text-forest bg-forest-light/50 px-2 py-0.5 rounded ml-2">100 mg</span>
                    </div>
                    <p className="text-sm text-neutral-dark/70">Supports adrenal function and energy production</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-flask text-forest mt-1 mr-3"></i>
                  <div className="w-full">
                    <div className="flex justify-between items-start">
                      <span className="font-medium">P-5-P (B6)</span>
                      <span className="text-xs text-forest bg-forest-light/50 px-2 py-0.5 rounded ml-2">25 mg</span>
                    </div>
                    <p className="text-sm text-neutral-dark/70">Active form of B6, supports over 100 enzyme reactions</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-flask text-forest mt-1 mr-3"></i>
                  <div className="w-full">
                    <div className="flex justify-between items-start">
                      <span className="font-medium">Folate (L-5-MTHF)</span>
                      <span className="text-xs text-forest bg-forest-light/50 px-2 py-0.5 rounded ml-2">400 mcg DFE</span>
                    </div>
                    <p className="text-sm text-neutral-dark/70">Bioavailable form of folate for methylation support</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-flask text-forest mt-1 mr-3"></i>
                  <div className="w-full">
                    <div className="flex justify-between items-start">
                      <span className="font-medium">Methylcobalamin (B12)</span>
                      <span className="text-xs text-forest bg-forest-light/50 px-2 py-0.5 rounded ml-2">500 mcg</span>
                    </div>
                    <p className="text-sm text-neutral-dark/70">Active form of B12, supports nervous system and energy</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-flask text-forest mt-1 mr-3"></i>
                  <div className="w-full">
                    <div className="flex justify-between items-start">
                      <span className="font-medium">Biotin</span>
                      <span className="text-xs text-forest bg-forest-light/50 px-2 py-0.5 rounded ml-2">300 mcg</span>
                    </div>
                    <p className="text-sm text-neutral-dark/70">Supports metabolism, skin, hair and nails</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-flask text-forest mt-1 mr-3"></i>
                  <div className="w-full">
                    <div className="flex justify-between items-start">
                      <span className="font-medium">PEA (Micronized)</span>
                      <span className="text-xs text-forest bg-forest-light/50 px-2 py-0.5 rounded ml-2">400 mg</span>
                    </div>
                    <p className="text-sm text-neutral-dark/70">Natural anti-inflammatory and mast cell modulating</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-flask text-forest mt-1 mr-3"></i>
                  <div className="w-full">
                    <div className="flex justify-between items-start">
                      <span className="font-medium">Potassium Citrate</span>
                      <span className="text-xs text-forest bg-forest-light/50 px-2 py-0.5 rounded ml-2">99 mg</span>
                    </div>
                    <p className="text-sm text-neutral-dark/70">Important for nerve and muscle function; often low in POTS</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-flask text-forest mt-1 mr-3"></i>
                  <div className="w-full">
                    <div className="flex justify-between items-start">
                      <span className="font-medium">Selenium</span>
                      <span className="text-xs text-forest bg-forest-light/50 px-2 py-0.5 rounded ml-2">100 mcg</span>
                    </div>
                    <p className="text-sm text-neutral-dark/70">Antioxidant mineral supporting thyroid and immune function</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-flask text-forest mt-1 mr-3"></i>
                  <div className="w-full">
                    <div className="flex justify-between items-start">
                      <span className="font-medium">Molybdenum</span>
                      <span className="text-xs text-forest bg-forest-light/50 px-2 py-0.5 rounded ml-2">50 mcg</span>
                    </div>
                    <p className="text-sm text-neutral-dark/70">Cofactor for enzymes that metabolize sulfites and toxins</p>
                  </div>
                </li>
              </ul>
              
              <button className="w-full py-3 px-6 bg-forest hover:bg-forest/90 text-white font-medium rounded-lg transition-colors flex items-center justify-center">
                <i className="fas fa-info-circle mr-2"></i>
                Product Details
              </button>
            </div>
          </div>
          
          {/* Right Column */}
          <div className="w-full md:w-1/2 flex flex-col gap-8">
            {/* EDS Booster */}
            <div id="booster-eds" className="bg-earth-cream rounded-xl shadow-lg p-6 md:p-8 border-t-4 border-terra fade-in transform transition-all hover:-translate-y-2 hover:shadow-xl">
              <div className="flex items-center mb-6">
                <div className="relative w-16 h-20 mr-4">
                  <div className="absolute inset-0 rounded-lg bg-terra/5 border border-terra/20"></div>
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
                {[
                  { name: "Copper", description: "Required for collagen cross-linking and elastin integrity", dosage: "1 mg" },
                  { name: "Manganese", description: "Cofactor for connective tissue enzymes", dosage: "2 mg" },
                  { name: "Silicon (from Bamboo)", description: "Supports synthesis of collagen, skin, bones, and joints", dosage: "10 mg" },
                  { name: "Hyaluronic Acid", description: "Lubricates joints and hydrates skin/connective tissues", dosage: "100 mg" },
                  { name: "Vitamin C", description: "Essential for collagen production and antioxidant support", dosage: "1000 mg" }
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <i className="fas fa-flask text-terra mt-1 mr-3"></i>
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
              
              <button className="w-full py-3 px-6 bg-terra hover:bg-terra/90 text-white font-medium rounded-lg transition-colors flex items-center justify-center">
                <i className="fas fa-info-circle mr-2"></i>
                Product Details
              </button>
            </div>
            
            {/* POTS Booster */}
            <div id="booster-pots" className="bg-earth-cream rounded-xl shadow-lg p-6 md:p-8 border-t-4 border-sage fade-in transform transition-all hover:-translate-y-2 hover:shadow-xl">
              <div className="flex items-center mb-6">
                <div className="relative w-16 h-20 mr-4">
                  <div className="absolute inset-0 rounded-lg bg-sage/5 border border-sage/20"></div>
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
                {[
                  { name: "L-Carnitine L-Tartrate", description: "Transports fatty acids into mitochondria for energy; supports fatigue", dosage: "1000 mg" },
                  { name: "D-Ribose", description: "Replenishes cellular ATP levels, aids in energy recovery", dosage: "500 mg" },
                  { name: "Thiamine HCl", description: "Boosts mitochondrial energy, often deficient in POTS patients", dosage: "50 mg" },
                  { name: "PQQ", description: "Stimulates new mitochondrial growth and repair", dosage: "10 mg" },
                  { name: "Potassium Citrate", description: "Critical for blood pressure, fluid balance, and nerve function", dosage: "250 mg" },
                  { name: "R-Lipoic Acid", description: "Recycles antioxidants, supports mitochondrial and nerve health", dosage: "150 mg" },
                  { name: "Hesperidin", description: "Strengthens blood vessels, improves circulation and autonomic tone", dosage: "150 mg" }
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <i className="fas fa-flask text-sage mt-1 mr-3"></i>
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
              
              <button className="w-full py-3 px-6 bg-sage hover:bg-sage/90 text-white font-medium rounded-lg transition-colors flex items-center justify-center">
                <i className="fas fa-info-circle mr-2"></i>
                Product Details
              </button>
            </div>
            
            {/* MCAS Booster */}
            <div id="booster-mcas" className="bg-earth-cream rounded-xl shadow-lg p-6 md:p-8 border-t-4 border-forest fade-in transform transition-all hover:-translate-y-2 hover:shadow-xl">
              <div className="flex items-center mb-6">
                <div className="relative w-16 h-20 mr-4">
                  <div className="absolute inset-0 rounded-lg bg-forest/5 border border-forest/20"></div>
                  <div className="absolute bottom-0 left-0 right-0 h-3/4 bg-gradient-to-t from-forest/20 to-forest/5 rounded-b-lg rounded-t-3xl shadow-inner"></div>
                  <div className="absolute inset-0 flex items-center justify-center flex-col">
                    <div className="w-8 h-8 rounded-full border-2 border-forest/30 bg-white flex items-center justify-center mb-1">
                      <i className="fas fa-flask text-sm text-forest"></i>
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
                {[
                  { name: "Quercetin", description: "Natural mast cell stabilizer and anti-inflammatory", dosage: "500 mg" },
                  { name: "Luteolin", description: "Anti-inflammatory, neuroprotective, and MCAS-supportive bioflavonoid", dosage: "100 mg" },
                  { name: "Nettle Leaf Extract", description: "Reduces histamine and allergic responses, anti-inflammatory", dosage: "200 mg" }
                ].map((item, index) => (
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
                <i className="fas fa-info-circle mr-2"></i>
                Product Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}