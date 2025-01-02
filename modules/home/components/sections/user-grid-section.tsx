import { Input } from '@/components/ui/input'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'

export const UserGridSection = () => {
  const avatars = Array.from({ length: 88 }, (_, i) => ({
    id: i,
    letter: String.fromCharCode(65 + (i % 26)),
    color: `hsl(${Math.random() * 360}, 70%, 50%)`,
  }))

  return (
    <div className={'container'}>
      <div className="mb-[200px] mt-[200px]">
        <div className={'flex flex-col'}>
          <div className={'mb-10 flex items-center justify-between'}>
            <div className={'flex flex-col gap-1'}>
              <h2 className="text-5xl font-bold tracking-tighter text-foreground max-sm:mb-1 max-sm:text-3xl">Join to PortfoliosWorld!</h2>
              <h3 className="text-balance text-lg font-medium tracking-tight text-foreground/80">Showcase your work, launch side projects, find jobs, and connect with the most (in)credible people.</h3>
            </div>
            <div className="flex w-full max-w-md flex-col">
              <div className="flex w-full items-center rounded-xl border bg-background px-4 py-1">
                <div className="flex flex-1 items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 256 256" className="!rotate-90 fill-foreground duration-200 hover:text-muted-foreground">
                    <path
                      d="M0 0 C19.03800596 17.76011241 29.64068332 42.87248532 30.8515625 68.66015625 C31.41432314 96.34924422 20.64737093 121.51193282 1.8515625 141.66015625 C-17.77530733 160.14965918 -43.58956805 170.35555615 -70.53027344 169.63891602 C-96.77299852 168.35339756 -121.52871899 157.24070918 -139.625 138.03125 C-157.33132802 117.13048136 -166.79507051 91.44592661 -164.87475586 64.03808594 C-162.51504902 38.34415669 -150.67353007 13.71580236 -130.8359375 -3.08984375 C-90.46126303 -34.52400497 -38.63214503 -33.09187617 0 0 Z M-131.1484375 71.66015625 C-131.1484375 90.447128 -125.20550108 105.10089792 -112.1484375 118.66015625 C-96.1179739 132.9169411 -79.57355841 136.71363442 -58.77734375 135.85546875 C-42.84727089 134.67195665 -28.11931895 125.62269067 -17.66796875 113.87109375 C-7.20194154 100.58257009 -3.1484375 88.48026567 -3.1484375 71.66015625 C-45.3884375 71.66015625 -87.6284375 71.66015625 -131.1484375 71.66015625 Z"
                      transform="translate(195.1484375,56.33984375)"
                      fill="#fff"
                    ></path>
                  </svg>
                  <span className="text-gray-400">www.portfoliosworld.com/</span>
                  <Input type="text" placeholder="@username" className="-ml-2 h-11 flex-1 rounded-xl border-transparent p-0 placeholder:text-white" />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-wrap justify-between gap-3">
              {avatars.map((avatar) => (
                <Avatar key={avatar.id} className="h-12 w-12 cursor-pointer rounded-xl transition-all hover:scale-125">
                  <AvatarFallback style={{ backgroundColor: avatar.color }} className={'rounded-xl'}>
                    {avatar.letter}
                  </AvatarFallback>
                </Avatar>
              ))}
            </div>
            <p className="mt-5 text-gray-400">92,090+ peers and counting...</p>
          </div>
        </div>
      </div>
    </div>
  )
}
