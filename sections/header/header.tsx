'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Clock, Sparkle } from 'lucide-react'

import { cn } from '@/lib/utils'
import { useIsAuth } from '@/hooks/use-isAuth'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ProfileMenu } from '@/components/profile-menu'
import { FeedbackModal } from '@/components/modals/feedback-modal'
import { Logo } from '@/components/logo/logo'
import CountdownTimer from '@/components/down-timer'

export const Header = () => {
  const route = usePathname()
  const isAuthUser = useIsAuth()

  const launchDate = new Date('2024-12-11T00:00:00')

  const isHidden = route === '/sign-in' || route === '/sign-up' || route.startsWith('/dashboard') || route === '/onboarding'

  return (
    <div className="!fixed left-0 right-0 top-0 z-50 bg-black/90 backdrop-blur-lg">
      <div className={cn(isHidden ? '!fixed left-0 right-0 top-0 z-50 hidden' : 'block')}>
        <div className="w-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 px-4 py-0.5 text-center font-sans text-sm font-medium tracking-tight text-white">
          Our new website is coming soon. 😍
          <CountdownTimer targetDate={launchDate} />
        </div>
      </div>
      <div className={cn(isHidden ? 'hidden' : 'block')}>
        <header className="container">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-10">
              <Logo />
              <nav className="flex items-center gap-7 max-lg:hidden">
                <Link href={'/portfolios'} prefetch={false} className={cn('flex items-center gap-1.5 space-x-1 text-foreground/60 transition-colors hover:text-foreground/80 dark:hover:text-white', route === '/portfolios' ? 'dark:text-white' : 'dark:text-foreground/60')}>
                  Portfolios
                </Link>
                <Link href={'/rezume'} prefetch={false} className={cn('flex items-center gap-1.5 space-x-1 text-foreground/60 transition-colors hover:text-foreground/80 dark:hover:text-white', route === '/rezume' ? 'dark:text-white' : 'dark:text-foreground/60')}>
                  <Badge className="flex h-[20px] items-center justify-center gap-1 rounded-lg px-1 dark:border-green-300 dark:bg-green-700 dark:text-white">
                    <Sparkle size={12} /> New
                  </Badge>
                  Resume
                </Link>
                <Link href={'#'} prefetch={false} className={cn('flex items-center gap-1.5 space-x-1 text-foreground/60 transition-colors hover:text-foreground/80 dark:hover:text-white', route === '/templates' ? 'dark:text-white' : 'dark:text-foreground/60')}>
                  <Badge className="flex h-[20px] items-center justify-center gap-1 rounded-lg px-1 dark:border-green-300 dark:bg-green-700 dark:text-white">
                    <Clock size={12} /> Soon
                  </Badge>
                  Templates
                </Link>
              </nav>
            </div>
            <div className="flex items-center justify-end gap-2">
              <div className={'flex items-center gap-5 max-sm:hidden'}>
                <Link href="https://github.com/the-coder-o/portfolios.io" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="sm" className="flex items-center gap-1 rounded-xl px-0 hover:bg-transparent">
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    <span className="font-semibold">Github</span>
                  </Button>
                </Link>
                <Link href="https://discord.gg/yourinvite" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="sm" className="flex items-center gap-1 rounded-xl px-0 hover:bg-transparent">
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
                    </svg>
                    <span className="font-semibold">Discord</span>
                  </Button>
                </Link>
                <Link href="https://dly.to/y3ZwSXkMiik" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="sm" className="flex items-center gap-1 rounded-xl px-0 hover:bg-transparent">
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                      <path d="M12 0L1.605 6v12L12 24l10.395-6V6L12 0zm0 16.5c-2.485 0-4.5-2.015-4.5-4.5S9.515 7.5 12 7.5s4.5 2.015 4.5 4.5-2.015 4.5-4.5 4.5z" />
                    </svg>
                    <span className="font-semibold">daily.dev</span>
                  </Button>
                </Link>
              </div>
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
