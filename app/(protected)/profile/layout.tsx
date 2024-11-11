'use client'

import { ReactNode } from 'react'

import { ProfileView } from '@/modules/profile/pages/profile-view'

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <ProfileView />
      {children}
    </>
  )
}

export default Layout
