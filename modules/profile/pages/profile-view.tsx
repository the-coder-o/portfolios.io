'use client'

import { ProfileTabs } from '../components/profile-tabs'
import { ProfileHeader } from '../components/profile-header'

export const ProfileView = () => {
  return (
    <div className="container">
      <div className="mb-[150px] mt-5">
        <ProfileHeader />
      </div>
      <ProfileTabs />
    </div>
  )
}
