import { Factory, Zap, Fuel, Pill, Building2, Boxes, Train, Shield, Building, Landmark, Construction, FlaskConical, Infinity } from "lucide-react"

const b2bIndustries = [
  { icon: Factory, label: "Manufacturing" },
  { icon: Zap, label: "Power" },
  { icon: Fuel, label: "Oil & Gas" },
  { icon: Pill, label: "Pharma" },
  { icon: Building2, label: "Cement" },
  { icon: FlaskConical, label: "Chemicals" },
  { icon: Boxes, label: "Metals" },
  { icon: Infinity, label: "Endless" },
]

const b2gIndustries = [
  { icon: Train, label: "Railways" },
  { icon: Shield, label: "Defense" },
  { icon: Building, label: "Smart Cities" },
  { icon: Landmark, label: "PSUs" },
  { icon: Construction, label: "Public Infrastructure" },
  { icon: Infinity, label: "Endless" },
]

export function IndustriesSection() {
  return (
    <section id="industries" className="py-32 lg:py-40 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <span className="inline-block px-10 py-4 rounded-full bg-[#D4A826] text-black text-base font-bold mb-8 shadow-md uppercase tracking-widest">
            Industry Solutions
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-balance">
            Built for Every Critical Surface.
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {/* B2B */}
          <div className="bg-muted rounded-3xl p-10">
            <div className="flex items-center gap-4 mb-8">
              <div className="px-4 py-2 bg-foreground text-background text-sm font-bold rounded-full">
                B2B
              </div>
              <h3 className="text-2xl font-bold">Industrial Partners</h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {b2bIndustries.map((industry) => (
                <div key={industry.label} className="flex flex-col items-center gap-4 p-5 bg-background rounded-2xl border border-border hover:border-accent/50 transition-colors group">
                  <industry.icon className="w-8 h-8 text-muted-foreground group-hover:text-accent transition-colors" />
                  <span className="text-sm font-semibold text-center">{industry.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* B2G */}
          <div className="bg-muted rounded-3xl p-10">
            <div className="flex items-center gap-4 mb-8">
              <div className="px-4 py-2 bg-accent text-accent-foreground text-sm font-bold rounded-full">
                B2G
              </div>
              <h3 className="text-2xl font-bold">Government & Infrastructure</h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {b2gIndustries.map((industry) => (
                <div key={industry.label} className="flex flex-col items-center gap-4 p-5 bg-background rounded-2xl border border-border hover:border-accent/50 transition-colors group">
                  <industry.icon className="w-8 h-8 text-muted-foreground group-hover:text-accent transition-colors" />
                  <span className="text-sm font-semibold text-center">{industry.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tagline */}
        <div className="text-center">
          <p className="text-2xl lg:text-3xl font-bold text-foreground">
            If it has a surface, <span className="text-accent">NanoQuinn can protect it.</span>
          </p>
        </div>
      </div>
    </section>
  )
}
