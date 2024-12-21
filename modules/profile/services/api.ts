import http from '@/services/api'

export const GetUserPortfolios = async () => {
  return await http.get('/portfolio/user/me')
}

export const GetUserFavorites = async () => {
  return await http.get('/portfolio/favorites')
}
