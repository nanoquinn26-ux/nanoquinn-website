"use client"

import { useRef, useState } from "react"
import { Play, Pause, Volume2, VolumeX } from "lucide-react"
import Image from "next/image"

export function VideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  return (
    <section className="py-24 sm:py-32 lg:py-40 bg-navy relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 mb-16 items-end">
          <div className="relative">
            <span className="text-7xl sm:text-8xl lg:text-9xl font-bold text-white/[0.04] absolute -top-8 -left-4 select-none pointer-events-none">
              DEMO
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight relative z-10">
              See NanoQuinn Technology in Action
            </h2>
          </div>
          <div>
            <p className="text-lg text-white/60 leading-relaxed">
              Watch how our revolutionary nanotechnology transforms asset protection across industries — from manufacturing plants to marine vessels.
            </p>
          </div>
        </div>

        {/* Video Container with Side Images */}
        <div className="grid lg:grid-cols-4 gap-6">
          {/* Left Image Column */}
          <div className="hidden lg:flex flex-col gap-6">
            <div className="rounded-xl overflow-hidden flex-1">
              <Image
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=500&fit=crop"
                alt="Industrial manufacturing"
                width={400}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-xl overflow-hidden flex-1">
              <Image
                src="https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=400&h=500&fit=crop"
                alt="Industrial plant"
                width={400}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Main Video */}
          <div className="lg:col-span-2 relative rounded-2xl overflow-hidden bg-navy-light group">
            <video
              ref={videoRef}
              className="w-full aspect-video object-cover"
              playsInline
              preload="metadata"
              muted={isMuted}
              poster="https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&h=450&fit=crop"
            >
              <source src="/videos/nanoquinn-intro.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Overlay */}
            <div className={`absolute inset-0 bg-navy/40 flex items-center justify-center transition-opacity duration-300 ${isPlaying ? "opacity-0 group-hover:opacity-100" : "opacity-100"}`}>
              <button
                onClick={togglePlay}
                className="w-20 h-20 rounded-full bg-lime flex items-center justify-center hover:bg-lime-light hover:scale-105 transition-all shadow-lg"
                aria-label={isPlaying ? "Pause video" : "Play video"}
              >
                {isPlaying ? (
                  <Pause className="w-8 h-8 text-navy" />
                ) : (
                  <Play className="w-8 h-8 text-navy ml-1" />
                )}
              </button>
            </div>

            {/* Controls */}
            <div className="absolute bottom-4 right-4 flex items-center gap-2">
              <button
                onClick={toggleMute}
                className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label={isMuted ? "Unmute" : "Mute"}
              >
                {isMuted ? (
                  <VolumeX className="w-5 h-5 text-white" />
                ) : (
                  <Volume2 className="w-5 h-5 text-white" />
                )}
              </button>
            </div>
          </div>

          {/* Right Image Column */}
          <div className="hidden lg:flex flex-col gap-6">
            <div className="rounded-xl overflow-hidden flex-1">
              <Image
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=400&h=500&fit=crop"
                alt="Lab research"
                width={400}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-xl overflow-hidden flex-1">
              <Image
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=500&fit=crop"
                alt="Solar panels"
                width={400}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Mobile Images */}
        <div className="grid grid-cols-2 gap-4 mt-6 lg:hidden">
          <div className="rounded-xl overflow-hidden aspect-[4/3]">
            <Image
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop"
              alt="Industrial manufacturing"
              width={400}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rounded-xl overflow-hidden aspect-[4/3]">
            <Image
              src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=400&h=300&fit=crop"
              alt="Lab research"
              width={400}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
