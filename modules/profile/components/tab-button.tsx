'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

import { cn } from '@/lib/utils'

type TabButtonProps = {
  page_url: string
  icon: React.ReactNode
  title: string
  is_active?: boolean
}

export const TabButton = ({ page_url, icon, title, is_active = false }: TabButtonProps) => {
  return (
    <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Link
        href={page_url}
        className={cn(
          'flex h-10 items-center justify-center gap-2 rounded-xl px-6 py-2 text-sm font-medium transition-colors max-md:h-auto max-md:!w-[140px] max-md:justify-start max-md:bg-transparent max-md:!px-0 max-md:!py-0 max-md:text-[#b4b4b4] max-sm:w-[175px] max-sm:!px-0',
          is_active ? 'bg-primary text-primary-foreground max-md:bg-transparent max-md:text-white' : 'bg-muted hover:bg-muted/80 max-md:bg-transparent max-md:hover:bg-transparent',
        )}
      >
        {icon}
        {title}
      </Link>
    </motion.button>
  )
}
