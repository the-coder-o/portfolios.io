import axios from 'axios'

const ENV = process.env

const http = axios.create({
  baseURL: ENV.NEXT_APP_BASE_URL,
})

http.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('access_token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error),
)

http.interceptors.response.use(
  (config) => {
    return config
  },
  (error) => {
    if (error?.response?.status === 401) {
      localStorage.clear()
    }

    throw error
  },
)

export default http
