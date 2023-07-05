import { Theme } from '@mui/material'

export const appBar: Theme['components'] = {
  MuiAppBar: {
    styleOverrides: {
      root: {
        boxShadow: 'none',
      },
    },
  },
}
