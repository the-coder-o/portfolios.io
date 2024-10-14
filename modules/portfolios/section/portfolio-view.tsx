import React from 'react'

import { TemplateCardSection } from '../ui/card'

export const PortfoliView = () => {
  return (
    <div className="container">
      <div className="mb-[150px] mt-10">
        <div className="mb-5 flex flex-col gap-2">
          <h1 className="text-3xl font-bold md:text-4xl">Portfolios</h1>
          <p className="text-muted-foreground">Here are some templates that you can use to get started, both paid and free.</p>
        </div>
        <TemplateCardSection />
      </div>
    </div>
  )
}
