'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Search } from 'lucide-react'

import { CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command'
import { Button } from '@/components/ui/button'

import { rezumeData } from '@/.mock/rezume.data'
import { portfoliosData } from '@/.mock/portfolios.data'

import { RezumeProps } from '../cards/rezume-card'
import { CardProps } from '../cards/portfolio-card'

export const Searchmodal = () => {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'j' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [])

  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        className="relative flex h-11 w-full items-center justify-between rounded-xl border border-transparent bg-white px-4 py-2 text-sm text-muted-foreground shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] dark:border-white/[0.2] dark:bg-[#111111]"
      >
        <div className="flex items-center">
          <Search size={18} />
          <span className="pl-2 pr-4 text-xs font-medium text-foreground/60 transition-colors hover:text-foreground/80 sm:text-sm">Search Portfolios</span>
        </div>
        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
          <span className="text-xs">⌘</span>J
        </kbd>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type the author's name or portfolio name..." />
        <CommandList className="rounded-xl">
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Top Portfolios">
            {portfoliosData.slice(0, 5).map((portfolios: CardProps, index: number) => (
              <CommandItem key={index} className="flex items-center justify-between">
                <Link href={portfolios?.singlePageDetails?.githubLink} target="_blank" className="flex">
                  <Image src={portfolios?.image} alt={`${portfolios?.author?.name}'s profile`} width={1200} height={1200} className="mr-2 !h-[80px] !w-[110px] rounded-lg bg-cover object-cover" />
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center">
                      <Image src={portfolios?.author?.profileImage} alt={`${portfolios?.author?.name}'s profile`} width={24} height={24} className="mr-2 rounded-lg" />
                      <h2 className="text-[18px] text-xl font-medium">{portfolios?.author?.name}</h2>
                    </div>
                    <p className="line-clamp-2">{portfolios?.description}</p>
                  </div>
                </Link>
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandGroup heading="Top Rezume">
            {rezumeData.slice(0, 5).map((rezume: RezumeProps) => (
              <CommandItem key={rezume?.id} className="flex items-center justify-between">
                <Link href={rezume?.url} target="_blank" className="flex">
                  <Image src={rezume?.image} alt={`${rezume?.creatorName}'s profile`} width={1200} height={1200} className="mr-2 !h-[80px] !w-[55px] rounded-lg bg-cover object-cover" />
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center">
                      <Image src={'https://cdn-icons-png.flaticon.com/512/149/149071.png'} alt={`${rezume?.creatorName}'s profile`} width={24} height={24} className="mr-2 rounded-lg" />
                      <h2 className="text-[18px] text-xl font-medium">{rezume?.creatorName}</h2>
                    </div>
                    <p className="line-clamp-3">{rezume?.title}</p>
                  </div>
                </Link>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}
