import { FolderPlus } from 'lucide-react'

import { Button } from '@/components/ui/button'

export const EmptyPortfolioState = () => {
  return (
    <div className="flex h-[85vh] flex-col items-center justify-center p-8 text-center">
      <FolderPlus className="mb-4 h-16 w-16 text-muted-foreground" />
      <h3 className="mb-2 text-lg font-semibold">No portfolios uploaded yet</h3>
      <p className="mb-4 text-sm text-muted-foreground">Start showcasing your work by adding your first portfolio project.</p>
      <Button className={'rounded-xl'}>
        <FolderPlus className="mr-2 h-4 w-4" />
        Add New Portfolio
      </Button>
    </div>
  )
}
