'use client'

import { z } from 'zod'
import { useForm } from 'react-hook-form'
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

export const SignUpForm = () => {
  const { triggerSignUp, isPending } = useAuthSignUp()

  const methods = useForm<SignUpFormSchema>({
    resolver: zodResolver(signUpSchema),
    defaultValues: { name: '', username: '', email: '', password: '' },
  })

  const { handleSubmit } = methods

  const onSubmit = (values: z.infer<typeof signUpSchema>) => {
    triggerSignUp(values)
  }

  return (
    <Form {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <TextField name="name" label="Your name" placeholder="Jhon Dou" required />
        <TextField name="username" label="Your username" placeholder="@jhondou" required />
        <TextField name="email" label="Email address" placeholder="jhondou@gmail.com" required />
        <TextField name="password" label="Password" placeholder="Enter your password" required />
        <AuthButton isPending={isPending} type="submit" title={'Sign Up'} />
      </form>
    </Form>
  )
}
