import React from 'react'

import { Session } from '../session'
import SocialProfileForm from '../forms/social-profile-form'
import PasswordForm from '../forms/password-form'
import GeneralForm from '../forms/general-form'
import EditProfileForm from '../forms/edit-profile-form'
import { DataExport } from '../data-export'
import { useGetProfileMe } from '../../hooks/useGetProfileMe'

export const SidebarContent = ({ activeTab }: any) => {
  const { data: profile, isLoading } = useGetProfileMe()

  return (
    <div className="mt-5 md:col-span-3 md:mt-0">
      <div className="space-y-6 pl-6 max-md:pl-0">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">{activeTab}</h1>
        </div>
        <>
          {isLoading ? null : (
            <>
              {activeTab === 'General' && <GeneralForm />}
              {activeTab === 'Edit Profile' && <EditProfileForm profile={profile} />}
              {activeTab === 'Password' && <PasswordForm />}
              {activeTab === 'Social Profiles' && <SocialProfileForm />}
              {activeTab === 'Sessions' && <Session />}
              {activeTab === 'Data Export' && <DataExport />}
            </>
          )}
        </>
      </div>
    </div>
  )
}
