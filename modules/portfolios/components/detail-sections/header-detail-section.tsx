import React from 'react'
import Link from 'next/link'
import { Bookmark, Eye, Heart } from 'lucide-react'

import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { BreadcrumbComponent } from '@/components/breadcrumb'

export const HeaderDetailSection = ({ portfolio }: any) => {
  return (
    <section className={'space-y-8'}>
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
    </section>
  )
}
