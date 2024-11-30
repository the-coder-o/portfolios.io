import { z } from 'zod'

export const signInSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
})

export const signUpSchema = z.object({
  name: z.string().min(1, 'Full name is required'),
  username: z.string().regex(/^[a-zA-Z0-9_-]{3,20}$/, 'Invalid username'),
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
})

export const onboardingSchema = z.object({
  email: z.string().email('Invalid email address'),
})
