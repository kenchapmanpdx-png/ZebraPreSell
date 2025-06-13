import ZebraBackground from './ZebraBackground';

export default function Comparison() {
  const comparisonData = [
    { 
      feature: "Formulated for Rare Conditions", 
      zebrawell: "Built specifically for POTS, EDS & MCAS bodies", 
      generic: "Made for the \"average person\"" 
    },
    { 
      feature: "Tolerability for Sensitive Systems", 
      zebrawell: "Free from dyes, fillers, stearates, soy, titanium dioxide — MCAS-safe", 
      generic: "Contains harsh additives, allergens, and hidden triggers" 
    },
    { 
      feature: "Therapeutic Doses That Matter", 
      zebrawell: "Clinical levels of proven ingredients — not pixie dust", 
      generic: "Underdosed for label appeal only" 
    },
    { 
      feature: "Targeted AM/PM Support", 
      zebrawell: "Designed for daytime energy + nighttime recovery", 
      generic: "One-size-fits-all formulas" 
    },
    { 
      feature: "Real-World, Patient-Driven Design", 
      zebrawell: "Formulated by a father for his daughter — not just a marketing team", 
      generic: "Generic industry copycats" 
    },
    { 
      feature: "No Guesswork or Stacks Needed", 
      zebrawell: "One system replaces 12+ supplements — simple & complete", 
      generic: "Requires stacking 5–10 products" 
    },
    { 
      feature: "Tested for Peace of Mind", 
      zebrawell: "Third-party tested in FDA-registered, cGMP facility", 
      generic: "\"Trust us\" — no transparent testing" 
    }
  ];

  return (
    <section id="comparison" className="py-16 md:py-24 relative overflow-hidden">
      <ZebraBackground />
      <div className="container mx-auto px-6 relative z-10">
        <div className="relative">
          {/* Darker zebra-pattern background */}
          <div className="absolute inset-0 rounded-2xl mx-auto" style={{ backgroundColor: '#1a1a1a', opacity: 0.8 }}></div>
          
          {/* Content */}
          <div className="relative z-10 px-8 py-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-white mb-4 fade-in">
              Why <span style={{ color: '#C3CC12' }}>ZebraWell</span> Leads the Industry
            </h2>
            <p className="text-center text-white/80 max-w-3xl mx-auto mb-12 fade-in text-lg">
              Stop settling for supplements that weren't made for your body. Here's what sets us apart:
            </p>
            
            <div className="max-w-6xl mx-auto overflow-x-auto fade-in">
              <table className="w-full border-collapse bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden">
                <thead>
                  <tr className="bg-black/20">
                    <th className="p-6 text-left text-white font-bold text-lg">Feature</th>
                    <th className="p-6 text-center font-bold text-lg transition-colors" style={{ color: '#C3CC12' }}>
                      ZebraWell ✅
                    </th>
                    <th className="p-6 text-center text-gray-400 font-bold text-lg">Generic Brands ❌</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, index) => (
                    <tr key={index} className="border-b border-white/10 hover:bg-white/5 transition-all duration-300">
                      <td className="p-6 font-semibold text-white text-left border-r border-white/10">
                        <strong>{row.feature}</strong>
                      </td>
                      <td className="p-6 text-center font-medium transition-all duration-300 border-r border-white/10" style={{ color: '#C3CC12' }}>
                        <div className="flex items-center justify-center space-x-2">
                          <span className="bg-white text-black px-1 py-0.5 rounded font-bold text-sm">✓</span>
                          <span className="font-semibold" style={{ color: '#C3CC12' }}>{row.zebrawell}</span>
                        </div>
                      </td>
                      <td className="p-6 text-center text-gray-400 font-medium">
                        <div className="flex items-center justify-center space-x-2">
                          <span className="text-red-400 text-xl">❌</span>
                          <span>{row.generic}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            {/* Call to action */}
            <div className="text-center mt-12 fade-in">
              <p className="text-white/90 text-lg mb-6">
                <strong>Ready to upgrade from generic supplements to targeted care?</strong>
              </p>
              <button className="bg-cta-green text-white px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:bg-cta-green-dark transition-all duration-300 hover:scale-[1.02]">
                Get Early Access to ZebraWell
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}