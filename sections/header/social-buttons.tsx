import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { Button } from '@/components/ui/button'

export const SocialButtons = () => {
  return (
    <div className={'flex items-center gap-5 max-sm:hidden'}>
      <Link href="https://github.com/the-coder-o/portfolios.io" target="_blank" rel="noopener noreferrer">
        <Button variant="ghost" size="sm" className="flex items-center gap-1 rounded-xl px-0 hover:bg-transparent">
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
        </Button>
      </Link>
      <Link href="https://discord.gg/yourinvite" target="_blank" rel="noopener noreferrer">
        <Button variant="ghost" size="sm" className="flex items-center gap-1 rounded-xl px-0 hover:bg-transparent">
          <Image src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/636e0a69f118df70ad7828d4_icon_clyde_blurple_RGB.svg" alt="Discord" width="20" height="20" className="!h-4 !w-4" />
        </Button>
      </Link>
      <Link href="https://dly.to/y3ZwSXkMiik" target="_blank" rel="noopener noreferrer">
        <Button variant="ghost" size="sm" className="flex items-center gap-1 rounded-xl px-0 hover:bg-transparent">
          <svg viewBox="0 0 35 20" xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-auto">
            <g fill="currentColor" fillRule="nonzero">
              <path d="M29.5925 9.99823L25.7884 6.1862L27.6895 2.37549L33.8703 8.5693C34.6579 9.35848 34.6579 10.638 33.8703 11.4272L26.2629 19.0506C25.4753 19.8398 24.1985 19.8398 23.411 19.0506C22.6234 18.2614 22.6234 16.9819 23.411 16.1927L29.5925 9.99823Z" fillOpacity="0.64"></path>
              <path d="M23.4118 0.947675C24.1993 0.158497 25.4765 0.158828 26.264 0.948006L27.6903 2.37727L11.05 19.0524C10.2625 19.8415 8.98533 19.8412 8.1978 19.052L6.77152 17.6228L23.4118 0.947675ZM16.28 6.18864L13.4275 9.04718L9.62342 5.23514L4.86849 10L8.67256 13.8121L6.77152 17.6228L0.590647 11.429C-0.196882 10.6398 -0.196882 9.36026 0.590647 8.57108L8.1978 0.948006C8.98533 0.158828 10.2625 0.158497 11.05 0.947675L16.28 6.18864Z"></path>
            </g>
          </svg>
        </Button>
      </Link>
      <Link href="https://x.com/the_coder_o" target="_blank" rel="noopener noreferrer">
        <Button variant="ghost" size="sm" className="flex items-center gap-1 rounded-xl px-0 hover:bg-transparent">
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </Button>
      </Link>
      <Link href="https://peerlist.io/thecoder" target="_blank" rel="noopener noreferrer">
        <Button variant="ghost" size="sm" className="flex items-center gap-1 rounded-xl px-0 hover:bg-transparent">
          <Image src="https://dqy38fnwh4fqs.cloudfront.net/company/COMHQ7BA9GLL7K8683MNBGDOG66PBN/logo-1695017827473.webp" alt="Peerlist.io" width="20" height="20" className={'!h-4 !w-4 rounded-sm'} />
        </Button>
      </Link>
    </div>
  )
}
