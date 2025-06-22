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
    name: "Magnesium (Magnesium Malate)",
    dosage: "150 mg",
    description: "Supports muscle function, energy production, and neurological calming",
    benefits: [
      "Supports muscle function and recovery",
      "Enhances cellular energy production",
      "Promotes nervous system calming",
      "Helps reduce fatigue and weakness"
    ],
    timing: "Morning with breakfast"
  },
  {
    name: "CoQ10 (Ubiquinol)",
    dosage: "200 mg",
    description: "Highly absorbable form to fuel mitochondrial energy production and combat fatigue",
    benefits: [
      "Fuels mitochondrial energy production",
      "Combats fatigue effectively",
      "Powerful antioxidant protection",
      "Supports cardiovascular health"
    ],
    timing: "Morning with fat-containing meal",
    researchNotes: "Ubiquinol form provides superior absorption compared to ubiquinone"
  },
  {
    name: "PQQ",
    dosage: "10 mg",
    description: "Works with CoQ10 to promote creation of new mitochondria and support cellular energy",
    benefits: [
      "Promotes new mitochondria creation",
      "Enhances cellular energy production",
      "Supports cognitive function",
      "Powerful neuroprotective effects"
    ],
    timing: "Morning with CoQ10"
  },
  {
    name: "Vitamin D3",
    dosage: "75 mcg (3,000 IU)",
    description: "Essential for immune regulation, bone health, and connective tissue support",
    benefits: [
      "Supports immune system regulation",
      "Essential for bone health",
      "Supports connective tissue integrity",
      "May improve mood and energy"
    ],
    timing: "Morning with breakfast",
    researchNotes: "Morning dose aligns with natural circadian rhythm"
  },
  {
    name: "Vitamin K2 (MK-7)",
    dosage: "100 mcg",
    description: "Directs calcium to bones and away from arteries, supporting skeletal and vascular health",
    benefits: [
      "Directs calcium to bones properly",
      "Supports cardiovascular health",
      "Prevents arterial calcification",
      "Works synergistically with Vitamin D3"
    ],
    timing: "Morning with Vitamin D3",
    researchNotes: "All-trans MK-7 form provides longest half-life and best utilization"
  },
  {
    name: "ALCAR (Acetyl-L-Carnitine)",
    dosage: "100 mg",
    description: "Supports cognitive function and energy by helping transport fatty acids into mitochondria",
    benefits: [
      "Supports cognitive function and focus",
      "Enhances mitochondrial energy production",
      "Supports nerve health",
      "May improve mental clarity"
    ],
    timing: "Morning before breakfast"
  },
  {
    name: "Taurine",
    dosage: "300 mg",
    description: "Promotes cardiovascular stability, calms nervous system, and supports mast cell health",
    benefits: [
      "Promotes cardiovascular stability",
      "Calms nervous system function",
      "Supports mast cell health",
      "May help with POTS symptoms"
    ],
    timing: "Morning with food"
  },
  {
    name: "Benfotiamine (B1)",
    dosage: "150 mg",
    description: "Fat-soluble form of Vitamin B1 that supports nerve health and autonomic function",
    benefits: [
      "Supports nerve health and function",
      "Promotes autonomic nervous system stability",
      "Superior absorption compared to regular B1",
      "Supports energy metabolism"
    ],
    timing: "Morning with breakfast"
  },
  {
    name: "Thiamine HCl (B1)",
    dosage: "25 mg",
    description: "Provides water-soluble Vitamin B1 for immediate metabolic and energy needs",
    benefits: [
      "Supports immediate energy metabolism",
      "Essential for nervous system function",
      "Supports carbohydrate metabolism",
      "Complements benfotiamine"
    ],
    timing: "Morning with breakfast"
  },
  {
    name: "Riboflavin-5-Phosphate (B2)",
    dosage: "5 mg",
    description: "Active form of B2, crucial for cellular energy production and methylation cycles",
    benefits: [
      "Supports cellular energy production",
      "Essential for methylation cycles",
      "Superior bioavailability",
      "Supports antioxidant function"
    ],
    timing: "Morning with breakfast"
  },
  {
    name: "Pyridoxal-5-Phosphate (B6)",
    dosage: "5 mg",
    description: "Active form of B6, essential for neurotransmitter synthesis and histamine metabolism",
    benefits: [
      "Supports neurotransmitter synthesis",
      "Essential for histamine metabolism",
      "May help with MCAS symptoms",
      "Active form for immediate use"
    ],
    timing: "Morning with breakfast"
  },
  {
    name: "Vitamin B12 (Dual Form)",
    dosage: "100 mcg",
    description: "50:50 Methylcobalamin + Adenosylcobalamin to support neurological health and cellular energy",
    benefits: [
      "Supports neurological health",
      "Enhances cellular energy production",
      "Dual-form for comprehensive support",
      "Essential for methylation"
    ],
    timing: "Morning with breakfast",
    researchNotes: "Combination provides both neurological (methyl) and energy (adeno) support"
  },
  {
    name: "Pantothenic Acid (B5)",
    dosage: "20 mg",
    description: "Supports adrenal function and the body's stress response",
    benefits: [
      "Supports adrenal function",
      "Helps manage stress response",
      "Essential for energy metabolism",
      "Supports hormone production"
    ],
    timing: "Morning with breakfast"
  },
  {
    name: "Zinc Bisglycinate",
    dosage: "15 mg",
    description: "Crucial for connective tissue integrity, wound healing, and immune system balance",
    benefits: [
      "Supports connective tissue integrity",
      "Essential for wound healing",
      "Supports immune system balance",
      "Superior absorption as bisglycinate"
    ],
    timing: "Morning with food"
  },
  {
    name: "Copper Bisglycinate",
    dosage: "1.5 mg",
    description: "Balances zinc intake and acts as key cofactor in forming strong collagen",
    benefits: [
      "Essential for collagen formation",
      "Balances zinc intake",
      "Supports connective tissue strength",
      "Important for EDS management"
    ],
    timing: "Morning with zinc"
  },
  {
    name: "CDP-Choline (Citicoline)",
    dosage: "150 mg",
    description: "Enhances mental energy, focus, and supports healthy brain cell membranes",
    benefits: [
      "Enhances mental energy and focus",
      "Supports brain cell membrane health",
      "May improve cognitive performance",
      "Supports neurotransmitter production"
    ],
    timing: "Morning on empty stomach"
  },
  {
    name: "Betaine (TMG)",
    dosage: "250 mg",
    description: "Acts as methyl donor to support healthy methylation cycles and reduce homocysteine",
    benefits: [
      "Supports healthy methylation cycles",
      "Helps reduce homocysteine levels",
      "Acts as methyl donor",
      "Supports cardiovascular health"
    ],
    timing: "Morning with breakfast"
  },
  {
    name: "Iodine (Potassium Iodide)",
    dosage: "75 mcg",
    description: "Trace amount to support healthy thyroid function without overstimulating",
    benefits: [
      "Supports healthy thyroid function",
      "Essential for metabolism",
      "Careful dosing to avoid overstimulation",
      "Important for energy regulation"
    ],
    timing: "Morning with breakfast"
  },
  {
    name: "L-Proline",
    dosage: "250 mg",
    description: "Key amino acid building block for healthy collagen and connective tissue",
    benefits: [
      "Essential for collagen synthesis",
      "Supports connective tissue health",
      "Important for EDS management",
      "Supports wound healing"
    ],
    timing: "Morning with or without food"
  },
  {
    name: "Vitamin E (Mixed Tocopherols)",
    dosage: "15 mg",
    description: "Full-spectrum antioxidant that helps protect cells from oxidative stress",
    benefits: [
      "Full-spectrum antioxidant protection",
      "Protects cells from oxidative stress",
      "Supports immune function",
      "May help with inflammation"
    ],
    timing: "Morning with fat-containing meal"
  },
  {
    name: "Manganese Bisglycinate",
    dosage: "1 mg",
    description: "Essential cofactor for enzymes involved in building strong connective tissue",
    benefits: [
      "Essential for connective tissue formation",
      "Supports enzyme function",
      "Important for collagen synthesis",
      "Superior absorption as bisglycinate"
    ],
    timing: "Morning with food"
  }
];

