import { PortfolioList } from '@/modules/dashboard/types/portfolios-list'

export const getPortfolios = (items: PortfolioList[] = []) => {
  return items.map((item) => ({
    _id: item?._id ?? '',
    name: item?.name ?? '',
    description: item?.description ?? '',
    category: item?.category
      ? {
          id: item.category.id ?? '',
          name: item.category.name ?? '',
          description: item.category.description ?? '',
          image: item.category.image ?? '',
        }
      : null,
    user: {
      _id: item?.user?._id ?? '',
      name: item?.user?.name ?? '',
      email: item?.user?.email ?? '',
      avatar: item?.user?.avatar ?? '',
      bio: item?.user?.bio ?? '',
    },
    images: Array.isArray(item?.images) ? item.images : [],
    page: Math.max(item?.page ?? 0, 0),
    github_link: item?.github_link ?? '',
    live_demo: item?.live_demo ?? '',
    type: item?.type ?? '',
    skills: Array.isArray(item?.skills)
      ? item.skills.map((skill) => ({
          name: skill?.name ?? '',
          logo: skill?.logo ?? '',
          category: skill?.category ?? '',
          level: skill?.level ?? '',
          description: skill?.description ?? '',
        }))
      : [],
  }))
}
