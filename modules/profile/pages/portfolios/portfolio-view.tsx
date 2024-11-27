'use client'

import React from 'react'
import Link from 'next/link'

import { useGetUserPortfolio } from '@/modules/profile/hooks/useGetUserPortfolios'
import { PortfolioCardLoading } from '@/components/loading/portfolios-loading'
import { PortfolioCard } from '@/components/cards/portfolio-card'

export const PortfolioView = () => {
  const { data, isPending } = useGetUserPortfolio()

  if (isPending) {
    return (
      <div className={'container'}>
        <div className={'mb-10 mt-5 grid grid-cols-4 gap-3 max-lg:grid-cols-2 max-lg:gap-3 max-sm:grid-cols-1'}>
          {Array.from({ length: 4 }).map((_, index) => (
            <PortfolioCardLoading key={index} isPending={isPending} />
          ))}
        </div>
      </div>
    )
  }

  if (data.length === 0) {
    return (
      <div className={'container'}>
        <div className="mb-10 mt-5 bg-black max-md:mb-[100px]">
          <div className="rounded-xl border border-dashed border-border p-8 text-center">
            <div className="mb-4 flex justify-center"></div>
            <h3 className="mb-2 text-2xl font-semibold">Create your first portfolio</h3>
            <p className="mx-auto mb-6 max-w-sm text-muted-foreground">Show off your best work. Get feedback, likes and be a part of a growing community.</p>
            <Link href="/dashboard/portfolios/all-portfolios" className="inline-flex items-center justify-center rounded-xl bg-primary px-8 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90">
              Create portfolio
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="container">
      <div className="mb-10 mt-5 grid grid-cols-4 gap-3 max-lg:grid-cols-2 max-lg:gap-3 max-sm:grid-cols-1">{data?.reverse()?.map((portfolio) => <PortfolioCard key={portfolio._id} portfolio={portfolio} />)}</div>
    </div>
  )
}
