'use client'

import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { useEffect } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'

import { roles } from '@/constants/roles'
import { countries } from '@/constants/countries'
import { Form } from '@/components/ui/form'
import WebsiteField from '@/components/fields/website-input'
import UserNameField from '@/components/fields/username-input'
import TextField from '@/components/fields/text-field'
import TextAreaField from '@/components/fields/text-area'
import SelectField from '@/components/fields/select'
import LoadingButton from '@/components/buttons/loading-button'

import { IProfile } from '../../types/profile.interface'
import { useEditProfileMe } from '../../hooks/useEditProfileMe'

import { userProfileSchema } from './form-schema'

type EditProfileFormSchema = z.infer<typeof userProfileSchema>

interface IProps {
  profile: IProfile
}

const EditProfileForm = ({ profile }: IProps) => {
  const { triggerProfileEdit, isPending, isSuccess } = useEditProfileMe()

  const methods = useForm<EditProfileFormSchema>({
    resolver: zodResolver(userProfileSchema),
    defaultValues: {
      bio: profile.bio ?? '',
      location: profile.location ?? '',
      name: profile.name ?? '',
      username: profile.username ?? '',
      website_url: profile.website_url ?? '',
      role: profile.role ?? '',
      email: profile.email ?? '',
      avatar: profile.avatar ?? '',
    },
  })

  const {
    handleSubmit,
    formState: { isDirty },
    reset,
  } = methods

  const onSubmit = (formValues: EditProfileFormSchema) => {
    triggerProfileEdit(formValues)
  }

  useEffect(() => {
    if (isSuccess) {
      reset(methods.getValues())
    }
  }, [isSuccess, reset, methods])

  return (
    <Form {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mt-5 flex flex-col gap-5">
          <TextField name="name" label="Name" placeholder="Enter your name" className="mt-1 rounded-xl" />
          <SelectField name="location" label="Location" placeholder="Select your location" data={countries} />
          <SelectField name="role" label="Role" placeholder="Select your role" data={roles} />
          <WebsiteField name="website_url" label="Website" placeholder="Enter your website" className="rounded-xl" />
          <UserNameField name="username" label="Username" placeholder="Enter your username" className="rounded-xl" />
          <TextAreaField name="bio" label="Bio" placeholder="Write a short bio" className="mt-1 rounded-xl" />
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

export default EditProfileForm
