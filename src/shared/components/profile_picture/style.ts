import styled from '@emotion/styled'

import { Sizes } from './types'

interface ContainerProps {
  width: string
  height: string
  color: string
}

export const Container = styled.div<ContainerProps>`
  border: 4px solid ${({ theme }) => theme.custom.colors.surface3.enable};
  background: ${({ color }) => color};
  border-radius: 20px;
  display: flex;
  align-items: center;
  padding: 4px;
  justify-content: center;
  max-width: ${({ width }) => width};
  max-height: ${({ height }) => height};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  box-sizing: border-box;
`

export const LvlBorder = styled.div`
  display: flex;
  align-items: flex-end;
  width: 100%;
  height: 100%;
  justify-content: center;
  border-radius: 13px;
  box-sizing: border-box;
  padding-bottom: 2px;
  position: relative;
  border: 4px solid ${({ theme }) => theme.custom.colors.surface2.enable};
  img {
    width: 96%;
  }
`

interface LvlDisplayProps {
  color: string
  size: Sizes
}

export const LvlDisplay = styled.div<LvlDisplayProps>`
  background: ${({ color }) => color};
  position: absolute;
  padding: ${({ size }) => (size === Sizes.large ? '4px 10px' : '2px 8px')};
  left: auto;
  white-space: nowrap;
  bottom: -20px;
  border-radius: 10px;
  box-shadow: ${({ theme }) => theme.custom.colors.effects.shadow_s};
`

interface LvlCubeProps {
  color: string
}

export const LvlCube = styled.div<LvlCubeProps>`
  position: absolute;
  left: auto;
  top: -22px;
  color: ${({ color }) => color};
`
