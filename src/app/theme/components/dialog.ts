import { Theme } from '@mui/material'

import { custom } from '../custom'

export const dialog: Theme['components'] = {
  MuiDialog: {
    styleOverrides: {
      paper: {
        padding: '48px 32px',
        position: 'relative',
        background: custom.colors.surface1.enable,
        borderRadius: '25px',
        boxShadow: custom.colors.effects.shadow_m,
      },
    },
  },
}
