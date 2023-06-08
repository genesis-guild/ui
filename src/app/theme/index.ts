import { PaletteMode } from '@mui/material'
import { Theme, createTheme } from '@mui/material/styles'

export const getTheme = (mode = 'dark' as PaletteMode): Theme => {
  return createTheme({
    palette: {
      mode,
    },
    components: {
      MuiButton: {
        variants: [
          {
            props: { variant: 'contained' },
            style: {
              textTransform: 'none',
              background: 'linear-gradient(225deg, #8850FE 0%, #5114D2 100%)',
              borderRadius: '15px',
              color: 'white',
            },
          },
          {
            props: { variant: 'contained', size: 'large' },
            style: {
              padding: '10px 24px',
            },
          },
        ],
      },
    },
  })
}
