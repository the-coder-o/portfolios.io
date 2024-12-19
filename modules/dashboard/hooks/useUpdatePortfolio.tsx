import { toast } from 'sonner'
import { useRouter } from 'next/navigation'
import { useMutation } from '@tanstack/react-query'

import { queryClient } from '@/services/react-query/query-client'
import { CreatePortfolio } from '@/modules/dashboard/types/create-portfolio'
import { UpdatePortfolio, uploadImage } from '@/modules/dashboard/services/api'

export const useUpdatePortfolio = (id: string) => {
  const router = useRouter()

  const { mutateAsync, isPending, isSuccess, isError, data } = useMutation({
    mutationFn: async (values: CreatePortfolio) => {
      let imageUrls = values.images

      if (values.images && values.images.some((image) => image instanceof File)) {
        const uploadedImages = await Promise.all(
          values.images.map(async (image: string | File) => {
            if (image instanceof File) {
              try {
                return await uploadImage('portfolio', image)
              } catch (uploadError: any) {
                throw new Error(uploadError?.response?.data?.message || `Failed to upload image: ${image.name}`)
              }
            }
            return { url: image }
          }),
        )

        imageUrls = uploadedImages.map((response) => response.url)
      }

      const portfolioData = {
        ...values,
        images: imageUrls,
      }

      return await UpdatePortfolio({ values: portfolioData, id })
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['portfolio_list'] })
      toast.success('Portfolio successfully updated')

      router.push('/dashboard/portfolios/all-portfolios')
    },
    onError: (error: any) => {
      const errorMessage = error?.message || error?.response?.data?.message || 'Failed to update portfolio'
      toast.error(errorMessage)
    },
  })

  return {
    triggerUpdatePortfolio: mutateAsync,
    isPending,
    isSuccess,
    isError,
    data,
  }
}
