import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { Button } from '@/components/ui/button'

interface AuthFooterProps {
  pageTitle?: string
  pageDescription?: string
  description?: string
  pageUrl?: string
}

export const AuthFooter = ({ pageTitle, pageDescription, description, pageUrl }: AuthFooterProps) => {
  return (
    <>
      <div className="mt-10">
        <p className="mt-4 text-center text-sm text-muted dark:text-[#a3a3a3]">
          {pageDescription}{' '}
          <Link href={`${pageUrl}`} className="text-black dark:text-white">
            {pageTitle}
          </Link>
        </p>
      </div>
      <div className="mt-10">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-muted-foreground/25" />
          </div>
          <div className="relative flex justify-center text-xs">
            <span className="bg-background px-2 text-muted-foreground">Or sign in with</span>
          </div>
        </div>
        <div className="mt-6 flex w-full flex-col items-center justify-center gap-2">
          <Button className="justify-centxl relative z-10 flex h-11 w-full items-center rounded-xl border-2 bg-white px-4 py-1.5 text-sm font-medium text-black transition duration-200 hover:bg-white/80 md:text-sm">
            <Image src={'https://freelogopng.com/images/all_img/1657952440google-logo-png-transparent.png'} alt="google" width={15} height={15} />
            <span className="ml-2 text-sm font-semibold leading-6">Google</span>
          </Button>
          <Button className="justify-centxl relative z-10 flex h-11 w-full items-center rounded-xl border-2 bg-white px-4 py-1.5 text-sm font-medium text-black transition duration-200 hover:bg-white/80 md:text-sm">
            <Image src={'https://cdn-icons-png.flaticon.com/512/25/25231.png'} alt="google" width={15} height={15} />
            <span className="ml-2 text-sm font-semibold leading-6">Github</span>
          </Button>
        </div>
        <p className="mt-8 text-center text-sm text-neutral-600 dark:text-[#a3a3a3]">{description}</p>
      </div>
    </>
  )
}
