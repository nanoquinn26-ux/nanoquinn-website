export function CtaSection() {
  return (
    <section id="contact" className="py-32 lg:py-40 bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight mb-8 text-balance">
            Own the Future of Asset Protection
          </h2>
          <p className="text-xl text-background/60 mb-16 max-w-2xl mx-auto">
            Join the revolution in asset protection. Choose your path to partnership.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="https://wa.me/918608604817?text=Hi%2C%20I%27d%20like%20to%20book%20a%20B2B%20Demo%20with%20NanoQuinn"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 w-full sm:w-auto text-lg px-10 py-5 rounded-full bg-[#25D366] text-white font-semibold hover:bg-[#1ebe5d] transition-colors shadow-lg"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 shrink-0">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.117 1.526 5.847L0 24l6.345-1.506A11.946 11.946 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.371l-.36-.214-3.724.977.994-3.634-.235-.374A9.818 9.818 0 1112 21.818z"/>
              </svg>
              Book a B2B Demo on WhatsApp
            </a>
          </div>

          {/* Contact Info */}
          <div className="mt-20 pt-12 border-t border-background/10">
            <p className="text-background/40 mb-3">Have questions?</p>
            <a href="mailto:business@nanoquinn.com" className="text-2xl font-semibold text-gold hover:underline">
              business@nanoquinn.com
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
