import styled from '@emotion/styled'

export const Container = styled.div`
  height: 820px;
  width: 100%;
  background-color: ${({ theme }) => theme.custom.colors.surface1.enable};
  background-size: cover;
  border-radius: 50px;
  margin-top: 20px;
  margin-bottom: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
`
