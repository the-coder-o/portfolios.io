import { Github } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

import { Logo } from '@/components/logo'
import { Button } from '@/components/ui/button'

import { SignUpForm } from '../section/sign-up'

import { AuthBanner } from './auth-banner'

export const SignUpSection = () => {
  return (
    <div className="grid min-h-screen w-full grid-cols-1 md:grid-cols-2">
      <div className="flex h-full min-h-screen w-full">
        <div className="flex w-full items-center justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-md">
            <div>
              <Logo />
              <h2 className="mt-8 text-2xl font-bold leading-9 tracking-tight text-black dark:text-white">Sign up for an account</h2>
            </div>
            <div className="mt-10">
              <SignUpForm />
              <p className="mt-4 text-center text-sm text-muted dark:text-[#a3a3a3]">
                Already have an account?{' '}
                <Link className="text-black dark:text-white" href="/sign-in">
                  Sign in
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
              <p className="mt-8 text-center text-sm text-neutral-600 dark:text-[#a3a3a3]">By clicking on sign up, you agree to our Terms of Service and Privacy Policy.</p>
            </div>
          </div>
        </div>
      </div>
      <AuthBanner />
    </div>
  )
}
