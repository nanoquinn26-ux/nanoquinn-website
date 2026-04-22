import { Leaf, Shield, Zap, Globe, BarChart3, Lightbulb } from "lucide-react"

const leaders = [
  {
    name: "Rajiv Sanghvi",
    role: "Founder",
    tags: ["Category Creator", "Building a Global Asset Protection Revolution"],
    bio: [
      "For 30 years, he has believed in creating Only Me, never Me Too.",
      "While others pursued competition, he pursued category creation. While others improved existing products, he focused on disrupting industries.",
      "Sustainable innovations, disruptive technologies, and building globally uncompetitive, unmatched solutions have been his lifelong driving force.",
      "His vision is bold: to create a new global Asset Protection vertical — protecting every surface, every asset, across every country — while redefining preservation, durability, maintenance, and sustainability.",
    ],
    statements: [
      "Not building another company. Building a new industrial category.",
      "Not competing in markets. Creating markets.",
    ],
    closing: "Driven by one burning desire — to leave behind a global legacy of transformative innovations that challenge century-old methods and replace them with a more sustainable future.",
  },
  {
    name: "Jeevika Sanghvi",
    role: "Co-Founder",
    tags: ["Sales & Business Development", "Growth Strategist"],
    bio: [
      "A silent force with a sharp commercial instinct, Jeevika Sanghvi brings focus, discipline, and execution-driven energy to sales and business development.",
      "Known for vision clarity, humility, and a straightforward approach, she combines relationship-building with strong conviction — persuasive when it matters, grounded in trust always.",
      "Her strength lies in identifying opportunities, building strategic partnerships, and converting ideas into business growth through focused execution.",
      "Calm in approach, firm in negotiations, and relentless in follow-through, she represents a rare blend of humility and hard convincing — a quiet go-getter who lets outcomes speak louder than words.",
    ],
    statements: [],
    closing: "Driven by purpose and growth, she contributes to building scalable, sustainable business opportunities with long-term value creation at the core.",
    skills: "Sales Growth | Business Development | Strategic Partnerships | Execution Focused Leadership",
  },
  {
    name: "Rajesh Dholakia",
    role: "Director – NPD & Application",
    tags: ["Innovation", "Quality and Category Leadership"],
    bio: [
      "Mr. Rajesh Dholakia brings senior leadership, deep domain expertise, and a strong conviction-led approach to New Product Development (NPD) and the Application vertical.",
      "With a sharp focus on innovation, multi-fold quality enhancement, and application excellence, he plays a pivotal role in creating differentiated solutions that strengthen category leadership and deliver a competitive edge.",
      "Known for his persuasive character, mature judgment, and solution-oriented approach, he combines technical depth with strategic thinking — helping transform ideas into scalable, high-performance offerings.",
      "His contribution extends beyond product and process; he is instrumental in reinforcing a culture of quality, credibility, and innovation-led growth.",
    ],
    statements: [],
    closing: "Beyond NanoQuinn, he is equally passionate about advancing a healthier world through the benefits of protein and wellness — reflecting a broader commitment to performance, well-being, and purposeful impact.",
  },
]

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

      {/* Leadership */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
        <div className="text-center mb-16">
          <span className="inline-block px-10 py-4 rounded-full bg-[#D4A826] text-black text-base font-bold mb-8 shadow-md uppercase tracking-widest">
            Leadership
          </span>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-foreground text-balance">
            The Minds Behind NanoQuinn
          </h2>
        </div>

        <div className="flex flex-col gap-12">
          {leaders.map((leader, idx) => (
            <div
              key={leader.name}
              className="bg-background border border-border rounded-3xl overflow-hidden hover:border-[#D4A826]/60 hover:shadow-lg transition-all duration-200"
            >
              {/* Top index strip */}
              <div className="bg-foreground px-8 py-3 flex items-center gap-3">
                <span className="text-sm font-black uppercase tracking-widest" style={{ color: "#D4A826" }}>
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <div className="h-px flex-1 bg-background/10" />
              </div>

              {/* Main content: photo + text */}
              <div className="flex flex-col lg:flex-row gap-0">

                {/* Photo column */}
                <div className="lg:w-72 shrink-0 bg-muted flex flex-col items-center justify-start p-8 gap-6 border-b lg:border-b-0 lg:border-r border-border">
                  {/* Photo placeholder */}
                  <div
                    className="w-44 h-52 rounded-2xl flex flex-col items-center justify-center border-2 border-dashed"
                    style={{ borderColor: "#D4A826", backgroundColor: "#D4A82610" }}
                  >
                    <div className="w-16 h-16 rounded-full mb-3" style={{ backgroundColor: "#D4A82630" }} />
                    <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#D4A826" }}>
                      Photo
                    </span>
                  </div>

                  {/* Name & role */}
                  <div className="text-center">
                    <h3 className="text-xl font-black text-foreground leading-tight">{leader.name}</h3>
                    <p className="text-muted-foreground text-sm font-medium mt-1">{leader.role}</p>
                  </div>

                  {/* Tag badges */}
                  <div className="flex flex-wrap justify-center gap-2">
                    {leader.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-4 py-2 rounded-full text-sm font-bold text-black text-center leading-snug"
                        style={{ backgroundColor: "#00BFA5" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bio column */}
                <div className="flex-1 px-8 py-8 flex flex-col gap-4">
                  {leader.bio.map((para, i) => (
                    <p key={i} className="text-muted-foreground leading-relaxed">{para}</p>
                  ))}

                  {leader.statements.length > 0 && (
                    <div className="my-2 border-l-4 pl-5 flex flex-col gap-2" style={{ borderColor: "#D4A826" }}>
                      {leader.statements.map((s, i) => (
                        <p key={i} className="font-bold text-foreground italic">{s}</p>
                      ))}
                    </div>
                  )}

                  <p className="text-muted-foreground leading-relaxed">{leader.closing}</p>

                  {"skills" in leader && leader.skills && (
                    <p className="text-sm font-bold mt-2 pt-4 border-t border-border" style={{ color: "#00BFA5" }}>
                      {leader.skills}
                    </p>
                  )}
                </div>

              </div>
            </div>
          ))}
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
