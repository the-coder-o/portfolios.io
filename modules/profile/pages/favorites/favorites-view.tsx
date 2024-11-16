import React from 'react'
import { Bookmark } from 'lucide-react'

export const FavoritesView = () => {
  return (
    <div className="container">
      <div className="mb-10 mt-5 max-md:mb-[100px]">
        <div className="rounded-xl border border-dashed border-border p-8 text-center">
          <div className="mb-4 flex justify-center">
            <div className="h-12 w-12">
              <Bookmark className="h-12 w-12 text-muted-foreground" />
            </div>
          </div>
          <h3 className="mb-2 text-2xl font-semibold">No Favorite Portfolios Yet</h3>
          <p className="mx-auto mb-6 max-w-sm text-muted-foreground">You don&apos;t have any favorite portfolios yet! Start exploring and add the ones you love to easily keep track of your top picks.</p>
        </div>
      </div>
    </div>
  )
}
