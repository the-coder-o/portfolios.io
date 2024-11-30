'use client'

import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { Mail } from 'lucide-react'
import { zodResolver } from '@hookform/resolvers/zod'

import { onboardingSchema } from '@/modules/auth/components/forms/form.schema'
import { Form } from '@/components/ui/form'
import AuthButton from '@/components/loading/auth-loading'
import TextField from '@/components/fields/text-field'

type SignUpFormSchema = z.infer<typeof onboardingSchema>

export const SignUpForm = () => {
  const router = useRouter()

  const methods = useForm<SignUpFormSchema>({
    resolver: zodResolver(onboardingSchema),
    defaultValues: { email: '' },
  })

  const { handleSubmit } = methods

  const onSubmit = (values: SignUpFormSchema) => {
    localStorage.setItem('onboardingEmail', values.email)
    router.push('/onboarding')
  }

  return (
    <Form {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <TextField name="email" label="Email address" placeholder="jhondou@gmail.com" iconLeft={Mail} className="border-transparent bg-white/10" />
        <AuthButton isPending={false} type="submit" title="Sign Up Free forever" />
      </form>
    </Form>
  )
}
