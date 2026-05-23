import { AssetProtectionSection } from "@/components/asset-protection-section"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Product/Service Range | NanoQuinn",
  description: "Comprehensive sustainable nanotechnology solutions — RustShield, Bio Rust Remover, ElectroShield, Solar Coating, Polymer Protection, FloorGuard, WallGuard and more.",
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
