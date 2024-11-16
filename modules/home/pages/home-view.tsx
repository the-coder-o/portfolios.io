import { RezumeSection } from '../components/sections/rezume-section'
import { PortfolioSection } from '../components/sections/portfolio-section'
import { HeroSection } from '../components/hero'

export const HomeView = () => {
  return (
    <div>
      <div className="border-b-[2.5px] border-b-[##e5e7eb] pb-[50px]">
        <div className="container">
          <HeroSection />
        </div>
      </div>
      <div className="bg-gradient-to-b from-[#151618] to-black pt-[100px] max-md:pt-10">
        <div className="container">
          <PortfolioSection />
          <RezumeSection />
        </div>
      </div>
    </div>
  )
}
