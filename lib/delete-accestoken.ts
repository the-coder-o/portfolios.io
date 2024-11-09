import Cookies from 'js-cookie'

export function deleteAccessToken() {
  Cookies.remove('access_token')
}
