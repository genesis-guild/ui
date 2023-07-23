import { Box, Button } from '@mui/material'

import { SelectWalletModal } from 'features/modals'

import { useConnect } from 'entities/wallet'

import {
  AccountLvl,
  Dropdown,
  DropdownItem,
  ProfilePicture,
} from 'shared/components'
import { useModal } from 'shared/hooks'
import { Account, WalletTag } from 'shared/types'
import { getWalletIcon, trunckate } from 'shared/utils'

import { Avatar, ProfileMenu, RightPanel } from './styles'

export const Profile: React.FC<{ account: Account }> = ({ account }) => {
  const { disconnect } = useConnect()

  const [Modal, openSelectWalletModal] = useModal(SelectWalletModal)
  const WalletIcon = getWalletIcon(WalletTag.Metamask)

  const profileDropdownItems = [
    <DropdownItem>Account</DropdownItem>,
    <DropdownItem onClick={() => openSelectWalletModal({})}>
      Switch account
    </DropdownItem>,
    <DropdownItem onClick={() => disconnect(account.chainType)}>
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
          title={trunckate(account.address)}
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
