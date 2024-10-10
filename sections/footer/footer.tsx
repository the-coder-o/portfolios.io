import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Logo } from '@/components/logo'

export const Footer = () => {
  const route = usePathname()

  return (
    <footer className={route === '/sign-in' || route === '/sign-up' ? 'hidden' : `w-full border-t-[1px] pt-12 text-foreground transition-colors duration-300`}>
      <div className="container">
        <div className="flex items-center justify-between max-lg:flex-col max-lg:items-start max-lg:gap-10">
          <div className="flex flex-col items-start gap-4">
            <Logo />
            <p className="w-[500px] text-sm text-muted-foreground max-md:w-full">Explore the finest portfolios and showcase your work with brilliance! Whether you&apos;re a designer, developer, or creative professional, let your projects shine and make a lasting impression.</p>
          </div>
          <div className="flex justify-between gap-20 max-md:flex-col max-md:gap-10">
            <div className="space-y-2">
              <h4 className="text-lg font-semibold">Product</h4>
              <ul className="space-y-1">
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-white" prefetch={false}>
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-white" prefetch={false}>
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-white" prefetch={false}>
                    Integrations
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="text-lg font-semibold">Legal</h4>
              <ul className="space-y-1">
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-white" prefetch={false}>
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-white" prefetch={false}>
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-white" prefetch={false}>
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="text-lg font-semibold">Resources</h4>
              <ul className="space-y-1">
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-white" prefetch={false}>
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-white" prefetch={false}>
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-white" prefetch={false}>
                    Support
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between py-5 max-md:flex-col">
          <div className="mt-12 text-sm text-muted-foreground">&copy; 2024 Acme Inc. All rights reserved.</div>
          <div className="mt-12 text-sm text-muted-foreground">
            Created by:{' '}
            <Link href={'https://www.a-bd.me'} target="_blank" className="font-bold text-white">
              www.a-bd.me
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
