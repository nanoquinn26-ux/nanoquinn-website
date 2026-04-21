"use client"

const clients = [
  { name: "TATA Motors",                sector: "Automotive",              logo: "/clients/tata.png",           logoAlt: "TATA Motors logo" },
  { name: "KONE Elevators",             sector: "Elevators & Escalators",  logo: "/clients/kone.png",           logoAlt: "KONE Elevators logo" },
  { name: "Indian Railway",             sector: "Rail & Infrastructure",    logo: "/clients/indian-railway.png", logoAlt: "Indian Railway logo" },
  { name: "Indian Navy",                sector: "Defence",                  logo: "/clients/indian-navy.png",    logoAlt: "Indian Navy logo" },
  { name: "Indian Defence",             sector: "Defence",                  logo: "/clients/indian-defence.png", logoAlt: "Indian Defence logo" },
  { name: "Ohmium",                     sector: "Clean Energy",             logo: "/clients/ohmium.png",         logoAlt: "Ohmium logo" },
  { name: "Bry-Air",                    sector: "Industrial",               logo: "/clients/bry-air.png",        logoAlt: "Bry-Air logo" },
  { name: "Chalet Hotels",              sector: "Hospitality",              logo: "/clients/chalet.png",         logoAlt: "Chalet Hotels logo" },
  { name: "Gudel",                      sector: "Automation",               logo: "/clients/gudel.png",          logoAlt: "Gudel logo" },
  { name: "Schindler",                  sector: "Elevators & Escalators",   logo: "/clients/schindler.png",      logoAlt: "Schindler logo" },
  { name: "Sun Pharma",                 sector: "Pharmaceuticals",          logo: "/clients/sun-pharma.png",     logoAlt: "Sun Pharma logo" },
  { name: "Aditya Birla Fashion & Retail", sector: "Fashion & Retail",     logo: "/clients/aditya-birla.png",   logoAlt: "Aditya Birla logo" },
  { name: "JCB",                        sector: "Heavy Equipment",          logo: "/clients/jcb.png",            logoAlt: "JCB logo" },
  { name: "Marriott",                   sector: "Hospitality",              logo: "/clients/marriott.png",       logoAlt: "Marriott logo" },
]

export function TrustSection() {
  return (
    <section className="py-32 lg:py-40 bg-muted">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <span className="inline-block px-10 py-4 rounded-full bg-[#D4A826] text-black text-base font-bold mb-8 shadow-md uppercase tracking-widest">
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
              className="bg-background border border-border rounded-2xl p-6 flex flex-col items-center justify-center gap-4 hover:border-[#D4A826]/60 hover:shadow-md transition-all duration-200 min-h-[200px]"
            >
              <div className="w-full h-24 flex items-center justify-center">
                <img
                  src={client.logo}
                  alt={client.logoAlt}
                  className="max-h-20 max-w-[160px] object-contain"
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
