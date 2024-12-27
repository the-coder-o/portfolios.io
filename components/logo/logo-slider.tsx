import Image from 'next/image'

import { logos } from '@/constants/logo'

export const LogoCarousel = () => {
  return (
    <div className="mb-[100px] inline-flex w-full flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] max-md:mb-[40px]">
      <ul className="flex animate-infinite-scroll items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-4">
        {logos.map((logo, index) => (
          <li key={index} className={'h-[60px] w-[60px] rounded-xl bg-secondary p-2.5'}>
            <Image src={logo.src} alt={logo.alt} width={100} height={50} className={'flex !h-full !w-full items-center justify-center bg-cover object-cover'} />
          </li>
        ))}
        {logos.map((logo, index) => (
          <li key={index} className={'h-[60px] w-[60px] rounded-xl bg-secondary p-2.5'}>
            <Image src={logo.src} alt={logo.alt} width={100} height={50} className={'flex !h-full !w-full items-center justify-center bg-cover object-cover'} />
          </li>
        ))}
      </ul>
    </div>
  )
}
