'use client'

import { toast } from 'sonner'
import { useRouter } from 'next/navigation'
import { LogOut } from 'lucide-react'
import Cookies from 'js-cookie'

import { Button } from '@/components/ui/button'

import { useIsAuth } from './use-isAuth'

const SignOutButton = () => {
  const router = useRouter()
  const isAuthUser = useIsAuth()

  const signOut = () => {
    Cookies.remove('access_token')

    router.push('/')
    router.refresh()

    toast.success('You have been signed out')
  }

  return (
    <>
      {isAuthUser ? (
        <Button onClick={signOut} className="flex h-[35px] w-full items-center justify-center gap-2 rounded-xl text-[15px] dark:bg-secondary dark:text-white dark:hover:text-white">
          Sign out
          <LogOut size={16} />
        </Button>
      ) : (
        <Button onClick={() => router.push('/sign-in')} className="flex h-[35px] w-full items-center justify-center gap-2 rounded-xl text-[15px] dark:bg-secondary dark:text-white dark:hover:text-white">
          Sign In
        </Button>
      )}
    </>
  )
}

export default SignOutButton
