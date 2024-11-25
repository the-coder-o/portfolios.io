import Link from 'next/link'
import Image from 'next/image'
import { Eye } from 'lucide-react'

import { formatToSlug } from '@/lib/format-to-slug'

export interface CardProps {
  title?: string | any
  description?: string | any
  image?: string | any
  author?: {
    name: string | any
    profileImage: string | any
  }
  price?: string
  link?: string | any
  singlePageDetails?: {
    description: string
    images: string[]
    author: {
      name: string
      profileImage: string
    }
    githubLink?: string | any
    cost?: string
  }
}

export const PortfolioCard = ({ image, title, price, description, author, singlePageDetails }: CardProps) => {
  return (
    <Link href={`/portfolios/${formatToSlug(title)}`} prefetch={false} className="group relative h-full rounded-3xl border border-gray-200 bg-gray-100 p-2 dark:border-gray-50/[.1] dark:bg-black dark:backdrop-blur-md">
      <div className="relative overflow-hidden rounded-2xl transition duration-200">
        <Image alt="Component Thumbnail" loading="lazy" width={720} height={500} decoding="async" src={image || '/fallback-image.jpg'} style={{ color: 'transparent' }} className="aspect-video rounded-2xl bg-cover object-cover object-top blur-0 transition duration-300 group-hover:scale-105" />
        <div className="absolute inset-0 z-10 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <Link href={`${singlePageDetails?.githubLink}`} className="flex h-11 w-11 items-center justify-center rounded-full bg-background/80 shadow-md backdrop-blur-sm">
            <Eye className="h-6 w-6" />
          </Link>
        </div>
      </div>
      <div className="mt-5 flex flex-col p-1">
        <div className="flex w-full items-center justify-between">
          <div className="flex flex-col">
            <p className="line-clamp-1 text-base font-medium text-neutral-700 dark:text-neutral-100">{title}</p>
            <p className="line-clamp-2 max-w-xs text-sm font-normal text-neutral-500 dark:text-neutral-500">{description}</p>
          </div>
        </div>
        {author && (
          <div className="mt-5 flex w-full items-center justify-between">
            {singlePageDetails?.githubLink ? (
              <div className="flex items-center">
                <Image src={author.profileImage} alt={`${author.name}'s profile`} width={24} height={24} className="mr-2 rounded-lg" />
                <span className="text-sm font-medium text-neutral-600 dark:text-neutral-400">{author.name}</span>
              </div>
            ) : (
              <div className="flex items-center">
                <Image src={author.profileImage} alt={`${author.name}'s profile`} width={24} height={24} className="mr-2 rounded-lg" />
                <span className="text-sm font-medium text-neutral-600 dark:text-neutral-400">{author.name}</span>
              </div>
            )}
            <div className="flex h-[22px] w-[60px] items-center justify-center rounded-lg border border-transparent bg-primary text-sm font-semibold text-foreground transition-colors hover:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 dark:border-green-300 dark:bg-green-700">
              {price}
            </div>
          </div>
        )}
      </div>
    </Link>
  )
}
