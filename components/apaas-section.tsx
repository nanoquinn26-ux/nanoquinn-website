"use client"

export function ApaasSection() {
  return (
    <section id="apaas" className="py-20 sm:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Hero Header */}
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-[#1E3A5F] rounded-3xl p-10 sm:p-16 lg:p-20">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold italic tracking-tight mb-6 text-balance text-white">
              NanoQuinn{" "}
              <span className="bg-gradient-to-r from-[#5EEAD4] via-[#14B8A6] to-[#22C55E] bg-clip-text text-transparent not-italic">
                APaaS™
              </span>{" "}
              <span className="not-italic">Platform</span>
            </h1>
            <p className="text-xl sm:text-2xl leading-relaxed font-medium">
              <span className="text-white/80">Your</span>{" "}
              <span className="bg-gradient-to-r from-[#5EEAD4] via-[#14B8A6] to-[#22C55E] bg-clip-text text-transparent font-bold">
                360° Sustainable Maintenance & Asset Protection
              </span>{" "}
              <span className="text-white/80">Partner</span>
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
