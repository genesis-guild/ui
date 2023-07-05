import { Theme } from '@mui/material'

import { custom } from '../custom'

export const listItemButton: Theme['components'] = {
  MuiListItemButton: {
    styleOverrides: {
      root: {
        '&:hover': {
          background: custom.colors.surface1.hover,
        },
      },
    },
  },
}
