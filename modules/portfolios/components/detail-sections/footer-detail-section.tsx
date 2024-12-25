import React from 'react'
import { CalendarRange, Clock, Eye, Layers } from 'lucide-react'
import Autoplay from 'embla-carousel-autoplay'

import { usePageViews } from '@/hooks/use-page-views'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { Card, CardContent } from '@/components/ui/card'
import { PortfolioCard } from '@/components/cards/portfolio-card'

interface Category {
  _id: string
  name: string
  description: string
  image: string
}

interface Portfolio {
  _id: string
  name: string
  description: string
  category: Category
  github_link: string
  live_demo: string
  images: string[]
  page: number
  skills: Array<{
    name: string
    logo: string
    category: string
    level: string
  }>
  type: string
  user: {
    _id: string
    name: string
    email: string
  }
}

// interface FooterDetailSectionProps {
//   portfolio: Portfolio
//   data: Portfolio[]
// }

export const FooterDetailSection = ({ portfolio, data }: any) => {
  const views = usePageViews(portfolio._id)

  const relatedProjects = React.useMemo(() => {
    return data.filter((item: any) => item._id !== portfolio._id && item.category.name === portfolio.category.name).slice(0, 8)
  }, [data, portfolio])

  return (
    <section className="space-y-8">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {[
          { icon: CalendarRange, label: 'Posted', value: '36d ago' },
          { icon: Clock, label: 'Updated', value: '36d ago' },
          { icon: Eye, label: 'Views', value: views.toLocaleString() },
          { icon: Layers, label: 'Pages', value: portfolio.page?.toString() || 'N/A' },
        ].map((item, index) => (
          <Card key={index} className="rounded-xl">
            <CardContent className="flex flex-col items-center justify-center p-6">
              <item.icon className="mb-2 h-6 w-6" aria-hidden="true" />
              <p className="text-sm font-medium">{item.label}</p>
              <p className="text-2xl font-bold">{item.value}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      {relatedProjects.length > 0 && (
        <div className="pt-10">
          <div className="mb-3">
            <h3 className="text-xl font-semibold">Related Projects</h3>
            <p className="text-sm text-muted-foreground">Other projects in {portfolio.category.name}</p>
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
              {relatedProjects.map((relatedPortfolio: Portfolio) => (
                <CarouselItem key={relatedPortfolio._id} className="flex items-center md:basis-1/2 lg:basis-1/4">
                  <PortfolioCard portfolio={relatedPortfolio} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="max-md:hidden">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </Carousel>
        </div>
      )}
    </section>
  )
}
