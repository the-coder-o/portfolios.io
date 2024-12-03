'use client'

import { useGetPortfoliosList } from '@/modules/dashboard/hooks/useGetPortfoliosList'
import { PortfolioTable } from '@/modules/dashboard/components/portfolios-list-table'

export const PortfoliosListView = () => {
  const { data, isPending } = useGetPortfoliosList()

  return (
    <section className="mb-5">
      <PortfolioTable portfolios={data} isPending={isPending} />
    </section>
  )
}
