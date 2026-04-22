"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Leaf, Award } from "lucide-react"

const highlights = [
  { icon: Leaf, label: "Zero VOC | Sustainable" },
  { icon: Shield, label: "Turnkey with Unconditional Warranty" },
  { icon: Award, label: "German Nanotechnology | Made in India" },
]

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A0A0A]">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px),
                           linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }} />
      </div>

      {/* Accent Gradient Orbs - Gold & Aqua */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-[#D4A826]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-[#00BFA5]/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 pb-36 sm:pb-44">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full border border-white/20 bg-white/5 mb-8 sm:mb-10 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-[#D4A826] animate-pulse" />
            <span className="text-xs sm:text-sm font-medium text-[#00BFA5]">World&apos;s First APaaS Ecosystem</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold tracking-tight text-balance mb-6 sm:mb-8 animate-fade-up delay-100">
            <span className="bg-gradient-to-r from-[#D4A826] via-[#F0C850] to-[#D4A826] bg-clip-text text-transparent">The End of Asset</span><br />
            <span className="bg-gradient-to-r from-[#D4A826] via-[#F0C850] to-[#D4A826] bg-clip-text text-transparent">Degradation Has Begun.</span>
          </h1>

          {/* Sub-headline */}
          <p className="text-base sm:text-xl lg:text-2xl text-white/70 max-w-3xl mx-auto mb-10 sm:mb-12 text-pretty leading-relaxed animate-fade-up delay-200">
            <span className="underline text-[#fdfefe] decoration-[#D4A826] decoration-2 underline-offset-4">
              The World&apos;s first ESG & EHS-driven APaaS (Asset Protection as a Service) ecosystem
            </span>{" "}
            — eliminating chemicals, reducing maintenance costs by up to 80%, and preserving every asset in <span className="underline decoration-[#D4A826] decoration-[3px] underline-offset-4">&quot;as-new&quot;</span> condition.
          </p>

          {/* Key Highlights */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-8 mb-10 sm:mb-12 animate-fade-up delay-300">
            {highlights.map((item) => (
              <div key={item.label} className="flex items-center gap-3 text-sm text-white/80 justify-center sm:justify-start">
                <div className="w-8 h-8 rounded-full bg-[#00BFA5]/20 flex items-center justify-center shrink-0">
                  <item.icon className="w-4 h-4 text-[#00BFA5]" />
                </div>
                <span className="font-medium">{item.label}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="animate-fade-up delay-400">
            <a
              href="https://wa.me/918608604817"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="w-full sm:w-auto text-base px-10 py-6 h-auto rounded-full bg-[#D4A826] text-[#0A0A0A] hover:bg-[#F0C850]">
                Request Industrial Demo
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-fade-in delay-500">
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs text-white/50 uppercase tracking-wider">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-white/20 rounded-full flex items-start justify-center p-1">
              <div className="w-1.5 h-3 bg-[#D4A826] rounded-full animate-bounce" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
