import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import ProfileHero from '@/components/profile/ProfileHero'
import SocialLinks from '@/components/profile/SocialLinks'
import ActionButtons from '@/components/profile/ActionButtons'
import BusinessHours from '@/components/profile/BusinessHours'
import PhotoGallery from '@/components/profile/PhotoGallery'
import ProductGrid from '@/components/profile/ProductGrid'
import ShareFooter from '@/components/profile/ShareFooter'

import ContactCard from '@/components/profile/ContactCard'

// ── Demo data (fallback) ─────────────────────────────────
const DEMO = {
  id: 'demo',
  handle: 'urban-threads',
  name: "Urban Threads Boutique",
  role: 'Women’s Fashion Boutique',
  isVerified: true,
  estYear: '2018',
  tagline:
    "Urban Threads Boutique is a Kathmandu-based fashion destination offering curated women’s wear, elegant ethnic collections, and modern everyday styles. We focus on quality fabrics, timeless designs, and personalized styling experiences.",
  category: 'Fashion & Boutique',
  phone: '+977 9801234567',
  email: 'urbanthreads@gmail.com',
  address: 'Durbar Marg, Kathmandu, Nepal',
  city: 'Kathmandu',
  logoUrl:
    'https://omme-acebc.web.app/assets/omme-logo-CvZngZ9P.png',
  themeColor: '#E94560',
  plan: 'PRO' as const,
  isPublished: true,

  socialLinks: [
    { id: '1', platform: 'instagram' as const, url: 'https://instagram.com/urbanthreads', order: 0, icon: 'https://cdn.simpleicons.org/instagram' },
    { id: '2', platform: 'facebook' as const, url: 'https://facebook.com/urbanthreads', order: 1, icon: 'https://cdn.simpleicons.org/facebook' },
    { id: '3', platform: 'tiktok' as const, url: 'https://tiktok.com/@urbanthreads', order: 2, icon: 'https://cdn.simpleicons.org/tiktok' },
  ],

  actionLinks: [

    {
      id: '1',
      label: 'WhatsApp Us',
      icon: 'MessageCircle',
      url: 'https://wa.me/9779801234567',
      order: 1,
    },
    {
      id: '2',
      label: 'Get Direction',
      icon: 'MapPin',
      url: 'https://maps.google.com/?q=Durbar+Marg+Kathmandu',
      order: 2,
    },
    {
      id: '3',
      label: 'Call Us',
      icon: 'Phone',
      url: '+9779801234567',
      order: 3,
    },
    {
      id: '4',
      label: 'Leave a Review',
      icon: 'Star',
      url: 'https://search.google.com/local/writereview?placeid=ChIJO1AvEgAZ6zkRF3YvBH8Luxw',
      order: 4,
    },
  ],

  businessHours: {
    monday: '10:00 AM – 7:00 PM',
    tuesday: '10:00 AM – 7:00 PM',
    wednesday: '10:00 AM – 7:00 PM',
    thursday: '10:00 AM – 7:00 PM',
    friday: '10:00 AM – 8:00 PM',
    saturday: '10:00 AM – 8:00 PM',
    sunday: '11:00 AM – 5:00 PM',
  },

  photos: [],
  products: [],
}

type Props = { params: Promise<{ handle: string }> }

export default async function BusinessProfilePage({ params }: Props) {
  const { handle } = await params

  // Real data fetch (Disabled for rollback)
  /*
  const business = await prisma.business.findUnique({
    where: { handle },
    include: {
      socialLinks: { orderBy: { order: 'asc' } },
      actionLinks: { orderBy: { order: 'asc' } },
      businessHours: true,
      photos: { orderBy: { order: 'asc' } },
      products: { orderBy: { order: 'asc' } },
    }
  })
  */

  // Using hardcoded DEMO data for all routes
  const data = DEMO
  if (!data) notFound()

  // Fire scan analytics (fire-and-forget — never await)
  try {
    fetch(`${process.env.NEXT_PUBLIC_SITE_URL ?? ''}/api/analytics/scan`, {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ businessId: data.id, source: 'qr' }),
    }).catch(() => { })
  } catch (e) { }

  return (
    <main className={`min-h-screen bg-white pb-12`}>
      <ProfileHero business={data as any} />

      <div className="space-y-8">
        <SocialLinks links={data.socialLinks} />

        <ActionButtons links={data.actionLinks as any} businessId={data.id} />

        {data.photos && data.photos.length > 0 && <PhotoGallery photos={data.photos} />}
        {data.products && data.products.length > 0 && <ProductGrid products={data.products} />}

        {data.businessHours && <BusinessHours hours={data.businessHours as any} />}

        <ContactCard links={data.actionLinks as any} />

        <ShareFooter name={data.name} />
      </div>

    </main>
  )
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { handle } = await params
  return {
    title: `@${handle} | Professional Profile`,
    description: 'Connect with me on QR Biz Card',
    openGraph: { title: `@${handle} | Professional Profile`, description: 'Scan. Discover. Connect.' },
  }
}
