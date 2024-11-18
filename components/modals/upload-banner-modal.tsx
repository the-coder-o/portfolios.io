import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { useEffect, useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'

import { IProfile } from '@/modules/edit-profile/types/profile.interface'
import { useEditProfileMe } from '@/modules/edit-profile/hooks/useEditProfileMe'
import { userProfileSchema } from '@/modules/edit-profile/components/forms/form-schema'
import { colors, wallpapers } from '@/constants/colors'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
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
  const [selectedBackground, setSelectedBackground] = useState<string>(profile?.banner || colors[0].value)
  const [activeTab, setActiveTab] = useState<'colors' | 'wallpapers'>('colors')

  const { triggerProfileEdit, isPending } = useEditProfileMe()

  const methods = useForm<EditProfileFormSchema>({
    resolver: zodResolver(userProfileSchema),
    defaultValues: {
      banner: profile?.banner ?? '',
    },
  })

  const { handleSubmit, setValue } = methods

  useEffect(() => {
    setValue('banner', selectedBackground)
  }, [selectedBackground, setValue])

  const onSubmit = (formValues: EditProfileFormSchema) => {
    triggerProfileEdit(formValues)
    setOpen(false)
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
                <DialogTitle>Choose banner background</DialogTitle>
              </DialogHeader>
              <div
                style={{
                  backgroundImage: activeTab === 'colors' ? selectedBackground : `url(${selectedBackground})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
                className="mt-4 flex h-[300px] items-center justify-center rounded-xl border-black transition-all duration-300"
              />
              <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as 'colors' | 'wallpapers')} className="mt-4">
                <TabsList className="grid w-full grid-cols-2 rounded-xl">
                  <TabsTrigger value="colors" className={'rounded-xl'}>
                    Colors
                  </TabsTrigger>
                  <TabsTrigger value="wallpapers" className={'rounded-xl'}>
                    Wallpapers
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="colors">
                  <div className="mt-4 grid grid-cols-12 gap-2 max-sm:grid-cols-10">
                    {colors.map((color) => (
                      <Button
                        key={color.id}
                        variant="outline"
                        className={`h-8 w-8 rounded-full p-0 ${selectedBackground === color.value ? 'ring-2 ring-primary ring-offset-2' : ''}`}
                        style={{ backgroundImage: color.value }}
                        onClick={() => setSelectedBackground(color.value)}
                        aria-label={`Select color ${color.id}`}
                      />
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="wallpapers">
                  <div className="mt-4 grid max-h-[180px] grid-cols-4 gap-2 overflow-auto max-sm:grid-cols-3">
                    {wallpapers.map((wallpaper) => (
                      <Button
                        key={wallpaper.id}
                        variant="outline"
                        className={`h-20 w-full rounded-lg p-0 ${selectedBackground === wallpaper.url ? 'ring-2 ring-primary ring-offset-2' : ''}`}
                        style={{ backgroundImage: `url(${wallpaper.url})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                        onClick={() => setSelectedBackground(wallpaper.url)}
                        aria-label={`Select wallpaper ${wallpaper.id}`}
                      />
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
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
