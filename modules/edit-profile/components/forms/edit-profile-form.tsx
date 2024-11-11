import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { countries } from '@/constants/countries'
import { Form } from '@/components/ui/form'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import TextField from '@/components/fields/text-field'
import TextAreaField from '@/components/fields/text-area'
import SelectField from '@/components/fields/select'

import { IProfile } from '../../types/profile.interface'
import { useEditProfileMe } from '../../hooks/useEditProfileMe'

import { userProfileSchema } from './form-schema'

type EditProfileFormSchema = z.infer<typeof userProfileSchema>

interface IProps {
  profile: IProfile
}

const EditProfileForm = ({ profile }: IProps) => {
  const { triggerProfileEdit } = useEditProfileMe()

  const methods = useForm<EditProfileFormSchema>({
    resolver: zodResolver(userProfileSchema),
    defaultValues: {
      bio: profile.bio ?? '',
      location: profile.location ?? '',
      name: profile.name ?? '',
      email: profile.email ?? '',
      avatar: profile.avatar ?? '',
    },
  })

  const { handleSubmit } = methods

  const onSubmit = (formValues: EditProfileFormSchema) => {
    triggerProfileEdit(formValues)
  }

  return (
    <Form {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mt-1 flex items-center">
          <Avatar className="h-20 w-20 rounded-xl">
            <AvatarImage src={profile.avatar || '/placeholder.svg'} alt="Avatar" className="rounded-xl" />
            <AvatarFallback className="rounded-xl">{profile.name?.slice(0, 2)}</AvatarFallback>
          </Avatar>
          <div className="ml-4 flex">
            <Button variant="outline" size="sm" className="mr-2 rounded-xl">
              Upload new picture
            </Button>
          </div>
        </div>
        <div className="mt-5 flex flex-col gap-5">
          <TextField name="name" label="Name" placeholder="Enter your name" className="mt-1 rounded-xl" />
          <SelectField name="location" label="Location" placeholder="Enter your location" data={countries} />
          <TextAreaField name="bio" label="Bio" placeholder="Write a short bio" className="mt-1 rounded-xl" />
        </div>
        <div className="flex justify-end">
          <Button type="submit" variant="secondary" className="mt-5 rounded-xl">
            Save changes
          </Button>
        </div>
      </form>
    </Form>
  )
}

export default EditProfileForm
