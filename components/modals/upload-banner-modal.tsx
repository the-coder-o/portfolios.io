import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { useEffect, useState } from 'react'
import { ImageUp } from 'lucide-react'
import { zodResolver } from '@hookform/resolvers/zod'

import { IProfile } from '@/modules/edit-profile/types/profile.interface'
import { useEditProfileMe } from '@/modules/edit-profile/hooks/useEditProfileMe'
import { userProfileSchema } from '@/modules/edit-profile/components/forms/form-schema'
import { colors, wallpaperCategories } from '@/constants/colors'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Form } from '@/components/ui/form'
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import OptimizedImage from '@/components/optimize-image'

import LoadingButton from '../buttons/loading-button'

type EditProfileFormSchema = z.infer<typeof userProfileSchema>

interface IProps {
  profile: IProfile
}

export const UploadBannerModal = ({ profile }: IProps) => {
  const [open, setOpen] = useState(false)
  const [selectedBackground, setSelectedBackground] = useState<string>(profile?.banner || 'linear-gradient(to right, #ff9a9e, #fad0c4)')
  const [activeTab, setActiveTab] = useState<'colors' | 'wallpapers'>('colors')
  const [selectedCategory, setSelectedCategory] = useState(wallpaperCategories[0].slug)

  const { triggerProfileEdit, isPending, isSuccess } = useEditProfileMe()

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

  useEffect(() => {
    const isColor = colors.some((color) => color.value === profile?.banner)
    setActiveTab(isColor ? 'colors' : 'wallpapers')
    setSelectedBackground(profile?.banner || '')
  }, [profile?.banner])

  useEffect(() => {
    if (isSuccess) setOpen(false)
  }, [isSuccess])

  const onSubmit = (formValues: EditProfileFormSchema) => {
    triggerProfileEdit(formValues)
  }

  const getBackgroundStyle = () => {
    if (activeTab === 'colors') {
      return { backgroundImage: selectedBackground }
    } else {
      return { backgroundImage: `url(${selectedBackground})` }
    }
  }

  return (
    <Form {...methods}>
      <form className="max-md:w-full">
        <div className="max-md:mb-5">
          <Button onClick={() => setOpen(true)} type="button" className="flex items-center gap-1.5 rounded-xl max-md:!w-full">
            <ImageUp size={17} />
            Upload banner
          </Button>
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="!rounded-2xl sm:max-w-[600px]">
              <DialogHeader>
                <DialogTitle>Choose banner background</DialogTitle>
              </DialogHeader>
              <div style={getBackgroundStyle()} className="mt-4 flex h-[300px] items-center justify-center rounded-xl border-black bg-cover bg-center transition-all duration-300" />
              <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as 'colors' | 'wallpapers')} className="mt-4">
                <TabsList className="grid w-full grid-cols-2 rounded-xl">
                  <TabsTrigger value="wallpapers" className="rounded-xl">
                    Wallpapers
                  </TabsTrigger>
                  <TabsTrigger value="colors" className="rounded-xl">
                    Gradients
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
                  <div className="mt-4 space-y-4">
                    <Select value={selectedCategory} onValueChange={(value) => setSelectedCategory(value)}>
                      <SelectTrigger className="w-full rounded-xl">
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                      <SelectContent className={'rounded-xl'}>
                        {wallpaperCategories.map((category) => (
                          <SelectItem key={category.id} value={category.slug} className={'rounded-xl'}>
                            {category.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <div className="grid max-h-[180px] grid-cols-4 gap-2 overflow-auto px-1 py-2 max-sm:grid-cols-3">
                      {wallpaperCategories
                        .find((cat) => cat.slug === selectedCategory)
                        ?.wallpapers.map((wallpaper) => (
                          <Button key={wallpaper.id} variant="outline" className={`h-20 w-full rounded-xl p-0 ${selectedBackground === wallpaper.url ? 'ring-2 ring-primary ring-offset-2' : ''}`} onClick={() => setSelectedBackground(wallpaper.url)} aria-label={`Select wallpaper ${wallpaper.id}`}>
                            <div className="relative h-full w-full overflow-hidden rounded-lg">
                              <OptimizedImage src={wallpaper.url} alt={`Wallpaper ${wallpaper.id}`} width={1000} height={1000} className={'bg-cover object-cover'} />
                            </div>
                          </Button>
                        ))}
                    </div>
                  </div>
                </TabsContent>
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
