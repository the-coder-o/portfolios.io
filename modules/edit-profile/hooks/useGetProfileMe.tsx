import { get } from 'lodash'
import { useQuery } from '@tanstack/react-query'

import { UserProfileList } from '../services/api'

import { getProfile } from './adapter'

export const useGetProfileMe = () => {
  const initialData = {
    data: getProfile(),
  }

  const { data = initialData, ...args } = useQuery({
    queryKey: ['profileMe'],
    queryFn: () => UserProfileList(),
    select: (data) => ({
      data: getProfile(get(data, 'data.data')),
    }),
  })

  return {
    ...data,
    ...args,
  }
}
