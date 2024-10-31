import React from 'react'

import EditProfileForm from '../forms/edit-profile-form'
import GeneralForm from '../forms/general-form'
import PasswordForm from '../forms/password-form'
import SocialProfileForm from '../forms/social-profile-form'

export const SidebarContent = ({ activeTab }: any) => {
  return (
    <div className="mt-5 md:col-span-3 md:mt-0">
      <div className="space-y-6 pl-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">{activeTab}</h1>
        </div>
        {activeTab === 'General' && <GeneralForm />}
        {activeTab === 'Edit Profile' && <EditProfileForm />}
        {activeTab === 'Password' && <PasswordForm />}
        {activeTab === 'Social Profiles' && <SocialProfileForm />}
      </div>
    </div>
  )
}
