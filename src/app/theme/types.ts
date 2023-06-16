import { Theme, TypographyStyle } from '@mui/material'

export interface CustomTheme {
  colors: {
    gradient: {
      primary: {
        _1: string
        _2: string
      }
      secondary: {
        _1: string
        _2: string
      }
    }
    primary: {
      enable: string
      hover: string
      press: string
      loading: string
      disable: string
    }
    secondary: {
      enable: string
      hover: string
      press: string
      loading: string
      disable: string
    }
    surface1: {
      enable: string
      hover: string
      press: string
      loading: string
      disable: string
    }
    surface2: {
      enable: string
      hover: string
      press: string
      loading: string
      disable: string
    }
    surface3: {
      enable: string
      hover: string
      press: string
      loading: string
      disable: string
    }
    neutral: {
      background: string
      outline: string
      secondary_icon: string
      text_dark: string
      text_secondary: string
      secondary: string
    }
    accent: {
      _1: string
      _2: string
      _3: string
      _4: string
      _5: string
      _6: string
      _7: string
    }
    effects: {
      overlay: string
      shadow_s: string
      shadow_m: string
      shadow_xs: string
    }
    systems: {
      error: string
    }
  }
}

export interface ThemeProps {
  theme: Theme
}

// also need to update in vite-env.d.ts
export interface Typography {
  button: TypographyStyle
  links: TypographyStyle
  caption1: TypographyStyle
  caption2: TypographyStyle
  label: TypographyStyle
  num_s: TypographyStyle
  num_l: TypographyStyle
}
