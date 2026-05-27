import { ApaasSection } from "@/components/apaas-section"
import { BreakthroughSection } from "@/components/breakthrough-section"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "APaaS Model | NanoQuinn",
  description: "World's first Asset Protection as a Service platform. Discover NanoQuinn's disruptive Supply + Apply + Unconditional Warranty model.",
}

export default function ApaasPage() {
  return (
    <main className="min-h-screen pt-20">
      <ApaasSection />
      <BreakthroughSection />
      <CtaSection />
      <Footer />
    </main>
  )
}
