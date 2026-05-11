import { Hero } from "@/components/hero"
import { ImpactStatement } from "@/components/impact-statement"
import { VideoSection } from "@/components/video-section"
import { TrustSection } from "@/components/trust-section"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ImpactStatement />
      <VideoSection />
      <TrustSection />
      <CtaSection />
      <Footer />
    </main>
  )
}
