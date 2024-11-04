import React from 'react'

import { AnimatedTooltip } from '@/components/animation/animated-toolip'

export const AuthBanner = () => {
  return (
    <div className="relative z-20 hidden w-full items-center justify-center overflow-hidden border-l border-neutral-100 bg-gray-50 dark:border-neutral-800 dark:bg-neutral-900 md:flex">
      <div className="mx-auto max-w-sm">
        <div className="flex w-full flex-row items-center justify-center">
          <div className="mb-10 flex w-full flex-row items-center justify-center">
            <AnimatedTooltip items={people} />
          </div>
        </div>
        <h2 className="mb-10 text-center text-xl font-semibold text-black dark:text-white">Best place to find portfolio inspiration</h2>
        <p className="text-center text-sm text-muted dark:text-[#a3a3a3]">Browse our curated collection of 310+ exceptional designs to help you create your best portfolio yet.</p>
      </div>
      <svg width="1595" height="2" viewBox="0 0 1595 2" fill="none" xmlns="http://www.w3.org/2000/svg" className="pointer-events-none absolute top-20 w-full object-contain">
        <path d="M0 1H1594.5" stroke="url(#line-path-gradient-1)" strokeDasharray="8 8"></path>
        <defs>
          <linearGradient id="line-path-gradient-1" x1="0" y1="1.5" x2="1594.5" y2="1.5" gradientUnits="userSpaceOnUse">
            <stop stopColor="white" stopOpacity="0"></stop>
            <stop offset="0.2" stopColor="var(--neutral-400)"></stop>
            <stop offset="0.8" stopColor="var(--neutral-400)"></stop>
            <stop offset="1" stopColor="white" stopOpacity="0"></stop>
          </linearGradient>
        </defs>
      </svg>
      <svg width="1595" height="2" viewBox="0 0 1595 2" fill="none" xmlns="http://www.w3.org/2000/svg" className="pointer-events-none absolute bottom-20 w-full object-contain">
        <path d="M0 1H1594.5" stroke="url(#line-path-gradient-:rb6:)" strokeDasharray="8 8"></path>
        <defs>
          <linearGradient id="line-path-gradient-:rb6:" x1="0" y1="1.5" x2="1594.5" y2="1.5" gradientUnits="userSpaceOnUse">
            <stop stopColor="white" stop-opacity="0"></stop>
            <stop offset="0.2" stopColor="var(--neutral-400)"></stop>
            <stop offset="0.8" stopColor="var(--neutral-400)"></stop>
            <stop offset="1" stopColor="white" stop-opacity="0"></stop>
          </linearGradient>
        </defs>
      </svg>
      <svg width="1595" height="2" viewBox="0 0 1595 2" fill="none" xmlns="http://www.w3.org/2000/svg" className="pointer-events-none absolute inset-y-0 -right-80 h-full w-full rotate-90 scale-x-150 transform object-contain">
        <path d="M0 1H1594.5" stroke="url(#line-path-gradient-:rb7:)" strokeDasharray="8 8"></path>
        <defs>
          <linearGradient id="line-path-gradient-:rb7:" x1="0" y1="1.5" x2="1594.5" y2="1.5" gradientUnits="userSpaceOnUse">
            <stop stopColor="white" stop-opacity="0"></stop>
            <stop offset="0.2" stopColor="var(--neutral-400)"></stop>
            <stop offset="0.8" stopColor="var(--neutral-400)"></stop>
            <stop offset="1" stopColor="white" stop-opacity="0"></stop>
          </linearGradient>
        </defs>
      </svg>
      <svg width="1595" height="2" viewBox="0 0 1595 2" fill="none" xmlns="http://www.w3.org/2000/svg" className="pointer-events-none absolute inset-y-0 -left-80 h-full w-full rotate-90 scale-x-150 transform object-contain">
        <path d="M0 1H1594.5" stroke="url(#line-path-gradient-:rb8:)" strokeDasharray="8 8"></path>
        <defs>
          <linearGradient id="line-path-gradient-:rb8:" x1="0" y1="1.5" x2="1594.5" y2="1.5" gradientUnits="userSpaceOnUse">
            <stop stopColor="white" stop-opacity="0"></stop>
            <stop offset="0.2" stopColor="var(--neutral-400)"></stop>
            <stop offset="0.8" stopColor="var(--neutral-400)"></stop>
            <stop offset="1" stopColor="white" stop-opacity="0"></stop>
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}

const people = [
  {
    id: 1,
    name: '	The Coder',
    designation: 'FullStack Developer',
    image: 'https://avatars.githubusercontent.com/u/115723431?v=4',
  },
  {
    id: 2,
    name: 'Shokhjakhon',
    designation: 'FullStack Developer',
    image: 'https://avatars.githubusercontent.com/u/113612600?v=4',
  },
  {
    id: 3,
    name: 'Nodirbek',
    designation: 'Backend Developer',
    image: 'https://avatars.githubusercontent.com/u/129874807?v=4',
  },
  {
    id: 4,
    name: '	Muhammadqodir',
    designation: 'FullStack Developer',
    image: 'https://avatars.githubusercontent.com/u/114002954?s=100&v=4',
  },
  {
    id: 5,
    name: 'Shokhjakhon',
    designation: 'FullStack Developer',
    image: 'https://avatars.githubusercontent.com/u/78145953?v=4',
  },
]
