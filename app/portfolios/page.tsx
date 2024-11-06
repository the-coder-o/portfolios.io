import React from 'react'

import { PortfoliView } from '@/modules/portfolios/pages/portfolio-view'
import PageTitle from '@/components/page-title'

const Page = () => {
  return (
    <>
      <PageTitle title="Portfolios" />
      <PortfoliView />
    </>
  )
}

export default Page
