import Image from 'next/image'
import Link from 'next/link'

export interface CardProps {
  title?: string
  description?: string
  image?: string | any
  author?: {
    name: string
    profileImage: string
  }
  price?: string
  link?: string
  singlePageDetails?: {
    description: string
    images: string[]
    author: {
      name: string
      profileImage: string
    }
    githubLink?: string
    cost?: string
  }
}

export const Card = ({ image, title, price, description, author, singlePageDetails }: CardProps) => {
  return (
    <Link href={'#'} className="group h-full overflow-hidden rounded-3xl border border-gray-200 bg-gray-100 p-2 antialiased dark:border-neutral-800 dark:bg-[#111]">
      <div className="relative overflow-hidden rounded-2xl transition duration-200">
        <Image alt="Component Thumbnail" loading="lazy" width={720} height={500} decoding="async" className="aspect-video rounded-2xl bg-cover object-cover object-top blur-0 transition duration-300 group-hover:scale-105" src={image || '/fallback-image.jpg'} style={{ color: 'transparent' }} />
      </div>
      <div className="mt-4 flex flex-col items-start p-3">
        <div className="mb-2 flex w-full items-center justify-between">
          <div className="flex items-center">
            <p className="text-base font-medium text-neutral-700 dark:text-neutral-100">{title}</p>
          </div>
        </div>
        <p className="mt-2 line-clamp-2 max-w-xs text-sm font-normal text-neutral-500 dark:text-neutral-500">{description}</p>
        {author && (
          <div className="mt-5 flex w-full items-center justify-between">
            {singlePageDetails?.githubLink ? (
              <Link href={singlePageDetails.githubLink} className="flex items-center">
                <Image src={author.profileImage} alt={`${author.name}'s profile`} width={24} height={24} className="mr-2 rounded-full" />
                <span className="text-sm font-medium text-neutral-600 dark:text-neutral-400">{author.name}</span>
              </Link>
            ) : (
              <div className="flex items-center">
                <Image src={author.profileImage} alt={`${author.name}'s profile`} width={24} height={24} className="mr-2 rounded-full" />
                <span className="text-sm font-medium text-neutral-600 dark:text-neutral-400">{author.name}</span>
              </div>
            )}
            <div className="flex h-[22px] w-[60px] items-center justify-center rounded-full border border-transparent bg-primary text-sm font-semibold text-foreground transition-colors hover:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 dark:border-green-300 dark:bg-green-700">
              {price}
            </div>
          </div>
        )}
      </div>
    </Link>
  )
}
