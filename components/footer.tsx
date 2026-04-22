import Link from "next/link"
import Image from "next/image"
import { Linkedin, Youtube } from "lucide-react"

const footerLinks = {
  company: [
    { label: "About NanoQuinn", href: "/about" },
    { label: "Leadership", href: "/leadership" },
    { label: "Careers", href: "/careers" },
    { label: "Press", href: "#" },
  ],
  solutions: [
    { label: '"APaaS Model"', href: "/apaas" },
    { label: "Asset Protection", href: "/asset-protection" },
    { label: "Technology", href: "/technology" },
    { label: "Industries", href: "/industries" },
    { label: "ESG Commitment", href: "/esg" },
  ],
  resources: [
    { label: "Case Studies", href: "#" },
    { label: "Support", href: "#" },
  ],
}

const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/company/nanoquinn/", label: "LinkedIn" },
  { icon: Youtube, href: "https://youtube.com/@nanoquinn?si=1Qh999ftnlD1Z1FC", label: "YouTube" },
]

export function Footer() {
  return (
    <footer className="bg-muted py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-12 sm:mb-16">
          {/* Brand */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1 mb-2 lg:mb-0">
            <Link href="/" className="flex items-center mb-6">
              <div className="bg-white rounded-lg p-2">
                <Image 
                  src="/images/nanoquinn-logo.png" 
                  alt="NanoQuinn" 
                  width={200} 
                  height={70} 
                  className="h-12 w-auto object-contain"
                />
              </div>
            </Link>
            <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
              The world&apos;s first APaaS ecosystem for sustainable asset protection.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center hover:bg-foreground hover:text-background transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-bold mb-5">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-5">Solutions</h3>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-5">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>


        </div>

        {/* Bottom */}
        <div className="pt-10 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} NanoQuinn. All rights reserved.
          </p>
          <div className="flex items-center gap-8">
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
