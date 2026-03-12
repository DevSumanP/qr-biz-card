// =============================================================================
//  lib/styles/index.ts
//
//  Import everything from one place:
//
//    import {
//      textStyle, colorStyle, spacingStyle,
//      radiusStyle, shadowStyle, componentStyle, tokens
//    } from '@/lib/styles'
// =============================================================================

export { tokens }                       from './tokens'
export { colorStyle }                   from './colors'
export { textStyle }                    from './typography'
export { spacingStyle }                 from './spacing'
export { radiusStyle, shadowStyle }     from './radius-shadows'
export { componentStyle }               from './components'

export type { Tokens }          from './tokens'
export type { ColorStyleKey }   from './colors'
export type { TextStyleKey }    from './typography'
export type { SpacingStyleKey } from './spacing'
export type { RadiusStyleKey, ShadowStyleKey } from './radius-shadows'
export type { ComponentStyleKey } from './components'
