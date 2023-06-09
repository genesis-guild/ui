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
import { MenuContainer } from './style'
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
      sx={theme => ({
        background: theme.custom.colors.neutral.background,
      })}
    >
      <AppBar
        position='static'
        sx={theme => ({
          background: theme.custom.colors.neutral.background,
          p: 0,
        })}
      >
        <Toolbar
          sx={{
            justifyContent: 'space-between',
            padding: '20px 60px',
          }}
        >
          <LogoWhite />

          <MenuContainer>
            <Link to='/mint_nft'>
              <Button
                variant='contained'
                color='tertiary'
                startIcon={<ClaimStar width={24} height={24} />}
              >
                Claim badge
              </Button>
            </Link>

            <Button variant='contained' color='tertiary'>
              Games
            </Button>
            <Button variant='contained' color='tertiary'>
              Marketplace
            </Button>
            <Button variant='contained' color='tertiary'>
              Blog
            </Button>
            <Button variant='contained' color='tertiary'>
              Docs
            </Button>
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
              size='medium'
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
