import styled from '@emotion/styled'
import { Tab, Tabs } from '@mui/material'

export const Container = styled.div`
  width: 100%;
  background: linear-gradient(
    90deg,
    #131419 -0.54%,
    rgba(19, 20, 25, 0) 24.18%,
    rgba(19, 20, 25, 0) 48.9%,
    rgba(19, 20, 25, 0) 73.62%,
    #131419 98.34%
  );
  display: flex;
  align-items: center;
  border-radius: 50px;
  height: 544px;
  position: relative;
`

export const DefaultBackground = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.custom.colors.neutral.background};
  display: flex;
  align-items: center;
  border-radius: 50px;
  height: 544px;
`

export const GradientBorder = styled.div`
  background: linear-gradient(180deg, #202126 0%, rgba(32, 33, 38, 0) 100%);
  padding: 1px;
  border-radius: 15px;
`

export const TabsPanel = styled(Tabs)`
  border-radius: 15px;
  min-height: 0;
  padding: 4px;
  background: ${({ theme }) => theme.custom.colors.surface1.enable};

  .MuiTabs-indicator {
    display: none;
  }

  .MuiTabs-flexContainer {
    gap: 4px;
  }
`

export const TabsContainer = styled.div`
  top: -30px;
  position: absolute;
  display: flex;
  justify-content: center;
  width: 100%;
`

export const TabPanelItem = styled(Tab)<{ color: string }>`
  &.MuiButtonBase-root {
    ${({ theme }) => theme.typography.links}
    text-transform: none;
    border-radius: 12px;
    transition: background 300ms;
    padding: 10px 16px;
    min-height: 0;
    color: white;
    &:hover {
      background: ${({ theme }) => theme.custom.colors.surface1.hover};
    }
  }

  box-sizing: border-box;

  &.Mui-selected {
    box-shadow: ${({ theme }) => theme.custom.colors.effects.shadow_m};

    &::before {
      content: '';
      position: absolute;
      inset: 0;
      border-radius: 12px;
      padding: 2px;
      background: ${({ color }) => color};
      -webkit-mask: ${({ color }) => color} content-box, ${({ color }) => color};
      -webkit-mask-composite: xor;
      mask-composite: exclude;
    }
  }
`

export const TabBlockBorder = styled.div`
  background: linear-gradient(
    90.15deg,
    #202126 0.13%,
    rgba(32, 33, 38, 0) 25.06%,
    rgba(32, 33, 38, 0) 50%,
    rgba(32, 33, 38, 0) 74.93%,
    #202126 99.87%
  );
  border-radius: 50px;
  height: 544px;
  padding: 1px;
  width: 100%;
`

export const TabContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 22px;
`

export const TabText = styled.div`
  display: flex;
  position: relative;
  width: 50%;
  justify-content: center;
  align-items: center;
`

export const Text = styled.div`
  position: absolute;
  justify-content: center;
  align-items: center;
  top: 0;
  width: 100%;
  height: 100%;
  left: 0;
  display: flex;
  & > * {
    width: 460px;
    transition: opacity 400ms;
  }
`

export const TabImageContainer = styled.div`
  display: flex;
  width: 50%;
  margin-right: -24px;
`

interface SizeProps {
  width: string
  height: string
}

export const Elipse = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    #131419 -0.54%,
    rgba(19, 20, 25, 0) 24.18%,
    rgba(19, 20, 25, 0) 48.9%,
    rgba(19, 20, 25, 0) 73.62%,
    #131419 98.34%
  );
  border-radius: 50%;
  justify-content: center;
`

export const ElipseBorder = styled.div<SizeProps>`
  display: flex;
  align-items: center;
  padding: 1px;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background: linear-gradient(
    90.15deg,
    #202126 0.13%,
    rgba(32, 33, 38, 0) 25.06%,
    rgba(32, 33, 38, 0) 50%,
    rgba(32, 33, 38, 0) 74.93%,
    #202126 99.87%
  );
  border-radius: 50%;
  justify-content: center;
`

export const ColoredElipse = styled.div`
  background: ${({ color }) => color};
  transition: background 500ms;
  filter: blur(50px);
  border-radius: 50%;
  transform: rotate(4deg);
  position: absolute;
  width: 240px;
  height: 240px;
`

export const PlayerCardContainer = styled.div<{ show: boolean }>`
  background: ${({ theme }) => theme.custom.colors.primary.enable};
  border-radius: 20px;
  box-shadow: 3.68345px 7.36691px 11.0504px rgba(5, 5, 5, 0.6);
  position: relative;
  transform: rotate(4deg) translateX(${({ show }) => (show ? '0px' : '24px')})
    translateY(${({ show }) => (show ? '0px' : '-24px')});
  padding: 4px;
  width: 240px;
  height: 234px;
  transition: opacity 300ms, transform 300ms;
  opacity: ${({ show }) => Number(show)};
  position: absolute;
