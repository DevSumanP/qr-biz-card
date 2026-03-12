// =============================================================================
//  lib/styles/tokens.ts  —  SINGLE SOURCE OF TRUTH
//
//  HOW TO UPDATE BRAND WITH DEMBRANDT:
//    1. npx dembrandt <reference-url> --save-output
//       e.g. npx dembrandt stripe.com --save-output
//            npx dembrandt linear.app --save-output
//    2. Open: output/<domain>/<timestamp>.json
//    3. Paste the colors / typography / spacing values below
//    4. Tailwind config + all style files update automatically
//       Nothing else to touch.
// =============================================================================

export const tokens = {

  // ── Colors ─────────────────────────────────────────────────────────────
  // ↓ Paste dembrandt color values here
  colors: {
    primary:  '#1a1a2e',   // Deep navy  — buttons, headings, QR fill
    accent:   '#e94560',   // Red-pink   — CTAs, badges, highlights
    dark:     '#16213e',   // Dark navy  — hover states, sidebar bg
    mid:      '#0f3460',   // Mid navy   — gradients, hero bg
    surface:  '#f8f9ff',   // Off-white  — page backgrounds
    white:    '#ffffff',   // Pure white — cards, overlays
    ink:      '#111111',   // Near-black — primary text
    subtle:   '#333333',   // Dark grey  — secondary text
    muted:    '#666666',   // Mid grey   — captions, placeholder
    border:   '#e2e8f0',   // Light grey — borders, dividers
  },

  // ── Typography ─────────────────────────────────────────────────────────
  // ↓ Paste dembrandt typography values here
  font: {
    family:    'Inter, sans-serif',
    familyKey: 'Inter',
  },

  fontSize: {
    display: '5rem',
    h1:      '3.5rem',
    h2:      '2.5rem',
    h3:      '2rem',
    h4:      '1.5rem',
    h5:      '1.25rem',
    h6:      '1.125rem',
    bodyLg:  '1.125rem',
    body:    '1rem',
    sm:      '0.875rem',
    micro:   '0.75rem',
  },

  fontWeight: {
    regular:   '400',
    medium:    '500',
    semibold:  '600',
    bold:      '700',
    extrabold: '800',
  },

  lineHeight: {
    tight:   '1.10',
    snug:    '1.20',
    normal:  '1.30',
    relaxed: '1.50',
    loose:   '1.65',
    looser:  '1.70',
  },

  // ── Spacing ────────────────────────────────────────────────────────────
  // ↓ Paste dembrandt spacing values here
  spacing: {
    sectionY:        'py-20',
    sectionYSm:      'py-12',
    sectionYXs:      'py-8',
    containerX:      'px-4 sm:px-6 lg:px-8',
    maxWidthPage:    'max-w-7xl',
    maxWidthContent: 'max-w-4xl',
    maxWidthNarrow:  'max-w-2xl',
    maxWidthCard:    'max-w-md',
    cardPadding:     'p-6',
    cardPaddingSm:   'p-4',
    cardPaddingXs:   'p-3',
    gapXl: 'gap-8',
    gapLg: 'gap-6',
    gap:   'gap-4',
    gapSm: 'gap-3',
    gapXs: 'gap-2',
  },

  // ── Border Radius ──────────────────────────────────────────────────────
  // ↓ Paste dembrandt radius values here
  radius: {
    none: '0px',
    sm:   '6px',
    card: '12px',
    lg:   '16px',
    xl:   '20px',
    pill: '9999px',
  },

  // ── Shadows ────────────────────────────────────────────────────────────
  // ↓ Paste dembrandt shadow values here
  shadow: {
    sm:     '0 1px 3px rgba(0,0,0,0.06)',
    md:     '0 4px 12px rgba(0,0,0,0.08)',
    lg:     '0 8px 32px rgba(0,0,0,0.12)',
    xl:     '0 20px 60px rgba(0,0,0,0.16)',
    card:   '0 2px 16px rgba(26,26,46,0.08)',
    accent: '0 4px 20px rgba(233,69,96,0.25)',
  },

  breakpoints: {
    sm: '640px', md: '768px', lg: '1024px', xl: '1280px', '2xl': '1536px',
  },

} as const

export type Tokens = typeof tokens
