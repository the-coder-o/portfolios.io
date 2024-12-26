'use client'

import { z } from 'zod'
import { useForm } from 'react-hook-form'
import React, { useEffect } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'

import { Form } from '@/components/ui/form'
import SkillsField from '@/components/fields/skills-field'
import LoadingButton from '@/components/buttons/loading-button'

import { useEditProfileMe } from '../../hooks/useEditProfileMe'

import { skillSchema } from './form-schema'

type SkillsFormSchema = z.infer<typeof skillSchema>

// interface IProps {
//   profile: IProfile
// }

const SkillsForm = () => {
  const { isPending, isSuccess } = useEditProfileMe()

  const methods = useForm<SkillsFormSchema>({
    resolver: zodResolver(skillSchema),
    defaultValues: { skills: [] },
  })

  const {
    formState: { isDirty },
    reset,
  } = methods

  // const onSubmit = (data: SkillsFormSchema) => {
  //   triggerProfileEdit(data)
  // }

  useEffect(() => {
    if (isSuccess) {
      reset(methods.getValues())
    }
  }, [isSuccess, reset, methods])

  return (
    <Form {...methods}>
      <p>Select up to 10 skills or technologies that best represent your expertise. Use the search bar to find specific skills or add new ones if they’re not listed.</p>
      <form>
        <div className="flex flex-col gap-5">
          <div className="space-y-2">
            <SkillsField name="skills" label="Skills & Technologies" required={true} />
          </div>
        </div>
        <div className="mt-5 flex justify-end">
          <LoadingButton isLoading={isPending} variant={'secondary'} className="rounded-xl max-md:w-full" disabled={!isDirty}>
            Save changes
          </LoadingButton>
        </div>
      </form>
    </Form>
  )
}

export default SkillsForm
