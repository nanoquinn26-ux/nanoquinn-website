import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { Mail, Phone, MapPin } from "lucide-react"

export const metadata = {
  title: "Contact | NanoQuinn",
  description: "Get in touch with NanoQuinn to book a B2B demo or learn more about our APaaS solutions.",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Contact Hero */}
      <section className="py-24 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-8 py-3 rounded-full bg-[#D4A826] text-black text-lg font-medium mb-8 shadow-md">
              Get in Touch
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 text-balance">
              Let&apos;s Protect Your Assets Together
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
              Reach out to us to book a B2B demo, explore partnership opportunities, or learn more about our APaaS model.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: Phone,
                label: "Phone",
                value: "+91 86086 04817",
                href: "tel:+918608604817",
              },
              {
                icon: Mail,
                label: "Email",
                value: "business@nanoquinn.com",
                href: "mailto:business@nanoquinn.com",
              },
              {
                icon: MapPin,
                label: "Location",
                value: "Suite 1505, One Lodha Place, Senapati Bapat Marg, Lower Parel, Mumbai - 400013",
                href: "https://maps.google.com/?q=One+Lodha+Place+Lower+Parel+Mumbai",
              },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex flex-col items-center gap-4 p-8 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 hover:border-[#D4A826]/40 transition-all group"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#D4A826]/10 border border-[#D4A826]/30 flex items-center justify-center group-hover:bg-[#D4A826]/20 transition-colors">
                  <item.icon className="w-6 h-6 text-[#D4A826]" />
                </div>
                <div className="text-center">
                  <p className="text-white/50 text-sm mb-1">{item.label}</p>
                  <p className="text-white font-semibold">{item.value}</p>
                </div>
              </a>
            ))}
          </div>

          {/* WhatsApp CTA */}
          <div className="mt-16 text-center">
            <a
              href="https://wa.me/918608604817"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-[#25D366] text-white text-lg font-semibold hover:bg-[#1ebe5d] transition-colors shadow-xl"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.117 1.526 5.847L0 24l6.345-1.506A11.946 11.946 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.371l-.36-.214-3.724.977.994-3.634-.235-.374A9.818 9.818 0 1112 21.818z"/>
              </svg>
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <CtaSection />
      <Footer />
    </main>
  )
}
