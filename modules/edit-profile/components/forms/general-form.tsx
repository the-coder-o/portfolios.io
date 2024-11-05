import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import TextField from '@/components/fields/text'
import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'

const usernameRegExp = /^[a-zA-Z0-9_-]+$/

export const generalSchema = z.object({
  username: z.string().max(30, 'Username must be between 1 and 30 characters').regex(usernameRegExp, 'Username can only contain letters, numbers, underscores, and dashes').optional(),
  email: z.string().email('Invalid email address').optional(),
})

type GeneralFormSchema = z.infer<typeof generalSchema>

const GeneralForm = () => {
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
        <div className="flex flex-col gap-5">
          <TextField name="username" label="Username" placeholder="Enter your username" className="mt-1 rounded-xl" />
          <TextField name="email" label="Email" placeholder="Enter your email" className="mt-1 rounded-xl" />
        </div>
        <div className="flex justify-end">
          <Button type="submit" variant={'secondary'} className="mt-5 rounded-xl">
            Save chnages
          </Button>
        </div>
      </form>
    </Form>
  )
}

export default GeneralForm
