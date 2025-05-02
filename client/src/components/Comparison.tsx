export default function Comparison() {
  const comparisonData = [
    { feature: "Clinical Analysis", zebrawell: "Comprehensive", generic: "Minimal or None" },
    { feature: "Bioavailability", zebrawell: "Maximum Absorption", generic: "Variable" },
    { feature: "Quality Testing", zebrawell: "Third-party Verified", generic: "Limited Testing" },
    { feature: "Cost Efficiency", zebrawell: "$1.50–$2.50/day", generic: "$3–$6+" },
    { feature: "Allergen Control", zebrawell: "Medical-Grade", generic: "Inconsistent" },
    { feature: "Formulation", zebrawell: "EDS/POTS/MCAS Specific", generic: "General Purpose" }
  ];

  return (
    <section id="comparison" className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-medical-blue mb-6 fade-in">Clinical Research Comparison</h2>
        <p className="text-center text-neutral-dark/80 max-w-2xl mx-auto mb-12 fade-in">Comparing ZebraWell's medical-grade formulation against conventional supplement alternatives</p>
        
        <div className="max-w-4xl mx-auto overflow-x-auto fade-in">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="p-4 border-b-2 border-neutral-medium"></th>
                <th className="p-4 border-b-2 border-medical-blue text-center bg-medical-blue/10 text-medical-blue font-bold zebra-stripes">ZebraWell Clinical</th>
                <th className="p-4 border-b-2 border-neutral-medium text-center text-neutral-dark font-bold">Generic Brands</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, index) => (
                <tr key={index}>
                  <td className="p-4 border-b border-neutral-medium font-semibold">{row.feature}</td>
                  <td className="p-4 border-b border-medical-blue/30 text-center bg-blue-50/30 text-medical-blue">
                    <div className="flex items-center justify-center">
                      <i className="fas fa-flask-vial text-medical-blue mr-2"></i> {row.zebrawell}
                    </div>
                  </td>
                  <td className="p-4 border-b border-neutral-medium text-center text-neutral-dark/80">
                    <div className="flex items-center justify-center">
                      <i className="fas fa-triangle-exclamation text-neutral-dark/50 mr-2"></i> {row.generic}
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
