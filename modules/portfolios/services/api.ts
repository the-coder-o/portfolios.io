import http from '@/services/api'

export const GetUsersPortfolios = async () => {
  return await http.get('/portfolio/all-portfolios')
}

export const AddFavoritePortfolio = async (id: string) => {
  return await http.post(`/portfolio/favorites/${id}`)
}
