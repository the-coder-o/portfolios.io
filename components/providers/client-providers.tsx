'use client'

import { Toaster } from 'sonner'
import { useEffect, useState } from 'react'
import { Metadata } from 'next'
import { Cookie, X } from 'lucide-react'
import { Analytics } from '@vercel/analytics/react'
import { QueryClientProvider } from '@tanstack/react-query'

import { queryClient } from '@/services/react-query/query-client'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'PortfoliosIo - Make Your Portfolio Look 10x Better | Professional Portfolio Builder',
  description: 'Create exceptional portfolio designs with our curated collection of 179+ templates. Stand out in any industry with professionally crafted portfolio designs that highlight your unique skills and creativity. Trusted by 500+ satisfied creators.',
  openGraph: {
    title: 'PortfoliosIo - Make Your Portfolio Look 10x Better | Professional Portfolio Builder',
    description: 'Create exceptional portfolio designs with our curated collection of 179+ templates. Stand out in any industry with professionally crafted portfolio designs. Unlock your potential and showcase your work like never before.',
    url: 'https://portfoliosio.vercel.app',
    siteName: 'PortfoliosIo',
    images: [
      {
        url: 'https://github.com/the-coder-o/portfolios.io/raw/main/public/images/portfolios.png',
        width: 1200,
        height: 630,
        alt: 'PortfoliosIo - Professional Portfolio Builder',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PortfoliosIo - Make Your Portfolio Look 10x Better | Professional Portfolio Builder',
    description: 'Create exceptional portfolio designs with our curated collection of 179+ templates. Stand out in any industry. Trusted by 500+ satisfied creators.',
    images: ['https://github.com/the-coder-o/portfolios.io/raw/main/public/images/portfolios.png'],
    creator: '@portfoliosio',
    site: '@portfoliosio',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      'index': true,
      'follow': true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  keywords: [
    'portfolio builder',
    'portfolio templates',
    'professional portfolio',
    'resume builder',
    'portfolio design',
    'career portfolio',
    'online portfolio',
    'creative portfolio',
    'web portfolio',
    'digital resume',
    'personal branding',
    'job application tool',
    'portfolio showcase',
    'portfolio website creator',
    'portfolio optimization',
    'portfolio analytics',
  ],
  authors: [{ name: 'PortfoliosIo Team', url: 'https://portfoliosio.vercel.app/about-us' }],
  creator: 'PortfoliosIo Team',
  publisher: 'PortfoliosIo Inc.',
  alternates: {
    canonical: 'https://portfoliosio.vercel.app',
    languages: {
      'en-US': 'https://portfoliosio.vercel.app',
      'es-ES': 'https://portfoliosio.vercel.app/es',
      'fr-FR': 'https://portfoliosio.vercel.app/fr',
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: [{ url: '/apple-icon.png', sizes: '180x180' }],
    other: [{ rel: 'mask-icon', url: '/mask-icon.svg', color: '#000000' }],
  },
  manifest: '/site.webmanifest',
  verification: {
    google: 'google30ea3429ca7e0ad2',
  },
  category: 'technology',
  classification: 'Portfolio Builder, Resume Creator',
  referrer: 'origin-when-cross-origin',
  colorScheme: 'dark light',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  formatDetection: {
    telephone: false,
  },
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f5f5f5' },
    { media: '(prefers-color-scheme: dark)', color: '#1a1a1a' },
  ],
  appleWebApp: {
    title: 'Portfoliosio',
    statusBarStyle: 'black-translucent',
    startupImage: ['/apple-splash-2048-2732.jpg', '/apple-splash-1668-2224.jpg', '/apple-splash-1536-2048.jpg', '/apple-splash-1125-2436.jpg', '/apple-splash-1242-2208.jpg'],
  },
  applicationName: 'Portfoliosio',
  generator: 'Next.js',
  metadataBase: new URL('https://portfoliosio.vercel.app'),
}

function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const hasAcceptedCookies = localStorage.getItem('cookiesAccepted')
    if (!hasAcceptedCookies) {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookiesAccepted', 'true')
    setIsVisible(false)
  }

  const handleClose = () => {
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <Card className="fixed bottom-0 right-0 z-50 w-full rounded-xl border-t border-[#2a2a2a] bg-[#111] p-4 text-white shadow-lg sm:bottom-4 sm:right-4 sm:w-[300px] sm:rounded-xl sm:border">
      <button onClick={handleClose} className="absolute right-2 top-2 text-gray-400 transition-colors hover:text-white" aria-label="Close">
        <X className="h-4 w-4" />
      </button>
      <div className="flex flex-col items-center gap-3">
        <Cookie className="h-8 w-8" />
        <p className="mb-3 text-center text-sm">Our lawyers advised us to tell you that we use cookies to improve user experience.</p>
        <Button onClick={handleAccept} className="w-full rounded-xl bg-white py-2 text-black hover:bg-gray-200">
          I like cookies
        </Button>
      </div>
    </Card>
  )
}

export function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster position="top-center" />
      {children}
      <CookieConsent />
      <Analytics />
    </QueryClientProvider>
  )
}
