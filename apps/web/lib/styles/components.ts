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

  // ── Buttons ───────────────────────────────────────────────────────────
  btnPrimary: j(
    colorStyle.bgPrimary, colorStyle.textWhite,
    radiusStyle.card, textStyle.btnLabel,
    'px-6 py-3 inline-flex items-center justify-center gap-2',
    'border-0 cursor-pointer transition-opacity duration-200',
    'hover:opacity-90 active:opacity-100',
  ),

  btnAccent: j(
    colorStyle.bgAccent, colorStyle.textWhite,
    radiusStyle.card, textStyle.btnLabel,
    'px-6 py-3 inline-flex items-center justify-center gap-2',
    'border-0 cursor-pointer transition-opacity duration-200',
    'hover:opacity-90 active:opacity-100',
  ),

  btnOutline: j(
    colorStyle.bgWhite, colorStyle.textInk, colorStyle.borderDefault,
    radiusStyle.card, textStyle.btnLabel,
    'px-6 py-3 inline-flex items-center justify-center gap-2',
    'cursor-pointer transition-colors duration-200 hover:bg-gray-50',
  ),

  btnGhost: j(
    'bg-transparent', colorStyle.textSubtle,
    radiusStyle.card, textStyle.smallSemibold,
    'px-4 py-2 inline-flex items-center justify-center gap-2',
    'border-0 cursor-pointer transition-colors duration-200 hover:bg-gray-50',
  ),

  // ── Badges ────────────────────────────────────────────────────────────
  badge:        j(colorStyle.bgPrimarySubtle, colorStyle.textPrimary, radiusStyle.pill, textStyle.micro, 'px-3 py-1 font-medium inline-flex items-center'),
  badgeAccent:  j(colorStyle.bgAccentSubtle,  colorStyle.textAccent,  radiusStyle.pill, textStyle.micro, 'px-3 py-1 font-medium inline-flex items-center'),
  badgeSuccess: j('bg-green-50 text-green-700',                       radiusStyle.pill, textStyle.micro, 'px-3 py-1 font-medium inline-flex items-center'),
  badgeDanger:  j('bg-red-50 text-red-600',                           radiusStyle.pill, textStyle.micro, 'px-3 py-1 font-medium inline-flex items-center'),

  // ── Icon containers ───────────────────────────────────────────────────
  iconBox:      j(colorStyle.iconContainer, radiusStyle.card, 'w-10 h-10 flex items-center justify-center flex-shrink-0'),
  iconBoxLg:    j(colorStyle.iconContainer, radiusStyle.card, 'w-14 h-14 flex items-center justify-center flex-shrink-0'),
  iconBoxRound: j(colorStyle.bgWhite, colorStyle.borderDefault, shadowStyle.sm, radiusStyle.pill, 'w-10 h-10 flex items-center justify-center flex-shrink-0'),

  // ── Form inputs ───────────────────────────────────────────────────────
  input: j(
    colorStyle.bgWhite, colorStyle.borderDefault, colorStyle.textInk,
    radiusStyle.card, textStyle.body,
    'w-full px-4 py-3 outline-none transition-colors duration-150',
    'focus:border-primary focus:ring-2 focus:ring-primary/10',
    'placeholder:text-muted',
  ),

  // ── Misc ──────────────────────────────────────────────────────────────
  divider:      'border-t border-border my-4',
  sectionLabel: j(colorStyle.textAccent, textStyle.label, 'mb-3 block'),

} as const

export type ComponentStyleKey = keyof typeof componentStyle
