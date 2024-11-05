import React from 'react'

import { PortfolioCard } from '@/components/cards/portfolio-card'

export const FavoritesView = () => {
  return (
    <div className="container">
      <div className="my-10">
        <div className="grid grid-cols-4 gap-3 max-lg:grid-cols-2 max-lg:gap-3 max-sm:grid-cols-1">
          {cardData.map((card, index) => (
            <PortfolioCard key={index} {...card} />
          ))}
        </div>
      </div>
    </div>
  )
}

const cardData = Array(3).fill({
  title: 'Hero Sections',
  description: 'A collection of hero sections that are modern and stand out',
  priceTag: 'Free',
  imageUrl: 'https://www.portfolioshub.com/_next/image?url=https%3A%2F%2Fspotted-swordfish-236.convex.site%2FgetImage%3FstorageId%3Dkg2f3v613gp8nt71f8jmpf1z7x6zkgry&w=640&q=75',
  badges: ['Developer', 'Designer'],
  link: '/portfolios/sws',
})
