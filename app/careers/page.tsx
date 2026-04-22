import { CareersSection } from "@/components/careers-section"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Careers | NanoQuinn",
  description: "Join NanoQuinn — we are not hiring for jobs, we are building a team of category creators. Build the future of asset protection.",
}

export default function CareersPage() {
  return (
    <main className="min-h-screen pt-20">
      <CareersSection />
      <Footer />
    </main>
  )
}
