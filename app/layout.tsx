import { MobileHeader } from '@/sections/mobile-header'
import { Header } from '@/sections/header/header'
import { Footer } from '@/sections/footer/footer'
import { ClientProviders, ScrollToTop, ThemeProvider } from '@/components/providers'

import './globals.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="dark:bg-[#000]">
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
