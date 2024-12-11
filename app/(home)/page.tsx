'use client'

import { HomeView } from '@/modules/home/pages/home-view'
import PageTitle from '@/components/page-title'
import { useRouter } from 'next/navigation'
import Cookies from 'js-cookie'
import { useEffect } from 'react'

const Page = () => {
  const router = useRouter()

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)

    const accessToken = urlParams.get('access_token')

    if (accessToken) {
      Cookies.set('access_token', accessToken, { expires: 7 })
      router.replace('/')
      router.refresh()
    }
  }, [router])

  return (
    <>
      <PageTitle title="Home" />
      <HomeView />
    </>
  )
}

export default Page
