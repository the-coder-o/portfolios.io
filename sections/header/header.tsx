import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Clock, Sparkle } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'
import { Logo } from '@/components/logo/logo'

import { MiniHeader } from './mini-header/mini-header'

export const Header = () => {
  const route = usePathname()

  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const targetDate = new Date()
    targetDate.setDate(targetDate.getDate() + 30)

    const updateCountdown = () => {
      const now = new Date()
      const difference = targetDate.getTime() - now.getTime()

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((difference % (1000 * 60)) / 1000)

        setTimeLeft({ days, hours, minutes, seconds })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }

    const timer = setInterval(updateCountdown, 1000)

    updateCountdown()

    return () => clearInterval(timer)
  }, [])

  const isHidden = route === '/sign-in' || route === '/sign-up' || route.startsWith('/dashboard')

  return (
    <div className="sticky left-0 right-0 top-0 z-50 bg-black/10 backdrop-blur-lg">
      <div className={cn(isHidden ? 'fixed left-0 right-0 top-0 z-50 hidden' : 'block')}>
        <div className="w-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 px-4 py-0.5 text-center font-sans text-sm font-medium tracking-tight text-white">
          Our new website is coming soon. 😍
          <span className="ml-2 font-medium">
            {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m remaining
          </span>
        </div>
      </div>
      <div className={cn(isHidden ? 'hidden' : 'block')}>
        <header className="container">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-10">
              <Logo />
              <nav className="flex items-center gap-7 max-lg:hidden">
                <Link href={'/portfolios'} className={cn('flex items-center gap-1.5 space-x-1 text-foreground/60 transition-colors hover:text-foreground/80 dark:hover:text-white', route === '/portfolios' ? 'dark:text-white' : 'dark:text-foreground/60')}>
                  Portfolios
                </Link>
                <Link href={'/rezume'} className={cn('flex items-center gap-1.5 space-x-1 text-foreground/60 transition-colors hover:text-foreground/80 dark:hover:text-white', route === '/rezume' ? 'dark:text-white' : 'dark:text-foreground/60')}>
                  <Badge className="flex h-[20px] items-center justify-center gap-1 rounded-lg px-1 dark:border-green-300 dark:bg-green-700 dark:text-white">
                    <Sparkle size={12} /> New
                  </Badge>
                  Rezume
                </Link>
                <Link href={'#'} className={cn('flex items-center gap-1.5 space-x-1 text-foreground/60 transition-colors hover:text-foreground/80 dark:hover:text-white', route === '/templates' ? 'dark:text-white' : 'dark:text-foreground/60')}>
                  <Badge className="flex h-[20px] items-center justify-center gap-1 rounded-lg px-1 dark:border-green-300 dark:bg-green-700 dark:text-white">
                    <Clock size={12} /> Soon
                  </Badge>
                  Templates
                </Link>
              </nav>
            </div>
            <MiniHeader />
          </div>
        </header>
      </div>
    </div>
  )
}
