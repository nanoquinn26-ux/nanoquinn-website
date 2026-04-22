import { Leaf, Shield, Zap, Globe, BarChart3, Lightbulb } from "lucide-react"

const pillars = [
  {
    icon: Lightbulb,
    title: '"Only Me" Thinking',
    desc: "NanoQuinn never competes in traditional markets. Every innovation is built to create an entirely new category — disruptive, not derivative.",
  },
  {
    icon: Shield,
    title: "Asset Protection Vertical",
    desc: "Pioneering a global vertical focused on extending the life, performance, and aesthetics of every surface and every asset across industries.",
  },
  {
    icon: Leaf,
    title: "Sustainable Technology",
    desc: "Plant-based, biodegradable cleaners and nano-protection coatings engineered to replace century-old hazardous methods like blasting and harsh chemicals.",
  },
  {
    icon: BarChart3,
    title: "ESG & EHS Leadership",
    desc: "Enabling industries to move towards safer operations, lower environmental impact, and significantly reduced OPEX and CAPEX.",
  },
  {
    icon: Zap,
    title: "APaaS Model",
    desc: "Asset Protection as a Service — not just products, but long-term performance guarantees, asset longevity, and maintenance-free ecosystems.",
  },
  {
    icon: Globe,
    title: "Global Scalability",
    desc: "Building a scalable global platform combining innovation, application excellence, and digital intelligence to protect every surface in every country.",
  },
]

export function AboutSection() {
  return (
    <section className="bg-background">

      {/* Hero */}
      <div className="bg-foreground text-background py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <span className="inline-block px-10 py-4 rounded-full bg-[#D4A826] text-black text-base font-bold mb-8 shadow-md uppercase tracking-widest">
            About NanoQuinn
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-balance leading-tight mb-8">
            Creating the Future of<br />
            <span style={{ color: "#00BFA5" }}>Asset Protection</span>
          </h1>
          <p className="text-lg sm:text-xl text-background/70 max-w-3xl mx-auto leading-relaxed">
            A next-generation innovation company redefining how the world protects, preserves, and maintains assets.
          </p>
        </div>
      </div>

      {/* Mission statement */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-foreground mb-6 leading-tight">
              Built on a Foundation of<br />
              <span className="italic" style={{ color: "#00BFA5" }}>&ldquo;Only Me&rdquo; Thinking</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              NanoQuinn is not here to compete in traditional markets — it is here to create entirely new categories through disruptive, sustainable technologies.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              From metals and infrastructure to electricals, plastics, floors, walls, and solar systems, our solutions are designed to eliminate degradation, reduce maintenance, and transform lifecycle economics.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Through our forward-looking APaaS model, we are not just delivering products — we are delivering long-term performance guarantees, asset longevity, and maintenance-free ecosystems.
            </p>
          </div>

          {/* Quote card */}
          <div className="bg-foreground rounded-3xl p-10 lg:p-12">
            <blockquote className="text-background/90 text-xl sm:text-2xl font-bold leading-relaxed italic mb-8">
              &ldquo;This is not an incremental improvement. This is a shift from maintenance to preservation.&rdquo;
            </blockquote>
            <div className="border-t border-background/20 pt-6">
              <p className="text-[#D4A826] font-bold text-sm uppercase tracking-widest">NanoQuinn Vision</p>
              <p className="text-background/50 text-sm mt-1">Creating the Future of Asset Protection</p>
            </div>
          </div>
        </div>
      </div>

      {/* Pillars */}
      <div className="bg-muted py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-10 py-4 rounded-full bg-[#D4A826] text-black text-base font-bold mb-8 shadow-md uppercase tracking-widest">
              What We Stand For
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-foreground text-balance">
              Six Pillars of the NanoQuinn Platform
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="bg-background border border-border rounded-2xl p-8 hover:border-[#D4A826]/60 hover:shadow-md transition-all duration-200"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ backgroundColor: "#00BFA520" }}>
                  <pillar.icon className="w-6 h-6" style={{ color: "#00BFA5" }} />
                </div>
                <h3 className="font-bold text-lg text-foreground mb-3">{pillar.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bold closing statement */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28 text-center">
        <p className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground text-balance leading-tight max-w-4xl mx-auto">
          Driven by a bold vision to protect{" "}
          <span style={{ color: "#00BFA5" }}>every surface</span>,{" "}
          <span style={{ color: "#D4A826" }}>every asset</span>,{" "}
          in every country.
        </p>
      </div>

    </section>
  )
}
