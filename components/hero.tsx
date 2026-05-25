"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { 
  ArrowRight, Shield, Leaf, Award, Search, Paintbrush, Settings, 
  Eye, BadgeCheck, Handshake, Building2, Factory, Container, 
  PipetteIcon, Zap, Ship, Wind
} from "lucide-react"

const highlights = [
  { icon: Leaf, label: "Zero VOC | Sustainable" },
  { icon: Shield, label: "Turnkey with Unconditional Warranty" },
  { icon: Award, label: "German Nanotechnology | Made in India" },
]

// Orbiting service cycle items
const orbitItems = [
  { icon: Handshake, label: "One Partner", color: "#1FA855" },
  { icon: Search, label: "Inspect", color: "#3B82F6" },
  { icon: Paintbrush, label: "Protect", color: "#10B981" },
  { icon: Settings, label: "Maintain", color: "#6366F1" },
  { icon: Eye, label: "Monitor", color: "#8B5CF6" },
  { icon: BadgeCheck, label: "Warranty", color: "#1FA855" },
  { icon: Leaf, label: "Sustainable", color: "#22C55E" },
]

// Asset categories
const assetCategories = [
  { icon: Building2, label: "Civil" },
  { icon: Settings, label: "Mechanical" },
  { icon: Zap, label: "Electrical" },
  { icon: PipetteIcon, label: "Polymers" },
  { icon: Shield, label: "Metallic" },
  { icon: Container, label: "Concrete" },
  { icon: Paintbrush, label: "Coatings" },
]

// Protected areas
const protectedAreas = [
  { icon: Building2, label: "Buildings" },
  { icon: Factory, label: "Plants" },
  { icon: Container, label: "Tanks" },
  { icon: PipetteIcon, label: "Piping" },
  { icon: Zap, label: "Power" },
  { icon: Ship, label: "Marine" },
  { icon: Wind, label: "Renewable" },
]

