'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ExternalLink, Eye, Github, Pencil, Trash2 } from 'lucide-react'

import { PortfolioList } from '@/modules/dashboard/types/portfolios-list'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination'
import { Button } from '@/components/ui/button'

interface PortfolioTableProps {
  portfolios: PortfolioList[]
  onEdit?: (id: string) => void
  onDelete?: (id: string) => void
  onView?: (id: string) => void
}

export const PortfolioTable = ({ portfolios, onEdit, onDelete, onView }: PortfolioTableProps) => {
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 8
  const totalPages = Math.ceil(portfolios.length / itemsPerPage)

  const paginatedPortfolios = portfolios.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

  return (
    <div className="space-y-4">
      <div className="overflow-hidden rounded-xl border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Image</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Skills</TableHead>
              <TableHead>Links</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedPortfolios?.reverse()?.map((portfolio, index: number) => (
              <TableRow key={portfolio._id}>
                <TableCell>
                  <Image src={`https://portfolio.shohjahon1code.uz/${portfolio.images?.[0]}` || '/placeholder.svg'} alt={portfolio.name} className="!h-[60px] !w-[110px] rounded-xl bg-cover object-cover" width={2000} height={1400} />
                </TableCell>
                <TableCell className="max-w-xs">
                  <p className={'line-clamp-2 text-sm'}>{portfolio.name}</p>
                </TableCell>
                <TableCell className="max-w-xs">
                  <p className="line-clamp-2 text-sm text-muted-foreground">{portfolio.description}</p>
                </TableCell>
                <TableCell>
                  <div className="grid grid-cols-2">
                    {portfolio.github_link && (
                      <Button variant="outline" size="icon" className="rounded-xl" asChild>
                        <a href={portfolio.github_link} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                    {portfolio.live_demo && (
                      <Button variant="outline" size="icon" className="rounded-xl" asChild>
                        <a href={portfolio.live_demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                  </div>
                </TableCell>
                <TableCell>
                  <div className="grid grid-cols-3">
                    <Button variant="outline" size="icon" className="rounded-xl" onClick={() => onEdit?.(portfolio._id)}>
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-xl" onClick={() => onDelete?.(portfolio._id)}>
                      <Trash2 className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-xl" onClick={() => onView?.(portfolio._id)}>
                      <Eye className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))} className={'cursor-pointer rounded-xl'} />
          </PaginationItem>
          {[...Array(totalPages)].map((_, index) => (
            <PaginationItem key={index}>
              <PaginationLink onClick={() => setCurrentPage(index + 1)} isActive={currentPage === index + 1} className={'cursor-pointer rounded-xl'}>
                {index + 1}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationNext onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))} className={'cursor-pointer rounded-xl'} />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}
