import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { Form } from '@/components/ui/form'
import TextField from '@/components/fields/text-field'
import LoadingButton from '@/components/buttons/loading-button'

import { IProfile } from '../../types/profile.interface'
import { useEditProfileMe } from '../../hooks/useEditProfileMe'

import { generalSchema } from './form-schema'

type GeneralFormSchema = z.infer<typeof generalSchema>

interface IProps {
  profile: IProfile
}

const GeneralForm = ({ profile }: IProps) => {
  const { triggerProfileEdit, isPending } = useEditProfileMe()

  const methods = useForm<GeneralFormSchema>({
    resolver: zodResolver(generalSchema),
    defaultValues: { email: profile.email ?? '', username: profile.username ?? '' },
  })

  const { handleSubmit } = methods

  const onSubmit = (data: GeneralFormSchema) => {
    triggerProfileEdit(data)
  }

  return (
    <Form {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-5">
          <TextField name="username" label="Username" placeholder="Enter your username" className="mt-1 rounded-xl" />
          <TextField name="email" label="Email" placeholder="Enter your email" className="mt-1 rounded-xl" />
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

export default GeneralForm
