'use client'

import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { Bookmark, CalendarRange, Clock, Eye, Heart, Layers } from 'lucide-react'
import Autoplay from 'embla-carousel-autoplay'

import { useGetUsersPortfolios } from '@/modules/portfolios/hooks/useGetUsersPortfolios'
import { PortfolioList } from '@/modules/dashboard/types/portfolios-list'
import { formatToSlug } from '@/lib/format-to-slug'
import { Separator } from '@/components/ui/separator'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { PortfolioCard } from '@/components/cards/portfolio-card'
import { BreadcrumbComponent } from '@/components/breadcrumb'

export const PortfolioDetailView = () => {
  const pathname = usePathname()
  const { data, isPending } = useGetUsersPortfolios()

  const portfolioSlug = pathname.split('/')[2]
  const portfolio = data?.find((item) => formatToSlug(item.name) === portfolioSlug) || null

  if (isPending) {
    return <div>Loading...</div>
  }

  if (!portfolio) {
    return <div>Portfolio not found</div>
  }

  return (
    <div className="container">
      <div className="mb-[150px] mt-[160px] space-y-8">
        <BreadcrumbComponent items={[{ label: 'Home', href: '/' }, { label: 'Portfolios', href: '/portfolios' }, { label: portfolio.name }]} />
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div className="flex items-center gap-4">
            <Avatar className="h-16 w-16 rounded-xl">
              <AvatarImage src={portfolio.user.avatar} alt={portfolio.user.name} />
              <AvatarFallback className="rounded-xl">{portfolio.user.name.slice(0, 2)}</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <h2 className="text-xl font-semibold">Template by {portfolio.user.name}</h2>
              <p className="text-sm text-muted-foreground">Professional Web Designer & Developer</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button asChild>
              <Link href={portfolio.github_link} target="_blank" className="rounded-xl">
                Clone the project
              </Link>
            </Button>
            {portfolio.live_demo && (
              <Button asChild variant="secondary">
                <Link href={portfolio.live_demo} className="rounded-xl">
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
        <div className="flex flex-col gap-3">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{portfolio.name}</h1>
            <p className="max-w-2xl text-lg text-muted-foreground">{portfolio.description}</p>
          </div>
          {portfolio.skills && portfolio.skills.length > 0 && (
            <div>
              <div className="flex flex-wrap gap-2">
                {portfolio.skills.map((skill, index) => (
                  <Badge key={index} variant="secondary" className="flex items-center gap-1 rounded-lg text-sm font-medium">
                    <Image src={skill.logo} alt={skill.name} width={16} height={16} className="mr-1 !h-[15px] !w-[15px] bg-cover object-cover" />
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
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            { icon: CalendarRange, label: 'Posted', value: '36d ago' },
            { icon: Clock, label: 'Updated', value: '36d ago' },
            { icon: Eye, label: 'Views', value: '19.5K+' },
            { icon: Layers, label: 'Pages', value: portfolio.page || 'N/A' },
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
        <div className="pt-10">
          <div className="mb-3">
            <h3 className="text-xl font-semibold">Related Projects</h3>
            <p className="text-sm text-muted-foreground">Other projects you might be interested in</p>
          </div>
          <Carousel
            opts={{
              align: 'start',
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
              {data &&
                data.slice(0, 6).map((relatedPortfolio: PortfolioList, index) => (
                  <React.Fragment key={index}>
                    {portfolio._id !== relatedPortfolio._id && (
                      <CarouselItem className="flex items-center md:basis-1/2 lg:basis-1/4">
                        <PortfolioCard portfolio={relatedPortfolio} />
                      </CarouselItem>
                    )}
                  </React.Fragment>
                ))}
            </CarouselContent>
            <div className="max-md:hidden">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  )
}
