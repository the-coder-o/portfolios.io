import { z } from 'zod'
import { useForm } from 'react-hook-form'
import React from 'react'
import { Briefcase, Facebook, File, FileText, Github, Globe, Instagram, Linkedin, MessageCircle, PenTool, Send, Twitter } from 'lucide-react'
import { zodResolver } from '@hookform/resolvers/zod'

import { Form } from '@/components/ui/form'
import { Button } from '@/components/ui/button'
import TextField from '@/components/fields/text-field'

import { SocialProfileInterface } from '../../types/socialprofile-interface'

const socialProfileSchema = z.object({
  linkedIn: z.string().optional(),
  github: z.string().optional(),
  twitter: z.string().optional(),
  facebook: z.string().optional(),
  instagram: z.string().optional(),
  website: z.string().optional(),
  resume: z.string().optional(),
  cv: z.string().optional(),
  portfolio: z.string().optional(),
  blog: z.string().optional(),
  discord: z.string().optional(),
  telegram: z.string().optional(),
})

type SocialProfileFormSchema = z.infer<typeof socialProfileSchema>

const socialProfiles = [
  { name: 'linkedIn', label: 'LinkedIn', placeholder: 'Enter your LinkedIn username', icon: Linkedin },
  { name: 'github', label: 'GitHub', placeholder: 'Enter your GitHub username', icon: Github },
  { name: 'twitter', label: 'Twitter', placeholder: 'Enter your Twitter username', icon: Twitter },
  { name: 'facebook', label: 'Facebook', placeholder: 'Enter your Facebook username', icon: Facebook },
  { name: 'instagram', label: 'Instagram', placeholder: 'Enter your Instagram username', icon: Instagram },
  { name: 'website', label: 'Website', placeholder: 'Enter your website username', icon: Globe },
  { name: 'resume', label: 'Resume', placeholder: 'Enter your resume username', icon: File },
  { name: 'cv', label: 'CV', placeholder: 'Enter your CV username', icon: FileText },
  { name: 'portfolio', label: 'Portfolio', placeholder: 'Enter your portfolio username', icon: Briefcase },
  { name: 'blog', label: 'Blog', placeholder: 'Enter your blog username', icon: PenTool },
  { name: 'discord', label: 'Discord', placeholder: 'Enter your Discord username', icon: MessageCircle },
  { name: 'telegram', label: 'Telegram', placeholder: 'Enter your Telegram username', icon: Send },
]

const SocialProfileForm = () => {
  const methods = useForm<SocialProfileFormSchema>({
    resolver: zodResolver(socialProfileSchema),
    defaultValues: { blog: '', cv: '', portfolio: '', discord: '', telegram: '', twitter: '', facebook: '', github: '', instagram: '', linkedIn: '', resume: '', website: '' },
  })

  const { handleSubmit } = methods

  const onSubmit = (data: SocialProfileFormSchema) => {
    console.log(data)
  }

  return (
    <Form {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-5">
          {socialProfiles.map((profile: SocialProfileInterface) => (
            <div key={profile.name} className="relative">
              <TextField name={profile.name} label={profile.label} placeholder={profile.placeholder} className="pl-10" />
              <profile.icon size={15} className="absolute left-[15.5px] top-[45px]" />
            </div>
          ))}
        </div>
        <div className="flex justify-end">
          <Button type="submit" variant={'secondary'} className="mt-5 rounded-xl">
            Save changes
          </Button>
        </div>
      </form>
    </Form>
  )
}

export default SocialProfileForm
