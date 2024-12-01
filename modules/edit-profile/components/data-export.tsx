import { useGetUserPortfolio } from '@/modules/profile/hooks/useGetUserPortfolios'
import { PortfolioList } from '@/modules/dashboard/types/portfolios-list'
import { Button } from '@/components/ui/button'

import { useGetProfileMe } from '../hooks/useGetProfileMe'

export const DataExport = () => {
  const { data: profile } = useGetProfileMe()
  const { data: userPortfolios } = useGetUserPortfolio()

  const handleDownload = () => {
    const exportData = {
      profile: {
        _id: profile._id ?? '',
        name: profile.name ?? '',
        email: profile.email ?? '',
        username: profile.username ?? '',
        website_url: profile.website_url ?? '',
        avatar: profile.avatar ?? '',
        location: profile.location ?? '',
        bio: profile.bio ?? '',
        banner: profile.banner ?? '',
        role: profile.role ?? '',
      },
      portfolios: userPortfolios.map((item: PortfolioList) => ({
        _id: item?._id ?? '',
        name: item?.name ?? '',
        description: item?.description ?? '',
        category: item?.category
          ? {
              _id: item.category._id ?? '',
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
      })),
    }

    const jsonBlob = new Blob([JSON.stringify(exportData)], { type: 'application/json' })
    const url = URL.createObjectURL(jsonBlob)

    const link = document.createElement('a')
    link.href = url
    link.download = `${profile.name}_data.json`
    link.click()

    URL.revokeObjectURL(url)
  }

  return (
    <div className="space-y-6">
      <p className="text-muted-foreground">
        As part of our ongoing commitment to your privacy, you may request to download your data from Portfolios.io. This data will include your profile and portfolio information. Once you have requested your data, you will receive an email at (
        <span className="text-foreground">{profile?.email}</span>) with a link to the archive.
      </p>
      <Button onClick={handleDownload} variant="outline" className="rounded-xl bg-muted/50">
        Request data
      </Button>
    </div>
  )
}
