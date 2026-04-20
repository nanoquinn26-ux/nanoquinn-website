"use client"

import { Search, Settings, Zap, Shield, FileCheck } from "lucide-react"

const steps = [
  { icon: Search, label: "Inspection", description: "Comprehensive analysis" },
  { icon: Settings, label: "Preparation", description: "Surface conditioning" },
  { icon: Zap, label: "Application", description: "Nano layer deployment" },
  { icon: Shield, label: "Protection", description: "Active safeguarding" },
  { icon: FileCheck, label: "Warranty", description: "Unconditional Warranty" },
]

export function ApaasSection() {
  return (
    <section id="apaas" className="py-32 lg:py-40 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <span className="inline-block px-8 py-3 rounded-full bg-[#D4A826] text-black text-sm font-bold mb-8 shadow-md uppercase tracking-widest">
            Category Creation
          </span>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-balance">
            {"World's 1st APaaS Platform for Surface and Asset Protection"}
          </h2>

          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            NanoQuinn defines APaaS (Asset Protection as a Service) through a disruptive <span className="text-foreground font-semibold">Supply + Apply + Unconditional Warranty</span> model, where customers do not buy coatings or maintenance products — they secure long-term protection, preservation, and performance of assets.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Through advanced sustainable nanotechnology, NanoQuinn protects metal, plastic, FRP, concrete, electrical and critical infrastructure assets against corrosion, degradation, UV, wear and tear — keeping assets newer for longer with reduced or eliminated maintenance.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 text-left mb-8">
            <div className="bg-foreground text-background rounded-2xl p-6">
              <p className="text-base leading-relaxed">
                With <span className="font-semibold">{"NanoQuinn's Unconditional Warranty"}</span>, protection is not merely promised — it is backed as a service.
              </p>
            </div>
            <div className="bg-foreground text-background rounded-2xl p-6">
              <p className="text-base leading-relaxed">
                NanoQuinn APaaS shifts industry from <span className="font-semibold">selling products</span> to delivering <span className="font-semibold">guaranteed protected assets</span>.
              </p>
            </div>
          </div>
        </div>

        {/* Process Flow */}
        <div className="relative max-w-5xl mx-auto mb-20">

          {/* Connection Line */}
          <div className="hidden lg:block absolute top-20 left-[10%] right-[10%] h-px bg-border" />

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-10">
            {steps.map((step, index) => (
              <div key={step.label} className="relative flex flex-col items-center text-center">

                {/* Card */}
                <div className="relative w-36 h-36 rounded-3xl bg-[#1a1a1a] flex items-center justify-center shadow-xl">

                  {/* Icon */}
                  <step.icon className="w-10 h-10 text-[#00BFA5]" />

                  {/* Step Number Badge */}
                  <span className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-[#00BFA5] text-white text-sm font-bold flex items-center justify-center shadow-md">
                    {index + 1}
                  </span>
                </div>

                {/* Label */}
                <h3 className="font-semibold text-base mt-4 text-foreground">
                  {step.label}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground mt-1">
                  {step.description}
                </p>

              </div>
            ))}
          </div>
        </div>

        {/* Key Differentiator (UNCHANGED as requested) */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-foreground text-background rounded-3xl p-10 lg:p-14 text-center">
            <p className="text-2xl lg:text-4xl font-bold text-balance leading-tight">
              We don&apos;t sell coatings.<br />
              <span className="text-accent">We deliver performance with accountability.</span>
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
