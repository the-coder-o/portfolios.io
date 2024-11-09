'use client'

import { Toaster } from 'sonner'
import { Analytics } from '@vercel/analytics/react'
import { QueryClientProvider } from '@tanstack/react-query'

import { queryClient } from '@/services/react-query/query-client'

export function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster position="top-right" />
      {children}
      <Analytics />
    </QueryClientProvider>
  )
}
