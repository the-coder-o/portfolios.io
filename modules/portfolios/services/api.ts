import http from '@/services/api'

export const GetUsersPortfolios = async () => {
  return await http.get('/portfolio/all-portfolios')
}
