import { Spotlight } from '@/components/animation/spotlight'

import { HeroSection } from '../components/sections/hero-section'
import { Portfolioscard } from '../components/portfolios-card'

export const PortfoliView = () => {
  return (
    <>
      <Spotlight />
      <div className="container">
        <div className="mt-[160px] max-md:mt-[120px]">
          <HeroSection />
          <Portfolioscard />
        </div>
      </div>
    </>
  )
}
