'use client'

import { AuthHeader } from '../components/header/auth-header'
import { OnboardingForm } from '../components/forms/onboarding-form'
import { AuthGlobalFooter } from '../components/footers/auth-global-footer'

export const OnboardingView = () => {
  return (
    <div
      className="grid min-h-screen w-full grid-cols-1 md:grid-cols-2"
      style={{
        backgroundImage: "url('https://daily-now-res.cloudinary.com/image/upload/s--r2ffZPB4--/f_auto/v1716969841/dailydev_where_developers_suffer_together_sfvfog')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="flex h-full min-h-screen w-full">
        <div className="absolute inset-0 z-0 bg-black/10"></div>
        <div className="relative z-10 flex w-full items-center justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-md">
            <AuthHeader title={'Sign Up'} />
            <OnboardingForm />
          </div>
        </div>
      </div>
      <AuthGlobalFooter />
    </div>
  )
}
