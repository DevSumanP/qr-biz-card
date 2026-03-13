import { ShoppingBag } from 'lucide-react'
import { componentStyle, textStyle, colorStyle, radiusStyle } from '@/lib/styles'
import type { Product } from './types'

export default function ProductGrid({ products }: { products: Product[] }) {
  const available = products.filter(p => p.isAvailable)
  if (!available.length) return null

  return (
    <div className={`${componentStyle.cardSm} mb-6`}>
      <h2 className={`${textStyle.bodyMedium} ${colorStyle.textInk} mb-3`}>Products &amp; Services</h2>
      <div className="space-y-3">
        {available.map(product => (
          <div key={product.id} className={`flex items-center gap-3 p-2 ${radiusStyle.card} ${colorStyle.bgSurface}`}>
            <div className={`w-14 h-14 flex-shrink-0 overflow-hidden flex items-center justify-center ${radiusStyle.card} ${colorStyle.bgAccentSubtle}`}>
              {product.imageUrl
                ? <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover" />
                : <ShoppingBag className={`w-5 h-5 ${colorStyle.textAccent}`} />
              }
            </div>
            <div className="flex-1 min-w-0">
              <p className={`${textStyle.bodyMedium} ${colorStyle.textInk} truncate`}>{product.name}</p>
              {product.description && (
                <p className={`${textStyle.bodyXSmall} ${colorStyle.textMuted} mt-0.5 line-clamp-1`}>{product.description}</p>
              )}
            </div>
            {product.price && (
              <span className={`${textStyle.bodyMedium} ${colorStyle.textPrimary} flex-shrink-0`}>{product.price}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
