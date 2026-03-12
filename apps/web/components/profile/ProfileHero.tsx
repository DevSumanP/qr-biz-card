'use client'
import { textStyle } from '@/lib/styles'
import type { Business } from './types'
import Image from 'next/image'
import { CheckCircle2, Clock } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function ProfileHero({ business }: { business: Business }) {
  const [time, setTime] = useState('')

  useEffect(() => {
    const update = () => {
      const now = new Date()
      const str = now.toTimeString().split(' ')[0]
      const offset = now.toTimeString().split(' ')[1]
      setTime(`${str} ${offset}`)
    }
    update()
    const timer = setInterval(update, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="pt-8 pb-6 px-6 bg-white">
      {/* Top Status Bar */}
      <div className={`flex justify-between items-center mb-10 ${textStyle.overline} uppercase`}>
        <div>EST. {business.estYear || '2024'}</div>
        <div className="flex items-center gap-1.5">
          <Clock className="w-3 h-3" />
          {time}
        </div>
      </div>

      <div className="flex flex-col items-center text-center">
        {/* Squircle Avatar with Presence Dot */}
        <div className="relative mb-[16px]">
          <div className="w-[56px] h-[56px] rounded-[12px] overflow-hidden bg-amber-400 p-1 flex items-center justify-center">
            <div className="w-full h-full rounded-[12px] overflow-hidden border-2 border-white/20">
              <Image
                src={business.logoUrl || "https://images.unsplash.com/photo-1544005313-94ddf0286df2"}
                alt={business.name}
                fill
                className="object-cover rounded-[12px]"
              />
            </div>
          </div>
          {/* Status Dot */}
          <div className="absolute bottom-[-2px] right-[-6px] w-[16px] h-[16px] rounded-full bg-[#16BF5E] border-[2.5px] border-white" />
        </div>

        {/* Name and Title */}
        <div className="flex items-center gap-2">
          <h1 className={`${textStyle.bodyMedium} text-[#121212]`}>
            {business.name}
          </h1>
          {business.verified && (
            <div className="text-sky-500">
              <CheckCircle2 className="w-5 h-5 fill-current" />
            </div>
          )}
        </div>
        <p className={`${textStyle.bodyMedium} text-[#7E7E7E]`}>
          {business.role || 'Professional'}
        </p>

        {/* Bio Text */}
        {/* <div className="max-w-[340px] mt-[24px]">
          <p className={textStyle.bodyMedium}>
            {business.tagline?.split(',').map((part, i, arr) => (
              <span key={i}>
                {part}
                {i < arr.length - 1 ? ',' : ''}
              </span>
            ))}
          </p>
        </div> */}
      </div>
    </div>
  )
}
