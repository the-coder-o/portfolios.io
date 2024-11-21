import Link from 'next/link'
import Image from 'next/image'
import { Eye } from 'lucide-react'

import { Button } from '@/components/ui/button'

interface TemplateItemProps {
  title: string
  description: string
  href: string
  images: string[]
}

export const TemplateItem = ({ title, description, href, images }: TemplateItemProps) => {
  return (
    <Link href={href} className="mb-10 grid w-full cursor-pointer grid-cols-1 items-start justify-start gap-4 md:grid-cols-4">
      <div className="order-last md:order-first">
        <h2 className="text-base font-semibold text-black dark:text-white">{title}</h2>
        <p className="text-sm leading-relaxed text-neutral-500 dark:text-[a3a3a3]">{description}</p>
        <div className="mt-4">
          <Button className="group relative z-20 mt-0 flex h-10 w-[150px] cursor-pointer items-center justify-center space-x-2 rounded-xl bg-black p-px px-4 py-2 text-center text-sm font-semibold text-white no-underline transition duration-200 dark:bg-white dark:text-black max-md:w-full">
            <span>Live Preview</span>
            <Eye size={18} />
          </Button>
        </div>
      </div>
      {images.map((src, index) => (
        <div key={index} className={index === 0 ? '' : 'hidden md:block'} style={{ height: '100%', width: '100%' }}>
          <Image
            src={src}
            alt={`${title} screenshot ${index + 1}`}
            width={500}
            height={500}
            className="!h-[200px] rounded-xl bg-cover object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] blur-0 transition duration-300"
          />
        </div>
      ))}
    </Link>
  )
}
