import { Button } from "@/components/ui/button"
import { ArrowRight, Building2 } from "lucide-react"

export function CtaSection() {
  return (
    <section id="contact" className="py-32 lg:py-40 bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight mb-8 text-balance">
            Own the Future of Asset Protection
          </h2>
          <p className="text-xl text-background/60 mb-16 max-w-2xl mx-auto">
            Join the revolution in asset protection. Choose your path to partnership.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button size="lg" className="w-full sm:w-auto text-lg px-10 py-7 h-auto rounded-full bg-[#D4A826] text-foreground hover:bg-[#B8922A]">
              <Building2 className="w-5 h-5 mr-3" />
              Book a B2B Demo
              <ArrowRight className="w-5 h-5 ml-3" />
            </Button>
          </div>

          {/* Contact Info */}
          <div className="mt-16 pt-8 border-t border-background/10 flex items-center justify-center gap-2">
            <span className="text-background/40 text-sm">Have questions?</span>
            <a href="mailto:business@nanoquinn.com" className="text-sm font-medium text-gold hover:underline tracking-wide">
              business@nanoquinn.com
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
