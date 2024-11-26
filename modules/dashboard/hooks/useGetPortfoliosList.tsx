import { get } from 'lodash'
import { useQuery } from '@tanstack/react-query'

import { GetPortfolios } from '../services/api'

import { getPortfolios } from './adapter'

export const useGetPortfoliosList = () => {
  const initialData = {
    data: getPortfolios(),
  }

  const { data = initialData, ...args } = useQuery({
    queryKey: ['portfolio_list'],
    queryFn: () => GetPortfolios(),
    select: (data) => ({
      data: getPortfolios(get(data, 'data.data')),
    }),
  })

  return {
    ...data,
    ...args,
  }
}
