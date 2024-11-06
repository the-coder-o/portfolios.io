'use client'

import Autoplay from 'embla-carousel-autoplay'
import { Bookmark, CalendarRange, CircleDollarSign, Clock, Eye, Heart, Layers } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import * as React from 'react'

import { BreadcrumbComponent } from '@/components/breadcrumb'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { Separator } from '@/components/ui/separator'
import { formatToSlug } from '@/lib/format-to-slug'

import { portfoliosData } from '@/.mock/portfolios.data'

export const PortfolioDetailView = () => {
  const pathname = usePathname()

  const portfolio: any = portfoliosData.find((item) => formatToSlug(item.title) === pathname.split('/')[2])

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <BreadcrumbComponent items={[{ label: 'Home', href: '/' }, { label: 'Portfolios', href: '/portfolios' }, { label: portfolio?.title }]} />
      <div className="mt-8 space-y-8">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div className="flex items-center gap-4">
            <Avatar className="h-16 w-16 rounded-xl">
              <AvatarImage src={portfolio?.author?.profileImage} alt={portfolio?.author?.name} />
              <AvatarFallback className="rounded-xl">{portfolio?.author?.name?.slice(0, 2)}</AvatarFallback>
            </Avatar>
            <div>
              <h2 className="text-xl font-semibold">Template by {portfolio?.author?.name}</h2>
              <p className="text-sm text-muted-foreground">Professional Web Designer & Developer</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button asChild>
              <Link href={`${portfolio?.singlePageDetails?.githubLink}`} target="_blank" className="rounded-xl">
                Use for Free
                <CircleDollarSign className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            {portfolio?.singlePageDetails?.demoLink && (
              <Button asChild variant="secondary">
                <Link href={`${portfolio?.singlePageDetails?.demoLink}`} className="rounded-xl">
                  Live Preview
                  <Eye className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            )}
            <Button variant="outline" size="icon" className="rounded-xl">
              <Heart className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon" className="rounded-xl">
              <Bookmark className="h-5 w-5" />
            </Button>
          </div>
        </div>
        <Separator />
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{portfolio?.title}</h1>
          <p className="max-w-2xl text-lg text-muted-foreground">{portfolio?.description}</p>
        </div>
        <div className="overflow-hidden rounded-xl">
          {portfolio?.singlePageDetails?.images?.length ? (
            <Carousel
              opts={{
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 3500,
                }),
              ]}
              className="w-full"
            >
              <CarouselContent>
                {portfolio?.singlePageDetails?.images?.map((image: string, index: number) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <Card className="overflow-hidden rounded-xl">
                        <CardContent className="aspect-video p-0">
                          <Image src={image} width={2000} height={2000} alt={`${portfolio?.title} image ${index + 1}`} className="h-full w-full object-cover" />
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
            <Image src={portfolio?.image} width={2000} height={2000} alt={`${portfolio?.title}`} className="h-[600px] w-full rounded-xl object-cover" />
          )}
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            { icon: CalendarRange, label: 'Posted', value: '36d ago' },
            { icon: Clock, label: 'Updated', value: '36d ago' },
            { icon: Eye, label: 'Views', value: '19.5K+' },
            { icon: Layers, label: 'Pages', value: '3+' },
          ].map((item, index) => (
            <Card key={index} className="rounded-xl">
              <CardContent className="flex flex-col items-center justify-center p-6">
                <item.icon className="mb-2 h-6 w-6" />
                <p className="text-sm font-medium">{item.label}</p>
                <p className="text-2xl font-bold">{item.value}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
