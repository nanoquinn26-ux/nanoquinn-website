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

// Warranty features
const warrantyFeatures = [
  { icon: Award, label: "Long-Term Warranty" },
  { icon: BadgeCheck, label: "Performance Commitment" },
  { icon: Eye, label: "Asset Monitoring" },
  { icon: Calendar, label: "Annual Audits" },
]

// Management wants
const managementWants = [
  { wrong: "More Maintenance", right: "Less Maintenance" },
  { wrong: "More Vendors", right: "One Partner" },
  { wrong: "More Repairs", right: "Long-Term Preservation" },
  { wrong: "More CAPEX", right: "Maximum Asset Life" },
]

export function Hero() {
  return (
    <section className="bg-white">
      
      {/* Section 1: Hero - The Problem */}
      <div 
        className="py-20 px-8 bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: "url('/images/hero-bg.png')" }}
      >
        <div className="max-w-4xl mx-auto text-center relative z-10">
          {/* Eyebrow */}
          <p className="text-[10px] font-medium text-[#9A9A9A] uppercase tracking-[0.2em] mb-6">
            The World&apos;s Biggest Maintenance Problem
          </p>

          {/* H1 Hero */}
          <h1 className="text-[44px] font-medium text-[#111111] leading-[1.1] mb-6">
            Assets Are Maintained.<br />
            But Not Protected.
          </h1>

          {/* Body copy */}
          <p className="text-[14px] font-normal text-[#6B6B6B] leading-[1.6] max-w-2xl mx-auto mb-10">
            Every year industries spend crores on maintenance, painting, repairs, and replacement. 
            Yet assets continue to corrode, deteriorate, and demand maintenance again.
          </p>

          {/* Problems Grid */}
          <div className="flex flex-wrap justify-center gap-2">
            {problems.map((problem) => (
              <div 
                key={problem.label}
                className="flex items-center gap-2 px-4 py-2 bg-white border border-[#E0E0E0] rounded-[6px] transition-opacity duration-200 hover:opacity-70"
              >
                <problem.icon className="w-4 h-4 text-[#3A3A3A]" />
                <span className="text-[14px] text-[#6B6B6B]">{problem.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section 2: The Solution */}
      <div className="py-20 px-8 bg-[#F7F7F7]">
        <div className="max-w-4xl mx-auto text-center">
          {/* Eyebrow */}
          <p className="text-[10px] font-medium text-[#9A9A9A] uppercase tracking-[0.2em] mb-6">
            What If Assets Could Be Preserved?
          </p>

          {/* H2 Section Title */}
          <h2 className="text-[28px] font-medium text-[#111111] leading-[1.2] mb-4">
            Welcome to NanoQuinn APaaS Platform
          </h2>
          
          <p className="text-[11px] font-normal text-[#8A8A8A] mb-6">
            Asset Protection as a Service
          </p>

          {/* Body copy */}
          <p className="text-[14px] font-normal text-[#6B6B6B] leading-[1.6] max-w-2xl mx-auto">
            A platform designed to Protect, Preserve, Monitor, Audit, and Take Responsibility 
            for industrial assets through globally certified sustainable technologies.
          </p>
        </div>
      </div>

      {/* Section 3: Asset Types */}
      <div className="py-20 px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[10px] font-medium text-[#9A9A9A] uppercase tracking-[0.2em] mb-6">
              Comprehensive Coverage
            </p>
            <h2 className="text-[28px] font-medium text-[#111111] leading-[1.2]">
              One Platform. Every Asset.
            </h2>
          </div>
          
          {/* Grid with 1px gap trick */}
          <div className="bg-[#E8E8E8] rounded-[6px] p-[0.5px]">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-[0.5px]">
              {assetTypes.map((asset) => (
                <div 
                  key={asset.label}
                  className="flex flex-col items-center p-6 bg-white transition-opacity duration-200 hover:opacity-70 first:rounded-tl-[6px] last:rounded-br-[6px]"
                >
                  <div className="w-10 h-10 rounded-[6px] bg-[#3A3A3A] flex items-center justify-center mb-3">
                    <asset.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-[14px] font-normal text-[#6B6B6B] text-center">{asset.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Section 4: The Difference */}
      <div className="py-20 px-8 bg-[#F7F7F7]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[10px] font-medium text-[#9A9A9A] uppercase tracking-[0.2em] mb-6">
              Protection First
            </p>
            <h2 className="text-[28px] font-medium text-[#111111] leading-[1.2]">
              The NanoQuinn Difference
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-[0.5px] bg-[#E8E8E8] rounded-[6px] p-[0.5px]">
            <div className="p-8 bg-white rounded-l-[6px]">
              <h3 className="text-[15px] font-medium text-[#111111] mb-3">Traditional Maintenance</h3>
              <p className="text-[14px] font-normal text-[#6B6B6B]">Begins after damage occurs. Reactive. Repetitive.</p>
            </div>
            <div className="p-8 bg-white rounded-r-[6px]">
              <h3 className="text-[15px] font-medium text-[#111111] mb-3">NanoQuinn Approach</h3>
              <p className="text-[14px] font-normal text-[#6B6B6B]">Prevents deterioration before it starts. Proactive. Permanent.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Section 5: Protection Technologies */}
      <div 
        className="py-20 px-8 bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: "url('/images/renewable-energy-bg.png')" }}
      >
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="text-[10px] font-medium text-[#9A9A9A] uppercase tracking-[0.2em] mb-6">
            Certified Technologies
          </p>
          <h2 className="text-[28px] font-medium text-[#111111] leading-[1.2] mb-4">
            Sustainable Protection
          </h2>
          <p className="text-[14px] font-normal text-[#6B6B6B] mb-10">
            Long-lasting protection against:
          </p>
          
          <div className="flex flex-wrap justify-center gap-2">
            {protectionTech.map((tech) => (
              <div 
                key={tech}
                className="flex items-center gap-2 px-4 py-2 bg-white border border-[#E0E0E0] rounded-[6px] transition-opacity duration-200 hover:opacity-70"
              >
                <CheckCircle className="w-4 h-4 text-[#3A3A3A]" />
                <span className="text-[14px] text-[#6B6B6B]">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section 6: Warranty */}
      <div className="py-20 px-8 bg-[#F7F7F7]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[10px] font-medium text-[#9A9A9A] uppercase tracking-[0.2em] mb-6">
            Accountability
          </p>
          <h2 className="text-[28px] font-medium text-[#111111] leading-[1.2] mb-10">
            Warranty with Responsibility
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-[0.5px] bg-[#E8E8E8] rounded-[6px] p-[0.5px] mb-10">
            {warrantyFeatures.map((feature) => (
              <div 
                key={feature.label}
                className="flex flex-col items-center p-6 bg-white transition-opacity duration-200 hover:opacity-70"
              >
                <div className="w-10 h-10 rounded-[6px] bg-[#3A3A3A] flex items-center justify-center mb-3">
                  <feature.icon className="w-5 h-5 text-white" />
                </div>
                <span className="text-[14px] font-normal text-[#6B6B6B] text-center">{feature.label}</span>
              </div>
            ))}
          </div>
          
          <p className="text-[14px] font-normal text-[#6B6B6B]">
            One Partner. One Platform. One Responsibility.
          </p>
        </div>
      </div>

      {/* Section 7: What Management Wants */}
      <div className="py-20 px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[10px] font-medium text-[#9A9A9A] uppercase tracking-[0.2em] mb-6">
              Business Impact
            </p>
            <h2 className="text-[28px] font-medium text-[#111111] leading-[1.2]">
              What Management Really Wants
            </h2>
          </div>
          
          <div className="space-y-4">
            {managementWants.map((item) => (
              <div key={item.right} className="flex items-center justify-center gap-6 py-3 border-b border-[#E0E0E0] last:border-0">
                <span className="text-[14px] text-[#9A9A9A] line-through w-40 text-right">{item.wrong}</span>
                <ArrowRight className="w-4 h-4 text-[#3A3A3A]" />
                <span className="text-[14px] font-medium text-[#111111] w-40 text-left">{item.right}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section 8: Outcomes */}
      <div className="py-20 px-8 bg-[#F7F7F7]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[10px] font-medium text-[#9A9A9A] uppercase tracking-[0.2em] mb-6">
            Results
          </p>
          <h2 className="text-[28px] font-medium text-[#111111] leading-[1.2] mb-10">
            The Outcome
          </h2>
          
          <div className="flex flex-wrap justify-center gap-2">
            {outcomes.map((outcome) => (
              <div 
                key={outcome}
                className="flex items-center gap-2 px-4 py-2 bg-white border border-[#E0E0E0] rounded-[6px] transition-opacity duration-200 hover:opacity-70"
              >
                <CheckCircle className="w-4 h-4 text-[#3A3A3A]" />
                <span className="text-[14px] text-[#6B6B6B]">{outcome}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section 9: CTA */}
      <div className="py-20 px-8 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-[28px] font-medium text-[#111111] leading-[1.2] mb-4">
            NanoQuinn APaaS Platform
          </h2>
          
          <p className="text-[14px] font-normal text-[#6B6B6B] mb-8">
            Protect. Preserve. Monitor. Audit. Take Responsibility.
          </p>
          
          <a href="/contact">
            <button className="px-6 py-3 bg-[#111111] text-white text-[14px] font-medium rounded-[3px] transition-opacity duration-200 hover:opacity-70">
              Get Started
            </button>
          </a>
          
          <p className="text-[11px] font-normal text-[#8A8A8A] mt-6">
            Every Asset. Every Surface. Every Year.
          </p>
        </div>
      </div>

    </section>
  )
}
