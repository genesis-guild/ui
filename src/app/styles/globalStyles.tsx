import { Global, css } from '@emotion/react'

export const GlobalStyle = (props: any) => (
  <Global
    {...props}
    styles={css`
      html,
      body {
        background: #000000;
      }
      a {
        text-decoration: none;
        color: white;
      }
    `}
  />
)
