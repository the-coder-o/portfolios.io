import { toast } from 'sonner'
import { useRouter } from 'next/navigation'
import Cookies from 'js-cookie'
import { useMutation } from '@tanstack/react-query'

import http from '@/services/api'

import { SignUpInterface } from '../types/sign-up.type'
import { SignUp } from '../services/api'

export const useAuthSignUp = () => {
  const router = useRouter()

  const { mutate, isPending, isSuccess, isError } = useMutation({
    mutationFn: (values: SignUpInterface) => SignUp(values),
    onSuccess: (response) => {
      const token = response.data.data.access_token

      http.defaults.headers.common = {
        Authorization: `Bearer ${token}`,
      }
      Cookies.set('access_token', token, { expires: 7 })
      toast.success('You successfully registered !')
      router.push('/')
    },
    onError: (error: any) => {
      Cookies.remove('access_token')

      const errorMessage = error?.response?.data?.message || 'An error occurred during sign-up'
      toast.error(errorMessage)
    },
  })

  return {
    triggerSignUp: mutate,
    isPending,
    isSuccess,
    isError,
  }
}
