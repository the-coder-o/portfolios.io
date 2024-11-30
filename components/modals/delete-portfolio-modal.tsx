'use client'

import { useState } from 'react'
import { AlertTriangle, Trash2 } from 'lucide-react'

import { useDeletePortfolio } from '@/modules/dashboard/hooks/useDeletePortfolio'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import LoadingButton from '@/components/buttons/loading-button'

interface DeleteModalProps {
  portfolio_id: string
}

export const DeletePortfolioModal = ({ portfolio_id }: DeleteModalProps) => {
  const { triggerPortfolioDelete, isPending } = useDeletePortfolio(portfolio_id)
  const [open, setOpen] = useState(false)

  const handleDelete = () => {
    triggerPortfolioDelete()
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="icon" className="rounded-xl">
          <Trash2 className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="!rounded-xl sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-red-500">
            <AlertTriangle className="h-5 w-5" />
            Delete Portfolio
          </DialogTitle>
          <DialogDescription>Are you sure you want to delete this portfolio This action cannot be undone.</DialogDescription>
        </DialogHeader>

        <DialogFooter className={'flex gap-2'}>
          <Button variant="outline" onClick={() => setOpen(false)} className={'rounded-xl'}>
            Cancel
          </Button>
          <LoadingButton onClick={handleDelete} isLoading={isPending} variant={'destructive'} className="flex items-center justify-center gap-2 rounded-xl px-3 py-2">
            <Trash2 className="h-4 w-4" />
            Delete Portfolio
          </LoadingButton>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
