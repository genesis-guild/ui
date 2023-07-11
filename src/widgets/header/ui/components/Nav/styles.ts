import styled from '@emotion/styled'

export const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 4px;
  gap: 4px;
  background: ${({ theme }) => theme.custom.colors.surface1.enable};
  border-radius: 15px;
`
