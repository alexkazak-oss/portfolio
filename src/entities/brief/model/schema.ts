import { z } from 'zod'

export const briefSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  company: z.string().optional(),
  message: z.string().min(10),
  captcha: z.string(),
})

export type BriefFormData = z.infer<typeof briefSchema>
