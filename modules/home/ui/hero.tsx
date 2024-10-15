import Link from 'next/link'
import React from 'react'

import { Cover } from '@/components/animation/cover'
import { Spotlight } from '@/components/animation/spotlight'

import { LogoSlider } from './logo-slider'

export const HeroSection = () => {
  return (
    <>
      <Spotlight />
      <div className="mt-[120px] flex flex-col gap-3 max-md:mt-[50px]">
        <Link href={'/templates'} className="group relative mx-auto w-fit cursor-pointer rounded-full bg-neutral-50 p-px text-[10px] font-semibold text-neutral-700 no-underline shadow-zinc-900 dark:bg-neutral-700 dark:text-neutral-300 sm:text-xs md:shadow-2xl">
          <span className="absolute inset-0 overflow-hidden rounded-full">
            <span className="absolute inset-0 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
          </span>
          <div className="relative z-10 flex items-center space-x-2 rounded-full bg-neutral-100 px-4 py-1.5 ring-1 ring-white/10 dark:bg-neutral-800">
            <span>Introducing Portfolio Templates</span>
            <svg fill="none" height="16" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.75 8.75L14.25 12L10.75 15.25" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
            </svg>
          </div>
          <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-neutral-400/0 via-neutral-400/90 to-neutral-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
        </Link>
        <h1 className="relative z-20 mx-auto max-w-7xl bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 bg-clip-text py-6 text-center text-4xl font-semibold text-transparent dark:from-neutral-800 dark:via-white dark:to-white md:text-4xl lg:text-7xl">
          Best place to find <br /> portfolio <Cover>inspiration.</Cover>
        </h1>
        <p className="relative z-20 mx-auto max-w-4xl text-center text-base font-normal text-neutral-600 dark:text-neutral-200 md:text-[19px]">
          Unlock your potential with our curated collection of 309+ exceptional portfolio designs. Each template is crafted to highlight your unique skills and creativity, helping you stand out in any industry.
        </p>
        <div className="mt-4 flex w-full flex-col items-center justify-center gap-4 px-8 max-md:px-0 sm:flex-row">
          <Link href="/templates" className="group relative z-20 flex h-11 w-full cursor-pointer items-center justify-center space-x-2 rounded-xl bg-black p-px px-4 py-2 text-center text-sm font-semibold text-white no-underline transition duration-200 dark:bg-white dark:text-black sm:w-52">
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
