'use client'

import { ProfileHeader } from '../ui/profile-header'
import { ProfileTabs } from '../ui/profile-tabs'

export const ProfileView = () => {
  return (
    <div className="container">
      <div className="mb-[150px] mt-[120px] max-md:mt-[50px]">
        <ProfileHeader />
        <ProfileTabs />
      </div>
    </div>
  )
}
