'use client'

import { Clock, Menu, Sparkle } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { FeedbackModal } from '@/components/modals/feedback-modal'
import { Searchmodal } from '@/components/modals/search-modal'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { cn } from '@/lib/utils'

export const MiniHeader = () => {
  const route = usePathname()

  return (
    <div className="flex flex-1 items-center justify-end gap-2 sm:gap-2 md:justify-end">
      <div className="max-xl:hidden">
        <Searchmodal />
      </div>
      <div className="max-md:hidden">
        <FeedbackModal />
      </div>
      <Link href="/sign-in" className="group relative z-20 hidden h-10 cursor-pointer items-center justify-center space-x-2 rounded-xl bg-black p-px px-8 py-2 text-center text-sm font-semibold text-white no-underline transition duration-200 dark:bg-white dark:text-black sm:flex">
        Login
      </Link>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="sm:hidden">
            <Menu className="h-8 w-8" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="flex w-[300px] flex-col justify-between sm:w-[400px]">
          <nav className="flex flex-col gap-4">
            <Link href={'/portfolios'} className={cn('text-foreground/60 transition-colors hover:text-foreground/80 dark:hover:text-white', route === '/portfolios' ? 'dark:text-white' : 'dark:text-foreground/60')}>
              Portfolios
            </Link>
            <Link href={'/rezume'} className={cn('text-foreground/60 transition-colors hover:text-foreground/80 dark:hover:text-white', route === '/rezume' ? 'dark:text-white' : 'dark:text-foreground/60')}>
              Rezume
              <Badge className="ml-2 inline-flex h-[20px] items-center justify-center gap-1 rounded-lg px-1 dark:border-green-300 dark:bg-green-700 dark:text-white">
                <Sparkle size={12} /> New
              </Badge>
            </Link>
            <Link href={'#'} className={cn('text-foreground/60 transition-colors hover:text-foreground/80 dark:hover:text-white', route === '/templates' ? 'dark:text-white' : 'dark:text-foreground/60')}>
              Templates
              <Badge className="ml-2 inline-flex h-[20px] items-center justify-center gap-1 rounded-lg px-1 dark:border-green-300 dark:bg-green-700 dark:text-white">
                <Clock size={12} /> Soon
              </Badge>
            </Link>
          </nav>
          <div className="flex flex-col gap-3">
            <Searchmodal />
            <FeedbackModal />
            <Link href="/sign-in" className="group relative z-20 flex h-10 cursor-pointer items-center justify-center space-x-2 rounded-xl bg-black p-px px-8 py-2 text-center text-sm font-semibold text-white no-underline transition duration-200 dark:bg-white dark:text-black">
              Login
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}
