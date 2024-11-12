import React from 'react'
import Link from 'next/link'

import { RezumeCard } from '@/components/cards/rezume-card'

import { rezumeData } from '@/.mock/rezume.data'

export const RezumeSection = () => {
  const filteredData = rezumeData.filter((item, index, self) => {
    return index === self.findIndex((i) => i.image === item.image)
  })

  return (
    <div className="mb-[160px]">
      <div className="mb-5 flex items-center justify-between">
        <div className="flex flex-col gap-1">
          <h2 className="text-xl font-bold text-purple-500 md:text-lg">Rezume for developers</h2>
          <p className="relative z-20 w-full text-left text-sm text-neutral-600 dark:text-neutral-400 max-md:hidden">Here are some rezume templates that you can use to get started.</p>
        </div>
        <div>
          <Link href="/rezume" className="hidden text-white underline max-md:block">
            View all Rezume
          </Link>
          <Link href="/rezume" className="group relative z-20 flex h-11 w-full cursor-pointer items-center justify-center rounded-xl bg-black px-5 py-2 text-center text-sm font-medium text-white no-underline transition duration-200 dark:bg-white dark:text-black max-md:hidden sm:w-52">
            View all Rezume
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-3 max-lg:grid-cols-2 max-lg:gap-3 max-sm:grid-cols-1">
        {filteredData.slice(0, 12).map((card) => (
          <RezumeCard key={card.id} {...card} />
        ))}
      </div>
    </div>
  )
}
