import ZebraBackground from './ZebraBackground';

export default function ProductGrid() {
  return (
    <section id="products" className="pt-1 pb-4 md:pt-2 md:pb-6 relative overflow-hidden">
      <ZebraBackground />
      <div className="container mx-auto px-6 relative z-1">
        <h2 className="text-3xl md:text-4xl font-lora text-forest text-center mb-4 fade-in">Products</h2>
        <p className="text-xl text-neutral-dark/80 fade-in max-w-2xl mx-auto font-lora mb-8 text-center">
          Our comprehensive AM and PM formulas provide targeted support throughout the day, addressing the unique needs of individuals with EDS, POTS, and MCAS.
        </p>
        <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto">
          {/* Left Column */}
          <div className="w-full md:w-1/2 flex flex-col gap-8">
            {/* AM Formula */}
            <div id="am-formula" className="bg-earth-cream rounded-xl shadow-lg p-6 md:p-8 border-t-4 border-sage fade-in transform transition-all hover:-translate-y-2 hover:shadow-xl" style={{ borderColor: '#74c365' }}>
              <div className="flex items-center mb-6">
                <div className="relative w-16 h-20 mr-4">
                  <div className="absolute inset-0 rounded-lg bg-sage/5 border border-sage/20"></div>
                  <div className="absolute bottom-0 left-0 right-0 h-3/4 bg-gradient-to-t from-sage/20 to-sage/5 rounded-b-lg rounded-t-3xl shadow-inner"></div>
                  <div className="absolute inset-0 flex items-center justify-center flex-col">
                    <div className="w-8 h-8 rounded-full border-2 border-sage/30 bg-white flex items-center justify-center mb-1">
                      <i className="fas fa-sun text-sm text-sage"></i>
                    </div>
                    <div className="text-[8px] font-bold text-forest">ZebraWell™</div>
                    <div className="text-[6px] text-sage">AM Formula</div>
                  </div>
                </div>
                <div>
                  <h3 className="text-3xl font-lora text-forest">ZebraWell AM Formula</h3>
                  <div className="flex items-center">
                    <span className="text-sm text-neutral-dark/70 font-medium">Morning energizing formula</span>
                    <span className="ml-3 px-2 py-0.5 rounded-md text-xs font-medium" style={{ backgroundColor: 'rgba(116, 195, 101, 0.2)', color: '#2a7635' }}>Daily Foundation</span>
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <i className="fas fa-flask text-sage mt-1 mr-3 flex-shrink-0"></i>
                    <div className="w-full">
                      <div className="flex justify-between items-start">
                        <span className="font-medium text-sm">Magnesium Malate</span>
                        <span className="text-xs text-sage-dark bg-sage-light/50 px-2 py-0.5 rounded ml-2 flex-shrink-0">1,500 mg</span>
                      </div>
                      <p className="text-xs text-neutral-dark/70">Essential for energy production and muscle function</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-flask text-sage mt-1 mr-3 flex-shrink-0"></i>
                    <div className="w-full">
                      <div className="flex justify-between items-start">
                        <span className="font-medium text-sm">CoQ10 (Ubiquinol)</span>
                        <span className="text-xs text-sage-dark bg-sage-light/50 px-2 py-0.5 rounded ml-2 flex-shrink-0">300 mg</span>
                      </div>
                      <p className="text-xs text-neutral-dark/70">Active form of CoQ10 for mitochondrial energy support</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-flask text-sage mt-1 mr-3 flex-shrink-0"></i>
                    <div className="w-full">
                      <div className="flex justify-between items-start">
                        <span className="font-medium text-sm">Vitamin D3</span>
                        <span className="text-xs text-sage-dark bg-sage-light/50 px-2 py-0.5 rounded ml-2 flex-shrink-0">4,000 IU</span>
                      </div>
                      <p className="text-xs text-neutral-dark/70">Supports immune function and bone health</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-flask text-sage mt-1 mr-3 flex-shrink-0"></i>
                    <div className="w-full">
                      <div className="flex justify-between items-start">
                        <span className="font-medium text-sm">Vitamin K2 (MK-7)</span>
                        <span className="text-xs text-sage-dark bg-sage-light/50 px-2 py-0.5 rounded ml-2 flex-shrink-0">200 mcg</span>
                      </div>
                      <p className="text-xs text-neutral-dark/70">Directs calcium to bones and away from arteries</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-flask text-sage mt-1 mr-3 flex-shrink-0"></i>
                    <div className="w-full">
                      <div className="flex justify-between items-start">
                        <span className="font-medium text-sm">PEA (Ultra-micronized)</span>
                        <span className="text-xs text-sage-dark bg-sage-light/50 px-2 py-0.5 rounded ml-2 flex-shrink-0">600 mg</span>
                      </div>
                      <p className="text-xs text-neutral-dark/70">Natural pain relief and inflammation support</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-flask text-sage mt-1 mr-3 flex-shrink-0"></i>
                    <div className="w-full">
                      <div className="flex justify-between items-start">
                        <span className="font-medium text-sm">Alpha-GPC</span>
                        <span className="text-xs text-sage-dark bg-sage-light/50 px-2 py-0.5 rounded ml-2 flex-shrink-0">300 mg</span>
                      </div>
                      <p className="text-xs text-neutral-dark/70">Cognitive support and acetylcholine production</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-flask text-sage mt-1 mr-3 flex-shrink-0"></i>
                    <div className="w-full">
                      <div className="flex justify-between items-start">
                        <span className="font-medium text-sm">ALCAR</span>
                        <span className="text-xs text-sage-dark bg-sage-light/50 px-2 py-0.5 rounded ml-2 flex-shrink-0">600 mg</span>
                      </div>
                      <p className="text-xs text-neutral-dark/70">Brain and mitochondrial support</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-flask text-sage mt-1 mr-3 flex-shrink-0"></i>
                    <div className="w-full">
                      <div className="flex justify-between items-start">
                        <span className="font-medium text-sm">Taurine</span>
                        <span className="text-xs text-sage-dark bg-sage-light/50 px-2 py-0.5 rounded ml-2 flex-shrink-0">500 mg</span>
                      </div>
                      <p className="text-xs text-neutral-dark/70">Cardiovascular and nervous system support</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-flask text-sage mt-1 mr-3 flex-shrink-0"></i>
                    <div className="w-full">
                      <div className="flex justify-between items-start">
                        <span className="font-medium text-sm">Thiamine (Benfotiamine)</span>
                        <span className="text-xs text-sage-dark bg-sage-light/50 px-2 py-0.5 rounded ml-2 flex-shrink-0">150 mg</span>
                      </div>
                      <p className="text-xs text-neutral-dark/70">Advanced B1 for nervous system health</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-flask text-sage mt-1 mr-3 flex-shrink-0"></i>
                    <div className="w-full">
                      <div className="flex justify-between items-start">
                        <span className="font-medium text-sm">B2 (Riboflavin-5-Phosphate)</span>
                        <span className="text-xs text-sage-dark bg-sage-light/50 px-2 py-0.5 rounded ml-2 flex-shrink-0">10 mg</span>
                      </div>
                      <p className="text-xs text-neutral-dark/70">Active B2 for energy metabolism</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-flask text-sage mt-1 mr-3 flex-shrink-0"></i>
                    <div className="w-full">
                      <div className="flex justify-between items-start">
                        <span className="font-medium text-sm">B6 (Pyridoxal-5-Phosphate)</span>
                        <span className="text-xs text-sage-dark bg-sage-light/50 px-2 py-0.5 rounded ml-2 flex-shrink-0">10 mg</span>
                      </div>
                      <p className="text-xs text-neutral-dark/70">Active B6 for neurotransmitter support</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-flask text-sage mt-1 mr-3 flex-shrink-0"></i>
                    <div className="w-full">
                      <div className="flex justify-between items-start">
                        <span className="font-medium text-sm">B12 (Methyl + Adenosyl)</span>
                        <span className="text-xs text-sage-dark bg-sage-light/50 px-2 py-0.5 rounded ml-2 flex-shrink-0">500 mcg</span>
                      </div>
                      <p className="text-xs text-neutral-dark/70">Dual-form B12 for optimal absorption</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-flask text-sage mt-1 mr-3 flex-shrink-0"></i>
                    <div className="w-full">
                      <div className="flex justify-between items-start">
                        <span className="font-medium text-sm">Folate (L-5-MTHF)</span>
                        <span className="text-xs text-sage-dark bg-sage-light/50 px-2 py-0.5 rounded ml-2 flex-shrink-0">800 mcg</span>
                      </div>
                      <p className="text-xs text-neutral-dark/70">Active folate for methylation support</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-flask text-sage mt-1 mr-3 flex-shrink-0"></i>
                    <div className="w-full">
                      <div className="flex justify-between items-start">
                        <span className="font-medium text-sm">Zinc Glycinate</span>
                        <span className="text-xs text-sage-dark bg-sage-light/50 px-2 py-0.5 rounded ml-2 flex-shrink-0">60 mg</span>
                      </div>
                      <p className="text-xs text-neutral-dark/70">Highly absorbable zinc for immune support</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-flask text-sage mt-1 mr-3 flex-shrink-0"></i>
                    <div className="w-full">
                      <div className="flex justify-between items-start">
                        <span className="font-medium text-sm">Copper Glycinate</span>
                        <span className="text-xs text-sage-dark bg-sage-light/50 px-2 py-0.5 rounded ml-2 flex-shrink-0">10 mg</span>
                      </div>
                      <p className="text-xs text-neutral-dark/70">Balanced copper for connective tissue health</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-flask text-sage mt-1 mr-3 flex-shrink-0"></i>
                    <div className="w-full">
                      <div className="flex justify-between items-start">
                        <span className="font-medium text-sm">Silicon (ch-OSA)</span>
                        <span className="text-xs text-sage-dark bg-sage-light/50 px-2 py-0.5 rounded ml-2 flex-shrink-0">200 mg</span>
                      </div>
                      <p className="text-xs text-neutral-dark/70">Bioavailable silicon for connective tissue support</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <button className="w-full py-3 px-6 bg-forest hover:bg-forest/90 text-white font-medium rounded-lg transition-colors flex items-center justify-center">
                <i className="fas fa-info-circle mr-2"></i>
                Product Details
              </button>
            </div>
          </div>
          
          {/* Right Column */}
          <div className="w-full md:w-1/2 flex flex-col gap-8">
            {/* PM Formula */}
            <div id="pm-formula" className="bg-earth-cream rounded-xl shadow-lg p-6 md:p-8 border-t-4 border-forest fade-in transform transition-all hover:-translate-y-2 hover:shadow-xl">
              <div className="flex items-center mb-6">
                <div className="relative w-16 h-20 mr-4">
                  <div className="absolute inset-0 rounded-lg bg-forest/5 border border-forest/20"></div>
                  <div className="absolute bottom-0 left-0 right-0 h-3/4 bg-gradient-to-t from-forest/20 to-forest/5 rounded-b-lg rounded-t-3xl shadow-inner"></div>
                  <div className="absolute inset-0 flex items-center justify-center flex-col">
                    <div className="w-8 h-8 rounded-full border-2 border-forest/30 bg-white flex items-center justify-center mb-1">
                      <i className="fas fa-moon text-sm text-forest"></i>
                    </div>
                    <div className="text-[8px] font-bold text-forest">ZebraWell™</div>
                    <div className="text-[6px] text-forest">PM Formula</div>
                  </div>
                </div>
                <div>
                  <h3 className="text-3xl font-lora text-forest">ZebraWell PM Formula</h3>
                  <div className="flex items-center">
                    <span className="text-sm text-neutral-dark/70 font-medium">Evening recovery formula</span>
                    <span className="ml-3 px-2 py-0.5 rounded-md bg-forest-light text-xs text-forest font-medium">Recovery Support</span>
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <i className="fas fa-flask text-forest mt-1 mr-3 flex-shrink-0"></i>
                    <div className="w-full">
                      <div className="flex justify-between items-start">
                        <span className="font-medium text-sm">Magnesium Malate</span>
                        <span className="text-xs text-forest bg-forest-light/50 px-2 py-0.5 rounded ml-2 flex-shrink-0">1,500 mg</span>
                      </div>
                      <p className="text-xs text-neutral-dark/70">Supports relaxation and muscle recovery</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-flask text-forest mt-1 mr-3 flex-shrink-0"></i>
                    <div className="w-full">
                      <div className="flex justify-between items-start">
                        <span className="font-medium text-sm">PEA (Ultra-micronized)</span>
                        <span className="text-xs text-forest bg-forest-light/50 px-2 py-0.5 rounded ml-2 flex-shrink-0">600 mg</span>
                      </div>
                      <p className="text-xs text-neutral-dark/70">Enhanced evening dose for pain relief</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-flask text-forest mt-1 mr-3 flex-shrink-0"></i>
                    <div className="w-full">
                      <div className="flex justify-between items-start">
                        <span className="font-medium text-sm">Alpha-GPC</span>
                        <span className="text-xs text-forest bg-forest-light/50 px-2 py-0.5 rounded ml-2 flex-shrink-0">300 mg</span>
                      </div>
                      <p className="text-xs text-neutral-dark/70">Supports brain health and recovery</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-flask text-forest mt-1 mr-3 flex-shrink-0"></i>
                    <div className="w-full">
                      <div className="flex justify-between items-start">
                        <span className="font-medium text-sm">ALCAR</span>
                        <span className="text-xs text-forest bg-forest-light/50 px-2 py-0.5 rounded ml-2 flex-shrink-0">600 mg</span>
                      </div>
                      <p className="text-xs text-neutral-dark/70">Enhanced evening dose for neurological support</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-flask text-forest mt-1 mr-3 flex-shrink-0"></i>
                    <div className="w-full">
                      <div className="flex justify-between items-start">
                        <span className="font-medium text-sm">Taurine</span>
                        <span className="text-xs text-forest bg-forest-light/50 px-2 py-0.5 rounded ml-2 flex-shrink-0">500 mg</span>
                      </div>
                      <p className="text-xs text-neutral-dark/70">Promotes relaxation and cardiovascular health</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-flask text-forest mt-1 mr-3 flex-shrink-0"></i>
                    <div className="w-full">
                      <div className="flex justify-between items-start">
                        <span className="font-medium text-sm">Hyaluronic Acid</span>
                        <span className="text-xs text-forest bg-forest-light/50 px-2 py-0.5 rounded ml-2 flex-shrink-0">300 mg</span>
                      </div>
                      <p className="text-xs text-neutral-dark/70">Joint lubrication and tissue hydration</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-flask text-forest mt-1 mr-3 flex-shrink-0"></i>
                    <div className="w-full">
                      <div className="flex justify-between items-start">
                        <span className="font-medium text-sm">R-Lipoic Acid</span>
                        <span className="text-xs text-forest bg-forest-light/50 px-2 py-0.5 rounded ml-2 flex-shrink-0">200 mg</span>
                      </div>
                      <p className="text-xs text-neutral-dark/70">Powerful antioxidant for nerve and mitochondrial health</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-flask text-forest mt-1 mr-3 flex-shrink-0"></i>
                    <div className="w-full">
                      <div className="flex justify-between items-start">
                        <span className="font-medium text-sm">L-Theanine</span>
                        <span className="text-xs text-forest bg-forest-light/50 px-2 py-0.5 rounded ml-2 flex-shrink-0">150 mg</span>
                      </div>
                      <p className="text-xs text-neutral-dark/70">Promotes calm focus and relaxation</p>
                    </div>
                  </li>
                </ul>
              </div>
              
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