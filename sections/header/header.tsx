'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Clock, Sparkle } from 'lucide-react'

import { SocialButtons } from '@/sections/header/social-buttons'
import { cn } from '@/lib/utils'
import { useIsAuth } from '@/hooks/use-isAuth'
import { Badge } from '@/components/ui/badge'
import { ProfileMenu } from '@/components/profile-menu'
import { FeedbackModal } from '@/components/modals/feedback-modal'
import { Logo } from '@/components/logo/logo'

export const Header = () => {
  const route = usePathname()
  const isAuthUser = useIsAuth()

  const isHidden = route === '/sign-in' || route === '/sign-up' || route.startsWith('/dashboard') || route === '/onboarding'

  return (
    <div className="!fixed left-0 right-0 top-0 z-50 bg-black/90 backdrop-blur-lg">
      <div className={cn(isHidden ? 'hidden' : 'block')}>
        <header className="container">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-10">
              <Logo />
              <nav className="flex items-center gap-7 max-lg:hidden">
                <Link href={'/portfolios'} prefetch={false} className={cn('flex items-center gap-1.5 space-x-1 text-foreground/60 transition-colors hover:text-foreground/80 dark:hover:text-white', route === '/portfolios' ? 'dark:text-white' : 'dark:text-foreground/60')}>
                  Portfolios
                </Link>
                <Link href={'/projects'} prefetch={false} className={cn('flex items-center gap-1.5 space-x-1 text-foreground/60 transition-colors hover:text-foreground/80 dark:hover:text-white', route === '/templates' ? 'dark:text-white' : 'dark:text-foreground/60')}>
                  <Badge className="flex h-[20px] items-center justify-center gap-1 rounded-lg px-1 dark:border-green-300 dark:bg-green-700 dark:text-white">
                    <Clock size={12} /> Soon
                  </Badge>
                  Projects
                </Link>
                <Link href={'/rezume'} prefetch={false} className={cn('flex items-center gap-1.5 space-x-1 text-foreground/60 transition-colors hover:text-foreground/80 dark:hover:text-white', route === '/rezume' ? 'dark:text-white' : 'dark:text-foreground/60')}>
                  <Badge className="flex h-[20px] items-center justify-center gap-1 rounded-lg px-1 dark:border-green-300 dark:bg-green-700 dark:text-white">
                    <Sparkle size={12} /> New
                  </Badge>
                  Resume
                </Link>
              </nav>
            </div>
            <div className="flex items-center justify-end gap-2">
              <SocialButtons />
              <div className="flex flex-1 items-center justify-end gap-2 sm:gap-2 md:justify-end"></div>
              <div className="max-md:hidden">
                <FeedbackModal />
              </div>
              {isAuthUser ? (
                <ProfileMenu />
              ) : (
                <Link
                  href="/sign-in"
                  prefetch={false}
                  className="group relative z-20 flex h-10 cursor-pointer items-center justify-center space-x-2 rounded-xl bg-black p-px px-8 py-2 text-center text-sm font-semibold text-white no-underline transition duration-200 dark:bg-white dark:text-black max-sm:py-0 sm:flex"
                >
                  Login
                </Link>
              )}
            </div>
          </div>
        </header>
      </div>
    </div>
  )
}
