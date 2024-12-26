import React from 'react'
import Link from 'next/link'

export const AuthGlobalFooter = () => {
  return (
    <div className="absolute bottom-0 z-20 flex w-full flex-wrap items-center justify-center gap-4 p-6 text-sm text-white/60 max-md:hidden">
      <div>© 2024 www.portfoliosworld.com</div>
      <div className="flex gap-4">
        <Link href="/portfolios" className="hover:text-white">
          Portfolios
        </Link>
        <Link href="/rezume" className="hover:text-white">
          Resume
        </Link>
        <Link href="#" className="hover:text-white">
          Term of Policy
        </Link>
        <Link href="#" className="hover:text-white">
          Cookies
        </Link>
        <Link href="/timeline" className="hover:text-white">
          Timeline
        </Link>
      </div>
    </div>
  )
}
