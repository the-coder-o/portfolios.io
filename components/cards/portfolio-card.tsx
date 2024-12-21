import Link from 'next/link'
import Image from 'next/image'
import { Eye } from 'lucide-react'

import { PortfolioList } from '@/modules/dashboard/types/portfolios-list'
import { formatToSlug } from '@/lib/format-to-slug'
import { Badge } from '@/components/ui/badge'
import OptimizedImage from '@/components/optimize-image'

import { Skill } from '@/.mock/skills.data'

export interface PortfolioCardProps {
  portfolio: PortfolioList | any
}

export const PortfolioCard = ({ portfolio }: PortfolioCardProps) => {
  const { name, description, user, images, github_link, live_demo, skills } = portfolio || {}

  return (
    <Link href={`/portfolios/${formatToSlug(name)}`} prefetch={false} className="group relative h-full rounded-3xl border border-gray-200 bg-gray-100 p-2 dark:border-gray-50/[.1] dark:bg-black dark:backdrop-blur-md">
      <div className="relative overflow-hidden rounded-2xl transition duration-200">
        <OptimizedImage alt={name} width={720} height={500} src={`http://portfolio.shohjahon1code.uz${images?.[0]}` || '/fallback-image.jpg'} className="aspect-video rounded-2xl bg-cover object-top blur-0 transition duration-300 group-hover:scale-105" />
        <div className="absolute inset-0 z-10 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          {github_link && (
            <Link href={`${github_link}`} target="_blank" className="flex h-11 w-11 items-center justify-center rounded-full bg-background/80 shadow-md backdrop-blur-sm">
              <Eye className="h-6 w-6" />
            </Link>
          )}
        </div>
      </div>
      <div className="mt-5 flex flex-col p-1">
        <div className="flex w-full items-center justify-between">
          <div className="flex flex-col">
            <p className="line-clamp-1 text-base font-medium text-neutral-700 dark:text-neutral-100">{name}</p>
            <p className="line-clamp-2 max-w-xs text-sm font-normal text-neutral-500 dark:text-neutral-500">{description}</p>
          </div>
        </div>
        {skills && skills.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {skills.slice(0, 2).map((skill: Skill, index: number) => (
              <Badge key={index} variant="secondary" className={`flex items-center gap-1 rounded-xl py-1.5 pl-3 pr-2`}>
                <Image src={skill.logo} alt={skill.name} width={200} height={200} className="mr-1 !h-4 !w-4" />
                {skill.name}
              </Badge>
            ))}
            {skills.length > 2 && (
              <div className="flex items-center rounded-lg bg-gray-200 p-1.5 px-2 dark:bg-secondary">
                <div className="text-xs font-medium text-neutral-700 dark:text-neutral-300">+{skills.length - 2}</div>
              </div>
            )}
          </div>
        )}
        <div className="mt-5 flex w-full items-center justify-between">
          <div className="flex items-center">
            <OptimizedImage src={user.avatar || 'https://api-private.atlassian.com/users/4c06973565b718b273c7db95e58dca2f/avatar'} alt={`${user.name.slice(0, 1)}`} width={200} height={200} className="mr-2 !h-[25px] !w-[25px] !rounded-lg border border-border" />
            <span className="text-sm font-medium text-neutral-600 dark:text-neutral-400">{user.name}</span>
          </div>
          {live_demo && (
            <div className="flex h-[22px] w-[60px] items-center justify-center rounded-lg border border-transparent bg-primary text-sm font-semibold text-foreground transition-colors hover:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 dark:border-green-300 dark:bg-green-700">
              Free
            </div>
          )}
        </div>
      </div>
    </Link>
  )
}
