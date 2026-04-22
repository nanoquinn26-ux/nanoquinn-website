import { RefreshCcw, Droplets, Wrench, TrendingDown, DollarSign, AlertTriangle } from "lucide-react"

const problems = [
  { icon: RefreshCcw, label: "Corrosion" },
  { icon: Droplets, label: "Repainting" },
  { icon: Wrench, label: "Chemical Dependency" },
  { icon: TrendingDown, label: "Frequent Maintenance" },
  { icon: DollarSign, label: "Shutdown Losses" },
  { icon: AlertTriangle, label: "Scaffolding Costs" },
]

const results = [
  "Massive CAPEX & OPEX erosion",
  "Severe environmental damage",
  "Continuous asset life deterioration",
]

export function ProblemSection() {
  return (
    <section className="py-20 sm:py-32 lg:py-40 bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-20">
          <span className="inline-block px-10 py-4 rounded-full bg-[#D4A826] text-black text-base font-bold mb-8 shadow-md uppercase tracking-widest">
            The Problem
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 sm:mb-8 text-balance">
            A ₹20 Lakh Crore Problem.<br />
            <span className="text-background/50">Ignored for Decades.</span>
          </h2>
          <p className="text-base sm:text-xl text-background/60 leading-relaxed">
            ₹300 Lakh Crore Globally — Driven by Traditional Paint Systems
          </p>
        </div>



        {/* Problem Cycle */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto mb-20">
          {problems.map((item) => (
            <div key={item.label} className="group">
              <div className="bg-background/5 border border-background/10 rounded-2xl p-6 text-center hover:bg-background/10 transition-colors h-full">
                <item.icon className="w-8 h-8 mx-auto mb-4 text-accent" />
                <span className="text-sm font-medium">{item.label}</span>
              </div>
            </div>
          ))}
        </div>
        {/* Problem Intro */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-lg text-background/70">
            Every industry and government faces the same destructive cycle (metal assets)
          </p>
        </div>
        {/* Result */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-background/5 border border-background/10 rounded-3xl p-6 sm:p-10 lg:p-12">
            <h3 className="text-lg font-semibold mb-6 text-accent">Result:</h3>
            <ul className="space-y-4 text-background/80 mb-8">
              {results.map((result) => (
                <li key={result} className="flex items-start gap-4 text-lg">
                  <span className="w-2 h-2 rounded-full bg-accent mt-2.5 shrink-0" />
                  {result}
                </li>
              ))}
            </ul>
            <div className="pt-8 border-t border-background/10">
              <p className="text-xl sm:text-2xl lg:text-3xl font-semibold text-balance">
                The world accepted this as normal. <span className="text-accent">We didn&apos;t.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
