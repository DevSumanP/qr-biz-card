'use client'
import { useState } from 'react'
import { Clock, ChevronDown, ChevronUp } from 'lucide-react'
import { textStyle } from '@/lib/styles'
import type { BusinessHours as T } from './types'

const DAYS = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'] as const

export default function BusinessHours({ hours }: { hours: T }) {
  const [open, setOpen] = useState(false)
  const todayKey = DAYS[new Date().getDay() === 0 ? 6 : new Date().getDay() - 1]

  return (
    <div className="w-full px-4 mb-6"> {/* 16px page spacing */}

      <div className="bg-white shadow-md rounded-xl border border-black/[0.04] overflow-hidden">
        
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex items-center justify-between p-[16px] text-left transition-colors hover:bg-black/[0.02]"
          aria-expanded={open}
        >
          <div className="flex items-center gap-4">
            <Clock className="w-[20px] h-[20px] text-[#7E7E7E]" />
            <div className="flex flex-col">
              <h4 className={textStyle.bodyMedium}>Business Hours</h4>

              {!open && hours[todayKey] && (
                <p className={`${textStyle.overline} !text-[14px] text-[#7E7E7E]`}>
                  Today: {hours[todayKey] === 'Closed' ? 'Closed' : hours[todayKey]}
                </p>
              )}

            </div>
          </div>

          {open
            ? <ChevronUp className="w-5 h-5 text-[#7E7E7E]" />
            : <ChevronDown className="w-5 h-5 text-[#7E7E7E]" />
          }
        </button>

        {open && (
          <div className="px-6 pb-6 pt-2 space-y-3 animate-in fade-in slide-in-from-top-2">
            {DAYS.map(day => {
              const val = hours[day]
              const isToday = day === todayKey
              const isClosed = val === 'Closed' || !val

              return (
                <div
                  key={day}
                  className={`flex flex-col gap-[8px] py-1 transition-colors ${
                    isToday ? 'bg-black/[0.02] -mx-6 px-6' : ''
                  }`}
                >
                  <span className={`${textStyle.bodyMedium} capitalize ${isToday ? 'font-semibold text-[#333]' : 'text-[#7E7E7E]'}`}>
                    {day}
                  </span>

                  <span className={`${textStyle.overline} !text-[14px] ${isClosed ? 'text-red-500' : 'text-[#7E7E7E]'}`}>
                    {val ?? 'Closed'}
                  </span>
                </div>
              )
            })}
          </div>
        )}

      </div>
    </div>
  )
}