"use client"

import { Building2, Cpu, Sun, Layers, Droplets, Settings, CheckCircle2, XCircle, Leaf, DollarSign, TrendingDown, Factory, Shield, Users, AlertTriangle, ArrowRight } from "lucide-react"

const protectedAssets = [
  { icon: Building2, label: "Civil Infrastructure" },
  { icon: Settings, label: "Mechanical Assets" },
  { icon: Cpu, label: "Electrical & Electronics" },
  { icon: Sun, label: "Solar Systems" },
  { icon: Layers, label: "Metallic Structures" },
  { icon: Droplets, label: "Polymers & Plastics" },
  { icon: Factory, label: "Concrete & Industrial Surfaces" },
]

const managementPainPoints = [
  { icon: AlertTriangle, text: "Repetitive Maintenance" },
  { icon: Factory, text: "Shutdown Losses" },
  { icon: TrendingDown, text: "Asset Degradation" },
  { icon: DollarSign, text: "Early CAPEX Replacement" },
  { icon: Leaf, text: "Environmental Damage" },
  { icon: Users, text: "Vendor Coordination Stress" },
  { icon: Settings, text: "Large Maintenance Team Dependency" },
  { icon: Shield, text: "Lack of Long-Term Responsibility" },
]

const traditionalProblems = [
  "Large maintenance departments",
  "Frequent repair cycles",
  "Repainting & shutdown expenses",
  "Repetitive contractor dependency",
  "Continuous yearly maintenance budgeting",
]

const apaasAdvantages = [
  "Long lasting protection systems",
  "Predictive preservation approach",
  "Reduced maintenance frequency",
  "Lower manpower dependency",
  "Minimal shutdown requirements",
  "One trusted responsible partner",
]

const traditionalEnvironmental = [
  "Continuous environmental damage",
  "High VOC emissions",
  "Surface deterioration",
  "Metal loss during blasting & repairs",
  "Water & chemical wastage",
  "Repetitive waste generation",
]

const sustainableAlternatives = [
  "Low / Zero VOC technologies",
  "Long lasting protection systems",
  "Reduced repainting cycles",
  "Lower shutdown requirements",
  "Lower carbon & environmental impact",
  "Preservation instead of repetitive replacement",
]

const traditionalAccepted = [
  "Frequent repainting",
  "Repetitive shutdowns",
  "Annual repair budgets",
  "Surface degradation",
  "Early asset replacement",
  "Rising manpower costs",
]

const focusAreas = [
  "Protecting",
  "Preserving",
  "Extending Asset Life",
]

const achievements = [
  { icon: DollarSign, text: "Huge OPEX Savings" },
  { icon: Shield, text: "CAPEX Protection" },
  { icon: Leaf, text: "Better ESG & EHS Compliance" },
  { icon: CheckCircle2, text: "Higher Reliability" },
  { icon: TrendingDown, text: "Reduced Operational Stress" },
  { icon: Factory, text: "Sustainable Infrastructure Management" },
]

