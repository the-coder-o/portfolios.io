import { Button } from '@/components/ui/button'

import { useGetProfileMe } from '../hooks/useGetProfileMe'

export const DataExport = () => {
  const { data: profile } = useGetProfileMe()

  const handleDownload = () => {
    if (!profile) return

    const exportData = {
      _id: profile._id ?? '',
      name: profile.name ?? '',
      email: profile.email ?? '',
      username: profile.username ?? '',
      website_name: profile.website_name ?? '',
      avatar: profile.avatar ?? '',
      location: profile.location ?? '',
      bio: profile.bio ?? '',
    }

    const jsonBlob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(jsonBlob)

    const link = document.createElement('a')
    link.href = url
    link.download = `${profile.name}_profile_data`
    link.click()

    URL.revokeObjectURL(url)
  }

  return (
    <div className="space-y-6">
      <p className="text-muted-foreground">
        As part of our ongoing commitment to your privacy, you may request to download your data from Portfolios.io. This data will include your profile and shot information. Once you have requested your data, you will receive an email at (<span className="text-foreground">{profile.email}</span>)
        with a link to the archive.
      </p>
      <Button onClick={handleDownload} variant="outline" className="rounded-xl bg-muted/50">
        Request data
      </Button>
    </div>
  )
}
