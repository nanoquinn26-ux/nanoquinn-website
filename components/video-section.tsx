"use client"

import { useRef, useState } from "react"
import { Play, Pause, Volume2, VolumeX } from "lucide-react"

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
    <section className="py-24 sm:py-32 lg:py-40 bg-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 mb-16 items-end">
          <div>
            <span className="text-6xl sm:text-7xl lg:text-8xl font-bold text-white/5 block mb-4">
              DEMO
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              See NanoQuinn Technology in Action
            </h2>
          </div>
          <div>
            <p className="text-lg text-white/60 leading-relaxed">
              Watch how our revolutionary nanotechnology transforms asset protection across industries — from manufacturing plants to marine vessels.
            </p>
          </div>
        </div>

        {/* Video Container */}
        <div className="relative rounded-2xl overflow-hidden bg-navy-light group">
          <video
            ref={videoRef}
            className="w-full aspect-video object-cover"
            playsInline
            preload="metadata"
            muted={isMuted}
            poster="/images/video-poster.jpg"
          >
            <source src="/videos/nanoquinn-intro.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Overlay */}
          <div className={`absolute inset-0 bg-navy/40 flex items-center justify-center transition-opacity duration-300 ${isPlaying ? "opacity-0 group-hover:opacity-100" : "opacity-100"}`}>
            <button
              onClick={togglePlay}
              className="w-20 h-20 rounded-full bg-lime flex items-center justify-center hover:bg-lime-light transition-colors"
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
      </div>
    </section>
  )
}
