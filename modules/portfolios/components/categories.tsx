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

const filterOptions = [
  { value: 'all', label: 'All Tools' },
  { value: 'nextjs', label: 'Next.js' },
  { value: 'reactjs', label: 'React.js' },
  { value: 'vuejs', label: 'Vue.js' },
  { value: 'angular', label: 'Angular' },
  { value: 'svelte', label: 'Svelte' },
  { value: 'typescript', label: 'TypeScript' },
  { value: 'javascript', label: 'JavaScript' },
  { value: 'gatsby', label: 'Gatsby' },
  { value: 'solidjs', label: 'Solid.js' },
  { value: 'preact', label: 'Preact' },
  { value: 'ember', label: 'Ember.js' },
  { value: 'backbone', label: 'Backbone.js' },
  { value: 'lit', label: 'Lit' },
  { value: 'alpinejs', label: 'Alpine.js' },
  { value: 'stencil', label: 'Stencil' },
]

export const Categories = () => {
  const [activeCategory, setActiveCategory] = useState('All')
  const [sort, setSort] = useState('recent')
  const [languages, setLanguages] = useState('all')
  const [isOpen, setIsOpen] = useState(false)
  const [isOpenLanguage, setIsOpenLanguage] = useState(false)
  const [showAllCategories, setShowAllCategories] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')

  const visibleCategories = categories.slice(0, 4)
  const hasMoreCategories = categories.length > 5

  const CategoryButton = ({ category, onClick, className }: any) => {
    const Icon = category.icon
    return (
      <>
        <motion.button
          key={category.name}
          className={cn('flex h-10 items-center space-x-2 rounded-xl px-4 py-2 text-sm font-medium transition-colors', activeCategory === category.name ? 'bg-primary text-primary-foreground' : 'bg-muted hover:bg-muted/80', className)}
          onClick={() => onClick(category.name)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          {...({} as any)}
        >
          <Icon className="h-4 w-4" />
          <span>{category.name}</span>
        </motion.button>
      </>
    )
  }

  return (
    <div className="mb-4 flex w-full justify-between">
      <div className="flex flex-wrap gap-2">
        {visibleCategories.map((category) => (
          <CategoryButton key={category.name} category={category} onClick={setActiveCategory} className={'max-md:hidden'} />
        ))}
        {hasMoreCategories && (
          <motion.button
            className="flex h-10 items-center space-x-2 rounded-xl bg-muted px-4 py-2 text-sm font-medium text-black text-white transition-colors max-md:bg-white max-sm:text-black"
            onClick={() => setShowAllCategories(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            {...({} as any)}
          >
            <span className="flex items-center gap-1.5">
              <Grid size={16} />
              View All Categories
            </span>
          </motion.button>
        )}
      </div>
      <div className="flex items-center gap-2">
        <div className="relative">
          <button className="flex h-11 w-[200px] items-center justify-between rounded-xl bg-muted px-4 py-2 text-sm font-medium transition-colors hover:bg-muted/80 max-sm:w-full" onClick={() => setIsOpenLanguage(!isOpenLanguage)}>
            <span>{filterOptions.find((option) => option.value === languages)?.label}</span>
            <ChevronDown className="ml-2 h-4 w-4" />
          </button>
          {isOpenLanguage && (
            <motion.div className="absolute z-10 mt-1 w-[200px] rounded-xl border bg-background shadow-lg" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} {...({} as any)}>
              {filterOptions.map((option) => (
                <button
                  key={option.value}
                  className="block w-full px-4 py-2 text-left text-sm transition-colors hover:bg-muted/50"
                  onClick={() => {
                    setLanguages(option.value)
                    setIsOpenLanguage(false)
                  }}
                >
                  {option.label}
                </button>
              ))}
            </motion.div>
          )}
        </div>
        <div className="relative">
          <button className="flex h-11 w-[200px] items-center justify-between rounded-xl bg-muted px-4 py-2 text-sm font-medium transition-colors hover:bg-muted/80 max-sm:w-full" onClick={() => setIsOpen(!isOpen)}>
            <span>{sortOptions.find((option) => option.value === sort)?.label}</span>
            <ChevronDown className="ml-2 h-4 w-4" />
          </button>
          {isOpen && (
            <motion.div className="absolute z-10 mt-1 w-[200px] rounded-xl border bg-background shadow-lg" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} {...({} as any)}>
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
      <AnimatePresence>
        {showAllCategories && (
          <motion.div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} {...({} as any)}>
            <motion.div className="relative max-h-[80vh] w-full max-w-2xl overflow-y-auto rounded-xl border-2 border-border bg-black p-6 shadow-xl" initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} {...({} as any)}>
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
