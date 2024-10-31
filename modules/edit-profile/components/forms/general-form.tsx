import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import TextField from '@/components/fields/Text'
import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'

const usernameRegExp = /^[a-zA-Z0-9_-]+$/

export const generalSchema = z.object({
  username: z.string().min(1, 'Username is required').max(30, 'Username must be between 1 and 30 characters').regex(usernameRegExp, 'Username can only contain letters, numbers, underscores, and dashes'),
  email: z.string().email('Invalid email address'),
})

type GeneralFormSchema = z.infer<typeof generalSchema>

const General = () => {
  const methods = useForm<GeneralFormSchema>({
    resolver: zodResolver(generalSchema),
    defaultValues: { email: '', username: '' },
  })

  const { handleSubmit } = methods

  const onSubmit = (data: GeneralFormSchema) => {
    console.log(data)
  }

  return (
    <Form {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField name="username" label="Username" placeholder="Enter your username" className="mt-1 rounded-xl" />
        <TextField name="email" label="Email" placeholder="Enter your email" className="mt-1 rounded-xl" />
        <div className="flex justify-end">
          <Button type="submit" variant={'secondary'} className="mt-5 rounded-xl">
            Save chnages
          </Button>
        </div>
      </form>
    </Form>
  )
}

export default General
