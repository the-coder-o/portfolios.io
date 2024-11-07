import { jwtDecode } from 'jwt-decode'
import Cookies from 'js-cookie'

export const isAuthenticated = (): boolean => {
  const token = Cookies.get('access_token')
  if (!token) return false

  try {
    const decoded: any = jwtDecode(token)
    const exp = decoded.exp * 1000
    return Date.now() < exp
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error: any | unknown) {
    return false
  }
}
