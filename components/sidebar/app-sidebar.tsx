'use client'

import * as React from 'react'
import Link from 'next/link'
import { AlertCircle, Briefcase, Crown, FileIcon as FileUser, LifeBuoy, Send } from 'lucide-react'

import { useGetUserPortfolio } from '@/modules/profile/hooks/useGetUserPortfolios'
import { useGetProfileMe } from '@/modules/edit-profile/hooks/useGetProfileMe'
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar'
import { Progress } from '@/components/ui/progress'
import { Card, CardContent } from '@/components/ui/card'
import { NavUser } from '@/components/sidebar/nav-user'
import { NavMain } from '@/components/sidebar/nav-main'

import { LogoAuth } from '../logo/logo-auth'

const data = {
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
      title: 'Resume',
      url: '#',
      icon: FileUser,
      isActive: true,
      items: [
        {
          title: 'All resume',
          url: '#',
        },
        {
          title: 'Create resume',
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
  const { data: profile, isLoading } = useGetProfileMe()
  const { data: userPortfolios } = useGetUserPortfolio()

  const portfolioCount = userPortfolios?.length || 0
  const isVipAccount = profile?.email === 'portfoliosio@gmail.com'

  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/" prefetch={false}>
                <LogoAuth />
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <SidebarGroup></SidebarGroup>
        <div className={'mb-0 flex h-full flex-col-reverse'}>
          <Card className="rounded-xl bg-muted">
            <CardContent className="p-4">
              <div className="mb-2 flex items-center space-x-2">
                {isVipAccount ? <Crown className="h-5 w-5 text-yellow-500" /> : <AlertCircle className="h-5 w-5 text-yellow-500" />}
                <h3 className="text-sm font-medium">{isVipAccount ? 'VIP Portfolio Status' : 'Portfolio Limit'}</h3>
              </div>
              {isVipAccount ? (
                <p className="mb-2 text-xs text-muted-foreground">As a VIP account, you can upload unlimited premium portfolios.</p>
              ) : (
                <>
                  <p className="mb-2 text-xs text-muted-foreground">You can upload up to 8 portfolios. You&apos;ve used {portfolioCount} so far.</p>
                  <Progress value={(portfolioCount / 8) * 100} className="h-2 bg-black" />
                  <p className="mt-1 text-right text-xs">{portfolioCount}/8 portfolios</p>
                </>
              )}
            </CardContent>
          </Card>
        </div>
      </SidebarContent>
      <SidebarFooter className={'!px-0'}>
        <NavUser profile={profile} isLoading={isLoading} />
      </SidebarFooter>
    </Sidebar>
  )
}
