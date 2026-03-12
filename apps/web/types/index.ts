export type Business = {
  id: string; handle: string; name: string; tagline?: string
  role?: string; verified?: boolean; estYear?: string
  description?: string; category: string; phone?: string; email?: string
  address?: string; city?: string; logoUrl?: string; themeColor?: string
  plan: 'FREE' | 'PRO' | 'BUSINESS'; isPublished: boolean
  socialLinks: SocialLink[]; actionLinks: ActionLink[]
  photos: BusinessPhoto[]; products: Product[]; businessHours?: BusinessHours
}
export type SocialLink = { id: string; platform: SocialPlatform; url: string; icon?: string; order: number }
export type ActionLink = { id: string; label: string; url: string; icon?: string; order: number }
export type BusinessHours = { monday?: string; tuesday?: string; wednesday?: string; thursday?: string; friday?: string; saturday?: string; sunday?: string }
export type BusinessPhoto = { id: string; url: string; caption?: string; order: number }
export type Product = { id: string; name: string; description?: string; price?: string; imageUrl?: string; order: number; isAvailable: boolean }
export type ScanEvent = { businessId: string; source: 'qr' | 'nfc' | 'direct' | 'shared'; userAgent?: string }
export type SocialPlatform = 'instagram' | 'facebook' | 'twitter' | 'linkedin' | 'youtube' | 'tiktok' | 'whatsapp' | 'website'
export type PricingPlan = 'FREE' | 'PRO' | 'BUSINESS'
export type FAQ = { _id: string; question: string; answer: string }
export type Testimonial = { _id: string; name: string; businessName: string; review: string; avatar: string; plan: string; rating: number }
