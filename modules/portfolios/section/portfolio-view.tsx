import React from 'react'

import { Cover } from '@/components/animation/cover'
import { PlaceholdersAndVanishInput } from '@/components/animation/placeholders-and-vanish-input'
import { Spotlight } from '@/components/animation/spotlight'
import { Card } from '@/components/card'

import { Categories } from '../components/categories'

export const PortfoliView = () => {
  const placeholders = ['Explore the top portfolio templates in my project.', 'Discover the best designs to showcase your work.', 'Create a stunning portfolio with ease.', 'Find your perfect portfolio template here.', 'Build your portfolio using top-rated designs.']

  return (
    <>
      <Spotlight />
      <div className="container">
        <div className="mb-[150px] mt-[120px] max-md:mt-[50px]">
          <div className="relative mb-[180px] flex flex-col overflow-hidden max-sm:mb-10 sm:items-center sm:text-center">
            <div className="flex flex-col items-center justify-center gap-5">
              <h1 className="relative z-20 max-w-[700px] bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 bg-clip-text text-center text-4xl font-semibold text-transparent dark:from-neutral-800 dark:via-white dark:to-white max-sm:text-start md:text-4xl lg:text-7xl">
                The best resources from <Cover>Portfolios.io</Cover>
              </h1>
              <p className="relative z-20 max-w-4xl text-center text-base font-normal text-neutral-600 dark:text-neutral-200 max-sm:text-start md:text-[19px]">
                Browse our curated collection of 315+ exceptional designs to help you create your best portfolio yet. Explore a wide range of professionally crafted templates designed to highlight your work and personal brand.
              </p>
              <PlaceholdersAndVanishInput placeholders={placeholders} />
            </div>
          </div>
          <div>
            <Categories />
            <div className="grid grid-cols-3 gap-9 max-lg:grid-cols-2 max-lg:gap-3 max-sm:grid-cols-1">
              {cardData.map((card, index) => (
                <Card key={index} {...card} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

const cardData = Array(12).fill({
  title: 'Hero Sections',
  description: 'A collection of hero sections that are modern and stand out',
  priceTag: 'Free',
  imageUrl: 'https://www.portfolioshub.com/_next/image?url=https%3A%2F%2Fspotted-swordfish-236.convex.site%2FgetImage%3FstorageId%3Dkg2f3v613gp8nt71f8jmpf1z7x6zkgry&w=640&q=75',
  badges: ['Developer', 'Designer'],
  link: '/portfolios/sws',
})
