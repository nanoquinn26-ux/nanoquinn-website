import { Footer } from "@/components/footer"
import { ChevronRight, ClipboardList } from "lucide-react"

const auditContent = {
  title: "Asset Health Audit",
  subtitle: "Know Your Degradation. Protect Before Failure.",
  intro: "Our Asset Health Audit helps identify critical vulnerabilities across your most important assets — before failures, shutdowns, or rising lifecycle costs take hold.",
  overview: [
    { label: "Hidden Degradation", desc: "Uncover damage invisible to routine inspection" },
    { label: "Performance Loss", desc: "Quantify efficiency and output decline" },
    { label: "Maintenance Gaps", desc: "Identify where protection has lapsed" },
    { label: "Protection Opportunities", desc: "Recommend targeted interventions before failure" },
  ],
  whoWeServe: [
    { label: "Private Sector Plants & Manufacturing", desc: "Production environments with high-value equipment and continuous operational demands." },
    { label: "Municipal, Utility & PSU Assets", desc: "Public utilities, corporations, and state-owned enterprises managing critical infrastructure." },
    { label: "OEMs and Fabricated Equipment Manufacturers", desc: "Original equipment manufacturers requiring surface and structural integrity assurance." },
    { label: "Industrial Process Plants", desc: "Complex process environments exposed to chemical, thermal, and mechanical stressors." },
    { label: "Central & State Government Infrastructure", desc: "Public assets requiring long-term protection and lifecycle cost management." },
    { label: "Rail, Defense & Commercial Facilities", desc: "High-stakes assets in rail, defense, public works, and institutional facilities." },
  ],
  whatWeAudit: [
    { label: "Metal Assets", desc: "Corrosion, coating failure, structural exposure" },
    { label: "Civil & Waterproofing", desc: "Concrete, cracks, seepage, joint failures" },
    { label: "Floor Systems", desc: "Epoxy, polyurethane, abrasion, delamination" },
    { label: "Plastic & Polymers", desc: "UV degradation, brittleness, chemical exposure" },
    { label: "Solar Assets", desc: "Panel condition, soiling, efficiency loss" },
    { label: "Electrical Assets", desc: "Panels, busbars, insulation, corrosion risks" },
  ],
  deliverables: [
    "Condition Assessment Report",
    "Degradation Risk Mapping",
    "Photographic Inspection Documentation",
    "Failure Risk Prioritization",
    "Protection Opportunity Recommendations",
    "CAPEX vs OPEX Comparison",
    "ROI-Based Asset Protection Roadmap",
  ],
  methodology: ["Inspect", "Diagnose", "Quantify", "Recommend", "Protect"],
  objectives: [
    { label: "Identify Degradation", desc: "Surface and structural deterioration detected before it becomes critical" },
    { label: "Quantify Risk", desc: "Failure probability and consequence severity measured and ranked" },
    { label: "Recommend Protection", desc: "Targeted solutions specified for each identified vulnerability" },
    { label: "Extend Asset Life", desc: "Protection interventions that significantly increase service life" },
    { label: "Reduce Maintenance", desc: "Lower recurring maintenance costs through proactive protection" },
    { label: "Improve Performance", desc: "Restored and optimized asset output across all audited systems" },
  ],
  cta: {
    heading: "Request an Asset Protection Audit",
    sub: "Schedule a site audit or consultation to assess your assets. Our team will work with you to identify degradation risks, quantify protection opportunities, and deliver a clear roadmap to extend asset life and reduce lifecycle costs.",
    options: [
      { label: "Site Audit", desc: "Full on-site inspection and condition assessment of your critical assets" },
      { label: "Consultation", desc: "Discuss your asset challenges and protection priorities with our specialists" },
      { label: "Protection Roadmap", desc: "Receive a tailored, ROI-based asset protection plan for your facility" },
    ],
  },
}

const WhatsAppIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.117 1.526 5.847L0 24l6.345-1.506A11.946 11.946 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.371l-.36-.214-3.724.977.994-3.634-.235-.374A9.818 9.818 0 1112 21.818z"/>
  </svg>
)

