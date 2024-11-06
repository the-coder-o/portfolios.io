import React from 'react'
import { LogoAuth } from '@/components/logo/logo-auth'

interface AuthHeaderProps {
  title: string
}

export const AuthHeader = ({ title }: AuthHeaderProps) => {
  return (
    <div className="pb-5">
      <LogoAuth />
      <h2 className="mb-5 mt-7 text-2xl font-bold leading-9 tracking-tight text-black dark:text-white">{title} for dashboard</h2>
    </div>
  )
}
