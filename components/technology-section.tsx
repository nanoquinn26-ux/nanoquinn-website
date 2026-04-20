import { Award, Check, Globe } from "lucide-react"

const features = [
  "Advanced German-engineered nanotechnology",
  "Manufactured in India for global deployment",
  "Fully certified, tested, performance-backed",
]

export function TechnologySection() {
  return (
    <section id="technology" className="py-32 lg:py-40 bg-foreground text-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Visual */}
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Outer Ring */}
              <div className="absolute inset-0 border border-background/10 rounded-full animate-[spin_30s_linear_infinite]">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-accent" />
              </div>
              
              {/* Middle Ring */}
              <div className="absolute inset-12 border border-background/20 rounded-full animate-[spin_20s_linear_infinite_reverse]">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-background/40" />
              </div>
              
              {/* Inner Ring */}
              <div className="absolute inset-24 border border-background/30 rounded-full">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-accent/60" />
              </div>
              
              {/* Center */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-40 h-40 rounded-full bg-background/10 backdrop-blur-sm flex items-center justify-center">
                  <Globe className="w-20 h-20 text-accent" />
                </div>
              </div>

              {/* Floating Badges */}
              <div className="absolute top-8 right-8 px-4 py-2.5 bg-background/10 backdrop-blur-sm rounded-xl border border-background/20">
                <span className="text-sm font-semibold">German Tech</span>
              </div>
              <div className="absolute bottom-8 left-8 px-4 py-2.5 bg-background/10 backdrop-blur-sm rounded-xl border border-background/20">
                <span className="text-sm font-semibold">Made in India</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <span className="inline-block px-10 py-4 rounded-full bg-[#D4A826] text-black text-base font-bold mb-8 shadow-md uppercase tracking-widest">
              Technology Excellence
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-8 text-balance">
              German Precision.<br />Indian Scale.<br />Global Impact.
            </h2>
            
            <div className="space-y-5 mb-10">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-5">
                  <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center shrink-0">
                    <Check className="w-5 h-5 text-accent-foreground" />
                  </div>
                  <span className="text-xl text-background/80">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-5 p-6 bg-background/10 backdrop-blur-sm rounded-2xl">
              <Award className="w-12 h-12 text-accent shrink-0" />
              <div>
                <p className="font-bold text-xl">Uncompetitive. Unmatched. Unstoppable.</p>
                <p className="text-sm text-background/60">Industry-leading performance standards</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
