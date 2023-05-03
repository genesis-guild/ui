import { AccountCircle } from '@mui/icons-material'
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@mui/material'
import { ModalsContext } from 'app/contexts/modals'
import { MODAL_NAMES } from 'app/contexts/modals/types'
import { WalletContext } from 'app/contexts/wallet'
import { LogoIcon } from 'assets/icons/logo'
import React, { useContext, useState } from 'react'

export const AppHeader: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<Element | null>(null)
  const { isConnected } = useContext(WalletContext)
  const { openModal } = useContext(ModalsContext)

  const isMenuOpen = Boolean(anchorEl)

  const handleProfileClick = (event: React.MouseEvent) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
  }

  const renderProfileMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id='profile-menu'
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem>My account</MenuItem>
      <MenuItem>Switch wallet</MenuItem>
      <MenuItem>Logout</MenuItem>
    </Menu>
  )

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='open drawer'
            sx={{ mr: 2 }}
          >
            <LogoIcon width={28} height={28} />
          </IconButton>
          <Typography
            variant='h6'
            noWrap
            component='div'
            sx={{ fontSize: '18px' }}
          >
            Genesis Guild
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              gap: '32px',
              ml: '128px',
              display: 'flex',
            }}
          >
            <Button>Mint nft</Button>
            <Button>Borrowing</Button>
            <Button>Lending</Button>
            <Button>Docs</Button>
          </Box>

          {isConnected && (
            <IconButton
              size='large'
              sx={{ borderRadius: '8px' }}
              edge='end'
              aria-label='account of current user'
              aria-controls='profile-menu'
              aria-haspopup='true'
              onClick={handleProfileClick}
              color='inherit'
            >
              <AccountCircle />
              <Typography
                variant='h6'
                noWrap
                component='div'
                sx={{ fontSize: '14px', ml: '6px' }}
              >
                account id...
              </Typography>
            </IconButton>
          )}

          {!isConnected && (
            <Button
              variant='outlined'
              onClick={() => openModal(MODAL_NAMES.SELECT_WALLET)}
            >
              Connect wallet
            </Button>
          )}
        </Toolbar>
      </AppBar>
      {renderProfileMenu}
    </Box>
  )
}
