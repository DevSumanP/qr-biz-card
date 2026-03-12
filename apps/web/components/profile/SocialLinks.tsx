import { textStyle } from '@/lib/styles'
import type { SocialLink } from './types'
import Image from 'next/image'

export default function SocialLinks({ links }: { links: SocialLink[] }) {
  if (!links.length) return null
  return (
    <div className="flex flex-col items-center px-[24px] justify-center gap-6">
      {/* <h4 className={textStyle.overline} style={{ textTransform: 'uppercase' }}>Social Links</h4> */}
      <div className="flex items-left justify-start gap-6">
        {links.map(link => {
          return (
            <a key={link.platform} href={link.url} target="_blank" rel="noopener noreferrer"
              aria-label={link.platform}
              className="flex items-center justify-center rounded-full hover:bg-white/20 active:scale-90 transition-all "
            >
              <img src={link.icon || ''} alt={link.platform} className="w-[32px] h-[32px]" />
            </a>
          )
        })}
      </div>
    </div>
  )
}
