import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { MessageCircle, MessageSquare } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Textarea } from '@/components/ui/textarea'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'

export const FeedbackModal = () => {
  const pathname = usePathname()

  const [isOpen, setIsOpen] = useState(false)
  const [feedback, setFeedback] = useState('')
  const [mood, setMood] = useState<'sad' | 'neutral' | 'happy' | null>(null)

  const handleSubmit = () => {
    setIsOpen(false)
    setFeedback('')
    setMood(null)
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
        <DialogHeader>
          <DialogTitle>Leave Feedback</DialogTitle>
          <DialogDescription className="!mt-2.5">We&apos;d love to hear what went well or how we can improve the product experience.</DialogDescription>
        </DialogHeader>
        <Textarea value={feedback} onChange={(e) => setFeedback(e.target.value)} placeholder="Your feedback" className="min-h-[100px] rounded-xl" />
        <div className="flex space-x-2 py-4">
          <Button variant="outline" size="icon" onClick={() => setMood('sad')} className={cn('rounded-xl', mood === 'sad' ? 'bg-primary' : '')}>
            😞
          </Button>
          <Button variant="outline" size="icon" onClick={() => setMood('neutral')} className={cn('rounded-xl', mood === 'neutral' ? 'bg-primary' : '')}>
            😐
          </Button>
          <Button variant="outline" size="icon" onClick={() => setMood('happy')} className={cn('rounded-xl', mood === 'happy' ? 'bg-primary' : '')}>
            😊
          </Button>
        </div>
        <DialogFooter className={'flex w-full items-center gap-2'}>
          <Button variant="secondary" onClick={() => setIsOpen(false)} className="h-11 w-full rounded-xl">
            Cancel
          </Button>
          <Button onClick={handleSubmit} className="h-11 w-full rounded-xl">
            Submit
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
