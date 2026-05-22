"use client"

import { useEffect, useRef, useState } from "react"
import { Shield, Leaf, Award, Play, Pause } from "lucide-react"
import Image from "next/image"

const highlights = [
  { icon: Leaf, label: "Zero VOC | Sustainable" },
  { icon: Shield, label: "Turnkey with Unconditional Warranty" },
  { icon: Award, label: "German Nanotechnology | Made in India" },
]

// EHS and sustainability images from Unsplash
const showcaseImages = [
  {
    src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
    alt: "Industrial manufacturing facility"
  },
  {
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
    alt: "Solar panels sustainable energy"
  },
  {
    src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=300&fit=crop",
    alt: "Construction worker with safety equipment"
  },
  {
    src: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=400&h=300&fit=crop",
    alt: "Industrial plant at sunset"
  },
  {
    src: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=400&h=300&fit=crop",
    alt: "Wind turbines renewable energy"
  },
  {
    src: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=400&h=300&fit=crop",
    alt: "Laboratory research scientist"
  },
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
          poster="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&h=1080&fit=crop"
        >
          <source src="/videos/nanoquinn-intro.mp4" type="video/mp4" />
        </video>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/80 to-navy" />
      </div>

      {/* Large Background Brand Text */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
        <h1 className="text-[12vw] font-bold text-white/[0.03] whitespace-nowrap tracking-tight select-none">
          NANOQUINN
        </h1>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-40 text-center">
        {/* Small Tagline */}
        <div className="animate-fade-up mb-6">
          <span className="inline-block text-xs sm:text-sm font-medium text-lime uppercase tracking-[0.2em]">
            WORLD&apos;S FIRST APAAS PLATFORM
          </span>
        </div>

        {/* Main Headline */}
        <div className="animate-fade-up delay-100 mb-8">
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-[1.1] text-balance">
            The End of Asset Degradation<br />
            <span className="text-lime">Has Begun.</span>
          </h2>
        </div>

        {/* Subtitle */}
        <div className="animate-fade-up delay-200 max-w-3xl mx-auto mb-12">
          <p className="text-lg sm:text-xl text-white/70 leading-relaxed">
            Combining Sustainable Nanotechnology, Lifecycle Preservation & Unconditional Warranty
          </p>
        </div>

        {/* Highlights */}
        <div className="animate-fade-up delay-300 flex flex-wrap justify-center gap-4 mb-12">
          {highlights.map((item) => (
            <div 
              key={item.label} 
              className="flex items-center gap-3 px-5 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm"
            >
              <div className="w-8 h-8 rounded-full bg-lime/20 flex items-center justify-center">
                <item.icon className="w-4 h-4 text-lime" />
              </div>
              <span className="text-sm font-medium text-white/90">{item.label}</span>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="animate-fade-up delay-400">
          <a
            href="https://wa.me/918608604817"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-lime text-navy font-semibold text-base hover:bg-lime-light transition-all hover:scale-105"
          >
            Request Industrial Demo
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>

      {/* Video Control */}
      <button
        onClick={toggleVideo}
        className="absolute bottom-28 right-6 sm:bottom-32 sm:right-10 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors"
        aria-label={isPlaying ? "Pause video" : "Play video"}
      >
        {isPlaying ? (
          <Pause className="w-5 h-5 text-white" />
        ) : (
          <Play className="w-5 h-5 text-white ml-0.5" />
        )}
      </button>

      {/* Scroll Indicator */}
      <div className="absolute bottom-28 left-1/2 -translate-x-1/2 z-10 animate-fade-in delay-500">
        <div className="flex flex-col items-center gap-3">
          <div className="w-6 h-10 rounded-full border border-white/30 flex items-start justify-center p-1.5">
            <div className="w-1.5 h-3 rounded-full bg-lime animate-bounce" />
          </div>
        </div>
      </div>

      {/* Image Carousel Banner */}
      <div className="absolute bottom-0 left-0 right-0 z-10 bg-navy/80 backdrop-blur-sm border-t border-white/10">
        <div className="relative overflow-hidden py-5">
          <div className="flex animate-marquee gap-6">
            {[...showcaseImages, ...showcaseImages].map((image, i) => (
              <div 
                key={i} 
                className="w-56 h-36 rounded-xl overflow-hidden shrink-0 border border-white/10"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={224}
                  height={144}
                  className="w-full h-full object-cover opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
