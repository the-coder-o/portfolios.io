import React from 'react'

import EditProfile from '../forms/edit-profile-form'
import General from '../forms/general-form'

export const SidebarContent = ({ activeTab }: any) => {
  return (
    <div className="mt-5 md:col-span-3 md:mt-0">
      <div className="space-y-6 pl-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">{activeTab}</h1>
        </div>
        {activeTab === 'General' && <General />}
        {activeTab === 'Edit Profile' && <EditProfile />}
      </div>
    </div>
  )
}
