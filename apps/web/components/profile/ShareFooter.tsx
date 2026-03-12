'use client'
import { useState } from 'react'
import { CloudSun, MapPin, Share2 } from 'lucide-react'
import { textStyle } from '@/lib/styles'

export default function ShareFooter({ name }: { name: string }) {
  const [copied, setCopied] = useState(false)

  const share = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: name,
          url: window.location.href,
        })
      } else {
        await navigator.clipboard.writeText(window.location.href)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      }
    } catch { }
  }

  return (
    <div className="pb-2 text-center px-4">
      {/* Share Button */}
      <button
        onClick={share}
        className={`w-full flex items-center justify-center gap-2 py-3 px-6 rounded-[10px] bg-[#F4F4F4] text-[#121212] hover:bg-black/[0.02] transition-all active:scale-[0.98] ${textStyle.bodyMedium}`}
      >
        <Share2 className="w-[14px] h-[14px] text-[#121212]" />
        {copied ? 'Link copied!' : 'Share this profile'}
      </button>

      {/* Footer Info */}
      <div className="mt-10 pt-6 border-t border-black/5 flex flex-col items-center w-full">
        <p className={`${textStyle.bodySmall} text-[#7E7E7E] mb-4`}>
          Design & Code by Suman · Powered by Core
        </p>

        <p className={`${textStyle.bodySmall} text-[#7E7E7E] mb-6`}>
          © {new Date().getFullYear()} Core. All rights reserved.
        </p>

        {/* Location + Weather */}
        <div className={`flex justify-between items-center w-full ${textStyle.overline} uppercase`}>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span className={textStyle.bodySmall}>Kathmandu, Nepal</span>
          </div>

          <div className="flex items-center gap-2">
            <CloudSun className="w-4 h-4" />
            <span className={textStyle.bodySmall}>22°C</span>
          </div>
        </div>
      </div>
    </div>
  )
}