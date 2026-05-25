"use client"

import { useState } from "react"
import { ChevronDown, ChevronRight, Shield, Wrench, Factory, Sun, Package, Zap, FlameKindling, Layers, Sofa, Droplets, HardHat, Building2 } from "lucide-react"

/* ─── DATA ─────────────────────────────────────────────────────────────── */

const oemContent = {
  title: "RustShield — Rust & Corrosion Protection",
  badge: "OEM",
  subtitle: "Transparent Polysilazane Nanotechnology Solution | 10-Year Life",
  intro: "A globally uncompetitive, sustainable nanotechnology system for long-term metal protection. Applied over any painted metal surface to protect metal at a molecular level.",
  variants: [
    {
      number: "01",
      title: "Direct Transparent Top Coat",
      description: "Applied directly on metal, eliminating traditional processes like galvanizing, powder coating and other conventional corrosion protection methods. A breakthrough low-micron protection system delivering long-lasting rust and corrosion resistance.",
    },
    {
      number: "02",
      title: "Paint + Nano Top Coat System",
      description: "No galvanizing. No powder coating. Use standard PU or epoxy base paint, then apply Nano transparent top coat for 10-year preservation against rust and corrosion. Protects assets without harsh chemical damage, heavy process dependency, or conventional maintenance cycles.",
    },
  ],
  certifications: [
    { title: "Salt Spray Test", value: "10,000+ HRS", desc: "Exceptional corrosion resistance verified under accelerated ASTM B117 conditions" },
    { title: "Eco Compliance", value: "ZERO VOC", desc: "Environmentally safe, sustainable, and compliant with global emission standards" },
    { title: "Non-Leaching", value: "FOOD SAFE", desc: "Certified suitable for sensitive applications with no chemical migration" },
    { title: "Thermal Range", value: "-50° TO 850°C", desc: "Maintains structural and protective integrity across extreme temperatures" },
  ],
  worksOn: ["Stainless Steel", "New Painted Metal", "Rusted Metal Restoration"],
  revolution: {
    title: "A Revolution for Exporters and OEMs",
    description: "Ideal for machinery, automotive, components and hundreds of metal-intensive industries.",
    points: [
      "Zero VOC Sustainable Technology",
      "Certified Performance — SGS, ASTM B117, RoHS 10E",
      "Temperature Resistance: -50°C to 850°C",
      "Long-Term Asset Preservation",
      "No harsh chemical process damage",
      "A new alternative to traditional metal protection systems",
    ],
  },
  footer: "Time to say goodbye to galvanizing, powder coating, etc.",
}

const industrialContent = {
  title: "5-Layer Sustainable Protection System",
  badge: "Industrial",
  intro: "End-to-end bio & low/zero VOC anti-rust solution for restoration, preservation and long-life protection of existing metal assets.",
  fiveSteps: [
    { step: "1", title: "Manual Hand Tooling", desc: "Removal of loose rust, scale, dirt & contaminants by manual hand tooling. Safe + No Dust + No Damage." },
    { step: "2", title: "Bio Rust Remover", desc: "Plant based rust remover dissolves rust gently. No acid. No harm. Biodegradable & safe." },
    { step: "3", title: "Water Based Rust Converter", desc: "Converts active rust into dissociable protective layer. Water based. Zero harsh chemicals." },
    { step: "4", title: "Low VOC Epoxy Coating", desc: "High built, surface tolerant epoxy for long term corrosion protection. 160 microns DFT. Low VOC & environment friendly." },
    { step: "5", title: "Nano Top Coat Zero VOC", desc: "Nanotechnology transparent top coat provides UV protection, gloss retention & long lasting durability. 10 microns DFT. Zero VOC." },
  ],
  variants: [
    {
      number: "01",
      title: "Stainless Steel Preservation",
      description: "After proper cleaning to remove contamination, oil and grease, a transparent Nano top coat is applied. Creates a protective barrier that keeps stainless steel looking new while helping prevent rusting and degradation for years.",
    },
    {
      number: "02",
      title: "Painted Metal Preservation",
      description: "Applied over newly painted metal surfaces after surface cleaning. The transparent Nano top coat makes painted metal anti-rust for up to 10 years while preserving the paint film itself — reducing degradation often seen in conventional PU and epoxy-only systems.",
    },
    {
      number: "03",
      title: "Rusted Surface Restoration — A Global Game Changer",
      description: "A disruptive restoration system replacing hazardous traditional multi-layer rust treatment systems.",
      isHighlighted: true,
    },
  ],
  eliminates: [
    "Sand Blasting",
    "Grit Blasting",
    "Acid Pickling",
    "Hazardous rust removal methods",
  ],
  savings: {
    nanoquinn: { price: "₹1599 + GST", duration: "ONE TIME APPLICATION • 10 YEAR PROTECTION", benefits: ["SAFE", "SUSTAINABLE", "COST EFFECTIVE"] },
    traditional: { price: "₹2500 + GST", duration: "TWICE IN 10 YEARS", problems: ["HIGH COST", "HIGH RISK", "SHORT LIFE", "ENVIRONMENT & HEALTH DAMAGE"] },
  },
  system: {
    title: "NanoQuinn Restoration System",
    steps: [
      "Surface preparation through hand tools and chipping",
      "Plant-based biodegradable rust remover (zero harm to metal, people and environment)",
      "Sustainable water-based rust converter with primer finish",
      "100-micron surface-tolerant epoxy with low VOC",
      "Nano transparent top coat for long-term protection",
    ],
  },
  disruption: {
    title: "Why It Is a Global Disruption",
    keyPoint: "Traditional epoxy and PU systems alone do not fully stop moisture, oxygen and ion ingress, leading to progressive metal degradation. NanoQuinn's 8–10 micron transparent Nano barrier is designed to block moisture, oxygen and ion ingress — shifting protection from repeated maintenance to preservation.",
    points: [
      "Replaces hazardous traditional restoration systems",
      "Reduces damage to metal from aggressive methods",
      "Major Capex and Opex benefits",
      "Strong ESG and sustainability advantages",
      "Lower maintenance dependency",
      "Long-term asset preservation model",
      "Creates a new alternative to conventional rust removal-to-protection systems",
    ],
  },
  footer: "SAVE METAL • SAVE MONEY • SAVE PEOPLE • SAVE PLANET",
}

const polymersContent = {
  title: "Transparent Nanotechnology for Polymers",
  subtitle: "Invisible Shield. Powerful Protection.",
  intro: "Advanced nanotechnology creates an ultra-thin, invisible layer that bonds at the molecular level with polymer surfaces, delivering long term performance and maintaining newness for years.",
  protection: [
    { title: "UV Protection", desc: "Ceramic matrix absorbs and scatters UV radiation, preventing fading, chalking & brittleness" },
    { title: "Heat & IR Protection", desc: "Inorganic Si–N / Si–O ceramic network exhibits high thermal stability and IR resistance" },
    { title: "Hydrophobic Protection", desc: "Low surface energy nano-structure repels water and prevents moisture penetration" },
    { title: "Chemical Protection", desc: "Dense crosslinked nano barrier limits diffusion of oils, solvents, oxygen & contaminants" },
    { title: "Abrasion Resistance", desc: "High-density ceramic nano matrix increases surface hardness up to 8–9H" },
    { title: "Anti-Stain / Easy Clean", desc: "Oleophobic nano surface lowers adhesion force of dirt, grease & contaminants" },
  ],
  features: [
    { title: "Transparent & Invisible", desc: "Does not alter color, gloss or texture" },
    { title: "High Chemical Resistance", desc: "Protects against everyday chemicals" },
    { title: "Scratch Resistant", desc: "Minimizes micro scratches and scuffs" },
    { title: "Easy to Clean", desc: "Dust, dirt & stains don't stick" },
    { title: "Long Lasting Performance", desc: "Protection that stays for years" },
    { title: "Environment Friendly", desc: "Low VOC. Safe for you and the environment" },
  ],
  noWearAndTear: [
    { title: "UV Rays", desc: "Protects from harmful UV radiation. No fading. No yellowing." },
    { title: "Heat", desc: "Withstands high temperatures. No damage. No distortion." },
    { title: "Oleophobic", desc: "Repels oil, grease and chemicals. Easy to clean." },
    { title: "Hydrophobic", desc: "Water beads up and rolls off. Stain and spot resistant." },
  ],
  applications: {
    title: "Perfect For FRP / Polymers Surfaces",
    items: [
      { label: "FRP Water Tanks", desc: "Prevents UV damage & discoloration" },
      { label: "Rooftop Sheets", desc: "Protects from sunlight, heat & weathering" },
      { label: "Polymers Panels", desc: "Maintains color & shine. Prevents brittleness" },
      { label: "Outdoor Furniture", desc: "Resists fading & aging. Keeps like new" },
      { label: "Signs & Displays", desc: "High protection for long lasting clarity" },
      { label: "Pipes & Conduits", desc: "Prevents degradation. Extends service life" },
    ],
  },
  disruption: {
    title: "Why It Is Disruptive",
    points: [
      "Introduces the concept of Asset Preservation for Polymerss & FRP, not just coating",
      "Converts vulnerable polymer assets into long-life protected assets",
      "Bridges OEM + MRO (maintenance, repair and overhaul) in one technology",
      "Can challenge traditional replacement-driven maintenance practices",
      "A potentially revolutionary category creation in surface engineering and asset protection",
    ],
  },
  footer: "MAINTAINS NEWNESS. KEEPS SURFACES LOOKING NEW FOR YEARS.",
  tagline: "Innovate Today. Protect Forever. Preserve Newness.",
}

