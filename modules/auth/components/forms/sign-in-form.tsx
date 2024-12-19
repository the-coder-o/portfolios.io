'use client'

import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { Lock, Mail } from 'lucide-react'
import { zodResolver } from '@hookform/resolvers/zod'

import { signInSchema } from '@/modules/auth/components/forms/form.schema'
import { Form } from '@/components/ui/form'
import AuthButton from '@/components/loading/auth-loading'
import TextField from '@/components/fields/text-field'

import { useAuthSignIn } from '../../hooks/useAuthSignin'

type SignInFormSchema = z.infer<typeof signInSchema>

export const SignInForm = () => {
  const { triggerSignIn, isPending } = useAuthSignIn()

  const methods = useForm<SignInFormSchema>({
    resolver: zodResolver(signInSchema),
    defaultValues: { email: '', password: '' },
  })

  const { handleSubmit } = methods

  const onSubmit = (values: z.infer<typeof signInSchema>) => {
    triggerSignIn(values)
  }

  return (
    <Form {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <TextField name="email" label="Email address" type={'email'} placeholder="jhondou@gmail.com" iconLeft={Mail} className="border-transparent bg-white/10" />
        <TextField name="password" label="Password" type={'password'} placeholder="Enter your password" iconLeft={Lock} className="border-transparent bg-white/10" />
        <AuthButton isPending={isPending} type="submit" title={'Sign In'} />
      </form>
    </Form>
  )
}
