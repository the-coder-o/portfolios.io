import { toast } from 'sonner'
import { useRouter } from 'next/navigation'
import Cookies from 'js-cookie'
import { useMutation } from '@tanstack/react-query'

import http from '@/services/api'

import { SignInInterface } from '../types/sign-in.type'
import { SignIn } from '../services/api'

export const useAuthSignIn = () => {
  const router = useRouter()

  const { mutate, isPending, isSuccess, isError } = useMutation({
    mutationFn: (values: SignInInterface) => SignIn(values),
    onSuccess: (response) => {
      const token = response.data.data.access_token

      http.defaults.headers.common = {
        Authorization: `Bearer ${token}`,
      }
      Cookies.set('access_token', token, { expires: 1 })
      toast.success('You successfully signed in')
      router.push('/')
    },
    onError: (error: any) => {
      Cookies.remove('access_token')

      const errorMessage = error?.response?.data?.message || 'An error occurred during sign-in'
      toast.error(errorMessage)
    },
  })

  return {
    triggerSignIn: mutate,
    isPending,
    isSuccess,
    isError,
  }
}
