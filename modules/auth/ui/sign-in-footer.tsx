import { Github } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

import { Button } from '@/components/ui/button'

export const SignInFooter = () => {
  return (
    <div>
      <div className="mt-10">
        <p className="mt-4 text-center text-sm text-muted dark:text-[#a3a3a3]">
          Don&apos;t have an account?{' '}
          <Link className="text-black dark:text-white" href="/sign-up">
            Sign Up
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
          <Button className="justify-centxl relative z-10 flex w-full items-center rounded-xl border border-transparent bg-neutral-900 px-4 py-1.5 text-sm font-medium text-white shadow-[0px_-1px_0px_0px_#FFFFFF40_inset,_0px_1px_0px_0px_#FFFFFF40_inset] transition duration-200 hover:bg-black/90 md:text-sm">
            <Github size={17} />
            <span className="ml-2 text-sm font-semibold leading-6">Github</span>
          </Button>
        </div>
        <p className="mt-8 text-center text-sm text-neutral-600 dark:text-[#a3a3a3]">By clicking on sign in, you agree to our Terms of Service and Privacy Policy.</p>
      </div>
    </div>
  )
}
