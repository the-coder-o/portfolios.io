import React from 'react'

import { PortfolioView } from '@/modules/portfolios/pages/portfolio-view'
import PageTitle from '@/components/page-title'

const Page = () => {
  return (
    <>
      <PageTitle title="Portfolios" />
      <PortfolioView />
    </>
  )
}

export default Page
