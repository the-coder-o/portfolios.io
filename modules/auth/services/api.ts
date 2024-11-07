import http from '@/services/api'

import { SignUpInterface } from '../types/sign-up.type'
import { SignInInterface } from '../types/sign-in.type'

export const SignIn = async (values: SignInInterface) => {
  return await http.post(`/auth/signin`, {
    ...values,
  })
}

export const SignUp = async (values: SignUpInterface) => {
  return await http.post(`/auth/signup`, {
    ...values,
  })
}
