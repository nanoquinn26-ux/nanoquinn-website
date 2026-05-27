"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { 
  ArrowRight, Shield, Leaf, Award, Search, Paintbrush, Settings, 
  Eye, BadgeCheck, Handshake, Building2, Factory, Container, 
  PipetteIcon, Zap, Ship, Wind, Fuel, Train, Car, SolarPanel,
  XCircle, CheckCircle, Wrench, Clock, Users, TrendingDown, AlertTriangle,
  Cpu, BarChart3, FileCheck, Calendar, Heart
} from "lucide-react"

// Problems list
const problems = [
  { icon: TrendingDown, label: "Recurring Maintenance OPEX" },
  { icon: AlertTriangle, label: "Asset Deterioration & Degradation" },
  { icon: Clock, label: "Production Losses & Shutdowns" },
  { icon: Wrench, label: "Premature Asset Replacement" },
  { icon: Users, label: "Multiple Vendor Dependency" },
  { icon: Leaf, label: "Environmental & Compliance Challenges" },
  { icon: TrendingDown, label: "Rising CAPEX Requirements" },
]

// Outcomes list
const outcomes = [
  { icon: CheckCircle, label: "Reduced Maintenance OPEX" },
  { icon: CheckCircle, label: "Deferred CAPEX" },
  { icon: CheckCircle, label: "Longer Asset Life" },
  { icon: CheckCircle, label: "Improved Reliability" },
  { icon: CheckCircle, label: "Reduced Shutdowns" },
  { icon: CheckCircle, label: "Improved Safety" },
  { icon: CheckCircle, label: "Better ESG Performance" },
  { icon: CheckCircle, label: "Sustainable Operations" },
  { icon: Heart, label: "Complete Peace Of Mind" },
]

// Asset types
const assetTypes = [
  { icon: Settings, label: "Mechanical Assets" },
  { icon: Building2, label: "Civil Structures" },
  { icon: Zap, label: "Electrical & Electronics" },
  { icon: SolarPanel, label: "Solar Assets" },
  { icon: PipetteIcon, label: "Polymers & Plastics" },
  { icon: Container, label: "Glass Surfaces" },
  { icon: Factory, label: "Industrial Infrastructure" },
  { icon: Wrench, label: "And Many More" },
]

// Protection technologies
const protectionTech = [
  "Corrosion",
  "Moisture Ingress",
  "UV Degradation",
  "Chemical Exposure",
  "Surface Contamination",
  "Wear & Tear",
  "Environmental Deterioration",
]

// Warranty features
const warrantyFeatures = [
  { icon: Award, label: "Long-Term Warranty" },
  { icon: BadgeCheck, label: "Performance Commitment" },
  { icon: Paintbrush, label: "Skilled Application" },
  { icon: Wrench, label: "Service Support" },
  { icon: Eye, label: "Asset Monitoring" },
  { icon: Calendar, label: "Annual Audits" },
  { icon: Shield, label: "Accountability Throughout" },
]

// AI features
const aiFeatures = [
  "Asset Health Status",
  "Warranty Status",
  "Service History",
  "Audit Reports",
  "Protection Performance",
  "Remaining Asset Life",
  "CAPEX Planning Opportunities",
]

// Audit features
const auditFeatures = [
  "Free Annual Asset Health Audits",
  "Asset Condition Assessment",
  "Risk Identification",
  "Performance Verification",
  "Warranty Compliance Review",
  "Lifecycle Extension Recommendations",
  "CAPEX Deferment Planning",
  "ESG & Sustainability Reporting",
]

// Management wants
const managementWants = [
  { wrong: "More Maintenance", right: "Less Maintenance" },
  { wrong: "More Vendors", right: "One Responsible Partner" },
  { wrong: "More Repairs", right: "Long-Term Preservation" },
  { wrong: "More CAPEX", right: "Maximum Asset Life" },
  { wrong: "More Shutdowns", right: "Continuous Operations" },
]

