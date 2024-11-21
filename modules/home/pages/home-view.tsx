import { MarqueeDemo } from '@/modules/home/components/sections/reviewcard-section'

import { PortfolioSection } from '../components/sections/portfolio-section'
import { HeroSection } from '../components/hero'

export const HomeView = () => {
  return (
    <div>
      <div>
        <div className="container">
          <HeroSection />
        </div>
      </div>
      <div className="pt-[130px] max-md:pt-10">
        <div className="container">
          <PortfolioSection />
        </div>
      </div>
      <MarqueeDemo />
    </div>
  )
}
