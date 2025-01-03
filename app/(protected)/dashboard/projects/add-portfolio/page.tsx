'use client'

import { CreatePortfolioView } from '@/modules/dashboard/pages/create-portfolio-view'
import PageTitle from '@/components/page-title'

const Page = () => {
  return (
    <>
      <PageTitle title="Create Portfolio" />
      <CreatePortfolioView />
    </>
  )
}

export default Page
