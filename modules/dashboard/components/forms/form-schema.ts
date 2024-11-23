import { z } from 'zod'

export const portfolioSchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }).max(100, { message: 'Name cannot exceed 100 characters' }),
  category: z.string(),
  description: z.string().min(10, { message: 'Description must be at least 10 characters' }).max(1000, { message: 'Description cannot exceed 1000 characters' }),
  images: z.array(z.union([z.instanceof(File), z.string().url()]).or(z.string())).min(1, { message: 'At least one image is required' }),
  github_link: z.string(),
  live_demo: z.string(),
  page: z.number(),
  type: z.string(),
})
