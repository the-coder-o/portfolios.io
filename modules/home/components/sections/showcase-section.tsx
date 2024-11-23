'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'

const showcases = [
  {
    title: 'Portfolio 1',
    image: 'https://www.portfolioshub.com/_next/image?url=https%3A%2F%2Fspotted-swordfish-236.convex.site%2FgetImage%3FstorageId%3Dkg2eaha87ms5gjmr3rq6w45hrd74b300&w=640&q=75',
    height: 480,
    width: 640,
  },
  {
    title: 'Portfolio 2',
    image: 'https://www.portfolioshub.com/_next/image?url=https%3A%2F%2Fspotted-swordfish-236.convex.site%2FgetImage%3FstorageId%3Dkg20nhvf19w4b1a46f7sf1rcns71dbn0&w=640&q=75',
    height: 480,
    width: 640,
  },
  {
    title: 'Portfolio 3',
    image: 'https://www.portfolioshub.com/_next/image?url=https%3A%2F%2Fspotted-swordfish-236.convex.site%2FgetImage%3FstorageId%3Dkg2f3v613gp8nt71f8jmpf1z7x6zkgry&w=640&q=75',
    height: 480,
    width: 640,
  },
  {
    title: 'Portfolio 4',
    image: 'https://www.portfolioshub.com/_next/image?url=https%3A%2F%2Fspotted-swordfish-236.convex.site%2FgetImage%3FstorageId%3Dkg2eez46mcy550sktarwqv12sh6wscf1&w=640&q=75',
    height: 480,
    width: 640,
  },
  {
    title: 'Portfolio 5',
    image: 'https://portfoliosio.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FR0FP9t5B%2FScreenshot-2024-11-21-141242.png&w=640&q=75',
    height: 480,
    width: 640,
  },
  {
    title: 'Portfolio 6',
    image: 'https://portfoliosio.vercel.app/_next/image?url=https%3A%2F%2Fpro.aceternity.com%2F_next%2Fimage%3Furl%3Dhttps%253A%252F%252Fassets.aceternity.com%252Ftemplates%252Fsidefolio.png%26w%3D640%26q%3D75&w=640&q=75',
    height: 480,
    width: 640,
  },
  {
    title: 'Portfolio 7',
    image: 'https://portfoliosio.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2F4Nj2BNm5%2FScreenshot-2024-11-21-151236.png&w=640&q=75',
    height: 480,
    width: 640,
  },
  {
    title: 'Portfolio 8',
    image: 'https://portfoliosio.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2F4Nj2BNm5%2FScreenshot-2024-11-21-151236.png&w=640&q=75',
    height: 480,
    width: 640,
  },
  {
    title: 'Portfolio 9',
    image: 'https://www.portfolioshub.com/_next/image?url=https%3A%2F%2Fspotted-swordfish-236.convex.site%2FgetImage%3FstorageId%3Dkg235bk8fp92z7f8wy4njbspcs6wam8z&w=640&q=75',
    height: 480,
    width: 640,
  },
  {
    title: 'Portfolio 10',
    image: 'https://www.portfolioshub.com/_next/image?url=https%3A%2F%2Fspotted-swordfish-236.convex.site%2FgetImage%3FstorageId%3Dkg21ehfjs09q0hgjvjmt13ba7n74k0bh&w=640&q=75',
    height: 480,
    width: 640,
  },
  {
    title: 'Portfolio 11',
    image: 'https://www.portfolioshub.com/_next/image?url=https%3A%2F%2Fspotted-swordfish-236.convex.site%2FgetImage%3FstorageId%3Dkg24xngfmxctwy0yz228qedvn56wwnq1&w=640&q=75',
    height: 480,
    width: 640,
  },
  {
    title: 'Portfolio 12',
    image: 'https://i.postimg.cc/gcCVSw-4j/Screenshot-2024-11-23-100434.png',
    height: 480,
    width: 640,
  },
  {
    title: 'Portfolio 13',
    image: 'https://www.portfolioshub.com/_next/image?url=https%3A%2F%2Fspotted-swordfish-236.convex.site%2FgetImage%3FstorageId%3Dkg23474kwtctj7s2ktwadb2x1h73k0hm&w=640&q=75',
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
          <div className="-mx-4 grid grid-cols-1 gap-4 sm:-mx-8 sm:grid-cols-2 sm:gap-6 lg:-mx-16 lg:grid-cols-4 lg:gap-8">
            <div className="col-span-1 space-y-4 sm:space-y-6">
              <ShowcaseItem showcase={showcases[10]} />
              <ShowcaseItem showcase={showcases[0]} />
            </div>
            <div className="col-span-1 space-y-4 sm:space-y-6">
              <ShowcaseItem showcase={showcases[4]} />
              <ShowcaseItem showcase={showcases[7]} />
              <ShowcaseItem showcase={showcases[12]} />
            </div>
            <div className="col-span-1 space-y-4 sm:space-y-6">
              <ShowcaseItem showcase={showcases[5]} />
              <ShowcaseItem showcase={showcases[11]} />
              <ShowcaseItem showcase={showcases[9]} />
            </div>
            <div className="col-span-1 space-y-4 sm:space-y-6">
              <ShowcaseItem showcase={showcases[6]} />
              <ShowcaseItem showcase={showcases[3]} />
              <ShowcaseItem showcase={showcases[8]} />
            </div>
          </div>
        </div>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute bottom-0 left-0 right-0 h-[300px] bg-gradient-to-t from-black to-transparent" />
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