`

export const PlayerName = styled.div`
  position: absolute;
  perspective: 140px;
  display: flex;
  justify-content: center;
  align-items: center;

  bottom: 12px;
  padding: 8px 44px;
  left: 48px;

  & > * {
    z-index: 1;
    position: relative;
    top: 5px;
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

export const PlayerImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  position: relative;
  top: 28px;
`

export const PlayerCube = styled.div`
  position: absolute;
  transform: rotate(-2.5deg);
  top: -54px;
  display: flex;
  justify-content: center;
  width: calc(100% - 24px);

  filter: drop-shadow(0px 5.66339px 4.85433px rgba(70, 68, 68, 0.6));
`

export const NFTOwnesrCardContainer = styled.div<{ show: boolean }>`
  background: rgba(19, 20, 25, 0.5);
  position: absolute;
  transition: opacity 300ms, transform 300ms;
  backdrop-filter: blur(15.8663px);
  opacity: ${({ show }) => Number(show)};
  border-radius: 22px;
  padding: 8px;
  display: flex;
  width: 231px;
  height: 286px;
  transform: rotate(6deg) translateX(${({ show }) => (show ? '0px' : '24px')})
    translateY(${({ show }) => (show ? '0px' : '-24px')});
  flex-direction: column;
  gap: 16px;
`

export const NFTOwnesrCardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 22px;
  width: 100%;
  height: 216px;
  background: ${({ theme }) => theme.custom.colors.accent._4};
`

export const TopText = styled.div`
  perspective: 140px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  bottom: 12px;

  & > * {
    z-index: 1;
    position: relative;
  }

  &:before {
    content: '';
    width: 100%;
    padding: 4px 30px;
    border-radius: 0px 0px 16px 16px;
    height: 100%;
    background: ${({ theme }) => theme.custom.colors.accent._4};

    border: 4px solid ${({ theme }) => theme.custom.colors.surface1.enable};
    transform: rotateX(-30deg);
    transform-origin: 100% 50%;
    position: absolute;
  }
`

export const BottomText = styled.div`
  perspective: 140px;
  display: flex;
  justify-content: center;
  padding: 4px 34px;
  align-items: center;
  position: relative;
  top: 12px;

  & > * {
    z-index: 1;
    position: relative;
    top: 4px;
  }

  &:before {
    content: '';
    width: 100%;
    border-radius: 16px 16px 0px 0px;
    height: 100%;
    background: ${({ theme }) => theme.custom.colors.surface2.enable};

    border: 4px solid ${({ theme }) => theme.custom.colors.surface1.enable};
    transform: rotateX(30deg);
    transform-origin: 50% 100%;
    position: absolute;
  }
`

export const GamesCardContainer = styled.div<{ show: boolean }>`
  background: ${({ theme }) => theme.custom.colors.accent._7};
  border-radius: 13px;
  position: relative;
  transform: rotate(4deg) translateX(${({ show }) => (show ? '0px' : '24px')})
    translateY(${({ show }) => (show ? '0px' : '-24px')});
  padding: 4px;
  width: 228px;
  height: 167px;
  transition: opacity 300ms, transform 300ms;
  opacity: ${({ show }) => Number(show)};
  position: absolute;
`

export const GamesCardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  gap: 20px;
  overflow: hidden;
  border-radius: 13px;
  border: 8px solid ${({ theme }) => theme.custom.colors.surface1.enable};
  box-sizing: border-box;
  width: 100%;
  height: 167px;
  background: ${({ theme }) => theme.custom.colors.accent._7};
`

export const GamesText = styled.div`
  perspective: 140px;
  display: flex;
  justify-content: center;
  padding: 4px 34px;
  align-items: center;

  & > * {
    z-index: 1;
    position: relative;
    top: 4px;
  }

  &:before {
    content: '';
    width: 100%;
    border-radius: 16px 16px 0px 0px;
    height: 100%;
    background: ${({ theme }) => theme.custom.colors.accent._7};

    border: 8px solid ${({ theme }) => theme.custom.colors.surface1.enable};
    transform: rotateX(30deg);
    transform-origin: 50% 100%;
    position: absolute;
  }
`

export const VentureCapitalsCardContainer = styled.div<{ show: boolean }>`
  transform: rotate(4deg) translateX(${({ show }) => (show ? '0px' : '24px')})
    translateY(${({ show }) => (show ? '0px' : '-24px')});
  transition: opacity 300ms, transform 300ms;
  opacity: ${({ show }) => Number(show)};
  position: absolute;
`
