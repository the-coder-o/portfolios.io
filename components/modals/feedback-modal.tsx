import { MessageSquare } from 'lucide-react'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Textarea } from '@/components/ui/textarea'
import { cn } from '@/lib/utils'

export const FeedbackModal = () => {
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
        <Button variant="outline" className="h-11 rounded-xl">
          <MessageSquare className="mr-2 h-4 w-4" /> Send Feedback
        </Button>
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
        <DialogFooter>
          <Button variant="secondary" onClick={() => setIsOpen(false)} className="h-11 rounded-xl">
            Cancel
          </Button>
          <Button onClick={handleSubmit} className="h-11 rounded-xl">
            Submit
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
