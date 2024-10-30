import Link from 'next/link'
import React from 'react'

import { Card } from '@/components/card'

import { HeroSection } from '../ui/hero'

export const HomeView = () => {
  return (
    <div className="container">
      <div className="mb-[160px]">
        <HeroSection />
      </div>
      <div className="mb-[160px]">
        <div className="mb-5 flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <h2 className="text-base font-bold text-purple-500 md:text-lg">Best Portfolios</h2>
            <p className="relative z-20 w-full text-left text-sm text-neutral-600 dark:text-neutral-400 max-md:hidden">Here are some templates that you can use to get started, both paid and free.</p>
          </div>
          <div>
            <Link href="/portfolios" className="group relative z-20 flex h-11 w-full cursor-pointer items-center justify-center rounded-xl bg-black px-5 py-2 text-center text-sm font-semibold text-white no-underline transition duration-200 dark:bg-white dark:text-black sm:w-52">
              View all Portfolios
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-9 max-lg:grid-cols-2 max-lg:gap-3 max-sm:grid-cols-1">
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