export function Hero() {
  const [activeSection, setActiveSection] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSection((prev) => (prev + 1) % 5)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Main Background - Dark Navy to Green Gradient */}
      <div className="absolute inset-0 bg-[#0F2744]" />
      
      {/* Green Gradient Glow on Right */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#22C55E]/25 via-[#14B8A6]/15 to-transparent" />
      
      {/* Light Blue Accent Glow */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-[#5EEAD4]/10 rounded-full blur-3xl" />
      
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
        backgroundSize: '60px 60px',
      }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 pb-20">
        
        {/* Section 1: The Problem */}
        <div className="max-w-5xl mx-auto text-center mb-20">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-[#22C55E] mb-8 sm:mb-10 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-[#14B8A6] animate-pulse" />
            <span className="text-xs sm:text-sm font-semibold text-[#ffffff] uppercase tracking-wider">The World&apos;s Biggest Maintenance Problem Is Simple</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-balance mb-6 sm:mb-8 animate-fade-up delay-100">
            <span className="text-white">Assets Are Maintained.</span>{" "}
            <span className="bg-gradient-to-r from-[#5EEAD4] via-[#14B8A6] to-[#22C55E] bg-clip-text text-transparent">But Not Protected.</span><br />
            <span className="text-white">Assets Are Repaired.</span>{" "}
            <span className="bg-gradient-to-r from-[#5EEAD4] via-[#14B8A6] to-[#22C55E] bg-clip-text text-transparent">But Not Preserved.</span>
          </h1>

          {/* Problem Description */}
          <p className="text-base sm:text-lg lg:text-xl text-white/70 leading-relaxed max-w-3xl mx-auto mb-10 animate-fade-up delay-200">
            Every year industries spend crores on maintenance, painting, repairs, shutdowns, manpower, and replacement of deteriorating assets.
            Yet the same assets continue to corrode, deteriorate, age, and demand maintenance again.
          </p>

          {/* Problems Grid */}
          <div className="mb-12 animate-fade-up delay-300">
            <p className="text-sm text-white/50 uppercase tracking-wider mb-6">The result is an endless cycle of:</p>
            <div className="flex flex-wrap justify-center gap-3">
              {problems.map((problem) => (
                <div 
                  key={problem.label}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-sky-500/10 border border-sky-500/30"
                >
                  <XCircle className="w-4 h-4 text-sky-400" />
                  <span className="text-sm text-white/80">{problem.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Section 2: The Solution */}
        <div className="max-w-5xl mx-auto text-center mb-20 py-16 border-t border-b border-white/10">
          <p className="inline-block text-base sm:text-lg text-white font-semibold mb-6 uppercase tracking-wider px-6 py-3 rounded-full bg-[#0D9488]">
            What If Assets Could Be Preserved Instead Of Repaired?
          </p>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Welcome to{" "}
            <span className="bg-gradient-to-r from-[#5EEAD4] via-[#14B8A6] to-[#22C55E] bg-clip-text text-transparent">NanoQuinn APaaS Platform</span>
          </h2>
          <p className="text-lg text-white/60 mb-2">(Asset Protection as a Service)</p>
          
          <p className="text-base sm:text-lg lg:text-xl text-white/70 leading-relaxed max-w-4xl mx-auto">
            A revolutionary AI-driven platform designed to{" "}
            <span className="bg-gradient-to-r from-[#5EEAD4] via-[#14B8A6] to-[#22C55E] bg-clip-text text-transparent font-semibold">
              Protect, Preserve, Monitor, Audit, and Take Responsibility
            </span>{" "}
            for industrial assets through globally certified Zero to Low VOC sustainable technologies.
          </p>
        </div>

        {/* Section 3: One Platform. Every Asset. Every Surface */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-[#5EEAD4] via-[#14B8A6] to-[#22C55E] bg-clip-text text-transparent">One Platform.</span>{" "}
              Every Asset. Every Surface.
            </h3>
            <p className="text-white/60">NanoQuinn provides 360° protection and preservation solutions for:</p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {assetTypes.map((asset) => (
              <div 
                key={asset.label}
                className="flex flex-col items-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#1FA855]/30 transition-all duration-300 group"
              >
                <asset.icon className="w-8 h-8 text-[#1FA855] mb-3 group-hover:scale-110 transition-transform" />
                <span className="text-sm text-white/80 text-center font-medium">{asset.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Section 4: The NanoQuinn Difference */}
        <div className="max-w-5xl mx-auto mb-20 bg-gradient-to-br from-white/[0.06] to-white/[0.02] border border-white/10 rounded-3xl p-8 sm:p-12">
          <div className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
              The <span className="bg-gradient-to-r from-[#5EEAD4] via-[#14B8A6] to-[#22C55E] bg-clip-text text-transparent">NanoQuinn Difference</span>
            </h3>
            <p className="text-xl font-semibold text-white mb-2">Protection First. Maintenance Later.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 rounded-2xl bg-sky-500/10 border border-sky-500/30">
              <h4 className="text-lg font-bold text-sky-400 mb-4">Traditional Maintenance</h4>
              <p className="text-white/70">Begins after damage occurs.</p>
            </div>
            <div className="p-6 rounded-2xl bg-[#1FA855]/10 border border-[#1FA855]/30">
              <h4 className="text-lg font-bold text-[#1FA855] mb-4">NanoQuinn Approach</h4>
              <p className="text-white/70">Prevents deterioration before it starts.</p>
            </div>
          </div>
          
          <p className="text-center text-white/70 mt-8 leading-relaxed">
            By combining world-leading protection technologies, skilled applicators, AI monitoring, annual audits, and long-term responsibility, 
            NanoQuinn transforms maintenance from a recurring expense into a{" "}
            <span className="text-[#1FA855] font-semibold">strategic asset preservation program</span>.
          </p>
        </div>

        {/* Section 5: Protection Technologies */}
        <div className="max-w-5xl mx-auto mb-20">
          <div className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
              World&apos;s Leading{" "}
              <span className="bg-gradient-to-r from-[#5EEAD4] via-[#14B8A6] to-[#22C55E] bg-clip-text text-transparent">Sustainable Protection Technologies</span>
            </h3>
            <p className="text-white/60">NanoQuinn&apos;s certified innovations deliver long-lasting protection against:</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {protectionTech.map((tech) => (
              <div 
                key={tech}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#1FA855]/10 border border-[#1FA855]/30"
              >
                <CheckCircle className="w-4 h-4 text-[#1FA855]" />
                <span className="text-sm text-white/80">{tech}</span>
              </div>
            ))}
          </div>
          
          <p className="text-center text-white/60 text-sm">
            All through <span className="text-[#1FA855] font-semibold">Zero to Low VOC Sustainable Technologies</span> supporting ESG, EHS, and Net-Zero initiatives.
          </p>
        </div>

        {/* Section 6: Warranty with Responsibility */}
        <div className="max-w-5xl mx-auto mb-20 bg-gradient-to-br from-white/[0.06] to-white/[0.02] border border-white/10 rounded-3xl p-8 sm:p-12">
          <div className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
              Unconditional Warranty with{" "}
              <span className="bg-gradient-to-r from-[#5EEAD4] via-[#14B8A6] to-[#22C55E] bg-clip-text text-transparent">Responsibility</span>
            </h3>
            <div className="text-white/70 space-y-1 mb-6">
              <p>Most companies sell products.</p>
              <p>Some companies sell services.</p>
              <p className="text-[#1FA855] font-bold text-lg">NanoQuinn Delivers Responsibility.</p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            {warrantyFeatures.map((feature) => (
              <div 
                key={feature.label}
                className="flex flex-col items-center p-4 rounded-xl bg-white/5 border border-white/10"
              >
                <feature.icon className="w-6 h-6 text-[#1FA855] mb-2" />
                <span className="text-xs text-white/70 text-center">{feature.label}</span>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center gap-8 text-center">
            <div>
              <p className="text-[#1FA855] font-bold text-lg">One Partner.</p>
            </div>
            <div>
              <p className="text-[#1FA855] font-bold text-lg">One Platform.</p>
            </div>
            <div>
              <p className="text-[#1FA855] font-bold text-lg">One Responsibility.</p>
            </div>
          </div>
        </div>

        {/* Section 7: AI-Driven Asset Intelligence */}
        <div className="max-w-5xl mx-auto mb-20">
          <div className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-[#5EEAD4] via-[#14B8A6] to-[#22C55E] bg-clip-text text-transparent">AI-Driven</span>{" "}
              Asset Intelligence
            </h3>
            <p className="text-white/60">Every protected asset becomes digitally monitored. Track:</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {aiFeatures.map((feature) => (
              <div 
                key={feature}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#1FA855]/10 border border-[#1FA855]/30"
              >
                <CheckCircle className="w-4 h-4 text-[#1FA855]" />
                <span className="text-sm text-white/80">{feature}</span>
              </div>
            ))}
          </div>
          
          <div className="text-center text-white/70">
            <p>The future of maintenance is not reactive.</p>
            <p className="text-[#1FA855] font-bold text-xl mt-2">The future is predictive.</p>
          </div>
        </div>

        {/* Section 8: Free Annual Audits */}
        <div className="max-w-5xl mx-auto mb-20 bg-gradient-to-br from-white/[0.06] to-white/[0.02] border border-white/10 rounded-3xl p-8 sm:p-12">
          <div className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
              Free Annual{" "}
              <span className="bg-gradient-to-r from-[#5EEAD4] via-[#14B8A6] to-[#22C55E] bg-clip-text text-transparent">Asset Health Audits</span>
            </h3>
            <p className="text-white/60">Unlike traditional vendors who disappear after project completion, NanoQuinn remains engaged throughout the warranty period.</p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {auditFeatures.map((feature) => (
              <div 
                key={feature}
                className="flex items-center gap-2 p-3 rounded-xl bg-white/5 border border-white/10"
              >
                <CheckCircle className="w-4 h-4 text-[#1FA855] shrink-0" />
                <span className="text-xs text-white/70">{feature}</span>
              </div>
            ))}
          </div>
          
          <p className="text-center text-[#1FA855] font-semibold mt-8">
            A complete lifecycle commitment to preserving your assets.
          </p>
        </div>

        {/* Section 9: What Management Really Wants */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
              What Management{" "}
              <span className="bg-gradient-to-r from-[#5EEAD4] via-[#14B8A6] to-[#22C55E] bg-clip-text text-transparent">Really Wants</span>
            </h3>
          </div>
          
          <div className="space-y-4">
            {managementWants.map((item) => (
              <div key={item.right} className="flex items-center justify-center gap-4 sm:gap-8">
                <div className="flex items-center gap-2 text-white/50 line-through">
                  <span className="text-sm sm:text-base">Not {item.wrong}</span>
                </div>
                <ArrowRight className="w-5 h-5 text-[#1FA855]" />
                <div className="flex items-center gap-2 text-[#1FA855] font-semibold">
                  <span className="text-sm sm:text-base">{item.right}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 10: The Outcome */}
        <div className="max-w-5xl mx-auto mb-20">
          <div className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
              The{" "}
              <span className="bg-gradient-to-r from-[#5EEAD4] via-[#14B8A6] to-[#22C55E] bg-clip-text text-transparent">Outcome</span>
            </h3>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3">
            {outcomes.map((outcome) => (
              <div 
                key={outcome.label}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#1FA855]/10 border border-[#1FA855]/30"
              >
                <outcome.icon className="w-4 h-4 text-[#1FA855]" />
                <span className="text-sm text-white/80">{outcome.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA Section */}
        <div className="max-w-4xl mx-auto text-center bg-[#1E3A5F] rounded-3xl p-10 sm:p-16">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold italic tracking-tight mb-4 text-white">
            NanoQuinn{" "}
            <span className="bg-gradient-to-r from-[#5EEAD4] via-[#14B8A6] to-[#22C55E] bg-clip-text text-transparent not-italic">
              APaaS™
            </span>{" "}
            <span className="not-italic">Platform</span>
          </h3>
          
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-6">
            <span className="text-base sm:text-lg font-bold bg-gradient-to-r from-[#5EEAD4] via-[#14B8A6] to-[#22C55E] bg-clip-text text-transparent">Protect</span>
            <span className="text-white/40">•</span>
            <span className="text-base sm:text-lg font-bold text-white">Preserve</span>
            <span className="text-white/40">•</span>
            <span className="text-base sm:text-lg font-bold bg-gradient-to-r from-[#5EEAD4] via-[#14B8A6] to-[#22C55E] bg-clip-text text-transparent">Monitor</span>
            <span className="text-white/40">•</span>
            <span className="text-base sm:text-lg font-bold text-white">Audit</span>
            <span className="text-white/40">•</span>
            <span className="text-base sm:text-lg font-bold bg-gradient-to-r from-[#5EEAD4] via-[#14B8A6] to-[#22C55E] bg-clip-text text-transparent">Take Responsibility</span>
          </div>
          
          <p className="text-lg sm:text-xl text-white/80 mb-2">The Future Of Industrial Asset Protection & Preservation.</p>
          <p className="text-[#1FA855] font-semibold">Every Asset. Every Surface. Every Year. With Responsibility.</p>
          
          <div className="mt-8">
            <a
              href="https://wa.me/918608604817"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="text-base px-10 py-6 h-auto rounded-full bg-[#1FA855] text-white hover:bg-[#34C66E]">
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-16 flex justify-center">
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs text-white/50 uppercase tracking-wider">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-white/20 rounded-full flex items-start justify-center p-1">
              <div className="w-1.5 h-3 bg-[#1FA855] rounded-full animate-bounce" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
