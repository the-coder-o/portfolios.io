import React from 'react'

import { Logo } from '@/components/logo'

interface AuthHeaderProps {
  title: string
}

export const AuthHeader = ({ title }: AuthHeaderProps) => {
  return (
    <div>
      <Logo />
      <h2 className="mb-5 mt-5 text-2xl font-bold leading-9 tracking-tight text-black dark:text-white">{title} for dashboard</h2>
    </div>
  )
}
