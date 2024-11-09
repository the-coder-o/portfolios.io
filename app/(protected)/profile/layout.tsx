'use client'

import { ReactNode } from 'react'

import { ProfileView } from '@/modules/profile/section/profile-view'

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <ProfileView />
      {children}
    </>
  )
}

export default Layout
