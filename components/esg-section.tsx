"use client"

import { Leaf, Droplets, FileCheck, HardHat, Globe, Wind, ShieldCheck, Zap, TrendingDown, Award } from "lucide-react"

const esgPillars = [
  {
    letter: "E",
    label: "Environmental",
    color: "bg-[#D4A826]",
    textColor: "text-black",
    points: [
      "Zero VOC — eliminates solvent-based chemical coatings",
      "Plant-based biodegradable cleaning ecosystem",
      "Drastic reduction in repainting cycles & chemical waste",
      "Supports Scope 1, 2 & 3 emission reduction targets",
    ],
  },
  {
    letter: "S",
    label: "Social",
    color: "bg-[#0A0A0A]",
    textColor: "text-white",
    points: [
      "Eliminates hazardous chemical exposure for workers",
      "EHS-compliant application process",
      "Safer job sites — no acid pickling, no sand blasting",
      "Supports community health near industrial zones",
    ],
  },
  {
    letter: "G",
    label: "Governance",
    color: "bg-white border border-[#0A0A0A]",
    textColor: "text-black",
    points: [
      "Supports global ESG reporting frameworks",
      "ISO 45001:2018 & ISO 9001:2015 certified | D-U-N-S\u00ae Registered",
      "Unconditional Warranty = accountability in performance",
      "Transparent supply chain with certified inputs",
    ],
  },
]

const ehsFeatures = [
  { icon: Wind, label: "Zero VOC", sub: "No toxic emissions during application" },
  { icon: Leaf, label: "Biodegradable", sub: "Plant-based cleaning ecosystem" },
  { icon: ShieldCheck, label: "EHS Compliant", sub: "Safe for workers & environment" },
  { icon: Droplets, label: "No Acid / Blasting", sub: "Eliminates hazardous surface prep" },
  { icon: TrendingDown, label: "80% Less Maintenance", sub: "Fewer chemical cycles over lifetime" },
  { icon: FileCheck, label: "ESG Reportable", sub: "Aligned with global frameworks" },
  { icon: HardHat, label: "Workplace Safety", sub: "ISO 45001:2018 & ISO 9001:2015" },
  { icon: Globe, label: "D-U-N-S\u00ae Registered", sub: "DR122420252059851909" },
]

const certifications = [
  "ISO 45001:2018 — Occupational Health & Safety Management",
  "ISO 9001:2015 — Quality Management System",
  "D-U-N-S\u00ae Registered | D-U-N-S Number: DR122420252059851909",
]

export function EsgSection() {
  return (
    <section id="esg" className="py-32 lg:py-40 bg-[#0A0A0A] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-block px-8 py-3 rounded-full bg-[#D4A826] text-black text-lg font-medium mb-8 shadow-md">
            ESG &amp; EHS Leadership
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-balance mb-6">
            Built for the Future<br />of Compliance.
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">
            NanoQuinn is the only asset protection platform where sustainability is not a feature — it is the foundation. Every application eliminates chemicals, protects people, and supports governance.
          </p>
        </div>

        {/* ESG Pillars */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {esgPillars.map((pillar) => (
            <div key={pillar.letter} className="relative rounded-3xl overflow-hidden">
              {/* Letter Badge */}
              <div className={`${pillar.color} ${pillar.textColor} px-8 pt-8 pb-6`}>
                <span className="text-7xl font-black leading-none opacity-20 absolute top-4 right-6">{pillar.letter}</span>
                <span className="text-5xl font-black leading-none">{pillar.letter}</span>
                <p className="text-xl font-bold mt-1">{pillar.label}</p>
              </div>
              {/* Points */}
              <div className="bg-white/5 border border-white/10 px-8 py-6 space-y-3 h-full">
                {pillar.points.map((point, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-white/70">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4A826] shrink-0 mt-1.5" />
                    {point}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* EHS Features Grid */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center mb-10 text-[#D4A826]">EHS Compliance Built-In</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {ehsFeatures.map((item) => (
              <div key={item.label} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-[#D4A826]/40 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-[#D4A826]/10 flex items-center justify-center mb-4 group-hover:bg-[#D4A826]/20 transition-colors">
                  <item.icon className="w-6 h-6 text-[#D4A826]" />
                </div>
                <p className="font-semibold text-white mb-1">{item.label}</p>
                <p className="text-xs text-white/50">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Row: Certifications + Statement */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Certifications */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-10">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-[#D4A826] flex items-center justify-center">
                <Award className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-xl font-bold">Certifications &amp; Compliance</h3>
            </div>
            <ul className="space-y-4">
              {certifications.map((cert, i) => (
                <li key={i} className="flex items-center gap-4 p-4 bg-white/5 rounded-xl">
                  <span className="w-7 h-7 rounded-full bg-[#D4A826] text-black text-xs font-bold flex items-center justify-center shrink-0">{i + 1}</span>
                  <span className="text-sm text-white/80 font-medium">{cert}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Statement */}
          <div className="bg-[#D4A826] rounded-3xl p-10 flex flex-col justify-between">
            <div>
              <Zap className="w-10 h-10 text-black mb-6" />
              <h3 className="text-3xl sm:text-4xl font-black text-black leading-snug mb-6">
                Not just protecting assets &mdash; protecting the planet.
              </h3>
              <p className="text-black/70 text-lg leading-relaxed">
                Every NanoQuinn application eliminates a chemical product, prevents a maintenance cycle, and contributes to a cleaner, safer industrial world.
              </p>
            </div>
            <div className="mt-10 pt-8 border-t border-black/20">
              <p className="text-black font-bold text-sm uppercase tracking-wider">
                The future of industry is clean. NanoQuinn makes it possible.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
