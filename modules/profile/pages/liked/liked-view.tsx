import React from 'react'
import { Heart } from 'lucide-react'

export const LikedView = () => {
  return (
    <div className="container">
      <div className="mb-10 mt-5 max-md:mb-[100px]">
        <div className="rounded-xl border border-dashed border-border p-8 text-center">
          <div className="mb-4 flex justify-center">
            <div className="relative h-12 w-12">
              <Heart className="h-12 w-12 text-muted-foreground" />
              <Heart className="absolute bottom-0 right-0 h-8 w-8 text-primary" />
            </div>
          </div>
          <h3 className="mb-2 text-2xl font-semibold">Discover new portfolios</h3>
          <p className="mx-auto mb-6 max-w-sm text-muted-foreground">Explore and like portfolios you haven&apos;t seen yet. Support the community by sharing your appreciation.</p>
        </div>
      </div>
    </div>
  )
}
