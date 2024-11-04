'use client'

import React, { useEffect, useState } from 'react'

import { rezumeData } from '@/.mock/rezume.data'
import { RezumeCard } from '@/components/cards/rezume-card'

const RezumeView = () => {
  const itemsPerPage = 12

  const filteredData = rezumeData.filter((item, index, self) => {
    return index === self.findIndex((i) => i.image === item.image)
  })

  const [displayedItems, setDisplayedItems] = useState(filteredData.slice(0, itemsPerPage))
  const [currentPage, setCurrentPage] = useState(1)

  const loadMoreItems = () => {
    const nextPage = currentPage + 1
    const newItems = filteredData.slice(0, itemsPerPage * nextPage)
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage])

  return (
    <div className="container">
      <div className="mb-[150px] mt-10">
        <div className="mb-5 flex flex-col gap-2">
          <h1 className="text-3xl font-bold md:text-4xl">Rezume Templates</h1>
          <p className="text-muted-foreground">Here are rezume templates that you can use to get started, both paid and free.</p>
        </div>
        <div className="grid grid-cols-4 gap-3 max-lg:grid-cols-2 max-lg:gap-3 max-sm:grid-cols-1">
          {displayedItems.map((card) => (
            <RezumeCard key={card.id} {...card} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default RezumeView
