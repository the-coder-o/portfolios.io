'use client'

import React from 'react'
import { Bookmark } from 'lucide-react'

import { useGetUserFavorites } from '@/modules/profile/hooks/useGetUserFavorites'
import { PortfolioCardLoading } from '@/components/loading/portfolios-loading'
import { PortfolioCard } from '@/components/cards/portfolio-card'

export const FavoritesView = () => {
  const { data, isPending } = useGetUserFavorites()

  if (isPending) {
    return (
      <div className={'container'}>
        <div className={'mb-[100px] mt-5 grid grid-cols-4 gap-3 max-lg:grid-cols-2 max-lg:gap-3 max-sm:grid-cols-1'}>
          {Array.from({ length: 4 }).map((_, index) => (
            <PortfolioCardLoading key={index} isPending={isPending} />
          ))}
        </div>
      </div>
    )
  }

  if (data.length === 0) {
    return (
      <div className="container">
        <div className="mb-10 mt-5 bg-black max-md:mb-[100px]">
          <div className="rounded-xl border border-dashed border-border p-8 text-center">
            <div className="mb-4 flex justify-center">
              <div className="h-12 w-12">
                <Bookmark className="h-12 w-12 text-muted-foreground" />
              </div>
            </div>
            <h3 className="mb-2 text-2xl font-semibold">No Favorite Portfolios Yet</h3>
            <p className="mx-auto mb-6 max-w-sm text-muted-foreground">You don&apos;t have any favorite portfolios yet! Start exploring and add the ones you love to easily keep track of your top picks.</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="container">
      <div className="mb-[100px] mt-5 grid grid-cols-4 gap-3 max-lg:grid-cols-2 max-lg:gap-3 max-sm:grid-cols-1">{data?.reverse()?.map((portfolio) => <PortfolioCard key={portfolio._id} portfolio={portfolio} />)}</div>
    </div>
  )
}
