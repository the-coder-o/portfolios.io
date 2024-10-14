'use client'

import { motion } from 'framer-motion'
import { ChevronDown, Users, Code, GraduationCap, Wrench, Rocket, Grid } from 'lucide-react'
import { useState } from 'react'

import { cn } from '@/lib/utils'

const categories = [
  { name: 'All', icon: Grid },
  { name: 'Designers', icon: Users },
  { name: 'Developers', icon: Code },
  { name: 'Students', icon: GraduationCap },
  { name: 'Engineers', icon: Wrench },
  { name: 'Founders', icon: Rocket },
]

const sortOptions = [
  { value: 'recent', label: 'Recently Added' },
  { value: 'alphabetical', label: 'Alphabetical' },
  { value: 'popular', label: 'Most Popular' },
]

export const Categories = () => {
  const [activeCategory, setActiveCategory] = useState('All')
  const [sort, setSort] = useState('recent')
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="mb-8 flex w-full justify-between">
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => {
          const Icon = category.icon
          return (
            <motion.button
              key={category.name}
              className={cn('flex h-11 items-center space-x-2 rounded-xl px-4 py-2 text-sm font-medium transition-colors', activeCategory === category.name ? 'bg-primary text-primary-foreground' : 'bg-muted hover:bg-muted/80')}
              onClick={() => setActiveCategory(category.name)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon className="h-4 w-4" />
              <span>{category.name}</span>
            </motion.button>
          )
        })}
      </div>
      <div className="relative">
        <button className="flex h-11 w-full items-center justify-between rounded-xl bg-muted px-4 py-2 text-sm font-medium transition-colors hover:bg-muted/80" onClick={() => setIsOpen(!isOpen)}>
          <span>{sortOptions.find((option) => option.value === sort)?.label}</span>
          <ChevronDown className="ml-2 h-4 w-4" />
        </button>
        {isOpen && (
          <motion.div className="absolute z-10 mt-1 w-full rounded-xl border bg-background shadow-lg" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
            {sortOptions.map((option) => (
              <button
                key={option.value}
                className="block w-full px-4 py-2 text-left text-sm transition-colors hover:bg-muted/50"
                onClick={() => {
                  setSort(option.value)
                  setIsOpen(false)
                }}
              >
                {option.label}
              </button>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  )
}
