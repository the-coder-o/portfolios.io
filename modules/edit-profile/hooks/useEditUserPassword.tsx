import { toast } from 'sonner'
import { useMutation } from '@tanstack/react-query'

import { queryClient } from '@/services/react-query/query-client'

import { EditPassword } from '../types/profile.interface'
import { EditUserPassword } from '../services/api'

export const useEditUserPassword = () => {
  const { mutate, isPending, isSuccess, isError } = useMutation({
    mutationFn: (values: EditPassword) => EditUserPassword(values),
    onSuccess: () => {
      toast.success('Password updated successfully!')
      queryClient.invalidateQueries({ queryKey: ['profileMe'] })
    },
    onError: (error: any) => {
      console.log(error)

      const errorMessage = error?.response?.data?.message || 'Failed to update password'
      toast.error(errorMessage)
    },
  })

  return {
    triggerEditUserPassword: mutate,
    isPending,
    isSuccess,
    isError,
  }
}
