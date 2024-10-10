import React from 'react'

import { AuthBanner } from '../ui/auth-banner'
import { AuthHeader } from '../ui/auth-header'
import { SignInFooter } from '../ui/sign-in-footer'
import { SignInForm } from '../ui/sign-in-form'

export const SignInView = () => {
  return (
    <div className="grid min-h-screen w-full grid-cols-1 md:grid-cols-2">
      <div className="flex h-full min-h-screen w-full">
        <div className="flex w-full items-center justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-md">
            <AuthHeader title={'Sign In'} />
            <SignInForm />
            <SignInFooter />
          </div>
        </div>
      </div>
      <AuthBanner />
    </div>
  )
}
