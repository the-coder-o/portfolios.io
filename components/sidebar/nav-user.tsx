'use client'

import { BookmarkCheck, ChevronsUpDown, LogOut, Plus, Settings, User } from 'lucide-react'
import Link from 'next/link'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar } from '@/components/ui/sidebar'

import { Button } from '../ui/button'

export function NavUser({
  user,
}: {
  user: {
    name: string
    email: string
    avatar: string
  }
}) {
  const { isMobile } = useSidebar()

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton size="lg" className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground">
              <Avatar className="h-8 w-8 rounded-xl">
                <AvatarImage src={user.avatar} alt={user.name} />
                <AvatarFallback className="rounded-xl">CN</AvatarFallback>
              </Avatar>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">{user.name}</span>
                <span className="truncate text-xs">{user.email}</span>
              </div>
              <ChevronsUpDown className="ml-auto size-4" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-xl" side={isMobile ? 'bottom' : 'bottom'} align="end" sideOffset={4}>
            <DropdownMenuLabel className="p-0 font-normal">
              <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                <Avatar className="h-8 w-8 rounded-xl">
                  <AvatarImage src={user.avatar} alt={user.name} />
                  <AvatarFallback className="rounded-xl">CN</AvatarFallback>
                </Avatar>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">{user.name}</span>
                  <span className="truncate text-xs">{user.email}</span>
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <div className="flex flex-col">
              <Link href={'/profile/portfolios'} className="flex h-[35px] items-center gap-2 rounded-xl pl-2 text-[15px] dark:hover:bg-accent dark:hover:text-white">
                <User size={16} />
                Profile
              </Link>
              <Link href={'/dashboard/portfolios/create-portfolio'} className="flex h-[35px] items-center gap-2 rounded-xl pl-2 text-[15px] dark:hover:bg-accent dark:hover:text-white">
                <Plus size={16} />
                Add portfolio
              </Link>
              <Link href={'/profile/favorites'} className="flex h-[35px] items-center gap-2 rounded-xl pl-2 text-[15px] dark:hover:bg-accent dark:hover:text-white">
                <BookmarkCheck size={16} />
                Favorites
              </Link>
              <DropdownMenuSeparator />
              <Link href={'/edit-profile'} className="flex h-[35px] items-center gap-2 rounded-xl pl-2 text-[15px] dark:hover:bg-accent dark:hover:text-white">
                <Settings size={16} />
                Profile settings
              </Link>
            </div>
            <DropdownMenuSeparator />
            <Button className="flex h-[35px] w-full items-center justify-center gap-2 rounded-xl text-[15px] dark:bg-accent dark:text-white dark:hover:text-white">
              Sign out
              <LogOut size={16} />
            </Button>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
