import { Theme } from '@mui/material'

export const typograpgy: Theme['components'] = {
  MuiTypography: {
    variants: [
      {
        props: { variant: 'button' },
        style: {
          textTransform: 'none',
        },
      },
    ],
  },
}
