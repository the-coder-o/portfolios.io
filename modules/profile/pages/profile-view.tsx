'use client'

import { ProfileTabs } from '../components/profile-tabs'
import { ProfileHeader } from '../components/profile-header'

export const ProfileView = () => {
  return (
    <div className="container">
      <div className="mt-[120px]">
        <ProfileHeader />
      </div>
      <ProfileTabs />
    </div>
  )
}
