/// <reference types="vite/client" />

import {
  Theme as MuiTheme,
  ThemeOptions as MuiThemeOptions,
  TypographyStyle,
} from '@mui/material'
import { CustomTheme, Typography } from 'app/theme/types'

declare module '*.svg' {
  import React = require('react')
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>
  const src: string
  export default src
}

declare global {
  interface Window {
    ethereum: any
    __suiet__: any

    CSS: { registerProperty: (property: any) => void }
  }
}

declare module '@mui/material/styles' {
  interface Theme {
    custom: CustomTheme
    typography: Typography & MuiTheme['typography']
  }

  interface ThemeOptions {
    custom: CustomTheme
    typography: Typography & MuiTheme['typography']
  }

  interface Palette {
    tertiary: {
      dark: string
      primary: string
    }
  }

  interface PaletteOptions {
    tertiary: {
      dark: string
      primary: string
    }
  }

  interface TypographyVariants {
    links: TypographyStyle
    caption1: TypographyStyle
    caption2: TypographyStyle
    label: TypographyStyle
    num_s: TypographyStyle
    num_l: TypographyStyle
  }

  interface TypographyVariantsOptions {
    links: TypographyStyle
    caption1: TypographyStyle
    caption2: TypographyStyle
    label: TypographyStyle
    num_s: TypographyStyle
    num_l: TypographyStyle
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    links: true
    caption1: true
    caption2: true
    label: true
    num_s: true
    num_l: true
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    tertiary: true
  }
}
