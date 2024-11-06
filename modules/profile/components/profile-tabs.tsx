import { LayoutDashboard } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { tabData } from '@/constants/tab-data'
import { TabButton } from './tab-button'

export const ProfileTabs = () => {
  const router = usePathname()

  return (
    <div className="mt-[150px]">
      <div className="flex items-center justify-between border-b-2 pb-5">
        <div className="flex items-center gap-3">
          {tabData.map((button) => (
            <TabButton key={button.pageUrl} page_url={button.pageUrl} icon={button.icon} title={button.title} is_active={router === button.pageUrl} />
          ))}
        </div>
        <TabButton page_url={'/dashboard/portfolios/all-portfolios'} icon={<LayoutDashboard size={17} />} title={'Dashboard'} is_active={router === '/dashboard/portfolios/all-portfolios'} />
      </div>
    </div>
  )
}
