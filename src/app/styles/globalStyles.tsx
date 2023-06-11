import { Global, css } from '@emotion/react'
import { useTheme } from '@mui/material'

export const GlobalStyle = () => {
  const theme = useTheme()
  return (
    <Global
      styles={css`
        html,
        body {
          background: ${theme.custom.colors.neutral.background};
        }
        a {
          text-decoration: none;
          color: white;
        }
        ::-webkit-scrollbar {
          width: 8px;
        }

        /* Track */
        ::-webkit-scrollbar-track {
          background: ${theme.custom.colors.surface1.enable};
        }

        /* Handle */
        ::-webkit-scrollbar-thumb {
          background: ${theme.custom.colors.surface2.enable};
          border-radius: 30px;
        }

        /* Handle on hover */
        ::-webkit-scrollbar-thumb:hover {
          background: ${theme.custom.colors.surface2.hover};
        }
      `}
    />
  )
}
