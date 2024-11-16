import { z } from 'zod'

//*****************************************************/
export const userProfileSchema = z.object({
  name: z.string().optional(),
  email: z.string().email().optional(),
  username: z
    .string()
    .regex(/^[a-zA-Z0-9_-]{3,20}$/, 'Invalid username')
    .optional(),
  website_url: z
    .string()
    .regex(/^(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/, 'Invalid website name')
    .optional(),
  banner: z.string().optional(),
  role: z.string().optional(),
  avatar: z.string().optional(),
  location: z.string().optional(),
  bio: z.string().optional(),
})

//*****************************************************/
const usernameRegExp = /^[a-zA-Z0-9_-]+$/

export const generalSchema = z.object({
  username: z.string().max(30, 'Username must be between 1 and 30 characters').regex(usernameRegExp, 'Username can only contain letters, numbers, underscores, and dashes').optional(),
  email: z.string().email('Invalid email address').optional(),
})

//*****************************************************/
export const passwordSchema = z.object({
  old_password: z.string().nonempty('Old password is required'),
  new_password: z.string().min(8, 'New password must be at least 8 characters'),
})

//*****************************************************/
export const socialProfileSchema = z.object({
  linkedIn: z.string().optional(),
  github: z.string().optional(),
  twitter: z.string().optional(),
  facebook: z.string().optional(),
  instagram: z.string().optional(),
  website: z.string().optional(),
  resume: z.string().optional(),
  cv: z.string().optional(),
  portfolio: z.string().optional(),
  blog: z.string().optional(),
  discord: z.string().optional(),
  telegram: z.string().optional(),
})
