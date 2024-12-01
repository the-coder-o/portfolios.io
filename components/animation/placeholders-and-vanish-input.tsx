'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Search } from 'lucide-react'

import { PortfolioList } from '@/modules/dashboard/types/portfolios-list'
import { formatToSlug } from '@/lib/format-to-slug'
import OptimizedImage from '@/components/optimize-image'

interface MultiSearchProps {
  onSearch: (query: string) => PortfolioList[]
  portfolios: PortfolioList[]
}

export function MultiSearch({ onSearch, portfolios }: MultiSearchProps) {
  const [searchValue, setSearchValue] = useState('')
  const [suggestions, setSuggestions] = useState<string[]>([])
  const [selectedIndex, setSelectedIndex] = useState(-1)
  const [filteredPortfolios, setFilteredPortfolios] = useState<PortfolioList[]>([])
  const inputRef = useRef<HTMLInputElement>(null)

  const generateSuggestions = (query: string) => {
    if (!query) return []

    const allSuggestions = portfolios.flatMap((portfolio) => [portfolio.name, portfolio.description])

    const uniqueSuggestions = Array.from(new Set(allSuggestions))

    return uniqueSuggestions.filter((suggestion) => suggestion.toLowerCase().includes(query.toLowerCase())).slice(0, 5)
  }

  useEffect(() => {
    const newSuggestions = generateSuggestions(searchValue)
    setSuggestions(newSuggestions)
    setSelectedIndex(-1)

    const filtered = onSearch(searchValue)
    setFilteredPortfolios(filtered)
  }, [searchValue, onSearch])

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setSelectedIndex((prev) => (prev < suggestions.length - 1 ? prev + 1 : prev))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setSelectedIndex((prev) => (prev > -1 ? prev - 1 : prev))
    } else if (e.key === 'Enter') {
      e.preventDefault()
      if (selectedIndex > -1) {
        setSearchValue(suggestions[selectedIndex])
        setSuggestions([])
      }
    }
  }

  return (
    <div className="relative mx-auto w-full max-w-xl">
      <div className="relative">
        <div className="relative flex items-center">
          <Search className="absolute left-4 h-5 w-5 text-gray-400" />
          <input
            ref={inputRef}
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Search portfolios..."
            className="h-12 w-full rounded-xl border-none bg-[#1C1C1C] pl-12 pr-12 text-white placeholder-gray-400 shadow-sm focus:outline-none focus:ring-0"
          />
          <button onClick={() => setSearchValue('')} className="absolute right-2 flex h-8 w-8 items-center justify-center rounded-lg bg-[#2A2A2A] disabled:opacity-50" disabled={!searchValue}>
            <ArrowRight className="h-4 w-4 text-gray-300" />
          </button>
        </div>
      </div>
      {filteredPortfolios.length > 0 && searchValue && (
        <div className="mt-2 w-full">
          <div className="max-h-[280px] overflow-y-auto rounded-xl bg-[#1C1C1C] p-2">
            <div className="grid grid-cols-1 gap-2">
              {filteredPortfolios.map((portfolio) => (
                <Link href={`/portfolios/${formatToSlug(portfolio.name)}`} key={portfolio._id} className="flex gap-2 rounded-xl bg-[#2A2A2A] p-2 text-white hover:bg-[#2A2A2A]/80">
                  <div>
                    <OptimizedImage src={`https://portfolio.shohjahon1code.uz${portfolio.images[0]}`} alt={portfolio.name} width={100} height={100} className="!h-[80px] !w-[80px] rounded-xl object-cover" />
                  </div>
                  <div className={'flex flex-col items-start'}>
                    <h3 className="text-[15px] font-medium">{portfolio.name}</h3>
                    <p className="line-clamp-2 w-[200px] text-start text-gray-400">{portfolio.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
