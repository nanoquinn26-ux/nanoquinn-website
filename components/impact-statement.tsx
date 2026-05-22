import { Check } from "lucide-react"

const impacts = [
  "Eliminating Chemicals",
  "Reducing Costs by 80%",
  "Preserving Assets Like New",
  "Enabling Sustainable Infrastructure",
]

export function ImpactStatement() {
  return (
    <section className="py-24 sm:py-32 lg:py-40 bg-sage">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Large Text */}
          <div>
            <h2 className="text-5xl sm:text-6xl lg:text-8xl font-bold tracking-tight text-navy/10 mb-6 select-none">
              ERA SHIFT
            </h2>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-navy leading-tight mb-6">
              This Is Not Innovation.
            </h3>
            <p className="text-xl sm:text-2xl text-navy/60 font-medium">
              It&apos;s a complete transformation of how industries protect their most valuable assets.
            </p>
          </div>

          {/* Right - Content */}
          <div>
            <div className="space-y-4 mb-10">
              {impacts.map((impact) => (
                <div key={impact} className="flex items-center gap-4 py-4 border-b border-navy/10 last:border-0">
                  <div className="w-8 h-8 rounded-full bg-lime flex items-center justify-center shrink-0">
                    <Check className="w-4 h-4 text-navy" />
                  </div>
                  <span className="text-lg font-semibold text-navy">{impact}</span>
                </div>
              ))}
            </div>

            <p className="text-lg text-navy/60 leading-relaxed">
              The future will not maintain assets. It will{" "}
              <span className="text-navy font-bold">protect them</span> — with sustainable nanotechnology that preserves value for decades.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
