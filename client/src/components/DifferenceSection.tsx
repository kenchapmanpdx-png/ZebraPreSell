export default function DifferenceSection() {
  return (
    <section className="bg-gray-50 py-16 px-8">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-lora text-forest font-semibold mb-8 fade-in">What Makes ZebraWell Different</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-6 fade-in transform transition-all hover:-translate-y-2 hover:shadow-xl">
            <h3 className="text-xl font-bold mb-4 text-forest">🧠 Targeted for EDS & POTS</h3>
            <p className="text-forest/80">Built specifically to support collagen, mast cells, blood volume, and autonomic balance.</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 fade-in transform transition-all hover:-translate-y-2 hover:shadow-xl">
            <h3 className="text-xl font-bold mb-4 text-forest">💊 2 Bottles Replace 15</h3>
            <p className="text-forest/80">AM + PM system simplifies routines. No guesswork, no 20-bottle supplement graveyard.</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 fade-in transform transition-all hover:-translate-y-2 hover:shadow-xl">
            <h3 className="text-xl font-bold mb-4 text-forest">🌿 Clean & MCAS-Friendly</h3>
            <p className="text-forest/80">No titanium dioxide, stearates, soy, corn, dyes, or mystery additives.</p>
          </div>
        </div>
      </div>
    </section>
  );
}