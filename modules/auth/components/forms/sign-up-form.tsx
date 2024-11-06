'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import TextField from '@/components/fields/text-field'
import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/

const signUpSchema = z.object({
  name: z.string().min(1, 'Full name is required'),
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters').regex(passwordRegex, 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'),
})

type SignUpFormSchema = z.infer<typeof signUpSchema>

export const SignUpForm = () => {
  const methods = useForm<SignUpFormSchema>({
    resolver: zodResolver(signUpSchema),
    defaultValues: { name: '', email: '', password: '' },
  })

  const { handleSubmit } = methods

  const onSubmit = (data: SignUpFormSchema) => {
    console.log(data)
  }

  return (
    <Form {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <TextField name="name" label="Your name" placeholder="Jhon Dou" required />
        <TextField name="email" label="Email address" placeholder="jhondou@gmail.com" required />
        <TextField name="password" label="Password" placeholder="Enter your password" required />
        <Button
          type="submit"
          className="justify-centxl relative z-10 flex w-full items-center rounded-xl border border-transparent bg-neutral-900 px-4 py-2 text-sm font-medium text-white shadow-[0px_-1px_0px_0px_#FFFFFF40_inset,_0px_1px_0px_0px_#FFFFFF40_inset] transition duration-200 hover:bg-black/90 md:text-sm"
        >
          Sign Up
        </Button>
      </form>
    </Form>
  )
}
