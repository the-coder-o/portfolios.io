import React from 'react'

import { CardSection } from '../ui/card'
import { HeroSection } from '../ui/hero'

export const HomeView = () => {
  return (
    <div className="container">
      <div className="mb-[160px]">
        <HeroSection />
      </div>
      <div className="mb-[160px]">
        <CardSection />
      </div>
    </div>
  )
}
