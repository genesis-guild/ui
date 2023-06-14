import styled from '@emotion/styled'

export const Container = styled.div`
  border-radius: 25px;
  padding: 9px 9px 16px 9px;
  display: flex;
  flex-direction: column;
  align-items: space-between;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  gap: 12px;
  background: ${({ theme }) => theme.custom.colors.surface1.enable};
`

export const Background = styled.div`
  border-radius: 25px;
  padding: 4px;
  background: ${({ color }) => color};
`

export const BadgeTitle = styled.div`
  width: 280px;
  height: 280px;
  border-radius: 15px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ color }) => color};
`
export const BadgeLevel = styled.div`
  position: absolute;
  padding: 8px 74px;
  perspective: 180px;
  display: flex;
  justify-content: center;
  align-items: center;

  bottom: 0px;

  & > * {
    z-index: 1;
    position: relative;
    top: 6px;
  }

  &:before {
    content: '';
    width: 100%;
    border-radius: 16px 16px 0px 0px;
    height: 100%;
    background: ${({ theme }) => theme.custom.colors.surface2.enable};

    border: 4px solid ${({ theme }) => theme.custom.colors.surface1.enable};
    transform: rotateX(40deg);
    transform-origin: 50% 100%;
    position: absolute;
  }
`

export const Cube = styled.div`
  position: absolute;
  top: -58px;
`

export const CubeLogo = styled.div`
  position: absolute;
  top: -18px;
`
