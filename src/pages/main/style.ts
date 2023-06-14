import styled from '@emotion/styled'
import { Button } from '@mui/material'

export const Container = styled.div`
  width: 100%;
  margin-top: 20px;
  margin-bottom: 150px;
  gap: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const RentAndEarn = styled.div`
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

export const Surface2Button = styled(Button)`
  background: ${({ theme }) => theme.custom.colors.surface2.enable};

  &:hover {
    background: ${({ theme }) => theme.custom.colors.surface2.hover};
  }
`

export const RentAndEarnInner = styled.div`
  width: 100%;
  max-width: 524px;
  gap: 24px;
  display: flex;
  flex-direction: column;
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
