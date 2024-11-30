import { z } from 'zod'
import { useForm } from 'react-hook-form'
import React from 'react'
import { zodResolver } from '@hookform/resolvers/zod'

import { useUpdatePortfolio } from '@/modules/dashboard/hooks/useUpdatePortfolio'
import { editPortfolioSchema } from '@/modules/dashboard/components/forms/form.schema'
import { categories } from '@/constants/categories'
import { Form } from '@/components/ui/form'
import TextField from '@/components/fields/text-field'
import TextAreaField from '@/components/fields/text-area'
import SkillsField from '@/components/fields/skills-field'
import SelectCategoryField from '@/components/fields/select-category-field'
import FileField from '@/components/fields/file-upload'
import LoadingButton from '@/components/buttons/loading-button'

type UpdatePortfolioFormSchema = z.infer<typeof editPortfolioSchema>

interface UpdatePortfolio {
  portfolio: any
}

export const UpdatePortfolioForm = ({ portfolio }: UpdatePortfolio) => {
  const methods = useForm<UpdatePortfolioFormSchema>({
    resolver: zodResolver(editPortfolioSchema),
    defaultValues: {
      category: portfolio?.category?.name ?? '',
      name: portfolio?.name ?? '',
      description: portfolio?.description ?? '',
      images: portfolio?.images ?? [],
      github_link: portfolio?.github_link ?? '',
      live_demo: portfolio?.live_demo ?? '',
      page: portfolio?.page ?? 0,
      skills: portfolio?.skills ?? [],
      type: portfolio?.type ?? 'free',
    },
  })

  const { handleSubmit } = methods
  const { triggerUpdatePortfolio, isPending } = useUpdatePortfolio(portfolio?._id)

  const onSubmit = (formValues: UpdatePortfolioFormSchema | any) => {
    triggerUpdatePortfolio(formValues)
  }

  return (
    <div className={'mb-5'}>
      <Form {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1">
            <div className="space-y-2">
              <TextField name="name" label="Portfolio name" placeholder="Portfolio name" className="rounded-xl" />
            </div>
          </div>
          <div className="space-y-2">
            <SelectCategoryField name="category" label="Select category" placeholder="Select category" data={categories} />
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
            <SkillsField name="skills" label="Skills & Technologies" />
          </div>
          <div className="space-y-2">
            <TextAreaField name={'description'} label={'Description'} placeholder="Describe your portfolio" className="min-h-[100px]" />
          </div>
          <div className="space-y-2">
            <FileField name="images" label="Portfolios" maxFiles={5} />
          </div>
          <div className="mt-5 flex justify-end">
            <LoadingButton isLoading={isPending} variant={'secondary'} className="rounded-xl max-md:w-full">
              Update Portfolio
            </LoadingButton>
          </div>
        </form>
      </Form>
    </div>
  )
}
