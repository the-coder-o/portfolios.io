import { HeroSection } from '../components/sections/hero-section'
import { PortfoliosCard } from '../components/portfolios-card'

export const PortfolioView = () => {
  return (
    <>
      <div className="container">
        <div className="mt-[160px] max-md:mt-[120px]">
          <HeroSection />
          <PortfoliosCard />
        </div>
      </div>
    </>
  )
}
