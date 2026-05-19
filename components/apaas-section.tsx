"use client"

import { Search, Settings, Zap, Shield, FileCheck, AlertTriangle, TrendingDown, DollarSign, Factory, Leaf, Users, CheckCircle2, Building2, Cpu, Sun, Layers, Droplets } from "lucide-react"

const steps = [
  { icon: Search, label: "Inspection", description: "Comprehensive analysis" },
  { icon: Settings, label: "Preparation", description: "Surface conditioning" },
  { icon: Zap, label: "Application", description: "Nano layer deployment" },
  { icon: Shield, label: "Protection", description: "Active safeguarding" },
  { icon: FileCheck, label: "Warranty", description: "Unconditional Warranty" },
]

const industryPains = [
  "Asset degradation & reduced lifecycle",
  "Rising maintenance OPEX",
  "Early replacement CAPEX",
  "Shutdown & productivity losses",
  "Environmental & ESG compliance pressure",
  "Unsafe chemical-heavy maintenance systems",
  "Vendor dependency without accountability",
  "Conditional warranties with no long-term responsibility",
]

const ecosystemFeatures = [
  "Sustainable nanotechnology innovations",
  "Zero / ultra-low VOC protection systems",
  "Long-lasting preservation technologies",
  "End-to-end execution responsibility",
  "Unconditional warranty models",
  "Annual asset health audits",
  "Lifecycle-focused protection strategies",
  "ESG & EHS aligned solutions",
  "Future-ready Biochar + Nanotechnology R&D integration",
]

const managementBenefits = [
  { icon: DollarSign, text: "Lower lifetime maintenance cost" },
  { icon: TrendingDown, text: "Significant OPEX reduction" },
  { icon: Factory, text: "Delayed CAPEX replacement cycles" },
  { icon: Settings, text: "Reduced shutdown dependency" },
  { icon: Leaf, text: "Cleaner and safer operations" },
  { icon: CheckCircle2, text: "Improved sustainability compliance" },
  { icon: Shield, text: "Long-term peace of mind through accountability" },
]

const assetCategories = [
  { icon: Building2, label: "Civil Assets" },
  { icon: Settings, label: "Mechanical Assets" },
  { icon: Cpu, label: "Electrical & Electronic Assets" },
  { icon: Sun, label: "Solar Infrastructure" },
  { icon: Layers, label: "Polymer & Composite Surfaces" },
  { icon: Droplets, label: "Industrial Flooring & Waterproofing" },
]

