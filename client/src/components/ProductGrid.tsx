import { useState, useMemo } from 'react';
import ZebraBackground from './ZebraBackground';
import { amFormulaIngredients, pmFormulaIngredients } from '../data/ingredientData';

export default function ProductGrid() {
  const [activeTab, setActiveTab] = useState('am');

  // Memoize ingredient data for better performance
  const memoizedAmIngredients = useMemo(() => amFormulaIngredients, []);
  const memoizedPmIngredients = useMemo(() => pmFormulaIngredients, []);
  return (
    <section id="products" className="pt-4 md:pt-12 pb-4 md:pb-8 relative overflow-hidden" style={{
      background: 'linear-gradient(180deg, #F3ECE1 0%, #E8DCC9 100%)'
    }}>
      <ZebraBackground />
      <div className="container mx-auto px-4 md:px-6 relative z-1">
        <div className="text-center mb-6 md:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-lora font-bold text-terra mb-6" data-aos="fade-up">
            Our Products
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-terra to-[#89B317] mx-auto mb-6" data-aos="fade-up" data-aos-delay="100"></div>
          <p className="text-xl md:text-2xl text-forest/90 max-w-4xl mx-auto font-lora leading-relaxed" data-aos="fade-up" data-aos-delay="200">
            <strong>Comprehensive AM and PM formulas</strong> providing targeted support throughout the day and night, specifically designed for the unique needs of individuals with EDS and POTS.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 max-w-6xl mx-auto">
          {/* Left Column - AM Formula */}
          <div className="w-full md:w-1/2 flex flex-col gap-4 md:gap-8">
            <div id="am-formula" className="rounded-xl shadow-lg p-4 md:p-6 lg:p-8 border-t-4 border-terra/30 transform transition-all hover:-translate-y-2 hover:shadow-xl" data-aos="fade-up" data-aos-delay="100" style={{
              background: 'hsla(161, 51%, 12%, 1)',
              backgroundImage: 'radial-gradient(circle at 30% 30%, hsla(161, 51%, 18%, 0.2), transparent 60%), linear-gradient(90deg, hsla(161, 51%, 12%, 1) 10%, hsla(115, 41%, 27%, 1) 50%, hsla(161, 51%, 12%, 1) 90%)'
            }}>
              <div className="flex flex-col items-center text-center mb-4">
                <div className="relative w-22 h-28 mb-2">
                  <div className="absolute inset-0 rounded-lg bg-sand border border-terra/20"></div>
                  <div className="absolute bottom-0 left-0 right-0 h-3/4 bg-gradient-to-t from-terra/20 to-sand rounded-b-lg rounded-t-3xl shadow-inner"></div>
                  <div className="absolute inset-0 flex items-center justify-center flex-col">
                    <div className="w-12 h-12 rounded-full border-2 border-terra/40 bg-white flex items-center justify-center mb-1">
                      <i className="fas fa-sun text-4xl text-yellow-500"></i>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-lora font-black text-[#C8592B] mb-2">ZebraWell AM Formula</h3>
                  <div className="flex flex-col items-center justify-center gap-2">
                    <span className="text-sm text-emerald-900 font-semibold px-3 py-1 rounded-md bg-white/90 text-center">AM formula designed to support cellular energy, enhance cognitive function and mental clarity, and provide foundational support for methylation and mitochondrial health</span>
                  </div>
                </div>
              </div>

              <div className="mb-4 md:mb-6">
                <div className="bg-gray-50 rounded-lg p-4 md:p-6 shadow-sm border border-neutral-200">
                  <ul className="space-y-4">
                    {memoizedAmIngredients.map((ingredient, index) => (
                      <li key={index} className="pb-3 mb-3 border-b border-gray-200 last:border-b-0 last:pb-0 last:mb-0" data-aos="fade-up" data-aos-delay={`${250 + (index * 25)}`}>
                        <div className="flex justify-between items-start mb-2">
                          <span className="text-base md:text-base lg:text-[17px] font-bold text-[#0F2E24]">{ingredient.name}</span>
                          <span className="text-xs text-terra-dark bg-stone-200 px-2 py-0.5 rounded ml-2 flex-shrink-0 font-semibold">{ingredient.dosage}</span>
                        </div>
                        <p className="text-base md:text-base lg:text-[17px] text-gray-700 leading-relaxed">{ingredient.description}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <button className="w-full py-3 px-6 text-white font-bold rounded-lg transition-all duration-300 hover:scale-[1.02] flex items-center justify-center" style={{
                background: 'hsla(18, 65%, 48%, 1)',
                backgroundImage: 'linear-gradient(90deg, hsla(18, 65%, 48%, 1) 0%, hsla(18, 64%, 40%, 1) 20%, hsla(18, 65%, 48%, 1) 49%, hsla(18, 64%, 40%, 1) 81%, hsla(18, 65%, 48%, 1) 100%)'
              }}>
                <i className="fas fa-info-circle mr-2"></i>
                Product Details
              </button>
            </div>
          </div>

          {/* Right Column - PM Formula */}
          <div className="w-full md:w-1/2 flex flex-col gap-4 md:gap-8">
            <div id="pm-formula" className="rounded-xl shadow-lg p-4 md:p-6 lg:p-8 border-t-4 border-terra/30 transform transition-all hover:-translate-y-2 hover:shadow-xl" data-aos="fade-up" data-aos-delay="200" style={{
              background: 'hsla(161, 51%, 12%, 1)',
              backgroundImage: 'radial-gradient(circle at 30% 30%, hsla(161, 51%, 18%, 0.2), transparent 60%), linear-gradient(90deg, hsla(161, 51%, 12%, 1) 10%, hsla(115, 41%, 27%, 1) 50%, hsla(161, 51%, 12%, 1) 90%)'
            }}>
              <div className="flex flex-col items-center text-center mb-4">
                <div className="relative w-22 h-28 mb-2">
                  <div className="absolute inset-0 rounded-lg bg-sand border border-terra/20"></div>
                  <div className="absolute bottom-0 left-0 right-0 h-3/4 bg-gradient-to-t from-terra/20 to-sand rounded-b-lg rounded-t-3xl shadow-inner"></div>
                  <div className="absolute inset-0 flex items-center justify-center flex-col">
                    <div className="w-12 h-12 rounded-full border-2 border-terra/40 bg-white flex items-center justify-center mb-1">
                      <i className="fas fa-moon text-4xl text-yellow-500"></i>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-lora font-black text-[#C8592B] mb-2">ZebraWell PM Formula</h3>
                  <div className="flex flex-col items-center justify-center gap-2">
                    <span className="text-sm text-emerald-900 font-semibold px-3 py-1 rounded-md bg-white/90 text-center">PM formula focused on supporting connective tissue repair, promoting neurological calm and relaxation, providing powerful antioxidant defense, and replenishing key minerals overnight</span>
                  </div>
                </div>
              </div>

              <div className="mb-4 md:mb-6">
                <div className="bg-gray-50 rounded-lg p-4 md:p-6 shadow-sm border border-neutral-200">
                  <ul className="space-y-4">
                    {memoizedPmIngredients.map((ingredient, index) => (
                      <li key={index} className="pb-3 mb-3 border-b border-gray-200 last:border-b-0 last:pb-0 last:mb-0" data-aos="fade-up" data-aos-delay={`${300 + (index * 20)}`}>
                        <div className="flex justify-between items-start mb-2">
                          <span className="text-base md:text-base lg:text-[17px] font-bold text-[#0F2E24]">{ingredient.name}</span>
                          <span className="text-xs text-terra-dark bg-stone-200 px-2 py-0.5 rounded ml-2 flex-shrink-0 font-semibold">{ingredient.dosage}</span>
                        </div>
                        <p className="text-base md:text-base lg:text-[17px] text-gray-700 leading-relaxed">{ingredient.description}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <button className="w-full py-3 px-6 text-white font-bold rounded-lg transition-all duration-300 hover:scale-[1.02] flex items-center justify-center" style={{
                background: 'hsla(18, 65%, 48%, 1)',
                backgroundImage: 'linear-gradient(90deg, hsla(18, 65%, 48%, 1) 0%, hsla(18, 64%, 40%, 1) 20%, hsla(18, 65%, 48%, 1) 49%, hsla(18, 64%, 40%, 1) 81%, hsla(18, 65%, 48%, 1) 100%)'
              }}>
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