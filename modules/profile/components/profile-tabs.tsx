import { usePathname } from 'next/navigation'

import { tabData } from '@/constants/tab-data'

import { TabButton } from './tab-button'

export const ProfileTabs = () => {
  const router = usePathname()

  return (
    <div className="mt-[150px] max-md:mt-7">
      <div className="flex items-center justify-between overflow-x-auto border-b-2 pb-5 scrollbar-hide max-md:max-w-[100%] max-md:pb-2.5">
        <div className="flex w-full items-center gap-3 max-md:gap-0">
          {tabData.map((button) => (
            <TabButton key={button.pageUrl} page_url={button.pageUrl} icon={button.icon} title={button.title} is_active={router === button.pageUrl} />
          ))}
        </div>
      </div>
    </div>
  )
}
