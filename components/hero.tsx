"use client"

import {
  CheckCircle,
  ArrowRight,
  Shield,
  Award,
  Eye,
  BadgeCheck,
  Building2,
  Factory,
  Container,
  PipetteIcon,
  Zap,
  SolarPanel,
  Wrench,
  Clock,
  Users,
  TrendingDown,
  AlertTriangle,
  Box,
  Infinity,
  Cog,
  Calendar
} from "lucide-react"

// Problems list
const problems = [
  { icon: TrendingDown, label: "Recurring Maintenance OPEX" },
  { icon: TrendingDown, label: "Rising CAPEX" },
  { icon: AlertTriangle, label: "Asset Deterioration" },
  { icon: Wrench, label: "Premature Replacement" },
  { icon: Users, label: "Multiple Vendors" },
  { icon: Clock, label: "Production Losses" },

  
  
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
  { icon: Building2, label: "Civil Structures" },
  { icon: Zap, label: "Electrical Systems" },
  { icon: Cog, label: "Mechanical" },
  { icon: SolarPanel, label: "Solar Assets" },
  { icon: PipetteIcon, label: "Polymers" },
  { icon: Factory, label: "Industrial Infrastructure" },
  { icon: Infinity, label: "Endless" },
];


// Protection technologies
const protectionTech = [
  "Corrosion",
  "Moisture Ingress",
  "UV Degradation",
  "Chemical Exposure",
  "Surface Contamination",
  "Wear & Tear",
]

// Warranty features
const warrantyFeatures = [
  { icon: Award, label: "Long-Term Warranty" },
  { icon: BadgeCheck, label: "Performance Commitment" },
  { icon: Eye, label: "Asset Monitoring" },
  { icon: Calendar, label: "Annual Audits" },
]

// Management wants
const managementWants = [
  { wrong: "Recurring OPEX", right: "Zero OPEX" },
  { wrong: "Frequent CAPEX", right: "Deferred CAPEX" },
  { wrong: "Asset Degradation", right: "Asset Protection & Preservation" },
  { wrong: "Shutdowns", right: "Never" },
  { wrong: "Environment Damage", right: "Sustainable" },
  { wrong: "Conditional Warranty", right: "Unconditional Warranty & Responsibility" },
]