const solarContent = {
  title: "Solar Anti-Dust / Anti-Soiling Coating",
  subtitle: "Efficiency Booster | Self-Cleaning | Water Repellent",
  intro: "The ultimate solution to the biggest pain in solar performance. Revolutionary aftermarket solution that eliminates dust and soiling — the main causes of solar output reduction.",
  stats: [
    { value: "12%", label: "Efficiency Booster", desc: "Generate more power with clean sunlight" },
    { value: "50%", label: "Maintenance Reduction", desc: "Spend less on cleaning & maintenance" },
    { value: "90%", label: "Water Wastage Reduction", desc: "Save millions of gallons of water" },
  ],
  benefits: [
    { title: "Anti-Dust & Anti-Soiling Shield", desc: "Reduces dirt accumulation and keeps panels cleaner for longer." },
    { title: "Self-Cleaning Hydrophobic Effect", desc: "Rainwater rolls off carrying dust and dirt effectively." },
    { title: "UV Resistant", desc: "Withstands extreme sunlight & weather conditions." },
    { title: "Chemical Free", desc: "Safe for panels & the environment." },
    { title: "Long Lasting", desc: "Durable protection for years of performance." },
    { title: "Protects Panels", desc: "Extends life & maintains high performance." },
  ],
  howItWorks: [
    { title: "Anti-Reflective Nano Layer", desc: "Refractive index matching reduces Fresnel reflection losses" },
    { title: "Nano Surface Structuring", desc: "Nano-scale SiO₂ particles minimize light scattering & improve optical clarity" },
    { title: "Hydrophobic Effect", desc: "Low surface energy creates water beading & moisture repellency" },
    { title: "Anti-Soiling Property", desc: "Prevents strong bonding of contaminants, bird droppings & pollution" },
    { title: "Self-Cleaning Action", desc: "Rainwater easily removes loose contaminants from the surface" },
    { title: "UV & Environmental Stability", desc: "SiO₂ nano matrix remains optically stable under UV & outdoor exposure" },
  ],
  idealFor: [
    "Utility-scale solar parks",
    "Industrial rooftops",
    "High dust zones — India, Middle East, Africa",
  ],
  footer: "CLEAN TODAY. POWER TOMORROW. BOOST YIELD. CUT COSTS. SAVE WATER. SAVE PLANET.",
  tagline: "Sustainable Solution for a Brighter Future.",
}

const electricalContent = {
  title: "ElectroShield — 5-in-1 Protection",
  subtitle: "Advanced Nano Polymer Protection Technology",
  intro: "A transparent nano-coating that forms a strong, ultra-thin, breathable protective layer on electrical & electronic components without affecting performance or conductivity. Disaster management innovation designed for prevention, protection, and resilience.",
  specs: [
    { label: "Temperature Range", value: "-20°C to 130°C" },
    { label: "Dielectric Strength", value: "256 kV/cm" },
    { label: "Warranty Coverage", value: "18 Months" },
    { label: "Max Operational Range", value: "10,000 Volts" },
    { label: "Certification", value: "IPX8 Certified" },
  ],
  howItWorks: [
    { step: "1", title: "Application", desc: "ElectroShield is easily applied by spraying or brushing on clean electrical components." },
    { step: "2", title: "Nano Coating Activation", desc: "The nano particles spread uniformly and bond with the surface, penetrating micro-pores, crevices & hidden areas." },
    { step: "3", title: "Protective Shield Formation", desc: "It forms a transparent, breathable, hydrophobic nano layer that shields components from external threats." },
    { step: "4", title: "5-in-1 Protection", desc: "The nano shield works 24/7 to prevent damage from moisture, corrosion, dust, heat, and short circuits." },
  ],
  protections: [
    {
      number: "1",
      title: "Fire & Short Circuit Protection",
      desc: "Helps reduce electrical risks by protecting vulnerable systems against short circuits, flashover triggers, and fire-causing failures.",
    },
    {
      number: "2",
      title: "Moisture & Water Ingress Protection",
      desc: "Creates a hydrophobic protective barrier that resists moisture penetration and even supports performance continuity in water-exposed or water-dipped conditions.",
    },
    {
      number: "3",
      title: "Electrical Insulation & Thermal Stability",
      desc: "Enhances insulation integrity while supporting thermal stability under demanding operating conditions.",
    },
    {
      number: "4",
      title: "Dust Barrier & Anti-Contamination Protection",
      desc: "Acts as a protective barrier against dust, contaminants, and pollution that often cause electrical malfunction.",
    },
    {
      number: "5",
      title: "Anti-Corrosion Protection",
      desc: "Protects electrical components, panels, connectors, terminals, and systems from corrosion, oxidation, and long-term degradation.",
    },
  ],
  worksOn: [
    "Connectors & Wiring", "Battery Pack & BMS", "ECU / ECM", "Fuse Box", "Sensors",
    "Power Electronics", "Infotainment & Displays", "ADAS Modules", "PC & Circuit Boards",
    "Control Panels", "Industrial Electronics", "LED & Lighting Systems",
  ],
  idealFor: [
    "Flood & Water Damage Prevention",
    "Cyclone & Storm Resistant Protection",
    "Fire & Heat Resistant Shielding",
    "Anti Moisture & Short Circuit",
  ],
  revolution: [
    "Breathable Protection Technology — protects without sealing the surface into failure.",
    "Disaster Management Innovation — designed for prevention, protection, and resilience.",
    "Keeps Critical Assets Performing — even in harsh, humid, corrosive, and water-exposed environments.",
    "Extends Asset Life — reducing breakdowns, failures, and replacement costs.",
    "From OEM to Maintenance — applicable across manufacturing, utilities, power, defense, railways, marine, telecom, and infrastructure.",
  ],
  footer: "PROTECTS TODAY. PREVENTS TOMORROW. ENHANCES RELIABILITY. ENSURES CONTINUITY.",
}

const floorContent = {
  title: "FloorGuard™",
  subtitle: "A Transparent Floor Protection Innovation for Asset Preservation",
  intro: "FloorGuard™ is a breakthrough transparent nanotechnology coating designed to preserve, protect, and maintain the original newness of flooring surfaces for years.",
  applications: ["Marble", "Granite", "Natural Stone", "Vitrified Tiles", "Concrete Floors", "Epoxy Floors", "PU Floors", "Industrial & Commercial Flooring"],
  benefits: [
    "Preserves original shine and appearance",
    "Maintains newness intact",
    "Creates anti-stain / stain-proof barrier",
    "Resists oil, grease and dirt penetration",
    "Makes floors easier to clean and maintain",
    "Reduces wear and tear degradation",
    "Protects against chemical spotting and contamination",
    "Water-based, sustainable Zero VOC technology",
  ],
  description: "Unlike conventional sealers, waxes or sacrificial coatings, FloorGuard™ is a transparent preservation technology that protects the asset itself. It turns ordinary flooring into a protected surface with no stain absorption, no oil penetration, reduced maintenance cost, long-term surface preservation, and asset life extension.",
  industries: ["Factories & Industrial Plants", "Hotels", "Hospitals", "Airports", "Commercial Buildings", "Malls", "Educational Institutions", "Residential Premium Flooring"],
  footer: "FloorGuard™ — From Flooring to Future-Proofed Assets.",
  tagline: "A Civil Asset Protection Innovation by NanoQuinn.",
}

const wallContent = {
  title: "WallGuard™",
  subtitle: "Transparent Wall & Ceiling Protection Innovation",
  intro: "A breakthrough transparent top coat engineered to preserve and protect painted walls and ceilings from deterioration, moisture intrusion, and environmental damage.",
  benefits: [
    { title: "Anti-Algae & Anti-Fungal Shield", desc: "Prevents growth of algae, fungus, and microbial staining." },
    { title: "Dampness & Blistering Prevention", desc: "Helps stop moisture-induced paint blistering, peeling, and surface degradation." },
    { title: "Water Leakage Barrier", desc: "Acts as a protective breathable barrier that helps reduce the negative side effects of water seepage and assists in preventing negative-side water leakage." },
    { title: "10-Year Paint Newness Preservation", desc: "Maintains the original look, finish, and aesthetic of painted surfaces for up to 10 years." },
    { title: "Transparent Invisible Protection", desc: "No change in shade, texture, or appearance — walls stay visually unchanged, but protected." },
    { title: "Surface Life Extension", desc: "Protects against wear, humidity damage, and premature repainting cycles." },
  ],
  applications: ["Residential Buildings", "Commercial Complexes", "Hotels & Hospitals", "Schools & Institutions", "Industrial Buildings", "Basements", "Exterior Facades", "Interior Walls & Ceilings"],
  footer: "WallGuard is not a paint. It is a preservation technology. A transparent nanotechnology layer that converts painted walls and ceilings into water-resistant, anti-fungal, anti-degradation protected assets.",
  tagline: "Preserve Newness. Prevent Dampness. Protect for a Decade.",
}

