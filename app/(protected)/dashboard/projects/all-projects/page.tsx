import { PortfoliosListView } from '@/modules/dashboard/pages/portfolios-list-view'
import PageTitle from '@/components/page-title'

const Page = () => {
  return (
    <>
      <PageTitle title="All Portfolios" />
      <PortfoliosListView />
    </>
  )
}

export default Page
