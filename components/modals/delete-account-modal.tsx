'use client'

import { useState } from 'react'
import { AlertTriangle, Trash2 } from 'lucide-react'

import { useDeleteProfile } from '@/modules/edit-profile/hooks/useDeleteProfile'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import LoadingButton from '@/components/buttons/loading-button'

interface DeleteModalProps {
  profile_id: string
}

export const DeleteModal = ({ profile_id }: DeleteModalProps) => {
  const { triggerProfileDelete, isPending } = useDeleteProfile(profile_id)
  const [open, setOpen] = useState(false)

  const handleDelete = () => {
    triggerProfileDelete()
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button type={'button'} variant={'destructive'} className="flex w-full items-center justify-start gap-2 rounded-xl bg-transparent px-3 py-2">
          <Trash2 className="h-4 w-4" />
          Delete Account
        </Button>
      </DialogTrigger>
      <DialogContent className="!rounded-xl sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-red-500">
            <AlertTriangle className="h-5 w-5" />
            Delete Profile
          </DialogTitle>
          <DialogDescription>Are you sure you want to delete this profile This action cannot be undone.</DialogDescription>
        </DialogHeader>
        <div className="my-4 rounded-lg bg-destructive/10 p-4 text-sm text-destructive">
          <p className={'text-red-500'}>Deleting your account will:</p>
          <ul className="mt-2 list-inside list-disc">
            <li className={'text-red-500'}>Permanently remove all your data</li>
            <li className={'text-red-500'}>Cancel any active subscriptions</li>
            <li className={'text-red-500'}>Delete all your posts and comments</li>
          </ul>
        </div>
        <DialogFooter className={'flex gap-2'}>
          <Button variant="outline" onClick={() => setOpen(false)} className={'rounded-xl'}>
            Cancel
          </Button>
          <LoadingButton onClick={handleDelete} isLoading={isPending} variant={'destructive'} className="flex items-center justify-center gap-2 rounded-xl px-3 py-2">
            <Trash2 className="h-4 w-4" />
            Delete Account
          </LoadingButton>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
