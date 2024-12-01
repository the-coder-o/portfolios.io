import React from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { AlertCircle, ArrowLeft, Home, Search } from 'lucide-react'

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export const NotFoundDetailMessage = () => {
  const router = useRouter()

  return (
    <div className="container flex min-h-screen items-center justify-center">
      <Card className="w-full max-w-md border-transparent bg-transparent">
        <CardHeader>
          <CardTitle className="flex items-center justify-center text-center text-2xl font-bold">
            <AlertCircle className="mr-2 h-8 w-8 text-red-500" />
            Portfolio Not Found
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center text-muted-foreground">We couldn&apos;t find the portfolio you&apos;re looking for. It may have been removed or doesn&apos;t exist.</p>
        </CardContent>
        <CardFooter className="flex flex-col space-y-2">
          <Button onClick={() => router.back()} className="w-full rounded-xl">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Go Back
          </Button>
          <Button asChild variant="outline" className="w-full rounded-xl">
            <Link href="/portfolios">
              <Search className="mr-2 h-4 w-4" />
              Browse Portfolios
            </Link>
          </Button>
          <Button asChild variant="ghost" className="w-full rounded-xl">
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Return to Home
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
