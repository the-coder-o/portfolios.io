import { get } from 'lodash'
import { useQuery } from '@tanstack/react-query'

import { GetPortfolios } from '../services/api'

import { getPortfolio } from './adapter'

export const useGetPortfoliosList = () => {
  const initialData = {
    data: getPortfolio(),
  }

  const { data = initialData, ...args } = useQuery({
    queryKey: ['profileMe'],
    queryFn: () => GetPortfolios(),
    select: (data) => ({
      data: getPortfolio(get(data, 'data.data')),
    }),
  })

  return {
    ...data,
    ...args,
  }
}
