'use client'

import Image from 'next/image'

import { Skeleton } from '@/components/ui/skeleton'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'

import { useGetProfileMe } from '../hooks/useGetProfileMe'
import { Sidebar } from '../components/sidebar/sidebar'

export const EditProfileView = () => {
  const { data: profile, isLoading } = useGetProfileMe()

  return (
    <div className="container">
      <div className="relative">
        <div className="mt-5 h-32 w-full rounded-xl bg-gradient-to-r from-purple-500 to-orange-300 sm:h-40 md:h-48" />
        <div className="relative px-2 pb-4 sm:px-4 sm:pb-6 md:px-6">
          <div className="absolute -top-16 mt-4 flex flex-col items-center gap-4 sm:mt-6 sm:flex-row sm:items-end md:mt-8">
            {isLoading ? (
              <Skeleton className="h-24 w-24 rounded-[16px] sm:h-28 sm:w-28 sm:rounded-[20px]" />
            ) : (
              <Avatar className="h-24 w-24 rounded-[16px] border-white sm:h-28 sm:w-28 sm:rounded-[20px]">
                <AvatarImage src={profile?.avatar} alt="Profile" className="rounded-xl" />
                <AvatarFallback className="rounded-xl text-xl sm:text-2xl">{profile?.name?.slice(0, 2) || '?'}</AvatarFallback>
              </Avatar>
            )}
            <div className="mb-2 text-center sm:mb-4 sm:text-left">
              <div className="flex items-center justify-center gap-2 sm:justify-start">
                {isLoading ? (
                  <Skeleton className="h-8 w-40" />
                ) : (
                  <>
                    <h1 className="text-xl font-semibold text-white sm:text-2xl sm:text-white">{profile?.name || 'N/A'}</h1>
                    <Image src={'https://telegram.org/file/464001906/107ca/Y-sn47RDLAk.1898/a6ad0e5cfb2699cf01'} width={25} height={25} alt="tick" />
                  </>
                )}
              </div>
              {isLoading ? <Skeleton className="mt-2 h-4 w-32" /> : <p className="mt-1 text-xs text-primary sm:text-sm sm:text-primary">{profile?.email || 'N/A'}</p>}
            </div>
          </div>
        </div>
      </div>
      <div className="mb-[100px] mt-24 sm:mb-[150px] sm:mt-32 md:mt-[100px]">
        {isLoading ? (
          <div className="space-y-4">
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-10 w-full" />
          </div>
        ) : (
          <Sidebar />
        )}
      </div>
    </div>
  )
}
