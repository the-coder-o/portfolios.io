'use client'

import Intercom from '@intercom/messenger-js-sdk'
import localFont from 'next/font/local'
import React, { useEffect } from 'react'

import { ThemeProvider } from '@/components/providers'
import { Footer } from '@/sections/footer/footer'
import { Header } from '@/sections/header/header'

import './globals.css'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})

const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  useEffect(() => {
    Intercom({
      app_id: 'ik3vkbyu',
    })
  }, [])

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased dark:bg-[#000]`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
