import { get } from 'lodash'
import Cookies from 'js-cookie'
import { useQuery } from '@tanstack/react-query'

import { GetUserFavorites } from '@/modules/profile/services/api'
import { getPortfolios } from '@/modules/dashboard/hooks/adapter'

export const useGetUserFavorites = () => {
  const initialData = {
    data: getPortfolios(),
  }
  const token = Cookies.get('access_token')

  const { data = initialData, ...args } = useQuery({
    queryKey: ['favorite_portfolio_list', token],
    queryFn: () => GetUserFavorites(),
    select: (data) => ({
      data: getPortfolios(get(data, 'data.data')),
    }),
  })

  return {
    ...data,
    ...args,
  }
}
