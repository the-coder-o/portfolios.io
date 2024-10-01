import { Cover } from '@/components/animation/cover'
import { HomeView } from '@/sections'

const Page = () => {
  return (
    <>
      <div className="container">
        <h1 className="relative z-20 mx-auto mt-[90px] max-w-7xl bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 bg-clip-text py-6 text-center text-4xl font-semibold text-transparent dark:from-neutral-800 dark:via-white dark:to-white md:text-4xl lg:text-6xl">
          Best place to find <br /> portfolio <Cover>inspiration.</Cover>
        </h1>
        <HomeView />
      </div>
    </>
  )
}

export default Page
