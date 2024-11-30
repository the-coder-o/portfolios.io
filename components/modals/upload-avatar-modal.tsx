import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { useEffect, useState } from 'react'
import { CircleUserRound } from 'lucide-react'
import { zodResolver } from '@hookform/resolvers/zod'

import { IProfile } from '@/modules/edit-profile/types/profile.interface'
import { useEditProfileMe } from '@/modules/edit-profile/hooks/useEditProfileMe'
import { avatarCategories } from '@/constants/avatars'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Form } from '@/components/ui/form'
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import OptimizedImage from '@/components/optimize-image'

import LoadingButton from '../buttons/loading-button'

const avatarSchema = z.object({
  avatar: z.string().url(),
})

type AvatarFormSchema = z.infer<typeof avatarSchema>

interface IProps {
  profile: IProfile
}

export const UploadAvatarModal = ({ profile }: IProps) => {
  const [open, setOpen] = useState(false)
  const [selectedAvatar, setSelectedAvatar] = useState<string>(profile?.avatar || '')

  const { triggerProfileEdit, isPending, isSuccess } = useEditProfileMe()

  const methods = useForm<AvatarFormSchema>({
    resolver: zodResolver(avatarSchema),
    defaultValues: {
      avatar: profile?.avatar ?? '',
    },
  })

  const { handleSubmit, setValue } = methods

  useEffect(() => {
    if (isSuccess) setOpen(false)
  }, [isSuccess])

  useEffect(() => {
    setValue('avatar', selectedAvatar)
  }, [selectedAvatar, setValue])

  const onSubmit = (formValues: AvatarFormSchema) => {
    triggerProfileEdit(formValues)
  }

  return (
    <Form {...methods}>
      <form className="max-md:w-full">
        <div className="max-md:mb-5">
          <Button onClick={() => setOpen(true)} type="button" variant={'secondary'} className="flex items-center gap-1.5 rounded-xl max-md:!w-full">
            <CircleUserRound size={17} />
            Choose avatar
          </Button>
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="!rounded-2xl sm:max-w-[600px]">
              <DialogHeader>
                <DialogTitle>Choose Avatar</DialogTitle>
              </DialogHeader>
              <div className="mt-4 flex items-center justify-center">
                <div className="relative h-32 w-32 overflow-hidden rounded-xl">
                  <OptimizedImage src={selectedAvatar || profile?.avatar || '/placeholder.svg'} alt="Avatar preview" width={128} height={128} className="h-full w-full object-cover" />
                </div>
              </div>
              <Tabs defaultValue={avatarCategories[0].slug} className="mt-4">
                <TabsList className="grid w-full grid-cols-3 rounded-xl">
                  {avatarCategories.map((category) => (
                    <TabsTrigger key={category.id} value={category.slug} className="rounded-xl">
                      {category.name}
                    </TabsTrigger>
                  ))}
                </TabsList>
                {avatarCategories.map((category) => (
                  <TabsContent key={category.id} value={category.slug}>
                    <div className="grid max-h-[300px] grid-cols-4 gap-4 overflow-y-auto py-4">
                      {category?.wallpapers?.map((avatar) => (
                        <Button key={avatar.id} variant="outline" className={`h-20 w-full rounded-xl p-0 ${selectedAvatar === avatar.url ? 'ring-2 ring-primary ring-offset-2' : ''}`} onClick={() => setSelectedAvatar(avatar.url)}>
                          <OptimizedImage src={avatar.url} alt={`Avatar ${avatar.id}`} width={80} height={80} className="h-full w-full rounded-xl object-cover" />
                        </Button>
                      ))}
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
              <DialogFooter className="gap-2">
                <Button variant="outline" onClick={() => setOpen(false)} className="rounded-xl">
                  Cancel
                </Button>
                <LoadingButton isLoading={isPending} onClick={handleSubmit(onSubmit)} variant="secondary" className="rounded-xl">
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
