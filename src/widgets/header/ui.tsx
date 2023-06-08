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
import { LogoWhite } from 'shared/assets/icons/logo'
import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { MenuContainer, MenuItemLink } from './style'
import { ClaimStar } from 'shared/assets/icons/claim_star'

export const AppHeader: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<Element | null>(null)
  const { isConnected, accountId, logout } = useContext(WalletContext)
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
      onClick={handleMenuClose}
      onClose={handleMenuClose}
    >
      <MenuItem>My account</MenuItem>
      <MenuItem onClick={() => navigator.clipboard.writeText(accountId)}>
        Copy address
      </MenuItem>
      <MenuItem onClick={logout}>Disconnect</MenuItem>
    </Menu>
  )

  return (
    <Box
      sx={{
        flexGrow: 1,
        background: '#0B0B0D',
      }}
    >
      <AppBar position='static' sx={{ background: '#0B0B0D', p: 0 }}>
        <Toolbar
          sx={{
            justifyContent: 'space-between',
            padding: '20px 60px',
          }}
        >
          <LogoWhite />

          <MenuContainer>
            <MenuItemLink>
              <Link to='/mint_nft'>
                <Box sx={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                  <ClaimStar width={24} height={24} />
                  <Box>Claim badge</Box>
                </Box>
              </Link>
            </MenuItemLink>

            <MenuItemLink>Games</MenuItemLink>
            <MenuItemLink>Marketplace</MenuItemLink>
            <MenuItemLink>Blog</MenuItemLink>
            <MenuItemLink>Docs</MenuItemLink>
          </MenuContainer>

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
                {`${accountId.slice(0, 12)}...`}
              </Typography>
            </IconButton>
          )}

          {!isConnected && (
            <Button
              variant='contained'
              size='large'
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
