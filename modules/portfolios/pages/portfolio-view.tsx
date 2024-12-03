import { PortfoliosCardSection } from '@/modules/portfolios/components/portfolios-card-section'

import { HeroSection } from '../components/sections/hero-section'

export const PortfolioView = () => {
  return (
    <>
      <div className="container">
        <div className="mt-[160px] max-md:mt-[120px]">
          <HeroSection />
          <PortfoliosCardSection />
        </div>
      </div>
    </>
  )
}
