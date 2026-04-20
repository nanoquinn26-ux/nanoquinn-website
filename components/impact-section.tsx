"use client"

import { useEffect, useState, useRef } from "react"

const metrics = [
  { value: 80, suffix: "%", label: "Reduction in Maintenance Costs" },
  { value: 0, suffix: "", label: "Chemical Dependency", prefix: "Zero" },
  { value: 0, suffix: "", label: "VOC Emissions", prefix: "Zero" },
  { value: 100, suffix: "%", label: "Asset Life Enhancement" },
]

function AnimatedNumber({ value, suffix, prefix }: { value: number; suffix: string; prefix?: string }) {
  const [current, setCurrent] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          if (prefix) {
            setCurrent(0)
            return
          }
          const duration = 2000
          const steps = 60
          const increment = value / steps
          let current = 0
          const timer = setInterval(() => {
            current += increment
            if (current >= value) {
              setCurrent(value)
              clearInterval(timer)
            } else {
              setCurrent(Math.floor(current))
            }
          }, duration / steps)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [value, prefix])

  if (prefix) {
    return (
      <div ref={ref} className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight">
        {prefix}
      </div>
    )
  }

  return (
    <div ref={ref} className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight">
      {current}{suffix}
    </div>
  )
}

export function ImpactSection() {
  return (
    <section className="py-32 lg:py-40 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <span className="inline-block px-8 py-3 rounded-full bg-[#D4A826] text-black text-sm font-bold mb-8 shadow-md uppercase tracking-widest">
            Measurable Impact
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-balance">
            Transforming Economics.<br />Transforming Sustainability.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 mb-20">
          {metrics.map((metric) => (
            <div key={metric.label} className="text-center p-8 lg:p-10 bg-muted rounded-3xl">
              <AnimatedNumber value={metric.value} suffix={metric.suffix} prefix={metric.prefix} />
              <p className="mt-4 text-base font-medium text-muted-foreground">{metric.label}</p>
            </div>
          ))}
        </div>

        {/* Additional Highlight */}
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-aqua/10 rounded-full mb-6">
            <span className="w-3 h-3 rounded-full bg-aqua animate-pulse" />
            <span className="font-semibold text-lg">&quot;As-New&quot; Surface Quality Retention</span>
          </div>
          <p className="text-2xl text-muted-foreground font-medium">
            From cost center to strategic advantage.
          </p>
        </div>
      </div>
    </section>
  )
}
