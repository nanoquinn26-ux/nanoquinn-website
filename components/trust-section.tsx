const clients = [
  {
    name: "TATA Motors",
    sector: "Automotive",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Tata_logo.svg/320px-Tata_logo.svg.png",
    logoAlt: "TATA Motors logo",
  },
  {
    name: "KONE Elevators",
    sector: "Elevators & Escalators",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/KONE_logo.svg/320px-KONE_logo.svg.png",
    logoAlt: "KONE Elevators logo",
  },
  {
    name: "Indian Railway",
    sector: "Rail & Infrastructure",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Indian_Railways.svg/200px-Indian_Railways.svg.png",
    logoAlt: "Indian Railway logo",
  },
  {
    name: "Indian Navy",
    sector: "Defence",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Indian_Navy_Ensign.svg/200px-Indian_Navy_Ensign.svg.png",
    logoAlt: "Indian Navy logo",
  },
  {
    name: "Indian Defence",
    sector: "Defence",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Emblem_of_India.svg/200px-Emblem_of_India.svg.png",
    logoAlt: "Indian Defence logo",
  },
  {
    name: "Ohmium",
    sector: "Clean Energy",
    logo: "https://ohmium.com/wp-content/uploads/2022/09/Ohmium-Logo.png",
    logoAlt: "Ohmium logo",
  },
  {
    name: "Bry-Air",
    sector: "Industrial",
    logo: "https://www.bry-air.com/wp-content/themes/bryair/images/logo.png",
    logoAlt: "Bry-Air logo",
  },
  {
    name: "Chalet Hotels",
    sector: "Hospitality",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Chalet_Hotels_logo.svg/320px-Chalet_Hotels_logo.svg.png",
    logoAlt: "Chalet Hotels logo",
  },
  {
    name: "Gudel",
    sector: "Automation",
    logo: "https://www.gudel.com/hubfs/gudel-logo.svg",
    logoAlt: "Gudel logo",
  },
  {
    name: "Schindler",
    sector: "Elevators & Escalators",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Schindler_logo.svg/320px-Schindler_logo.svg.png",
    logoAlt: "Schindler logo",
  },
  {
    name: "Sun Pharma",
    sector: "Pharmaceuticals",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Sun_Pharma_logo.svg/320px-Sun_Pharma_logo.svg.png",
    logoAlt: "Sun Pharma logo",
  },
  {
    name: "Aditya Birla Fashion & Retail",
    sector: "Fashion & Retail",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Aditya_Birla_Group_Logo.svg/320px-Aditya_Birla_Group_Logo.svg.png",
    logoAlt: "Aditya Birla logo",
  },
  {
    name: "JCB",
    sector: "Heavy Equipment",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/JCB-Logo.svg/320px-JCB-Logo.svg.png",
    logoAlt: "JCB logo",
  },
  {
    name: "Marriott",
    sector: "Hospitality",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Marriott_International_Logo.svg/320px-Marriott_International_Logo.svg.png",
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
                <img
                  src={client.logo}
                  alt={client.logoAlt}
                  className="max-h-14 max-w-full object-contain"
                  onError={(e) => {
                    const target = e.currentTarget
                    target.style.display = "none"
                    const fallback = target.nextElementSibling as HTMLElement
                    if (fallback) fallback.style.display = "flex"
                  }}
                />
                <div
                  className="hidden w-14 h-14 rounded-full bg-[#D4A826] items-center justify-center"
                >
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