const rustRemoverContent = {
  title: "Bio Degradable Rust Remover",
  subtitle: "Zero Chemical • Plant Based • RoHS 10E Certified",
  intro: "A plant-based, 100% sustainable rust remover, certified by SGS, compliant with RoHS, and engineered at exceptional purity standards. The only technology to get 10E RoHS Certification — the highest level of compliance, globally recognized.",
  features: [
    { title: "Fast Acting", desc: "Powerful removal that works quickly" },
    { title: "Versatile Application", desc: "Works in immersion, spray, wipe or brush" },
    { title: "No Fumes, No Hazard", desc: "Safe for workers and environment" },
    { title: "Safe for All Metals", desc: "Works on all surfaces without damage" },
    { title: "Non Hazardous Residue", desc: "Disposes safely and naturally" },
  ],
  zeroRisk: [
    { title: "Zero Risk to Metal", desc: "Safe on all metals. No damage. No hitting." },
    { title: "Zero Risk to Environment", desc: "Biodegradable. 100% planet friendly." },
    { title: "Zero Risk to Workers", desc: "Non toxic. Non corrosive. Safe for all." },
  ],
  points: [
    "Removes rust without corrosive acids or aggressive chemicals",
    "Protects assets from chemical-induced surface damage",
    "Safer for workers, applicators, and surrounding environments",
    "Supports sustainable maintenance and green industry goals",
    "Ideal for industrial assets, infrastructure, equipment, and restoration",
  ],
  benefits: [
    { title: "Longer Asset Life", desc: "Removes rust effectively without harming metal" },
    { title: "Lower Maintenance Cost", desc: "Reduces downtime and repair expenses" },
    { title: "Safe for People", desc: "Non toxic, safe for workers & communities" },
    { title: "Eco Friendly", desc: "Sustainable solutions for a better tomorrow" },
    { title: "Compliant & Future Ready", desc: "Meets global standards, built for the future" },
  ],
  shift: "From Chemical Attack to Sustainable Restoration.",
  shiftDesc: "Traditional rust removers can damage substrates and expose humans to hazardous chemistry. This innovation changes the model.",
  promise: "Certified 10E RoHS purity by SGS, ensuring industrial-grade safety and compliance.",
  tagline: "Innovate today. Protect tomorrow. Preserve forever.",
}

const carpetContent = {
  title: "NanoQuinn Carpet & Upholstery Protection",
  subtitle: "Invisible Anti-Stain Protective Barrier",
  intro: "A breakthrough transparent nanotechnology coating for carpets, fabric chairs, banquet seating and upholstered surfaces that creates an invisible anti-stain protective barrier.",
  protectionAgainst: [
    "Tea stains",
    "Coffee spills",
    "Ketchup and food stains",
    "Dirt and daily soiling",
    "Liquid absorption resistance",
  ],
  benefits: [
    "Keeps carpets and chairs looking new for years",
    "Prevents deep stain penetration",
    "Reduces or eliminates need for carpet shampooing",
    "Reduces or eliminates chair/upholstery shampooing",
    "Simplifies routine maintenance",
    "Lowers housekeeping costs",
    "Extends asset life and preserves appearance",
  ],
  idealFor: [
    "Hotels & Banquets",
    "Corporate Offices",
    "Convention Centers",
    "Restaurants",
    "Auditoriums",
    "Premium Commercial Spaces",
  ],
  closing: "A major advantage for facilities where appearance, hygiene, and maintenance costs matter.",
  description: "From accidental spills to daily wear, NanoQuinn helps transform soft surfaces into anti-stain, low-maintenance, long-life assets.",
  tagline: "Keep It New. Keep It Protected. Keep Maintenance Low.",
}

const esdFlooringContent = {
  title: "Flooring Services — ESD & Dielectric",
  subtitle: "Advanced Flooring Solutions for Safety, Protection and Long-Term Performance",
  intro: "Specialized flooring solutions engineered for environments where static control and electrical insulation are critical for safety, equipment protection, and operational continuity.",
  types: [
    {
      name: "ESD Flooring",
      description: "Controls static electricity and prevents electrostatic discharge. Ideal for sensitive electronics, clean rooms, pharma, semiconductor, labs, and precision manufacturing areas.",
      color: "#1FA855",
    },
    {
      name: "Dielectric Flooring",
      description: "Provides high electrical insulation and ensures operator safety in electrical areas, power rooms, HT/LT panels, substations, and transformer areas.",
      color: "#1FA855",
    },
  ],
  keyBenefits: [
    { title: "Enhanced Safety", icon: "shield" },
    { title: "Seamless & Easy Maintenance", icon: "tool" },
    { title: "Static Control & Electrical Insulation", icon: "zap" },
    { title: "Industrial Heavy-Duty Performance", icon: "factory" },
    { title: "High Durability & Long Life", icon: "clock" },
    { title: "Premium Finish", icon: "star" },
    { title: "Chemical & Abrasion Resistance", icon: "shield" },
    { title: "Sustainable & Reliable Solutions", icon: "leaf" },
  ],
  idealFor: [
    "Electronics Manufacturing",
    "Semiconductor Units",
    "Pharmaceutical Plants",
    "Clean Rooms & Labs",
    "Data Centres & Server Rooms",
    "EV Battery Manufacturing",
    "Control Rooms",
    "Electrical Rooms",
    "Substations",
    "Power Plants",
    "Defence & Aerospace",
  ],
  apaasAdvantage: [
    "Surface Evaluation",
    "System Recommendation",
    "Application Support",
    "Long-Term Maintenance Guidance",
    "Premium Industrial Finish",
    "Sustainable Solution Approach",
  ],
  footer: "NANOQUINN APAAS — Long-Term Surface Protection & Performance Solutions",
}

const epoxyPUFlooringContent = {
  title: "Premium High Strength Epoxy PU Flooring",
  subtitle: "Next-Generation Industrial Flooring System",
  intro: "Engineered high-performance Epoxy + PU hybrid system designed for the most demanding industrial environments requiring superior strength, durability, and performance.",
  techEdge: "Epoxy + PU hybrid system",
  advantages: [
    { title: "Higher abrasion resistance", desc: "Withstands heavy wear and constant traffic" },
    { title: "Superior load-bearing strength", desc: "Handles extreme loads up to 200 tons" },
    { title: "Long lifecycle vs conventional epoxy", desc: "Outlasts traditional flooring systems" },
    { title: "Chemical & thermal resistance", desc: "Resists spills, chemicals, and temperature extremes" },
  ],
  applications: [
    "Heavy engineering industries",
    "Warehouses & logistics parks",
    "Automotive plants",
    "Food & pharma industries",
  ],
  impact: [
    { title: "Reduced repair cycles", desc: "Minimizes downtime and maintenance frequency" },
    { title: "Higher operational safety", desc: "Non-slip, durable surface for worker safety" },
    { title: "Long-term ROI with performance stability", desc: "Investment that pays back over years" },
  ],
  bottomFeatures: [
    { title: "High Abrasion Resistance", desc: "Withstands heavy wear, impacts & constant traffic" },
    { title: "Chemical & Spill Proof", desc: "Resists oils, chemicals & corrosive substances" },
    { title: "High Load Capacity", desc: "Handles extreme loads up to 200 tons" },
    { title: "Long Lasting Durability", desc: "Built to perform for years with minimal upkeep" },
    { title: "Sustainable Solution", desc: "Low VOC, eco-friendly & safe for environments" },
  ],
  footer: "Premium Industrial Flooring by NanoQuinn",
}

const waterproofingContent = {
  title: "Premium Zero Headache Waterproofing Service",
  subtitle: "By NanoQuinn APaaS",
  intro: "Not temporary waterproofing. A long-term Protection Responsibility Model. From identifying root causes to repairs, treatment, protection, audits, and warranty — NanoQuinn delivers complete peace of mind.",
  features: [
    "End-to-End Turnkey Responsibility",
    "Repairs + Protection + Preservation",
    "Premium Long-Term Waterproofing Solutions",
    "Unconditional Warranty",
    "Yearly Audit & Inspection Support",
    "Sustainable & Advanced Protection Technologies",
  ],
  painPoints: [
    "Continuous leakage & seepage",
    "Repeated repair expenses",
    "Production & operational disruptions",
    "Structural deterioration",
    "Damage to interiors, machinery & electrical systems",
    "Temporary contractor-based patchwork failures",
    "Rising maintenance pressure every monsoon",
  ],
  process: [
    { step: "1", title: "Identify Root Causes", desc: "Comprehensive assessment of leakage sources" },
    { step: "2", title: "Repairs & Treatment", desc: "Professional repair of damaged areas" },
    { step: "3", title: "Protection That Lasts", desc: "Advanced waterproofing application" },
    { step: "4", title: "Audits & Inspections", desc: "Regular monitoring and quality checks" },
    { step: "5", title: "Unconditional Warranty", desc: "Complete peace of mind guarantee" },
  ],
  pillars: ["Repairs", "Unconditional Warranty", "Protection", "Audit & Inspections", "Preservation", "Sustainable Technologies"],
  footer: "ZERO HEADACHE — Complete Protection. Complete Peace of Mind.",
}

