import { toast } from 'sonner'
import { useRouter } from 'next/navigation'
import { useMutation } from '@tanstack/react-query'

import { queryClient } from '@/services/react-query/query-client'
import { createPortfolio, uploadImage } from '@/modules/dashboard/services/api'

export const useCreatePortfolio = () => {
  const router = useRouter()

  const { mutateAsync, isPending, isSuccess, isError, data } = useMutation({
    mutationFn: async (values: any) => {
      const uploadedImages = await Promise.all(
        values.images.map(async (image: File) => {
          try {
            return await uploadImage('portfolio', image)
          } catch (uploadError: any) {
            throw new Error(uploadError?.response?.data?.message || `Failed to upload image: ${image.name}`)
          }
        }),
      )

      const imageUrls = uploadedImages.map((response) => response.url)

      const portfolioData = {
        ...values,
        images: imageUrls,
      }

      return await createPortfolio(portfolioData)
    },
    onSuccess: () => {
      toast.success('Portfolio successfully created!')
      queryClient.invalidateQueries({ queryKey: ['portfolio_list'] })

      router.push('/dashboard/portfolios/all-portfolios')
    },
    onError: (error: any) => {
      const errorMessage = error?.message || error?.response?.data?.message || 'An unexpected error occurred while creating the portfolio.'
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
