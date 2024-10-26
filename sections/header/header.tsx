import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

import { Logo } from '@/components/logo/logo'
import { FeedbackModal } from '@/components/modals/feedback-modal'
import { Searchmodal } from '@/components/modals/search-modal'
import { cn } from '@/lib/utils'

export const Header = () => {
  const route = usePathname()

  return (
    <div className="sticky left-0 right-0 top-0 z-50 bg-black/10 backdrop-blur-lg">
      <div className={cn(route === '/sign-in' || route === '/sign-up' ? 'fixed left-0 right-0 top-0 z-50' : '')}>
        <div className="w-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 px-4 py-1 text-left font-sans text-sm font-medium tracking-tight text-white md:text-center">Our new website is coming soon.😍</div>
      </div>
      <div className={cn(route === '/sign-in' || route === '/sign-up' ? 'hidden' : 'block')}>
        <header className="container">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-10">
              <Logo />
              <nav className="flex items-center gap-7">
                <Link href={'/portfolios'} className={cn('hidden space-x-1 text-foreground/60 transition-colors hover:text-foreground/80 sm:flex', route === '/portfolios' ? 'dark:text-white' : 'dark:text-foreground/60')}>
                  Portfolios
                </Link>
                <Link href={'/templates'} className={cn('hidden space-x-1 text-foreground/60 transition-colors hover:text-foreground/80 sm:flex', route === '/templates' ? 'dark:text-white' : 'dark:text-foreground/60')}>
                  Templates
                </Link>
              </nav>
            </div>
            <div className="flex flex-1 items-center justify-end gap-2 sm:gap-2 md:justify-end">
              {/* <ModeToggle /> */}
              <Searchmodal />
              <FeedbackModal />
              <Link href="/sign-in" className="group relative z-20 flex h-10 cursor-pointer items-center justify-center space-x-2 rounded-xl bg-black p-px px-8 py-2 text-center text-sm font-semibold text-white no-underline transition duration-200 dark:bg-white dark:text-black max-[900px]:hidden">
                Login
              </Link>
              {/* <ProfileMenu /> */}
            </div>
          </div>
        </header>
      </div>
    </div>
  )
}
