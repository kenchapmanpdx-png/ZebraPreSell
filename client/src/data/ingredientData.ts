export interface IngredientInfo {
  name: string;
  dosage: string;
  description: string;
  benefits: string[];
  timing?: string;
  researchNotes?: string;
}

export const amFormulaIngredients: IngredientInfo[] = [
  {
    name: "Magnesium Malate",
    dosage: "1,500 mg",
    description: "Essential for energy production and muscle function",
    benefits: [
      "Supports ATP energy production in cells",
      "Reduces muscle fatigue and cramping",
      "Helps with fibromyalgia symptoms",
      "Improves exercise tolerance"
    ],
    timing: "Morning with food",
    researchNotes: "Malate form specifically chosen for enhanced energy support and better absorption"
  },
  {
    name: "CoQ10 (Ubiquinol)",
    dosage: "300 mg",
    description: "Active form of CoQ10 for mitochondrial energy support",
    benefits: [
      "Enhances cellular energy production",
      "Powerful antioxidant protection",
      "Supports heart health",
      "May improve exercise capacity"
    ],
    timing: "Morning with fats for absorption",
    researchNotes: "Ubiquinol is the active, reduced form that's more bioavailable than ubiquinone"
  },
  {
    name: "Vitamin D3",
    dosage: "4,000 IU",
    description: "Supports immune function and bone health",
    benefits: [
      "Enhances immune system function",
      "Supports bone and muscle strength",
      "May improve mood and energy",
      "Important for connective tissue health"
    ],
    timing: "Morning with fats",
    researchNotes: "Higher doses often needed in EDS patients due to increased requirements"
  },
  {
    name: "Vitamin K2 (MK-7)",
    dosage: "200 mcg",
    description: "Directs calcium to bones and away from arteries",
    benefits: [
      "Works synergistically with Vitamin D",
      "Supports bone mineralization",
      "Promotes cardiovascular health",
      "May help with calcium regulation"
    ],
    timing: "Morning with fats",
    researchNotes: "MK-7 form has longer half-life and better bioavailability than MK-4"
  },
  {
    name: "PEA (Ultra-micronized)",
    dosage: "600 mg",
    description: "Natural pain relief and inflammation support",
    benefits: [
      "Reduces inflammatory pain",
      "Supports nerve health",
      "May help with mast cell stabilization",
      "Natural endocannabinoid system support"
    ],
    timing: "Morning on empty stomach",
    researchNotes: "Ultra-micronized form provides superior absorption and effectiveness"
  },
  {
    name: "Alpha-GPC",
    dosage: "300 mg",
    description: "Cognitive support and acetylcholine production",
    benefits: [
      "Enhances mental clarity and focus",
      "Supports memory function",
      "May improve brain fog",
      "Supports neurotransmitter production"
    ],
    timing: "Morning for cognitive benefits",
    researchNotes: "Crosses blood-brain barrier more effectively than other choline sources"
  },
  {
    name: "ALCAR",
    dosage: "600 mg",
    description: "Brain and mitochondrial support",
    benefits: [
      "Supports brain energy metabolism",
      "May improve cognitive function",
      "Enhances mitochondrial health",
      "Supports nerve regeneration"
    ],
    timing: "Morning on empty stomach",
    researchNotes: "Acetyl form crosses blood-brain barrier, supporting both brain and body energy"
  },
  {
    name: "Taurine",
    dosage: "500 mg",
    description: "Cardiovascular and nervous system support",
    benefits: [
      "Supports heart rhythm regulation",
      "May help with POTS symptoms",
      "Supports electrolyte balance",
      "Promotes nervous system stability"
    ],
    timing: "Morning with or without food",
    researchNotes: "Particularly beneficial for POTS patients due to cardiovascular effects"
  },
  {
    name: "Thiamine (Benfotiamine)",
    dosage: "150 mg",
    description: "Advanced B1 for nervous system health",
    benefits: [
      "Supports nerve function and repair",
      "Enhanced energy metabolism",
      "Better absorption than regular thiamine",
      "May help with neuropathy"
    ],
    timing: "Morning with food",
    researchNotes: "Benfotiamine form is fat-soluble and more bioavailable than water-soluble B1"
  },
  {
    name: "B2 (Riboflavin-5-Phosphate)",
    dosage: "10 mg",
    description: "Active B2 for energy metabolism",
    benefits: [
      "Essential for energy production",
      "Supports antioxidant systems",
      "May help prevent migraines",
      "Supports healthy skin and eyes"
    ],
    timing: "Morning with food",
    researchNotes: "Active form bypasses conversion step for immediate utilization"
  },
  {
    name: "B6 (Pyridoxal-5-Phosphate)",
    dosage: "10 mg",
    description: "Active B6 for neurotransmitter support",
    benefits: [
      "Supports neurotransmitter production",
      "Important for nervous system health",
      "May help with mood regulation",
      "Supports immune function"
    ],
    timing: "Morning with food",
    researchNotes: "P5P is the active form that doesn't require liver conversion"
  },
  {
    name: "B12 (Methyl + Adenosyl)",
    dosage: "500 mcg",
    description: "Dual-form B12 for optimal absorption",
    benefits: [
      "Supports energy and nerve function",
      "Essential for DNA synthesis",
      "May improve brain fog",
      "Supports methylation pathways"
    ],
    timing: "Morning sublingual for best absorption",
    researchNotes: "Combination provides both methylation and mitochondrial support"
  },
  {
    name: "Folate (L-5-MTHF)",
    dosage: "800 mcg",
    description: "Active folate for methylation support",
    benefits: [
      "Supports methylation pathways",
      "Important for DNA synthesis",
      "May help with mood and energy",
      "Bypasses MTHFR gene variants"
    ],
    timing: "Morning with food",
    researchNotes: "Active form suitable for those with MTHFR mutations"
  },
  {
    name: "Zinc Glycinate",
    dosage: "60 mg",
    description: "Highly absorbable zinc for immune support",
    benefits: [
      "Supports immune system function",
      "Important for wound healing",
      "Supports connective tissue health",
      "May help with skin health"
    ],
    timing: "Morning away from calcium",
    researchNotes: "Glycinate form reduces stomach irritation and improves absorption"
  },
  {
    name: "Copper Glycinate",
    dosage: "10 mg",
    description: "Balanced copper for connective tissue health",
    benefits: [
      "Essential for collagen cross-linking",
      "Supports iron metabolism",
      "Important for connective tissue",
      "Balances with zinc supplementation"
    ],
    timing: "Morning with zinc",
    researchNotes: "Balanced with zinc to prevent copper-zinc ratio imbalances"
  },
  {
    name: "Silicon (ch-OSA)",
    dosage: "200 mg",
    description: "Bioavailable silicon for connective tissue support",
    benefits: [
      "Supports collagen and elastin synthesis",
      "Important for bone health",
      "May improve skin elasticity",
      "Supports joint health"
    ],
    timing: "Morning on empty stomach",
    researchNotes: "Choline-stabilized orthosilicic acid provides superior bioavailability"
  }
];

