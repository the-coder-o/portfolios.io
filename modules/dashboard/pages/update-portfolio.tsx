import React from 'react'
import { usePathname } from 'next/navigation'

import { PortfolioList } from '@/modules/dashboard/types/portfolios-list'
import { UpdatePortfolioForm } from '@/modules/dashboard/components/forms/update-portfolio'
import { formatToSlug } from '@/lib/format-to-slug'

interface Props {
  data: PortfolioList[]
}

export const UpdatePortfolioView = ({ data }: Props) => {
  const pathname = usePathname()
  const portfolioSlug = pathname.split('/')[3]

  const portfolio = data?.find((item) => formatToSlug(item.name) === portfolioSlug)

  return (
    <section>
      <UpdatePortfolioForm portfolio={portfolio} />
    </section>
  )
}
