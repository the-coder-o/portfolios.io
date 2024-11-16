import { RezumeSection } from '../components/sections/rezume-section'
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
          <RezumeSection />
        </div>
      </div>
    </div>
  )
}
