'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Home, PlusCircle, BriefcaseBusiness, FileUser, MessageCircle } from 'lucide-react'

import { cn } from '@/lib/utils'
import { useIsAuth } from '@/hooks/use-isAuth'

export const MobileHeader = () => {
  const pathname = usePathname()
  const isAuth = useIsAuth()

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 hidden max-md:block">
      <div className="bg-blur-baseline border-border-subtlest-tertiary grid w-full auto-cols-fr grid-flow-col items-center justify-between border-t bg-background/80 shadow-[0_4px_30px_rgba(0,0,0.1)] backdrop-blur-[2.5rem]">
        <nav className="flex items-center justify-around p-2">
          <Link href="/" className={cn('flex flex-col items-center gap-1 p-2 text-sm transition-colors', pathname === '/' ? 'text-foreground' : 'text-muted-foreground')}>
            <Home className="h-5 w-5" />
            <span className="text-xs">Home</span>
          </Link>
          <Link href="/portfolios" className={cn('flex flex-col items-center gap-1 p-2 text-sm transition-colors', pathname === '/portfolios' ? 'text-foreground' : 'text-muted-foreground')}>
            <BriefcaseBusiness className="h-5 w-5" />
            <span className="text-xs">Portfolios</span>
          </Link>
          <Link href={isAuth ? '/dashboard/portfolios/all-portfolios' : '/sign-in'} className="flex flex-col items-center gap-1 p-2 text-sm">
            <PlusCircle className="h-6 w-6" />
            <span className="text-xs">Create</span>
          </Link>
          <Link href="/rezume" className={cn('flex flex-col items-center gap-1 p-2 text-sm transition-colors', pathname === '/rezume' ? 'text-foreground' : 'text-muted-foreground')}>
            <FileUser className="h-5 w-5" />
            <span className="text-xs">Rezume</span>
          </Link>
          <Link href="#" className={cn('flex flex-col items-center gap-1 p-2 text-sm transition-colors', pathname === '/squads' ? 'text-foreground' : 'text-muted-foreground')}>
            <MessageCircle className="h-5 w-5" />
            <span className="text-xs">Feedback</span>
          </Link>
        </nav>
      </div>
    </div>
  )
}
