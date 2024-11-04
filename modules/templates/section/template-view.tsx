import React from 'react'

import { Card } from '@/components/cards/portfolio-card'

export const TemplateView = () => {
  return (
    <div className="container">
      <div className="mb-[150px] mt-10">
        <div className="mb-5 flex flex-col gap-2">
          <h1 className="text-3xl font-bold md:text-4xl">Portfolio Templates</h1>
          <p className="text-muted-foreground">Here are some templates that you can use to get started, both paid and free.</p>
        </div>
        <div className="grid grid-cols-3 gap-3 max-lg:grid-cols-2 max-lg:gap-3 max-sm:grid-cols-1">
          {cardData.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
      </div>
    </div>
  )
}

const cardData = Array(6).fill({
  title: 'Hero Sections',
  description: 'A collection of hero sections that are modern and stand out',
  priceTag: 'Free',
  imageUrl: 'https://www.portfolioshub.com/_next/image?url=https%3A%2F%2Fspotted-swordfish-236.convex.site%2FgetImage%3FstorageId%3Dkg2f3v613gp8nt71f8jmpf1z7x6zkgry&w=640&q=75',
  badges: ['Developer', 'Designer'],
  link: '/portfolios/sws',
})
