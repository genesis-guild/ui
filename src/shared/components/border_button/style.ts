import styled from '@emotion/styled'
import { Box, Button as MuiButton } from '@mui/material'

import { BorderProps, ButtonProps } from './ui'

export const Border = styled(Box)<BorderProps>`
  padding: ${({ borderWidth }) => borderWidth};
  background: ${({ borderColor }) => borderColor};
  border-radius: ${({ borderRadius }) => borderRadius};

  > button {
    border-radius: ${({ borderRadius }) => borderRadius};
  }
`

export const Button = styled(MuiButton)<ButtonProps>`
  background: ${({ background }) => background};
  padding: ${({ padding }) => padding};
  width: 100%;
  height: 100%;

  color: inherit;
  font-size: inherit;
  font-weight: inherit;

  transition: background 200ms;

  &:hover {
    background: ${({ hover }) => hover};
  }
`