export function ApaasSection() {
  return (
    <section id="apaas" className="py-20 sm:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Hero Header */}
        <div className="max-w-4xl mx-auto text-center mb-16 sm:mb-24">
          <span className="inline-block px-10 py-4 rounded-full bg-[#D4A826] text-black text-base font-bold mb-8 shadow-md uppercase tracking-widest">
            A White Paper Introduction
          </span>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-balance">
            NanoQuinn APaaS™ Platform
          </h1>

          <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed font-medium">
            Redefining The Future Of Sustainable Asset Protection & Preservation
          </p>
        </div>

        {/* The Hidden Reality */}
        <div className="max-w-5xl mx-auto mb-20 sm:mb-28">
          <div className="bg-foreground text-background rounded-3xl p-8 sm:p-12 lg:p-16">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">The Hidden Reality</h2>
            <p className="text-lg leading-relaxed mb-8 text-center text-background/80">
              For decades, industries across the world have silently accepted a massive hidden reality — repetitive maintenance, repetitive shutdowns, repetitive corrosion, repetitive repairs, repetitive repainting, and continuous asset deterioration.
            </p>
            <p className="text-base leading-relaxed text-center text-background/70">
              Despite spending enormous yearly budgets on maintenance and restoration, industries still continue to suffer from:
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              {industryPains.map((pain, index) => (
                <div key={index} className="flex items-start gap-3 bg-background/10 rounded-xl p-4">
                  <AlertTriangle className="w-5 h-5 text-[#D4A826] shrink-0 mt-0.5" />
                  <span className="text-sm text-background/90">{pain}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 pt-8 border-t border-background/20">
              <p className="text-lg text-center italic text-background/80">
                Traditional contractors and coating systems were never designed to preserve assets for the long term.
                <span className="block mt-2 font-semibold text-[#D4A826]">They were built only to temporarily repair surfaces.</span>
              </p>
            </div>
          </div>
        </div>

        {/* The APaaS Revolution */}
        <div className="max-w-4xl mx-auto text-center mb-16 sm:mb-20">
          <span className="inline-block px-8 py-3 rounded-full bg-[#00BFA5] text-white text-sm font-bold mb-8 uppercase tracking-widest">
            The Industry Shift
          </span>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-8 text-balance">
            {"World's First Sustainable APaaS™ Platform"}
          </h2>

          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            NanoQuinn introduces the world&apos;s first Sustainable APaaS™ (Asset Protection as a Service) Platform — a revolutionary ecosystem designed not merely to coat assets, but to <span className="text-foreground font-semibold">protect, preserve, and extend the lifecycle</span> of every critical surface through advanced sustainable nanotechnology innovations, long-term responsibility models, and unconditional warranty-driven execution.
          </p>

          <p className="text-lg text-foreground leading-relaxed font-medium">
            Unlike conventional systems, NanoQuinn focuses on stopping the root cause of deterioration by minimizing moisture, oxygen, chemical, UV, dust, and ion ingress — the core factors responsible for corrosion, degradation, electrical failures, surface damage, and accelerated CAPEX loss.
          </p>
        </div>

        {/* Process Flow */}
        <div className="relative max-w-5xl mx-auto mb-20 sm:mb-28">
          <h3 className="text-xl sm:text-2xl font-bold text-center mb-12">The APaaS Process</h3>

          {/* Connection Line */}
          <div className="hidden lg:block absolute top-32 left-[10%] right-[10%] h-px bg-border" />

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-10">
            {steps.map((step, index) => (
              <div key={step.label} className="relative flex flex-col items-center text-center">
                <div className="relative w-24 h-24 sm:w-36 sm:h-36 rounded-3xl bg-[#1a1a1a] flex items-center justify-center shadow-xl">
                  <step.icon className="w-10 h-10 text-[#00BFA5]" />
                  <span className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-[#00BFA5] text-white text-sm font-bold flex items-center justify-center shadow-md">
                    {index + 1}
                  </span>
                </div>
                <h3 className="font-semibold text-base mt-4 text-foreground">{step.label}</h3>
                <p className="text-sm text-muted-foreground mt-1">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Comparison Image */}
        <div className="max-w-5xl mx-auto mb-20 sm:mb-28">
          <img
            src="/images/nano-comparison.png"
            alt="Traditional Paints vs NanoQuinn Nanotechnology Protection — side by side comparison showing how nano-scale barrier blocks ions, oxygen and moisture"
            className="w-full rounded-3xl shadow-xl"
          />
        </div>

        {/* Ecosystem Features */}
        <div className="max-w-5xl mx-auto mb-20 sm:mb-28">
          <h3 className="text-xl sm:text-2xl font-bold text-center mb-4">The NanoQuinn APaaS™ Ecosystem</h3>
          <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">A comprehensive platform combining technology, responsibility, and sustainability</p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {ecosystemFeatures.map((feature, index) => (
              <div key={index} className="flex items-center gap-3 bg-muted rounded-xl p-4 border border-border hover:border-[#00BFA5]/50 transition-colors">
                <CheckCircle2 className="w-5 h-5 text-[#00BFA5] shrink-0" />
                <span className="text-sm font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Management Benefits */}
        <div className="max-w-5xl mx-auto mb-20 sm:mb-28">
          <div className="bg-muted rounded-3xl p-8 sm:p-12">
            <h3 className="text-xl sm:text-2xl font-bold text-center mb-4">Results for Management</h3>
            <p className="text-center text-muted-foreground mb-10">A first-of-its-kind industrial platform that helps management achieve:</p>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {managementBenefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-4 bg-background rounded-2xl p-5 shadow-sm">
                  <div className="w-12 h-12 rounded-xl bg-[#D4A826]/10 flex items-center justify-center shrink-0">
                    <benefit.icon className="w-6 h-6 text-[#D4A826]" />
                  </div>
                  <span className="text-sm font-medium">{benefit.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* The Difference */}
        <div className="max-w-4xl mx-auto mb-20 sm:mb-28 text-center">
          <h3 className="text-xl sm:text-2xl font-bold mb-6">What Makes NanoQuinn Fundamentally Different</h3>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            What makes NanoQuinn fundamentally different is not only the technology — but the <span className="text-foreground font-semibold">responsibility model</span> behind it.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            While conventional vendors execute work and exit, NanoQuinn positions itself as a <span className="text-foreground font-semibold">long-term Asset Protection & Preservation Partner</span>, taking ownership of performance through continuous engagement, annual inspections, asset health reporting, and unconditional support.
          </p>
          <div className="bg-foreground text-background rounded-2xl p-6 sm:p-8">
            <p className="text-lg sm:text-xl font-medium">
              This transforms the industry from a <span className="text-[#D4A826]">short-term contractor-driven ecosystem</span> into a <span className="text-[#00BFA5]">long-term preservation partnership model</span>.
            </p>
          </div>
        </div>

        {/* Asset Categories */}
        <div className="max-w-5xl mx-auto mb-20 sm:mb-28">
          <h3 className="text-xl sm:text-2xl font-bold text-center mb-4">What NanoQuinn Protects</h3>
          <p className="text-center text-muted-foreground mb-10">Today, NanoQuinn protects and preserves:</p>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {assetCategories.map((asset, index) => (
              <div key={index} className="flex flex-col items-center text-center p-6 bg-muted rounded-2xl border border-border hover:border-[#D4A826]/50 transition-colors">
                <div className="w-14 h-14 rounded-xl bg-[#D4A826]/10 flex items-center justify-center mb-4">
                  <asset.icon className="w-7 h-7 text-[#D4A826]" />
                </div>
                <span className="text-xs sm:text-sm font-medium leading-tight">{asset.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Vision Statement */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] text-white rounded-3xl p-8 sm:p-12 lg:p-16 text-center">
            <p className="text-base sm:text-lg text-white/70 leading-relaxed mb-8">
              Backed by continuous R&D, advanced global technologies, future-focused Biochar innovation programs, and dedicated skilled manpower development through sister concern execution arms, NanoQuinn is not creating another coating company.
            </p>
            <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#D4A826] mb-8">
              NanoQuinn is building the future infrastructure of sustainable asset preservation.
            </p>
            <div className="border-t border-white/10 pt-8">
              <p className="text-lg sm:text-xl text-white/80 italic">
                A future where industries no longer repeatedly repair assets…
              </p>
              <p className="text-2xl sm:text-3xl font-bold text-[#00BFA5] mt-4">
                But finally preserve them.
              </p>
            </div>
          </div>
        </div>

        {/* Key Differentiator */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-foreground text-background rounded-3xl p-6 sm:p-10 lg:p-14 text-center">
            <p className="text-xl sm:text-2xl lg:text-4xl font-bold text-balance leading-tight">
              We don&apos;t sell coatings.<br />
              <span className="text-accent">We deliver performance with accountability.</span>
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
