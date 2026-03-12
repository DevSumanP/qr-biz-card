export const SITE_NAME    = 'QR Biz Card'
export const SITE_TAGLINE = 'Scan. Discover. Connect.'
export const SITE_EMAIL   = 'hello@qrbizcard.com'

export const NAV_LINKS = [
  { label: 'How it works', href: '/#how-it-works' },
  { label: 'Features',     href: '/#features'     },
  { label: 'Pricing',      href: '/pricing'        },
  { label: 'Contact',      href: '/contact'        },
]

export const BUSINESS_CATEGORIES = [
  'Restaurant','Cafe','Retail','Salon & Spa','Gym & Fitness',
  'Hotel & Hospitality','Medical & Health','Education','Services','Other',
]

export const SOCIAL_PLATFORMS = [
  { id:'instagram', label:'Instagram',   icon:'Instagram', placeholder:'https://instagram.com/yourbusiness' },
  { id:'facebook',  label:'Facebook',    icon:'Facebook',  placeholder:'https://facebook.com/yourbusiness'  },
  { id:'twitter',   label:'Twitter / X', icon:'Twitter',   placeholder:'https://twitter.com/yourbusiness'   },
  { id:'linkedin',  label:'LinkedIn',    icon:'Linkedin',  placeholder:'https://linkedin.com/company/yourbusiness' },
  { id:'youtube',   label:'YouTube',     icon:'Youtube',   placeholder:'https://youtube.com/@yourbusiness'  },
  { id:'tiktok',    label:'TikTok',      icon:'Music2',    placeholder:'https://tiktok.com/@yourbusiness'   },
]

export const DEFAULT_ACTION_LINKS = [
  { label:'WhatsApp Us',    icon:'MessageCircle',   url:'' },
  { label:'Get Directions', icon:'MapPin',          url:'' },
  { label:'View Menu',      icon:'UtensilsCrossed', url:'' },
  { label:'Book Now',       icon:'CalendarCheck',   url:'' },
  { label:'Call Us',        icon:'Phone',           url:'' },
  { label:'Leave a Review', icon:'Star',            url:'' },
]

export const PLAN_LIMITS = {
  FREE:     { socialLinks: 4,  photos: 0,  products: 0,  analyticsHistory: 7   },
  PRO:      { socialLinks: 99, photos: 12, products: 20, analyticsHistory: 90  },
  BUSINESS: { socialLinks: 99, photos: 50, products: 99, analyticsHistory: 365 },
} as const

export const PLANS = [
  { id:'FREE',     name:'Free',     price:'Rs. 0',   period:'',       highlighted:false,
    description:'Get started at zero cost',
    features:['Public profile page','Up to 4 social links','QR code download','7-day analytics'],
    cta:'Get started free' },
  { id:'PRO',      name:'Pro',      price:'Rs. 499', period:'/month', highlighted:true,
    description:'For businesses serious about their digital presence',
    features:['Everything in Free','Unlimited social links','1 free QR stand','Photo gallery (12)','Product listing','90-day analytics'],
    cta:'Start Pro' },
  { id:'BUSINESS', name:'Business', price:'Rs. 999', period:'/month', highlighted:false,
    description:'For chains and multi-location businesses',
    features:['Everything in Pro','3 free QR stands','50 photos','Custom domain','5 locations','365-day analytics'],
    cta:'Start Business' },
]

export const HOW_IT_WORKS_STEPS = [
  { step:'01', title:'Sign up & build your profile',   icon:'UserPlus',  description:'Fill in your business details, social links, photos, and action buttons in under 10 minutes.' },
  { step:'02', title:'Get your QR stand',              icon:'QrCode',    description:'We ship a branded acrylic QR stand to your store. Just place it on your counter.' },
  { step:'03', title:'Customers scan & connect',       icon:'Smartphone',description:'Every scan lands on your live profile page. Customers can follow, call, WhatsApp, and more.' },
]
