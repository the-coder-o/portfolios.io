import React from 'react'
import { Metadata } from 'next'

import { MobileHeader } from '@/sections/mobile-header'
import { Header } from '@/sections/header/header'
import { Footer } from '@/sections/footer/footer'
import { ClientProviders, ScrollToTop, ThemeProvider } from '@/components/providers'

import './globals.css'

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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="c0Nfbo-a10LzJzVERkuuwwPY_dIBZy6i9RJBzFo6H_M" />
      </head>
      <body className="dark:bg-[#000]">
        <div className="absolute bottom-0 left-0 right-0 top-0 -z-10 bg-white bg-dot-black/[0.2] dark:bg-black dark:bg-dot-white/[0.2]">
          <div className="pointer-events-none absolute inset-0 bottom-0 left-0 right-0 top-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_2%,black)] dark:bg-black" />
        </div>
        <ClientProviders>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
            <ScrollToTop />
            <Header />
            {children}
            <MobileHeader />
            <Footer />
          </ThemeProvider>
        </ClientProviders>
      </body>
    </html>
  )
}
