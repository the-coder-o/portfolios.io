'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { useIsAuth } from '@/hooks/use-isAuth'
import WordRotate from '@/components/ui/word-rotate'
import { AnimatedTooltip } from '@/components/animation/animated-toolip'

import { people } from '@/.mock/people.data'

export const HeroSection = () => {
  const isAuthUser = useIsAuth()

  return (
    <div className="mt-[150px] flex justify-between gap-16 lg:flex-row">
      <div className="max-w-[650px] lg:text-left">
        <h1 className="text-5xl font-bold text-white md:text-7xl lg:text-[90px]">
          <span className="bg-gradient-to-r from-[#a855f7] to-[#6366f1] bg-clip-text text-transparent">Make your portfolios look</span>
          <span className="flex gap-3 lg:justify-start">
            10x
            <WordRotate words={['better', 'modern', 'beautiful', 'awesome']} />
          </span>
        </h1>
        <p className="mt-4 text-xl text-neutral-400">Unlock your potential with our curated collection of 179+ exceptional portfolio designs. Each template is crafted to highlight your unique skills and creativity, helping you stand out in any industry.</p>
        <div className="mt-8 flex flex-wrap gap-4 lg:justify-start">
          <Link href="/portfolios" className="group relative z-20 flex h-11 w-full items-center justify-center space-x-2 rounded-xl bg-black p-px px-4 py-2 text-center text-sm font-medium text-white transition duration-200 hover:-translate-y-0.5 dark:bg-white dark:text-black sm:w-52">
            Explore Collection
          </Link>
          <Link
            href={isAuthUser ? '/dashboard/portfolios/all-portfolios' : '/sign-in'}
            className="group relative z-20 flex h-11 w-full items-center justify-center space-x-2 rounded-xl bg-white p-px px-4 py-2 text-sm font-medium text-black shadow-input transition duration-200 hover:-translate-y-0.5 dark:bg-neutral-800 dark:text-white sm:w-52"
          >
            Go to dashboard
          </Link>
        </div>
      </div>
      <div className="flex flex-col items-center gap-6 max-xl:hidden">
        <div className="relative mt-10 flex w-full flex-col items-end gap-3">
          <h2 className="relative z-10 text-xs text-neutral-500">Trusted by Founders and Entrepreneurs from all over the world</h2>
          <div className="flex">
            <AnimatedTooltip items={people} />
          </div>
        </div>
        <PortfolioShowcase portfolios={featuredPortfolios} />
        <div className="grid grid-cols-4 gap-8 text-center max-sm:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-white">179+</h2>
            <p className="mt-1 text-neutral-400">Portfolios</p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-white">500+</h2>
            <p className="mt-1 text-neutral-400">Satisfied Creators</p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-white">80+</h2>
            <p className="mt-1 text-neutral-400">Resume</p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-white">1 Years</h2>
            <p className="mt-1 text-neutral-400">Of Excellence</p>
          </div>
        </div>
      </div>
    </div>
  )
}

const featuredPortfolios = [
  {
    id: 1,
    title: 'Creative Designer Portfolio',
    description: 'Showcase your artistic talent with this stunning template.',
    image: 'https://portfoliosio.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FR0FP9t5B%2FScreenshot-2024-11-21-141242.png&w=640&q=75',
  },
  {
    id: 2,
    title: 'Developer Portfolio',
    description: 'Highlight your coding projects with a sleek, modern design.',
    image: 'https://portfoliosio.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2F4Nj2BNm5%2FScreenshot-2024-11-21-151236.png&w=640&q=75',
  },
  {
    id: 3,
    title: 'Photographer Portfolio',
    description: 'Perfect for showcasing high-quality photography work.',
    image: 'https://www.portfolioshub.com/_next/image?url=https%3A%2F%2Fspotted-swordfish-236.convex.site%2FgetImage%3FstorageId%3Dkg2fgq48xaswtxpeb9s4x8apzn6vtggc&w=640&q=75',
  },
]

interface Portfolio {
  id: number
  title: string
  description: string
  image: string
}

interface PortfolioShowcaseProps {
  portfolios: Portfolio[]
}

const PortfolioShowcase: React.FC<PortfolioShowcaseProps> = ({ portfolios }) => {
  return (
    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
      {portfolios.map((portfolio) => (
        <div key={portfolio.id} className="group relative w-[200px] overflow-hidden rounded-xl border border-neutral-700 bg-neutral-900 shadow-lg transition-transform">
          <Image src={portfolio.image} alt={portfolio.title} width={400} height={300} className="!h-[200px] !w-[400px] object-cover opacity-75 transition duration-300 group-hover:scale-105" />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
            <h3 className="line-clamp-1 text-lg font-semibold text-white">{portfolio.title}</h3>
            <p className="line-clamp-1 text-sm text-neutral-400">{portfolio.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default PortfolioShowcase
