import { z } from 'zod'
import { useForm } from 'react-hook-form'
import React from 'react'
import Image from 'next/image'
import { zodResolver } from '@hookform/resolvers/zod'

import { Form } from '@/components/ui/form'
import { Button } from '@/components/ui/button'
import TextField from '@/components/fields/text-field'

import { socialProfileSchema } from './form-schema'

type SocialProfileFormSchema = z.infer<typeof socialProfileSchema>

const socialProfiles = [
  { name: 'linkedIn', label: 'LinkedIn', placeholder: 'Enter your LinkedIn username', logo: 'https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg' },
  { name: 'github', label: 'GitHub', placeholder: 'Enter your GitHub username', logo: 'https://cdn-icons-png.flaticon.com/512/25/25231.png' },
  { name: 'twitter', label: 'Twitter', placeholder: 'Enter your Twitter username', logo: 'https://freelogopng.com/images/all_img/1657045610twitter-icon-transparent.png' },
  { name: 'facebook', label: 'Facebook', placeholder: 'Enter your Facebook username', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6c/Facebook_Logo_2023.png' },
  { name: 'instagram', label: 'Instagram', placeholder: 'Enter your Instagram username', logo: 'https://static.cdninstagram.com/rsrc.php/v3/yt/r/30PrGfR3xhB.png' },
  { name: 'website', label: 'Website', placeholder: 'Enter your website URL', logo: 'https://www.google.com/favicon.ico' },
  { name: 'blog', label: 'Blog', placeholder: 'Enter your blog URL', logo: 'https://www.blogger.com/favicon.ico' },
  { name: 'discord', label: 'Discord', placeholder: 'Enter your Discord username', logo: 'https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/636e0a6a49cf127bf92de1e2_icon_clyde_blurple_RGB.png' },
  { name: 'telegram', label: 'Telegram', placeholder: 'Enter your Telegram username', logo: 'https://telegram.org/img/favicon.ico' },
  { name: 'peerlist', label: 'Peerlist', placeholder: 'Enter your Peerlist username', logo: 'https://peerlist.io/favicon.ico' },
  { name: 'dailydev', label: 'Daily.dev', placeholder: 'Enter your Daily.dev username', logo: 'https://daily-now-res.cloudinary.com/image/upload/v1614088267/landing/Daily.dev_logo.png' },
  { name: 'figma', label: 'Figma', placeholder: 'Enter your Figma username', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg' },
  { name: 'tiktok', label: 'TikTok', placeholder: 'Enter your TikTok username', logo: 'https://static.vecteezy.com/system/resources/previews/016/716/450/non_2x/tiktok-icon-free-png.png' },
  { name: 'dribbble', label: 'Dribbble', placeholder: 'Enter your Dribbble username', logo: 'https://static.vecteezy.com/system/resources/previews/023/986/870/non_2x/dribbble-logo-dribbble-logo-transparent-dribbble-icon-transparent-free-free-png.png' },
  { name: 'threads', label: 'Threads', placeholder: 'Enter your Threads username', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Threads_%28app%29.svg' },
  { name: 'youtube', label: 'YouTube', placeholder: 'Enter your YouTube channel', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/640px-YouTube_full-color_icon_%282017%29.svg.png' },
]

const SocialProfileForm = () => {
  const methods = useForm<SocialProfileFormSchema>({
    resolver: zodResolver(socialProfileSchema),
    defaultValues: {
      linkedIn: 'https://www.linkedin.com/in/',
      github: 'https://github.com/',
      twitter: 'https://twitter.com/',
      facebook: 'https://www.facebook.com/',
      instagram: 'https://www.instagram.com/',
      website: 'https://www.developer25.com',
      blog: 'https://blog.developer25.com',
      discord: 'developer25#1234',
      telegram: 'https://t.me/',
      peerlist: 'https://peerlist.io/',
      dailydev: 'https://app.daily.dev/',
      figma: 'https://www.figma.com/@',
      tiktok: 'https://www.tiktok.com/@',
      dribbble: 'https://dribbble.com/',
      threads: 'https://www.threads.net/@',
      youtube: 'https://www.youtube.com/c/',
    },
  })

  const { handleSubmit } = methods

  const onSubmit = (data: SocialProfileFormSchema) => {
    console.log(data)
  }

  return (
    <Form {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-5">
          {socialProfiles.map((profile) => (
            <div key={profile.name} className="relative">
              <TextField name={profile.name} label={profile.label} placeholder={profile.placeholder} className="pl-10" />
              <div className="absolute left-3 top-[43px]">
                <Image src={profile.logo} alt={`${profile.label} logo`} width={20} height={20} className="!h-[20px] !w-[20px] bg-cover object-contain" />
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-end">
          <Button type="submit" variant={'secondary'} className="mt-5 rounded-xl max-sm:w-full">
            Save changes
          </Button>
        </div>
      </form>
    </Form>
  )
}

export default SocialProfileForm
