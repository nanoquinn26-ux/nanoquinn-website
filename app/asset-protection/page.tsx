import { AssetProtectionSection } from "@/components/asset-protection-section"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Asset Protection | NanoQuinn",
  description: "Comprehensive asset protection solutions — rust & corrosion, plastic, solar, electrical, floor, wall and sustainable rust removal.",
}

export default function AssetProtectionPage() {
  return (
    <main className="min-h-screen pt-20">
      <AssetProtectionSection />
      <CtaSection />
      <Footer />
    </main>
  )
}
