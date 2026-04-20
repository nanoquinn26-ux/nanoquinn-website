import { IndustriesSection } from "@/components/industries-section"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Industries | NanoQuinn",
  description: "NanoQuinn serves B2B and B2G sectors — manufacturing, power, oil & gas, pharma, railways, defense, smart cities and beyond.",
}

export default function IndustriesPage() {
  return (
    <main className="min-h-screen pt-20">
      <IndustriesSection />
      <CtaSection />
      <Footer />
    </main>
  )
}
