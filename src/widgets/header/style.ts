import styled from '@emotion/styled'

export const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 4px;
  gap: 4px;
  background: ${({ theme }) => theme.custom.colors.surface1.enable};
  border-radius: 15px;
`

export const Profile = styled.div`
  display: flex;
  position: relative;
  height: 48px;
`

export const Avatar = styled.div`
  position: relative;
  bottom: 8px;
  margin-left: -14px;
`

export const RightPanel = styled.div`
  display: flex;
  gap: 8px;
`
