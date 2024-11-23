import { toast } from 'sonner'
import { useMutation } from '@tanstack/react-query'

import { queryClient } from '@/services/react-query/query-client'
import { createPortfolio, uploadImage } from '@/modules/dashboard/services/api'

export const useCreatePortfolio = () => {
  const { mutateAsync, isPending, isSuccess, isError, data } = useMutation({
    mutationFn: async (values: any) => {
      try {
        const uploadedImages = await Promise.all(values.images.map((image: File) => uploadImage('portfolio', image)))
        const imageUrls = uploadedImages.map((response) => response.url)

        const portfolioData = {
          ...values,
          images: imageUrls,
        }

        return await createPortfolio(portfolioData)
      } catch (error: unknown | any) {
        const errorMessage = error?.response?.data?.message || 'An error occurred while creating the portfolio.'
        toast.error(errorMessage)
      }
    },
    onSuccess: () => {
      toast.success('Portfolio successfully created!')
      queryClient.invalidateQueries({ queryKey: ['portfolio_list'] })
    },
    onError: (error: unknown | any) => {
      const errorMessage = error?.response?.data?.message || 'An error occurred while creating the portfolio.'
      toast.error(errorMessage)
    },
  })

  return {
    triggerPortfolioCreate: mutateAsync,
    isPending,
    isSuccess,
    isError,
    data,
  }
}
