import React from 'react'
import { Calendar, Facebook, MapPin, Send, Twitter } from 'lucide-react'

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export const AboutView = () => {
  return (
    <div className="container">
      <div className="my-10">
        <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <Avatar className="h-20 w-20 rounded-xl">
              <AvatarImage src="/placeholder.svg?height=80&width=80" alt="User" className="rounded-xl" />
              <AvatarFallback className="rounded-xl">UN</AvatarFallback>
            </Avatar>
            <div className="flex flex-col gap-1">
              <h1 className="text-2xl">Abdulbasit Sharipov</h1>
              <div>
                <p className="flex items-center gap-1 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" /> Tashkent, Uzbekistan
                </p>
                <p className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" /> Member since Dec 2022
                </p>
              </div>
            </div>
          </div>
          <TooltipProvider>
            <div className="flex flex-wrap gap-2">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" size="icon" className="h-9 w-9 rounded-xl">
                    <Twitter className="h-4 w-4" />
                    <span className="sr-only">Twitter</span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent className="rounded-xl">
                  <p>Twitter</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" size="icon" className="h-9 w-9 rounded-xl">
                    <Facebook className="h-4 w-4" />
                    <span className="sr-only">Facebook</span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent className="rounded-xl">
                  <p>Facebook</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" size="icon" className="h-9 w-9 rounded-xl">
                    <Send className="h-4 w-4" />
                    <span className="sr-only">Telegram</span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent className="rounded-xl">
                  <p>Telegram</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" size="icon" className="h-9 w-9 rounded-xl">
                    <Send className="h-4 w-4" />
                    <span className="sr-only">Telegram</span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent className="rounded-xl">
                  <p>Telegram</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" size="icon" className="h-9 w-9 rounded-xl">
                    <Send className="h-4 w-4" />
                    <span className="sr-only">Telegram</span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent className="rounded-xl">
                  <p>Telegram</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </TooltipProvider>
        </div>
        <div className="mt-10">
          <h2 className="text-xl font-semibold">About Me</h2>
          <p className="w-full text-muted-foreground">
            Full-stack developer with 5+ years of experience in building scalable web applications. Full-stack developer with 5+ years of experience in building scalable web applications. Full-stack developer with 5+ years of experience in building scalable web applications. Full-stack developer
            with 5+ years of experience in building scalable web applications. Passionate about React, Node.js, and cloud technologies. Always eager to learn and tackle new challenges.
          </p>
        </div>
      </div>
    </div>
  )
}
