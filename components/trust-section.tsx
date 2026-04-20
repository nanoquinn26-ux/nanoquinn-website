"use client"

const clients = [
  {
    name: "TATA Motors",
    sector: "Automotive",
    logo: "https://logo.clearbit.com/tatamotors.com",
    logoAlt: "TATA Motors logo",
  },
  {
    name: "KONE Elevators",
    sector: "Elevators & Escalators",
    logo: "https://logo.clearbit.com/kone.com",
    logoAlt: "KONE Elevators logo",
  },
  {
    name: "Indian Railway",
    sector: "Rail & Infrastructure",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-20%20at%204.37.19%20PM-0XBiJTvHbfpSyrbpdpbne1KVBmdpKE.jpeg",
    logoAlt: "Indian Railway logo",
    useInitial: true,
    initial: "IR",
  },
  {
    name: "Indian Navy",
    sector: "Defence",
    logo: "",
    logoAlt: "Indian Navy logo",
    useInitial: true,
    initial: "IN",
  },
  {
    name: "Indian Defence",
    sector: "Defence",
    logo: "",
    logoAlt: "Indian Defence logo",
    useInitial: true,
    initial: "ID",
  },
  {
    name: "Ohmium",
    sector: "Clean Energy",
    logo: "https://logo.clearbit.com/ohmium.com",
    logoAlt: "Ohmium logo",
  },
  {
    name: "Bry-Air",
    sector: "Industrial",
    logo: "https://logo.clearbit.com/bry-air.com",
    logoAlt: "Bry-Air logo",
  },
  {
    name: "Chalet Hotels",
    sector: "Hospitality",
    logo: "https://logo.clearbit.com/chalethotels.com",
    logoAlt: "Chalet Hotels logo",
  },
  {
    name: "Gudel",
    sector: "Automation",
    logo: "https://logo.clearbit.com/gudel.com",
    logoAlt: "Gudel logo",
  },
  {
    name: "Schindler",
    sector: "Elevators & Escalators",
    logo: "https://logo.clearbit.com/schindler.com",
    logoAlt: "Schindler logo",
  },
  {
    name: "Sun Pharma",
    sector: "Pharmaceuticals",
    logo: "https://logo.clearbit.com/sunpharma.com",
    logoAlt: "Sun Pharma logo",
  },
  {
    name: "Aditya Birla Fashion & Retail",
    sector: "Fashion & Retail",
    logo: "https://logo.clearbit.com/adityabirla.com",
    logoAlt: "Aditya Birla logo",
  },
  {
    name: "JCB",
    sector: "Heavy Equipment",
    logo: "https://logo.clearbit.com/jcb.com",
    logoAlt: "JCB logo",
  },
  {
    name: "Marriott",
    sector: "Hospitality",
    logo: "https://logo.clearbit.com/marriott.com",
    logoAlt: "Marriott logo",
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
            Our Prestigious Clients
          </h2>
          <p className="text-lg text-muted-foreground">
            Trusted by industry leaders across manufacturing, defence, infrastructure, and hospitality.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
          {clients.map((client) => (
            <div
              key={client.name}
              className="bg-background border border-border rounded-2xl p-6 flex flex-col items-center justify-center gap-4 hover:border-[#D4A826]/60 hover:shadow-md transition-all duration-200 min-h-[160px]"
            >
              <div className="w-full h-16 flex items-center justify-center">
                {(client as any).useInitial ? (
                  <div className="w-14 h-14 rounded-full bg-[#D4A826] flex items-center justify-center shrink-0">
                    <span className="text-black font-bold text-sm">{(client as any).initial}</span>
                  </div>
                ) : (
                  <>
                    <img
                      src={client.logo}
                      alt={client.logoAlt}
                      className="max-h-14 max-w-[120px] object-contain"
                      onError={(e) => {
                        const target = e.currentTarget
                        target.style.display = "none"
                        const fallback = target.nextElementSibling as HTMLElement
                        if (fallback) fallback.style.display = "flex"
                      }}
                    />
                    <div className="hidden w-14 h-14 rounded-full bg-[#D4A826] items-center justify-center shrink-0">
                      <span className="text-black font-bold text-xl">{client.name[0]}</span>
                    </div>
                  </>
                )}
              </div>
              <div className="text-center">
                <p className="font-bold text-sm text-foreground leading-tight">{client.name}</p>
                <p className="text-xs text-muted-foreground mt-1">{client.sector}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
