import React from 'react'
import { CalendarRange, Clock, Eye, Layers } from 'lucide-react'
import Autoplay from 'embla-carousel-autoplay'

import { PortfolioList } from '@/modules/dashboard/types/portfolios-list'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { Card, CardContent } from '@/components/ui/card'
import { PortfolioCard } from '@/components/cards/portfolio-card'

export const FooterDetailSection = ({ portfolio, data }: any) => {
  return (
    <section className={'space-y-8'}>
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
              data.slice(0, 6).map((relatedPortfolio: PortfolioList, index: number) => (
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
    </section>
  )
}
