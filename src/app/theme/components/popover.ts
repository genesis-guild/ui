import { Theme } from '@mui/material'

import { custom } from '../custom'

export const popover: Theme['components'] = {
  MuiPopover: {
    styleOverrides: {
      paper: {
        background: custom.colors.surface2.enable,
        borderRadius: '15px',
        padding: '8px 16px',
      },
    },
  },
}
