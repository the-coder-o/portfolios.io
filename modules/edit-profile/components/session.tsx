import { Calendar, Clock, Monitor, ShieldAlert, Smartphone } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

import { SessionInterface } from '../types/session-interface'

export const Session = () => {
  const sessions: SessionInterface[] = [
    {
      id: '2',
      ip: '89.249.63.114',
      browser: 'Chrome',
      os: 'Windows',
      device: 'desktop',
      lastAccessed: 'Nov 01, 2024',
      signedIn: 'Oct 21, 2024',
      isCurrent: true,
    },
    {
      id: '1',
      ip: '89.249.63.114',
      browser: 'Chrome',
      os: 'Windows',
      device: 'desktop',
      lastAccessed: 'Oct 19, 2024',
      signedIn: 'Oct 10, 2024',
    },
    {
      id: '1',
      ip: '89.249.63.114',
      browser: 'Chrome',
      os: 'Windows',
      device: 'desktop',
      lastAccessed: 'Oct 19, 2024',
      signedIn: 'Oct 10, 2024',
    },
    {
      id: '1',
      ip: '89.249.63.114',
      browser: 'Chrome',
      os: 'Windows',
      device: 'desktop',
      lastAccessed: 'Oct 19, 2024',
      signedIn: 'Oct 10, 2024',
    },
    {
      id: '1',
      ip: '89.249.63.114',
      browser: 'Chrome',
      os: 'Windows',
      device: 'desktop',
      lastAccessed: 'Oct 19, 2024',
      signedIn: 'Oct 10, 2024',
    },
    {
      id: '1',
      ip: '89.249.63.114',
      browser: 'Chrome',
      os: 'Windows',
      device: 'desktop',
      lastAccessed: 'Oct 19, 2024',
      signedIn: 'Oct 10, 2024',
    },
  ]

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between pb-5">
        <h1 className="text-3xl font-bold">Your sessions history</h1>
        <Avatar className="h-12 w-12 rounded-xl">
          <AvatarImage src="/placeholder-avatar.jpg" alt="User" className="rounded-xl" />
          <AvatarFallback className="rounded-xl">AB</AvatarFallback>
        </Avatar>
      </div>
      <p className="text-muted-foreground">This is a list of devices that have logged into your account. Revoke any sessions that you do not recognize.</p>
      <div className="grid gap-2 md:grid-cols-2">
        {sessions.map((session: SessionInterface) => (
          <Card key={session.id} className={cn('rounded-xl', session.isCurrent ? 'border-primary' : '')}>
            <CardContent className="p-6">
              <div className="mb-4 flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  {session.device === 'desktop' ? <Monitor className="h-6 w-6 text-muted-foreground" /> : <Smartphone className="h-6 w-6 text-muted-foreground" />}
                  <div>
                    <h2 className="font-semibold">
                      {session.browser} on {session.os}
                    </h2>
                    <p className="text-sm text-muted-foreground">{session.ip}</p>
                  </div>
                </div>
                {session.isCurrent ? (
                  <span className="flex h-8 items-center rounded-xl bg-primary/10 px-3 text-xs font-medium text-primary">Current Session</span>
                ) : (
                  <Button variant="destructive" size="sm" className="h-8 rounded-xl" onClick={() => alert(`Revoke session: ${session.ip}`)}>
                    <ShieldAlert className="mr-2 h-4 w-4" />
                    Revoke
                  </Button>
                )}
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>Last online: {session.lastAccessed}</span>
                </div>
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>Signed in: {session.signedIn}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
