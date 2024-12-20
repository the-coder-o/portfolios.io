'use client'

import React, { useState } from 'react'
import Link from 'next/link'

import { useGetUserPortfolio } from '@/modules/profile/hooks/useGetUserPortfolios'
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination'
import { PortfolioCardLoading } from '@/components/loading/portfolios-loading'
import { PortfolioCard } from '@/components/cards/portfolio-card'

const ITEMS_PER_PAGE = 8

export const PortfolioView = () => {
  const { data, isPending } = useGetUserPortfolio()
  const [currentPage, setCurrentPage] = useState(1)

  if (isPending) {
    return (
      <div className={'container'}>
        <div className={'mb-[100px] mt-5 grid grid-cols-4 gap-3 max-lg:grid-cols-2 max-lg:gap-3 max-sm:grid-cols-1'}>
          {Array.from({ length: ITEMS_PER_PAGE }).map((_, index) => (
            <PortfolioCardLoading key={index} isPending={isPending} />
          ))}
        </div>
      </div>
    )
  }

  if (data.length === 0) {
    return (
      <div className={'container'}>
        <div className="mb-10 mt-5 bg-black max-md:mb-[100px]">
          <div className="rounded-xl border border-dashed border-border p-8 text-center">
            <div className="mb-4 flex justify-center"></div>
            <h3 className="mb-2 text-2xl font-semibold">Create your first portfolio</h3>
            <p className="mx-auto mb-6 max-w-sm text-muted-foreground">Show off your best work. Get feedback, likes and be a part of a growing community.</p>
            <Link href="/dashboard/portfolios/all-portfolios" className="inline-flex items-center justify-center rounded-xl bg-primary px-8 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90">
              Create portfolio
            </Link>
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
