export default function ClinicalRationale() {
  return (
    <section className="bg-gray-50 py-24 px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-serif font-bold text-forest mb-12 text-center fade-in">🧬 Why Each Ingredient Matters</h2>
        <div className="grid md:grid-cols-2 gap-6 fade-in">
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div className="flex items-start space-x-3">
              <span className="text-2xl">🧬</span>
              <div>
                <h3 className="text-lg font-bold text-forest mb-2">CoQ10 (AM)</h3>
                <p className="text-forest/80">Supports mitochondrial energy for people with dysautonomia.</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div className="flex items-start space-x-3">
              <span className="text-2xl">🌿</span>
              <div>
                <h3 className="text-lg font-bold text-forest mb-2">L-Theanine (PM)</h3>
                <p className="text-forest/80">Calms the nervous system and promotes restful sleep.</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div className="flex items-start space-x-3">
              <span className="text-2xl">🧠</span>
              <div>
                <h3 className="text-lg font-bold text-forest mb-2">Magnesium Malate</h3>
                <p className="text-forest/80">Relieves muscle tension and supports vascular tone.</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div className="flex items-start space-x-3">
              <span className="text-2xl">💊</span>
              <div>
                <h3 className="text-lg font-bold text-forest mb-2">PEA</h3>
                <p className="text-forest/80">Reduces neuroinflammation and connective tissue pain.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}