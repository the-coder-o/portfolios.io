import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { Form } from '@/components/ui/form'
import { Button } from '@/components/ui/button'
import TextField from '@/components/fields/text-field'

import { generalSchema } from './form-schema'

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
