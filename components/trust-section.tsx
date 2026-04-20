import { Quote } from "lucide-react"

const testimonial = {
  quote: "Reduced maintenance costs by over 70% while eliminating repainting cycles.",
  author: "Industrial Partner",
  role: "Manufacturing Sector",
}

const logos = [
  "Indian Railways",
  "Hospitality Group",
  "Industrial Client",
  "Power Sector",
  "Manufacturing",
  "Infrastructure",
]

export function TrustSection() {
  return (
    <section className="py-32 lg:py-40 bg-muted">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <span className="inline-block px-8 py-3 rounded-full bg-[#D4A826] text-black text-lg font-medium mb-8 shadow-md">
            Trusted Partners
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-balance">
            Trusted by Forward-Thinking Organizations
          </h2>
        </div>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-20">
          {logos.map((logo) => (
            <div key={logo} className="flex items-center justify-center h-24 bg-background border border-border rounded-2xl px-6">
              <span className="font-semibold text-muted-foreground text-sm text-center">{logo}</span>
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-background border border-border rounded-3xl p-10 lg:p-14">
            <Quote className="absolute top-8 left-8 w-12 h-12 text-accent/20" />
            <div className="relative text-center pt-8">
              <p className="text-2xl lg:text-3xl font-medium mb-8 text-balance leading-relaxed">
                &quot;{testimonial.quote}&quot;
              </p>
              <div>
                <p className="font-bold text-lg">{testimonial.author}</p>
                <p className="text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
