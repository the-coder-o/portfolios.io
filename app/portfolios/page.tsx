import React from 'react'

import PageTitle from '@/components/page-title'
import { PortfoliView } from '@/modules/portfolios/section/portfolio-view'

const Page = () => {
  return (
    <>
      <PageTitle title="Portfolios" />
      <PortfoliView />
    </>
  )
}

export default Page
