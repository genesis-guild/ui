import {
  Button,
  Popover,
  MenuItem,
  Typography,
  Box,
  SxProps,
  ButtonProps,
} from '@mui/material'
import React, { useState } from 'react'
import { ArrowDown } from 'shared/assets/icons/arrow_down'
import { ArrowContainer } from './style'

interface DropdownProps {
  items: React.ReactNode[]
  title: React.ReactNode
  offsetTop?: string
  offsetLeft?: string
  color?: ButtonProps['color']
  noArrow?: boolean
  width?: string
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
  sx?: SxProps
}

export const Dropdown: React.FC<DropdownProps> = ({
  items,
  title,
  offsetTop = '84px',
  offsetLeft,
  width = '200px',
  noArrow,
  startIcon,
  color,
  sx,
}) => {
  const [anchorEl, setAnchorEl] = useState<Element | null>(null)

  const isMenuOpen = Boolean(anchorEl)

  const handleMenuClose = () => {
    setAnchorEl(null)
  }

  const handleClick = (event: React.MouseEvent) => {
    setAnchorEl(event.currentTarget)
  }

  const renderDropdown = (
    <Popover
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      sx={{ top: offsetTop, left: offsetLeft }}
      id='dropdown-menu'
      keepMounted
      open={isMenuOpen}
      onClick={handleMenuClose}
      onClose={handleMenuClose}
    >
      <Box sx={{ width }}>{items}</Box>
    </Popover>
  )

  return (
    <>
      <Button
        variant='contained'
        color={color || 'tertiary'}
        onClick={handleClick}
        startIcon={startIcon}
        endIcon={startIcon}
        sx={sx}
      >
        {title}
        {!noArrow && (
          <ArrowContainer opened={isMenuOpen}>
            <ArrowDown width={12} height={8} />
          </ArrowContainer>
        )}
      </Button>
      {renderDropdown}
    </>
  )
}

interface DropdownItem {
  children: React.ReactNode
  leftIcon?: React.ReactNode
  sx?: SxProps
  onClick?: () => void
}

export const DropdownItem: React.FC<DropdownItem> = ({
  children,
  onClick,
  leftIcon,
  sx,
}) => {
  return (
    <MenuItem
      sx={{
        borderRadius: '8px',
        padding: '8px 16px',
        width: '100%',
        display: 'flex',
        gap: '8px',
        ...sx,
      }}
      onClick={onClick}
    >
      {leftIcon}
      <Typography variant='links'>{children}</Typography>
    </MenuItem>
  )
}
