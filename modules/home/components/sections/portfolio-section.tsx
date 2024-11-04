import Link from 'next/link'
import React from 'react'

import { portfoliosData } from '@/.mock/portfolios.data'
import { Card } from '@/components/cards/portfolio-card'

export const PortfolioSection = () => {
  return (
    <div className="mb-[160px]">
      <div className="mb-5 flex items-center justify-between">
        <div className="flex flex-col gap-1">
          <h2 className="text-base font-bold text-purple-500 md:text-lg">Best Portfolios</h2>
          <p className="relative z-20 w-full text-left text-sm text-neutral-600 dark:text-neutral-400 max-md:hidden">Here are some portfolios that you can use to get started.</p>
        </div>
        <div>
          <Link href="/portfolios" className="hidden text-white underline max-md:block">
            View all Portfolios
          </Link>
          <Link href="/portfolios" className="group relative z-20 flex h-11 w-full cursor-pointer items-center justify-center rounded-xl bg-black px-5 py-2 text-center text-sm font-semibold text-white no-underline transition duration-200 dark:bg-white dark:text-black max-md:hidden sm:w-52">
            View all Portfolios
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-3 max-lg:grid-cols-2 max-lg:gap-3 max-sm:grid-cols-1">
        {portfoliosData.slice(0, 9).map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  )
}
