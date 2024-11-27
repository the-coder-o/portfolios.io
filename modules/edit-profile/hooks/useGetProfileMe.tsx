import { get } from 'lodash'
import Cookies from 'js-cookie'
import { useQuery } from '@tanstack/react-query'

import { UserProfileList } from '../services/api'

import { getProfile } from './adapter'

export const useGetProfileMe = () => {
  const initialData = {
    data: getProfile(),
  }
  const token = Cookies.get('access_token')

  const { data = initialData, ...args } = useQuery({
    queryKey: ['profileMe', token],
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
