import { Check } from "lucide-react"

const impacts = [
  "Eliminating Chemicals",
  "Reducing Costs by 80%",
  "Preserving Assets Like New",
  "Enabling Sustainable Infrastructure",
]

export function ImpactStatement() {
  return (
    <section className="py-32 lg:py-40 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight mb-12 text-balance">
            This Is Not Innovation.<br />
            <span className="text-accent">It&apos;s an Era Shift.</span>
          </h2>

          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {impacts.map((impact) => (
              <div key={impact} className="flex items-center gap-3 px-6 py-3 bg-muted rounded-full">
                <Check className="w-5 h-5 text-accent" />
                <span className="font-semibold">{impact}</span>
              </div>
            ))}
          </div>

          <p className="text-2xl lg:text-3xl text-muted-foreground font-medium leading-relaxed">
            The future will not maintain assets.<br />
            It will <span className="text-foreground font-bold">protect them.</span>
          </p>
        </div>
      </div>
    </section>
  )
}
