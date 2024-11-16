'use client'

import React from 'react'
import Link from 'next/link'

import { AuthHeader } from '../components/header/auth-header'
import { SignInForm } from '../components/forms/sign-in-form'
import { AuthGlobalFooter } from '../components/footers/auth-global-footer'
import { AuthFooter } from '../components/footers/auth-footer'

export const SignInView = () => {
  return (
    <div
      className="grid min-h-screen w-full grid-cols-1 md:grid-cols-2"
      style={{
        backgroundImage: "url('https://daily-now-res.cloudinary.com/image/upload/s--r2ffZPB4--/f_auto/v1716969841/dailydev_where_developers_suffer_together_sfvfog')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute right-0 top-0 z-20 flex items-center gap-4 p-6">
        <span className="text-sm text-white">Don&apos;t have an account?</span>
        <Link href={'/sign-up'} className="flex items-center justify-center rounded-xl border-white/20 bg-white/10 px-5 py-2 text-white hover:bg-white/20">
          Sign Up
        </Link>
      </div>
      <div className="flex h-full min-h-screen w-full">
        <div className="absolute inset-0 z-0 bg-black/10"></div>
        <div className="relative z-10 flex w-full items-center justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-md">
            <AuthHeader title={'Sign In'} />
            <SignInForm />
            <AuthFooter description="By clicking on sign in, you agree to our Terms of Service and Privacy Policy." />
          </div>
        </div>
      </div>
      <AuthGlobalFooter />
    </div>
  )
}
