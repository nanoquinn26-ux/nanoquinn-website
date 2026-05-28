"use client"

import { useState, useEffect } from "react"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"

const navItems = [
  { label: "APaaS Model", href: "/apaas" },
  { label: "Technology Innovations", href: "/asset-protection" },
  { label: "Sustainability", href: "/esg" },
  { label: "Contact", href: "/contact" },
]

const WhatsAppIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.117 1.526 5.847L0 24l6.345-1.506A11.946 11.946 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.371l-.36-.214-3.724.977.994-3.634-.235-.374A9.818 9.818 0 1112 21.818z" />
  </svg>
)

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-[#E0E0E0]">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/nanoquinn-logo.webp"
              alt="NanoQuinn APaaS Platform"
              width={300}
              height={300}
              className="h-10 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-[13px] font-normal transition-opacity duration-200 hover:opacity-70 ${isActive
                      ? "text-[#3A3A3A]"
                      : "text-[#5A5A5A]"
                    }`}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center">
            <Link
              href="/contact"
              className="px-5 py-2 bg-[#3A3A3A] text-white text-[13px] font-medium rounded-[3px] transition-opacity duration-200 hover:opacity-70"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 transition-opacity duration-200 hover:opacity-70"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5 text-[#3A3A3A]" /> : <Menu className="w-5 h-5 text-[#3A3A3A]" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-6 border-t border-[#E0E0E0] bg-white">
            <nav className="flex flex-col gap-1">
              {navItems.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`text-[15px] font-normal py-3 px-4 transition-opacity duration-200 hover:opacity-70 ${isActive
                        ? "text-[#3A3A3A]"
                        : "text-[#5A5A5A]"
                      }`}
                  >
                    {item.label}
                  </Link>
                )
              })}
              <div className="pt-4 mt-2 border-t border-[#E0E0E0]">
                <Link
                  href="/contact"
                  className="block w-full px-5 py-3 bg-[#3A3A3A] text-white text-[15px] font-medium rounded-[3px] text-center transition-opacity duration-200 hover:opacity-70"
                >
                  Get Started
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
