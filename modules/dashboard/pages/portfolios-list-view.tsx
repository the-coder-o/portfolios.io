'use client'

import { useGetPortfoliosList } from '@/modules/dashboard/hooks/useGetPortfoliosList'
import { PortfolioTable } from '@/modules/dashboard/components/portfolios-list-card'
import { PortfolioSkeleton } from '@/modules/dashboard/components/portfolios-card-skleton'
import { EmptyPortfolioState } from '@/modules/dashboard/components/empty-portfolio-state'

export const PortfoliosListView = () => {
  const { data, isPending } = useGetPortfoliosList()

  if (isPending) {
    return (
      <div className="mb-5 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <PortfolioSkeleton key={i} />
        ))}
      </div>
    )
  }

  if (!data || data.length === 0) {
    return <EmptyPortfolioState />
  }

  return (
    <div className="mb-5">
      <PortfolioTable portfolios={data} />
    </div>
  )
}
