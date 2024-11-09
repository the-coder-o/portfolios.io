import { toast } from 'sonner'
import { useMutation } from '@tanstack/react-query'

import { queryClient } from '@/services/react-query/query-client'

import { IProfile } from '../types/profile.interface'
import { EditUserProfileMe } from '../services/api'

export const useEditProfileMe = () => {
  const { mutate, isPending, isSuccess, isError } = useMutation({
    mutationFn: (values: IProfile) => EditUserProfileMe(values),
    onSuccess: () => {
      toast.success('Profile updated successfully!')
      queryClient.invalidateQueries({ queryKey: ['profileMe'] })
    },
    onError: (error: any) => {
      const errorMessage = error?.message || 'Failed to update profile'
      toast.error(errorMessage)
    },
  })

  return {
    triggerProfileEdit: mutate,
    isPending,
    isSuccess,
    isError,
  }
}
