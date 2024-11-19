import { toast } from 'sonner'
import { useRouter } from 'next/navigation'
import { useMutation } from '@tanstack/react-query'

import { queryClient } from '@/services/react-query/query-client'

import { DeleteProfile } from '../services/api'

export const useDeleteProfile = (id: string) => {
  const router = useRouter()

  const { mutate, isSuccess, isError, isPending } = useMutation({
    mutationFn: () => DeleteProfile(id),
    onSuccess: () => {
      toast.success('Profile successfully deleted')
      queryClient.invalidateQueries({ queryKey: ['profileMe'] })

      router.push('sign-in')
    },
    onError: (error: any) => {
      const errorMessage = error?.response?.data?.message || 'Failed to delete profile'
      toast.error(errorMessage)
    },
  })

  return { triggerProfileDelete: mutate, isSuccess, isError, isPending }
}
