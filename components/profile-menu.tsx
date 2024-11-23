'use client'

import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { BookmarkCheck, Plus, Settings, User } from 'lucide-react'

import { useGetProfileMe } from '@/modules/edit-profile/hooks/useGetProfileMe'
import SignOutButton from '@/hooks/use-signout'
import { Skeleton } from '@/components/ui/skeleton'
import { DropdownMenu, DropdownMenuContent, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export const ProfileMenu = () => {
  const { data: profile, isLoading } = useGetProfileMe()
  const [isOpen, setIsOpen] = useState(false)

  const pathname = usePathname()

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger className="rounded-xl">
        <Avatar className="rounded-xl">
          {isLoading ? (
            <Skeleton className="h-full w-full rounded-xl" />
          ) : (
            <>
              <AvatarImage src={profile?.avatar} alt={profile?.name || '@shadcn'} className="bg-cover object-cover" />
              <AvatarFallback className="rounded-xl">{profile?.name?.slice(0, 2).toUpperCase() || 'TS'}</AvatarFallback>
            </>
          )}
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="mt-2 w-[250px] rounded-xl dark:bg-background">
        <div className="flex items-center gap-2 p-2">
          <Avatar className="h-14 w-14 rounded-xl">
            {isLoading ? (
              <Skeleton className="h-full w-full rounded-xl" />
            ) : (
              <>
                <AvatarImage src={profile?.avatar} alt={profile?.name || '@shadcn'} className="bg-cover object-cover" />
                <AvatarFallback className="rounded-xl">{profile?.name?.slice(0, 2).toUpperCase() || 'TS'}</AvatarFallback>
              </>
            )}
          </Avatar>
          <div className="flex flex-col gap-1">
            {isLoading ? (
              <>
                <Skeleton className="h-5 w-24" />
                <Skeleton className="h-4 w-32" />
              </>
            ) : (
              <>
                <h2 className="font-medium">{profile?.name || 'Test Test'}</h2>
                <p className="text-xs dark:text-[#999]">{profile?.email || 'test@gmail.com'}</p>
              </>
            )}
          </div>
        </div>
        <DropdownMenuSeparator />
        <div className="flex flex-col">
          <Link href={'/profile/portfolios'} prefetch={false} className="flex h-[35px] items-center gap-2 rounded-xl pl-2 text-[15px] dark:hover:bg-accent dark:hover:text-white">
            <User size={16} />
            Profile
          </Link>
          <Link href={'/dashboard/portfolios/create-portfolio'} className="flex h-[35px] items-center gap-2 rounded-xl pl-2 text-[15px] dark:hover:bg-accent dark:hover:text-white">
            <Plus size={16} />
            Add portfolio
          </Link>
          <Link href={'/profile/favorites'} prefetch={false} className="flex h-[35px] items-center gap-2 rounded-xl pl-2 text-[15px] dark:hover:bg-accent dark:hover:text-white">
            <BookmarkCheck size={16} />
            Favorites
          </Link>
          <DropdownMenuSeparator />
          <Link href={'/edit-profile'} prefetch={false} className="flex h-[35px] items-center gap-2 rounded-xl pl-2 text-[15px] dark:hover:bg-accent dark:hover:text-white">
            <Settings size={16} />
            Settings
          </Link>
        </div>
        <DropdownMenuSeparator />
        <SignOutButton />
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
