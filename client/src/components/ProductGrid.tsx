
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import ZebraPatternAlt from './ZebraPatternAlt';

const amIngredients = [
  { name: 'Magnesium Malate', benefit: 'Supports energy and muscle tone' },
  { name: 'Vitamin B Complex', benefit: 'Enhances cellular energy production' },
  { name: 'Coenzyme Q10', benefit: 'Mitochondrial support and heart health' },
  { name: 'Alpha Lipoic Acid', benefit: 'Antioxidant and nerve support' },
  { name: 'Rhodiola Rosea', benefit: 'Adaptogenic stress support' },
  { name: 'PQQ', benefit: 'Mitochondrial biogenesis' },
  { name: 'Ribose', benefit: 'Cellular energy substrate' },
  { name: 'L-Carnitine', benefit: 'Fat metabolism and energy' }
];

const pmIngredients = [
  { name: 'Magnesium Glycinate', benefit: 'Promotes relaxation and sleep' },
  { name: 'Melatonin', benefit: 'Natural sleep regulation' },
  { name: 'L-Theanine', benefit: 'Calm focus and relaxation' },
  { name: 'GABA', benefit: 'Nervous system calming' },
  { name: 'Valerian Root', benefit: 'Traditional sleep support' },
  { name: 'Passionflower', benefit: 'Anxiety and sleep support' },
  { name: 'Lemon Balm', benefit: 'Gentle relaxation' },
  { name: 'Chamomile', benefit: 'Soothing and sleep-promoting' }
];

export default function ProductGrid() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      <ZebraPatternAlt />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            AM & PM Formulas
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Two targeted formulas designed to support your body's natural rhythms and unique needs
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* AM Formula */}
          <Card className="shadow-lg border-0">
            <CardHeader className="bg-gradient-to-br from-yellow-400 to-orange-500 text-white rounded-t-lg">
              <CardTitle className="text-2xl font-bold flex items-center gap-3">
                <span className="text-3xl">☀️</span>
                AM Formula
              </CardTitle>
              <p className="text-yellow-50 mt-2">
                Energy & Vitality Support
              </p>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                {amIngredients.map((ingredient, index) => (
                  <div key={index} className="flex justify-between items-center border-b border-gray-100 pb-2">
                    <span className="font-semibold text-gray-800">{ingredient.name}</span>
                    <span className="text-sm text-gray-600">{ingredient.benefit}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* PM Formula */}
          <Card className="shadow-lg border-0">
            <CardHeader className="bg-gradient-to-br from-purple-500 to-indigo-600 text-white rounded-t-lg">
              <CardTitle className="text-2xl font-bold flex items-center gap-3">
                <span className="text-3xl">🌙</span>
                PM Formula
              </CardTitle>
              <p className="text-purple-50 mt-2">
                Recovery & Rest Support
              </p>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                {pmIngredients.map((ingredient, index) => (
                  <div key={index} className="flex justify-between items-center border-b border-gray-100 pb-2">
                    <span className="font-semibold text-gray-800">{ingredient.name}</span>
                    <span className="text-sm text-gray-600">{ingredient.benefit}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
