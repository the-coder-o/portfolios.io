import { TemplatesSection } from '@/modules/home/components/sections/template-section'
import { ShowcaseSection } from '@/modules/home/components/sections/showcase-section'
import { MarqueeDemo } from '@/modules/home/components/sections/reviewcard-section'
import { LogoCarousel } from '@/components/logo/logo-slider'

import { PortfolioSection } from '../components/sections/portfolio-section'
import { HeroSection } from '../components/sections/hero-section'

export const HomeView = () => {
  return (
    <div>
      <div className="container">
        <HeroSection />
      </div>
      <div className="pt-[80px] max-md:pt-10">
        <div className="container">
          <LogoCarousel />
          <PortfolioSection />
          <TemplatesSection />
        </div>
      </div>
      <ShowcaseSection />
      <MarqueeDemo />
    </div>
  )
}
