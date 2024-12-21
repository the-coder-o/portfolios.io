'use client'

import { useEffect, useState } from 'react'
import FingerprintJS from '@fingerprintjs/fingerprintjs'

export function usePageViews(portfolioId: string) {
  const [views, setViews] = useState<number>(0)

  useEffect(() => {
    const fetchViews = async () => {
      try {
        let fingerprint = null

        try {
          const fp = await FingerprintJS.load()
          const result = await fp.get()
          fingerprint = result.visitorId
        } catch (error) {
          console.warn('Fingerprint generation failed, continuing without it.')
        }

        const incrementResponse = await fetch(`/api/views/${portfolioId}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ fingerprint }),
        })

        if (incrementResponse.ok) {
          const data = await incrementResponse.json()
          setViews(data.views)
        } else {
          console.error('Failed to increment view count.')
        }
      } catch (error) {
        console.error('Error fetching views:', error)
      }
    }

    fetchViews()
  }, [portfolioId])

  return views
}
