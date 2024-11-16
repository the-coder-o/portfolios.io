'use client'

import { useState } from 'react'
import { Database, Laptop, Lock, Menu, Settings, Share2, Trash, User } from 'lucide-react'

import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'

import { SidebarContent } from './sidebar-content'

export const Sidebar = () => {
  const [activeTab, setActiveTab] = useState('Edit Profile')
  const [sheetOpen, setSheetOpen] = useState(false)

  const tabs = [
    { name: 'Edit Profile', icon: User },
    { name: 'General', icon: Settings },
    { name: 'Password', icon: Lock },
    { name: 'Social Profiles', icon: Share2 },
    { name: 'Sessions', icon: Laptop },
    { name: 'Data Export', icon: Database },
  ]

  return (
    <div className="relative md:grid md:grid-cols-4 md:gap-6">
      <div className="hidden max-md:block">
        <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="absolute right-0 flex h-10 w-10">
              <Menu className="h-4 w-4" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>
            <div className="mt-4 flex h-full flex-col">
              <div className="md:col-span-1">
                <div className="space-y-1">
                  {tabs.map((tab: any, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveTab(tab.name)}
                      className={`flex h-11 w-full items-center gap-2 rounded-xl text-left ${activeTab === tab.name ? 'bg-gray-100 text-gray-900 dark:bg-neutral-800 dark:text-gray-100' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-neutral-800 dark:hover:text-gray-100'} group flex items-center rounded-md px-3 py-2 text-sm font-medium`}
                    >
                      <tab.icon className="h-4 w-4" />
                      {tab.name}
                    </button>
                  ))}
                </div>
                <Separator className="my-4 max-md:hidden" />
                <Button variant={'destructive'} className="flex w-full items-center justify-start gap-2 rounded-xl bg-transparent px-3 py-2 max-md:hidden">
                  <Trash className="h-4 w-4" />
                  Delete Account
                </Button>
              </div>
              <Separator className="my-4" />
              <Button variant="destructive" className="flex w-full items-center justify-start gap-2 rounded-xl px-3 py-2">
                <Trash className="h-4 w-4" />
                Delete Account
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
      <div className="mt-4 flex h-full flex-col max-md:hidden">
        <div className="md:col-span-1">
          <div className="space-y-1">
            {tabs.map((tab: any, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(tab.name)}
                className={`flex h-11 w-full items-center gap-2 rounded-xl text-left ${activeTab === tab.name ? 'bg-gray-100 text-gray-900 dark:bg-neutral-800 dark:text-gray-100' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-neutral-800 dark:hover:text-gray-100'} group flex items-center rounded-md px-3 py-2 text-sm font-medium`}
              >
                <tab.icon className="h-4 w-4" />
                {tab.name}
              </button>
            ))}
          </div>
          <Separator className="my-4 max-md:hidden" />
          <Button variant={'destructive'} className="flex w-full items-center justify-start gap-2 rounded-xl bg-transparent px-3 py-2 max-md:hidden">
            <Trash className="h-4 w-4" />
            Delete Account
          </Button>
        </div>
      </div>
      <SidebarContent activeTab={activeTab} />
    </div>
  )
}
