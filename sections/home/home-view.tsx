import React from 'react'

import { CardSection } from './card-section/card-section'
import { HeroSection } from './hero-section/hero-section'

const HomeView = () => {
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

export default HomeView
