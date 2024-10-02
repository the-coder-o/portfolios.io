import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { Input } from '@/components/ui/input'

export const CardSection = () => {
  return (
    <>
      <div className="mb-5 flex items-center justify-between">
        <div className="flex flex-col gap-1">
          <h2 className="text-base font-bold text-purple-500 md:text-lg">Best Templates</h2>
          <p className="relative z-20 w-full text-left text-sm text-neutral-600 dark:text-neutral-400">Here are some templates that you can use to get started, both paid and free.</p>
        </div>
        <div>
          <Input type="search" placeholder="Search portfolios" className="w-[250px] rounded-xl" />
        </div>
      </div>
      <div className="grid grid-cols-4 gap-6">
        <Link className="group h-full overflow-hidden rounded-3xl border border-gray-200 bg-gray-100 antialiased dark:border-neutral-800 dark:bg-neutral-900" href="/products/hero-sections">
          <div className="relative overflow-hidden rounded-2xl transition duration-200 group-hover:shadow-xl">
            <Image
              alt="Component Thumbnail"
              loading="lazy"
              width="720"
              height="500"
              decoding="async"
              className="aspect-video h-[14rem] rounded-2xl object-cover object-top blur-0 transition duration-300 group-hover:scale-105"
              src="https://pro.aceternity.com/_next/image?url=https%3A%2F%2Fassets.aceternity.com%2Fpro%2Fhero-sections.png&w=1920&q=75"
              style={{ color: 'transparent' }}
            />
          </div>
          <div className="mt-4 flex flex-col items-start px-4 pb-4 pt-2">
            <div className="flex w-full justify-between">
              <div className="mb-2 flex items-center">
                <p className="text-base font-medium text-neutral-700 dark:text-neutral-100">Hero Sections</p>
              </div>
              <div className="flex h-[22px] w-[60px] items-center justify-center rounded-full border border-transparent bg-primary text-sm font-semibold text-foreground transition-colors hover:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 dark:border-green-300 dark:bg-green-700">
                Free
              </div>
            </div>
            <p className="mt-2 max-w-xs text-sm font-normal text-neutral-500 dark:text-neutral-500">A collection of hero sections that are modern and stand out</p>
          </div>
        </Link>
        <Link className="group h-full overflow-hidden rounded-3xl border border-gray-200 bg-gray-100 antialiased dark:border-neutral-800 dark:bg-neutral-900" href="/products/hero-sections">
          <div className="relative overflow-hidden rounded-2xl transition duration-200 group-hover:shadow-xl">
            <Image
              alt="Component Thumbnail"
              loading="lazy"
              width="720"
              height="500"
              decoding="async"
              className="aspect-video h-[14rem] rounded-2xl object-cover object-top blur-0 transition duration-300 group-hover:scale-105"
              src="https://pro.aceternity.com/_next/image?url=https%3A%2F%2Fassets.aceternity.com%2Fpro%2Fhero-sections.png&w=1920&q=75"
              style={{ color: 'transparent' }}
            />
          </div>
          <div className="mt-4 flex flex-col items-start px-4 pb-4 pt-2">
            <div className="flex w-full justify-between">
              <div className="mb-2 flex items-center">
                <p className="text-base font-medium text-neutral-700 dark:text-neutral-100">Hero Sections</p>
              </div>
              <div className="flex h-[22px] w-[60px] items-center justify-center rounded-full border border-transparent bg-primary text-sm font-semibold text-foreground transition-colors hover:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 dark:border-green-300 dark:bg-green-700">
                Free
              </div>
            </div>
            <p className="mt-2 max-w-xs text-sm font-normal text-neutral-500 dark:text-neutral-500">A collection of hero sections that are modern and stand out</p>
          </div>
        </Link>
        <Link className="group h-full overflow-hidden rounded-3xl border border-gray-200 bg-gray-100 antialiased dark:border-neutral-800 dark:bg-neutral-900" href="/products/hero-sections">
          <div className="relative overflow-hidden rounded-2xl transition duration-200 group-hover:shadow-xl">
            <Image
              alt="Component Thumbnail"
              loading="lazy"
              width="720"
              height="500"
              decoding="async"
              className="aspect-video h-[14rem] rounded-2xl object-cover object-top blur-0 transition duration-300 group-hover:scale-105"
              src="https://pro.aceternity.com/_next/image?url=https%3A%2F%2Fassets.aceternity.com%2Fpro%2Fhero-sections.png&w=1920&q=75"
              style={{ color: 'transparent' }}
            />
          </div>
          <div className="mt-4 flex flex-col items-start px-4 pb-4 pt-2">
            <div className="flex w-full justify-between">
              <div className="mb-2 flex items-center">
                <p className="text-base font-medium text-neutral-700 dark:text-neutral-100">Hero Sections</p>
              </div>
              <div className="flex h-[22px] w-[60px] items-center justify-center rounded-full border border-transparent bg-primary text-sm font-semibold text-foreground transition-colors hover:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 dark:border-green-300 dark:bg-green-700">
                Free
              </div>
            </div>
            <p className="mt-2 max-w-xs text-sm font-normal text-neutral-500 dark:text-neutral-500">A collection of hero sections that are modern and stand out</p>
          </div>
        </Link>
        <Link className="group h-full overflow-hidden rounded-3xl border border-gray-200 bg-gray-100 antialiased dark:border-neutral-800 dark:bg-neutral-900" href="/products/hero-sections">
          <div className="relative overflow-hidden rounded-2xl transition duration-200 group-hover:shadow-xl">
            <Image
              alt="Component Thumbnail"
              loading="lazy"
              width="720"
              height="500"
              decoding="async"
              className="aspect-video h-[14rem] rounded-2xl object-cover object-top blur-0 transition duration-300 group-hover:scale-105"
              src="https://pro.aceternity.com/_next/image?url=https%3A%2F%2Fassets.aceternity.com%2Fpro%2Fhero-sections.png&w=1920&q=75"
              style={{ color: 'transparent' }}
            />
          </div>
          <div className="mt-4 flex flex-col items-start px-4 pb-4 pt-2">
            <div className="flex w-full justify-between">
              <div className="mb-2 flex items-center">
                <p className="text-base font-medium text-neutral-700 dark:text-neutral-100">Hero Sections</p>
              </div>
              <div className="flex h-[22px] w-[60px] items-center justify-center rounded-full border border-transparent bg-primary text-sm font-semibold text-foreground transition-colors hover:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 dark:border-green-300 dark:bg-green-700">
                Free
              </div>
            </div>
            <p className="mt-2 max-w-xs text-sm font-normal text-neutral-500 dark:text-neutral-500">A collection of hero sections that are modern and stand out</p>
          </div>
        </Link>
      </div>
    </>
  )
}
