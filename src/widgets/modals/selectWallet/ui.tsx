import {
  Avatar,
  Box,
  Dialog,
  List,
  ListItem,
  ListItemButton,
  Typography,
} from '@mui/material'
import { WalletContext } from 'app/contexts/wallet'
import { WalletTag } from 'app/contexts/wallet/types'
import { useContext } from 'react'
import { Close } from 'shared/assets/icons/close'
import { MetamaskLogoIcon } from 'shared/assets/icons/metamask_logo'
import { SuiLogoIcon } from 'shared/assets/icons/sui_logo'

import { ModalCommonProps } from '../types'

export const SelectWalletModal: React.FC<ModalCommonProps> = ({
  isOpen,
  onClose,
}) => {
  const { connectMetamask, connectSuiWallet, detected } =
    useContext(WalletContext)

  const handleMetamaskClick = (): void => {
    connectMetamask()
    onClose()
  }

  const handleSuiClick = (): void => {
    connectSuiWallet()
    onClose()
  }

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <Typography variant='h4'>Connect wallet</Typography>
      <Box
        sx={{
          position: 'absolute',
          top: '24px',
          right: '24px',
          cursor: 'pointer',
        }}
        onClick={onClose}
      >
        <Close width={14} height={14} />
      </Box>

      <List
        sx={{
          p: 0,
          width: 416,
          mt: '32px',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
        }}
      >
        <WalletItem
          name='Metamask'
          detected={detected[WalletTag.Metamask]}
          icon={<MetamaskLogoIcon width={44} height={44} />}
          onClick={handleMetamaskClick}
        />
        <WalletItem
          name='Sui wallet'
          detected={detected[WalletTag.Sui]}
          icon={<SuiLogoIcon width={44} height={44} />}
          onClick={handleSuiClick}
        />
      </List>
    </Dialog>
  )
}

const WalletItem: React.FC<{
  name: string
  icon: JSX.Element
  detected: boolean
  onClick?: () => void
}> = ({ name, icon, onClick, detected }) => {
  return (
    <ListItem sx={{ p: 0 }}>
      <ListItemButton
        sx={{
          padding: '8px',
          display: 'flex',
          borderRadius: '15px',
          justifyContent: 'space-between',
        }}
        onClick={onClick}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <Avatar sx={{ backgroundColor: 'transparent' }}>{icon}</Avatar>
          <Typography variant='h6'>{name}</Typography>
        </Box>

        {detected && (
          <Typography
            variant='overline'
            sx={theme => ({ color: theme.custom.colors.neutral.text_dark })}
          >
            Detected
          </Typography>
        )}
      </ListItemButton>
    </ListItem>
  )
}
