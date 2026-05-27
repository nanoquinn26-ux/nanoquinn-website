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
          <p className="text-[10px] font-medium text-[#3A3A3A] uppercase tracking-[0.2em] mb-6">
            The World&apos;s Biggest Maintenance Problem
          </p>

          {/* H1 Hero */}
          <h1 className="text-[44px] font-medium text-[#111111] leading-[1.1] mb-6">
            Assets Are Maintained.<br />
            But Not Protected.
          </h1>

          {/* Body copy */}
          <p className="text-[14px] font-normal text-[#3A3A3A] leading-[1.6] max-w-2xl mx-auto mb-10">
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
                <span className="text-[14px] text-[#3A3A3A]">{problem.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section 2: The Solution */}
      <div className="py-20 px-8 bg-[#F7F7F7]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="order-2 md:order-1">
              <img 
                src="/images/corrosion-rust.jpg" 
                alt="Corrosion and asset deterioration problem"
                className="w-full h-auto rounded-[6px] border border-[#E0E0E0]"
              />
            </div>
            
            {/* Content */}
            <div className="order-1 md:order-2">
              <p className="text-[10px] font-medium text-[#3A3A3A] uppercase tracking-[0.2em] mb-6">
                What If Assets Could Be Preserved?
              </p>
              <h2 className="text-[28px] font-medium text-[#111111] leading-[1.2] mb-4">
                Welcome to NanoQuinn APaaS Platform
              </h2>
              <p className="text-[11px] font-normal text-[#3A3A3A] mb-6">
                Asset Protection as a Service
              </p>
              <p className="text-[14px] font-normal text-[#3A3A3A] leading-[1.6]">
                A platform designed to Protect, Preserve, Monitor, Audit, and Take Responsibility 
                for industrial assets through globally certified sustainable technologies.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Section 3: Asset Types */}
      <div className="py-20 px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            {/* Content */}
            <div>
              <p className="text-[10px] font-medium text-[#3A3A3A] uppercase tracking-[0.2em] mb-6">
                Comprehensive Coverage
              </p>
              <h2 className="text-[28px] font-medium text-[#111111] leading-[1.2] mb-8">
                One Platform. Every Asset.
              </h2>
              
              {/* Asset Grid */}
              <div className="grid grid-cols-2 gap-4">
                {assetTypes.map((asset) => (
                  <div 
                    key={asset.label}
                    className="flex items-center gap-3 p-3 bg-[#F7F7F7] rounded-[6px] transition-opacity duration-200 hover:opacity-70"
                  >
                    <div className="w-8 h-8 rounded-[4px] bg-[#3A3A3A] flex items-center justify-center flex-shrink-0">
                      <asset.icon className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-[13px] font-normal text-[#3A3A3A]">{asset.label}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Image */}
            <div>
              <img 
                src="/images/construction-safety.jpg" 
                alt="Industrial construction and asset protection"
                className="w-full h-auto rounded-[6px] border border-[#E0E0E0]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Section 4: The Difference */}
      <div className="py-20 px-8 bg-[#F7F7F7]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[10px] font-medium text-[#3A3A3A] uppercase tracking-[0.2em] mb-6">
              Protection First
            </p>
            <h2 className="text-[28px] font-medium text-[#111111] leading-[1.2]">
              The NanoQuinn Difference
            </h2>
          </div>
          
          {/* Comparison Grid with Images */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-[6px] border border-[#E0E0E0] overflow-hidden">
              <img 
                src="/images/industrial-infrastructure.png" 
                alt="Industrial pipeline infrastructure protection"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-[15px] font-medium text-[#111111] mb-2">NanoQuinn Approach</h3>
                <p className="text-[14px] font-normal text-[#3A3A3A]">Prevents deterioration before it starts. Proactive. Permanent.</p>
              </div>
            </div>
            <div className="bg-white rounded-[6px] border border-[#E0E0E0] overflow-hidden">
              <img 
                src="/images/maintenance-professional.jpg" 
                alt="Professional maintenance and care"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-[15px] font-medium text-[#111111] mb-2">Traditional Maintenance</h3>
                <p className="text-[14px] font-normal text-[#3A3A3A]">Begins after damage occurs. Reactive. Repetitive.</p>
              </div>
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
          <p className="text-[10px] font-medium text-[#3A3A3A] uppercase tracking-[0.2em] mb-6">
            Certified Technologies
          </p>
          <h2 className="text-[28px] font-medium text-[#111111] leading-[1.2] mb-4">
            Sustainable Protection
          </h2>
          <p className="text-[14px] font-normal text-[#3A3A3A] mb-10">
            Long-lasting protection against:
          </p>
          
          <div className="flex flex-wrap justify-center gap-2">
            {protectionTech.map((tech) => (
              <div 
                key={tech}
                className="flex items-center gap-2 px-4 py-2 bg-white border border-[#E0E0E0] rounded-[6px] transition-opacity duration-200 hover:opacity-70"
              >
                <CheckCircle className="w-4 h-4 text-[#3A3A3A]" />
                <span className="text-[14px] text-[#3A3A3A]">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section 6: Warranty */}
      <div className="py-20 px-8 bg-[#F7F7F7]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div>
              <img 
                src="/images/warranty-compliance.jpg" 
                alt="Warranty documentation and compliance"
                className="w-full h-auto rounded-[6px] border border-[#E0E0E0]"
              />
            </div>
            
            {/* Content */}
            <div>
              <p className="text-[10px] font-medium text-[#3A3A3A] uppercase tracking-[0.2em] mb-6">
                Accountability
              </p>
              <h2 className="text-[28px] font-medium text-[#111111] leading-[1.2] mb-8">
                Warranty with Responsibility
              </h2>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                {warrantyFeatures.map((feature) => (
                  <div 
                    key={feature.label}
                    className="flex items-center gap-3 p-4 bg-white rounded-[6px] border border-[#E0E0E0] transition-opacity duration-200 hover:opacity-70"
                  >
                    <div className="w-8 h-8 rounded-[4px] bg-[#3A3A3A] flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-[12px] font-normal text-[#3A3A3A]">{feature.label}</span>
                  </div>
                ))}
              </div>
              
              <p className="text-[14px] font-normal text-[#3A3A3A]">
                One Partner. One Platform. One Responsibility.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Section 7: What Management Wants */}
      <div className="py-20 px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <p className="text-[10px] font-medium text-[#3A3A3A] uppercase tracking-[0.2em] mb-6">
                Business Impact
              </p>
              <h2 className="text-[28px] font-medium text-[#111111] leading-[1.2] mb-8">
                What Management Really Wants
              </h2>
              
              <div className="space-y-4">
                {managementWants.map((item) => (
                  <div key={item.right} className="flex items-center gap-4 py-3 border-b border-[#E0E0E0] last:border-0">
                    <span className="text-[14px] text-[#3A3A3A] line-through flex-1">{item.wrong}</span>
                    <ArrowRight className="w-4 h-4 text-[#3A3A3A] flex-shrink-0" />
                    <span className="text-[14px] font-medium text-[#111111] flex-1">{item.right}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Image */}
            <div>
              <img 
                src="/images/financial-growth.jpg" 
                alt="Financial growth and ROI"
                className="w-full h-auto rounded-[6px] border border-[#E0E0E0]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Section 8: Outcomes */}
      <div className="py-20 px-8 bg-[#F7F7F7]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="order-2 md:order-1">
              <img 
                src="/images/industrial-storage.jpg" 
                alt="Industrial storage and infrastructure"
                className="w-full h-auto rounded-[6px] border border-[#E0E0E0]"
              />
            </div>
            
            {/* Content */}
            <div className="order-1 md:order-2">
              <p className="text-[10px] font-medium text-[#3A3A3A] uppercase tracking-[0.2em] mb-6">
                Results
              </p>
              <h2 className="text-[28px] font-medium text-[#111111] leading-[1.2] mb-10">
                The Outcome
              </h2>
              
              <div className="flex flex-wrap gap-2">
                {outcomes.map((outcome) => (
                  <div 
                    key={outcome}
                    className="flex items-center gap-2 px-4 py-2 bg-white border border-[#E0E0E0] rounded-[6px] transition-opacity duration-200 hover:opacity-70"
                  >
                    <CheckCircle className="w-4 h-4 text-[#3A3A3A]" />
                    <span className="text-[14px] text-[#3A3A3A]">{outcome}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 9: CTA */}
      <div className="py-20 px-8 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-[28px] font-medium text-[#111111] leading-[1.2] mb-4">
            NanoQuinn APaaS Platform
          </h2>
          
          <p className="text-[14px] font-normal text-[#3A3A3A] mb-8">
            Protect. Preserve. Monitor. Audit. Take Responsibility.
          </p>
          
          <a href="/contact">
            <button className="px-6 py-3 bg-[#111111] text-white text-[14px] font-medium rounded-[3px] transition-opacity duration-200 hover:opacity-70">
              Get Started
            </button>
          </a>
          
          <p className="text-[11px] font-normal text-[#3A3A3A] mt-6">
            Every Asset. Every Surface. Every Year.
          </p>
        </div>
      </div>

    </section>
  )
}
