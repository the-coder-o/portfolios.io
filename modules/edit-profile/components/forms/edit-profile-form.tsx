import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import MultiTextField from '@/components/fields/multi-text-field'
import TextField from '@/components/fields/text-field'
import TextAreaField from '@/components/fields/text-area'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'

export const editProfileSchema = z.object({
  name: z.string().optional(),
  location: z.string().optional(),
  bio: z.string().optional(),
  workHistory: z
    .array(
      z.object({
        role: z.string().optional(),
        company: z.string().optional(),
      }),
    )
    .optional(),
})

type EditProfileFormSchema = z.infer<typeof editProfileSchema>

const EditProfileForm = () => {
  const methods = useForm<EditProfileFormSchema>({
    resolver: zodResolver(editProfileSchema),
    defaultValues: { workHistory: [], bio: '', location: '', name: '' },
  })

  const { handleSubmit } = methods

  const onSubmit = (data: EditProfileFormSchema) => {
    console.log(data)
  }

  return (
    <Form {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mt-1 flex items-center">
          <Avatar className="h-20 w-20 rounded-xl">
            <AvatarImage src="/placeholder.svg" alt="AS" className="rounded-xl" />
            <AvatarFallback className="rounded-xl">AS</AvatarFallback>
          </Avatar>
          <div className="ml-4 flex">
            <Button variant="outline" size="sm" className="mr-2 rounded-xl">
              Upload new picture
            </Button>
          </div>
        </div>
        <div className="mt-5 flex flex-col gap-5">
          <TextField name="name" label="Name" placeholder="Enter your name" className="mt-1 rounded-xl" />
          <TextField name="location" label="Location" placeholder="Enter your location" className="mt-1 rounded-xl" />
          <TextAreaField name="bio" label="Bio" placeholder="Write a short bio" className="mt-1 rounded-xl" />
          <MultiTextField name="workHistory" label="Work history & Education" addButtonText="Add Work History" className="space-y-4" />
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

export default EditProfileForm
