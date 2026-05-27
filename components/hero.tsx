"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Leaf, CheckCircle, XCircle } from "lucide-react"

export function Hero() {
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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 sm:pt-40 pb-20">
        
        {/* Hero Content */}
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 mb-8 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-[#1FA855] animate-pulse" />
            <span className="text-xs sm:text-sm font-medium text-white uppercase tracking-wider">Asset Protection as a Service</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-balance mb-8 animate-fade-up delay-100">
            <span className="text-white">Assets Are Maintained.</span><br />
            <span className="bg-gradient-to-r from-[#5EEAD4] via-[#14B8A6] to-[#22C55E] bg-clip-text text-transparent">But Not Protected.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-white/70 leading-relaxed max-w-3xl mx-auto mb-12 animate-fade-up delay-200">
            NanoQuinn APaaS Platform combines sustainable nanotechnology, AI monitoring, and complete lifecycle responsibility to protect, preserve, and extend the life of your industrial assets.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-up delay-300">
            <a href="/contact">
              <Button size="lg" className="w-full sm:w-auto text-base px-8 py-6 h-auto rounded-full bg-[#1FA855] hover:bg-[#34C66E] text-white">
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </a>
            <a href="/apaas">
              <Button size="lg" variant="outline" className="w-full sm:w-auto text-base px-8 py-6 h-auto rounded-full border-white/30 text-white hover:bg-white/10">
                Learn More
              </Button>
            </a>
          </div>

          {/* Visual Element - Shield with Leaf */}
          <div className="flex justify-center mb-16 animate-fade-up delay-400">
            <div className="relative">
              <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-3xl bg-gradient-to-br from-[#0A3D62] to-[#1A5276] flex items-center justify-center shadow-2xl border border-white/20">
                <div className="text-center">
                  <Shield className="w-14 h-14 sm:w-16 sm:h-16 text-[#1FA855] mx-auto" />
                  <Leaf className="w-6 h-6 sm:w-8 sm:h-8 text-[#22C55E] mx-auto -mt-2" />
                </div>
              </div>
              <div className="absolute inset-0 rounded-3xl border-2 border-[#1FA855]/40 animate-ping" style={{ animationDuration: '2s' }} />
            </div>
          </div>

          {/* Key Difference - Compact */}
          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto animate-fade-up delay-500">
            <div className="p-6 rounded-2xl bg-sky-500/10 border border-sky-500/30">
              <div className="flex items-center gap-3 mb-2">
                <XCircle className="w-5 h-5 text-sky-400" />
                <h3 className="font-semibold text-sky-400">Traditional</h3>
              </div>
              <p className="text-sm text-white/60">Repair after damage</p>
            </div>
            <div className="p-6 rounded-2xl bg-[#1FA855]/10 border border-[#1FA855]/30">
              <div className="flex items-center gap-3 mb-2">
                <CheckCircle className="w-5 h-5 text-[#1FA855]" />
                <h3 className="font-semibold text-[#1FA855]">NanoQuinn</h3>
              </div>
              <p className="text-sm text-white/60">Prevent before it starts</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
