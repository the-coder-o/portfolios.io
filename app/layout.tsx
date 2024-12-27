import React from 'react'
import { Metadata } from 'next'

import { MobileHeader } from '@/sections/header/mobile-header'
import { Header } from '@/sections/header/header'
import { Footer } from '@/sections/footer/footer'
import { ClientProviders, ScrollToTop, ThemeProvider } from '@/components/providers'

import './globals.css'

const baseUrl = 'https://www.portfoliosworld.com'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: 'PortfoliosWorld - Make Your Portfolio Look 10x Better | Professional Portfolio Builder',
  description: 'Create exceptional portfolio designs with our curated collection of 179+ templates. Stand out in any industry with professionally crafted portfolio designs that highlight your unique skills and creativity. Trusted by 500+ satisfied creators.',
  openGraph: {
    title: 'PortfoliosWorld - Make Your Portfolio Look 10x Better | Professional Portfolio Builder',
    description: 'Create exceptional portfolio designs with our curated collection of 179+ templates. Stand out in any industry with professionally crafted portfolio designs. Unlock your potential and showcase your work like never before.',
    url: baseUrl,
    siteName: 'PortfoliosWorld',
    images: [
      {
        url: 'https://i.ibb.co/NZvCpgb/Screenshot-2024-12-23-104850.png',
        width: 1200,
        height: 630,
        alt: 'PortfoliosWorld - Professional Portfolio Builder',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PortfoliosWorld - Make Your Portfolio Look 10x Better | Professional Portfolio Builder',
    description: 'Create exceptional portfolio designs with our curated collection of 179+ templates. Stand out in any industry. Trusted by 500+ satisfied creators.',
    images: ['https://i.ibb.co/NZvCpgb/Screenshot-2024-12-23-104850.png'],
    creator: '@portfoliosworld',
    site: '@portfoliosworld',
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
  authors: [{ name: 'PortfoliosWorld Team', url: 'https://www.portfoliosworld.com/about-us' }],
  creator: 'PortfoliosWorld Team',
  publisher: 'PortfoliosWorld Inc.',
  alternates: {
    canonical: 'https://www.portfoliosworld.com',
    languages: {
      'en-US': 'https://www.portfoliosworld.com',
    },
  },
  icons: {
    icon: ['/favicon.ico?v=4'],
    apple: [{ url: 'public/favicon/apple-touch-icon.png', sizes: '180x180' }],
    other: [{ rel: 'mask-icon', url: '/mask-icon.svg', color: '#000000' }],
  },
  manifest: '/site.webmanifest',
  verification: {
    google: 'google30ea3429ca7e0ad2',
  },
  category: 'technology',
  classification: 'Portfolio Builder, Resume Creator',
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    telephone: false,
  },
  applicationName: 'PortfoliosWorld',
  generator: 'Next.js',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="robots" content="index, follow" />
        <meta name="google-site-verification" content="c0Nfbo-a10LzJzVERkuuwwPY_dIBZy6i9RJBzFo6H_M" />
        <meta property="og:title" content="PortfoliosWorld - Make Your Portfolio Look 10x Better" />
        <meta property="og:description" content="Create exceptional portfolio designs with our curated collection of 179+ templates." />
        <meta property="og:image" content="https://i.ibb.co/NZvCpgb/Screenshot-2024-12-23-104850.png" />
        <meta property="og:url" content="https://www.portfoliosworld.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="PortfoliosWorld - Professional Portfolio Builder" />
        <meta name="twitter:description" content="Stand out in any industry with professionally crafted portfolio designs." />
        <meta name="twitter:image" content="https://i.ibb.co/NZvCpgb/Screenshot-2024-12-23-104850.png" />
        <script src="//code.tidio.co/sldxatrjh47wqvgqneqf4hird0jlfis0.js" async></script>
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
