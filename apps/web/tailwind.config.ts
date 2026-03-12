// =============================================================================
//  tailwind.config.ts
//  Reads all values from lib/styles/tokens.ts — one source of truth.
//  Update tokens.ts → Tailwind updates automatically.
// =============================================================================

import type { Config } from 'tailwindcss'
import { tokens } from './lib/styles/tokens'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx,mdx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: tokens.colors.primary,
        accent:  tokens.colors.accent,
        dark:    tokens.colors.dark,
        mid:     tokens.colors.mid,
        surface: tokens.colors.surface,
        ink:     tokens.colors.ink,
        subtle:  tokens.colors.subtle,
        muted:   tokens.colors.muted,
        border:  tokens.colors.border,
      },
      fontFamily: {
        sans:    [tokens.font.familyKey, 'sans-serif'],
        display: [tokens.font.familyKey, 'sans-serif'],
      },
      fontSize: {
        'display': [tokens.fontSize.display, { lineHeight: tokens.lineHeight.tight,   fontWeight: tokens.fontWeight.extrabold }],
        'h1':      [tokens.fontSize.h1,      { lineHeight: tokens.lineHeight.tight,   fontWeight: tokens.fontWeight.bold      }],
        'h2':      [tokens.fontSize.h2,      { lineHeight: tokens.lineHeight.snug,    fontWeight: tokens.fontWeight.semibold  }],
        'h3':      [tokens.fontSize.h3,      { lineHeight: tokens.lineHeight.snug,    fontWeight: tokens.fontWeight.semibold  }],
        'h4':      [tokens.fontSize.h4,      { lineHeight: tokens.lineHeight.normal,  fontWeight: tokens.fontWeight.semibold  }],
        'h5':      [tokens.fontSize.h5,      { lineHeight: tokens.lineHeight.normal,  fontWeight: tokens.fontWeight.semibold  }],
        'h6':      [tokens.fontSize.h6,      { lineHeight: tokens.lineHeight.relaxed, fontWeight: tokens.fontWeight.semibold  }],
        'body-lg': [tokens.fontSize.bodyLg,  { lineHeight: tokens.lineHeight.looser  }],
        'body':    [tokens.fontSize.body,    { lineHeight: tokens.lineHeight.loose   }],
        'sm':      [tokens.fontSize.sm,      { lineHeight: tokens.lineHeight.relaxed }],
        'micro':   [tokens.fontSize.micro,   { lineHeight: tokens.lineHeight.snug    }],
      },
      borderRadius: {
        sm:   tokens.radius.sm,
        card: tokens.radius.card,
        lg:   tokens.radius.lg,
        xl:   tokens.radius.xl,
        pill: tokens.radius.pill,
      },
      boxShadow: {
        sm:     tokens.shadow.sm,
        md:     tokens.shadow.md,
        lg:     tokens.shadow.lg,
        xl:     tokens.shadow.xl,
        card:   tokens.shadow.card,
        accent: tokens.shadow.accent,
      },
      screens: tokens.breakpoints,
    },
  },
  plugins: [],
}

export default config
