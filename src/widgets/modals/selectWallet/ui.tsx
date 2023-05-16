import {
  Box,
  List,
  ListItem,
  ListItemButton,
  DialogTitle,
  Dialog,
  Typography,
  Button,
  Avatar,
} from '@mui/material'
import { ModalCommonProps } from '../types'
import { MetamaskLogoIcon } from 'shared/assets/icons/metamask_logo'
import { SuiLogoIcon } from 'shared/assets/icons/sui_logo'
import { WalletContext } from 'app/contexts/wallet'
import { useContext } from 'react'

export const SelectWalletModal: React.FC<ModalCommonProps> = ({
  isOpen,
  onClose,
}) => {
  const { connectMetamask, connectSuiWallet } = useContext(WalletContext)

  const handleMetamaskClick = () => {
    connectMetamask()
    onClose()
  }

  const handleSuiClick = () => {
    connectSuiWallet()
    onClose()
  }

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle sx={{ fontWeight: 600 }}>Select wallet</DialogTitle>

      <List sx={{ p: 0, width: 340, pb: 2 }}>
        <WalletItem
          name='Metamask'
          icon={<MetamaskLogoIcon width={32} height={32} />}
          onClick={handleMetamaskClick}
        />
        <WalletItem
          name='Sui wallet'
          icon={<SuiLogoIcon width={32} height={32} />}
          onClick={handleSuiClick}
        />
      </List>
    </Dialog>
  )
}

const WalletItem: React.FC<{
  name: string
  icon: JSX.Element
  onClick?: () => void
}> = ({ name, icon, onClick }) => {
  return (
    <ListItem sx={{ p: 0 }}>
      <ListItemButton
        sx={{
          padding: '16px 24px',
          display: 'flex',
          justifyContent: 'space-between',
        }}
        onClick={onClick}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <Avatar sx={{ backgroundColor: 'transparent' }}>{icon}</Avatar>
          <Typography fontSize={18}>{name}</Typography>
        </Box>

        <Button variant='outlined' size='small'>
          Connect
        </Button>
      </ListItemButton>
    </ListItem>
  )
}
