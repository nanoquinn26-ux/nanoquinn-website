"use client"

import Image from "next/image"

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
    <section className="py-24 sm:py-32 lg:py-40 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 mb-16 items-end">
          <div>
            <span className="text-6xl sm:text-7xl lg:text-8xl font-bold text-navy/5 block mb-4">
              CLIENTS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy leading-tight">
              Trusted by Industry Leaders
            </h2>
          </div>
          <div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From manufacturing giants to defence organizations, leading enterprises trust NanoQuinn for their critical asset protection needs.
            </p>
          </div>
        </div>

        {/* Client Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {clients.map((client) => (
            <div
              key={client.name}
              className="group bg-sage rounded-xl p-6 flex flex-col items-center justify-center gap-4 hover:bg-lime/10 border border-transparent hover:border-lime/30 transition-all duration-300 min-h-[140px]"
            >
              <div className="w-full flex items-center justify-center h-12">
                <Image
                  src={client.logo}
                  alt={client.logoAlt}
                  width={120}
                  height={48}
                  className="max-w-full max-h-12 object-contain opacity-60 group-hover:opacity-100 transition-opacity"
                />
              </div>
              <div className="text-center">
                <p className="font-semibold text-sm text-navy">{client.name}</p>
                <p className="text-xs text-muted-foreground">{client.sector}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
