import Link from 'next/link'
import Image from 'next/image'
import { Star } from 'lucide-react'

export const AboutSection = () => {
  return (
    <div className="mb-[200px]">
      <div className="container flex items-center justify-between">
        <div className="space-y-8">
          <div className={'flex w-[650px] flex-col gap-4'}>
            <h1 className="text-5xl font-bold text-foreground max-sm:text-3xl">
              The world&apos;s best developer platform for <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">knowledge</span>
            </h1>
            <h3 className="mx-auto text-lg font-medium text-foreground/80">
              Discover and showcase the world&apos;s most inspiring portfolios. Join a vibrant community of creators, developers, and designers sharing their best work. Elevate your online presence with customizable portfolio templates, tailored for creative professionals across all disciplines.
            </h3>
          </div>
          <div className="flex flex-wrap items-center gap-8">
            <div className="h-8">
              <Image src={`https://dqy38fnwh4fqs.cloudfront.net/website/peerlist-logo-full-dark.svg`} alt={'peerlist'} width={120} height={32} className="h-8 w-auto object-contain transition-opacity hover:opacity-100" />
            </div>
            <div className="h-8">
              <Image src={`https://cdn.prod.website-files.com/5e0a5d9d743608d0f3ea6753/5f1d8b1b9c7814aae6b69044_Daily%20Full%20logo.svg`} alt={'daily.dev'} width={120} height={32} className="h-8 w-auto object-contain transition-opacity hover:opacity-100" />
            </div>
            <div className="h-8">
              <Image src={`https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/250px-Google_2015_logo.svg.png`} alt={'google'} width={120} height={32} className="h-8 w-auto object-contain transition-opacity hover:opacity-100" />
            </div>
            <div className="h-8">
              <Image src={`https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/1280px-Microsoft_logo_%282012%29.svg.png`} alt={'microsoft'} width={120} height={32} className="h-8 w-auto object-contain transition-opacity hover:opacity-100" />
            </div>
          </div>
        </div>
        <div className="w-[550px] space-y-6">
          <div className="space-y-2 text-center">
            <div className="flex justify-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`h-8 w-8 ${i < 4 ? 'fill-yellow-400 text-yellow-400' : 'fill-none text-yellow-400 opacity-50'}`} />
              ))}
            </div>
            <div className="text-sm text-gray-400">Trusted by</div>
            <div className="text-4xl font-bold text-white">1,000+ Creators</div>
          </div>
          <div className="grid gap-4 sm:grid-cols-1">
            <div className={'flex items-center gap-4'}>
              <div className="flex w-full items-center justify-center rounded-xl bg-[#1A1A1A] px-2.5 py-4 text-center transition-colors hover:bg-[#252525]">
                <div className="mb-1 flex items-center justify-center gap-2">
                  <Image src="https://peerlist.io/images/week_medal_1.svg" alt="Medal" width={24} height={24} className="h-6 w-6" />
                  <span className="font-semibold text-white">500+ Reviews</span>
                </div>
              </div>
              <Link href="https://github.com/the-coder-o/portfolios.world" className="block w-full rounded-xl bg-[#1A1A1A] px-2.5 py-4 text-center transition-colors hover:bg-[#252525]">
                <div className="mb-1 flex items-center justify-center gap-2">
                  <svg viewBox="0 0 24 24" className="h-6 w-6 text-white" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  <span className="font-semibold text-white">1k+ GitHub Stars</span>
                </div>
              </Link>
            </div>
            <div className="block rounded-xl bg-[#1A1A1A] px-2.5 py-4 text-center transition-colors hover:bg-[#252525]">
              <div className="mb-1 flex items-center justify-center gap-2">
                <span className="font-semibold text-white">🏆 Top product of the week</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
