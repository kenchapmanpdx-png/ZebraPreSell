export interface IngredientInfo {
  name: string;
  dosage: string;
  description: string;
  benefits?: string[];
  timing?: string;
  researchNotes?: string;
}

// v6.8 AM CAPSULES (19 ingredients)
export const amFormulaIngredients: IngredientInfo[] = [
  { name: "L-Lysine HCl", dosage: "500 mg", description: "Essential collagen cross-linking substrate; required for carnitine synthesis" },
  { name: "Nicotinamide Riboside (Niagen®)", dosage: "250 mg", description: "NAD+ precursor providing mast cell stabilization via SIRT6 pathway activation" },
  { name: "CoQ10 (Ubiquinol)", dosage: "200 mg", description: "Highly absorbable form to fuel mitochondrial energy production & combat fatigue" },
  { name: "Recombinant Human Lactoferrin", dosage: "150 mg", description: "Precision-fermented human lactoferrin for unique tryptase inhibition; dairy-free & MCAS-safe" },
  { name: "Benfotiamine (B1)", dosage: "150 mg", description: "Fat-soluble form of Vitamin B1 with 5× bioavailability supporting nerve health & autonomic function" },
  { name: "Pycnogenol®", dosage: "100 mg", description: "French Maritime Pine bark shown to reduce MMP-8 in human RCT; supports collagen protection" },
  { name: "Niacinamide (B3)", dosage: "50 mg", description: "Flush-free NAD+ precursor at conservative dose to avoid histamine elevation" },
  { name: "P5P (Pyridoxal-5-Phosphate)", dosage: "50 mg", description: "Active form of B6, essential for DAO enzyme histamine degradation & neurotransmitter synthesis" },
  { name: "Manganese Bisglycinate", dosage: "4 mg", description: "Essential cofactor for SOD2 antioxidant enzyme & glycosyltransferase function" },
  { name: "R5P (Riboflavin-5-Phosphate)", dosage: "25 mg", description: "Active form of B2, crucial for FAD cofactor & mitochondrial ETC Complexes I/II" },
  { name: "PQQ (BioPQQ®)", dosage: "20 mg", description: "Inhibits MMP-1, MMP-3 & MMP-13 in human dermal fibroblasts; supports mitochondrial biogenesis" },
  { name: "Copper Bisglycinate", dosage: "2 mg", description: "Essential lysyl oxidase cofactor for collagen cross-linking; separated from zinc by 12+ hours" },
  { name: "Pantothenic Acid (B5)", dosage: "5 mg", description: "Supports Coenzyme A synthesis for Krebs cycle energy metabolism" },
  { name: "Boron Glycinate", dosage: "2 mg", description: "Supports bone metabolism & proper utilization of other minerals like magnesium" },
  { name: "Vitamin B12 (Methylcobalamin)", dosage: "1 mg", description: "Active methylated form supporting methylation pathways & neurological function" },
  { name: "Methylfolate (5-MTHF)", dosage: "800 mcg", description: "Most bioavailable active form of folate (Quatrefolic®), bypassing MTHFR polymorphisms" },
  { name: "Molybdenum Glycinate", dosage: "150 mcg", description: "Essential sulfite oxidase cofactor supporting detoxification pathways" },
  { name: "Selenium (Selenomethionine)", dosage: "100 mcg", description: "Essential glutathione peroxidase cofactor & thyroid function support" },
  { name: "Biotin (B7)", dosage: "300 mcg", description: "Essential carboxylase cofactor supporting energy metabolism" }
];

// v6.8 PM CAPSULES (8 ingredients)
export const pmFormulaIngredients: IngredientInfo[] = [
  { name: "L-Lysine HCl", dosage: "500 mg", description: "Evening dose maintains sustained collagen substrate availability throughout overnight repair" },
  { name: "Nicotinamide Riboside (Niagen®)", dosage: "250 mg", description: "Evening dose maintains stable NAD+ elevation due to short 2.7-hour half-life" },
  { name: "L-Theanine (Suntheanine®)", dosage: "200 mg", description: "Promotes calm relaxation without drowsiness via GABA-A modulation & mast cell stabilization" },
  { name: "Pycnogenol®", dosage: "100 mg", description: "Evening dose provides sustained MMP-8 inhibition matching successful German RCT protocol" },
  { name: "Zinc Carnosine (PepZin GI®)", dosage: "75 mg", description: "Clinically-proven GI mucosal healing compound; reduces gut permeability; separated from copper" },
  { name: "Vitamin D3", dosage: "2,000 IU", description: "Supports mast cell stabilization & immune modulation; paired with K2 for optimal function" },
  { name: "Vitamin K2 (MK-7)", dosage: "100 mcg", description: "Activates osteocalcin for bone health; synergistic with D3. ⚠️ Contraindicated with warfarin" },
  { name: "Astaxanthin (AstaReal®)", dosage: "8 mg", description: "Powerful antioxidant with MMP inhibition ratio of 1.44× & mast cell support ratio of 1.21×" }
];

// v6.8 POWDER (10 ingredients)
export const powderIngredients: IngredientInfo[] = [
  { name: "Magnesium Glycinate", dosage: "300 mg elem", description: "MCAS-safe chelated form supporting muscle relaxation, DAO cofactor function & autonomic stability" },
  { name: "Sodium Ascorbate (Vitamin C)", dosage: "2,000 mg", description: "Essential collagen synthesis cofactor; provides ~218mg sodium beneficial for POTS; non-acidic" },
  { name: "Taurine", dosage: "1,500 mg", description: "Provides MMP-9 transcriptional suppression, mast cell stabilization & GABA-A modulation" },
  { name: "PEA (Micronized/Levagen+)", dosage: "1,400 mg", description: "CB2/PPAR-α agonist achieving 54% histamine inhibition; used at 10:1 ratio with luteolin" },
  { name: "L-Carnitine Fumarate", dosage: "1,000 mg", description: "Supports mitochondrial fatty acid transport; fumarate form feeds directly into Krebs cycle" },
  { name: "L-Proline", dosage: "1,000 mg", description: "Conditionally essential collagen substrate in hEDS; supports gut lining integrity" },
  { name: "Silicon (MMST)", dosage: "10 mg elem", description: "Collagen cross-linking support in highly bioavailable MMST form; acacia matrix carrier" },
  { name: "EMIQ", dosage: "300 mg", description: "Enzymatically modified isoquercitrin with 17× quercetin bioavailability for mast cell stabilization" },
  { name: "Chlorogenic Acid", dosage: "200 mg", description: "MMP-9 inhibitor achieving 1.6× IC50 concentration; provides mild BP support (AM only)" },
  { name: "Luteolin (Micronized)", dosage: "140 mg", description: "Superior mast cell stabilization vs cromolyn; used at 10:1 ratio with PEA per Glialia® protocol" }
];
