'use client'

import React, { useState, useEffect } from 'react'

import { portfoliosData } from '@/.mock/portfolios.data'
import { PortfolioCard } from '@/components/cards/portfolio-card'

export const Portfolioscard = () => {
  const itemsPerPage = 6
  const [displayedItems, setDisplayedItems] = useState(portfoliosData.slice(0, itemsPerPage))
  const [currentPage, setCurrentPage] = useState(1)

  const loadMoreItems = () => {
    const nextPage = currentPage + 1
    const newItems = portfoliosData.slice(0, itemsPerPage * nextPage)
    setDisplayedItems(newItems)
    setCurrentPage(nextPage)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop + 50 >= document.documentElement.scrollHeight) {
        loadMoreItems()
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [currentPage])

  return (
    <div className="grid grid-cols-3 gap-3 max-lg:grid-cols-2 max-lg:gap-3 max-sm:grid-cols-1">
      {displayedItems.map((card, index) => (
        <PortfolioCard key={index} {...card} />
      ))}
    </div>
  )
}
