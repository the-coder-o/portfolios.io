'use client'

import { ReactNode } from 'react'

import { ProfileView } from '@/modules/profile/section/profile-view'

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <ProfileView />
      {children}
    </div>
  )
}

export default Layout
