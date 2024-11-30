'use client'

import { useState } from 'react'
import { Clock, Database, Laptop, Lock, Menu, Settings, Share2, User } from 'lucide-react'

import { useGetProfileMe } from '@/modules/edit-profile/hooks/useGetProfileMe'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { DeleteModal } from '@/components/modals/delete-account-modal'

import { SidebarContent } from './sidebar-content'

export const Sidebar = () => {
  const profile_id = useGetProfileMe()

  const [activeTab, setActiveTab] = useState('Edit Profile')
  const [sheetOpen, setSheetOpen] = useState(false)

  const tabs = [
    { name: 'Edit Profile', icon: User, isNew: false },
    { name: 'General', icon: Settings, isNew: false },
    { name: 'Password', icon: Lock, isNew: false },
    { name: 'Social Profiles', icon: Share2, isNew: true },
    { name: 'Sessions', icon: Laptop, isNew: true },
    { name: 'Data Export', icon: Database, isNew: false },
  ]

  return (
    <div className="relative md:grid md:grid-cols-4 md:gap-6">
      <div className="hidden max-md:block">
        <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="absolute -top-1 right-0 flex h-10 w-10">
              <Menu className="h-4 w-4" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <div className="mt-7 flex h-full flex-col">
              <div className="md:col-span-1">
                <div className="space-y-1">
                  {tabs.map((tab, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveTab(tab.name)}
                      className={`flex h-11 w-full items-center gap-2 rounded-xl text-left ${activeTab === tab.name ? 'bg-gray-100 text-gray-900 dark:bg-neutral-800 dark:text-gray-100' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-neutral-800 dark:hover:text-gray-100'} group flex items-center rounded-md px-3 py-2 text-sm font-medium`}
                    >
                      <tab.icon className="h-4 w-4" />
                      {tab.name}
                      {tab.isNew && (
                        <Badge className="ml-auto flex h-[20px] items-center justify-center gap-1 rounded-lg px-1 dark:border-green-300 dark:bg-green-700 dark:text-white">
                          <Clock size={12} /> Soon
                        </Badge>
                      )}
                    </button>
                  ))}
                </div>
                <Separator className="my-4 max-md:hidden" />
                <DeleteModal profile_id={profile_id?.data?._id} />
              </div>
              <Separator className="my-4" />
              <DeleteModal profile_id={profile_id?.data?._id} />
            </div>
          </SheetContent>
        </Sheet>
      </div>
      <div className="mt-4 flex h-full flex-col max-md:hidden">
        <div className="md:col-span-1">
          <div className="space-y-1">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(tab.name)}
                className={`flex h-11 w-full items-center gap-2 rounded-xl text-left ${activeTab === tab.name ? 'bg-gray-100 text-gray-900 dark:bg-neutral-800 dark:text-gray-100' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-neutral-800 dark:hover:text-gray-100'} group flex items-center rounded-md px-3 py-2 text-sm font-medium`}
              >
                <tab.icon className="h-4 w-4" />
                {tab.name}
                {tab.isNew && (
                  <Badge className="ml-auto flex h-[20px] items-center justify-center gap-1 rounded-lg px-1 dark:border-green-300 dark:bg-green-700 dark:text-white">
                    <Clock size={12} /> Soon
                  </Badge>
                )}
              </button>
            ))}
          </div>
          <Separator className="my-4 max-md:hidden" />
          <div className={'max-md:hidden'}>
            <DeleteModal profile_id={profile_id?.data?._id} />
          </div>
        </div>
      </div>
      <SidebarContent activeTab={activeTab} />
    </div>
  )
}
