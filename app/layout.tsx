import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Header } from '@/components/header'
import './globals.css'

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: 'NanoQuinn | Asset Protection as a Service',
  description: 'The world\'s first ESG & EHS-driven APaaS ecosystem — eliminating chemicals, reducing maintenance costs by up to 80%, and preserving assets in "as-new" condition.',
  generator: 'v0.app',
  icons: {
    icon: [
      { url: '/images/nanoquinn-logo.png', type: 'image/png' },
    ],
    apple: '/images/nanoquinn-logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${inter.className} ${inter.variable} font-sans antialiased`}>
        <Header />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
