import { Box, Button } from '@mui/material'
import { WalletContext } from 'app/contexts'
import { useContext } from 'react'
import { Dropdown, DropdownItem, ProfilePicture } from 'shared/components'
import { AccountLvl } from 'shared/components/profile_picture/types'
import { useModal } from 'shared/hooks'
import { useConnect } from 'shared/hooks/useConnect'
import { WalletTag } from 'shared/types'
import { getWalletIcon, trunckate } from 'shared/utils'
import { SelectWalletModal } from 'widgets/modals'

import { Avatar, ProfileMenu, RightPanel } from './styles'

export const Profile: React.FC = () => {
  const { disconnect } = useConnect()
  const { activeAccount } = useContext(WalletContext)
  const [Modal, openSelectWalletModal] = useModal(SelectWalletModal)
  const WalletIcon = getWalletIcon(WalletTag.Metamask)

  const profileDropdownItems = [
    <DropdownItem>Account</DropdownItem>,
    <DropdownItem onClick={() => openSelectWalletModal({})}>
      Switch account
    </DropdownItem>,
    <DropdownItem onClick={disconnect}>
      <Box sx={theme => ({ color: theme.custom.colors.neutral.text_dark })}>
        Log out
      </Box>
    </DropdownItem>,
  ]

  return (
    <RightPanel>
      {Modal}
      <Button
        variant='contained'
        color='tertiary'
        sx={{ cursor: 'default', padding: '12px 12px', minWidth: 0 }}
      >
        {WalletIcon && <WalletIcon width={24} height={24} />}
      </Button>
      <ProfileMenu>
        <Dropdown
          title={trunckate(activeAccount?.address ?? '')}
          offsetLeft='52px'
          width='240px'
          items={profileDropdownItems}
        />
        <Avatar>
          <ProfilePicture account_lvl={AccountLvl._4} />
        </Avatar>
      </ProfileMenu>
    </RightPanel>
  )
}
