import { BookmarkCheck, LogOut, Plus, Settings, User } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

import { DropdownMenu, DropdownMenuContent, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'

import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { Button } from './ui/button'

export const ProfileMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="rounded-xl">
        <Avatar className="rounded-xl">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" className="bg-cover object-cover" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="mt-2 w-[250px] rounded-xl dark:bg-background">
        <div className="flex items-center gap-2 p-2">
          <Avatar className="h-14 w-14 rounded-xl">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" className="bg-cover object-cover" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="flex flex-col gap-1">
            <h2 className="font-medium">Abdulbosit Sharipov</h2>
            <p className="text-xs dark:text-[#999]">abdulbasit@gmail.com</p>
          </div>
        </div>
        <DropdownMenuSeparator />
        <div className="flex flex-col">
          <Link href={'/profile'} className="flex h-[35px] items-center gap-2 rounded-xl pl-2 text-[15px] dark:hover:bg-accent dark:hover:text-white">
            <User size={16} />
            Profile
          </Link>
          <Link href={'/'} className="flex h-[35px] items-center gap-2 rounded-xl pl-2 text-[15px] dark:hover:bg-accent dark:hover:text-white">
            <Plus size={16} />
            Add portfolio
          </Link>
          <Link href={'/favorites'} className="flex h-[35px] items-center gap-2 rounded-xl pl-2 text-[15px] dark:hover:bg-accent dark:hover:text-white">
            <BookmarkCheck size={16} />
            Favorites
          </Link>
          <DropdownMenuSeparator />
          <Link href={'/'} className="flex h-[35px] items-center gap-2 rounded-xl pl-2 text-[15px] dark:hover:bg-accent dark:hover:text-white">
            <Settings size={16} />
            Settings
          </Link>
        </div>
        <DropdownMenuSeparator />
        <Button className="flex h-[35px] w-full items-center justify-center gap-2 rounded-xl text-[15px] dark:bg-accent dark:text-white dark:hover:text-white">
          Sign out
          <LogOut size={16} />
        </Button>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
