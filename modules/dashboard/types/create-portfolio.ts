import { Skill } from '@/.mock/skills.data'

export interface CreatePortfolio {
  name: string
  category: string
  description: string
  images: (File | string)[]
  github_link: string
  live_demo: string
  page: number
  type: string
  skills: Skill[]
}
