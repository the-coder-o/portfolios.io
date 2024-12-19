import { toast } from 'sonner'
import { useMutation } from '@tanstack/react-query'

import { queryClient } from '@/services/react-query/query-client'
import { AddFavoritePortfolio } from '@/modules/portfolios/services/api'

export const useAddFavorite = (id: string) => {
  const { mutate, isPending, isSuccess, isError } = useMutation({
    mutationFn: () => AddFavoritePortfolio(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['portfolio_list'] })
      toast.success('Portfolio successfully added to favorites')
    },
    onError: (error: any) => {
      const errorMessage = error?.response?.data?.message || 'Failed to add favorites'
      toast.error(errorMessage)
    },
  })

  return {
    triggerAddFavorite: mutate,
    isPending,
    isSuccess,
    isError,
  }
}
