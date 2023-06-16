import styled from '@emotion/styled'
import { Button } from '@mui/material'

export const Surface2Button = styled(Button)`
  background: ${({ theme }) => theme.custom.colors.surface2.enable};

  &:hover {
    background: ${({ theme }) => theme.custom.colors.surface2.hover};
  }
`

export const Container = styled.div`
  width: 100%;
  max-width: 524px;
  gap: 24px;
  display: flex;
  flex-direction: column;
`
