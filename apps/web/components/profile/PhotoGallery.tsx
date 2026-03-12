'use client'
import { useState } from 'react'
import { X } from 'lucide-react'
import { componentStyle, textStyle, colorStyle, radiusStyle } from '@/lib/styles'
import type { BusinessPhoto } from './types'

export default function PhotoGallery({ photos }: { photos: BusinessPhoto[] }) {
  const [selected, setSelected] = useState<BusinessPhoto | null>(null)
  if (!photos.length) return null

  return (
    <>
      <div className={`${componentStyle.cardSm} mb-6`}>
        <h2 className={`${textStyle.smallSemibold} ${colorStyle.textInk} mb-3`}>Photos</h2>
        <div className="grid grid-cols-3 gap-1.5">
          {photos.map(photo => (
            <button key={photo.id} onClick={() => setSelected(photo)}
              className={`aspect-square overflow-hidden group ${radiusStyle.card}`}>
              <img src={photo.url} alt={photo.caption ?? 'Photo'}
                className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-105" />
            </button>
          ))}
        </div>
      </div>

      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85"
          onClick={() => setSelected(null)}>
          <button onClick={() => setSelected(null)} aria-label="Close"
            className={`absolute top-4 right-4 w-10 h-10 bg-white/10 flex items-center justify-center ${radiusStyle.pill}`}>
            <X className="w-5 h-5 text-white" />
          </button>
          <div onClick={e => e.stopPropagation()}>
            <img src={selected.url} alt={selected.caption ?? 'Photo'}
              className={`max-w-sm w-full ${radiusStyle.lg}`}
              style={{ maxHeight:'80vh', objectFit:'contain', boxShadow:'0 20px 60px rgba(0,0,0,0.5)' }} />
            {selected.caption && (
              <p className={`text-center ${textStyle.small} text-white/70 mt-3`}>{selected.caption}</p>
            )}
          </div>
        </div>
      )}
    </>
  )
}
