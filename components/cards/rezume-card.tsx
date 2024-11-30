import Link from 'next/link'
import { User } from 'lucide-react'

import OptimizedImage from '@/components/optimize-image'

export interface RezumeProps {
  id?: string | any
  url?: string | any
  title?: string | any
  image?: string | any
  creatorName?: string | any
  creatorLink?: string | any
}

export const RezumeCard = ({ url, title, image, creatorName, creatorLink }: RezumeProps) => {
  return (
    <Link href={`${url}`} prefetch={false} target="_blank" className="group h-full overflow-hidden rounded-3xl border border-gray-200 bg-gray-100 p-2 antialiased dark:border-neutral-800 dark:bg-[#111]">
      <div className="relative overflow-hidden rounded-2xl transition duration-200">
        <OptimizedImage alt="Component Thumbnail" width={720} height={500} className="aspect-video rounded-2xl bg-cover object-cover object-top blur-0 transition duration-300 group-hover:scale-105" src={image || '/fallback-image.jpg'} />
      </div>
      <div className="mt-4 flex flex-col items-start p-3">
        <div className="mb-2 flex w-full items-center justify-between">
          <div className="flex items-center">
            <p className="line-clamp-2 text-base font-medium text-neutral-700 dark:text-neutral-100">{title}</p>
          </div>
        </div>
        {creatorName && (
          <div className="mt-5 flex w-full items-center justify-between">
            <Link href={creatorLink} className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-white text-black">
                <User size={18} className="rounded-xl text-black" />
              </div>
              <span className="text-sm font-medium text-neutral-600 dark:text-neutral-400">{creatorName}</span>
            </Link>
            <div className="flex h-[22px] w-[60px] items-center justify-center rounded-lg border border-transparent bg-primary text-sm font-semibold text-foreground transition-colors hover:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 dark:border-green-300 dark:bg-green-700">
              Free
            </div>
          </div>
        )}
      </div>
    </Link>
  )
}
