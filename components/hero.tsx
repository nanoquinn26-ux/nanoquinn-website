"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Leaf, Award } from "lucide-react"

const highlights = [
  { icon: Leaf, label: "Zero VOC | Sustainable" },
  { icon: Shield, label: "Turnkey with Unconditional Warranty" },
  { icon: Award, label: "German Nanotechnology | Made in India" },
]

const morphTexts = [
  "Welcome to the APaaS Revolution",
  "Long-lasting sustainable protection",
  "Zero recurring OPEX stress",
  "Asset newness for years",
  "Deferred replacement CAPEX",
  "One vendor. One responsibility.",
  "Unconditional warranty",
  "Zero environmental harm",
  "NanoQuinn APaaS Platform",
]

function TextMorphAnimation() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    if (isComplete) return

    const cycleText = () => {
      // Fade out
      setIsVisible(false)
      
      setTimeout(() => {
        // Move to next text
        setCurrentIndex((prev) => {
          const next = prev + 1
          if (next >= morphTexts.length) {
            setIsComplete(true)
            return prev
          }
          return next
        })
        // Fade in
        setIsVisible(true)
      }, 500)
    }

    const interval = setInterval(cycleText, 2000)
    return () => clearInterval(interval)
  }, [isComplete])

  const currentText = morphTexts[currentIndex]
  const isFinal = currentIndex === morphTexts.length - 1

  return (
    <div className="max-w-4xl mx-auto">
      <div className="relative p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-sm overflow-hidden">
        {/* Animated background glow */}
        <div 
          className="absolute inset-0 bg-gradient-to-r from-[#00BFA5]/0 via-[#00BFA5]/5 to-[#00BFA5]/0 transition-opacity duration-1000"
          style={{ opacity: isVisible ? 1 : 0 }}
        />
        
        {/* Progress bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-white/10">
          <div 
            className="h-full bg-gradient-to-r from-[#00BFA5] to-[#D4A826] transition-all duration-300"
            style={{ width: `${((currentIndex + 1) / morphTexts.length) * 100}%` }}
          />
        </div>

        <div className="relative min-h-[200px] flex flex-col items-center justify-center text-center">
          {/* Intro text */}
          <p className="text-white/50 text-sm uppercase tracking-widest mb-6">
            {isFinal ? "Introducing" : "NanoQuinn APaaS Platform delivers"}
          </p>

          {/* Morphing text */}
          <div className="relative h-24 flex items-center justify-center">
            <h3 
              className={`text-2xl sm:text-3xl lg:text-4xl font-bold transition-all duration-500 ease-out ${
                isVisible 
                  ? 'opacity-100 translate-y-0 scale-100' 
                  : 'opacity-0 translate-y-4 scale-95'
              } ${isFinal ? 'text-[#D4A826]' : 'text-white'}`}
            >
              {currentText}
            </h3>
          </div>

          {/* Counter */}
          <div className="mt-8 flex items-center gap-2">
            {morphTexts.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-[#00BFA5] scale-125' 
                    : index < currentIndex 
                    ? 'bg-[#D4A826]' 
                    : 'bg-white/20'
                }`}
              />
            ))}
          </div>

          {/* Final CTA appears after complete */}
          {isComplete && (
            <div className="mt-8 animate-fade-up">
              <p className="text-white/60 text-sm mb-4">
                Every promise. Every protection. One revolutionary platform.
              </p>
              <button
                onClick={() => {
                  setCurrentIndex(0)
                  setIsComplete(false)
                  setIsVisible(true)
                }}
                className="text-xs text-[#00BFA5] hover:text-[#00BFA5]/80 transition-colors underline underline-offset-2"
              >
                Watch again
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

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

          {/* APaaS Revolution Section - Text Morph Animation */}
          <TextMorphAnimation />
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
