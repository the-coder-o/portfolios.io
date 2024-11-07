import React from 'react'
import Link from 'next/link'
import { Github } from 'lucide-react'

import { Button } from '@/components/ui/button'

interface AuthFooterProps {
  pageTitle: string
  pageDescription: string
  description: string
  pageUrl: string
}

export const AuthFooter = ({ pageTitle, pageDescription, description, pageUrl }: AuthFooterProps) => {
  return (
    <div>
      <div className="mt-10">
        <p className="mt-4 text-center text-sm text-muted dark:text-[#a3a3a3]">
          {pageDescription}{' '}
          <Link href={pageUrl} className="text-black dark:text-white">
            {pageTitle}
          </Link>
        </p>
      </div>
      <div className="mt-10">
        <div className="relative">
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t border-neutral-300 dark:border-neutral-700"></div>
          </div>
          <div className="relative flex justify-center text-sm font-medium leading-6">
            <span className="bg-white px-6 text-neutral-400 dark:bg-black dark:text-[#a3a3a3]">Or continue with</span>
          </div>
        </div>
        <div className="mt-6 flex w-full items-center justify-center">
          <Button className="justify-centxl border-[#FFFFFF40 relative z-10 flex w-full items-center rounded-xl border-2 bg-neutral-900 px-4 py-1.5 text-sm font-medium text-white transition duration-200 hover:bg-black/90 md:text-sm">
            <Github size={17} />
            <span className="ml-2 text-sm font-semibold leading-6">Github</span>
          </Button>
        </div>
        <p className="mt-8 text-center text-sm text-neutral-600 dark:text-[#a3a3a3]">{description}</p>
      </div>
    </div>
  )
}
