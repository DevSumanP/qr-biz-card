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
  handle: 'thegorkhaguardian',
  name: "The Gorkha Guardian",
  role: 'News & Media Platform',
  isVerified: true,
  estYear: '2024',
  tagline:
    "The Gorkha Guardian is a digital media platform sharing news, stories, and updates focused on Nepal, the Gorkha community, and global events that matter.",

  category: 'News & Media',
  phone: '+977 9766528585',
  email: 'contact@thegorkhaguardian.com',
  address: 'Kathmandu, Nepal',
  city: 'Kathmandu',

  logoUrl:
    'https://www.facebook.com/photo/?fbid=122115601545153141&set=a.122097878907153141',

  themeColor: '#C1121F',
  plan: 'PRO' as const,
  isPublished: true,

  socialLinks: [
    {
      id: '1',
      platform: 'instagram' as const,
      url: 'https://www.instagram.com/thegorkhaguardian/',
      order: 0,
      icon: 'https://cdn.simpleicons.org/instagram',
    },
    {
      id: '2',
      platform: 'facebook' as const,
      url: 'https://www.facebook.com/profile.php?id=61584594243657',
      order: 1,
      icon: 'https://cdn.simpleicons.org/facebook',
    },
    {
      id: '3',
      platform: 'tiktok' as const,
      url: 'https://www.tiktok.com/@thegorkhaguardian',
      order: 2,
      icon: 'https://cdn.simpleicons.org/tiktok',
    },
    {
      id: '4',
      platform: 'whatsapp' as const,
      url: 'https://wa.me/9779766528585',
      order: 3,
      icon: 'https://cdn.simpleicons.org/whatsapp',
    },
  ],

  actionLinks: [
    {
      id: '1',
      label: 'Call Us',
      icon: 'Phone',
      url: 'tel:+9779766528585',
      order: 1,
    },
    {
      id: '2',
      label: 'Follow on Facebook',
      icon: 'Facebook',
      url: 'https://www.facebook.com/profile.php?id=61584594243657',
      order: 2,
    },
    {
      id: '3',
      label: 'Follow on Instagram',
      icon: 'Instagram',
      url: 'https://www.instagram.com/thegorkhaguardian/',
      order: 3,
    },
  ],

  businessHours: {
    monday: 'Open 24 Hours',
    tuesday: 'Open 24 Hours',
    wednesday: 'Open 24 Hours',
    thursday: 'Open 24 Hours',
    friday: 'Open 24 Hours',
    saturday: 'Open 24 Hours',
    sunday: 'Open 24 Hours',
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
