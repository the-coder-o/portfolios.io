import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { useEffect, useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'

import { IProfile } from '@/modules/edit-profile/types/profile.interface'
import { useEditProfileMe } from '@/modules/edit-profile/hooks/useEditProfileMe'
import { userProfileSchema } from '@/modules/edit-profile/components/forms/form-schema'
import { colors } from '@/constants/colors'
import { Label } from '@/components/ui/label'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'

import { Form } from '../ui/form'
import LoadingButton from '../buttons/loading-button'

type EditProfileFormSchema = z.infer<typeof userProfileSchema>

interface IProps {
  profile: IProfile
}

export const UploadBannerModal = ({ profile }: IProps) => {
  const [open, setOpen] = useState(false)
  const [selectedColor, setSelectedColor] = useState(profile?.banner || colors[0].value)

  const { triggerProfileEdit, isPending } = useEditProfileMe()

  const methods = useForm<EditProfileFormSchema>({
    resolver: zodResolver(userProfileSchema),
    defaultValues: {
      banner: profile?.banner ?? '',
    },
  })

  const { handleSubmit, setValue } = methods

  useEffect(() => {
    setValue('banner', selectedColor)
  }, [selectedColor, setValue])

  const onSubmit = (formValues: EditProfileFormSchema) => {
    triggerProfileEdit(formValues)
  }

  return (
    <Form {...methods}>
      <form className="max-md:w-full">
        <div className="max-md:mb-5">
          <Button onClick={() => setOpen(true)} type="button" className="rounded-xl max-md:!w-full">
            Upload banner
          </Button>
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="!rounded-2xl sm:max-w-[600px]">
              <DialogHeader>
                <DialogTitle>Crop header banner</DialogTitle>
              </DialogHeader>
              <div style={{ backgroundImage: selectedColor }} className="mt-4 flex h-[300px] items-center justify-center rounded-xl border-black transition-all duration-300" />
              <div className="mt-4">
                <Label htmlFor="color-picker" className="mb-5 block">
                  Select background color
                </Label>
                <div id="color-picker" className="grid grid-cols-12 gap-2 max-sm:grid-cols-10">
                  {colors.map((color) => (
                    <Button key={color.id} variant="outline" className={`h-8 w-8 rounded-full p-0 ${selectedColor === color.value ? 'ring-2 ring-primary ring-offset-2' : ''}`} style={{ backgroundImage: color.value }} onClick={() => setSelectedColor(color.value)} />
                  ))}
                </div>
              </div>
              <DialogFooter className="gap-2">
                <Button variant="outline" onClick={() => setOpen(false)} className="rounded-xl">
                  Cancel
                </Button>
                <LoadingButton isLoading={isPending} onClick={handleSubmit(onSubmit)} variant={'secondary'} className="rounded-xl">
                  Save changes
                </LoadingButton>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </form>
    </Form>
  )
}