const surfaceTolerantEpoxyContent = {
  title: "Low VOC Surface Tolerant Epoxy",
  subtitle: "Advanced Protection. Extended Life.",
  intro: "High performance, low VOC epoxy coating for all metal surfaces, designed to tolerate less than ideal surface conditions and deliver long lasting protection. 10 Years Protection with Nano Layer Technology.",
  specs: {
    coats: "2 Coats",
    thickness: "160 Microns",
    protection: "10 Years",
  },
  features: [
    { title: "Sustainable", desc: "Low VOC formula. Environment friendly." },
    { title: "Fantastic Adhesion", desc: "Strong bonding on a wide range of surfaces including marginally prepared metal." },
    { title: "Surface Tolerant", desc: "Tolerates rust, moisture, mill scale, and less than ideal surface preparation." },
    { title: "Chemical & Corrosion Resistant", desc: "Excellent resistance to chemicals, corrosion and abrasion." },
    { title: "Long Lasting Protection", desc: "Engineered to perform. Built to last." },
  ],
  nanoLayerBenefits: [
    "Low VOC — Safe for environment & workers",
    "Excellent adhesion & surface tolerance",
    "High build coating — 2 coats, 160 microns",
    "Superior chemical & corrosion resistance",
    "Long lasting 10 years protection",
  ],
  idealFor: [
    { label: "Industrial Structures", icon: "factory" },
    { label: "Bridges & Infrastructure", icon: "bridge" },
    { label: "Tanks & Pipelines", icon: "tank" },
    { label: "Marine & Offshore", icon: "ship" },
    { label: "Commercial & Facilities", icon: "building" },
    { label: "Machinery & Equipment", icon: "cog" },
    { label: "Power Plants & Utilities", icon: "zap" },
  ],
  bottomFeatures: [
    { title: "Enhances Asset Life", desc: "Reduces corrosion & wear. Extends service life." },
    { title: "Lower Maintenance Cost", desc: "Reduces downtime & maintenance frequency." },
    { title: "High Performance", desc: "Delivers consistent, long term performance." },
    { title: "Eco Friendly", desc: "Low VOC. Sustainable. Better for the future." },
    { title: "Trusted Protection", desc: "Advanced technology. Proven results." },
  ],
  footer: "Sustainable Solutions. Lasting Impact.",
}

const auditContent = {
  title: '"Asset Health" Audit',
  subtitle: "Know Your Degradation. Protect Before Failure.",
  intro: 'Our "Asset Health" Audit helps identify critical vulnerabilities across your most important assets — before failures, shutdowns, or rising lifecycle costs take hold.',
  overview: [
    { label: "Hidden Degradation", desc: "Uncover damage invisible to routine inspection" },
    { label: "Performance Loss", desc: "Quantify efficiency and output decline" },
    { label: "Maintenance Gaps", desc: "Identify where protection has lapsed" },
    { label: "Protection Opportunities", desc: "Recommend targeted interventions before failure" },
  ],
  whoWeServe: [
    { label: "Private Sector Plants & Manufacturing", desc: "Production environments with high-value equipment and continuous operational demands." },
    { label: "Municipal, Utility & PSU Assets", desc: "Public utilities, corporations, and state-owned enterprises managing critical infrastructure." },
    { label: "OEMs and Fabricated Equipment Manufacturers", desc: "Original equipment manufacturers requiring surface and structural integrity assurance." },
    { label: "Industrial Process Plants", desc: "Complex process environments exposed to chemical, thermal, and mechanical stressors." },
    { label: "Central & State Government Infrastructure", desc: "Public assets requiring long-term protection and lifecycle cost management." },
    { label: "Rail, Defence & Commercial Facilities", desc: "High-stakes assets in rail, defence, public works, and institutional facilities." },
  ],
  whatWeAudit: [
    { label: "Metal Assets", desc: "Corrosion, coating failure, structural exposure" },
    { label: "Civil & Waterproofing", desc: "Concrete, cracks, seepage, joint failures" },
    { label: "Floor Systems", desc: "Epoxy, polyurethane, abrasion, delamination" },
    { label: "Polymers & Polymers", desc: "UV degradation, brittleness, chemical exposure" },
    { label: "Solar Assets", desc: "Panel condition, soiling, efficiency loss" },
    { label: "Electrical Assets", desc: "Panels, busbars, insulation, corrosion risks" },
  ],
  deliverables: [
    "Condition Assessment Report",
    "Degradation Risk Mapping",
    "Photographic Inspection Documentation",
    "Failure Risk Prioritization",
    "Protection Opportunity Recommendations",
    "CAPEX vs OPEX Comparison",
    "ROI-Based Asset Protection Roadmap",
  ],
  methodology: ["Inspect", "Diagnose", "Quantify", "Recommend", "Protect"],
  objectives: [
    { label: "Identify Degradation", desc: "Surface and structural deterioration detected before it becomes critical" },
    { label: "Quantify Risk", desc: "Failure probability and consequence severity measured and ranked" },
    { label: "Recommend Protection", desc: "Targeted solutions specified for each identified vulnerability" },
    { label: "Extend Asset Life", desc: "Protection interventions that significantly increase service life" },
    { label: "Reduce Maintenance", desc: "Lower recurring maintenance costs through proactive protection" },
    { label: "Improve Performance", desc: "Restored and optimized asset output across all audited systems" },
  ],
  cta: {
    heading: "Request an Asset Protection Audit",
    sub: "Schedule a site audit or consultation to assess your assets. Our team will work with you to identify degradation risks, quantify protection opportunities, and deliver a clear roadmap to extend asset life and reduce lifecycle costs.",
    options: [
      { label: "Site Audit", desc: "Full on-site inspection and condition assessment of your critical assets" },
      { label: "Consultation", desc: "Discuss your asset challenges and protection priorities with our specialists" },
      { label: "Protection Roadmap", desc: "Receive a tailored, ROI-based asset protection plan for your facility" },
    ],
  },
}

/* ─── TYPES ─────────────────────────────────────────────────────────────── */
type ActiveContent = "OEM" | "Industrial" | "Polymers" | "Solar" | "Electrical" | "Floor" | "Wall" | "RustRemover" | "Carpet" | "ESDFlooring" | "EpoxyPUFlooring" | "Waterproofing" | "SurfaceTolerantEpoxy" | null
type ActiveDropdown = "rust" | "flooring" | null
type SubMenu = "OEM" | "Industrial" | null

