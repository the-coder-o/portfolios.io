import { Category } from '@/modules/dashboard/types/create-portfolio'

export interface PortfolioList {
  _id: string
  name: string
  description: string
  category: Category | null
  user: {
    _id: string
    name: string
    email: string
    avatar: string
    bio: string
  }
  images: string[]
  page: number
  github_link: string
  live_demo: string
  type: string
  skills: Skill[]
}

export interface Skill {
  name: string
  logo: string
  category: string
  level: string
  description: string
}
