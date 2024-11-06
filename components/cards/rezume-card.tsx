import Link from 'next/link'
import Image from 'next/image'
import { User } from 'lucide-react'

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
    <Link href={url} target="_blank" className="group h-full overflow-hidden rounded-3xl border border-gray-200 bg-gray-100 p-2 antialiased dark:border-neutral-800 dark:bg-[#111]">
      <div className="relative overflow-hidden rounded-2xl transition duration-200">
        <Image alt="Component Thumbnail" loading="lazy" width={720} height={500} decoding="async" className="aspect-video rounded-2xl bg-cover object-cover object-top blur-0 transition duration-300 group-hover:scale-105" src={image || '/fallback-image.jpg'} style={{ color: 'transparent' }} />
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
              <div className="flex h-7 w-7 items-center justify-center rounded-xl bg-white text-black">
                <User size={18} className="rounded-xl text-black" />
              </div>
              <span className="text-sm font-medium text-neutral-600 dark:text-neutral-400">{creatorName}</span>
            </Link>
          </div>
        )}
      </div>
    </Link>
  )
}
