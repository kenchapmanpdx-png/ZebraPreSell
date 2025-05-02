export default function Boosters() {
  const potsBooster = [
    { name: "L-Carnitine", description: "Supports energy transport and cardiovascular function" },
    { name: "D-Ribose", description: "Helps restore cellular energy for cardiac function" },
    { name: "Thiamine (B1)", description: "Critical for energy metabolism and neurological health" },
    { name: "PQQ", description: "Supports mitochondrial function and biogenesis" },
    { name: "Potassium", description: "Supports electrolyte balance and cardiac function" }
  ];

  const edsBooster = [
    { name: "Copper", description: "Essential for collagen cross-linking and stability" },
    { name: "Manganese", description: "Required for connective tissue formation and repair" },
    { name: "Silicon", description: "Supports collagen synthesis and bone mineralization" },
    { name: "Hyaluronic Acid", description: "Maintains joint lubrication and tissue hydration" },
    { name: "MSM", description: "Supports joint comfort and tissue integrity" }
  ];

  return (
    <section id="boosters" className="py-16 md:py-24 bg-neutral-light zebra-bg relative">
      <div className="absolute inset-0 bg-white/60 z-0"></div>
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 fade-in">Targeted Boosters</h2>
        <p className="text-lg text-center max-w-3xl mx-auto mb-12 text-neutral-dark/80 fade-in">
          Our specialized boosters address specific symptoms and needs, designed to complement AvaCore with targeted support.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* POTS Booster */}
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 border-t-4 border-teal fade-in transform transition-all hover:-translate-y-2 hover:shadow-xl">
            <div className="flex items-center mb-6">
              <div className="w-14 h-14 rounded-full bg-teal/10 flex items-center justify-center mr-4">
                <i className="fas fa-heartbeat text-2xl text-teal"></i>
              </div>
              <h3 className="text-2xl font-bold">POTS Booster</h3>
            </div>
            
            <ul className="mb-6 space-y-2">
              {potsBooster.map((item, index) => (
                <li key={index} className="flex items-start">
                  <i className="fas fa-check text-teal mt-1 mr-3"></i>
                  <div>
                    <span className="font-semibold">{item.name}</span>
                    <p className="text-sm text-neutral-dark/70">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
            
            <button className="w-full py-3 px-6 bg-lavender hover:bg-lavender-dark text-white font-semibold rounded-lg transition-colors">
              Learn More
            </button>
          </div>
          
          {/* EDS Booster */}
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 border-t-4 border-lavender fade-in transform transition-all hover:-translate-y-2 hover:shadow-xl">
            <div className="flex items-center mb-6">
              <div className="w-14 h-14 rounded-full bg-lavender/10 flex items-center justify-center mr-4">
                <i className="fas fa-bone text-2xl text-lavender"></i>
              </div>
              <h3 className="text-2xl font-bold">EDS Booster</h3>
            </div>
            
            <ul className="mb-6 space-y-2">
              {edsBooster.map((item, index) => (
                <li key={index} className="flex items-start">
                  <i className="fas fa-check text-lavender mt-1 mr-3"></i>
                  <div>
                    <span className="font-semibold">{item.name}</span>
                    <p className="text-sm text-neutral-dark/70">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
            
            <button className="w-full py-3 px-6 bg-teal hover:bg-teal-dark text-white font-semibold rounded-lg transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
