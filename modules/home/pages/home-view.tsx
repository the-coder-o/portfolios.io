import { HeroSection } from '../components/hero'
import { PortfolioSection } from '../components/sections/portfolio-section'
import { RezumeSection } from '../components/sections/rezume-section'

export const HomeView = () => {
  return (
    <div className="container">
      <div className="mb-[160px] max-sm:mb-10">
        <HeroSection />
      </div>
      <PortfolioSection />
      <RezumeSection />
    </div>
  )
}
