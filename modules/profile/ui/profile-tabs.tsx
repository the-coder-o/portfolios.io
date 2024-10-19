import { motion } from 'framer-motion'
import { Bookmark, BriefcaseBusiness, Heart, User } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { cn } from '@/lib/utils'

export const ProfileTabs = () => {
  const router = usePathname()

  return (
    <div className="mt-[150px]">
      <div className="flex items-center gap-3 border-b-2 pb-5">
        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link href={'/profile/portfolios'} className={cn('flex h-10 items-center gap-2 space-x-2 rounded-xl px-6 py-2 text-sm font-medium transition-colors', router === '/profile/portfolios' ? 'bg-primary text-primary-foreground' : 'bg-muted hover:bg-muted/80')}>
            <BriefcaseBusiness size={17} />
            Your Portfolios
          </Link>
        </motion.button>
        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link href={'/profile/liked'} className={cn('flex h-10 items-center gap-2 space-x-2 rounded-xl px-6 py-2 text-sm font-medium transition-colors', router === '/profile/liked' ? 'bg-primary text-primary-foreground' : 'bg-muted hover:bg-muted/80')}>
            <Heart size={17} />
            Liked Portfolios
          </Link>
        </motion.button>
        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link href={'/profile/favorites'} className={cn('flex h-10 items-center gap-2 space-x-2 rounded-xl px-6 py-2 text-sm font-medium transition-colors', router === '/profile/favorites' ? 'bg-primary text-primary-foreground' : 'bg-muted hover:bg-muted/80')}>
            <Bookmark size={17} />
            Favorites
          </Link>
        </motion.button>
        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link href={'/profile/about'} className={cn('flex h-10 items-center gap-2 space-x-2 rounded-xl px-6 py-2 text-sm font-medium transition-colors', router === '/profile/about' ? 'bg-primary text-primary-foreground' : 'bg-muted hover:bg-muted/80')}>
            <User size={17} />
            About
          </Link>
        </motion.button>
      </div>
    </div>
  )
}
