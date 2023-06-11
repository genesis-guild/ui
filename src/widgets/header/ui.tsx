import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import { ModalsContext } from 'app/contexts/modals'
import { MODAL_NAMES } from 'app/contexts/modals/types'
import { WalletContext } from 'app/contexts/wallet'
import { LogoWhite } from 'shared/assets/icons/logo'
import React, { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Avatar, MenuContainer, Profile, RightPanel } from './style'
import { Dropdown, DropdownItem } from 'shared/components/dropdown'
import { ProfilePicture } from 'shared/components/profile_picture'
import { AccountLvl } from 'shared/components/profile_picture/types'
import { getWalletIcon } from 'shared/utils/getWalletIcon'
import { CommunityMarket } from 'shared/assets/icons/community_market'
import { GuildMarket } from 'shared/assets/icons/guild_market'
import { ClaimBadgeButton } from 'widgets/claim_badge_button'

export const AppHeader: React.FC = () => {
  const { isConnected, accountId, logout, walletTag } =
    useContext(WalletContext)
  const WalletIcon = getWalletIcon(walletTag)
  const { openModal } = useContext(ModalsContext)
  const location = useLocation()

  const pathname = location.pathname

  const profileDropdownItems = [
    <DropdownItem>Account</DropdownItem>,
    <DropdownItem>Lended Nfts</DropdownItem>,
    <DropdownItem>Borrow NFTs</DropdownItem>,
    <DropdownItem>My Requests</DropdownItem>,
    <DropdownItem>My offers</DropdownItem>,
    <DropdownItem>Redeem</DropdownItem>,
    <DropdownItem onClick={logout}>
      <Box sx={theme => ({ color: theme.custom.colors.neutral.text_dark })}>
        Log out
      </Box>
    </DropdownItem>,
  ]

  return (
    <Box
      sx={theme => ({
        background: theme.custom.colors.neutral.background,
        mt: '20px',
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
            display: 'flex',
            justifyContent: 'space-between',
            padding: '20px 60px',
          }}
        >
          <Box
            sx={{
              minWidth: '20%',
            }}
          >
            <Link to='/'>
              <LogoWhite />
            </Link>
          </Box>
          <Box sx={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
            <MenuContainer>
              <Link to='/claim-badge'>
                <ClaimBadgeButton isActive={pathname === '/claim-badge'} />
              </Link>

              <MenuLink link='/games' label='Games' pathname={pathname} />
              <Dropdown
                title={<Typography variant='links'>Marketplace</Typography>}
                offsetLeft='110px'
                offsetTop='60px'
                color={
                  pathname.split('/').includes('marketplace')
                    ? 'primary'
                    : 'tertiary'
                }
                sx={{ padding: '10px 16px', borderRadius: '10px' }}
                width='200px'
                noArrow
                items={[
                  <Link to='/marketplace/community'>
                    <DropdownItem
                      leftIcon={<CommunityMarket width={24} height={24} />}
                      sx={{ padding: '8px' }}
                    >
                      Community
                    </DropdownItem>
                  </Link>,
                  <Link to='/marketplace/guild'>
                    <DropdownItem
                      leftIcon={<GuildMarket width={24} height={24} />}
                      sx={{ padding: '8px' }}
                    >
                      Guild
                    </DropdownItem>
                  </Link>,
                ]}
              />
              <MenuLink link='/blog' label='Blog' pathname={pathname} />
              <MenuLink link='/docs' label='Docs' pathname={pathname} />
            </MenuContainer>
            {isConnected && <Button variant='contained'>Rent NFTs</Button>}
            {isConnected && (
              <RightPanel>
                <Button
                  variant='contained'
                  color='tertiary'
                  sx={{ cursor: 'default', padding: '12px 12px', minWidth: 0 }}
                >
                  {WalletIcon && <WalletIcon width={24} height={24} />}
                </Button>
                <Profile>
                  <Dropdown
                    title='Profile'
                    offsetLeft='52px'
                    width='240px'
                    items={profileDropdownItems}
                  />
                  <Avatar>
                    <ProfilePicture account_lvl={AccountLvl._4} />
                  </Avatar>
                </Profile>
              </RightPanel>
            )}
          </Box>

          {!isConnected && (
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'flex-end',
                minWidth: '256px',
              }}
            >
              <Button
                variant='contained'
                size='medium'
                onClick={() => openModal(MODAL_NAMES.SELECT_WALLET)}
              >
                Connect wallet
              </Button>
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  )
}

interface MenuLinkProps {
  link: string
  label: string
  pathname: string
}

const MenuLink: React.FC<MenuLinkProps> = ({ link, pathname, label }) => {
  return (
    <Link to={link}>
      <Button
        variant='contained'
        sx={{ padding: '10px 16px', borderRadius: '10px' }}
        color={pathname === link ? 'primary' : 'tertiary'}
      >
        <Typography variant='links'>{label}</Typography>
      </Button>
    </Link>
  )
}
