import { toast } from 'sonner'
import { useRouter } from 'next/navigation'
import { useMutation } from '@tanstack/react-query'

import { queryClient } from '@/services/react-query/query-client'
import { DeletePortfolio } from '@/modules/dashboard/services/api'

export const useDeletePortfolio = (id: string) => {
  const router = useRouter()

  const { mutate, isPending } = useMutation({
    mutationFn: () => DeletePortfolio(id),
    onSuccess: () => {
      toast.success('Profile successfully deleted')
      queryClient.invalidateQueries({ queryKey: ['portfolio_list'] })

      router.refresh()
    },
    onError: (error: any) => {
      const errorMessage = error?.response?.data?.message || 'Failed to delete portfolio'
      toast.error(errorMessage)
    },
  })

  return {
    triggerPortfolioDelete: mutate,
    isPending,
  }
}
