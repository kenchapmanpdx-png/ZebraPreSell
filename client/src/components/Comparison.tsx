export default function Comparison() {
  const comparisonData = [
    { feature: "Transparency", zebrawell: "Yes", generic: "Often Hidden" },
    { feature: "Nutrient Forms", zebrawell: "Active", generic: "Low Quality" },
    { feature: "Testing", zebrawell: "Third-party", generic: "Rare" },
    { feature: "Cost", zebrawell: "$1.50–$2.50/day", generic: "$3–$6+" },
    { feature: "Allergen Risk", zebrawell: "Low", generic: "Higher" }
  ];

  return (
    <section id="comparison" className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 fade-in">Compare the Difference</h2>
        
        <div className="max-w-4xl mx-auto overflow-x-auto fade-in">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="p-4 border-b-2 border-neutral-medium"></th>
                <th className="p-4 border-b-2 border-lavender text-center bg-lavender/10 text-lavender font-bold">ZebraWell</th>
                <th className="p-4 border-b-2 border-neutral-medium text-center text-neutral-dark font-bold">Generic Brands</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, index) => (
                <tr key={index}>
                  <td className="p-4 border-b border-neutral-medium font-semibold">{row.feature}</td>
                  <td className="p-4 border-b border-lavender/30 text-center bg-lavender/5 text-teal">
                    <div className="flex items-center justify-center">
                      <i className="fas fa-check-circle text-teal mr-2"></i> {row.zebrawell}
                    </div>
                  </td>
                  <td className="p-4 border-b border-neutral-medium text-center text-neutral-dark/80">
                    <div className="flex items-center justify-center">
                      <i className="fas fa-times-circle text-neutral-dark/50 mr-2"></i> {row.generic}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
