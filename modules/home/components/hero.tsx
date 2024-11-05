import Link from 'next/link'
import React from 'react'

import { portfoliosData } from '@/.mock/portfolios.data'
import { Cover } from '@/components/animation/cover'
import { Spotlight } from '@/components/animation/spotlight'

import { LogoSlider } from './logo-slider'

export const HeroSection = () => {
  return (
    <>
      <Spotlight />
      <div className="mt-[120px] flex flex-col items-center max-md:mt-[50px] max-sm:items-start">
        <h1 className="relative z-20 max-w-7xl bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 bg-clip-text py-6 text-center text-4xl font-semibold text-transparent dark:from-neutral-800 dark:via-white dark:to-white max-sm:text-start md:text-4xl lg:text-7xl">
          Best place to find <br /> portfolio <Cover>inspiration.</Cover>
        </h1>
        <p className="relative z-20 max-w-4xl text-center text-base font-normal text-neutral-600 dark:text-neutral-200 max-sm:text-start md:text-[19px]">
          Unlock your potential with our curated collection of {portfoliosData?.length}+ exceptional portfolio designs. Each template is crafted to highlight your unique skills and creativity, helping you stand out in any industry.
        </p>
        <div className="mt-4 flex w-full flex-col items-center justify-center gap-4 px-8 max-md:px-0 sm:flex-row">
          <Link href="/portfolios" className="group relative z-20 flex h-11 w-full cursor-pointer items-center justify-center space-x-2 rounded-xl bg-black p-px px-4 py-2 text-center text-sm font-semibold text-white no-underline transition duration-200 dark:bg-white dark:text-black sm:w-52">
            Explore Collection
          </Link>
          <Link
            href="/sign-in"
            className="group relative z-20 flex h-11 w-full cursor-pointer items-center justify-center space-x-2 rounded-xl bg-white p-px px-4 py-2 text-sm font-semibold text-black no-underline shadow-input transition duration-200 hover:-translate-y-0.5 dark:bg-neutral-800 dark:text-white sm:w-52"
          >
            Go to dashboard
          </Link>
        </div>
      </div>
      <LogoSlider />
    </>
  )
}