import { TechnologySection } from "@/components/technology-section"
import { ImpactSection } from "@/components/impact-section"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Technology | NanoQuinn",
  description: "Advanced sustainable nanotechnology — 8–10 micron transparent barrier protecting metal, plastic, FRP, concrete and critical infrastructure assets.",
}

export default function TechnologyPage() {
  return (
    <main className="min-h-screen pt-20">
      <TechnologySection />
      <ImpactSection />
      <CtaSection />
      <Footer />
    </main>
  )
}
