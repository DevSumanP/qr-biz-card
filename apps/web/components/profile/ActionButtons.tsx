'use client'
import { Instagram, Facebook, Mail, MapPin, Phone, MessageCircle, ArrowUpRight } from 'lucide-react'
import { textStyle } from '@/lib/styles'
import type { ActionLink } from './types'

const ICONS: Record<string, React.ElementType> = {
  Instagram, Facebook, Mail, MapPin, Phone, MessageCircle, ArrowUpRight,
}

export default function ActionButtons({ links, businessId }: { links: ActionLink[]; businessId: string }) {
  if (!links.length) return null

  const track = async (platform: string) => {
    try {
      await fetch('/api/analytics/click', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ businessId, platform, linkType: 'action' }),
      })
    } catch { }
  }

  return (
    <div className="w-full px-4"> {/* 16px left & right spacing */}

      <div className="bg-white shadow-md py-[10px] rounded-xl border border-black/[0.04] overflow-hidden flex flex-col">

        {links.map((action) => {
          const Icon = ICONS[action.icon ?? ''] ?? MapPin
          return (
            <a
              key={action.label}
              href={action.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                track(action.label.toLowerCase().replace(/\s+/g, '-'))
              }
              className="group flex items-center justify-between px-[16px] py-[12px] hover:bg-gray-50 transition-all cursor-pointer"
            >
              {/* LEFT */}
              <div className="flex items-center gap-3 w-[140px] shrink-0">
                <Icon className="w-5 h-5 text-[#333333]" />
                <span className={`${textStyle.bodyMedium} text-[#333333] font-medium`}>
                  {action.label}
                </span>
              </div>

              {/* RIGHT */}
              <div className="flex items-center gap-3 flex-1 justify-end min-w-0">
                {/* <span className={`${textStyle.bodyMedium} truncate text-right text-[#7E7E7E]`}>
                  {action.url}
                </span> */}
                <ArrowUpRight className="w-5 h-5 text-[#7E7E7E] shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </a>
          )
        })}

      </div>
    </div>

  )
}