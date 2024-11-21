import React from 'react'

import { MobileHeader } from '@/sections/mobile-header'
import { Header } from '@/sections/header/header'
import { Footer } from '@/sections/footer/footer'
import { ClientProviders, ScrollToTop, ThemeProvider } from '@/components/providers'

import './globals.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
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
