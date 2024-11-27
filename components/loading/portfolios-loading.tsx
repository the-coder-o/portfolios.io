import { Skeleton } from '@/components/ui/skeleton'

interface loadingProps {
  isPending: boolean
}

export const PortfolioCardLoading = ({ isPending }: loadingProps) => {
  if (isPending) {
    return (
      <div className="group relative h-full rounded-3xl border border-gray-200 bg-gray-100 p-2 dark:border-gray-50/[.1] dark:bg-black dark:backdrop-blur-md">
        <Skeleton className="aspect-video w-full rounded-2xl" />
        <div className="mt-5 flex flex-col p-1">
          <div className="flex w-full items-center justify-between">
            <div className="flex flex-col gap-2">
              <Skeleton className="h-5 w-40" />
              <Skeleton className="h-4 w-60" />
            </div>
          </div>
          <div className="mt-5 flex w-full items-center justify-between">
            <div className="flex items-center">
              <Skeleton className="mr-2 h-6 w-6 rounded-full" />
              <Skeleton className="h-4 w-24" />
            </div>
            <Skeleton className="h-[22px] w-[60px] rounded-lg" />
          </div>
        </div>
      </div>
    )
  }
}
