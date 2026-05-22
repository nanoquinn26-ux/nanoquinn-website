"use client"

import { useEffect, useRef, useState } from "react"
import { Shield, Leaf, Award, Play, Pause } from "lucide-react"
import Image from "next/image"

const highlights = [
  { icon: Leaf, label: "Zero VOC | Sustainable" },
  { icon: Shield, label: "Turnkey with Unconditional Warranty" },
  { icon: Award, label: "German Nanotechnology | Made in India" },
]

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(true)

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-navy">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="/images/hero-poster.jpg"
        >
          <source src="/videos/nanoquinn-intro.mp4" type="video/mp4" />
        </video>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy/40 via-navy/60 to-navy/90" />
      </div>

      {/* Large Background Brand Text */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
        <h1 className="text-[15vw] sm:text-[12vw] font-bold text-white/5 whitespace-nowrap tracking-tight select-none">
          NANOQUINN
        </h1>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 pb-20 text-center">
        {/* Small Tagline */}
        <div className="animate-fade-up mb-4 sm:mb-6">
          <span className="inline-block text-xs sm:text-sm font-medium text-lime uppercase tracking-[0.2em]">
            WORLD&apos;S FIRST APAAS PLATFORM
          </span>
        </div>

        {/* Main Headline */}
        <div className="animate-fade-up delay-100 mb-6 sm:mb-8">
          <h2 className="text-3xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight text-balance">
            The End of Asset Degradation<br />
            <span className="text-lime">Has Begun.</span>
          </h2>
        </div>

        {/* Subtitle */}
        <div className="animate-fade-up delay-200 max-w-3xl mx-auto mb-10 sm:mb-14">
          <p className="text-base sm:text-lg lg:text-xl text-white/70 leading-relaxed">
            Combining Sustainable Nanotechnology, Lifecycle Preservation & Unconditional Warranty
          </p>
        </div>

        {/* Highlights */}
        <div className="animate-fade-up delay-300 flex flex-wrap justify-center gap-4 sm:gap-6 mb-10 sm:mb-14">
          {highlights.map((item) => (
            <div 
              key={item.label} 
              className="flex items-center gap-3 px-4 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm"
            >
              <div className="w-7 h-7 rounded-full bg-lime/20 flex items-center justify-center">
                <item.icon className="w-3.5 h-3.5 text-lime" />
              </div>
              <span className="text-xs sm:text-sm font-medium text-white/90">{item.label}</span>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="animate-fade-up delay-400">
          <a
            href="https://wa.me/918608604817"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 sm:px-10 py-4 rounded-full bg-lime text-navy font-semibold text-sm sm:text-base hover:bg-lime-light transition-colors"
          >
            Request Industrial Demo
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>

      {/* Video Control */}
      <button
        onClick={toggleVideo}
        className="absolute bottom-6 right-6 sm:bottom-10 sm:right-10 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors"
        aria-label={isPlaying ? "Pause video" : "Play video"}
      >
        {isPlaying ? (
          <Pause className="w-5 h-5 text-white" />
        ) : (
          <Play className="w-5 h-5 text-white ml-0.5" />
        )}
      </button>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 animate-fade-in delay-500">
        <div className="flex flex-col items-center gap-3">
          <div className="w-6 h-10 rounded-full border border-white/30 flex items-start justify-center p-1.5">
            <div className="w-1.5 h-3 rounded-full bg-lime animate-bounce" />
          </div>
        </div>
      </div>

      {/* Image Carousel Banner */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <div className="relative overflow-hidden py-4 bg-gradient-to-r from-transparent via-white/5 to-transparent">
          <div className="flex animate-marquee gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="flex items-center gap-8">
                <div className="w-48 h-32 rounded-xl overflow-hidden bg-white/10 backdrop-blur-sm shrink-0">
                  <Image
                    src={`/images/showcase-${(i % 3) + 1}.jpg`}
                    alt="NanoQuinn Application"
                    width={192}
                    height={128}
                    className="w-full h-full object-cover opacity-80"
                  />
                </div>
              </div>
            ))}
            {[...Array(6)].map((_, i) => (
              <div key={`dup-${i}`} className="flex items-center gap-8">
                <div className="w-48 h-32 rounded-xl overflow-hidden bg-white/10 backdrop-blur-sm shrink-0">
                  <Image
                    src={`/images/showcase-${(i % 3) + 1}.jpg`}
                    alt="NanoQuinn Application"
                    width={192}
                    height={128}
                    className="w-full h-full object-cover opacity-80"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
