
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronDown, ChevronUp } from 'lucide-react';
import ZebraPatternAlt from './ZebraPatternAlt';
import IngredientTooltip from './IngredientTooltip';
import { amFormulaIngredients, pmFormulaIngredients } from '@/data/ingredientData';

export default function ProductGrid() {
  const [showAMIngredients, setShowAMIngredients] = useState(false);
  const [showPMIngredients, setShowPMIngredients] = useState(false);

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      <ZebraPatternAlt />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            AM & PM Formulas
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Two comprehensive formulas designed to support your body's complex needs throughout the day and night
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          {/* AM Formula */}
          <Card className="bg-white rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
            <CardHeader className="bg-gradient-to-br from-yellow-400 to-orange-500 text-white rounded-t-lg p-6">
              <CardTitle className="text-2xl font-bold flex items-center gap-3">
                <span className="text-3xl">☀️</span>
                AM Formula
              </CardTitle>
              <p className="text-yellow-50 mt-2">
                Supports energy, brain fog, and vascular tone
              </p>
            </CardHeader>
            <CardContent className="p-6">
              <button 
                onClick={() => setShowAMIngredients(!showAMIngredients)}
                className="text-orange-600 hover:text-orange-800 underline font-medium flex items-center gap-2 mx-auto transition-colors duration-300 mb-4"
              >
                View Detailed Ingredients 
                {showAMIngredients ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>

              {showAMIngredients && (
                <div className="space-y-4 text-left">
                  {amFormulaIngredients.map((ingredient, index) => (
                    <IngredientTooltip key={index} ingredient={ingredient} colorScheme="orange">
                      <div className="border-l-2 border-orange-400 pl-4 hover:bg-orange-50 rounded-r-lg p-3 transition-all duration-200">
                        <h4 className="font-semibold text-gray-800">{ingredient.name}</h4>
                        <p className="text-sm text-gray-600 mb-1">{ingredient.description}</p>
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium text-orange-600">{ingredient.dosage}</span>
                          <span className="text-xs text-gray-500 italic">{ingredient.timing}</span>
                        </div>
                      </div>
                    </IngredientTooltip>
                  ))}
                </div>
              )}

              {!showAMIngredients && (
                <div className="space-y-3">
                  <div className="text-sm text-gray-600">
                    <strong>Key Ingredients:</strong> Magnesium Malate, CoQ10, Vitamin D3, PEA, Alpha-GPC, and more
                  </div>
                  <div className="text-sm text-gray-600">
                    <strong>Total Ingredients:</strong> {amFormulaIngredients.length} research-backed compounds
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* PM Formula */}
          <Card className="bg-white rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
            <CardHeader className="bg-gradient-to-br from-purple-500 to-indigo-600 text-white rounded-t-lg p-6">
              <CardTitle className="text-2xl font-bold flex items-center gap-3">
                <span className="text-3xl">🌙</span>
                PM Formula
              </CardTitle>
              <p className="text-purple-50 mt-2">
                Supports inflammation, repair, and deep rest
              </p>
            </CardHeader>
            <CardContent className="p-6">
              <button 
                onClick={() => setShowPMIngredients(!showPMIngredients)}
                className="text-purple-600 hover:text-purple-800 underline font-medium flex items-center gap-2 mx-auto transition-colors duration-300 mb-4"
              >
                View Detailed Ingredients 
                {showPMIngredients ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>

              {showPMIngredients && (
                <div className="space-y-4 text-left">
                  {pmFormulaIngredients.map((ingredient, index) => (
                    <IngredientTooltip key={index} ingredient={ingredient} colorScheme="forest">
                      <div className="border-l-2 border-purple-400 pl-4 hover:bg-purple-50 rounded-r-lg p-3 transition-all duration-200">
                        <h4 className="font-semibold text-gray-800">{ingredient.name}</h4>
                        <p className="text-sm text-gray-600 mb-1">{ingredient.description}</p>
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium text-purple-600">{ingredient.dosage}</span>
                          <span className="text-xs text-gray-500 italic">{ingredient.timing}</span>
                        </div>
                      </div>
                    </IngredientTooltip>
                  ))}
                </div>
              )}

              {!showPMIngredients && (
                <div className="space-y-3">
                  <div className="text-sm text-gray-600">
                    <strong>Key Ingredients:</strong> Magnesium Malate, PEA, Alpha-GPC, ALCAR, Hyaluronic Acid, and more
                  </div>
                  <div className="text-sm text-gray-600">
                    <strong>Total Ingredients:</strong> {pmFormulaIngredients.length} research-backed compounds
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
