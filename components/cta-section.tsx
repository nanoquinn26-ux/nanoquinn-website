import { ArrowRight, Building2 } from "lucide-react"
import Image from "next/image"

export function CtaSection() {
  return (
    <section className="py-24 sm:py-32 lg:py-40 bg-navy relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=1920&h=1080&fit=crop"
          alt="Sustainable energy background"
          fill
          className="object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/95 to-navy/90" />
      </div>

      {/* Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <span className="text-[15vw] font-bold text-white/[0.02] whitespace-nowrap select-none">
          PARTNER
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left */}
          <div>
            <span className="inline-block text-xs sm:text-sm font-medium text-lime uppercase tracking-[0.2em] mb-6">
              JOIN THE REVOLUTION
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              Own the Future of Asset Protection
            </h2>
            <p className="text-lg text-white/60 leading-relaxed mb-10">
              Join the revolution in industrial asset protection. Choose your path to partnership and transform how your organization preserves value.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div>
                <p className="text-3xl sm:text-4xl font-bold text-lime">80%</p>
                <p className="text-sm text-white/50 mt-1">Cost Reduction</p>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl font-bold text-lime">25+</p>
                <p className="text-sm text-white/50 mt-1">Industries</p>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl font-bold text-lime">100%</p>
                <p className="text-sm text-white/50 mt-1">Sustainable</p>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-6">
            {/* Image */}
            <div className="rounded-2xl overflow-hidden mb-2">
              <Image
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=300&fit=crop"
                alt="Industrial safety and sustainability"
                width={600}
                height={300}
                className="w-full h-auto object-cover"
              />
            </div>

            <a
              href="https://wa.me/918608604817"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-6 rounded-xl bg-lime hover:bg-lime-light transition-all hover:scale-[1.02]"
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
              className="group flex items-center justify-between p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all hover:scale-[1.02]"
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
