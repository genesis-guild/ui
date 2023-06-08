import styled from '@emotion/styled'

export const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 4px;
  gap: 4px;
  background: #131419;
  border-radius: 15px;
  position: relative;
  right: 50px;
`

export const MenuItemLink = styled.div`
  font-family: 'Inter';
  font-weight: 500;
  padding: 10px 16px;
  font-size: 15px;
  * {
    text-decoration: none;
    color: white;
  }
`
