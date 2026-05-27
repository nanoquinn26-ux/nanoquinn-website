"use client"

import { 
  CheckCircle, XCircle, ArrowRight, Shield, Award, Settings, 
  Eye, BadgeCheck, Building2, Factory, Container, 
  PipetteIcon, Zap, SolarPanel, Wrench, Clock, Users, TrendingDown, AlertTriangle,
  BarChart3, Calendar
} from "lucide-react"

// Problems list
const problems = [
  { icon: TrendingDown, label: "Recurring Maintenance OPEX" },
  { icon: AlertTriangle, label: "Asset Deterioration" },
  { icon: Clock, label: "Production Losses" },
  { icon: Wrench, label: "Premature Replacement" },
  { icon: Users, label: "Multiple Vendors" },
  { icon: TrendingDown, label: "Rising CAPEX" },
]

// Outcomes list
const outcomes = [
  "Reduced Maintenance OPEX",
  "Deferred CAPEX",
  "Longer Asset Life",
  "Improved Reliability",
  "Reduced Shutdowns",
  "Better ESG Performance",
]

// Asset types
const assetTypes = [
  { icon: Settings, label: "Mechanical Assets" },
  { icon: Building2, label: "Civil Structures" },
  { icon: Zap, label: "Electrical Systems" },
  { icon: SolarPanel, label: "Solar Assets" },
  { icon: PipetteIcon, label: "Polymers" },
  { icon: Container, label: "Glass Surfaces" },
  { icon: Factory, label: "Industrial Infrastructure" },
  { icon: Wrench, label: "And More" },
]

// Protection technologies
const protectionTech = [
  "Corrosion",
  "Moisture Ingress",
  "UV Degradation",
  "Chemical Exposure",
  "Surface Contamination",
  "Wear & Tear",
]

