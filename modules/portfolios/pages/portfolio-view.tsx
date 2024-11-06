import { Spotlight } from '@/components/animation/spotlight'
import { Portfolioscard } from '../components/portfolios-card'
import { HeroSection } from '../components/sections/hero-section'

export const PortfoliView = () => {
  return (
    <>
      <Spotlight />
      <div className="container">
        <div className="mb-[150px] mt-[120px] max-md:mt-[50px]">
          <HeroSection />
          <Portfolioscard />
        </div>
      </div>
    </>
  )
}
