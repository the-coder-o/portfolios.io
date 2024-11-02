import React from 'react'

import { AuthFooter } from '../components/footers/auth-footer'
import { SignInForm } from '../components/forms/sign-in-form'
import { AuthBanner } from '../components/auth-banner'
import { AuthHeader } from '../components/header/auth-header'

export const SignInView = () => {
  return (
    <div className="grid min-h-screen w-full grid-cols-1 md:grid-cols-2">
      <div className="flex h-full min-h-screen w-full">
        <div className="flex w-full items-center justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-md">
            <AuthHeader title={'Sign In'} />
            <SignInForm />
            <AuthFooter pageUrl="/sign-up" pageTitle="Sign Up" pageDescription="Don't have an account?" description="By clicking on sign in, you agree to our Terms of Service and Privacy Policy." />
          </div>
        </div>
      </div>
      <AuthBanner />
    </div>
  )
}