export function ApaasSection() {
  return (
    <section id="apaas" className="py-20 sm:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Hero Header */}
        <div className="max-w-4xl mx-auto text-center mb-16 sm:mb-24">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-balance">
            NanoQuinn APaaS™ Platform
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed font-medium">
            Your 360° Sustainable Maintenance & Asset Protection Partner
          </p>
        </div>

        {/* Introduction */}
        <div className="max-w-4xl mx-auto text-center mb-16 sm:mb-20">
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            NanoQuinn introduces a revolutionary concept in industrial asset management — a complete <span className="text-foreground font-semibold">APaaS™ (Asset Protection as a Service)</span> ecosystem built on advanced global technologies, sustainability, and long-term responsibility.
          </p>
          <div className="bg-muted rounded-2xl p-6 sm:p-8 mt-8">
            <p className="text-base text-muted-foreground mb-2">Not just maintenance.</p>
            <p className="text-base text-muted-foreground mb-2">Not just coatings.</p>
            <p className="text-lg font-bold text-foreground">A complete protection & preservation platform for every asset surface.</p>
          </div>
        </div>

        {/* One Partner Section */}
        <div className="max-w-5xl mx-auto mb-20 sm:mb-28">
          <div className="bg-foreground text-background rounded-3xl p-8 sm:p-12 lg:p-16 text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
              One Partner. Every Surface. Total Responsibility.
            </h2>
            <p className="text-lg text-background/70 mb-10">Protecting:</p>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {protectedAssets.map((asset, index) => (
                <div key={index} className="flex flex-col items-center text-center p-4 bg-background/10 rounded-xl">
                  <div className="w-12 h-12 rounded-xl bg-[#25D366]/20 flex items-center justify-center mb-3">
                    <asset.icon className="w-6 h-6 text-[#25D366]" />
                  </div>
                  <span className="text-sm font-medium text-background/90">{asset.label}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-10 pt-8 border-t border-background/20">
              <p className="text-xl sm:text-2xl font-bold text-[#25D366]">
                A 360° Maintenance Partner For Industry
              </p>
            </div>
          </div>
        </div>

        {/* Pain Points Removal */}
        <div className="max-w-5xl mx-auto mb-20 sm:mb-28">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4">
            Removing The Biggest Pain Points
          </h2>
          <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
            NanoQuinn APaaS™ is designed to remove the biggest pain points faced by management:
          </p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {managementPainPoints.map((pain, index) => (
              <div key={index} className="flex items-center gap-3 bg-red-500/10 border border-red-500/30 rounded-xl p-4">
                <pain.icon className="w-5 h-5 text-red-500 shrink-0" />
                <span className="text-sm font-medium">{pain.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Massive Savings Advantage */}
        <div className="max-w-5xl mx-auto mb-20 sm:mb-28">
          <div className="bg-muted rounded-3xl p-8 sm:p-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10">
              Massive Savings Advantage
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Traditional */}
              <div className="bg-background rounded-2xl p-6 border border-red-500/30">
                <h3 className="text-lg font-bold text-red-500 mb-4 flex items-center gap-2">
                  <XCircle className="w-5 h-5" />
                  Traditional Industries Operate With:
                </h3>
                <ul className="space-y-3">
                  {traditionalProblems.map((item, index) => (
                    <li key={index} className="flex items-center gap-3 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* APaaS */}
              <div className="bg-background rounded-2xl p-6 border border-[#25D366]/30">
                <h3 className="text-lg font-bold text-[#25D366] mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" />
                  NanoQuinn APaaS™ Introduces:
                </h3>
                <ul className="space-y-3">
                  {apaasAdvantages.map((item, index) => (
                    <li key={index} className="flex items-center gap-3 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="mt-10 bg-[#25D366] rounded-2xl p-6 text-center">
              <p className="text-lg sm:text-xl font-bold text-white">
                Result: Huge OPEX Savings + CAPEX Protection + Operational Peace Of Mind
              </p>
            </div>
          </div>
        </div>

        {/* Sustainability Section */}
        <div className="max-w-5xl mx-auto mb-20 sm:mb-28">
          <span className="block text-center px-6 py-2 rounded-full bg-[#25D366] text-white text-sm font-bold mb-8 uppercase tracking-widest w-fit mx-auto">
            Sustainability At The Core
          </span>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Traditional Environmental */}
            <div className="bg-foreground text-background rounded-2xl p-6">
              <h3 className="text-lg font-bold text-red-400 mb-4">Traditional Maintenance Creates:</h3>
              <ul className="space-y-3">
                {traditionalEnvironmental.map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-sm text-background/70">
                    <XCircle className="w-4 h-4 text-red-400 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Sustainable Alternative */}
            <div className="bg-[#25D366]/10 border border-[#25D366]/30 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-[#25D366] mb-4">NanoQuinn Introduces:</h3>
              <ul className="space-y-3">
                {sustainableAlternatives.map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-sm text-foreground">
                    <CheckCircle2 className="w-4 h-4 text-[#25D366] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Stopping Traditional Cost Structure */}
        <div className="max-w-4xl mx-auto mb-20 sm:mb-28">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">
            Stopping The Traditional Frequent Maintenance Cost Structure
          </h2>
          <p className="text-center text-muted-foreground mb-8">
            For decades industries accepted:
          </p>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-10">
            {traditionalAccepted.map((item, index) => (
              <div key={index} className="flex items-center gap-2 bg-muted rounded-xl p-4 text-sm">
                <XCircle className="w-4 h-4 text-red-500 shrink-0" />
                {item}
              </div>
            ))}
          </div>
          
          <p className="text-center text-muted-foreground mb-8 italic">
            Because no real long-term preservation platform existed.
          </p>
          
          <div className="bg-foreground text-background rounded-2xl p-8 text-center">
            <p className="text-lg text-background/70 mb-2">NanoQuinn APaaS™ introduces a shift from:</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mt-6">
              <div className="bg-red-500/20 rounded-xl px-6 py-4">
                <p className="text-red-400 font-semibold">{'"Frequent Temporary Maintenance"'}</p>
              </div>
              <ArrowRight className="w-6 h-6 text-[#25D366] rotate-90 sm:rotate-0" />
              <div className="bg-[#25D366]/20 rounded-xl px-6 py-4">
                <p className="text-[#25D366] font-semibold">{'"Long-Term Sustainable Asset Preservation"'}</p>
              </div>
            </div>
          </div>
        </div>

        {/* From Temporary to Long-Term */}
        <div className="max-w-5xl mx-auto mb-20 sm:mb-28">
          <div className="bg-muted rounded-3xl p-8 sm:p-12 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">
              From Temporary Maintenance To Long-Term Preservation
            </h2>
            
            <p className="text-muted-foreground mb-8">NanoQuinn APaaS™ focuses on:</p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              {focusAreas.map((area, index) => (
                <span key={index} className="px-6 py-3 bg-[#25D366] text-white rounded-full font-bold">
                  {area}
                </span>
              ))}
            </div>
            
            <p className="text-muted-foreground mb-8">Helping industries achieve:</p>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {achievements.map((item, index) => (
                <div key={index} className="flex items-center gap-3 bg-background rounded-xl p-4 shadow-sm">
                  <div className="w-10 h-10 rounded-lg bg-[#25D366]/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-[#25D366]" />
                  </div>
                  <span className="text-sm font-bold">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Final Statement */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-[#1A2332] to-[#0F1419] text-white rounded-3xl p-8 sm:p-12 lg:p-16 text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
              NanoQuinn APaaS™
            </h2>
            <p className="text-xl sm:text-2xl text-[#25D366] font-bold">
              The Future Of Sustainable Asset Protection & 360° Maintenance Management.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
