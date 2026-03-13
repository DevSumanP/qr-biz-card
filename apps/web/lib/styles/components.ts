// =============================================================================
//  lib/styles/components.ts  —  Pre-built combos
//
//  Usage:
//    import { componentStyle } from '@/lib/styles'
//    <div    className={componentStyle.card}>
//    <button className={componentStyle.btnPrimary}>
//    <span   className={componentStyle.badge}>
// =============================================================================

import { colorStyle }   from './colors'
import { textStyle }    from './typography'
import { spacingStyle } from './spacing'
import { radiusStyle, shadowStyle } from './radius-shadows'

const j = (...cls: string[]) => cls.join(' ')

export const componentStyle = {

  // ── Cards ─────────────────────────────────────────────────────────────
  card:        j(colorStyle.bgWhite,   radiusStyle.card, shadowStyle.card,   colorStyle.borderDefault, spacingStyle.cardPadding),
  cardSm:      j(colorStyle.bgWhite,   radiusStyle.card, shadowStyle.card,   colorStyle.borderDefault, spacingStyle.cardPaddingSm),
  cardSurface: j(colorStyle.bgSurface, radiusStyle.card, shadowStyle.sm,     colorStyle.borderDefault, spacingStyle.cardPadding),

  
} as const

export type ComponentStyleKey = keyof typeof componentStyle
