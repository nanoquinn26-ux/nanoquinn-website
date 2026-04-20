const clients = [
  {
    name: "Indian Railways",
    sector: "Rail & Infrastructure",
    detail: "Asset protection across rolling stock, stations & structural steel",
  },
  {
    name: "Hospitality Group",
    sector: "Hotels & Banquets",
    detail: "Carpet, upholstery and surface protection for premium properties",
  },
  {
    name: "Industrial Client",
    sector: "Manufacturing",
    detail: "Rust & corrosion protection across metal fabrication facilities",
  },
  {
    name: "Power Sector",
    sector: "Energy & Utilities",
    detail: "Electrical asset protection and long-term preservation programs",
  },
  {
    name: "Manufacturing",
    sector: "Heavy Industry",
    detail: "OEM coating systems reducing maintenance cycles by over 70%",
  },
  {
    name: "Infrastructure",
    sector: "Public Works",
    detail: "Waterproofing, floor and civil asset protection at scale",
  },
]

export function TrustSection() {
  return (
    <section className="py-32 lg:py-40 bg-muted">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <span className="inline-block px-8 py-3 rounded-full bg-[#D4A826] text-black text-sm font-bold mb-8 shadow-md uppercase tracking-widest">
            Trusted Partners
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-balance">
            Trusted by Forward-Thinking Organizations
          </h2>
          <p className="text-lg text-muted-foreground">
            From heavy industry to premium hospitality — NanoQuinn protects the assets that matter most.
          </p>
        </div>

        {/* Client Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {clients.map((client) => (
            <div
              key={client.name}
              className="bg-background border border-border rounded-3xl p-8 flex flex-col gap-4 hover:border-[#D4A826]/50 hover:shadow-md transition-all duration-200"
            >
              {/* Top row */}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-bold text-foreground">{client.name}</h3>
                  <span className="inline-block mt-1 px-3 py-1 rounded-full bg-[#D4A826]/10 text-[#D4A826] text-xs font-semibold uppercase tracking-wide">
                    {client.sector}
                  </span>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#D4A826] flex items-center justify-center shrink-0">
                  <span className="text-black font-bold text-lg">N</span>
                </div>
              </div>
              {/* Detail */}
              <p className="text-sm text-muted-foreground leading-relaxed border-t border-border pt-4">
                {client.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
