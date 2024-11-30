'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'

const showcases = [
  {
    title: 'Portfolio 1',
    image: '/images/showcase-image-1.webp',
    height: 480,
    width: 640,
  },
  {
    title: 'Portfolio 2',
    image: '/images/showcase-image-2.webp',
    height: 480,
    width: 640,
  },
  {
    title: 'Portfolio 3',
    image: '/images/showcase-image-3.webp',
    height: 480,
    width: 640,
  },
  {
    title: 'Portfolio 4',
    image: '/images/showcase-image-4.webp',
    height: 480,
    width: 640,
  },
  {
    title: 'Portfolio 5',
    image: '/images/showcase-image-5.webp',
    height: 480,
    width: 640,
  },
  {
    title: 'Portfolio 6',
    image: '/images/showcase-image-6.png',
    height: 480,
    width: 640,
  },
  {
    title: 'Portfolio 7',
    image: '/images/showcase-image-7.webp',
    height: 480,
    width: 640,
  },
  {
    title: 'Portfolio 8',
    image: '/images/showcase-image-8.webp',
    height: 480,
    width: 640,
  },
  {
    title: 'Portfolio 9',
    image: '/images/showcase-image-9.webp',
    height: 480,
    width: 640,
  },
  {
    title: 'Portfolio 10',
    image: '/images/showcase-image-10.webp',
    height: 480,
    width: 640,
  },
  {
    title: 'Portfolio 11',
    image: '/images/showcase-image-11.webp',
    height: 480,
    width: 640,
  },
  {
    title: 'Portfolio 12',
    image: '/images/showcase-image-12.png',
    height: 480,
    width: 640,
  },
  {
    title: 'Portfolio 13',
    image: '/images/showcase-image-12.webp',
    height: 480,
    width: 640,
  },
]

export function ShowcaseSection() {
  return (
    <section className="relative my-[200px] overflow-hidden bg-black text-white max-md:hidden">
      <div className="relative h-[900px]">
        <div className="relative mx-auto">
          <h2 className="mb-10 text-center text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl xl:text-5xl">The framework of choice when it matters</h2>
          <div className="-mx-4 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4">
            <div className="col-span-1 space-y-2 sm:space-y-2">
              <ShowcaseItem showcase={showcases[5]} />
              <ShowcaseItem showcase={showcases[11]} />
              <ShowcaseItem showcase={showcases[9]} />
            </div>
            <div className="col-span-1 space-y-2 sm:space-y-2">
              <ShowcaseItem showcase={showcases[10]} />
              <ShowcaseItem showcase={showcases[0]} />
            </div>
            <div className="col-span-1 space-y-2 sm:space-y-2">
              <ShowcaseItem showcase={showcases[4]} />
              <ShowcaseItem showcase={showcases[11]} />
              <ShowcaseItem showcase={showcases[12]} />
              <ShowcaseItem showcase={showcases[7]} />
            </div>
            <div className="col-span-1 space-y-2 sm:space-y-2">
              <ShowcaseItem showcase={showcases[6]} />
              <ShowcaseItem showcase={showcases[3]} />
              <ShowcaseItem showcase={showcases[8]} />
            </div>
          </div>
        </div>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute bottom-0 left-0 right-0 h-[600px] bg-gradient-to-t from-black to-transparent" />
        </div>
      </div>
    </section>
  )
}

function ShowcaseItem({ showcase }: { showcase: (typeof showcases)[0] }) {
  return (
    <Link href="/showcase" className="group relative block overflow-hidden rounded-xl">
      <Image src={showcase.image} alt={`Screenshot of ${showcase.title}`} width={showcase.width} height={showcase.height} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="absolute bottom-0 left-0 right-0 translate-y-full p-4 transition-transform duration-300 group-hover:translate-y-0">
        <div className="flex items-center gap-2 text-sm font-medium">
          {showcase.title}
          <hr className="flex-1 border-gray-600" />
          <ArrowUpRight className="h-3.5 w-3.5 text-gray-400" />
        </div>
      </div>
    </Link>
  )
}
