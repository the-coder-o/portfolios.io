import Cookies from 'js-cookie'
import axios from 'axios'

const http = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACK_URL,
})

http.interceptors.request.use(
  (config) => {
    const token = Cookies.get('access_token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error),
)

http.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    if (error?.response?.status === 401) {
      Cookies.remove('access_token')
      window.location.reload()
    }
    return Promise.reject(error)
  },
)

export default http
