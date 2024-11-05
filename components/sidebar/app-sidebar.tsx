'use client'

import { Briefcase, FileUser, LifeBuoy, Send } from 'lucide-react'
import Link from 'next/link'
import * as React from 'react'

import { NavMain } from '@/components/sidebar/nav-main'
import { NavSecondary } from '@/components/sidebar/nav-secondary'
import { NavUser } from '@/components/sidebar/nav-user'
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar'

import { LogoAuth } from '../logo/logo-auth'

const data = {
  user: {
    name: 'shadcn',
    email: 'm@example.com',
    avatar: '/avatars/shadcn.jpg',
  },
  navMain: [
    {
      title: 'Portfolio',
      url: 'all-portfolios',
      icon: Briefcase,
      isActive: true,
      items: [
        {
          title: 'All portfolios',
          url: 'all-portfolios',
        },
        {
          title: 'Create portfolio',
          url: 'create-portfolio',
        },
      ],
    },
    {
      title: 'Rezume',
      url: '#',
      icon: FileUser,
      isActive: true,
      items: [
        {
          title: 'All rezume',
          url: '#',
        },
        {
          title: 'Create rezume',
          url: '#',
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: 'Support with us',
      url: '#',
      icon: LifeBuoy,
    },
    {
      title: 'Send feedback',
      url: '#',
      icon: Send,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/">
                <LogoAuth />
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
