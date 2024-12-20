'use client'

import React, { useState } from 'react'
import { Bookmark } from 'lucide-react'

import { useGetUserFavorites } from '@/modules/profile/hooks/useGetUserFavorites'
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination'
import { PortfolioCardLoading } from '@/components/loading/portfolios-loading'
import { PortfolioCard } from '@/components/cards/portfolio-card'

const ITEMS_PER_PAGE = 8

export const FavoritesView = () => {
  const { data, isPending } = useGetUserFavorites()
  const [currentPage, setCurrentPage] = useState(1)

  if (isPending) {
    return (
      <div className={'container'}>
        <div className={'mb-[100px] mt-5 grid grid-cols-4 gap-3 max-lg:grid-cols-2 max-lg:gap-3 max-sm:grid-cols-1'}>
          {Array.from({ length: 4 }).map((_, index) => (
            <PortfolioCardLoading key={index} isPending={isPending} />
          ))}
        </div>
      </div>
    )
  }

  if (data.length === 0) {
    return (
      <div className="container">
        <div className="mb-10 mt-5 bg-black max-md:mb-[100px]">
          <div className="rounded-xl border border-dashed border-border p-8 text-center">
            <div className="mb-4 flex justify-center">
              <div className="h-12 w-12">
                <Bookmark className="h-12 w-12 text-muted-foreground" />
              </div>
            </div>
            <h3 className="mb-2 text-2xl font-semibold">No Favorite Portfolios Yet</h3>
            <p className="mx-auto mb-6 max-w-sm text-muted-foreground">You don&apos;t have any favorite portfolios yet! Start exploring and add the ones you love to easily keep track of your top picks.</p>
          </div>
        </div>
      </div>
    )
  }

  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE)
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const endIndex = startIndex + ITEMS_PER_PAGE
  const currentPageData = data.slice(startIndex, endIndex)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  return (
    <div className="container">
      <div className="mb-6 mt-5 grid grid-cols-4 gap-3 max-lg:grid-cols-2 max-lg:gap-3 max-sm:grid-cols-1">
        {currentPageData.map((portfolio) => (
          <PortfolioCard key={portfolio._id} portfolio={portfolio} />
        ))}
      </div>
      <div className="mb-[100px] flex justify-center">
        <Pagination>
          <PaginationContent>
            {currentPage > 1 && (
              <PaginationItem>
                <PaginationPrevious onClick={() => handlePageChange(currentPage - 1)} />
              </PaginationItem>
            )}
            {[...Array(totalPages)].map((_, index) => {
              const pageNumber = index + 1
              if (pageNumber === 1 || pageNumber === totalPages || (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1)) {
                return (
                  <PaginationItem key={pageNumber}>
                    <PaginationLink onClick={() => handlePageChange(pageNumber)} isActive={pageNumber === currentPage} className="rounded-xl">
                      {pageNumber}
                    </PaginationLink>
                  </PaginationItem>
                )
              } else if ((pageNumber === currentPage - 2 && currentPage > 3) || (pageNumber === currentPage + 2 && currentPage < totalPages - 2)) {
                return <PaginationEllipsis key={pageNumber} />
              }
              return null
            })}
            {currentPage < totalPages && (
              <PaginationItem>
                <PaginationNext onClick={() => handlePageChange(currentPage + 1)} className={'cursor-pointer'} />
              </PaginationItem>
            )}
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  )
}