export const pmFormulaIngredients: IngredientInfo[] = [
  {
    name: "Magnesium Bisglycinate",
    dosage: "250 mg",
    description: "Highly absorbable, calming form to promote relaxation, muscle comfort, and restorative sleep",
    benefits: [
      "Promotes relaxation and muscle comfort",
      "Supports restorative sleep quality",
      "Highly absorbable form",
      "Reduces nighttime muscle tension"
    ],
    timing: "Evening with dinner",
    researchNotes: "Bisglycinate form provides superior absorption and calming effects"
  },
  {
    name: "Phosphatidylcholine (Sunflower)",
    dosage: "300 mg",
    description: "Key building block for healthy cell membranes, supporting brain health and cellular repair",
    benefits: [
      "Supports healthy cell membrane function",
      "Promotes brain health and repair",
      "Supports cellular recovery overnight",
      "Non-GMO sunflower source"
    ],
    timing: "Evening with dinner"
  },
  {
    name: "L-Theanine",
    dosage: "125 mg",
    description: "Promotes a state of calm relaxation without drowsiness, supporting stress reduction",
    benefits: [
      "Promotes calm relaxation without drowsiness",
      "Supports stress reduction",
      "May improve sleep quality",
      "Helps with evening anxiety"
    ],
    timing: "Evening 30-60 minutes before bed",
    researchNotes: "Promotes alpha brain waves associated with relaxation and calm focus"
  },
  {
    name: "Hyaluronic Acid (Sodium Hyaluronate)",
    dosage: "150 mg",
    description: "Hydrates connective tissues, lubricates joints, and supports skin integrity",
    benefits: [
      "Hydrates connective tissues",
      "Lubricates joints for mobility",
      "Supports skin integrity and hydration",
      "May reduce morning stiffness"
    ],
    timing: "Evening for overnight benefits",
    researchNotes: "Evening dose allows overnight tissue hydration and repair"
  },
  {
    name: "Silicon (MMST or Stabilized OSA)",
    dosage: "5 mg",
    description: "Highly bioavailable form of silicon essential for building strong, resilient collagen",
    benefits: [
      "Essential for strong collagen formation",
      "Supports connective tissue resilience",
      "Highly bioavailable form",
      "Important for EDS management"
    ],
    timing: "Evening on empty stomach",
    researchNotes: "Stabilized form provides superior bioavailability compared to other silicon sources"
  },
  {
    name: "Astaxanthin",
    dosage: "2 mg",
    description: "Powerful antioxidant that helps protect cells from oxidative damage and supports skin health",
    benefits: [
      "Powerful antioxidant protection",
      "Protects cells from oxidative damage",
      "Supports skin health and integrity",
      "May help with inflammation"
    ],
    timing: "Evening with fats for absorption",
    researchNotes: "Natural source from Haematococcus pluvialis provides superior potency"
  },
  {
    name: "PEA (Ultra-micronized)",
    dosage: "300 mg",
    description: "Micronized form to help calm mast cell and nerve inflammation, supporting pain relief",
    benefits: [
      "Helps calm mast cell inflammation",
      "Supports nerve health and pain relief",
      "Ultra-micronized for better absorption",
      "Natural anti-inflammatory effects"
    ],
    timing: "Evening before bed",
    researchNotes: "Ultra-micronized form provides enhanced bioavailability and effectiveness"
  },
  {
    name: "Potassium Citrate",
    dosage: "99 mg",
    description: "Essential electrolyte to support cardiovascular stability, fluid balance, and muscle function",
    benefits: [
      "Supports cardiovascular stability",
      "Essential for fluid balance",
      "Supports muscle function",
      "May help with POTS symptoms"
    ],
    timing: "Evening with or without food"
  },
  {
    name: "Molybdenum Glycinate",
    dosage: "100 mcg",
    description: "Trace mineral that supports sulfite detoxification pathways",
    benefits: [
      "Supports sulfite detoxification",
      "Essential for enzyme function",
      "May help with food sensitivities",
      "Supports metabolic pathways"
    ],
    timing: "Evening with food"
  },
  {
    name: "Boron Glycinate",
    dosage: "2 mg",
    description: "Supports healthy bone density and proper metabolism of other minerals like magnesium",
    benefits: [
      "Supports healthy bone density",
      "Enhances magnesium metabolism",
      "Supports hormone balance",
      "Important for bone health"
    ],
    timing: "Evening with magnesium"
  },
  {
    name: "Selenium (L-Selenomethionine)",
    dosage: "100 mcg",
    description: "Supports thyroid health and acts as key component of the body's antioxidant enzyme systems",
    benefits: [
      "Supports thyroid health and function",
      "Key component of antioxidant enzymes",
      "Supports immune function",
      "May help with inflammation"
    ],
    timing: "Evening with food"
  },
  {
    name: "Chromium Picolinate",
    dosage: "75 mcg",
    description: "Helps support stable blood sugar levels and insulin sensitivity",
    benefits: [
      "Supports stable blood sugar levels",
      "Enhances insulin sensitivity",
      "May help with energy stability",
      "Supports metabolic health"
    ],
    timing: "Evening with dinner"
  },
  {
    name: "Niacinamide (B3)",
    dosage: "15 mg",
    description: "Flush-free form of B3 that supports cellular energy (NAD+) and DNA repair",
    benefits: [
      "Supports cellular energy production",
      "Essential for NAD+ synthesis",
      "Supports DNA repair processes",
      "Flush-free form"
    ],
    timing: "Evening with food"
  },
  {
    name: "Folate (L-5-MTHF)",
    dosage: "400 mcg",
    description: "Most bioavailable, active form of folate, essential for methylation, DNA repair, and neurovascular health",
    benefits: [
      "Most bioavailable active form",
      "Essential for methylation pathways",
      "Supports DNA repair processes",
      "Supports neurovascular health"
    ],
    timing: "Evening with food",
    researchNotes: "Quatrefolic® or Metafolin® forms bypass MTHFR gene variants"
  },
  {
    name: "Biotin (B7)",
    dosage: "100 mcg",
    description: "Supports the health of skin, hair, and nails",
    benefits: [
      "Supports healthy skin, hair, and nails",
      "Essential for metabolism",
      "Supports enzyme function",
      "May help with connective tissue health"
    ],
    timing: "Evening with food"
  },
  {
    name: "Vitamin A (Beta-Carotene)",
    dosage: "900 mcg RAE",
    description: "Natural precursor to Vitamin A, supporting immune function, vision, and cellular health",
    benefits: [
      "Natural precursor to Vitamin A",
      "Supports immune function",
      "Essential for vision health",
      "Supports cellular health and repair"
    ],
    timing: "Evening with fats for absorption"
  }
];