export function Hero() {
  return (
    <section className="bg-white">
      
      {/* Section 1: Hero - Full Width Background */}
      <div 
        className="relative min-h-screen bg-cover bg-center bg-no-repeat flex items-center"
        style={{ backgroundImage: "url('/images/hero-bg.png')" }}
      >
        {/* Dark overlay for text contrast */}
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="max-w-4xl mx-auto px-8 text-center relative z-10 py-20">
          {/* Eyebrow */}
          <p className="text-[10px] font-medium text-white uppercase tracking-[0.2em] mb-6 drop-shadow-lg">
            The World&apos;s Biggest Maintenance Problem
          </p>

          {/* H1 Hero */}
          <h1 className="text-[44px] font-medium text-white leading-[1.1] mb-6 drop-shadow-lg">
            Assets Are Maintained.<br />
            But Not Protected.
          </h1>

          {/* Body copy */}
          <p className="text-[14px] font-normal text-white leading-[1.6] max-w-2xl mx-auto mb-10 drop-shadow-md">
            Every year industries spend crores on maintenance, painting, repairs, and replacement. 
            Yet assets continue to corrode, deteriorate, and demand maintenance again.
          </p>

          {/* CTA Button */}
          <div className="flex justify-center gap-4">
            <button className="px-6 py-3 bg-[#111111] text-white text-[12px] font-medium rounded-[3px] transition-opacity duration-200 hover:opacity-70 drop-shadow-lg">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Section 2: The Problems - Split Layout with Image */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
        {/* Left: Image */}
        <div 
          className="h-96 lg:h-auto bg-cover bg-center"
          style={{ backgroundImage: "url('/images/corrosion-problem.jpg')" }}
        />
        
        {/* Right: Content with overlay */}
        <div className="py-20 px-8 bg-[#F7F7F7] flex flex-col justify-center">
          <p className="text-[10px] font-medium text-[#9A9A9A] uppercase tracking-[0.2em] mb-6">
            Current State
          </p>
          <h2 className="text-[28px] font-medium text-[#111111] leading-[1.2] mb-6">
            The Challenge
          </h2>
          <p className="text-[14px] font-normal text-[#6B6B6B] leading-[1.6] mb-8">
            Industries face a continuous cycle of maintenance and replacement. Assets corrode, deteriorate, and require constant intervention, leading to rising OPEX and CAPEX.
          </p>
          
          {/* Problems Grid */}
          <div className="grid grid-cols-2 gap-4">
            {problems.slice(0, 4).map((problem) => (
              <div key={problem.label} className="flex gap-3">
                <problem.icon className="w-5 h-5 text-[#111111] flex-shrink-0 mt-0.5" />
                <span className="text-[14px] text-[#6B6B6B]">{problem.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section 3: The Solution - Image + Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
        {/* Left: Content */}
        <div className="py-20 px-8 bg-white flex flex-col justify-center order-2 lg:order-1">
          <p className="text-[10px] font-medium text-[#9A9A9A] uppercase tracking-[0.2em] mb-6">
            Our Solution
          </p>
          <h2 className="text-[28px] font-medium text-[#111111] leading-[1.2] mb-6">
            Proactive Asset Protection
          </h2>
          <p className="text-[14px] font-normal text-[#6B6B6B] leading-[1.6] mb-8">
            NanoQuinn APaaS™ Platform breaks the cycle of maintenance and replacement through certified protection technologies that preserve assets for longer.
          </p>
          
          {/* Outcomes List */}
          <div className="space-y-3">
            {outcomes.slice(0, 3).map((outcome) => (
              <div key={outcome} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-[#111111]" />
                <span className="text-[14px] text-[#6B6B6B]">{outcome}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Right: Image */}
        <div 
          className="h-96 lg:h-auto bg-cover bg-center order-1 lg:order-2"
          style={{ backgroundImage: "url('/images/renewable-energy-bg.png')" }}
        />
      </div>

      {/* Section 4: Protection Technologies - Full Width with Overlay */}
      <div 
        className="py-20 px-8 bg-cover bg-center relative"
        style={{ backgroundImage: "url('/images/industrial-pipelines.png')" }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="text-[10px] font-medium text-white uppercase tracking-[0.2em] mb-6 drop-shadow-lg">
            Certified Technologies
          </p>
          <h2 className="text-[28px] font-medium text-white leading-[1.2] mb-8 drop-shadow-lg">
            Protection Against
          </h2>
          
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {protectionTech.map((tech) => (
              <div 
                key={tech}
                className="px-4 py-3 bg-white/10 border border-white/30 rounded-[6px] backdrop-blur-sm"
              >
                <p className="text-[14px] font-medium text-white drop-shadow-md">{tech}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section 5: Asset Coverage - Image + Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
        {/* Left: Image */}
        <div 
          className="h-96 lg:h-auto bg-cover bg-center"
          style={{ backgroundImage: "url('/images/asset-protection.jpg')" }}
        />
        
        {/* Right: Content */}
        <div className="py-20 px-8 bg-[#F7F7F7] flex flex-col justify-center">
          <p className="text-[10px] font-medium text-[#9A9A9A] uppercase tracking-[0.2em] mb-6">
            Coverage
          </p>
          <h2 className="text-[28px] font-medium text-[#111111] leading-[1.2] mb-6">
            All Assets Protected
          </h2>
          <p className="text-[14px] font-normal text-[#6B6B6B] leading-[1.6] mb-8">
            From mechanical equipment to civil structures, electrical systems to solar assets—NanoQuinn protects all asset types across industries.
          </p>
          
          <div className="grid grid-cols-2 gap-4">
            {assetTypes.slice(0, 6).map((asset) => (
              <div key={asset.label} className="flex gap-3">
                <asset.icon className="w-5 h-5 text-[#111111] flex-shrink-0 mt-0.5" />
                <span className="text-[14px] text-[#6B6B6B]">{asset.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section 6: Maintenance in Action - Full Width */}
      <div 
        className="py-20 px-8 bg-cover bg-center relative"
        style={{ backgroundImage: "url('/images/maintenance-care.jpg')" }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/45" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="text-[10px] font-medium text-white uppercase tracking-[0.2em] mb-6 drop-shadow-lg">
            Expert Care
          </p>
          <h2 className="text-[28px] font-medium text-white leading-[1.2] mb-6 drop-shadow-lg">
            Professional Asset Maintenance
          </h2>
          <p className="text-[14px] font-normal text-white leading-[1.6] max-w-2xl mx-auto drop-shadow-md">
            Our team ensures every asset receives the care it needs to stay protected and performing at its best.
          </p>
        </div>
      </div>

      {/* Section 7: Industrial Facility - Image Feature */}
      <div 
        className="py-20 px-8 bg-cover bg-center relative min-h-96"
        style={{ backgroundImage: "url('/images/industrial-facility.jpg')" }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="text-[10px] font-medium text-white uppercase tracking-[0.2em] mb-6 drop-shadow-lg">
            Enterprise Grade
          </p>
          <h2 className="text-[28px] font-medium text-white leading-[1.2] drop-shadow-lg">
            Built for Industrial Scale
          </h2>
        </div>
      </div>

      {/* Section 8: Outcomes - Full Width */}
      <div className="py-20 px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-[10px] font-medium text-[#9A9A9A] uppercase tracking-[0.2em] mb-6 text-center">
            Expected Outcomes
          </p>
          <h2 className="text-[28px] font-medium text-[#111111] leading-[1.2] mb-12 text-center">
            What You Gain
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {outcomes.map((outcome) => (
              <div key={outcome} className="flex flex-col items-start gap-3">
                <CheckCircle className="w-6 h-6 text-[#111111]" />
                <p className="text-[14px] font-medium text-[#111111]">{outcome}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  )
}
