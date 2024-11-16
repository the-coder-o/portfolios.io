import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { Form } from '@/components/ui/form'
import TextField from '@/components/fields/text-field'
import LoadingButton from '@/components/buttons/loading-button'

import { useEditUserPassword } from '../../hooks/useEditUserPassword'

import { passwordSchema } from './form-schema'

type PasswordFormSchema = z.infer<typeof passwordSchema>

const PasswordForm = () => {
  const { triggerEditUserPassword, isPending } = useEditUserPassword()

  const methods = useForm<PasswordFormSchema>({
    resolver: zodResolver(passwordSchema),
    defaultValues: { old_password: '', new_password: '' },
  })

  const { handleSubmit } = methods

  const onSubmit = (data: PasswordFormSchema) => {
    triggerEditUserPassword(data)
  }

  return (
    <Form {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-5">
          <TextField name="old_password" label="Old password" placeholder="*********" className="mt-1 rounded-xl" />
          <TextField name="new_password" label="New password" placeholder="*********" className="mt-1 rounded-xl" />
        </div>
        <div className="mt-5 flex justify-end">
          <LoadingButton isLoading={isPending} variant={'secondary'} className="rounded-xl max-md:w-full">
            Save changes
          </LoadingButton>
        </div>
      </form>
    </Form>
  )
}

export default PasswordForm
