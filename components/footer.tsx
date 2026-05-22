import Link from "next/link"
import Image from "next/image"

const footerLinks = {
  company: [
    { label: "About NanoQuinn", href: "/about" },
    { label: "Leadership", href: "/leadership" },
    { label: "Careers", href: "/careers" },
  ],
  solutions: [
    { label: "APaaS Model", href: "/apaas" },
    { label: "Asset Protection", href: "/asset-protection" },
    { label: "Technology", href: "/technology" },
    { label: "Industries", href: "/industries" },
    { label: "ESG Commitment", href: "/esg" },
  ],
}

const socialLinks = [
  { 
    label: "LinkedIn", 
    href: "https://www.linkedin.com/company/nanoquinn/",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
      </svg>
    )
  },
  { 
    label: "YouTube", 
    href: "https://www.youtube.com/UCA6Dd3NUf_6Ak19HrwxoXsA",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
      </svg>
    )
  },
]

export function Footer() {
  return (
    <footer className="bg-navy pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <Image 
                src="/images/nanoquinn-logo.png" 
                alt="NanoQuinn APaaS Platform" 
                width={160} 
                height={64} 
                className="h-12 w-auto object-contain"
              />
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              The world&apos;s first APaaS ecosystem for sustainable asset protection using German nanotechnology.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:bg-lime hover:border-lime hover:text-navy transition-all"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-bold text-white mb-6">Company</h3>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-white/50 hover:text-lime transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions Links */}
          <div>
            <h3 className="font-bold text-white mb-6">Solutions</h3>
            <ul className="space-y-4">
              {footerLinks.solutions.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-white/50 hover:text-lime transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-white mb-6">Contact</h3>
            <div className="space-y-4">
              <div>
                <p className="text-white/30 text-xs uppercase tracking-wider mb-1">Call Us</p>
                <a href="tel:+918608604817" className="text-white hover:text-lime transition-colors text-sm font-medium">
                  +91 860 860 4817
                </a>
              </div>
              <div>
                <p className="text-white/30 text-xs uppercase tracking-wider mb-1">Email</p>
                <a href="mailto:business@nanoquinn.com" className="text-white hover:text-lime transition-colors text-sm font-medium">
                  business@nanoquinn.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Large Brand Text */}
        <div className="border-t border-white/10 pt-12 mb-8">
          <div className="text-6xl sm:text-7xl lg:text-8xl font-bold text-white/[0.03] text-center select-none">
            NANOQUINN
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/40">
            © {new Date().getFullYear()} NanoQuinn. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-sm text-white/40 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-white/40 hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
