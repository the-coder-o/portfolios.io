import { TemplateItem } from '@/modules/home/components/template-item'

const templates = [
  {
    title: "Dillion Verma's Portfolio",
    description: 'Minimalist developer portfolio using Next.js 14, React, TailwindCSS, Shadcn UI and Magic UI',
    href: 'https://portfolio-magicui.vercel.app/',
    images: ['https://i.postimg.cc/R0FP9t5B/Screenshot-2024-11-21-141242.png', 'https://i.postimg.cc/Tw5C5X3N/Screenshot-2024-11-21-141353.png', 'https://i.postimg.cc/699gY7Pz/Screenshot-2024-11-21-141417.png'],
  },
  {
    title: 'Brian Ruiz',
    description: 'Every AI SaaS template is a multi-page template focused on AI applications offering SaaS solutions.',
    href: 'https://b-r.io/',
    images: ['https://i.postimg.cc/4Nj2BNm5/Screenshot-2024-11-21-151236.png', 'https://i.postimg.cc/MpRP42B8/Screenshot-2024-11-21-151245.png', 'https://i.postimg.cc/Kv1sPgvj/Screenshot-2024-11-21-151259.png'],
  },
  {
    title: 'Sidefolio Portfolio Template',
    description: 'Sidefolio is a portfolio template for developers with blogs, projects, resume and everything. A sidebar layout with a modern design. Mobile responsive with toggleable sidebar.\n' + '\n',
    href: 'https://sidefolio.vercel.app/',
    images: [
      'https://pro.aceternity.com/_next/image?url=https%3A%2F%2Fassets.aceternity.com%2Ftemplates%2Fsidefolio.png&w=640&q=75',
      'https://pro.aceternity.com/_next/image?url=https%3A%2F%2Fassets.aceternity.com%2Ftemplates%2Fsidefolio2.png&w=640&q=75',
      'https://pro.aceternity.com/_next/image?url=https%3A%2F%2Fassets.aceternity.com%2Ftemplates%2Fsidefolio3.png&w=640&q=75',
    ],
  },
]

export const TemplatesSection = () => {
  return (
    <section className="mb-[130px] bg-white dark:bg-black max-md:mb-5">
      <div className="mb-10 flex items-center justify-between max-md:mb-2">
        <div className="flex flex-col gap-1">
          <h2 className="text-xl font-bold text-purple-500 md:text-lg">Templates</h2>
          <p className="text-sm leading-relaxed text-neutral-500 dark:text-[a3a3a3] max-md:hidden">Modern and minimalist templates for building your next portfolio.</p>
        </div>
      </div>
      <div className="flex flex-col gap-10 md:gap-20">
        {templates.map((template, index) => (
          <TemplateItem key={index} {...template} />
        ))}
      </div>
    </section>
  )
}
