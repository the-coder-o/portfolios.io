import Image from 'next/image'
import React from 'react'

import { AnimatedTooltip } from '@/components/animation/animated-toolip'

export const LogoSlider = () => {
  return (
    <div className="mt-5 flex items-center justify-center gap-8">
      <div className="relative flex flex-col justify-center gap-3">
        <h2 className="relative z-10 text-xs text-neutral-500">Trusted by thousands of developers:</h2>
        <div className="flex">
          <AnimatedTooltip items={people} />
        </div>
      </div>
      <div className="mt-10 flex flex-wrap items-center justify-center max-sm:mt-auto max-sm:justify-normal">
        <Image src="https://i.postimg.cc/0Qw3VHk1/white-horizontal.png" alt="astro" width={200} height={200} className="h-8 !w-[120px]" />
        <Image src="https://i.postimg.cc/NjcnpxVW/que-es-nextjs-y-para-que-sirve-1-1697560678-removebg-preview.png" alt="astro" width={200} height={200} className="!w-[140px]" />
        <Image src="https://tailwindcss.com/_next/static/media/tailwindcss-logotype-white.944c5d0ef628083bb316f9b3d643385c86bcdb3d.svg" alt="astro" width={200} height={200} className="!w-[140px]" />
        <Image src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" alt="astro" width={200} height={200} className="ml-6 mr-3 !w-[40px]" />
        <Image src="https://astro.build/assets/press/astro-logo-light-gradient.svg" alt="astro" width={200} height={200} className="!w-[130px]" />
      </div>
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
