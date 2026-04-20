import { EsgSection } from "@/components/esg-section"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "ESG & EHS | NanoQuinn",
  description: "NanoQuinn's ESG & EHS leadership — ISO 14001, ISO 45001:2018, ISO 9001:2015 aligned. Zero VOC, sustainable nanotechnology for a greener future.",
}

export default function EsgPage() {
  return (
    <main className="min-h-screen pt-20">
      <EsgSection />
      <CtaSection />
      <Footer />
    </main>
  )
}
