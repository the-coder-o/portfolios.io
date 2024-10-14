import { Bookmark, Facebook, Github, Heart, HelpCircle, Info, Linkedin, Mail, Twitter, Users, Youtube } from 'lucide-react'
import { CalendarRange, CircleDollarSign, Clock, Eye, Layers } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { BreadcrumbComponent } from '@/components/breadcrumb'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

export const PortfolioDetailView = () => {
  return (
    <div className="container">
      <div className="mb-[150px] mt-10">
        <BreadcrumbComponent items={[{ label: 'Home', href: '/' }, { label: 'Portfolios', href: '/favorites' }, { label: 'Detail View' }]} />
        <div className="mt-7 flex flex-col gap-6">
          <div>
            <h1 className="text-[2.25rem] font-bold text-black dark:text-white">Kapo — Saas Website</h1>
            <p className="w-[600px] text-[1.125rem] text-[#999]">Launch your next SaaS project with Kapo - A minimal and modern Framer template with vibrant colors, stellar animations, and much more.</p>
          </div>
          <div className="flex items-center gap-3">
            <Link href="#" className="flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-black py-2 text-center text-sm font-semibold text-white dark:bg-white dark:text-black sm:w-44">
              Use for Free
              <CircleDollarSign size={18} />
            </Link>
            <Link href="/sign-in" className="flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-white py-2 text-sm font-semibold text-black dark:bg-neutral-800 dark:text-white sm:w-44">
              Preview
              <Eye size={18} />
            </Link>
            <Button size={'icon'} variant={'secondary'} className="h-11 w-11 rounded-xl">
              <Heart size={20} />
            </Button>
            <Button size={'icon'} variant={'secondary'} className="h-11 w-11 rounded-xl">
              <Bookmark size={20} />
            </Button>
          </div>
          <div className="flex justify-between border-t-[2px] border-white/10 py-10">
            <div className="flex flex-col items-center gap-2.5">
              <CalendarRange />
              <h3 className="text-center font-medium !text-white">36d ago</h3>
              <span className="text-[0.75rem] font-medium text-[#999]">Posted</span>
            </div>
            <div className="flex flex-col items-center gap-2.5">
              <Clock />
              <h3 className="text-center font-medium !text-white">36d ago</h3>
              <span className="text-[0.75rem] font-medium text-[#999]">Updated</span>
            </div>
            <div className="flex flex-col items-center gap-2.5">
              <Eye />
              <h3 className="text-center font-medium !text-white">19.5K+</h3>
              <span className="text-[0.75rem] font-medium text-[#999]">View</span>
            </div>
            <div className="flex flex-col items-center gap-2.5">
              <Layers />
              <h3 className="text-center font-medium !text-white">3+</h3>
              <span className="text-[0.75rem] font-medium text-[#999]">Pages</span>
            </div>
          </div>
          <div className="grid w-full grid-cols-2 gap-5">
            <Image
              src={'https://www.framer.com/marketplace/_next/image/?url=https%3A%2F%2Fy4pdgnepgswqffpt.public.blob.vercel-storage.com%2Ftemplates%2F45969%2Fagentic-sNCXPQuuNWJ0s6sCJ1j6JRvrIWLbBr&w=1920&q=100'}
              alt=""
              width={1600}
              height={1200}
              className="!h-full !w-full rounded-lg bg-cover object-cover"
            />
            <Image
              src={'https://www.framer.com/marketplace/_next/image/?url=https%3A%2F%2Fy4pdgnepgswqffpt.public.blob.vercel-storage.com%2Ftemplates%2F45969%2Fagentic-sNCXPQuuNWJ0s6sCJ1j6JRvrIWLbBr&w=1920&q=100'}
              alt=""
              width={1600}
              height={1200}
              className="!h-full !w-full rounded-lg bg-cover object-cover"
            />
            <Image
              src={'https://www.framer.com/marketplace/_next/image/?url=https%3A%2F%2Fy4pdgnepgswqffpt.public.blob.vercel-storage.com%2Ftemplates%2F45969%2Fagentic-sNCXPQuuNWJ0s6sCJ1j6JRvrIWLbBr&w=1920&q=100'}
              alt=""
              width={1600}
              height={1200}
              className="!h-full !w-full rounded-lg bg-cover object-cover"
            />
            <Image
              src={'https://www.framer.com/marketplace/_next/image/?url=https%3A%2F%2Fy4pdgnepgswqffpt.public.blob.vercel-storage.com%2Ftemplates%2F45969%2Fagentic-sNCXPQuuNWJ0s6sCJ1j6JRvrIWLbBr&w=1920&q=100'}
              alt=""
              width={1600}
              height={1200}
              className="!h-full !w-full rounded-lg bg-cover object-cover"
            />
          </div>
        </div>
        <div className="mt-12 flex justify-between gap-5">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <Avatar className="h-12 w-12">
                  <AvatarImage src="/placeholder.svg" alt="Cristian Mielu" />
                  <AvatarFallback>CM</AvatarFallback>
                </Avatar>
                <div>
                  <h2>Template by Cristian Mielu</h2>
                  <p>Professional Web Designer & Developer</p>
                </div>
              </div>
              <div className="mt-4 flex items-center space-x-4">
                <Link href={''} className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary text-secondary-foreground hover:bg-secondary/80">
                  <Twitter size={20} />
                </Link>
                <Link href={''} className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary text-secondary-foreground hover:bg-secondary/80">
                  <Linkedin size={20} />
                </Link>
                <Link href={''} className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary text-secondary-foreground hover:bg-secondary/80">
                  <Github size={20} />
                </Link>
                <Link href={''} className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary text-secondary-foreground hover:bg-secondary/80">
                  <Youtube size={20} />
                </Link>
                <Link href={''} className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary text-secondary-foreground hover:bg-secondary/80">
                  <Facebook size={20} />
                </Link>
              </div>
            </div>
            <p className="text-xl text-[#999]">
              Agentic is meticulously crafted to serve as the ultimate template for design agencies, startups, and businesses aiming to create a striking online presence. Our approach centers around providing a responsive, minimalist design that combines dynamic animation effects with seamless
              functionality. Agentic ensures a smooth development process, enabling designers and developers to focus on showcasing their work in the most compelling manner.
            </p>
          </div>
          <div className="flex w-full flex-col gap-10">
            <div>
              <h2>Template Information</h2>
              <p>Details about the template, its contents, and support options</p>
            </div>
            <div className="grid gap-6">
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Categories</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="flex select-none items-center space-x-1.5 whitespace-nowrap rounded-xl px-3.5 py-1 text-xs font-semibold leading-[1.6] shadow-[rgba(0,0,0,0.05)0px_2px_8px_0px] transition-all duration-300 hover:opacity-80 md:text-sm">
                    Business
                  </Badge>
                  <Badge variant="secondary" className="flex select-none items-center space-x-1.5 whitespace-nowrap rounded-xl px-3.5 py-1 text-xs font-semibold leading-[1.6] shadow-[rgba(0,0,0,0.05)0px_2px_8px_0px] transition-all duration-300 hover:opacity-80 md:text-sm">
                    Agency
                  </Badge>
                  <Badge variant="secondary" className="flex select-none items-center space-x-1.5 whitespace-nowrap rounded-xl px-3.5 py-1 text-xs font-semibold leading-[1.6] shadow-[rgba(0,0,0,0.05)0px_2px_8px_0px] transition-all duration-300 hover:opacity-80 md:text-sm">
                    Portfolio
                  </Badge>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Pages</h3>
              <p className="body-xs text-[#999]">Home, Works, Works Pages (CMS), 404, Licensing</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Support</h3>
              <ul className="grid gap-2">
                <li>
                  <Link href={''} className="flex h-auto p-0 text-blue-500">
                    <Mail className="mr-2 h-4 w-4" /> Contact Cristian Mielu
                  </Link>
                </li>
                <li>
                  <Link href={''} className="flex h-auto p-0 text-blue-500">
                    <HelpCircle className="mr-2 h-4 w-4" /> How templates work
                  </Link>
                </li>
                <li>
                  <Link href={''} className="flex h-auto p-0 text-blue-500">
                    <Users className="mr-2 h-4 w-4" /> Get help from the community
                  </Link>
                </li>
                <li>
                  <Link href={''} className="flex h-auto p-0 text-blue-500">
                    <Info className="mr-2 h-4 w-4" /> Report this template
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Refund Policy</h3>
                <p className="text-[16px] text-muted-foreground">Framer does not handle refunds directly. All purchases go through the template creators. Please review the creators&apos; refund policies before buying.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
