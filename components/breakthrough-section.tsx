import Image from "next/image"
import { ShieldCheck, Sparkles, Timer, Wrench } from "lucide-react"

const benefits = [
  { icon: ShieldCheck, label: "No corrosion" },
  { icon: Sparkles, label: "No wear & tear" },
  { icon: Timer, label: "No degradation" },
  { icon: Wrench, label: "No repeated maintenance" },
]

export function BreakthroughSection() {
  return (
    <section className="py-32 lg:py-40 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col gap-16 lg:gap-20 items-center">

          {/* Tagline */}
          <div className="text-center w-full">
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tight text-foreground text-balance leading-tight">
              Time to say goodbye to galvanizing,<br className="hidden sm:block" /> powder coating, etc.
            </h2>
          </div>

          {/* Content */}
          <div className="text-center max-w-4xl w-full">
            <span className="inline-block px-10 py-4 rounded-full bg-[#D4A826] text-black text-base font-bold mb-8 shadow-md uppercase tracking-widest">
              The Breakthrough
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-8 text-balance">
              One Layer. Total Transformation.
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-10">
              A revolutionary 8–10 micron nanotechnology layer fundamentally changes surface behavior:
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
              {benefits.map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col items-center gap-3 p-5 bg-[#1E1E1E] rounded-2xl text-white"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#00BFA5]/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-6 h-6 text-[#00BFA5]" />
                  </div>
                  <span className="font-semibold text-sm text-center text-white">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            <p className="text-2xl font-bold text-foreground mb-4">
              Assets don&apos;t age. They stay new.
            </p>
            <p className="text-lg text-muted-foreground italic">
              We don&apos;t delay damage. We eliminate its cause.
            </p>
          </div>

          {/* Visual - NanoQuinn Revolution Infographic */}
          <div className="relative w-full max-w-6xl">
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-border">
              <Image
                src="/images/nanoquinn-revolution.png"
                alt="The BIG Revolution - NanoQuinn vs Traditional Paint comparison showing how nanotechnology protection blocks moisture and oxygen ingress"
                width={1600}
                height={1000}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
