'use client'

import { ReactNode } from 'react'

import { ProfileView } from '@/modules/profile/section/profile-view'

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="!h-[80vh] !overflow-hidden">
      <div className="absolute bottom-0 left-0 right-0 top-0 z-30 h-full w-full bg-black/50 backdrop-blur-lg">
        <div className="absolute bottom-0 left-0 right-0 top-0 z-40 flex flex-col items-center justify-center gap-5">
          <h1 className="flex items-center justify-center text-center text-4xl font-bold text-pink-500">Coming Soon!</h1>
          <h1 className="flex w-[500px] items-center justify-center text-center text-xl font-medium text-white max-sm:w-full">
            Thank you for stopping by! We’re working hard to bring you something amazing. Our website is currently under development, and we can’t wait to share it with you soon. Stay tuned for updates! In the meantime, feel free to connect with us on [social media links or contact info]. Stay tuned
            and check back soon!
          </h1>
        </div>
      </div>
      <ProfileView />
      {children}
    </div>
  )
}

export default Layout
