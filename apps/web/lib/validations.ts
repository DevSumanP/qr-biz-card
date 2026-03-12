import { z } from 'zod'
export const onboardingSchema = z.object({
  name: z.string().min(2), category: z.string().min(1),
  phone: z.string().optional(), email: z.string().email().optional().or(z.literal('')),
  address: z.string().optional(), city: z.string().optional(),
  website: z.string().url().optional().or(z.literal('')),
  description: z.string().max(300).optional(),
  role: z.string().optional().default('Professional'),
  estYear: z.string().optional(),
  isVerified: z.boolean().optional().default(false),
})
export const contactSchema = z.object({
  name: z.string().min(2), email: z.string().email(),
  phone: z.string().optional(), message: z.string().min(10),
})
export const socialLinkSchema = z.object({ platform: z.string().min(1), url: z.string().url() })
export const actionLinkSchema = z.object({ label: z.string().min(1), url: z.string().url(), icon: z.string().optional() })
export const quoteRequestSchema = z.object({
  businessName: z.string().min(2),
  contactName: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(7),
  details: z.string().optional(),
})
export type OnboardingFormData = z.infer<typeof onboardingSchema>
export type ContactFormData = z.infer<typeof contactSchema>
export type SocialLinkFormData = z.infer<typeof socialLinkSchema>
export type ActionLinkFormData = z.infer<typeof actionLinkSchema>
export type QuoteRequestFormData = z.infer<typeof quoteRequestSchema>
