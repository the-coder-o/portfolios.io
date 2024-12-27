'use client'

import * as React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { ChevronRight, Clock, LucideIcon, Sparkle } from 'lucide-react'

import { cn } from '@/lib/utils'
import { SidebarGroup, SidebarGroupLabel, SidebarMenu, SidebarMenuAction, SidebarMenuButton, SidebarMenuItem, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem } from '@/components/ui/sidebar'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import { Badge } from '@/components/ui/badge'
import { UpgradePlanModal } from '@/components/modals/upgrade-plan-modal'

export function NavMain({
  items,
  profile,
  userPortfolios,
}: {
  items: {
    title: string
    url: string
    icon: LucideIcon
    isActive?: boolean
    items?: {
      title: string
      url: string
    }[]
  }[]
  profile: {
    email: string
  } | null
  userPortfolios: any[] | undefined
}) {
  const route = usePathname()
  const isVipAccount = profile?.email === process.env.NEXT_PUBLIC_VIP_STATUS_EMAIL
  const portfolioCount = userPortfolios?.length || 0

  const [isDialogOpen, setIsDialogOpen] = React.useState(false)

  const handleCreatePortfolioClick = (e: React.MouseEvent<HTMLAnchorElement>, subItem: { title: string; url: string }) => {
    if (subItem.title === 'Create portfolio' && !isVipAccount && portfolioCount >= 8) {
      e.preventDefault()
      setIsDialogOpen(true)
    }
  }

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Platform</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => (
          <Collapsible key={item.title} asChild defaultOpen={item.isActive}>
            <SidebarMenuItem>
              <SidebarMenuButton asChild tooltip={item.title}>
                <Link href={item.url} prefetch={false}>
                  <item.icon />
                  <span className="flex w-full items-center justify-between">
                    {item.title}
                    {item.title === 'Portfolio' ? (
                      <Badge className="flex h-[20px] items-center justify-center gap-1 rounded-lg px-2 text-[10px] dark:border-green-300 dark:bg-green-700 dark:text-white">
                        <Sparkle size={10} /> New
                      </Badge>
                    ) : (
                      <Badge className="flex h-[20px] items-center justify-center gap-1 rounded-lg px-2 text-[10px] dark:border-green-300 dark:bg-green-700 dark:text-white">
                        <Clock size={10} /> Soon
                      </Badge>
                    )}
                  </span>
                </Link>
              </SidebarMenuButton>
              {item.items?.length ? (
                <>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuAction className="data-[state=open]:rotate-90">
                      <ChevronRight />
                      <span className="sr-only">Toggle</span>
                    </SidebarMenuAction>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      {item.items?.map((subItem) => (
                        <SidebarMenuSubItem key={subItem.title}>
                          <SidebarMenuSubButton asChild className={cn(route.split('/')[3].toLowerCase() === subItem.url.toLowerCase() ? '!bg-sidebar-accent' : '')}>
                            <Link href={subItem.url} prefetch={false} onClick={(e) => handleCreatePortfolioClick(e, subItem)}>
                              <span>{subItem.title}</span>
                            </Link>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </>
              ) : null}
            </SidebarMenuItem>
          </Collapsible>
        ))}
      </SidebarMenu>
      <UpgradePlanModal isDialogOpen={isDialogOpen} setIsDialogOpen={setIsDialogOpen} />
    </SidebarGroup>
  )
}
