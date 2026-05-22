import { ArrowRight, Building2 } from "lucide-react"

export function CtaSection() {
  return (
    <section className="py-24 sm:py-32 lg:py-40 bg-navy relative overflow-hidden">
      {/* Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <span className="text-[20vw] font-bold text-white/[0.02] whitespace-nowrap select-none">
          NANOQUINN
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left */}
          <div>
            <span className="text-6xl sm:text-7xl lg:text-8xl font-bold text-white/5 block mb-4">
              PARTNER
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              Own the Future of Asset Protection
            </h2>
            <p className="text-lg text-white/60 leading-relaxed">
              Join the revolution in industrial asset protection. Choose your path to partnership and transform how your organization preserves value.
            </p>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-6">
            <a
              href="https://wa.me/918608604817"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-6 rounded-xl bg-lime hover:bg-lime-light transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-navy/10 flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-navy" />
                </div>
                <div>
                  <p className="font-bold text-navy text-lg">Book a B2B Demo</p>
                  <p className="text-navy/60 text-sm">Schedule a personalized demonstration</p>
                </div>
              </div>
              <ArrowRight className="w-6 h-6 text-navy group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="mailto:business@nanoquinn.com"
              className="group flex items-center justify-between p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-white text-lg">Email Us</p>
                  <p className="text-white/60 text-sm">business@nanoquinn.com</p>
                </div>
              </div>
              <ArrowRight className="w-6 h-6 text-white group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
