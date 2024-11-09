'use client'

import React from 'react'
import Link from 'next/link'
import { LocateFixed, Mail } from 'lucide-react'

import { useGetProfileMe } from '@/modules/edit-profile/hooks/useGetProfileMe'
import { Skeleton } from '@/components/ui/skeleton'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export const ProfileHeader = () => {
  const { data: profile, isLoading } = useGetProfileMe()

  return (
    <div className="flex flex-col items-center justify-center gap-5">
      {isLoading ? (
        <Skeleton className="h-[100px] w-[100px] rounded-xl" />
      ) : (
        <Avatar className="h-[100px] w-[100px] rounded-xl">
          <AvatarImage src={profile?.avatar} alt={profile?.name ?? '@shadcn'} className="bg-cover object-cover" />
          <AvatarFallback className="rounded-xl text-2xl">{profile?.name?.slice(0, 2).toUpperCase() ?? 'CN'}</AvatarFallback>
        </Avatar>
      )}
      <div className="flex flex-col items-center gap-2">
        {isLoading ? <Skeleton className="h-9 w-48" /> : <h1 className="text-4xl font-bold">{profile?.name ?? 'Abdulbosit Sharipov'}</h1>}
        <div className="flex items-center gap-3">
          {isLoading ? (
            <Skeleton className="h-6 w-32" />
          ) : (
            <p className="text-md flex items-center gap-1 dark:text-[#999]">
              <LocateFixed size={18} />
              {profile?.location ?? 'Not found :('}
            </p>
          )}
          {isLoading ? (
            <Skeleton className="h-6 w-40" />
          ) : (
            <p className="text-md flex items-center gap-1 dark:text-[#999]">
              <Mail size={18} />
              {profile?.email ?? 'abdulbosit@gmail.com'}
            </p>
          )}
        </div>
      </div>
      <div className="flex items-center gap-1.5 max-sm:w-full max-sm:flex-col max-sm:gap-3">
        <Link href="/edit-profile" className="group relative flex h-11 w-full cursor-pointer items-center justify-center space-x-2 rounded-xl bg-black p-px px-4 py-2 text-center text-sm text-white no-underline transition duration-200 dark:bg-white dark:text-black sm:w-40">
          Edit your profile
        </Link>
        <Link href="/dashboard/portfolios/all-portfolios" className="group relative flex h-11 w-full cursor-pointer items-center justify-center space-x-2 rounded-xl bg-black p-px px-4 py-2 text-center text-sm text-white no-underline transition duration-200 dark:bg-white/15 dark:text-white sm:w-40">
          Dashboard
        </Link>
      </div>
    </div>
  )
}
