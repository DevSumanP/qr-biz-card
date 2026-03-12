// =============================================================================
//  lib/styles/typography.ts
//  Using semantic Tailwind classes mapped in tailwind.config.ts
// =============================================================================

export const textStyle = {
  heading1: 'text-[#121212] text-[32px] leading-[42px] font-bold tracking-[-0.04em] font-sans',
  heading2: 'text-[#121212] text-[28px] leading-[1.4em] font-bold tracking-[-0.02em] font-sans',
  heading3: 'text-[#121212] text-[22px] leading-[1.4em] font-bold tracking-[-0.02em] font-sans',
  heading4: 'text-[#121212] text-[22px] leading-[1.4em] font-bold tracking-[-0.04em] font-sans',
  heading5: 'text-[#121212] text-[18px] leading-[1.4em] font-bold tracking-[-0.04em] font-sans',

  bodyMedium: 'text-[#7E7E7E] text-[16px] leading-[24px] font-normal tracking-[-0.01em] font-sans',
  bodySmall: 'text-[#7E7E7E] text-[14px] leading-[20px] font-normal tracking-[-0.01em] font-sans',
  bodyXSmall: 'text-[#7E7E7E] text-[13px] leading-[18px] font-normal tracking-[-0.01em] font-sans',

  buttonLabel: 'text-[#121212] text-[16px] leading-[24px] font-medium tracking-[-0.01em] font-sans',

  overline: 'text-[#7E7E7E] text-[12px] leading-[16px] font-normal tracking-[-0.04em] font-mono',
} as const

export type TextStyleKey = keyof typeof textStyle
