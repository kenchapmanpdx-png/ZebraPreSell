export default function ClinicalRationale() {
  return (
    <section className="bg-gray-50 py-16 px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-lora text-forest font-semibold mb-8 fade-in">🧬 Why Each Ingredient Matters</h2>
        <ul className="text-left text-forest/80 max-w-2xl mx-auto space-y-4 fade-in">
          <li className="flex items-start">
            <span className="text-forest font-semibold mr-2">•</span>
            <span><strong className="text-forest">CoQ10 (AM):</strong> Supports mitochondrial energy for people with dysautonomia.</span>
          </li>
          <li className="flex items-start">
            <span className="text-forest font-semibold mr-2">•</span>
            <span><strong className="text-forest">PEA:</strong> Reduces neuroinflammation and connective tissue pain.</span>
          </li>
          <li className="flex items-start">
            <span className="text-forest font-semibold mr-2">•</span>
            <span><strong className="text-forest">L-Theanine (PM):</strong> Calms the nervous system and promotes restful sleep.</span>
          </li>
          <li className="flex items-start">
            <span className="text-forest font-semibold mr-2">•</span>
            <span><strong className="text-forest">Magnesium Malate:</strong> Relieves muscle tension and supports vascular tone.</span>
          </li>
        </ul>
      </div>
    </section>
  );
}