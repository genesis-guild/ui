import styled from '@emotion/styled'

export const Elipse = styled.div`
  border-radius: 50%;
  margin-top: -200px;
  border: 1px solid ${({ theme }) => theme.custom.colors.surface2.enable};
  position: absolute;
`

export const Container = styled.div`
  width: 100%;
  height: 480px;
  position: relative;
  overflow: hidden;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.custom.colors.surface1.enable};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;

  ${Elipse}:nth-child(1) {
    width: 493px;
    height: 493px;
  }

  ${Elipse}:nth-child(2) {
    width: 690px;
    height: 690px;
  }

  ${Elipse}:nth-child(3) {
    width: 1100px;
    height: 1100px;
  }

  &:before,
  &:after {
    content: '';
    position: absolute;
    width: 200px;
    height: 200px;
    filter: blur(115px);
  }

  &:before {
    left: 0;
    top: 0;
    background: ${({ theme }) => theme.custom.colors.primary.enable};
  }

  &:after {
    right: 0;
    bottom: 0;
    background: ${({ theme }) => theme.custom.colors.neutral.secondary};
  }
`

export const Socials = styled.div`
  display: flex;
  gap: 16px;
`
