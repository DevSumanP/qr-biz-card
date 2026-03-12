// =============================================================================
//  lib/styles/radius-shadows.ts
//  Using semantic Tailwind classes mapped in tailwind.config.ts
// =============================================================================

export const radiusStyle = {
  none: 'rounded-none',
  sm: 'rounded-sm',
  card: 'rounded-card',
  lg: 'rounded-lg',
  xl: 'rounded-xl',
  pill: 'rounded-full',
} as const

export const shadowStyle = {
  none: 'shadow-none',
  sm: 'shadow-sm',
  md: 'shadow-md',
  lg: 'shadow-lg',
  xl: 'shadow-xl',
  card: 'shadow-card',
  accent: 'shadow-accent',
} as const

export type RadiusStyleKey = keyof typeof radiusStyle
export type ShadowStyleKey = keyof typeof shadowStyle
