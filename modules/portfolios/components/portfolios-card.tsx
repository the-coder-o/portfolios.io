'use client'

import React, { useState } from 'react'
import { FolderX } from 'lucide-react'

import { useGetUsersPortfolios } from '@/modules/portfolios/hooks/useGetUsersPortfolios'
import { cn } from '@/lib/utils'
import { sortOptions } from '@/constants/sort-option'
import { languageTools } from '@/constants/language-tools'
import { jobCategories } from '@/constants/job-categories'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import { PortfolioCardLoading } from '@/components/loading/portfolios-loading'
import { PortfolioCard } from '@/components/cards/portfolio-card'

export const PortfoliosCard = () => {
  const { data, isPending } = useGetUsersPortfolios()

  const [activeCategory, setActiveCategory] = useState('All')

  const filteredPortfolios = activeCategory === 'All' ? data : data?.filter((categories) => categories.category?.name === activeCategory)

  return (
    <div className="mb-[120px] space-y-2">
      <div className="flex items-center justify-between gap-10 max-md:flex-col">
        <div className="flex-1 overflow-x-auto scrollbar-hide max-md:max-w-[100%]">
          <div className="flex items-center gap-1 whitespace-nowrap px-4 py-4 max-md:p-0">
            {jobCategories.map((category) => {
              const Icon = category.icon
              return (
                <Button
                  key={category.name}
                  size="sm"
                  onClick={() => setActiveCategory(category.name)}
                  className={cn('flex-shrink-0 rounded-xl border-2 border-[#000] hover:border-green-300 hover:bg-green-700', activeCategory === category.name ? 'border-2 border-green-300 bg-green-700 text-white' : 'bg-transparent text-white')}
                >
                  <Icon className="mr-2 h-4 w-4" />
                  {category.name}
                </Button>
              )
            })}
          </div>
        </div>
        <div className="flex items-center gap-2 max-md:mb-4 max-md:w-full max-sm:flex-col">
          <Select>
            <SelectTrigger className="h-11 w-[180px] rounded-xl max-md:w-full">
              <SelectValue placeholder="Sort By languages" />
            </SelectTrigger>
            <SelectContent className="rounded-xl">
              {languageTools.map((value, index) => (
                <SelectItem key={index} value={value.name} className="rounded-lg">
                  {value.type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="h-11 w-[180px] rounded-xl max-md:w-full">
              <SelectValue placeholder="Sort By" />
            </SelectTrigger>
            <SelectContent className="rounded-xl">
              {sortOptions.map((value, index) => (
                <SelectItem key={index} value={value.name} className="rounded-lg">
                  {value.type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-3 px-4 max-md:px-0 sm:grid-cols-2 lg:grid-cols-4">
        {isPending ? (
          Array.from({ length: 8 }).map((_, index) => <PortfolioCardLoading isPending={isPending} key={index} />)
        ) : filteredPortfolios && filteredPortfolios.length > 0 ? (
          filteredPortfolios.reverse().map((portfolio) => <PortfolioCard key={portfolio._id} portfolio={portfolio} />)
        ) : (
          <div className="col-span-full flex flex-col items-center justify-center py-12 text-center">
            <FolderX className="mb-4 h-16 w-16 text-muted-foreground" />
            <h3 className="mb-2 text-2xl font-semibold">No portfolios found</h3>
            <p className="max-w-md text-muted-foreground">There are no portfolios available in the {activeCategory} category. Try selecting a different category or check back later.</p>
          </div>
        )}
      </div>
    </div>
  )
}
