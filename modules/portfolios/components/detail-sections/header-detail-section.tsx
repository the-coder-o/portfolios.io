'use client'

import { toast } from 'sonner'
import React, { useCallback, useState } from 'react'
import Link from 'next/link'
import { Bookmark, BookmarkCheck, Eye, Loader } from 'lucide-react'

import { useAddFavorite } from '@/modules/portfolios/hooks/useAddFavorite'
import { cn } from '@/lib/utils'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { BreadcrumbComponent } from '@/components/breadcrumb'

interface Portfolio {
  _id: string
  name: string
  github_link: string
  live_demo?: string
  user: {
    name: string
    avatar: string
  }
}

interface HeaderDetailSectionProps {
  portfolio: Portfolio
  initialSavedState?: boolean
}

export const HeaderDetailSection = ({ portfolio, initialSavedState = false }: HeaderDetailSectionProps) => {
  const [isSaved, setIsSaved] = useState(initialSavedState)
  const { triggerAddFavorite, isPending } = useAddFavorite(portfolio._id)

  const handleClick = useCallback(() => {
    const newSavedState = !isSaved
    setIsSaved(newSavedState)

    try {
      triggerAddFavorite()
      toast(newSavedState ? 'Saved to favorites' : 'Removed from favorites', {
        description: newSavedState ? 'This portfolio has been added to your favorites.' : 'This portfolio has been removed from your favorites.',
      })
    } catch (error: any) {
      setIsSaved(!newSavedState)
      toast.error(`Failed to update favorite status ${error}`, {
        description: 'Please try again.',
      })
    }
  }, [isSaved, portfolio._id, triggerAddFavorite, toast])

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
          <Button variant="outline" size="icon" className={cn('rounded-xl transition-colors duration-200', isSaved && 'bg-muted')} onClick={handleClick} aria-label={isSaved ? 'Remove from favorites' : 'Add to favorites'} disabled={isPending}>
            {isPending ? <Loader className="h-5 w-5 animate-spin" /> : isSaved ? <BookmarkCheck className="h-5 w-5" /> : <Bookmark className="h-5 w-5" />}
          </Button>
        </div>
      </div>
      <Separator />
    </section>
  )
}
