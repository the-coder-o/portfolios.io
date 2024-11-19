'use client'

import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { useEffect } from 'react'
import { ALargeSmall, Lock, Mail, User } from 'lucide-react'
import { zodResolver } from '@hookform/resolvers/zod'

import { Form } from '@/components/ui/form'
import AuthButton from '@/components/loading/auth-loading'
import TextField from '@/components/fields/text-field'

import { useAuthSignUp } from '../../hooks/useAuthSignUp'

const signUpSchema = z.object({
  name: z.string().min(1, 'Full name is required'),
  username: z.string().regex(/^[a-zA-Z0-9_-]{3,20}$/, 'Invalid username'),
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
})

type SignUpFormSchema = z.infer<typeof signUpSchema>

export const OnboardingForm = () => {
  const { triggerSignUp, isPending } = useAuthSignUp()

  const methods = useForm<SignUpFormSchema>({
    resolver: zodResolver(signUpSchema),
    defaultValues: { name: '', username: '', email: '', password: '' },
  })

  const { handleSubmit, setValue } = methods

  useEffect(() => {
    const savedEmail = localStorage.getItem('onboardingEmail')
    if (savedEmail) {
      setValue('email', savedEmail)
    }
  }, [setValue])

  const onSubmit = (values: z.infer<typeof signUpSchema>) => {
    triggerSignUp(values)
  }

  return (
    <Form {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <TextField name="name" label="Your name" placeholder="Jhon Dou" iconLeft={ALargeSmall} className="border-transparent bg-white/10" />
        <TextField name="username" label="Your username" placeholder="@jhondou" iconLeft={User} className="border-transparent bg-white/10" />
        <TextField name="email" label="Email address" placeholder="jhondou@gmail.com" iconLeft={Mail} className="border-transparent bg-white/10" />
        <TextField name="password" label="Password" placeholder="Enter your password" iconLeft={Lock} className="border-transparent bg-white/10" />
        <AuthButton isPending={isPending} type="submit" title={'Complete Sign Up'} />
      </form>
    </Form>
  )
}