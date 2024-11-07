'use client'

import { ProfileTabs } from '../components/profile-tabs'
import { ProfileHeader } from '../components/profile-header'

export const ProfileView = () => {
  return (
    <div className="container">
      <div className="mb-[150px] mt-[120px] max-md:mt-[50px]">
        <ProfileHeader />
      </div>
      <ProfileTabs />
    </div>
  )
}
