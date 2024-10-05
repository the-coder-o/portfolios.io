'use client'

import { MoonIcon, SunIcon } from 'lucide-react'
import { useTheme } from 'next-themes'
import * as React from 'react'

import { Button } from '@/components/ui/button'

export function ModeToggle() {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }

  return (
    <Button variant="outline" size="icon" onClick={toggleTheme} className="relative flex cursor-pointer items-center justify-center rounded-xl !border-none bg-transparent text-neutral-500 hover:shadow-input dark:text-neutral-500">
      {theme === 'light' ? <SunIcon size={18} className="rotate-0 scale-100 transition-all" /> : <MoonIcon size={18} className="rotate-0 scale-100 transition-all" />}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
