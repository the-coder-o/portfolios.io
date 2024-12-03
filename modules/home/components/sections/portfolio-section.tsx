'use client'

import React from 'react'
import Link from 'next/link'

import { useGetUsersPortfolios } from '@/modules/portfolios/hooks/useGetUsersPortfolios'
import { PortfolioCardLoading } from '@/components/loading/portfolios-loading'
import { PortfolioCard } from '@/components/cards/portfolio-card'

export const PortfolioSection = () => {
  const { data, isPending } = useGetUsersPortfolios()

  return (
    <section className="relative mb-[200px] max-md:mb-10">
      <div className="grid grid-cols-4 gap-3 max-lg:grid-cols-2 max-lg:gap-3 max-sm:grid-cols-1">
        {isPending
          ? Array.from({ length: 8 }).map((_, index) => <PortfolioCardLoading isPending={isPending} key={index} />)
          : data
              ?.reverse()
              ?.slice(0, 8)
              ?.map((portfolio) => <PortfolioCard key={portfolio._id} portfolio={portfolio} />)}
      </div>
      <div className="absolute inset-x-0 bottom-5 z-30 h-[400px] bg-gradient-to-t from-white to-transparent dark:from-black"></div>
      <Link
        className="group relative z-40 mx-auto mt-10 flex h-10 w-full cursor-pointer items-center justify-center space-x-2 rounded-xl bg-black p-px px-4 py-2 text-center text-sm font-semibold text-white no-underline transition duration-200 dark:bg-white dark:text-black sm:w-44 md:-mt-0"
        href="/portfolios"
      >
        Show more
      </Link>
    </section>
  )
}
