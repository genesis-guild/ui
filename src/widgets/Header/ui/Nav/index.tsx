import { Typography } from '@mui/material'
import { Link, useLocation } from 'react-router-dom'

import { CommunityMarket, GuildMarket } from 'shared/assets/icons'
import { Dropdown, DropdownItem } from 'shared/components'

import { ClaimBadgeButton } from '../ClaimBadgeButton'
import { MenuLink } from '../MenuLink'
import { MenuContainer } from './styles'

export const Nav: React.FC = () => {
  const location = useLocation()

  const pathname = location.pathname

  return (
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
          pathname.split('/').includes('marketplace') ? 'primary' : 'tertiary'
        }
        sx={{ padding: '10px 16px', borderRadius: '10px' }}
        width='200px'
        noArrow
        items={[
          <Link to='/marketplace/community' key='community'>
            <DropdownItem
              leftIcon={<CommunityMarket width={24} height={24} />}
              sx={{ padding: '8px' }}
            >
              Community
            </DropdownItem>
          </Link>,
          <Link to='/marketplace/guild' key='guild'>
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
  )
}
