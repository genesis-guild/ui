import { ButtonProps as MuiButtonProps, useTheme } from '@mui/material'

import { Border, Button } from './styles'

export interface BorderProps {
  borderColor?: string
  borderWidth?: string
  borderRadius?: string
}

export interface ButtonProps {
  background?: string
  hover?: string
  padding?: string
}

type Props = {
  children: React.ReactNode
} & BorderProps &
  ButtonProps &
  MuiButtonProps

export const BorderButton: React.FC<Props> = props => {
  const theme = useTheme()

  const borderColor = props.borderColor ?? theme.custom.colors.primary.enable
  const borderRadius = props.borderRadius ?? '15px'
  const borderWidth = props.borderWidth ?? '1px'

  const padding = props.padding ?? '12px 24px'
  const hover = props.hover ?? theme.custom.colors.surface1.hover
  const background = props.background ?? theme.custom.colors.surface1.enable

  return (
    <Border
      borderColor={borderColor}
      borderWidth={borderWidth}
      borderRadius={borderRadius}
      sx={props.sx}
    >
      <Button
        padding={padding}
        hover={hover}
        background={background}
        {...props}
        sx={undefined}
      >
        {props.children}
      </Button>
    </Border>
  )
}
