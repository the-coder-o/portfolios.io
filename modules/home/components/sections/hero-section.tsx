'use client'

import React from 'react'
import Link from 'next/link'

import { useGetUsersPortfolios } from '@/modules/portfolios/hooks/useGetUsersPortfolios'
import { PortfolioList } from '@/modules/dashboard/types/portfolios-list'
import { useIsAuth } from '@/hooks/use-isAuth'
import WordRotate from '@/components/ui/word-rotate'
import { Skeleton } from '@/components/ui/skeleton'
import OptimizedImage from '@/components/optimize-image'
import { AnimatedTooltip } from '@/components/animation/animated-toolip'

import { people } from '@/.mock/people.data'

export const HeroSection = () => {
  const isAuthUser = useIsAuth()
  const { data, isPending } = useGetUsersPortfolios()

  return (
    <section className="mt-[150px] flex justify-between gap-16 lg:flex-row">
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
        <PortfolioShowcase portfolios={data} isPending={isPending} />
        <div className="grid grid-cols-4 gap-8 text-center max-sm:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-white">250+</h2>
            <p className="mt-1 text-neutral-400">Portfolios</p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-white">50+</h2>
            <p className="mt-1 text-neutral-400">Satisfied Creators</p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-white">100+</h2>
            <p className="mt-1 text-neutral-400">Resume</p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-white">1 Years</h2>
            <p className="mt-1 text-neutral-400">Of Excellence</p>
          </div>
        </div>
      </div>
    </section>
  )
}

interface PortfolioShowcaseProps {
  portfolios: PortfolioList[]
  isPending: boolean
}

const PortfolioShowcase: React.FC<PortfolioShowcaseProps> = ({ portfolios, isPending }) => {
  return (
    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
      {isPending
        ? Array(3)
            .fill(0)
            .map((_, index) => <Skeleton key={index} className={'h-[200px] w-[200px] rounded-xl'} />)
        : portfolios.slice(0, 3).map((portfolio) => (
            <div key={portfolio._id} className="group relative h-[200px] w-[200px] overflow-hidden rounded-xl border border-neutral-700 bg-neutral-900 shadow-lg transition-transform">
              <OptimizedImage src={`http://api.portfoliosworld.com${portfolio.images[0]}`} alt={portfolio.name} width={1000} height={1000} className="!h-full !w-full bg-cover object-cover opacity-75 transition duration-300 group-hover:scale-105" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                <h3 className="line-clamp-1 text-lg font-semibold text-white">{portfolio.name}</h3>
                <p className="line-clamp-1 text-sm text-neutral-400">{portfolio.description}</p>
              </div>
            </div>
          ))}
    </div>
  )
}
