import { PortfolioList } from '@/modules/dashboard/types/portfolios-list'

export const getPortfolio = (item?: PortfolioList) => {
  return {
    _id: item?._id ?? '',
    name: item?.name ?? '',
    description: item?.description ?? '',
    category: item?.category ?? null,
    user: {
      _id: item?.user?._id ?? '',
      name: item?.user?.name ?? '',
      email: item?.user?.email ?? '',
    },
    images: Array.isArray(item?.images) ? item.images : [],
    page: Math.max(item?.page ?? 0, 0),
    github_link: item?.github_link ?? '',
    live_demo: item?.live_demo ?? '',
    type: item?.type ?? 'free',
  }
}
