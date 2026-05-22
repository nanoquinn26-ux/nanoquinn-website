import { Check } from "lucide-react"
import Image from "next/image"

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
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left - Image and Title */}
          <div className="relative">
            <span className="text-7xl sm:text-8xl lg:text-9xl font-bold tracking-tight text-navy/[0.06] absolute -top-8 -left-4 select-none pointer-events-none">
              ERA
            </span>
            <div className="relative z-10">
              <div className="rounded-2xl overflow-hidden mb-8 shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800&h=600&fit=crop"
                  alt="Sustainable wind energy turbines"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </div>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-navy leading-tight">
                This Is Not Innovation.
              </h3>
              <p className="text-xl text-navy/60 font-medium mt-4">
                It&apos;s a complete transformation of how industries protect their most valuable assets.
              </p>
            </div>
          </div>

          {/* Right - Content */}
          <div className="lg:pl-8">
            <div className="space-y-5 mb-10">
              {impacts.map((impact) => (
                <div key={impact} className="flex items-center gap-5 py-5 border-b border-navy/10 last:border-0">
                  <div className="w-10 h-10 rounded-full bg-lime flex items-center justify-center shrink-0 shadow-sm">
                    <Check className="w-5 h-5 text-navy" strokeWidth={2.5} />
                  </div>
                  <span className="text-lg sm:text-xl font-semibold text-navy">{impact}</span>
                </div>
              ))}
            </div>

            <div className="bg-white/60 rounded-xl p-6 border border-navy/5">
              <p className="text-lg text-navy/70 leading-relaxed">
                The future will not maintain assets. It will{" "}
                <span className="text-navy font-bold">protect them</span> — with sustainable nanotechnology that preserves value for decades.
              </p>
            </div>

            {/* Small EHS Image Grid */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="rounded-xl overflow-hidden aspect-[4/3]">
                <Image
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=300&fit=crop"
                  alt="Construction safety equipment"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden aspect-[4/3]">
                <Image
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop"
                  alt="Solar panels sustainable energy"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
