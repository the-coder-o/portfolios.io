import { get } from 'lodash'
import Cookies from 'js-cookie'
import { useQuery } from '@tanstack/react-query'

import { GetUsersPortfolios } from '@/modules/portfolios/services/api'
import { getPortfolios } from '@/modules/dashboard/hooks/adapter'

export const useGetUsersPortfolios = () => {
  const initialData = {
    data: getPortfolios(),
  }
  const token = Cookies.get('access_token')

  const { data = initialData, ...args } = useQuery({
    queryKey: ['users_portfolio_list', token],
    queryFn: () => GetUsersPortfolios(),
    select: (data) => ({
      data: getPortfolios(get(data, 'data.data')),
    }),
  })

  return {
    ...data,
    ...args,
  }
}
