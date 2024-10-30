'use client'

import { Settings, User, Lock, Share2, Briefcase, Mail, CreditCard, Laptop, AppWindow, Database, X, Trash } from 'lucide-react'
import { useState } from 'react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { Textarea } from '@/components/ui/textarea'

export const EditProfileView = () => {
  const [activeTab, setActiveTab] = useState('Edit Profile')
  const [name, setName] = useState('Abdulbosit Sharipov')
  const [location, setLocation] = useState('Uzbekistan, Tashkent')
  const [bio, setBio] = useState(
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the",
  )
  const [workHistory, setWorkHistory] = useState([{ role: 'Full Stack', company: 'Global Move' }])
  const [username, setUsername] = useState('Abdulbositfbdhbhdbd000')
  const [email, setEmail] = useState('abdulbositsharipovv@gmail.com')

  const tabs = [
    { name: 'General', icon: Settings },
    { name: 'Edit Profile', icon: User },
    { name: 'Password', icon: Lock },
    { name: 'Social Profiles', icon: Share2 },
    { name: 'Company', icon: Briefcase },
    { name: 'Email Notifications', icon: Mail },
    { name: 'Billing', icon: CreditCard },
    { name: 'Sessions', icon: Laptop },
    { name: 'Applications', icon: AppWindow },
    { name: 'Data Export', icon: Database },
  ]

  return (
    <div className="container">
      <div className="mb-[150px] mt-10">
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
          <div className="mt-5 md:col-span-3 md:mt-0">
            <div className="space-y-6 pl-6">
              <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold">{activeTab}</h1>
                <Button type="submit" variant={'secondary'} className="rounded-xl">
                  Save chnages
                </Button>
              </div>
              {activeTab === 'General' && (
                <>
                  <div>
                    <Label htmlFor="username" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Username
                    </Label>
                    <Input type="text" name="username" id="username" value={username} onChange={(e) => setUsername(e.target.value)} className="mt-1 rounded-xl" />
                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Your Portfolios.io URL: https://portfolios.io/{username}</p>
                  </div>
                  <div>
                    <Label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Email
                    </Label>
                    <Input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="mt-1 rounded-xl" />
                  </div>
                </>
              )}
              {activeTab === 'Edit Profile' && (
                <>
                  <div className="mt-1 flex items-center">
                    <Avatar className="h-20 w-20 rounded-xl">
                      <AvatarImage src="/placeholder.svg" alt="AS" className="rounded-xl" />
                      <AvatarFallback className="rounded-xl">AS</AvatarFallback>
                    </Avatar>
                    <div className="ml-4 flex">
                      <Button variant="outline" size="sm" className="mr-2 rounded-xl">
                        Upload new picture
                      </Button>
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Name
                    </Label>
                    <Input type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} className="mt-1 rounded-xl" />
                  </div>
                  <div>
                    <Label htmlFor="location" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Location
                    </Label>
                    <Input type="text" name="location" id="location" value={location} onChange={(e) => setLocation(e.target.value)} className="mt-1 rounded-xl" />
                  </div>
                  <div>
                    <Label htmlFor="bio" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Bio
                    </Label>
                    <div className="mt-1">
                      <Textarea id="bio" name="bio" rows={8} value={bio} onChange={(e) => setBio(e.target.value)} className="mt-1 block w-full rounded-xl border dark:text-white sm:text-sm" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="bio" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Work history & Education
                    </Label>
                    <div className="mt-3 space-y-4">
                      {workHistory.map((work, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <Input
                            value={work.role}
                            onChange={(e) => {
                              const newWorkHistory = [...workHistory]
                              newWorkHistory[index].role = e.target.value
                              setWorkHistory(newWorkHistory)
                            }}
                            placeholder="Role"
                            className="flex-1 rounded-xl"
                          />
                          <span className="dark:text-gray-300">at</span>
                          <Input
                            value={work.company}
                            onChange={(e) => {
                              const newWorkHistory = [...workHistory]
                              newWorkHistory[index].company = e.target.value
                              setWorkHistory(newWorkHistory)
                            }}
                            placeholder="Company"
                            className="flex-1 rounded-xl"
                          />
                          <Button
                            onClick={() => {
                              const newWorkHistory = workHistory.filter((_, i) => i !== index)
                              setWorkHistory(newWorkHistory)
                            }}
                            variant="outline"
                            size="icon"
                            className="rounded-xl"
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}
                      <Button onClick={() => setWorkHistory([...workHistory, { role: '', company: '' }])} variant="outline" size="default" className="mt-2 rounded-xl">
                        Add Work History
                      </Button>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
