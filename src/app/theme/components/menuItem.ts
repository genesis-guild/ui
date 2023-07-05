import { Theme } from '@mui/material'

import { custom } from '../custom'

export const menuItem: Theme['components'] = {
  MuiMenuItem: {
    styleOverrides: {
      root: {
        '&:hover': {
          background: custom.colors.surface1.hover,
        },
      },
    },
  },
}
