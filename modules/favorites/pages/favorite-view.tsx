import React from 'react'

import { FavoriteCardSection } from '../components/card'

export const FavoriteView = () => {
  return (
    <div className="container">
      <div className="mb-[150px] mt-10">
        <div className="mb-5 flex items-center justify-between">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-bold md:text-4xl">Favorites</h1>
          </div>
        </div>
        <FavoriteCardSection />
      </div>
    </div>
  )
}
