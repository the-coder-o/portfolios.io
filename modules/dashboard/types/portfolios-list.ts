export interface PortfolioList {
  _id: string
  name: string
  description: string
  category: string | null
  user: {
    _id: string
    name: string
    email: string
  }
  images: string[]
  page: number
  github_link: string
  live_demo: string
  type: string
}
