import ZebraBackground from './ZebraBackground';
import IngredientTooltip from './IngredientTooltip';
import { amFormulaIngredients, pmFormulaIngredients } from '../data/ingredientData';

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
          {/* Left Column - AM Formula */}
          <div className="w-full md:w-1/2 flex flex-col gap-8">
            <div id="am-formula" className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl shadow-lg p-6 md:p-8 border-t-4 border-yellow-400 fade-in transform transition-all hover:-translate-y-2 hover:shadow-xl">
              <div className="flex items-center mb-6">
                <div className="relative w-16 h-20 mr-4">
                  <div className="absolute inset-0 rounded-lg bg-yellow-100/50 border border-yellow-200"></div>
                  <div className="absolute bottom-0 left-0 right-0 h-3/4 bg-gradient-to-t from-yellow-200/40 to-yellow-100/20 rounded-b-lg rounded-t-3xl shadow-inner"></div>
                  <div className="absolute inset-0 flex items-center justify-center flex-col">
                    <div className="w-8 h-8 rounded-full border-2 border-yellow-400/40 bg-white flex items-center justify-center mb-1">
                      <i className="fas fa-sun text-sm text-yellow-600"></i>
                    </div>
                    <div className="text-[8px] font-bold text-forest">ZebraWell™</div>
                    <div className="text-[6px] text-yellow-600">AM Formula</div>
                  </div>
                </div>
                <div>
                  <h3 className="text-3xl font-lora text-orange-600">ZebraWell AM Formula</h3>
                  <div className="flex items-center">
                    <span className="text-sm text-neutral-dark/70 font-medium">Morning energizing formula</span>
                    <span className="ml-3 px-2 py-0.5 rounded-md bg-yellow-100 text-xs text-orange-600 font-medium">Daily Foundation</span>
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <ul className="space-y-2">
                  {amFormulaIngredients.map((ingredient, index) => (
                    <IngredientTooltip 
                      key={index} 
                      ingredient={ingredient} 
                      colorScheme="orange"
                    >
                      <li className="flex items-start">
                        <i className="fas fa-flask text-orange-500 mt-1 mr-3 flex-shrink-0"></i>
                        <div className="w-full">
                          <div className="flex justify-between items-start">
                            <span className="font-medium text-sm">{ingredient.name}</span>
                            <span className="text-xs text-orange-600 bg-yellow-100 px-2 py-0.5 rounded ml-2 flex-shrink-0">{ingredient.dosage}</span>
                          </div>
                          <p className="text-xs text-neutral-dark/70">{ingredient.description}</p>
                        </div>
                      </li>
                    </IngredientTooltip>
                  ))}
                </ul>
              </div>
              
              <button className="w-full py-3 px-6 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-lg transition-colors flex items-center justify-center">
                <i className="fas fa-info-circle mr-2"></i>
                Product Details
              </button>
            </div>
          </div>
          
          {/* Right Column - PM Formula */}
          <div className="w-full md:w-1/2 flex flex-col gap-8">
            <div id="pm-formula" className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl shadow-lg p-6 md:p-8 border-t-4 border-forest fade-in transform transition-all hover:-translate-y-2 hover:shadow-xl">
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
                  {pmFormulaIngredients.map((ingredient, index) => (
                    <IngredientTooltip 
                      key={index} 
                      ingredient={ingredient} 
                      colorScheme="forest"
                    >
                      <li className="flex items-start">
                        <i className="fas fa-flask text-forest mt-1 mr-3 flex-shrink-0"></i>
                        <div className="w-full">
                          <div className="flex justify-between items-start">
                            <span className="font-medium text-sm">{ingredient.name}</span>
                            <span className="text-xs text-forest bg-forest-light/50 px-2 py-0.5 rounded ml-2 flex-shrink-0">{ingredient.dosage}</span>
                          </div>
                          <p className="text-xs text-neutral-dark/70">{ingredient.description}</p>
                        </div>
                      </li>
                    </IngredientTooltip>
                  ))}
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