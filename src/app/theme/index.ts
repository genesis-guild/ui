import { PaletteMode } from '@mui/material'
import { createTheme } from '@mui/material'
import { Theme } from '@mui/material/styles'
import { components } from './components'
import { custom } from './custom'
import { typography } from './typography'

export const getTheme = (mode = 'dark' as PaletteMode): Theme => {
  return createTheme({
    palette: {
      mode,
      tertiary: {
        dark: custom.colors.surface1.enable,
        primary: custom.colors.surface1.enable,
      },
    },
    typography,
    custom,
    components,
  })
}
