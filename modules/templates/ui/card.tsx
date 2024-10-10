import { ExternalLink, HeartIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

export const TemplateCardSection = () => {
  return (
    <>
      <div className="grid grid-cols-3 gap-9 max-lg:grid-cols-2 max-lg:gap-3 max-sm:grid-cols-1">
        {cardData.map((card, index) => (
          <Link key={index} className="group h-full overflow-hidden rounded-3xl border border-gray-200 bg-gray-100 antialiased dark:border-neutral-800 dark:bg-neutral-900" href="">
            <div className="relative overflow-hidden rounded-2xl transition duration-200 group-hover:shadow-xl">
              <Image alt="Component Thumbnail" loading="lazy" width="720" height="500" decoding="async" className="aspect-video h-[14rem] rounded-2xl bg-cover object-cover object-top blur-0 transition duration-300 group-hover:scale-105" src={card.imageUrl} style={{ color: 'transparent' }} />
            </div>
            <div className="mt-4 flex flex-col items-start p-3">
              <div className="flex w-full justify-between">
                <div className="mb-2 flex items-center">
                  <p className="text-base font-medium text-neutral-700 dark:text-neutral-100">{card.title}</p>
                </div>
                <div className="flex h-[22px] w-[60px] items-center justify-center rounded-full border border-transparent bg-primary text-sm font-semibold text-foreground transition-colors hover:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 dark:border-green-300 dark:bg-green-700">
                  {card.priceTag}
                </div>
              </div>
              <p className="mt-2 max-w-xs text-sm font-normal text-neutral-500 dark:text-neutral-500">{card.description}</p>
              <div className="mt-4 flex w-full items-center justify-between">
                <div className="flex flex-wrap gap-1">
                  {card.badges.map((badge: string, badgeIndex: number) => (
                    <Badge key={badgeIndex} variant="outline">
                      {badge}
                    </Badge>
                  ))}
                </div>
                <div className="flex items-center">
                  <Button variant="ghost" className="h-7 w-7" size="icon">
                    <HeartIcon className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" className="h-7 w-7" size="icon">
                    <ExternalLink className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}

const cardData = Array(9).fill({
  title: 'Hero Sections',
  description: 'A collection of hero sections that are modern and stand out',
  priceTag: 'Free',
  imageUrl: 'https://www.portfolioshub.com/_next/image?url=https%3A%2F%2Fspotted-swordfish-236.convex.site%2FgetImage%3FstorageId%3Dkg2f3v613gp8nt71f8jmpf1z7x6zkgry&w=640&q=75',
  badges: ['Developer', 'Designer'],
})
