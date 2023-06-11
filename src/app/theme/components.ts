import { Theme } from '@mui/material'
import { custom } from './custom'

window.CSS.registerProperty({
  name: '--1',
  syntax: '<color>',
  inherits: false,
  initialValue: custom.colors.gradient.primary._1,
})

window.CSS.registerProperty({
  name: '--2',
  syntax: '<color>',
  inherits: false,
  initialValue: custom.colors.gradient.primary._2,
})

export const components: Theme['components'] = {
  MuiButton: {
    styleOverrides: {
      root: ({ ownerState }) => {
        switch (ownerState.color) {
          case 'primary':
            return {
              '&.Mui-disabled': {
                background: custom.colors.primary.disable,
                color: custom.colors.neutral.text_secondary,
              },
            }
          case 'secondary':
            return {
              '&.Mui-disabled': {
                background: custom.colors.secondary.disable,
                color: custom.colors.neutral.text_secondary,
              },
            }
          case 'tertiary':
            return {
              '&.Mui-disabled': {
                background: custom.colors.surface1.disable,
                color: custom.colors.neutral.text_dark,
              },
            }
          default:
            return
        }
      },
    },
    defaultProps: {
      disableRipple: true,
    },
    variants: [
      {
        props: { variant: 'contained' },
        style: {
          textTransform: 'none',
          background: `linear-gradient(225deg, var(--1) 0%, var(--2) 100%)`,
          transition: '--1 300ms, --2 300ms',
          borderRadius: '15px',
          boxShadow: 'none',
          color: 'white',
          '&:hover': {
            '--1': custom.colors.gradient.primary._2,
            '--2': custom.colors.gradient.primary._1,
            boxShadow: 'none',
          },
          '&:active': {
            background: custom.colors.primary.press,
            boxShadow: 'none',
          },
        },
      },
      {
        props: { variant: 'contained', color: 'secondary' },
        style: {
          '--1': custom.colors.gradient.secondary._1,
          '--2': custom.colors.gradient.secondary._2,
          background: `linear-gradient(225deg, var(--1) 0%, var(--2) 100%)`,
          '&:hover': {
            '--1': custom.colors.gradient.secondary._2,
            '--2': custom.colors.gradient.secondary._1,
          },
          '&:active': {
            background: custom.colors.secondary.press,
          },
        },
      },
      {
        props: { variant: 'contained', color: 'tertiary' },
        style: {
          background: custom.colors.surface1.enable,
          transition: 'background 300ms',
          '&:hover': {
            background: custom.colors.surface1.hover,
          },
          '&:active': {
            background: custom.colors.surface1.press,
          },
        },
      },
      {
        props: { variant: 'contained', size: 'large' },
        style: {
          padding: '16px 36px',
        },
      },
      {
        props: { variant: 'contained', size: 'medium' },
        style: {
          padding: '12px 24px',
        },
      },
      {
        props: { variant: 'contained', size: 'small' },
        style: {
          padding: '6px 16px',
        },
      },
    ],
  },
  MuiDialog: {
    styleOverrides: {
      paper: {
        padding: '32px',
        position: 'relative',
        background: custom.colors.surface1.enable,
        borderRadius: '25px',
        boxShadow: custom.colors.effects.shadow_m,
      },
    },
  },
  MuiAppBar: {
    styleOverrides: {
      root: {
        boxShadow: 'none',
      },
    },
  },
  MuiPopover: {
    styleOverrides: {
      paper: {
        background: custom.colors.surface2.enable,
        borderRadius: '15px',
        padding: '8px 16px',
      },
    },
  },
  MuiMenuItem: {
    styleOverrides: {
      root: {
        '&:hover': {
          background: custom.colors.surface1.hover,
        },
      },
    },
  },
  MuiListItemButton: {
    styleOverrides: {
      root: {
        '&:hover': {
          background: custom.colors.surface1.hover,
        },
      },
    },
  },
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
