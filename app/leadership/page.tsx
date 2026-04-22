import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Leadership | NanoQuinn",
  description: "Meet the minds behind NanoQuinn — the leaders driving a global Asset Protection revolution.",
}

const leaders = [
  {
    name: "Rajiv Sanghvi",
    photo: "/team/rajiv-sanghvi.jpeg",
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
    closing:
      "Driven by one burning desire — to leave behind a global legacy of transformative innovations that challenge century-old methods and replace them with a more sustainable future.",
    skills: null,
  },
  {
    name: "Jeevika Sanghvi",
    photo: "/team/jeevika-sanghvi.jpeg",
    role: "Co-Founder",
    tags: ["Sales & Business Development", "Growth Strategist"],
    bio: [
      "A silent force with a sharp commercial instinct, Jeevika Sanghvi brings focus, discipline, and execution-driven energy to sales and business development.",
      "Known for vision clarity, humility, and a straightforward approach, she combines relationship-building with strong conviction — persuasive when it matters, grounded in trust always.",
      "Her strength lies in identifying opportunities, building strategic partnerships, and converting ideas into business growth through focused execution.",
      "Calm in approach, firm in negotiations, and relentless in follow-through, she represents a rare blend of humility and hard convincing — a quiet go-getter who lets outcomes speak louder than words.",
    ],
    statements: [],
    closing:
      "Driven by purpose and growth, she contributes to building scalable, sustainable business opportunities with long-term value creation at the core.",
    skills: "Sales Growth | Business Development | Strategic Partnerships | Execution Focused Leadership",
  },
  {
    name: "Rajesh Dholakia",
    photo: "/team/rajesh-dholakia.jpeg",
    role: "Director – NPD & Application",
    tags: ["Innovation", "Quality and Category Leadership"],
    bio: [
      "Mr. Rajesh Dholakia brings senior leadership, deep domain expertise, and a strong conviction-led approach to New Product Development (NPD) and the Application vertical.",
      "With a sharp focus on innovation, multi-fold quality enhancement, and application excellence, he plays a pivotal role in creating differentiated solutions that strengthen category leadership and deliver a competitive edge.",
      "Known for his persuasive character, mature judgment, and solution-oriented approach, he combines technical depth with strategic thinking — helping transform ideas into scalable, high-performance offerings.",
      "His contribution extends beyond product and process; he is instrumental in reinforcing a culture of quality, credibility, and innovation-led growth.",
    ],
    statements: [],
    closing:
      "Beyond NanoQuinn, he is equally passionate about advancing a healthier world through the benefits of protein and wellness — reflecting a broader commitment to performance, well-being, and purposeful impact.",
    skills: null,
  },
]

export default function LeadershipPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <div className="bg-foreground text-background pt-32 pb-20 sm:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-10 py-4 rounded-full bg-[#D4A826] text-black text-base font-bold mb-8 shadow-md uppercase tracking-widest">
            Leadership
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-balance leading-tight mb-6">
            The Minds Behind{" "}
            <span style={{ color: "#00BFA5" }}>NanoQuinn</span>
          </h1>
          <p className="text-base sm:text-xl text-background/70 max-w-2xl mx-auto leading-relaxed">
            Visionaries, builders, and strategists driving a global Asset Protection revolution.
          </p>
        </div>
      </div>

      {/* Leader cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-28">
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
              <div className="flex flex-col lg:flex-row">

                {/* Photo column */}
                <div className="lg:w-80 shrink-0 bg-muted flex flex-col items-center justify-start p-6 gap-6 border-b lg:border-b-0 lg:border-r border-border">
                  {/* Photo */}
                  {leader.photo ? (
                    <img
                      src={leader.photo}
                      alt={`${leader.name} photo`}
                      className="w-full h-72 lg:h-80 rounded-2xl object-cover object-center shadow-xl"
                      style={{ imageRendering: "auto" }}
                    />
                  ) : (
                    <div
                      className="w-full h-72 lg:h-80 rounded-2xl flex flex-col items-center justify-center border-2 border-dashed"
                      style={{ borderColor: "#D4A826", backgroundColor: "#D4A82610" }}
                    >
                      <div className="w-16 h-16 rounded-full mb-3" style={{ backgroundColor: "#D4A82630" }} />
                      <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#D4A826" }}>
                        Photo
                      </span>
                    </div>
                  )}

                  {/* Name & role */}
                  <div className="text-center">
                    <h2 className="text-xl font-black text-foreground leading-tight">{leader.name}</h2>
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
                <div className="flex-1 px-6 sm:px-8 py-8 flex flex-col gap-4">
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

                  {leader.skills && (
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

      <Footer />
    </main>
  )
}