export function Hero() {
  return (
    <section className="bg-white">
      
      {/* Section 1: Hero - The Problem */}
      <div 
        className="py-16 md:py-24 px-4 md:px-8 bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: "url('/images/hero-bg.webp')" }}
      >
        <div className="max-w-4xl mx-auto text-center relative z-10">
          {/* Eyebrow */}
          <p className="text-[14px] md:text-[16px] font-medium text-[#5A5A5A] uppercase tracking-[0.2em] mb-4 md:mb-6">
            The World&apos;s Biggest Maintenance Problem...
          </p>

          {/* H1 Hero */}
          <h1 className="text-[36px] md:text-[56px] font-extrabold text-[#3A3A3A] leading-[1.15] mb-6">
            Assets Are Maintained.<br />
            But Not Protected.
          </h1>

          {/* Body copy */}
          <p className="text-[18px] md:text-[20px] font-normal text-[#111111] leading-[1.8] max-w-2xl mx-auto mb-8 md:mb-10 bg-white/55 backdrop-blur-[2px] px-6 py-4 rounded-2xl shadow-sm">
            Every year industries spend crores on maintenance, painting,
            repairs, and replacement.
            <br />
            Yet assets continue to corrode, deteriorate, and demand
            maintenance again.
          </p>

          
           {/* Problems Grid */}
          <div className="flex flex-wrap justify-center gap-4 max-w-6xl mx-auto">
            {problems.map((problem) => (
              <div
                key={problem.label}
                className="w-[320px] h-[68px] flex items-center justify-center gap-3 px-6 bg-[#3A3A3A] border border-[#3A3A3A] rounded-[8px] shadow-md"
              >
                <problem.icon className="w-5 h-5 text-white flex-shrink-0" />
          
                <span className="text-[16px] font-medium text-white text-center whitespace-nowrap">
                  {problem.label}
                </span>
              </div>
            ))}
          </div>
      </div>
      </div>

      {/* Section 2: The Solution */}
      <div className="py-16 md:py-24 px-4 md:px-8 bg-[#F7F7F7]">
        <div className="max-w-4xl mx-auto text-center">
          {/* Eyebrow */}
          <p className="text-[14px] md:text-[16px] font-medium text-[#5A5A5A] uppercase tracking-[0.2em] mb-4 md:mb-6">
            What If Assets Could Be Preserved?
          </p>

          {/* H2 Section Title */}
          <h2 className="text-[30px] md:text-[42px] font-medium text-[#3A3A3A] leading-[1.2] mb-3 md:mb-4">
            Welcome to NanoQuinn APaaS Platform
          </h2>
          
          <p className="text-[15px] md:text-[17px] font-normal text-[#5A5A5A] mb-4 md:mb-6">
            Asset Protection as a Service
          </p>

          {/* Body copy */}
          <p className="text-[18px] md:text-[20px] font-normal text-[#5A5A5A] leading-[1.6] max-w-2xl mx-auto">
            A platform designed to Protect, Preserve, Monitor, Audit, and Take Responsibility 
            for industrial assets through globally certified sustainable technologies.
          </p>
        </div>
      </div>

      {/* Section 3: Asset Types */}
      <div className="py-16 md:py-24 px-4 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10 md:mb-12">
            <p className="text-[14px] md:text-[16px] font-medium text-[#5A5A5A] uppercase tracking-[0.2em] mb-4 md:mb-6">
              Comprehensive Coverage
            </p>
            <h2 className="text-[30px] md:text-[42px] font-medium text-[#3A3A3A] leading-[1.2]">
              One Platform. Every Asset.
            </h2>
          </div>
          
          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {assetTypes.map((asset, index) => (
              <div
                key={asset.label}
                className={`flex flex-col items-center p-5 md:p-6 bg-[#F7F7F7] rounded-[6px] transition-opacity duration-200 hover:opacity-70 ${
                  index === 6 ? "md:col-start-2" : ""
                }`}
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-[6px] bg-[#5A5A5A] flex items-center justify-center mb-3">
                  <asset.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
          
                <span className="text-[15px] md:text-[17px] font-normal text-[#5A5A5A] text-center">
                  {asset.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section 4: The Difference */}
      <div className="py-16 md:py-24 px-4 md:px-8 bg-[#F7F7F7]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10 md:mb-12">
            <p className="text-[14px] md:text-[16px] font-medium text-[#5A5A5A] uppercase tracking-[0.2em] mb-4 md:mb-6">
              Protection First
            </p>
            <h2 className="text-[30px] md:text-[42px] font-medium text-[#3A3A3A] leading-[1.2]">
              The NanoQuinn Difference
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-6 md:p-8 bg-white rounded-[6px] border border-[#E0E0E0]">
              <h3 className="text-[18px] md:text-[20px] font-medium text-[#3A3A3A] mb-3">Traditional Maintenance</h3>
              <p className="text-[16px] md:text-[18px] font-normal text-[#5A5A5A]">Begins after damage occurs. Reactive. Repetitive.</p>
            </div>
            <div className="p-6 md:p-8 bg-white rounded-[6px] border border-[#E0E0E0]">
              <h3 className="text-[18px] md:text-[20px] font-medium text-[#3A3A3A] mb-3">NanoQuinn Approach</h3>
              <p className="text-[16px] md:text-[18px] font-normal text-[#5A5A5A]">Prevents deterioration before it starts. Proactive. Permanent.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Section 5: Technology Innovations */}
      <div 
        className="py-16 md:py-24 px-4 md:px-8 bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: "url('/images/nanotech-bg.png')" }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-[#1a1a1a]/60"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="text-[14px] md:text-[16px] font-medium text-white uppercase tracking-[0.2em] mb-4 md:mb-6">
            Certified Technologies
          </p>
          <h2 className="text-[30px] md:text-[42px] font-medium text-white leading-[1.2] mb-3 md:mb-4">
            Technology Innovations
          </h2>
          <p className="text-[18px] md:text-[20px] font-normal text-white mb-8 md:mb-10">
            Long-lasting protection against:
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {protectionTech.map((tech) => (
              <div
                key={tech}
                className="w-[320px] h-[68px] mx-auto flex items-center justify-center gap-3 px-6 bg-white/20 backdrop-blur-sm border border-white/30 rounded-[8px] shadow-md"
              >
                <CheckCircle className="w-5 h-5 text-white flex-shrink-0" />
          
                <span className="text-[16px] font-medium text-white text-center whitespace-nowrap">
                  {tech}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section 6: Warranty */}
      <div className="py-16 md:py-24 px-4 md:px-8 bg-[#F7F7F7]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[14px] md:text-[16px] font-medium text-[#5A5A5A] uppercase tracking-[0.2em] mb-4 md:mb-6">
            Accountability
          </p>
          <h2 className="text-[30px] md:text-[42px] font-medium text-[#3A3A3A] leading-[1.2] mb-8 md:mb-10">
            Warranty with Responsibility
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-8 md:mb-10">
            {warrantyFeatures.map((feature) => (
              <div 
                key={feature.label}
                className="flex flex-col items-center p-5 md:p-6 bg-white rounded-[6px] border border-[#E0E0E0] transition-opacity duration-200 hover:opacity-70"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-[6px] bg-[#5A5A5A] flex items-center justify-center mb-3">
                  <feature.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
                <span className="text-[15px] md:text-[17px] font-normal text-[#5A5A5A] text-center">{feature.label}</span>
              </div>
            ))}
          </div>
          
          <p className="text-[18px] md:text-[20px] font-normal text-[#5A5A5A]">
            One Partner. One Platform. Total Responsibility.
          </p>
        </div>
      </div>

      {/* Section 7: What Management Wants */}
      <div className="py-16 md:py-24 px-4 md:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10 md:mb-12">
            <p className="text-[14px] md:text-[16px] font-medium text-[#5A5A5A] uppercase tracking-[0.2em] mb-4 md:mb-6">
              Business Impact
            </p>
            <h2 className="text-[30px] md:text-[42px] font-medium text-[#3A3A3A] leading-[1.2]">
              What Management Really Wants
            </h2>
          </div>
          
          <div className="space-y-3 md:space-y-4">
            {managementWants.map((item) => (
              <div
                key={item.right}
                className="flex items-center justify-between gap-4 py-3 md:py-4 border-b border-[#E0E0E0] last:border-0"
              >
                <span className="text-[16px] md:text-[18px] text-[#7A7A7A] line-through flex-1 text-left">
                  {item.wrong}
                </span>
          
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-[#5A5A5A] flex-shrink-0" />
          
                <span className="text-[16px] md:text-[18px] font-medium text-[#3A3A3A] flex-1 text-left">
                  {item.right}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section 8: Outcomes */}
      <div className="py-16 md:py-24 px-4 md:px-8 bg-[#F7F7F7]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[14px] md:text-[16px] font-medium text-[#5A5A5A] uppercase tracking-[0.2em] mb-4 md:mb-6">
            Results
          </p>
          <h2 className="text-[30px] md:text-[42px] font-medium text-[#3A3A3A] leading-[1.2] mb-8 md:mb-10">
            The Outcome
          </h2>
          
          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            {outcomes.map((outcome) => (
              <div 
                key={outcome}
                className="flex items-center gap-2 px-3 md:px-4 py-2 bg-white border border-[#E0E0E0] rounded-[6px] transition-opacity duration-200 hover:opacity-70"
              >
                <CheckCircle className="w-4 h-4 text-[#5A5A5A]" />
                <span className="text-[15px] md:text-[17px] text-[#5A5A5A]">{outcome}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section 9: CTA */}
      <div className="py-16 md:py-24 px-4 md:px-8 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-[30px] md:text-[42px] font-medium text-[#3A3A3A] leading-[1.2] mb-3 md:mb-4">
            NanoQuinn APaaS Platform
          </h2>
          
          <p className="text-[18px] md:text-[20px] font-normal text-[#5A5A5A] mb-6 md:mb-8">
            Protect. Preserve. Monitor. Audit. Take Responsibility.
          </p>
          
          <a href="/contact">
            <button className="px-6 md:px-8 py-3 md:py-4 bg-[#3A3A3A] text-white text-[16px] md:text-[18px] font-medium rounded-[3px] transition-opacity duration-200 hover:opacity-70">
              Enquire Now
            </button>
          </a>
          
          <p className="text-[15px] md:text-[17px] font-normal text-[#5A5A5A] mt-6">
            Every Asset. Every Surface.
          </p>
        </div>
      </div>

    </section>
  )
}
