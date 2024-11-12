'use client'

import Image from 'next/image'
import { LocateFixed, Mail } from 'lucide-react'

import { Skeleton } from '@/components/ui/skeleton'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { UploadBannerModal } from '@/components/modals/upload-banner-modal'

import { useGetProfileMe } from '../hooks/useGetProfileMe'
import { Sidebar } from '../components/sidebar/sidebar'

export const EditProfileView = () => {
  const { data: profile, isLoading } = useGetProfileMe()

  return (
    <div className="container">
      <div className="relative">
        <div className="mt-[120px] h-32 w-full rounded-xl bg-gradient-to-r from-purple-500 to-orange-300 sm:h-40 md:h-52" />
        <div className="mt-5 flex items-center justify-between max-sm:flex-col max-sm:items-start max-sm:gap-5">
          <div className="flex flex-col items-start justify-between sm:flex-row sm:items-center">
            <div className="flex flex-col max-sm:items-start sm:flex-row sm:items-center sm:gap-5">
              <div>
                {isLoading ? (
                  <Skeleton className="h-20 w-20 rounded-[16px] sm:h-24 sm:w-24 sm:rounded-[20px]" />
                ) : (
                  <Avatar className="h-20 w-20 rounded-[16px] sm:h-24 sm:w-24 sm:rounded-[20px]">
                    <AvatarImage src={profile?.avatar} alt="Profile" className="rounded-xl" />
                    <AvatarFallback className="rounded-xl text-xl sm:text-2xl">{profile?.name?.slice(0, 2) || '?'}</AvatarFallback>
                  </Avatar>
                )}
              </div>
              <div className="max-sm:mt-2 max-sm:flex max-sm:flex-col max-sm:items-start max-sm:gap-1">
                <div className="flex items-center justify-center gap-2 sm:justify-start">
                  {isLoading ? (
                    <Skeleton className="h-8 w-40" />
                  ) : (
                    <>
                      <h1 className="text-xl font-semibold text-white sm:text-2xl">{profile?.name || 'N/A'}</h1>
                      <Image src={'https://telegram.org/file/464001906/107ca/Y-sn47RDLAk.1898/a6ad0e5cfb2699cf01'} width={25} height={25} alt="tick" />
                    </>
                  )}
                </div>
                <div className="mt-2 flex flex-col sm:flex-row sm:items-center sm:gap-3">
                  {isLoading ? (
                    <Skeleton className="h-6 w-32" />
                  ) : (
                    <p className="sm:text-md flex items-center gap-1 text-sm dark:text-[#999]">
                      <LocateFixed size={18} />
                      {profile?.location ?? 'Not found :('}
                    </p>
                  )}
                  {isLoading ? (
                    <Skeleton className="mt-1 h-6 w-40 sm:mt-0" />
                  ) : (
                    <p className="sm:text-md mt-1 flex items-center gap-1 text-sm dark:text-[#999] sm:mt-0">
                      <Mail size={18} />
                      {profile?.email ?? 'abdulbosit@gmail.com'}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
          <UploadBannerModal />
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
