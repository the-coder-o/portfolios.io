import { Button } from '@/components/ui/button'

export const DataExport = () => {
  return (
    <div className="max-w-2xl space-y-6">
      <p className="text-muted-foreground">
        As part of our ongoing commitment to your privacy, you may request to download your data from Portfolios.io. This data will include your profile and shot information. Once you have requested your data, you will receive an email at (
        <span className="text-foreground">abdulbositsharipovv@gmail.com</span>) with a link to the archive.
      </p>
      <Button variant="outline" className="rounded-xl bg-muted/50">
        Request data
      </Button>
      <div className="flex flex-col gap-2 pt-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold">Previous Export</h2>
            <div className="text-sm text-muted-foreground">Requested on Nov 2, 2024</div>
          </div>
          <Button disabled variant="default" className="rounded-xl">
            Download
          </Button>
        </div>
      </div>
    </div>
  )
}
