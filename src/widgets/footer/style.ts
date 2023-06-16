import styled from '@emotion/styled'
import { Link as RouterLink } from 'react-router-dom'

export const FooterContainer = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.custom.colors.surface1.enable};
  border-radius: 45px 45px 0px 0px;
  display: flex;
  justify-content: center;
`

export const FooterContent = styled.div`
  max-width: 1600px;
  width: 100%;
  padding: 72px 60px 84px 60px;
  display: flex;
`

export const Left = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
`

export const Right = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
`

export const Category = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
`

export const Links = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

export const Link = styled(RouterLink)`
  &:hover {
    text-decoration: underline;
  }
`
