import { Theme } from '@mui/material'

import { custom } from '../custom'

export const select: Theme['components'] = {
  MuiSelect: {
    styleOverrides: {
      outlined: {
        background: custom.colors.surface2.enable,
        borderRadius: '15px',
        // padding: '16px 24px',
      },
      icon: {
        width: '12px',
        height: '8px',
        right: '16px',
        top: 'calc(50% - 4px)',
      },
    },
  },
  MuiOutlinedInput: {
    styleOverrides: {
      notchedOutline: {
        border: 'none',
      },
    },
  },
}
