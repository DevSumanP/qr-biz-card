// =============================================================================
//  lib/styles/spacing.ts
//
//  Usage:
//    import { spacingStyle } from '@/lib/styles'
//    <section className={spacingStyle.section}>
//    <div     className={spacingStyle.container}>
//    <div     className={spacingStyle.grid3}>
// =============================================================================

import { tokens } from './tokens'
const s = tokens.spacing

export const spacingStyle = {
  // Sections
  section:          `${s.sectionY}  ${s.containerX}`,
  sectionSm:        `${s.sectionYSm} ${s.containerX}`,
  sectionXs:        `${s.sectionYXs} ${s.containerX}`,

  // Containers
  container:        `${s.maxWidthPage}    mx-auto ${s.containerX}`,
  containerContent: `${s.maxWidthContent} mx-auto ${s.containerX}`,
  containerNarrow:  `${s.maxWidthNarrow}  mx-auto ${s.containerX}`,
  containerCard:    `${s.maxWidthCard}    mx-auto ${s.containerX}`,

  // Card padding
  cardPadding:      s.cardPadding,
  cardPaddingSm:    s.cardPaddingSm,
  cardPaddingXs:    s.cardPaddingXs,

  // Gaps
  gapXl: s.gapXl,
  gapLg: s.gapLg,
  gap:   s.gap,
  gapSm: s.gapSm,
  gapXs: s.gapXs,

  // Flex stacks
  stackXl: `flex flex-col ${s.gapXl}`,
  stackLg: `flex flex-col ${s.gapLg}`,
  stack:   `flex flex-col ${s.gap}`,
  stackSm: `flex flex-col ${s.gapSm}`,

  // Flex rows
  row:     `flex flex-row items-center ${s.gap}`,
  rowSm:   `flex flex-row items-center ${s.gapSm}`,
  rowWrap: `flex flex-row flex-wrap items-center ${s.gap}`,

  // Grids
  grid2: `grid grid-cols-1 sm:grid-cols-2 ${s.gapLg}`,
  grid3: `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ${s.gapLg}`,
  grid4: `grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 ${s.gap}`,
} as const

export type SpacingStyleKey = keyof typeof spacingStyle