export const pmFormulaIngredients: IngredientInfo[] = [
  {
    name: "Magnesium Malate",
    dosage: "1,500 mg",
    description: "Supports relaxation and muscle recovery",
    benefits: [
      "Promotes muscle relaxation",
      "Supports better sleep quality",
      "Reduces nighttime muscle cramps",
      "Helps with stress management"
    ],
    timing: "Evening with dinner",
    researchNotes: "Evening dose supports overnight muscle recovery and relaxation"
  },
  {
    name: "PEA (Ultra-micronized)",
    dosage: "600 mg",
    description: "Enhanced evening dose for pain relief",
    benefits: [
      "Reduces evening pain and discomfort",
      "Supports better sleep quality",
      "Natural anti-inflammatory effects",
      "May help with restless legs"
    ],
    timing: "Evening before bed",
    researchNotes: "Higher evening dose provides sustained overnight pain relief"
  },
  {
    name: "Alpha-GPC",
    dosage: "300 mg",
    description: "Supports brain health and recovery",
    benefits: [
      "Supports overnight brain recovery",
      "May improve sleep quality",
      "Supports memory consolidation",
      "Helps with neuroplasticity"
    ],
    timing: "Evening with dinner",
    researchNotes: "Evening dose supports overnight brain maintenance and repair"
  },
  {
    name: "ALCAR",
    dosage: "600 mg",
    description: "Enhanced evening dose for neurological support",
    benefits: [
      "Supports nerve repair overnight",
      "May improve sleep quality",
      "Supports brain energy metabolism",
      "Helps with neuropathy symptoms"
    ],
    timing: "Evening before bed",
    researchNotes: "Extended-release benefits support overnight nerve repair processes"
  },
  {
    name: "Taurine",
    dosage: "500 mg",
    description: "Promotes relaxation and cardiovascular health",
    benefits: [
      "Supports calm nervous system",
      "May improve sleep quality",
      "Supports heart rhythm",
      "Helps with evening anxiety"
    ],
    timing: "Evening with or without food",
    researchNotes: "Evening dose supports relaxation and cardiovascular recovery"
  },
  {
    name: "Hyaluronic Acid",
    dosage: "300 mg",
    description: "Joint lubrication and tissue hydration",
    benefits: [
      "Supports joint health and mobility",
      "Improves skin hydration",
      "May reduce morning stiffness",
      "Supports connective tissue repair"
    ],
    timing: "Evening for overnight benefits",
    researchNotes: "Evening dose allows overnight tissue hydration and repair"
  },
  {
    name: "R-Lipoic Acid",
    dosage: "200 mg",
    description: "Powerful antioxidant for nerve and mitochondrial health",
    benefits: [
      "Supports nerve health and repair",
      "Powerful antioxidant protection",
      "May help with neuropathy",
      "Supports mitochondrial function"
    ],
    timing: "Evening on empty stomach",
    researchNotes: "R-form is more potent and bioavailable than alpha-lipoic acid"
  },
  {
    name: "L-Theanine",
    dosage: "150 mg",
    description: "Promotes calm focus and relaxation",
    benefits: [
      "Promotes relaxation without sedation",
      "May improve sleep quality",
      "Supports stress management",
      "Helps with evening anxiety"
    ],
    timing: "Evening 30-60 minutes before bed",
    researchNotes: "Promotes alpha brain waves associated with relaxation and calm focus"
  }
];