export default function AssetHealthAuditPage() {
  return (
    <main className="pt-20">
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-10 py-4 rounded-full bg-[#D4A826] text-black text-base font-bold mb-8 shadow-md uppercase tracking-widest">
              Asset Health Audit
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4 text-balance">
              {auditContent.title}
            </h1>
            <p className="text-xl font-semibold text-[#D4A826] mb-6">{auditContent.subtitle}</p>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">{auditContent.intro}</p>
          </div>

          {/* Overview cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
            {auditContent.overview.map((item, i) => (
              <div key={i} className="bg-foreground text-background rounded-3xl p-8">
                <h3 className="font-bold text-[#D4A826] mb-2">{item.label}</h3>
                <p className="text-sm text-background/70 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* What We Audit */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <span className="w-2 h-7 bg-[#D4A826] rounded-full inline-block" />
              What We Audit
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {auditContent.whatWeAudit.map((item, i) => (
                <div key={i} className="bg-muted rounded-2xl p-6 flex items-start gap-4">
                  <span className="w-8 h-8 rounded-full bg-[#D4A826] text-black text-sm font-bold flex items-center justify-center shrink-0">{i + 1}</span>
                  <div>
                    <p className="font-semibold text-foreground">{item.label}</p>
                    <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Who We Serve + Methodology + Deliverables */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-muted rounded-3xl p-8">
              <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                <span className="w-2 h-6 bg-[#D4A826] rounded-full inline-block" />
                Who We Serve
              </h2>
              <ul className="space-y-5">
                {auditContent.whoWeServe.map((item, i) => (
                  <li key={i}>
                    <p className="font-semibold text-foreground text-sm">{item.label}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{item.desc}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-6">
              {/* Methodology */}
              <div className="bg-foreground text-background rounded-3xl p-8">
                <h2 className="text-xl font-bold text-[#D4A826] mb-6">Audit Methodology</h2>
                <div className="flex items-center gap-2 flex-wrap">
                  {auditContent.methodology.map((step, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span className="px-4 py-2 rounded-full bg-[#D4A826] text-black text-sm font-bold">{step}</span>
                      {i < auditContent.methodology.length - 1 && <ChevronRight className="w-4 h-4 text-[#D4A826]" />}
                    </div>
                  ))}
                </div>
                <p className="text-xs text-background/50 mt-4 leading-relaxed">
                  Each phase builds on the last — ensuring recommendations are grounded in verified site data, quantified risk, and practical protection science.
                </p>
              </div>

              {/* Deliverables */}
              <div className="bg-muted rounded-3xl p-8">
                <h2 className="text-xl font-bold mb-5 flex items-center gap-2">
                  <span className="w-2 h-6 bg-[#D4A826] rounded-full inline-block" />
                  Audit Deliverables
                </h2>
                <ul className="space-y-2">
                  {auditContent.deliverables.map((d, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <span className="text-[#D4A826] font-bold shrink-0">✔</span>
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Objectives */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <span className="w-2 h-7 bg-[#D4A826] rounded-full inline-block" />
              Audit Objectives
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {auditContent.objectives.map((obj, i) => (
                <div key={i} className="bg-muted rounded-2xl p-6">
                  <p className="font-bold text-foreground mb-1">{obj.label}</p>
                  <p className="text-sm text-muted-foreground">{obj.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-foreground text-background rounded-3xl p-10">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold text-[#D4A826] mb-3">{auditContent.cta.heading}</h2>
              <p className="text-background/70 text-sm max-w-2xl mx-auto leading-relaxed">{auditContent.cta.sub}</p>
            </div>
            <div className="grid sm:grid-cols-3 gap-5 mb-10">
              {auditContent.cta.options.map((opt, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
                  <p className="font-bold text-white mb-2">{opt.label}</p>
                  <p className="text-xs text-background/60 leading-relaxed">{opt.desc}</p>
                </div>
              ))}
            </div>
            <div className="text-center">
              <a
                href="https://wa.me/918608604817"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-10 py-4 bg-[#25D366] text-black font-semibold hover:bg-[#1ebe5d] transition-colors"
              >
                <WhatsAppIcon />
                Request an Audit on WhatsApp
              </a>
            </div>
          </div>

        </div>
      </section>
      <Footer />
    </main>
  )
}
