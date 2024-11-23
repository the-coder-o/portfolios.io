import { z } from 'zod'
import { useForm } from 'react-hook-form'
import React from 'react'
import { zodResolver } from '@hookform/resolvers/zod'

import { useCreatePortfolio } from '@/modules/dashboard/hooks/useCreatePortfolio'
import { portfolioSchema } from '@/modules/dashboard/components/forms/form-schema'
import { Form } from '@/components/ui/form'
import TextField from '@/components/fields/text-field'
import TextAreaField from '@/components/fields/text-area'
import SelectField from '@/components/fields/select'
import FileField from '@/components/fields/file-upload'
import LoadingButton from '@/components/buttons/loading-button'

type CreatePortfolioFormSchema = z.infer<typeof portfolioSchema>

export const CreatePortfolioForm = () => {
  const methods = useForm<CreatePortfolioFormSchema>({
    resolver: zodResolver(portfolioSchema),
    defaultValues: {
      category: '672f0fd67303b18cfb20e53c',
      name: '',
      description: '',
      images: [],
      github_link: '',
      live_demo: '',
      page: 0,
      type: '',
    },
  })

  const { handleSubmit } = methods

  const { triggerPortfolioCreate, isPending } = useCreatePortfolio()

  const onSubmit = async (formValues: CreatePortfolioFormSchema) => {
    await triggerPortfolioCreate(formValues)
  }

  const countType = [
    {
      type: 'free',
      name: 'free',
    },
  ]

  return (
    <div className={'mb-5'}>
      <Form {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <TextField name="name" label="Portfolio name" placeholder="Portfolio name" className="rounded-xl" />
            </div>
            <div className="space-y-2">
              <SelectField name="type" label="type" placeholder="Select type" data={countType} />
            </div>
          </div>
          <div className="space-y-2">
            <TextField type={'number'} name="page" label="Page number" placeholder="Page number" className="rounded-xl" />
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <TextField name={'github_link'} label={'Github link'} placeholder="https://github.com/username/repo" />
            </div>
            <div className="space-y-2">
              <TextField name={'live_demo'} label={'Live Demo'} placeholder="https://your-demo-site.com" />
            </div>
          </div>
          <div className="space-y-2">
            <TextAreaField name={'description'} label={'Description'} placeholder="Describe your portfolio" className="min-h-[100px]" />
          </div>
          <div className="space-y-2">
            <FileField name="images" label="Portfolios" />
          </div>
          <div className="mt-5 flex justify-end">
            <LoadingButton isLoading={isPending} variant={'secondary'} className="rounded-xl max-md:w-full">
              Create Portfolio
            </LoadingButton>
          </div>
        </form>
      </Form>
    </div>
  )
}
