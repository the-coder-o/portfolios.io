import React from 'react'

import { HomeCardSection } from '../ui/card'
import { HeroSection } from '../ui/hero'

export const HomeView = () => {
  return (
    <div className="container">
      <div className="mb-[160px]">
        <HeroSection />
      </div>
      <div className="mb-[160px]">
        <HomeCardSection />
      </div>
    </div>
  )
}
