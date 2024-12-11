'use client'

import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

import OptimizedImage from '@/components/optimize-image'

const showcases = [
  {
    title: 'Portfolio 1',
    image: 'https://www.portfolioshub.com/_next/image?url=https%3A%2F%2Fspotted-swordfish-236.convex.site%2FgetImage%3FstorageId%3Dkg23474kwtctj7s2ktwadb2x1h73k0hm&w=640&q=75',
    height: 480,
    width: 640,
  },
  {
    title: 'Portfolio 2',
    image: 'https://www.portfolioshub.com/_next/image?url=https%3A%2F%2Fspotted-swordfish-236.convex.site%2FgetImage%3FstorageId%3Dkg2eez46mcy550sktarwqv12sh6wscf1&w=640&q=75',
    height: 480,
    width: 640,
  },
  {
    title: 'Portfolio 3',
    image: 'https://www.portfolioshub.com/_next/image?url=https%3A%2F%2Fspotted-swordfish-236.convex.site%2FgetImage%3FstorageId%3Dkg221v3w2y9fsvrpvmkfv26qph73ctcx&w=640&q=75',
    height: 100,
    width: 640,
  },
  {
    title: 'Portfolio 4',
    image: 'https://www.portfolioshub.com/_next/image?url=https%3A%2F%2Fspotted-swordfish-236.convex.site%2FgetImage%3FstorageId%3Dkg2apf9vvsdfzzkyd6amdc1k4x6wnpwt&w=640&q=75',
    height: 480,
    width: 640,
  },
  {
    title: 'Portfolio 7',
    image: 'https://www.portfolioshub.com/_next/image?url=https%3A%2F%2Fspotted-swordfish-236.convex.site%2FgetImage%3FstorageId%3Dkg2b5gvrb5dq3me1259w7mrg4570hhdn&w=640&q=75',
    height: 480,
    width: 640,
  },
  {
    title: 'Portfolio 6',
    image: 'https://www.portfolioshub.com/_next/image?url=https%3A%2F%2Fspotted-swordfish-236.convex.site%2FgetImage%3FstorageId%3Dkg2e82ambhtt7qt0tg88rs0qgd6vvv22&w=640&q=75',
    height: 480,
    width: 640,
  },
  {
    title: 'Portfolio 8',
    image: 'https://www.portfolioshub.com/_next/image?url=https%3A%2F%2Fspotted-swordfish-236.convex.site%2FgetImage%3FstorageId%3Dkg2387arjg1566ta87pq0m5cmd6wntw4&w=640&q=75',
    height: 480,
    width: 640,
  },
  {
    title: 'Portfolio 9',
    image: 'https://i.postimg.cc/PrtsfYWx/showcase-image-6.png',
    height: 480,
    width: 640,
  },
  {
    title: 'Portfolio 10',
    image: 'https://i.postimg.cc/Qt1GCqYB/showcase-image-7.webp',
    height: 480,
    width: 640,
  },
  {
    title: 'Portfolio 5',
    image: 'https://www.portfolioshub.com/_next/image?url=https%3A%2F%2Fspotted-swordfish-236.convex.site%2FgetImage%3FstorageId%3Dkg24zpeseay6a2j42q9kjajbt56wm00j&w=640&q=75',
    height: 480,
    width: 640,
  },
  {
    title: 'Portfolio 11',
    image: 'https://i.postimg.cc/NFk37jcB/showcase-image-8.webp',
    height: 480,
    width: 640,
  },
  {
    title: 'Portfolio 12',
    image: 'https://i.postimg.cc/PJHGw80S/showcase-image-9.webp',
    height: 480,
    width: 640,
  },
]

export function ShowcaseSection() {
  return (
    <section className="relative my-[200px] overflow-hidden bg-black text-white">
      <div className="relative">
        <div className="relative mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-10 text-center text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl xl:text-5xl">The framework of choice when it matters</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {showcases.map((showcase, index) => (
              <ShowcaseItem key={index} showcase={showcase} />
            ))}
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
    <Link href="/showcase" className="group relative block h-[280px] overflow-hidden rounded-xl">
      <div className="aspect-[4/3] w-full">
        <OptimizedImage
          src={showcase.image}
          alt={`Screenshot of ${showcase.title}`}
          width={showcase.width}
          height={showcase.height}
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="!h-[280px] object-cover object-top transition-transform duration-300 group-hover:scale-105"
        />
      </div>
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
