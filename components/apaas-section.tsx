"use client"

import { Shield, Settings, TrendingDown, PiggyBank, Users, Leaf, ClipboardCheck, Sparkles } from "lucide-react"

const salientFeatures = [
  {
    icon: Sparkles,
    title: "Sustainable Nanotechnology Innovations",
    description: "Advanced sustainable nanotechnology solutions for long-lasting protection and preservation of mechanical, civil, electrical, solar, polymer, and multiple industrial assets & surfaces."
  },
  {
    icon: Settings,
    title: "End-to-End Responsibility Model",
    description: "From technology selection to certified Nano Applicator execution, NanoQuinn takes complete turnkey responsibility with uninterrupted service support and unconditional warranty assurance."
  },
  {
    icon: TrendingDown,
    title: "Zero Year-on-Year OPEX Burden",
    description: "For the first time, a platform that takes responsibility for long-term maintenance at a predefined cost structure, significantly reducing repetitive yearly maintenance expenditure."
  },
  {
    icon: PiggyBank,
    title: "Deferred CAPEX Through Asset Preservation",
    description: "By maintaining asset newness and preventing degradation, the platform helps industries defer premature replacement and major capital expenditure."
  },
  {
    icon: Users,
    title: "Single Vendor – Total Accountability",
    description: "One integrated partner for protection, preservation, application, inspection, and warranty management — reducing dependency on multiple maintenance vendors and large maintenance teams."
  },
  {
    icon: Leaf,
    title: "Sustainable & ESG-Focused Approach",
    description: "Low/zero VOC, environmentally responsible technologies and processes supporting ESG, EHS, and sustainability goals while reducing environmental damage from repetitive maintenance cycles."
  },
  {
    icon: ClipboardCheck,
    title: "Free Asset Health Audits Throughout Contract Period",
    description: "Post-delivery inspections and periodic asset health audits by subject experts ensure continuous monitoring, performance assurance, and long-term client peace of mind."
  }
]

export function ApaasSection() {
  return (
    <section id="apaas" className="py-20 sm:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Hero Header */}
        <div className="max-w-4xl mx-auto text-center mb-16 sm:mb-24">
          <div className="bg-[#2D2D2D] rounded-3xl p-10 sm:p-16 lg:p-20">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold italic tracking-tight mb-6 text-balance text-white">
              NanoQuinn{" "}
              <span className="bg-gradient-to-r from-[#5EEAD4] via-[#14B8A6] to-[#22C55E] bg-clip-text text-transparent not-italic">
                APaaS™
              </span>{" "}
              <span className="not-italic">Platform</span>
            </h1>
            <p className="text-xl sm:text-2xl leading-relaxed font-medium">
              <span className="text-white/80">Your</span>{" "}
              <span className="bg-gradient-to-r from-[#5EEAD4] via-[#14B8A6] to-[#22C55E] bg-clip-text text-transparent font-bold">
                360° Sustainable Maintenance & Asset Protection
              </span>{" "}
              <span className="text-white/80">Partner</span>
            </p>
          </div>
          
          {/* Video Section */}
          <div className="mt-10">
            <video 
              className="w-full max-w-3xl mx-auto rounded-2xl shadow-2xl border border-border"
              controls
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="/videos/apaas-intro.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* Asset Protection as a Service */}
        <div className="max-w-4xl mx-auto text-center mb-16 sm:mb-24">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-6">
            <span className="bg-gradient-to-r from-[#5EEAD4] via-[#14B8A6] to-[#22C55E] bg-clip-text text-transparent">Asset Protection</span> as a Service
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            A revolutionary and sustainable platform designed to protect, preserve, and maintain every asset and every surface through long-lasting global nanotechnology innovations combined with end-to-end execution responsibility.
          </p>
        </div>

        {/* Salient Features */}
        <div className="mb-16 sm:mb-24">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-12">
            Salient Features of the{" "}
            <span className="bg-gradient-to-r from-[#5EEAD4] via-[#14B8A6] to-[#22C55E] bg-clip-text text-transparent">APaaS Platform</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {salientFeatures.map((feature, index) => (
              <div 
                key={index} 
                className="bg-card border border-border rounded-2xl p-6 hover:border-[#14B8A6]/50 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#5EEAD4]/20 to-[#22C55E]/20 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-[#14B8A6]" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* APaaS Platform Vision */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-[#2D2D2D] to-[#4A4A4A] rounded-3xl p-8 sm:p-12 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6">
              <Shield className="w-4 h-4 text-[#14B8A6]" />
              <span className="text-sm font-medium text-white/80">APaaS Platform Vision</span>
            </div>
            <p className="text-lg sm:text-xl text-white/90 leading-relaxed">
              NanoQuinn APaaS Platform is not just a product or coating model — it is a{" "}
              <span className="bg-gradient-to-r from-[#5EEAD4] via-[#14B8A6] to-[#22C55E] bg-clip-text text-transparent font-bold">
                complete lifecycle responsibility platform
              </span>{" "}
              focused on preserving assets for years with sustainability, accountability, operational continuity, and massive long-term savings for management.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
