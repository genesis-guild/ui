import { PaletteMode } from '@mui/material'
import { Theme, createTheme } from '@mui/material/styles'

export const getTheme = (mode = 'dark' as PaletteMode): Theme => {
  return createTheme({
    palette: {
      mode,
    },
  })
}
