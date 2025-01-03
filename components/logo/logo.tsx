import React from 'react'
import Link from 'next/link'

import { cn } from '@/lib/utils'

interface LogoProps {
  className?: string
}

export const Logo = ({ className }: LogoProps) => {
  return (
    <Link href={'/'} className={cn('flex items-center gap-1 text-xl font-bold', className)}>
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256" className="!rotate-90 fill-foreground duration-200 hover:text-muted-foreground">
        <defs>
          <linearGradient id="gradientColor" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6366f1" />
            <stop offset="50%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#ec4899" />
          </linearGradient>
        </defs>
        <path
          d="M0 0 C19.03800596 17.76011241 29.64068332 42.87248532 30.8515625 68.66015625 C31.41432314 96.34924422 20.64737093 121.51193282 1.8515625 141.66015625 C-17.77530733 160.14965918 -43.58956805 170.35555615 -70.53027344 169.63891602 C-96.77299852 168.35339756 -121.52871899 157.24070918 -139.625 138.03125 C-157.33132802 117.13048136 -166.79507051 91.44592661 -164.87475586 64.03808594 C-162.51504902 38.34415669 -150.67353007 13.71580236 -130.8359375 -3.08984375 C-90.46126303 -34.52400497 -38.63214503 -33.09187617 0 0 Z M-131.1484375 71.66015625 C-131.1484375 90.447128 -125.20550108 105.10089792 -112.1484375 118.66015625 C-96.1179739 132.9169411 -79.57355841 136.71363442 -58.77734375 135.85546875 C-42.84727089 134.67195665 -28.11931895 125.62269067 -17.66796875 113.87109375 C-7.20194154 100.58257009 -3.1484375 88.48026567 -3.1484375 71.66015625 C-45.3884375 71.66015625 -87.6284375 71.66015625 -131.1484375 71.66015625 Z"
          fill="url(#gradientColor)"
          transform="translate(195.1484375,56.33984375)"
        ></path>
      </svg>
      <span>
        Portfolios<span className={'!font-[900] text-[#a855f7]'}>World</span>
      </span>
      <div className="relative rounded-sm border border-transparent bg-white px-2 py-0.5 text-xs font-bold text-black shadow-input dark:border-neutral-800 dark:bg-neutral-900 dark:text-white dark:shadow-none">beta</div>
    </Link>
  )
}
