'use client'

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

import { LogoAuth } from '@/components/logo/logo-auth'

import { AuthHeader } from '../components/header/auth-header'
import { OnboardingForm } from '../components/forms/onboarding-form'
import { AuthGlobalFooter } from '../components/footers/auth-global-footer'

export const OnboardingView = () => {
  return (
    <div
      className="flex min-h-screen w-full flex-col bg-cover bg-center"
      style={{
        backgroundImage: "url('https://daily-now-res.cloudinary.com/image/upload/s--r2ffZPB4--/f_auto/v1716969841/dailydev_where_developers_suffer_together_sfvfog')",
      }}
    >
      <div className="container mx-auto flex flex-col">
        <div className="flex items-center justify-between pt-5 max-md:pt-2">
          <LogoAuth />
          <div className="flex items-center gap-2">
            <Link href="/sign-up" className="flex items-center justify-center gap-1.5 rounded-xl border-white/20 bg-white/10 px-5 py-2 text-white hover:bg-white/20">
              <ArrowLeft size={18} />
              Back
            </Link>
          </div>
        </div>
        <div className="flex h-[85vh] items-center justify-center">
          <div className="relative z-10 w-[450px] max-md:w-full">
            <div className="relative">
              <AuthHeader title={'Sign Up'} />
              <OnboardingForm />
            </div>
          </div>
        </div>
      </div>
      <AuthGlobalFooter />
    </div>
  )
}
