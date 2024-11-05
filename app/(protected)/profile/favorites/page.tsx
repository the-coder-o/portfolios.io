import PageTitle from '@/components/page-title'
import { FavoritesView } from '@/modules/profile/pages/favorites/favorites-view'

const Page = () => {
  return (
    <>
      <PageTitle title="Profile-Favorites" />
      <FavoritesView />
    </>
  )
}

export default Page
