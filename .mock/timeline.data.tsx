import Image from 'next/image'

export const timelineData = [
  {
    title: 'Jan, 2025',
    content: (
      <div>
        <p className="mb-4 text-lg font-semibold">
          Major updates to <span className="font-bold text-blue-500 dark:text-blue-400">PortfoliosWorld.com</span>
        </p>
        <ul className="list-inside list-disc space-y-2">
          <li>Updated home page with modern design</li>
          <li>Started development of v1.5 with new features</li>
          <li>Redesigned profile page for better user experience</li>
          <li>Finished comprehensive dashboard page</li>
          <li>Enhanced portfolios page and added diverse new templates</li>
        </ul>
      </div>
    ),
  },
  {
    title: 'Nov, 2024',
    content: (
      <div>
        <p className="!text-lg font-normal text-neutral-800 dark:text-neutral-200 md:text-sm">
          Built and launched <span className="font-bold">PortfoliosWorld.com</span>
        </p>
        <div className="mt-8 grid grid-cols-2 gap-4 max-sm:mt-3">
          <Image
            src="https://i.postimg.cc/Fzpfj4pK/Screenshot-2024-11-06-172027.png"
            alt="startup template"
            width={500}
            height={500}
            className="!h-20 w-full rounded-xl border-2 border-white object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <Image
            src="https://i.postimg.cc/Fzpfj4pK/Screenshot-2024-11-06-172027.png"
            alt="startup template"
            width={500}
            height={500}
            className="!h-20 w-full rounded-xl border-2 border-white object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <Image
            src="https://i.postimg.cc/rFyRqDyR/Screenshot-2024-11-06-172104.png"
            alt="startup template"
            width={500}
            height={500}
            className="!h-20 w-full rounded-xl border-2 border-white object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <Image
            src="https://i.postimg.cc/WzTFF3MK/Screenshot-2024-11-06-172123.png"
            alt="startup template"
            width={500}
            height={500}
            className="!h-20 w-full rounded-xl border-2 border-white object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
        </div>
      </div>
    ),
  },
]
