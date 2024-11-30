'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { ChevronRight, Clock, type LucideIcon, Sparkle } from 'lucide-react'

import { cn } from '@/lib/utils'
import { SidebarGroup, SidebarGroupLabel, SidebarMenu, SidebarMenuAction, SidebarMenuButton, SidebarMenuItem, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem } from '@/components/ui/sidebar'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import { Badge } from '@/components/ui/badge'

export function NavMain({
  items,
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
}) {
  const route = usePathname()

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
                            <Link href={subItem.url} prefetch={false}>
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
    </SidebarGroup>
  )
}
