'use client'

import React, { useCallback, useState } from 'react'
import { Check, ChevronsUpDown, FolderX } from 'lucide-react'

import { useGetUsersPortfolios } from '@/modules/portfolios/hooks/useGetUsersPortfolios'
import { cn } from '@/lib/utils'
import { sortOptions } from '@/constants/sort-option'
import { jobCategories } from '@/constants/job-categories'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command'
import { Button } from '@/components/ui/button'
import { PortfolioCardLoading } from '@/components/loading/portfolios-loading'
import { PortfolioCard } from '@/components/cards/portfolio-card'

export const PortfoliosCard = () => {
  const { data, isPending } = useGetUsersPortfolios()

  const [activeCategory, setActiveCategory] = useState('All')
  const [selectedSkills, setSelectedSkills] = useState<string[]>([])
  const [openSkillsPopover, setOpenSkillsPopover] = useState(false)

  const allSkills = Array.from(new Set(data?.flatMap((portfolio) => portfolio.skills.map((skill) => skill.name)) || []))

  const filteredPortfolios = data?.filter((portfolio) => {
    const categoryMatch = activeCategory === 'All' || portfolio.category?.name === activeCategory
    const skillsMatch = selectedSkills.length === 0 || selectedSkills.every((skill) => portfolio.skills.some((portfolioSkill) => portfolioSkill.name === skill))
    return categoryMatch && skillsMatch
  })

  const handleSkillToggle = useCallback((skillName: string) => {
    setSelectedSkills((prev) => (prev.includes(skillName) ? prev.filter((skill) => skill !== skillName) : [...prev, skillName]))
  }, [])

  return (
    <div className="mb-[120px]">
      <div className="mb-2.5 flex items-center justify-between gap-10 max-md:flex-col">
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
        <div className="flex items-center gap-2 max-md:mb-4 max-md:w-full">
          <Popover open={openSkillsPopover} onOpenChange={setOpenSkillsPopover}>
            <PopoverTrigger asChild>
              <Button variant="outline" role="combobox" aria-expanded={openSkillsPopover} className="h-11 w-[180px] justify-between rounded-xl max-md:w-full">
                {selectedSkills.length > 0 ? `${selectedSkills.length} skill${selectedSkills.length > 1 ? 's' : ''} selected` : 'Filter by Skills'}
                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[180px] p-0">
              <Command>
                <CommandInput placeholder="Search skills..." />
                <CommandList>
                  <CommandEmpty>No skills found.</CommandEmpty>
                  <CommandGroup>
                    {allSkills.map((skill) => (
                      <CommandItem key={skill} onSelect={() => handleSkillToggle(skill)}>
                        <Check className={cn('mr-2 h-4 w-4', selectedSkills.includes(skill) ? 'opacity-100' : 'opacity-0')} />
                        {skill}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
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
            <p className="max-w-md text-muted-foreground">There are no portfolios available matching your selected criteria. Try adjusting your filters or check back later.</p>
          </div>
        )}
      </div>
    </div>
  )
}