/* ─── COMPONENT ���────────────────────────────────────────────────────────── */
export function AssetProtectionSection() {
  const [activeDropdown, setActiveDropdown] = useState<ActiveDropdown>(null)
  const [activeSubMenu, setActiveSubMenu] = useState<SubMenu>(null)
  const [activeContent, setActiveContent] = useState<ActiveContent>(null)

  const handleSubMenuClick = (type: "OEM" | "Industrial") => {
    setActiveContent(type)
    setActiveDropdown(null)
    setActiveSubMenu(null)
  }

  const handleDirectClick = (type: Exclude<ActiveContent, "OEM" | "Industrial" | null>) => {
    setActiveContent(type)
    setActiveDropdown(null)
  }

  const toggleDropdown = () => {
    setActiveDropdown(activeDropdown === "rust" ? null : "rust")
  }

  const navItems = [
    { id: "Polymers" as const, label: "Nanotech Polymers Protection", icon: Package },
    { id: "Solar" as const, label: "Solar Nanotechnology Coating", icon: Sun },
    { id: "Electrical" as const, label: "ElectroShield 5-in-1", icon: Zap },
    { id: "Floor" as const, label: "FloorGuard", icon: Layers },
    { id: "Wall" as const, label: "WallGuard", icon: FlameKindling },
    { id: "RustRemover" as const, label: "Bio Rust Remover", icon: Wrench },
    { id: "Carpet" as const, label: "Carpet & Upholstery", icon: Sofa },
    { id: "ESDFlooring" as const, label: "ESD & Dielectric Flooring", icon: HardHat },
    { id: "EpoxyPUFlooring" as const, label: "Epoxy PU Flooring", icon: Building2 },
    { id: "Waterproofing" as const, label: "Waterproofing Service", icon: Droplets },
    { id: "SurfaceTolerantEpoxy" as const, label: "Surface Tolerant Epoxy", icon: Shield },
  ]

  return (
    <section id="asset-protection" className="py-16 sm:py-24 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-16">
          <span className="inline-block px-10 py-4 rounded-full bg-[#1FA855] text-black text-base font-bold mb-8 shadow-md uppercase tracking-widest">
            Product/Service Range
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
            <span className="bg-gradient-to-r from-[#5EEAD4] via-[#14B8A6] to-[#22C55E] bg-clip-text text-transparent">Sustainable Nanotechnology</span>{" "}
            <span className="text-foreground">Solutions</span>
          </h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Industry-specific nanotechnology solutions engineered for permanent protection, preservation, and performance.
          </p>
        </div>

        {/* Dropdown Navigation */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 sm:mb-16">

          {/* 1. Rust & Corrosion dropdown */}
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className={`flex items-center gap-1.5 px-3 sm:px-6 py-2 sm:py-3 rounded-xl font-semibold text-xs sm:text-sm transition-colors shadow-lg ${activeContent === "OEM" || activeContent === "Industrial" ? "bg-[#1FA855] text-black" : "bg-foreground text-background hover:bg-foreground/90"}`}
            >
              <Shield className="w-4 h-4" />
              Rust &amp; Corrosion
              <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === "rust" ? "rotate-180" : ""}`} />
            </button>

            {activeDropdown === "rust" && (
              <div className="absolute top-full left-0 mt-2 w-60 bg-white border border-border rounded-2xl shadow-2xl z-50 overflow-hidden">
                {/* OEM row */}
                <div
                  className="relative"
                  onMouseEnter={() => setActiveSubMenu("OEM")}
                  onMouseLeave={() => setActiveSubMenu(null)}
                >
                  <button
                    onClick={() => handleSubMenuClick("OEM")}
                    className="w-full flex items-center justify-between px-5 py-4 hover:bg-muted transition-colors text-left border-b border-border"
                  >
                    <div className="flex items-center gap-3">
                      <Factory className="w-4 h-4 text-[#1FA855]" />
                      <span className="font-medium text-foreground text-sm">OEM</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-muted-foreground" />
                  </button>
                  {activeSubMenu === "OEM" && (
                    <div className="absolute left-full top-0 ml-1 w-60 bg-white border border-border rounded-2xl shadow-2xl z-50 overflow-hidden">
                      {["Stainless Steel Preservation", "Painted Metal Preservation", "Rusted Surface Restoration"].map((item, i) => (
                        <button key={i} onClick={() => handleSubMenuClick("OEM")}
                          className="w-full text-left px-5 py-3 text-sm hover:bg-muted transition-colors text-foreground border-b border-border last:border-0">
                          {item}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                {/* Industrial row */}
                <div
                  className="relative"
                  onMouseEnter={() => setActiveSubMenu("Industrial")}
                  onMouseLeave={() => setActiveSubMenu(null)}
                >
                  <button
                    onClick={() => handleSubMenuClick("Industrial")}
                    className="w-full flex items-center justify-between px-5 py-4 hover:bg-muted transition-colors text-left"
                  >
                    <div className="flex items-center gap-3">
                      <Wrench className="w-4 h-4 text-[#1FA855]" />
                      <span className="font-medium text-foreground text-sm">Industrial Maintenance</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-muted-foreground" />
                  </button>
                  {activeSubMenu === "Industrial" && (
                    <div className="absolute left-full top-0 ml-1 w-60 bg-white border border-border rounded-2xl shadow-2xl z-50 overflow-hidden">
                      {["Moisture & Oxygen Barrier", "Corrosion Prevention", "Maintenance-Free Protection"].map((item, i) => (
                        <button key={i} onClick={() => handleSubMenuClick("Industrial")}
                          className="w-full text-left px-5 py-3 text-sm hover:bg-muted transition-colors text-foreground border-b border-border last:border-0">
                          {item}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Items 2–7 */}
          {navItems.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => handleDirectClick(id)}
              className={`flex items-center gap-1.5 px-3 sm:px-6 py-2 sm:py-3 rounded-xl font-semibold text-xs sm:text-sm transition-colors shadow-lg ${activeContent === id ? "bg-[#1FA855] text-black" : "bg-foreground text-background hover:bg-foreground/90"}`}
            >
              <Icon className="w-4 h-4" />
              {label}
            </button>
          ))}
        </div>

        {/* ── Content Panels ── */}

        {/* OEM */}
        {activeContent === "OEM" && (
          <div className="animate-fade-up">
            <div className="text-center mb-12">
              <span className="inline-block px-10 py-4 rounded-full bg-[#1FA855] text-black text-base font-bold mb-8 shadow-md uppercase tracking-widest">OEM</span>
              <h3 className="text-3xl sm:text-4xl font-bold tracking-tight mb-2">{oemContent.title}</h3>
              <p className="text-lg font-medium text-[#1FA855] mb-3">{oemContent.subtitle}</p>
              <p className="text-base text-muted-foreground max-w-2xl mx-auto">{oemContent.intro}</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-10">
              {oemContent.variants.map((v) => (
                <div key={v.number} className="rounded-3xl p-5 sm:p-8 bg-muted">
                  <span className="text-4xl font-bold text-[#1FA855] mb-4 block">{v.number}</span>
                  <h4 className="text-xl font-bold mb-3">{v.title}</h4>
                  <p className="text-sm leading-relaxed text-muted-foreground">{v.description}</p>
                </div>
              ))}
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-foreground text-background rounded-3xl p-8">
                <h4 className="text-xl font-bold mb-2 text-[#1FA855]">{oemContent.revolution.title}</h4>
                <p className="text-background/70 text-sm mb-6">{oemContent.revolution.description}</p>
                <ul className="space-y-3">
                  {oemContent.revolution.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-background/70">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1FA855] shrink-0 mt-2" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-black rounded-3xl p-8 flex items-center justify-center">
                <p className="text-2xl sm:text-3xl font-black text-[#1FA855] leading-snug text-balance text-center">{oemContent.footer}</p>
              </div>
            </div>
          </div>
        )}

        {/* Industrial */}
        {activeContent === "Industrial" && (
          <div className="animate-fade-up">
            <div className="text-center mb-12">
              <span className="inline-block px-10 py-4 rounded-full bg-[#1FA855] text-black text-base font-bold mb-8 shadow-md uppercase tracking-widest">Industrial Maintenance</span>
              <h3 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">{industrialContent.title}</h3>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{industrialContent.intro}</p>
            </div>

            {/* 3 Variants */}
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              {industrialContent.variants.map((v) => (
                <div key={v.number} className={`rounded-3xl p-8 ${v.isHighlighted ? "bg-foreground text-background" : "bg-muted"}`}>
                  <span className="text-4xl font-bold text-[#1FA855] mb-4 block">{v.number}</span>
                  <h4 className={`text-lg font-bold mb-3 ${v.isHighlighted ? "text-white" : "text-foreground"}`}>{v.title}</h4>
                  <p className={`text-sm leading-relaxed ${v.isHighlighted ? "text-background/70" : "text-muted-foreground"}`}>{v.description}</p>
                </div>
              ))}
            </div>

            {/* Eliminates */}
            <div className="bg-[#1FA855]/10 border border-[#1FA855]/30 rounded-3xl p-8 mb-10">
              <h4 className="text-lg font-bold text-foreground mb-4">Eliminates:</h4>
              <div className="flex flex-wrap gap-3">
                {industrialContent.eliminates.map((item, i) => (
                  <span key={i} className="px-4 py-2 rounded-full bg-foreground text-background text-sm font-medium line-through decoration-[#1FA855] decoration-[3px]">{item}</span>
                ))}
              </div>
            </div>

            {/* System + Disruption */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-muted rounded-3xl p-8">
                <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <span className="w-2 h-6 bg-[#1FA855] rounded-full inline-block" />
                  {industrialContent.system.title}
                </h4>
                <ol className="space-y-3">
                  {industrialContent.system.steps.map((step, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <span className="w-6 h-6 rounded-full bg-[#1FA855] text-black text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">{i + 1}</span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
              <div className="bg-foreground text-background rounded-3xl p-8">
                <h4 className="text-xl font-bold mb-3 text-[#1FA855]">{industrialContent.disruption.title}</h4>
                <p className="text-background/60 text-sm mb-6 leading-relaxed">{industrialContent.disruption.keyPoint}</p>
                <ul className="space-y-3">
                  {industrialContent.disruption.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-background/70">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1FA855] shrink-0 mt-2" />
                      {point}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-sm font-semibold text-[#1FA855] italic">{industrialContent.footer}</p>
              </div>
            </div>
          </div>
        )}

        {/* Polymers */}
        {activeContent === "Polymers" && (
          <div className="animate-fade-up">
            <div className="text-center mb-12">
              <span className="inline-block px-10 py-4 rounded-full bg-[#1FA855] text-black text-base font-bold mb-8 shadow-md uppercase tracking-widest">Nanotech Polymers Protection</span>
              <h3 className="text-3xl sm:text-4xl font-bold tracking-tight mb-2">{polymersContent.title}</h3>
              <p className="text-lg font-medium text-[#1FA855] mb-4">{polymersContent.subtitle}</p>
              <p className="text-base text-muted-foreground max-w-3xl mx-auto mb-3">{polymersContent.intro}</p>
              <p className="text-sm text-muted-foreground max-w-3xl mx-auto">{polymersContent.description}</p>
            </div>
            <div className="bg-muted rounded-3xl p-8 mb-8">
              <p className="text-base text-muted-foreground leading-relaxed italic">{polymersContent.note}</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-foreground text-background rounded-3xl p-8">
                <h4 className="text-xl font-bold mb-6 text-[#1FA855]">{polymersContent.applications.title}</h4>
                <ul className="space-y-4">
                  {polymersContent.applications.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-[#1FA855] text-black text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">{i + 1}</span>
                      <div>
                        <span className="font-semibold text-white text-sm">{item.label} — </span>
                        <span className="text-background/70 text-sm">{item.desc}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-muted rounded-3xl p-8">
                <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <span className="w-2 h-6 bg-[#1FA855] rounded-full inline-block" />
                  {polymersContent.disruption.title}
                </h4>
                <ul className="space-y-3">
                  {polymersContent.disruption.points.map((pt, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1FA855] shrink-0 mt-2" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="bg-[#1FA855]/10 border border-[#1FA855]/30 rounded-3xl p-8 text-center">
              <p className="text-xl font-bold text-foreground italic">&ldquo;{polymersContent.footer}&rdquo;</p>
            </div>
          </div>
        )}

        {/* Solar */}
        {activeContent === "Solar" && (
          <div className="animate-fade-up">
            <div className="text-center mb-12">
              <span className="inline-block px-10 py-4 rounded-full bg-[#1FA855] text-black text-base font-bold mb-8 shadow-md uppercase tracking-widest">Solar Nanotechnology</span>
              <h3 className="text-3xl sm:text-4xl font-bold tracking-tight mb-2">{solarContent.title}</h3>
              <p className="text-lg font-medium text-[#1FA855] mb-4">{solarContent.subtitle}</p>
              <p className="text-base text-muted-foreground max-w-2xl mx-auto">{solarContent.intro}</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              {solarContent.benefits.map((b, i) => (
                <div key={i} className="bg-foreground text-background rounded-3xl p-6">
                  <span className="text-3xl font-bold text-[#1FA855] mb-3 block">0{i + 1}</span>
                  <h4 className="font-bold text-white mb-2">{b.title}</h4>
                  <p className="text-sm text-background/70 leading-relaxed">{b.desc}</p>
                </div>
              ))}
            </div>
            <div className="bg-[#1FA855] rounded-3xl p-8 text-center">
              <p className="text-lg font-semibold text-black mb-2">{solarContent.footer}</p>
              <p className="text-2xl font-bold text-black">{solarContent.tagline}</p>
            </div>
          </div>
        )}

        {/* Electrical 5-in-1 */}
        {activeContent === "Electrical" && (
          <div className="animate-fade-up">
            <div className="text-center mb-12">
              <span className="inline-block px-10 py-4 rounded-full bg-[#1FA855] text-black text-base font-bold mb-8 shadow-md uppercase tracking-widest">ElectroShield 5-in-1</span>
              <h3 className="text-3xl sm:text-4xl font-bold tracking-tight mb-2">{electricalContent.title}</h3>
              <p className="text-lg font-medium text-[#1FA855] mb-4">{electricalContent.subtitle}</p>
              <p className="text-base text-muted-foreground max-w-3xl mx-auto">{electricalContent.intro}</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              {electricalContent.protections.map((p, i) => (
                <div key={i} className={`rounded-3xl p-6 ${i < 2 ? "bg-foreground text-background" : "bg-muted"}`}>
                  <span className={`text-4xl font-bold mb-3 block ${i < 2 ? "text-[#1FA855]" : "text-[#1FA855]"}`}>{p.number}</span>
                  <h4 className={`font-bold mb-2 ${i < 2 ? "text-white" : "text-foreground"}`}>{p.title}</h4>
                  <p className={`text-sm leading-relaxed ${i < 2 ? "text-background/70" : "text-muted-foreground"}`}>{p.desc}</p>
                </div>
              ))}
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-muted rounded-3xl p-8">
                <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <span className="w-2 h-6 bg-[#1FA855] rounded-full inline-block" />
                  Why It Is a Global Revolution
                </h4>
                <ul className="space-y-3">
                  {electricalContent.revolution.map((pt, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1FA855] shrink-0 mt-2" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-[#1FA855]/10 border border-[#1FA855]/30 rounded-3xl p-8 flex items-center">
                <p className="text-lg font-semibold text-foreground leading-relaxed italic">&ldquo;{electricalContent.footer}&rdquo;</p>
              </div>
            </div>
          </div>
        )}

        {/* FloorGuard */}
        {activeContent === "Floor" && (
          <div className="animate-fade-up">
            <div className="text-center mb-12">
              <span className="inline-block px-10 py-4 rounded-full bg-[#1FA855] text-black text-base font-bold mb-8 shadow-md uppercase tracking-widest">FloorGuard™</span>
              <h3 className="text-3xl sm:text-4xl font-bold tracking-tight mb-2">{floorContent.title}</h3>
              <p className="text-lg font-medium text-[#1FA855] mb-4">{floorContent.subtitle}</p>
              <p className="text-base text-muted-foreground max-w-2xl mx-auto">{floorContent.intro}</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 mb-10">
              <div className="bg-foreground text-background rounded-3xl p-8">
                <h4 className="font-bold text-[#1FA855] mb-4">Applicable On</h4>
                <ul className="space-y-2">
                  {floorContent.applications.map((a, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-background/70">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1FA855] shrink-0" />
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-muted rounded-3xl p-8">
                <h4 className="font-bold mb-4 flex items-center gap-2">
                  <span className="w-2 h-5 bg-[#1FA855] rounded-full inline-block" />
                  What FloorGuard™ Does
                </h4>
                <ul className="space-y-2">
                  {floorContent.benefits.map((b, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1FA855] shrink-0 mt-1.5" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-foreground text-background rounded-3xl p-8">
                <h4 className="font-bold text-[#1FA855] mb-4">Ideal For</h4>
                <ul className="space-y-2">
                  {floorContent.industries.map((ind, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-background/70">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1FA855] shrink-0" />
                      {ind}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="bg-[#1FA855] rounded-3xl p-8 text-center">
              <p className="text-xl font-bold text-black mb-1">{floorContent.footer}</p>
              <p className="text-base text-black/80">{floorContent.tagline}</p>
            </div>
          </div>
        )}

        {/* WallGuard */}
        {activeContent === "Wall" && (
          <div className="animate-fade-up">
            <div className="text-center mb-12">
              <span className="inline-block px-10 py-4 rounded-full bg-[#1FA855] text-black text-base font-bold mb-8 shadow-md uppercase tracking-widest">WallGuard™</span>
              <h3 className="text-3xl sm:text-4xl font-bold tracking-tight mb-2">{wallContent.title}</h3>
              <p className="text-lg font-medium text-[#1FA855] mb-4">{wallContent.subtitle}</p>
              <p className="text-base text-muted-foreground max-w-2xl mx-auto">{wallContent.intro}</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              {wallContent.benefits.map((b, i) => (
                <div key={i} className="bg-foreground text-background rounded-3xl p-6">
                  <span className="text-3xl font-bold text-[#1FA855] mb-3 block">0{i + 1}</span>
                  <h4 className="font-bold text-white mb-2">{b.title}</h4>
                  <p className="text-sm text-background/70 leading-relaxed">{b.desc}</p>
                </div>
              ))}
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-muted rounded-3xl p-8">
                <h4 className="font-bold mb-4 flex items-center gap-2">
                  <span className="w-2 h-5 bg-[#1FA855] rounded-full inline-block" />
                  Applications
                </h4>
                <ul className="grid grid-cols-2 gap-2">
                  {wallContent.applications.map((a, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1FA855] shrink-0" />
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-[#1FA855] rounded-3xl p-8 flex flex-col justify-center">
                <p className="text-base font-semibold text-black mb-3">{wallContent.footer}</p>
                <p className="text-xl font-bold text-black">{wallContent.tagline}</p>
              </div>
            </div>
          </div>
        )}

        {/* Rust Remover */}
        {activeContent === "RustRemover" && (
          <div className="animate-fade-up">
            <div className="text-center mb-12">
              <span className="inline-block px-10 py-4 rounded-full bg-[#1FA855] text-black text-base font-bold mb-8 shadow-md uppercase tracking-widest">Rust Remover</span>
              <h3 className="text-3xl sm:text-4xl font-bold tracking-tight mb-2">{rustRemoverContent.title}</h3>
              <p className="text-lg font-medium text-[#1FA855] mb-4">{rustRemoverContent.subtitle}</p>
              <p className="text-base text-muted-foreground max-w-2xl mx-auto">{rustRemoverContent.intro}</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 mb-10">
              <div className="bg-foreground text-background rounded-3xl p-8">
                <h4 className="text-xl font-bold text-[#1FA855] mb-6">Disruptive Value Proposition</h4>
                <ul className="space-y-3">
                  {rustRemoverContent.points.map((pt, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-background/70">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1FA855] shrink-0 mt-2" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-muted rounded-3xl p-8 flex flex-col gap-6">
                <div>
                  <p className="text-xl font-bold text-foreground mb-2">{rustRemoverContent.shift}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{rustRemoverContent.shiftDesc}</p>
                </div>
                <div className="border-t border-border pt-6">
                  <p className="text-base font-semibold text-foreground mb-1">{rustRemoverContent.promise}</p>
                  {rustRemoverContent.benchmark && <p className="text-sm text-muted-foreground">{rustRemoverContent.benchmark}</p>}
                </div>
              </div>
            </div>
            <div className="bg-[#1FA855] rounded-3xl p-8 text-center">
              <p className="text-2xl font-bold text-black">{rustRemoverContent.tagline}</p>
            </div>
          </div>
        )}

        {/* Carpet & Upholstery */}
        {activeContent === "Carpet" && (
          <div className="animate-fade-up">
            <div className="text-center mb-12">
              <span className="inline-block px-10 py-4 rounded-full bg-[#1FA855] text-black text-base font-bold mb-8 shadow-md uppercase tracking-widest">Carpet &amp; Upholstery Protection</span>
              <h3 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">{carpetContent.title}</h3>
              <p className="text-lg font-medium text-[#1FA855] mb-4">{carpetContent.subtitle}</p>
              <p className="text-base text-muted-foreground max-w-3xl mx-auto">{carpetContent.intro}</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-10">
              {/* Protection Against */}
              <div className="bg-foreground text-background rounded-3xl p-8">
                <h4 className="text-lg font-bold text-[#1FA855] mb-5">Protection Against</h4>
                <ul className="space-y-3">
                  {carpetContent.protectionAgainst.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-background/70">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1FA855] shrink-0 mt-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Key Benefits */}
              <div className="bg-muted rounded-3xl p-8">
                <h4 className="text-lg font-bold mb-5 flex items-center gap-2">
                  <span className="w-2 h-6 bg-[#1FA855] rounded-full inline-block" />
                  Key Benefits
                </h4>
                <ul className="space-y-3">
                  {carpetContent.benefits.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1FA855] shrink-0 mt-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Ideal For */}
              <div className="bg-muted rounded-3xl p-8">
                <h4 className="text-lg font-bold mb-5 flex items-center gap-2">
                  <span className="w-2 h-6 bg-[#1FA855] rounded-full inline-block" />
                  Ideal For
                </h4>
                <ul className="space-y-3">
                  {carpetContent.idealFor.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1FA855] shrink-0 mt-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-[#1FA855]/10 border border-[#1FA855]/30 rounded-3xl p-8 mb-6 text-center">
              <p className="text-base text-foreground mb-2">{carpetContent.closing}</p>
              <p className="text-sm text-muted-foreground">{carpetContent.description}</p>
            </div>

            <div className="bg-[#1FA855] rounded-3xl p-8 text-center">
              <p className="text-2xl font-bold text-black">{carpetContent.tagline}</p>
            </div>
          </div>
        )}

        {/* ESD & Dielectric Flooring */}
        {activeContent === "ESDFlooring" && (
          <div className="animate-fade-up">
            <div className="text-center mb-12">
              <span className="inline-block px-10 py-4 rounded-full bg-[#1FA855] text-black text-base font-bold mb-8 shadow-md uppercase tracking-widest">Flooring Services</span>
              <h3 className="text-3xl sm:text-4xl font-bold tracking-tight mb-2">{esdFlooringContent.title}</h3>
              <p className="text-lg font-medium text-[#1FA855] mb-4">{esdFlooringContent.subtitle}</p>
              <p className="text-base text-muted-foreground max-w-2xl mx-auto">{esdFlooringContent.intro}</p>
            </div>

            {/* Two Flooring Types */}
            <div className="grid md:grid-cols-2 gap-6 mb-10">
              {esdFlooringContent.types.map((type, i) => (
                <div key={i} className="rounded-3xl p-8" style={{ backgroundColor: type.color + '15', borderLeft: `4px solid ${type.color}` }}>
                  <h4 className="text-xl font-bold mb-3" style={{ color: type.color }}>{type.name}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{type.description}</p>
                </div>
              ))}
            </div>

            {/* Key Benefits Grid */}
            <div className="bg-muted rounded-3xl p-8 mb-10">
              <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
                <span className="w-2 h-6 bg-[#1FA855] rounded-full inline-block" />
                Key Benefits
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {esdFlooringContent.keyBenefits.map((benefit, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 bg-background rounded-xl">
                    <span className="w-2 h-2 rounded-full bg-[#1FA855] shrink-0" />
                    <span className="text-sm font-medium">{benefit.title}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Ideal For */}
            <div className="bg-foreground text-background rounded-3xl p-8 mb-10">
              <h4 className="text-lg font-bold text-[#1FA855] mb-6">Ideal For</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {esdFlooringContent.idealFor.map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-background/70">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1FA855] shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* APaaS Advantage */}
            <div className="bg-gradient-to-r from-[#1FA855] to-[#00897B] rounded-3xl p-8">
              <p className="text-sm font-semibold text-white/80 uppercase tracking-wider mb-4">NanoQuinn APaaS Advantage</p>
              <div className="flex flex-wrap gap-3">
                {esdFlooringContent.apaasAdvantage.map((item, i) => (
                  <span key={i} className="px-4 py-2 bg-white/20 rounded-full text-sm font-medium text-white">{item}</span>
                ))}
              </div>
              <p className="mt-6 text-lg font-bold text-white">{esdFlooringContent.footer}</p>
            </div>
          </div>
        )}

        {/* Epoxy PU Flooring */}
        {activeContent === "EpoxyPUFlooring" && (
          <div className="animate-fade-up">
            <div className="text-center mb-12">
              <span className="inline-block px-10 py-4 rounded-full bg-[#1FA855] text-black text-base font-bold mb-8 shadow-md uppercase tracking-widest">Epoxy PU Flooring</span>
              <h3 className="text-3xl sm:text-4xl font-bold tracking-tight mb-2">{epoxyPUFlooringContent.title}</h3>
              <p className="text-lg font-medium text-[#1E88E5] mb-4">{epoxyPUFlooringContent.subtitle}</p>
              <p className="text-base text-muted-foreground max-w-2xl mx-auto">{epoxyPUFlooringContent.intro}</p>
            </div>

            {/* Technology Edge */}
            <div className="bg-gradient-to-r from-[#1E88E5] to-[#1565C0] rounded-3xl p-8 mb-10 text-center">
              <p className="text-sm font-semibold text-white/80 uppercase tracking-wider mb-2">Technology Edge</p>
              <p className="text-3xl font-bold text-white">{epoxyPUFlooringContent.techEdge}</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-10">
              {/* Advantages */}
              <div className="bg-muted rounded-3xl p-8">
                <h4 className="text-lg font-bold mb-5 flex items-center gap-2">
                  <span className="w-2 h-6 bg-[#1E88E5] rounded-full inline-block" />
                  Advantages Over Traditional
                </h4>
                <ul className="space-y-4">
                  {epoxyPUFlooringContent.advantages.map((item, i) => (
                    <li key={i}>
                      <p className="font-semibold text-foreground text-sm">{item.title}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{item.desc}</p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Applications */}
              <div className="bg-foreground text-background rounded-3xl p-8">
                <h4 className="text-lg font-bold text-[#1E88E5] mb-5">Applications</h4>
                <ul className="space-y-3">
                  {epoxyPUFlooringContent.applications.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-background/70">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1E88E5] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Impact */}
              <div className="bg-muted rounded-3xl p-8">
                <h4 className="text-lg font-bold mb-5 flex items-center gap-2">
                  <span className="w-2 h-6 bg-[#1E88E5] rounded-full inline-block" />
                  Impact
                </h4>
                <ul className="space-y-4">
                  {epoxyPUFlooringContent.impact.map((item, i) => (
                    <li key={i}>
                      <p className="font-semibold text-foreground text-sm">{item.title}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{item.desc}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bottom Features */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              {epoxyPUFlooringContent.bottomFeatures.map((item, i) => (
                <div key={i} className="bg-[#1E88E5]/10 border border-[#1E88E5]/30 rounded-2xl p-4 text-center">
                  <p className="font-bold text-sm text-[#1E88E5] mb-1">{item.title}</p>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Waterproofing Service */}
        {activeContent === "Waterproofing" && (
          <div className="animate-fade-up">
            <div className="text-center mb-12">
              <span className="inline-block px-10 py-4 rounded-full bg-[#1FA855] text-black text-base font-bold mb-8 shadow-md uppercase tracking-widest">Waterproofing Service</span>
              <h3 className="text-3xl sm:text-4xl font-bold tracking-tight mb-2">{waterproofingContent.title}</h3>
              <p className="text-lg font-medium text-[#0288D1] mb-4">{waterproofingContent.subtitle}</p>
              <p className="text-base text-muted-foreground max-w-2xl mx-auto">{waterproofingContent.intro}</p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
              {waterproofingContent.features.map((feature, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-[#0288D1]/10 border border-[#0288D1]/30 rounded-xl">
                  <span className="w-2 h-2 rounded-full bg-[#0288D1] shrink-0" />
                  <span className="text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-10">
              {/* Pain Points */}
              <div className="bg-red-500/10 border border-red-500/30 rounded-3xl p-8">
                <h4 className="text-lg font-bold text-red-600 mb-5">A Big Pain for Industries</h4>
                <ul className="space-y-3">
                  {waterproofingContent.painPoints.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
                      <span className="text-red-500">x</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* NanoQuinn Solution */}
              <div className="bg-[#0288D1]/10 border border-[#0288D1]/30 rounded-3xl p-8">
                <h4 className="text-lg font-bold text-[#0288D1] mb-5">NanoQuinn Changes The Game</h4>
                <ul className="space-y-4">
                  {waterproofingContent.process.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-[#0288D1] text-white text-xs font-bold flex items-center justify-center shrink-0">{item.step}</span>
                      <div>
                        <p className="font-semibold text-sm">{item.title}</p>
                        <p className="text-xs text-muted-foreground">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Pillars */}
            <div className="bg-gradient-to-r from-[#0288D1] to-[#01579B] rounded-3xl p-8 text-center">
              <div className="flex flex-wrap justify-center gap-3 mb-4">
                {waterproofingContent.pillars.map((pillar, i) => (
                  <span key={i} className="px-4 py-2 bg-white/20 rounded-full text-sm font-medium text-white">{pillar}</span>
                ))}
              </div>
              <p className="text-lg font-bold text-white">{waterproofingContent.footer}</p>
            </div>
          </div>
        )}

        {/* Surface Tolerant Epoxy */}
        {activeContent === "SurfaceTolerantEpoxy" && (
          <div className="animate-fade-up">
            <div className="text-center mb-12">
              <span className="inline-block px-10 py-4 rounded-full bg-[#1FA855] text-black text-base font-bold mb-8 shadow-md uppercase tracking-widest">Surface Tolerant Epoxy</span>
              <h3 className="text-3xl sm:text-4xl font-bold tracking-tight mb-2">{surfaceTolerantEpoxyContent.title}</h3>
              <p className="text-lg font-medium text-[#2E7D32] mb-4">{surfaceTolerantEpoxyContent.subtitle}</p>
              <p className="text-base text-muted-foreground max-w-2xl mx-auto">{surfaceTolerantEpoxyContent.intro}</p>
            </div>

            {/* Specs */}
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              <div className="px-6 py-4 bg-[#2E7D32]/10 border border-[#2E7D32]/30 rounded-2xl text-center">
                <p className="text-2xl font-bold text-[#2E7D32]">{surfaceTolerantEpoxyContent.specs.coats}</p>
                <p className="text-xs text-muted-foreground">Application</p>
              </div>
              <div className="px-6 py-4 bg-[#2E7D32]/10 border border-[#2E7D32]/30 rounded-2xl text-center">
                <p className="text-2xl font-bold text-[#2E7D32]">{surfaceTolerantEpoxyContent.specs.thickness}</p>
                <p className="text-xs text-muted-foreground">Thickness</p>
              </div>
              <div className="px-6 py-4 bg-[#2E7D32] rounded-2xl text-center">
                <p className="text-2xl font-bold text-white">{surfaceTolerantEpoxyContent.specs.protection}</p>
                <p className="text-xs text-white/80">Protection</p>
              </div>
            </div>

            {/* Features */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
              {surfaceTolerantEpoxyContent.features.map((feature, i) => (
                <div key={i} className="bg-muted rounded-2xl p-6">
                  <h4 className="font-bold text-[#2E7D32] mb-2">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground">{feature.desc}</p>
                </div>
              ))}
            </div>

            {/* Nano Layer Benefits */}
            <div className="bg-foreground text-background rounded-3xl p-8 mb-10">
              <h4 className="text-lg font-bold text-[#2E7D32] mb-5">10 Years Protection with Nano Layer Technology</h4>
              <div className="grid sm:grid-cols-2 gap-3">
                {surfaceTolerantEpoxyContent.nanoLayerBenefits.map((benefit, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-background/70">
                    <span className="w-2 h-2 rounded-full bg-[#2E7D32] shrink-0" />
                    {benefit}
                  </div>
                ))}
              </div>
            </div>

            {/* Ideal For */}
            <div className="bg-muted rounded-3xl p-8 mb-10">
              <h4 className="text-lg font-bold mb-5 flex items-center gap-2">
                <span className="w-2 h-6 bg-[#2E7D32] rounded-full inline-block" />
                Ideal For
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {surfaceTolerantEpoxyContent.idealFor.map((item, i) => (
                  <div key={i} className="flex items-center gap-2 p-3 bg-background rounded-xl">
                    <span className="w-2 h-2 rounded-full bg-[#2E7D32] shrink-0" />
                    <span className="text-sm font-medium">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Features */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-6">
              {surfaceTolerantEpoxyContent.bottomFeatures.map((item, i) => (
                <div key={i} className="bg-[#2E7D32]/10 border border-[#2E7D32]/30 rounded-2xl p-4 text-center">
                  <p className="font-bold text-sm text-[#2E7D32] mb-1">{item.title}</p>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-[#2E7D32] to-[#1B5E20] rounded-3xl p-8 text-center">
              <p className="text-lg font-bold text-white">{surfaceTolerantEpoxyContent.footer}</p>
            </div>
          </div>
        )}

        {/* Asset Health Audit — moved to /asset-health-audit page */}
        {false && (
          <div className="animate-fade-up">
            {/* Header */}
            <div className="text-center mb-12">
              <span className="inline-block px-10 py-4 rounded-full bg-[#1FA855] text-black text-base font-bold mb-8 shadow-md uppercase tracking-widest">&quot;Asset Health&quot; Audit</span>
              <h3 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">{auditContent.title}</h3>
              <p className="text-lg font-semibold text-[#1FA855] mb-4">{auditContent.subtitle}</p>
              <p className="text-base text-muted-foreground max-w-3xl mx-auto">{auditContent.intro}</p>
            </div>

            {/* Overview cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
              {auditContent.overview.map((item, i) => (
                <div key={i} className="bg-foreground text-background rounded-3xl p-7">
                  <h4 className="font-bold text-[#1FA855] mb-2">{item.label}</h4>
                  <p className="text-sm text-background/70 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* What We Audit */}
            <div className="mb-12">
              <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
                <span className="w-2 h-6 bg-[#1FA855] rounded-full inline-block" />
                What We Audit
              </h4>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {auditContent.whatWeAudit.map((item, i) => (
                  <div key={i} className="bg-muted rounded-2xl p-6 flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-[#1FA855] text-black text-sm font-bold flex items-center justify-center shrink-0">{i + 1}</span>
                    <div>
                      <p className="font-semibold text-foreground">{item.label}</p>
                      <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Who We Serve + Methodology */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-muted rounded-3xl p-8">
                <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
                  <span className="w-2 h-6 bg-[#1FA855] rounded-full inline-block" />
                  Who We Serve
                </h4>
                <ul className="space-y-4">
                  {auditContent.whoWeServe.map((item, i) => (
                    <li key={i}>
                      <p className="font-semibold text-foreground text-sm">{item.label}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{item.desc}</p>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col gap-6">
                {/* Methodology */}
                <div className="bg-foreground text-background rounded-3xl p-8">
                  <h4 className="text-lg font-bold text-[#1FA855] mb-6">Audit Methodology</h4>
                  <div className="flex items-center gap-2 flex-wrap">
                    {auditContent.methodology.map((step, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <span className="px-4 py-2 rounded-full bg-[#1FA855] text-black text-sm font-bold">{step}</span>
                        {i < auditContent.methodology.length - 1 && <ChevronRight className="w-4 h-4 text-[#1FA855]" />}
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-background/50 mt-4">Each phase builds on the last — ensuring recommendations are grounded in verified site data, quantified risk, and practical protection science.</p>
                </div>

                {/* Deliverables */}
                <div className="bg-muted rounded-3xl p-8">
                  <h4 className="text-lg font-bold mb-5 flex items-center gap-2">
                    <span className="w-2 h-6 bg-[#1FA855] rounded-full inline-block" />
                    Audit Deliverables
                  </h4>
                  <ul className="space-y-2">
                    {auditContent.deliverables.map((d, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <span className="text-[#1FA855] font-bold shrink-0">✔</span>
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Objectives */}
            <div className="mb-12">
              <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
                <span className="w-2 h-6 bg-[#1FA855] rounded-full inline-block" />
                Audit Objectives
              </h4>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {auditContent.objectives.map((obj, i) => (
                  <div key={i} className="bg-muted rounded-2xl p-6">
                    <p className="font-bold text-foreground mb-1">{obj.label}</p>
                    <p className="text-sm text-muted-foreground">{obj.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-foreground text-background rounded-3xl p-10">
              <div className="text-center mb-8">
                <h4 className="text-2xl font-bold text-[#1FA855] mb-3">{auditContent.cta.heading}</h4>
                <p className="text-background/70 text-sm max-w-2xl mx-auto leading-relaxed">{auditContent.cta.sub}</p>
              </div>
              <div className="grid sm:grid-cols-3 gap-5 mb-8">
                {auditContent.cta.options.map((opt, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
                    <p className="font-bold text-white mb-2">{opt.label}</p>
                    <p className="text-xs text-background/60 leading-relaxed">{opt.desc}</p>
                  </div>
                ))}
              </div>
              <div className="text-center">
                <a
                  href="https://wa.me/918608604817"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full px-10 py-4 bg-[#1FA855] text-black font-semibold hover:bg-[#1ebe5d] transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.117 1.526 5.847L0 24l6.345-1.506A11.946 11.946 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.371l-.36-.214-3.724.977.994-3.634-.235-.374A9.818 9.818 0 1112 21.818z"/>
                  </svg>
                  Request an Audit on WhatsApp
                </a>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  )
}
