import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Skeleton } from '@/components/ui/skeleton'

export const TableSkeleton = () => {
  return (
    <div className="space-y-4">
      <div className="overflow-hidden rounded-xl border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Image</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Links</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[...Array(8)].map((_, index) => (
              <TableRow key={index}>
                <TableCell>
                  <Skeleton className="h-[60px] w-[110px] rounded-xl" />
                </TableCell>
                <TableCell className="max-w-xs">
                  <Skeleton className="h-4 w-full" />
                </TableCell>
                <TableCell className="max-w-xs">
                  <Skeleton className="h-4 w-full" />
                </TableCell>
                <TableCell className={'w-[120px]'}>
                  <div className="grid grid-cols-2 gap-2">
                    <Skeleton className="h-8 w-8 rounded-xl" />
                    <Skeleton className="h-8 w-8 rounded-xl" />
                  </div>
                </TableCell>
                <TableCell className={'w-[165px]'}>
                  <div className="grid grid-cols-3 gap-2">
                    <Skeleton className="h-8 w-8 rounded-xl" />
                    <Skeleton className="h-8 w-8 rounded-xl" />
                    <Skeleton className="h-8 w-8 rounded-xl" />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
