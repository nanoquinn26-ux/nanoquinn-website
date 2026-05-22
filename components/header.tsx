"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Phone } from "lucide-react"

const navItems = [
  { label: "HOME", href: "/" },
  { label: "APAAS MODEL", href: "/apaas" },
  { label: "ASSET PROTECTION", href: "/asset-protection" },
  { label: "TECHNOLOGY", href: "/technology" },
  { label: "INDUSTRIES", href: "/industries" },
  { label: "ESG", href: "/esg" },
  { label: "ABOUT", href: "/about" },
  { label: "CONTACT", href: "/contact" },
]

const WhatsAppIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.117 1.526 5.847L0 24l6.345-1.506A11.946 11.946 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.371l-.36-.214-3.724.977.994-3.634-.235-.374A9.818 9.818 0 1112 21.818z"/>
  </svg>
)

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  // Handle scroll for header transparency
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-navy/95 backdrop-blur-md" : "bg-navy"}`}>
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Menu Button */}
            <button
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-lime flex items-center justify-center hover:bg-lime-light transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <div className="w-5 h-5 flex flex-col justify-center items-center gap-1">
                <span className={`block h-0.5 w-5 bg-navy transition-all duration-300 ${isOpen ? "rotate-45 translate-y-1.5" : ""}`} />
                <span className={`block h-0.5 w-5 bg-navy transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
                <span className={`block h-0.5 w-5 bg-navy transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
              </div>
            </button>

            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/images/nanoquinn-logo.png"
                alt="NanoQuinn APaaS Platform"
                width={160}
                height={64}
                className="h-10 sm:h-14 w-auto object-contain"
                priority
              />
            </Link>

            {/* Right Side */}
            <div className="flex items-center gap-3 sm:gap-6">
              <div className="hidden md:flex items-center gap-2 text-white/80 text-sm">
                <span>OR CALL US</span>
                <span className="text-white/40">:</span>
                <a href="tel:+918608604817" className="text-white font-semibold hover:text-lime transition-colors">
                  +91 860 860 4817
                </a>
              </div>
              <a
                href="https://wa.me/918608604817"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-lime flex items-center justify-center hover:bg-lime-light transition-colors"
                aria-label="Chat on WhatsApp"
              >
                <WhatsAppIcon />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Full Screen Menu Overlay */}
      <div 
        className={`fixed inset-0 z-40 bg-navy transition-all duration-500 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="h-full flex flex-col pt-20 sm:pt-24">
          {/* Navigation Links */}
          <nav className="flex-1 flex flex-col justify-center px-6 sm:px-12 lg:px-20">
            <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 max-w-5xl">
              {navItems.map((item, index) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`group flex items-center gap-4 py-3 sm:py-4 transition-all duration-300 ${
                      isOpen ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
                    }`}
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    <span className={`text-2xl sm:text-3xl lg:text-4xl font-bold transition-colors ${
                      isActive ? "text-lime" : "text-white group-hover:text-lime"
                    }`}>
                      {item.label}
                    </span>
                    <div className={`h-px flex-1 max-w-20 transition-all duration-300 ${
                      isActive ? "bg-lime" : "bg-white/20 group-hover:bg-lime/50"
                    }`} />
                  </Link>
                )
              })}
            </div>
          </nav>

          {/* Contact Info */}
          <div className="px-6 sm:px-12 lg:px-20 py-8 sm:py-12 border-t border-white/10">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div className="flex flex-col sm:flex-row gap-6 sm:gap-12">
                <div>
                  <p className="text-white/50 text-xs uppercase tracking-wider mb-2">Call Us</p>
                  <a href="tel:+918608604817" className="text-white font-semibold text-lg hover:text-lime transition-colors">
                    +91 860 860 4817
                  </a>
                </div>
                <div>
                  <p className="text-white/50 text-xs uppercase tracking-wider mb-2">Email Us</p>
                  <a href="mailto:business@nanoquinn.com" className="text-white font-semibold text-lg hover:text-lime transition-colors">
                    business@nanoquinn.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <a
                  href="https://www.linkedin.com/company/nanoquinn/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-lime hover:border-lime hover:text-navy transition-all"
                  aria-label="LinkedIn"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a
                  href="https://www.youtube.com/UCA6Dd3NUf_6Ak19HrwxoXsA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-lime hover:border-lime hover:text-navy transition-all"
                  aria-label="YouTube"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
