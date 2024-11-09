'use client'

import { useState } from 'react'
import { Database, Laptop, Lock, Settings, Share2, Trash, User } from 'lucide-react'

import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'

import { SidebarContent } from './sidebar-content'

export const Sidebar = () => {
  const [activeTab, setActiveTab] = useState('Edit Profile')

  const tabs = [
    { name: 'General', icon: Settings },
    { name: 'Edit Profile', icon: User },
    { name: 'Password', icon: Lock },
    { name: 'Social Profiles', icon: Share2 },
    { name: 'Sessions', icon: Laptop },
    { name: 'Data Export', icon: Database },
  ]

  return (
    <div className="md:grid md:grid-cols-4 md:gap-6">
      <div className="md:col-span-1">
        <div className="space-y-1">
          {tabs.map((tab: any, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(tab.name)}
              className={`flex w-full items-center gap-2 rounded-xl text-left ${activeTab === tab.name ? 'bg-gray-100 text-gray-900 dark:bg-neutral-800 dark:text-gray-100' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-neutral-800 dark:hover:text-gray-100'} group flex items-center rounded-md px-3 py-2 text-sm font-medium`}
            >
              <tab.icon className="h-4 w-4" />
              {tab.name}
            </button>
          ))}
        </div>
        <Separator className="my-4" />
        <Button variant={'destructive'} className="flex w-full items-center justify-start gap-2 rounded-xl bg-transparent px-3 py-2">
          <Trash className="h-4 w-4" />
          Delete Account
        </Button>
      </div>
      <SidebarContent activeTab={activeTab} />
    </div>
  )
}
