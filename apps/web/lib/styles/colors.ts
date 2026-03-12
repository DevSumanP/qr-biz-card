// =============================================================================
//  lib/styles/colors.ts
//  Using semantic Tailwind classes mapped in tailwind.config.ts
// =============================================================================

export const colorStyle = {
  // Backgrounds
  bgPrimary: 'bg-primary',
  bgAccent: 'bg-accent',
  bgDark: 'bg-dark',
  bgMid: 'bg-mid',
  bgSurface: 'bg-surface',
  bgWhite: 'bg-white',
  bgMuted: 'bg-border',

  // Text
  textPrimary: 'text-primary',
  textAccent: 'text-accent',
  textInk: 'text-ink',
  textSubtle: 'text-subtle',
  textMuted: 'text-muted',
  textWhite: 'text-white',
  textSurface: 'text-surface',

  // Borders
  borderDefault: 'border border-border',
  borderAccent: 'border border-accent',
  borderPrimary: 'border border-primary',

  // Gradients
  gradientHero: 'bg-gradient-to-br from-primary to-mid',
  gradientPrimary: 'bg-gradient-to-r from-primary to-dark',
  gradientAccent: 'bg-gradient-to-r from-accent to-[#c73652]',

  // Subtle tints
  bgPrimarySubtle: 'bg-primary/10',
  bgAccentSubtle: 'bg-accent/10',
  bgWhiteSubtle: 'bg-white/10',
  iconContainer: 'bg-accent/10',
} as const

export type ColorStyleKey = keyof typeof colorStyle
