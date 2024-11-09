'use client'

import { useEffect, useState } from 'react'
import { jwtDecode } from 'jwt-decode'
import Cookies from 'js-cookie'

interface DecodedToken {
  exp: number
}

export const useIsAuth = (): boolean => {
  const [isAuth, setIsAuth] = useState(false)

  useEffect(() => {
    const checkAuth = () => {
      const token = Cookies.get('access_token')
      if (!token) {
        setIsAuth(false)
        return
      }

      try {
        const decoded = jwtDecode<DecodedToken>(token)
        const exp = decoded.exp * 1000
        setIsAuth(Date.now() < exp)
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (error) {
        setIsAuth(false)
      }
    }

    checkAuth()
  }, [])

  return isAuth
}
