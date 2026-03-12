import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs))

export const generateHandle = (name: string) =>
  name.toLowerCase().replace(/[^a-z0-9\s-]/g,'').replace(/\s+/g,'-').replace(/-+/g,'-').slice(0,50)

export const toWhatsAppUrl = (phone: string, message?: string) => {
  const n = phone.replace(/\D/g,'')
  return message ? `https://wa.me/${n}?text=${encodeURIComponent(message)}` : `https://wa.me/${n}`
}

export const profileUrl = (handle: string) =>
  `${process.env.NEXT_PUBLIC_PROFILE_BASE_URL ?? ''}/${handle}`
