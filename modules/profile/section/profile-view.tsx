'use client'

import { ProfileHeader } from '../components/profile-header'
import { ProfileTabs } from '../components/profile-tabs'

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
