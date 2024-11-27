export interface Category {
  id: string
  name: string
  description: string
  image: string
}

export interface Skill {
  id: string
  name: string
}

export interface CreatePortfolio {
  name: string
  category: Category
  description: string
  images: (File | string)[]
  github_link: string
  live_demo: string
  page: number
  type: string
  skills: Skill[]
}
