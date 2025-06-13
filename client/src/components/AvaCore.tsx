import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function AvaCore() {
  const [showAMIngredients, setShowAMIngredients] = useState(false);
  const [showPMIngredients, setShowPMIngredients] = useState(false);

  const amIngredients = [
    {
      name: "Magnesium (Glycinate Chelate)",
      description: "Calms nerves, supports muscle function and energy metabolism.",
      dosage: "250 mg",
      note: "Essential for POTS and EDS support"
    },
    {
      name: "Vitamin C (Buffered Ascorbates)",
      description: "Antioxidant, supports collagen, immune function, and adrenal health.",
      dosage: "1000 mg",
      note: "Critical for connective tissue integrity"
    },
    {
      name: "CoQ10 (Ubiquinone)",
      description: "Supports mitochondrial energy and cardiovascular health.",
      dosage: "100 mg",
      note: "Vital for energy production"
    },
    {
      name: "Taurine (L-Taurine)",
      description: "Modulates nervous system, stabilizes cell membranes, helps with POTS.",
      dosage: "500 mg",
      note: "Supports cellular stability"
    }
  ];

  const pmIngredients = [
    {
      name: "Vitamin D3",
      description: "Supports immune, bone, and mood regulation.",
      dosage: "2000 IU / 50 mcg",
      note: "Important for overall wellness"
    },
    {
      name: "Vitamin K2 (MK-7)",
      description: "Directs calcium to bones, supports cardiovascular health.",
      dosage: "100 mcg",
      note: "Works synergistically with D3"
    },
    {
      name: "Zinc (Bisglycinate)",
      description: "Supports immune, skin, and tissue repair.",
      dosage: "15 mg",
      note: "Essential mineral support"
    }
  ];

  return (
    <section className="bg-white py-20 px-8" id="products">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-serif font-bold mb-4 text-primary">Our Formulas</h2>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          Two comprehensive formulas designed to support your body's complex needs throughout the day and night.
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* AM Formula */}
          <div className="bg-white rounded-lg shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-all duration-300">
            <div className="w-48 h-48 bg-gradient-to-br from-orange-100 to-orange-200 rounded-lg mx-auto mb-6 flex items-center justify-center">
              <span className="text-orange-600 font-semibold text-center">
                AM Formula<br/>Bottle
              </span>
            </div>
            <h3 className="text-2xl font-serif font-bold mt-4 text-primary">AM Formula</h3>
            <p className="text-gray-700 mt-2 mb-4">Supports energy, brain fog, and vascular tone</p>

            <button 
              onClick={() => setShowAMIngredients(!showAMIngredients)}
              className="text-primary hover:text-accent underline font-medium flex items-center gap-2 mx-auto transition-colors duration-300"
            >
              View Ingredients 
              {showAMIngredients ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>

            {showAMIngredients && (
              <div className="mt-6 space-y-4 text-left">
                {amIngredients.map((ingredient, index) => (
                  <div key={index} className="border-l-2 border-accent pl-4">
                    <h4 className="font-semibold text-primary">{ingredient.name}</h4>
                    <p className="text-sm text-gray-600 mb-1">{ingredient.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-accent">{ingredient.dosage}</span>
                      <span className="text-xs text-gray-500 italic">{ingredient.note}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* PM Formula */}
          <div className="bg-white rounded-lg shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-all duration-300">
            <div className="w-48 h-48 bg-gradient-to-br from-blue-100 to-purple-200 rounded-lg mx-auto mb-6 flex items-center justify-center">
              <span className="text-purple-600 font-semibold text-center">
                PM Formula<br/>Bottle
              </span>
            </div>
            <h3 className="text-2xl font-serif font-bold mt-4 text-primary">PM Formula</h3>
            <p className="text-gray-700 mt-2 mb-4">Supports inflammation, repair, and deep rest</p>

            <button 
              onClick={() => setShowPMIngredients(!showPMIngredients)}
              className="text-primary hover:text-accent underline font-medium flex items-center gap-2 mx-auto transition-colors duration-300"
            >
              View Ingredients 
              {showPMIngredients ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>

            {showPMIngredients && (
              <div className="mt-6 space-y-4 text-left">
                {pmIngredients.map((ingredient, index) => (
                  <div key={index} className="border-l-2 border-accent pl-4">
                    <h4 className="font-semibold text-primary">{ingredient.name}</h4>
                    <p className="text-sm text-gray-600 mb-1">{ingredient.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-accent">{ingredient.dosage}</span>
                      <span className="text-xs text-gray-500 italic">{ingredient.note}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}