import { toast } from 'sonner'
import { useMutation } from '@tanstack/react-query'

import { queryClient } from '@/services/react-query/query-client'
import { CreatePortfolio } from '@/modules/dashboard/types/create-portfolio'
import { UpdatePortfolio } from '@/modules/dashboard/services/api'

export const useUpdatePortfolio = (id: string) => {
  const { mutate, isPending } = useMutation({
    mutationFn: (values: CreatePortfolio) => UpdatePortfolio({ values, id }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['portfolio_list'] })

      toast.success('Portfolio successfully updated')
    },
    onError: (error: any) => {
      const errorMessage = error?.response?.data?.message || 'Failed to update portfolio'
      toast.error(errorMessage)
    },
  })

  return {
    triggerUpdatePortfolio: mutate,
    isPending,
  }
}
