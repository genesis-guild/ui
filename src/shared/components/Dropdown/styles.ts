import { css } from '@emotion/react'
import styled from '@emotion/styled'

interface Props {
  opened: boolean
}

export const ArrowContainer = styled.div<Props>`
  margin-left: 16px;
  width: 24px;
  height: 24px;
  transition: transform 200ms;

  ${({ opened }) =>
    opened &&
    css`
      transform: rotate(180deg);
    `}
`
