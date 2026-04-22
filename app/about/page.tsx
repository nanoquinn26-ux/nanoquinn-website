import { AboutSection } from "@/components/about-section"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "About NanoQuinn | Creating the Future of Asset Protection",
  description: "NanoQuinn is a next-generation innovation company redefining how the world protects, preserves, and maintains assets through sustainable nanotechnology.",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-20">
      <AboutSection />
      <CtaSection />
      <Footer />
    </main>
  )
}
