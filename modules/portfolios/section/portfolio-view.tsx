import React from 'react'

import { PlaceholdersAndVanishInput } from '@/components/animation/placeholders-and-vanish-input'
import { Spotlight } from '@/components/animation/spotlight'

import { TemplateCardSection } from '../ui/card'
import { Categories } from '../ui/categories'

export const PortfoliView = () => {
  const placeholders = ["What's the first rule of Fight Club?", 'Who is Tyler Durden?', 'Where is Andrew Laeddis Hiding?', 'Write a Javascript method to reverse a string', 'How to assemble your own PC?']

  return (
    <>
      <Spotlight />
      <div className="container">
        <div className="mb-[150px] mt-[150px]">
          <div className="relative mb-[180px] flex flex-col overflow-hidden sm:items-center sm:text-center">
            <div className="space-y-3 sm:max-w-[300px] md:max-w-[740px] md:space-y-5">
              <h1 className="w-[600px] text-5xl font-bold leading-[60px]">The best resources from the Portfolio.io community.</h1>
              <p className="text-balance text-xl text-white/80">Clone stunning sites with templates and plugins .</p>
              <PlaceholdersAndVanishInput placeholders={placeholders} />
            </div>
          </div>
          <div>
            <Categories />
            <TemplateCardSection />
          </div>
        </div>
      </div>
    </>
  )
}
