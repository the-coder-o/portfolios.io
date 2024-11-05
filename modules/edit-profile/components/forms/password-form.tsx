import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import TextField from '@/components/fields/text-field'
import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'

export const passwordSchema = z
  .object({
    oldPassword: z.string().nonempty('Old password is required'),
    newPassword: z.string().min(8, 'New password must be at least 8 characters'),
    repeatPassword: z.string().min(8, 'Repeat password must be at least 8 characters'),
  })
  .refine((data) => data.newPassword === data.repeatPassword, {
    message: 'New passwords do not match',
    path: ['repeatPassword'],
  })

type PasswordFormSchema = z.infer<typeof passwordSchema>

const PasswordForm = () => {
  const methods = useForm<PasswordFormSchema>({
    resolver: zodResolver(passwordSchema),
    defaultValues: { oldPassword: '', newPassword: '', repeatPassword: '' },
  })

  const { handleSubmit } = methods

  const onSubmit = (data: PasswordFormSchema) => {
    console.log(data)
  }

  return (
    <Form {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-5">
          <TextField name="oldPassword" label="Old password" placeholder="*********" className="mt-1 rounded-xl" />
          <TextField name="newPassword" label="New password" placeholder="*********" className="mt-1 rounded-xl" />
          <TextField name="repeatPassword" label="Repeat new password" placeholder="*********" className="mt-1 rounded-xl" />
        </div>
        <div className="flex justify-end">
          <Button type="submit" variant={'secondary'} className="mt-5 rounded-xl">
            Save changes
          </Button>
        </div>
      </form>
    </Form>
  )
}

export default PasswordForm
