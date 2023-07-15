import styled from '@emotion/styled'

export const Container = styled.div`
  width: 100%;
  margin-top: 20px;
  margin-bottom: 150px;
  gap: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const RentAndEarnContainer = styled.div`
  width: 100%;
  height: 600px;
  box-sizing: border-box;
  background-position: 100% 0;
  background-repeat: no-repeat;
  padding-left: 100px;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.custom.colors.surface1.enable};
  border-radius: 50px;
`

export const Benefit = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 70px;
  box-sizing: border-box;
  padding: 0 120px;
  width: 100%;
`
