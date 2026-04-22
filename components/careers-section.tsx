import { ArrowRight, Lightbulb, Users, Globe, Leaf, Zap, Target } from "lucide-react"

const whyItems = [
  "Redefining how the world protects its assets",
  "Eliminating degradation and reducing environmental impact",
  "Breakthrough nano-coatings and plant-based biodegradable solutions",
  "Challenging century-old methods with a new global standard",
]

const whoWeWant = [
  { icon: Lightbulb, text: "People who think differently" },
  { icon: ArrowRight, text: "Builders, not followers" },
  { icon: Zap, text: "Problem-solvers who challenge conventional systems" },
  { icon: Target, text: "Individuals who take ownership and execute with clarity" },
  { icon: Users, text: "Those driven by impact, not just roles" },
]

const whatYoullBuild = [
  { icon: Globe, text: "A global Asset Protection category" },
  { icon: Leaf, text: "Sustainable, ESG-driven innovations" },
  { icon: Zap, text: "Solutions that impact industries, infrastructure, and the environment" },
  { icon: ArrowRight, text: "A business designed for global leadership, not local competition" },
]

const culturePoints = [
  "Straightforward. Focused. Execution-driven.",
  "High ownership, low hierarchy",
  "Ideas are valued. Results matter.",
  "Humility with ambition",
]

export function CareersSection() {
  return (
    <section className="bg-background">
      {/* Hero */}
      <div className="bg-foreground text-background py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-10 py-4 rounded-full bg-[#D4A826] text-black text-base font-bold mb-8 shadow-md uppercase tracking-widest">
            Careers
          </span>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-tight text-balance mb-6">
            Build the Future of<br />Asset Protection
          </h1>
          <p className="text-background/60 text-lg leading-relaxed max-w-2xl mx-auto">
            At NanoQuinn, we are not hiring for jobs.<br />
            We are building a team of <span className="text-[#D4A826] font-semibold">category creators</span>.
          </p>
          <p className="mt-4 text-background/50 text-base italic">
            If you believe in creating &ldquo;Only Me&rdquo; — not &ldquo;Me Too&rdquo;, you&apos;ll fit right in.
          </p>
        </div>
      </div>

      {/* Why NanoQuinn */}
      <div className="py-20 px-6 border-b border-border">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-black mb-4 text-foreground">Why NanoQuinn?</h2>
          <p className="text-muted-foreground text-base leading-relaxed mb-8 max-w-3xl">
            We are on a mission to redefine how the world protects its assets —
            eliminating degradation, reducing environmental impact, and transforming entire industries through sustainable innovation.
          </p>
          <ul className="grid sm:grid-cols-2 gap-4">
            {whyItems.map((item) => (
              <li key={item} className="flex items-start gap-3 bg-muted rounded-xl p-4">
                <span className="mt-1 w-2 h-2 rounded-full bg-[#D4A826] shrink-0" />
                <p className="text-sm text-foreground leading-relaxed">{item}</p>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-foreground font-bold text-lg">
            This is not incremental change.<br />
            <span className="text-[#00BFA5]">This is industrial transformation.</span>
          </p>
        </div>
      </div>

      {/* Who We're Looking For */}
      <div className="py-20 px-6 border-b border-border bg-muted">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-black mb-4 text-foreground">Who We&apos;re Looking For</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
            {whoWeWant.map(({ icon: Icon, text }) => (
              <div key={text} className="bg-background border border-border rounded-2xl p-5 flex items-start gap-4 hover:border-[#D4A826]/60 transition-colors">
                <div className="w-9 h-9 rounded-full bg-[#D4A826]/10 flex items-center justify-center shrink-0">
                  <Icon className="w-4 h-4 text-[#D4A826]" />
                </div>
                <p className="text-sm text-foreground leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm text-muted-foreground leading-relaxed">
            Whether in sales, application, R&D, operations, or digital platforms, we look for one thing above all:{" "}
            <span className="text-foreground font-semibold">the mindset to create, not copy.</span>
          </p>
        </div>
      </div>

      {/* What You'll Be Part Of */}
      <div className="py-20 px-6 border-b border-border">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-black mb-8 text-foreground">What You&apos;ll Be Part Of</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {whatYoullBuild.map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-start gap-4 p-5 rounded-2xl border border-border hover:border-[#00BFA5]/50 transition-colors">
                <div className="w-9 h-9 rounded-full bg-[#00BFA5]/10 flex items-center justify-center shrink-0">
                  <Icon className="w-4 h-4 text-[#00BFA5]" />
                </div>
                <p className="text-sm text-foreground leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Culture */}
      <div className="py-20 px-6 border-b border-border bg-muted">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-black mb-8 text-foreground">Culture at NanoQuinn</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {culturePoints.map((point) => (
              <div key={point} className="flex items-center gap-3 bg-background rounded-xl px-5 py-4 border border-border">
                <span className="w-2 h-2 rounded-full bg-[#D4A826] shrink-0" />
                <p className="text-sm font-medium text-foreground">{point}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-background border border-border rounded-2xl p-8">
            <h3 className="text-xl font-black text-foreground mb-3">Grow With Us</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              At NanoQuinn, growth is not limited to roles —
              it&apos;s defined by your ability to create impact. If you want to be part of a journey that aims to protect
              every surface, every asset, across the globe, your place is here.
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-24 px-6 bg-foreground text-background text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-background/50 text-sm uppercase tracking-widest mb-4">Join Us</p>
          <h2 className="text-4xl sm:text-5xl font-black mb-4 text-balance">
            Careers That<br /><span className="text-[#D4A826]">Create Categories</span>
          </h2>
          <p className="text-background/60 text-base mb-2 leading-relaxed">
            Be part of a company that is not entering an industry —<br />but building one.
          </p>
          <a
            href="mailto:hr@nanoquinn.com"
            className="inline-flex items-center gap-2 mt-8 px-8 py-4 rounded-full bg-[#D4A826] text-black font-bold text-base hover:opacity-90 transition-opacity"
          >
            hr@nanoquinn.com
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
