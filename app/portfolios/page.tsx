import React from 'react'

import PageTitle from '@/components/page-title'
import { PortfoliView } from '@/modules/portfolios/pages/portfolio-view'

const Page = () => {
  return (
    <>
      <PageTitle title="Portfolios" />
      <PortfoliView />
    </>
  )
}

export default Page
