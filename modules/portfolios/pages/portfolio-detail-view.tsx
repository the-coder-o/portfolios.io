'use client'

import React from 'react'
import { usePathname } from 'next/navigation'

import { useGetUsersPortfolios } from '@/modules/portfolios/hooks/useGetUsersPortfolios'
import { PortfolioDetailSkeleton } from '@/modules/portfolios/components/portfolio-detail-skeleton'
import { NotFoundDetailMessage } from '@/modules/portfolios/components/detail-sections/not-found-detail-message'
import { HeroDetailSection } from '@/modules/portfolios/components/detail-sections/hero-detail-section'
import { HeaderDetailSection } from '@/modules/portfolios/components/detail-sections/header-detail-section'
import { FooterDetailSection } from '@/modules/portfolios/components/detail-sections/footer-detail-section'
import { formatToSlug } from '@/lib/format-to-slug'

export const PortfolioDetailView = () => {
  const pathname = usePathname()
  const { data, isPending } = useGetUsersPortfolios()

  const portfolioSlug = pathname.split('/')[2]
  const portfolio = data?.find((item) => formatToSlug(item.name) === portfolioSlug) || null

  if (isPending) {
    return <PortfolioDetailSkeleton />
  }

  if (!portfolio) {
    return <NotFoundDetailMessage />
  }

  return (
    <section className="container">
      <div className="mb-[150px] mt-[160px] space-y-8">
        <HeaderDetailSection portfolio={portfolio} />
        <HeroDetailSection portfolio={portfolio} />
        <FooterDetailSection portfolio={portfolio} data={data} />
      </div>
    </section>
  )
}
