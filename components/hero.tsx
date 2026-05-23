"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Leaf, Award, Check } from "lucide-react"

const highlights = [
  { icon: Leaf, label: "Zero VOC | Sustainable" },
  { icon: Shield, label: "Turnkey with Unconditional Warranty" },
  { icon: Award, label: "German Nanotechnology | Made in India" },
]

const apaasFeatures = [
  "Long-lasting sustainable protection",
  "Zero recurring OPEX stress",
  "Asset newness for years",
  "Deferred replacement CAPEX",
  "One vendor. One responsibility.",
  "Unconditional warranty with end-to-end execution",
  "Global technologies with zero environmental harm",
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
            <span className="text-xs sm:text-sm font-medium text-[#00BFA5]">WORLD&apos;s FIRST APAAS PLATFORM</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold tracking-tight text-balance mb-6 sm:mb-8 animate-fade-up delay-100">
            <span className="bg-gradient-to-r from-[#D4A826] via-[#F0C850] to-[#D4A826] bg-clip-text text-transparent">The End of Asset</span><br />
            <span className="bg-gradient-to-r from-[#D4A826] via-[#F0C850] to-[#D4A826] bg-clip-text text-transparent">Degradation Has Begun.</span>
          </h1>

          {/* Sub-headline */}
          <div className="max-w-3xl mx-auto mb-10 sm:mb-12 text-center animate-fade-up delay-200">
            <p className="inline-block text-base sm:text-lg text-white font-semibold mb-4 uppercase tracking-wider px-6 py-2 rounded-full bg-[#D4A826]/20 border border-[#D4A826]/40">Never Before In Industrial History</p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-5 leading-tight">
              An End-to-End Asset Protection Platform
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-white/70 leading-relaxed">
              Combining Sustainable Nanotechnology,<br className="hidden sm:block" />
              Lifecycle Preservation & Unconditional Warranty
            </p>
          </div>

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
          <div className="animate-fade-up delay-400 mb-16 sm:mb-20">
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

          {/* APaaS Revolution Section */}
          <div className="max-w-4xl mx-auto animate-fade-up delay-500">
            <div className="relative p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-sm overflow-hidden">
              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#00BFA5]/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
              
              <div className="relative">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                  Welcome to the <span className="text-[#00BFA5] animate-pulse">APaaS Revolution</span>
                </h3>
                <p className="text-white/60 mb-8 text-sm sm:text-base">
                  For the first time, industries can move beyond repetitive maintenance, shutdowns, and asset deterioration.
                </p>
                
                <p className="text-[#D4A826] font-semibold text-sm uppercase tracking-wider mb-5">
                  NanoQuinn APaaS Platform delivers:
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {apaasFeatures.map((feature, index) => (
                    <div 
                      key={feature}
                      className="flex items-start gap-3 group opacity-0 animate-[fadeSlideIn_0.6s_ease-out_forwards]"
                      style={{ animationDelay: `${0.8 + 0.15 * index}s` }}
                    >
                      <div className="w-5 h-5 rounded-full bg-[#00BFA5]/20 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#00BFA5]/40 group-hover:scale-110 transition-all duration-300">
                        <Check className="w-3 h-3 text-[#00BFA5]" />
                      </div>
                      <span className="text-white/80 text-sm sm:text-base font-medium group-hover:text-white transition-colors">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
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
