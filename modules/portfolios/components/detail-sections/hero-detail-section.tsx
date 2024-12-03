import React from 'react'
import Image from 'next/image'
import Autoplay from 'embla-carousel-autoplay'

import { Skill } from '@/modules/dashboard/types/portfolios-list'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export const HeroDetailSection = ({ portfolio }: any) => {
  return (
    <section className={'space-y-8'}>
      <div className="flex flex-col gap-3">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{portfolio.name}</h1>
          <p className="w-full text-lg text-muted-foreground">{portfolio.description}</p>
        </div>
        {portfolio.skills && portfolio.skills.length > 0 && (
          <div>
            <div className="flex flex-wrap gap-2">
              {portfolio.skills.map((skill: Skill, index: number) => (
                <Badge key={index} variant="secondary" className="flex items-center gap-1 rounded-xl py-1.5 pl-3 pr-2">
                  <Image src={skill.logo} alt={skill.name} width={200} height={200} className="mr-1 !h-4 !w-4" />
                  {skill.name}
                </Badge>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="overflow-hidden rounded-xl">
        {portfolio.images && portfolio.images.length > 0 ? (
          <Carousel
            opts={{
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 2000,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent>
              {portfolio.images.map((image: string, index: number) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card className="overflow-hidden rounded-xl">
                      <CardContent className="aspect-video p-0">
                        <Image src={`https://portfolio.shohjahon1code.uz${image}`} width={2000} height={2000} alt={`${portfolio.name} image ${index + 1}`} className="h-full w-full object-cover object-top" />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        ) : (
          <Image src="/placeholder.svg" width={2000} height={2000} alt={`${portfolio.name}`} className="h-[600px] w-full rounded-xl object-cover max-md:h-full" />
        )}
      </div>
    </section>
  )
}
