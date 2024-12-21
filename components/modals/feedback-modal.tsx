'use client'

import { toast } from 'sonner'
import React, { useState } from 'react'
import { usePathname } from 'next/navigation'
import { MessageCircle, MessageSquare } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { sendFeedback } from '@/action/send-feedback'

export const FeedbackModal = () => {
  const pathname = usePathname()

  const [isOpen, setIsOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [feedback, setFeedback] = useState('')
  const [mood, setMood] = useState<'sad' | 'neutral' | 'happy' | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData()
    formData.append('email', email)
    formData.append('feedback', feedback)
    formData.append('mood', mood || 'not specified')

    const result = await sendFeedback(formData)

    setIsSubmitting(false)

    if (result.success) {
      toast.success(result.message)
      setIsOpen(false)
      setEmail('')
      setFeedback('')
      setMood(null)
    } else {
      toast.error(result.message)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <>
          <Button onClick={() => setIsOpen(true)} variant="outline" className="h-11 rounded-xl max-md:hidden">
            <MessageSquare className="mr-2 h-4 w-4" /> Send Feedback
          </Button>
          <div onClick={() => setIsOpen(true)} className={cn('hidden flex-col items-center gap-1 p-2 text-sm transition-colors max-md:flex', pathname === '/squads' ? 'text-foreground' : 'text-muted-foreground')}>
            <MessageCircle className="h-5 w-5" />
            <span className="text-xs">Feedback</span>
          </div>
        </>
      </DialogTrigger>
      <DialogContent className="!rounded-xl !bg-[#0a0a0a] sm:max-w-[425px]">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Leave Feedback</DialogTitle>
            <DialogDescription className="!mt-2.5">We&apos;d love to hear what went well or how we can improve the product experience.</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="your@email.com" required className={'rounded-xl'} />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="feedback">Feedback</Label>
              <Textarea id="feedback" value={feedback} onChange={(e) => setFeedback(e.target.value)} placeholder="Your feedback" className="min-h-[100px] rounded-xl" required />
            </div>
            <div className="flex space-x-2">
              <Button type="button" variant="outline" size="icon" onClick={() => setMood('sad')} className={cn('rounded-xl', mood === 'sad' ? 'bg-primary' : '')}>
                😞
              </Button>
              <Button type="button" variant="outline" size="icon" onClick={() => setMood('neutral')} className={cn('rounded-xl', mood === 'neutral' ? 'bg-primary' : '')}>
                😐
              </Button>
              <Button type="button" variant="outline" size="icon" onClick={() => setMood('happy')} className={cn('rounded-xl', mood === 'happy' ? 'bg-primary' : '')}>
                😊
              </Button>
            </div>
          </div>
          <DialogFooter className={'flex w-full items-center gap-2'}>
            <Button type="button" variant="secondary" onClick={() => setIsOpen(false)} className="h-11 w-full rounded-xl">
              Cancel
            </Button>
            <Button type="submit" className="h-11 w-full rounded-xl" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
