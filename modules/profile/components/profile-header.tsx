import React from 'react'
import Link from 'next/link'
import { LocateFixed, Mail } from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export const ProfileHeader = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <Avatar className="h-[100px] w-[100px] rounded-xl">
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" className="bg-cover object-cover" />
        <AvatarFallback className="rounded-xl">CN</AvatarFallback>
      </Avatar>
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-4xl font-bold">Abdulbosit Sharipov</h1>
        <div className="flex items-center gap-3">
          <p className="text-md flex items-center gap-1 dark:text-[#999]">
            <LocateFixed size={18} />
            Luhans’k, Ukraine
          </p>
          <p className="text-md flex items-center gap-1 dark:text-[#999]">
            <Mail size={18} />
            abdulbosit@gmail.com
          </p>
        </div>
      </div>
      <div className="flex items-center gap-1.5 max-sm:w-full max-sm:flex-col max-sm:gap-3">
        <Link href="/edit-profile" className="group relative flex h-11 w-full cursor-pointer items-center justify-center space-x-2 rounded-xl bg-black p-px px-4 py-2 text-center text-sm font-semibold text-white no-underline transition duration-200 dark:bg-white dark:text-black sm:w-40">
          Edit your profile
        </Link>
        <Link
          href="/dashboard/portfolios/all-portfolios"
          className="group relative flex h-11 w-full cursor-pointer items-center justify-center space-x-2 rounded-xl bg-black p-px px-4 py-2 text-center text-sm font-semibold text-white no-underline transition duration-200 dark:bg-white/15 dark:text-white sm:w-40"
        >
          Dahboard
        </Link>
      </div>
    </div>
  )
}