function APaaSPlatformAnimation() {
  const [activeOrbitIndex, setActiveOrbitIndex] = useState(0)
  const [visibleCategories, setVisibleCategories] = useState(0)
  const [showTagline, setShowTagline] = useState(false)

  // Rotate through orbit items
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveOrbitIndex((prev) => (prev + 1) % orbitItems.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  // Animate categories appearing
  useEffect(() => {
    if (visibleCategories < assetCategories.length) {
      const timeout = setTimeout(() => {
        setVisibleCategories((prev) => prev + 1)
      }, 200)
      return () => clearTimeout(timeout)
    } else {
      const timeout = setTimeout(() => setShowTagline(true), 500)
      return () => clearTimeout(timeout)
    }
  }, [visibleCategories])

  return (
    <div className="max-w-5xl mx-auto">
      <div className="relative rounded-3xl bg-gradient-to-br from-white/[0.06] to-white/[0.02] border border-white/10 backdrop-blur-md overflow-hidden">
        
        {/* Animated border glow */}
        <div className="absolute inset-0 rounded-3xl overflow-hidden">
          <div 
            className="absolute -inset-[200%] animate-[spin_12s_linear_infinite]"
            style={{
              background: `conic-gradient(from 0deg, transparent 0%, #1FA855 5%, transparent 10%, #1FA855 15%, transparent 20%, #1FA855 25%, transparent 30%)`
            }}
          />
          <div className="absolute inset-[1px] rounded-3xl bg-gradient-to-br from-[#1E3A5F] to-[#2D4A6F]" />
        </div>

        <div className="relative p-6 sm:p-10">
          {/* Header */}
          <div className="text-center mb-8">
            <p className="text-[#1FA855] text-xs sm:text-sm uppercase tracking-[0.25em] font-semibold mb-2">
              One Trusted Partner For
            </p>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
              <span className="text-white">Complete</span>{" "}
              <span className="bg-gradient-to-r from-[#5EEAD4] via-[#14B8A6] to-[#22C55E] bg-clip-text text-transparent">Asset Maintenance</span>
            </h3>
          </div>

          {/* Main Content - Orbit + Shield */}
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            
            {/* Left Side - Benefits List */}
            <div className="w-full lg:w-1/3 space-y-3">
              {[
                "Single vendor for all services",
                "Long Lasting Protection",
                "Sustainable Solutions",
                "Free Asset Health Audits",
                "Unconditional Warranty",
                "End to End Partner"
              ].map((benefit, index) => (
                <div 
                  key={benefit}
                  className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 transition-all duration-300 hover:bg-white/10 hover:border-[#1FA855]/30"
                  style={{ 
                    opacity: index <= activeOrbitIndex ? 1 : 0.4,
                    transform: index === activeOrbitIndex % 6 ? 'translateX(4px)' : 'translateX(0)',
                    transition: 'all 0.5s ease-out'
                  }}
                >
                  <div className="w-8 h-8 rounded-full bg-[#1FA855]/20 flex items-center justify-center shrink-0">
                    <Leaf className="w-4 h-4 text-[#1FA855]" />
                  </div>
                  <span className="text-sm text-white/80 font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Center - Animated Orbit */}
            <div className="w-full lg:w-1/3 flex justify-center">
              <div className="relative w-64 h-64 sm:w-80 sm:h-80">
                {/* Orbit ring */}
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-white/10 animate-[spin_30s_linear_infinite]" />
                <div className="absolute inset-4 rounded-full border border-white/5" />
                
                {/* Orbiting items */}
                {orbitItems.map((item, index) => {
                  const angle = (index / orbitItems.length) * 360
                  const isActive = index === activeOrbitIndex
                  return (
                    <div
                      key={item.label}
                      className="absolute transition-all duration-700"
                      style={{
                        left: '50%',
                        top: '50%',
                        transform: `rotate(${angle + activeOrbitIndex * (360 / orbitItems.length)}deg) translateX(120px) rotate(-${angle + activeOrbitIndex * (360 / orbitItems.length)}deg)`,
                      }}
                    >
                      <div 
                        className={`w-12 h-12 sm:w-14 sm:h-14 -ml-6 -mt-6 sm:-ml-7 sm:-mt-7 rounded-full flex items-center justify-center transition-all duration-500 ${
                          isActive ? 'scale-125 shadow-lg' : 'scale-100'
                        }`}
                        style={{ 
                          backgroundColor: isActive ? item.color : 'rgba(255,255,255,0.1)',
                          boxShadow: isActive ? `0 0 30px ${item.color}50` : 'none'
                        }}
                      >
                        <item.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${isActive ? 'text-white' : 'text-white/60'}`} />
                      </div>
                      {isActive && (
                        <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 whitespace-nowrap">
                          <span className="text-xs font-semibold text-white bg-black/50 px-2 py-1 rounded-full">
                            {item.label}
                          </span>
                        </div>
                      )}
                    </div>
                  )
                })}

                {/* Center Shield */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl bg-gradient-to-br from-[#0A3D62] to-[#1A5276] flex items-center justify-center shadow-2xl border border-white/20">
                      <div className="text-center">
                        <Shield className="w-10 h-10 sm:w-14 sm:h-14 text-[#1FA855] mx-auto mb-1" />
                        <Leaf className="w-6 h-6 sm:w-8 sm:h-8 text-[#22C55E] mx-auto -mt-2" />
                      </div>
                    </div>
                    {/* Pulse ring */}
                    <div className="absolute inset-0 rounded-2xl border-2 border-[#1FA855]/50 animate-ping" style={{ animationDuration: '2s' }} />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Protected Areas */}
            <div className="w-full lg:w-1/3">
            <p className="text-xs text-white/50 uppercase tracking-wider mb-4 text-center lg:text-left">
              <span className="bg-gradient-to-r from-[#5EEAD4] via-[#14B8A6] to-[#22C55E] bg-clip-text text-transparent font-semibold">Potential Areas</span> We Protect
            </p>
              <div className="grid grid-cols-4 lg:grid-cols-2 gap-2">
                {protectedAreas.map((area, index) => (
                  <div 
                    key={area.label}
                    className="flex flex-col items-center p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#1FA855]/30 transition-all duration-300 group"
                    style={{
                      animationDelay: `${index * 100}ms`
                    }}
                  >
                    <area.icon className="w-5 h-5 text-[#1FA855] mb-1 group-hover:scale-110 transition-transform" />
                    <span className="text-[10px] sm:text-xs text-white/70 text-center">{area.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Asset Categories Bar */}
          <div className="mt-8 pt-6 border-t border-white/10">
            <p className="text-xs text-white/50 uppercase tracking-wider mb-4 text-center">
              Works on <span className="bg-gradient-to-r from-[#5EEAD4] via-[#14B8A6] to-[#22C55E] bg-clip-text text-transparent font-semibold">All Surfaces</span> & Assets
            </p>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
              {assetCategories.map((category, index) => (
                <div
                  key={category.label}
                  className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full border transition-all duration-500 ${
                    index < visibleCategories 
                      ? 'bg-gradient-to-r from-[#1FA855]/20 to-[#1FA855]/10 border-[#1FA855]/30 opacity-100 translate-y-0' 
                      : 'bg-white/5 border-white/10 opacity-0 translate-y-4'
                  }`}
                >
                  <category.icon className="w-4 h-4 text-[#1FA855]" />
                  <span className="text-xs sm:text-sm font-medium text-white/80">{category.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Tagline */}
          <div 
            className={`mt-6 text-center transition-all duration-700 ${
              showTagline ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <div className="inline-flex items-center gap-3 sm:gap-6 px-6 py-3 rounded-full bg-gradient-to-r from-[#1FA855]/20 to-[#1FA855]/20 border border-white/10">
              <span className="text-sm sm:text-base font-bold bg-gradient-to-r from-[#5EEAD4] via-[#14B8A6] to-[#22C55E] bg-clip-text text-transparent">PROTECT</span>
              <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
              <span className="text-sm sm:text-base font-bold text-white">PRESERVE</span>
              <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
              <span className="text-sm sm:text-base font-bold bg-gradient-to-r from-[#5EEAD4] via-[#14B8A6] to-[#22C55E] bg-clip-text text-transparent">PERFORM</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#1E3A5F] via-[#2D4A6F] to-[#1E3A5F] bg-grid-dark">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px),
                           linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }} />
      </div>

      {/* Accent Gradient Orbs - Gold & Aqua */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-[#1FA855]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-[#1FA855]/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 pb-36 sm:pb-44">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full border border-white/20 bg-white/5 mb-8 sm:mb-10 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-[#1FA855] animate-pulse" />
            <span className="text-xs sm:text-sm font-medium bg-gradient-to-r from-[#5EEAD4] via-[#14B8A6] to-[#22C55E] bg-clip-text text-transparent">WORLD&apos;s FIRST APAAS PLATFORM</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold tracking-tight text-balance mb-6 sm:mb-8 animate-fade-up delay-100">
            <span className="text-white">The End of</span>{" "}
            <span className="bg-gradient-to-r from-[#5EEAD4] via-[#14B8A6] to-[#22C55E] bg-clip-text text-transparent">Asset Degradation</span><br />
            <span className="text-white">Has Begun.</span>
          </h1>

          {/* Sub-headline */}
          <div className="max-w-3xl mx-auto mb-10 sm:mb-12 text-center animate-fade-up delay-200">
            <p className="inline-block text-base sm:text-lg text-white font-semibold mb-4 uppercase tracking-wider px-6 py-2 rounded-full bg-[#1FA855]/20 border border-[#1FA855]/40">
              <span className="bg-gradient-to-r from-[#5EEAD4] via-[#14B8A6] to-[#22C55E] bg-clip-text text-transparent">Never Before</span>{" "}
              <span className="text-white">In Industrial History</span>
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-5 leading-tight">
              An{" "}
              <span className="bg-gradient-to-r from-[#5EEAD4] via-[#14B8A6] to-[#22C55E] bg-clip-text text-transparent">End-to-End Asset Protection</span>{" "}
              Platform
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-white/70 leading-relaxed">
              Combining{" "}
              <span className="bg-gradient-to-r from-[#5EEAD4] via-[#14B8A6] to-[#22C55E] bg-clip-text text-transparent font-semibold">Sustainable Nanotechnology</span>,<br className="hidden sm:block" />
              Lifecycle Preservation & Unconditional Warranty
            </p>
          </div>

          {/* Key Highlights */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-8 mb-10 sm:mb-12 animate-fade-up delay-300">
            {highlights.map((item) => (
              <div key={item.label} className="flex items-center gap-3 text-sm text-white/80 justify-center sm:justify-start">
                <div className="w-8 h-8 rounded-full bg-[#1FA855]/20 flex items-center justify-center shrink-0">
                  <item.icon className="w-4 h-4 text-[#1FA855]" />
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
              <Button size="lg" className="w-full sm:w-auto text-base px-10 py-6 h-auto rounded-full bg-[#1FA855] text-[#1E3A5F] hover:bg-[#34C66E]">
                Request Industrial Demo
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </a>
          </div>

          {/* APaaS Platform Visual Animation */}
          <APaaSPlatformAnimation />
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-fade-in delay-500">
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
