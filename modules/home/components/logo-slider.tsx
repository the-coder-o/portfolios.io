import React from 'react'
import Image from 'next/image'

import { cn } from '@/lib/utils'
import { AnimatedTooltip } from '@/components/animation/animated-toolip'

import { people } from '@/.mock/people.data'
import { logos } from '@/.mock/logos.data'

export const LogoSlider = () => {
  return (
    <div className="flex items-center justify-center gap-10 max-md:mt-10 max-md:flex-col max-md:gap-2 max-sm:gap-2">
      <div className="relative mt-5 flex flex-col items-center justify-center gap-3">
        <h2 className="relative z-10 text-center text-xs text-neutral-500">Trusted by Founders and Entrepreneurs from all over the world</h2>
        <div className="flex">
          <AnimatedTooltip items={people} />
        </div>
      </div>
      <div className="relative mt-10 w-[500px] overflow-hidden max-md:mt-0 max-sm:w-full">
        <div className="animate-scroll flex items-center">
          {[...Array(5)].map((_, i) => (
            <React.Fragment key={i}>
              {logos.map((logo, index) => (
                <Image key={`${i}-${index}`} src={logo.src} alt={logo.alt} width={200} height={200} className={cn(logo.className, '!w-[140px]')} />
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  )
}
