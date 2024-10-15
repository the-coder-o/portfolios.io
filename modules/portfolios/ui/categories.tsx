'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Grid, Code, GraduationCap, Wrench, Rocket, BarChart, PenTool, Monitor, Briefcase, Smartphone, Globe, Layers, Database, ShieldCheck, Edit3, TrendingUp, ChevronDown, X, Search } from 'lucide-react'
import { useState } from 'react'

import { cn } from '@/lib/utils'

const categories = [
  { name: 'All', icon: Grid },
  { name: 'Designers', icon: PenTool },
  { name: 'Developers', icon: Code },
  { name: 'Students', icon: GraduationCap },
  { name: 'Engineers', icon: Wrench },
  { name: 'Founders', icon: Rocket },
  { name: 'Marketers', icon: BarChart },
  { name: 'Product Managers', icon: Briefcase },
  { name: 'Content Creators', icon: Edit3 },
  { name: 'UI/UX Designers', icon: Layers },
  { name: 'Cybersecurity', icon: ShieldCheck },
  { name: 'Mobile Developers', icon: Smartphone },
  { name: 'Web Developers', icon: Monitor },
  { name: 'Data Engineers', icon: Database },
  { name: 'Growth Hackers', icon: TrendingUp },
  { name: 'International', icon: Globe },
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
  const [showAllCategories, setShowAllCategories] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')

  const visibleCategories = categories.slice(0, 5)
  const hasMoreCategories = categories.length > 5

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const CategoryButton = ({ category, onClick }: any) => {
    const Icon = category.icon
    return (
      <motion.button
        key={category.name}
        className={cn('flex h-10 items-center space-x-2 rounded-xl px-4 py-2 text-sm font-medium transition-colors', activeCategory === category.name ? 'bg-primary text-primary-foreground' : 'bg-muted hover:bg-muted/80')}
        onClick={() => onClick(category.name)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Icon className="h-4 w-4" />
        <span>{category.name}</span>
      </motion.button>
    )
  }

  return (
    <div className="mb-8 flex w-full justify-between">
      <div className="flex flex-wrap gap-2">
        {visibleCategories.map((category) => (
          <CategoryButton key={category.name} category={category} onClick={setActiveCategory} />
        ))}
        {hasMoreCategories && (
          <motion.button className="flex h-10 items-center space-x-2 rounded-xl bg-muted px-4 py-2 text-sm font-medium transition-colors hover:bg-muted/80" onClick={() => setShowAllCategories(true)} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <span className="flex items-center gap-1.5">
              <Grid size={16} />
              View All Categories
            </span>
          </motion.button>
        )}
      </div>
      <div className="relative">
        <button className="flex h-10 w-[200px] items-center justify-between rounded-xl bg-muted px-4 py-2 text-sm font-medium transition-colors hover:bg-muted/80" onClick={() => setIsOpen(!isOpen)}>
          <span>{sortOptions.find((option) => option.value === sort)?.label}</span>
          <ChevronDown className="ml-2 h-4 w-4" />
        </button>
        {isOpen && (
          <motion.div className="absolute z-10 mt-1 w-[200px] rounded-xl border bg-background shadow-lg" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
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
      <AnimatePresence>
        {showAllCategories && (
          <motion.div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <motion.div className="relative max-h-[80vh] w-full max-w-2xl overflow-y-auto rounded-xl bg-background p-6 shadow-xl" initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}>
              <button className="absolute right-4 top-4 text-gray-500 hover:text-gray-700" onClick={() => setShowAllCategories(false)}>
                <X className="h-6 w-6" />
              </button>
              <h2 className="mb-4 text-2xl font-bold">All Categories</h2>
              <div className="mb-4 flex items-center rounded-xl bg-muted/50 px-3">
                <Search className="mr-2 h-5 w-5 text-muted-foreground" />
                <input type="text" placeholder="Search categories..." className="h-11 w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
              </div>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                {categories.map((category) => (
                  <CategoryButton
                    key={category.name}
                    category={category}
                    onClick={(name: string) => {
                      setActiveCategory(name)
                      setShowAllCategories(false)
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
