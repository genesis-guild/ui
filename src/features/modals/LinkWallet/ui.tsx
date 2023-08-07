import { Box, Button, Dialog, Typography, useTheme } from '@mui/material'

import { BorderButton, Close, CopyTag } from 'shared/components'
import { Account, ModalCommonProps } from 'shared/types'

type Props = ModalCommonProps & {
  sessionAccount: Account
  activeAccount: Account
  onSignInNew: () => void
  onLink: () => void
}

export const LinkWalletModal: React.FC<Props> = ({
  isOpen,
  onClose,
  sessionAccount,
  activeAccount,
  onSignInNew,
  onLink,
}) => {
  const theme = useTheme()

  const handleOnClose = (): void => {
    handleSignInNew()
  }

  const handleSignInNew = (): void => {
    onClose()
    onSignInNew()
  }

  const handleLink = (): void => {
    onClose()
    onLink()
  }

  return (
    <Dialog
      open={isOpen}
      onClose={handleOnClose}
      PaperProps={{
        sx: {
          width: '480px',
        },
      }}
    >
      <Box sx={{ display: 'flex', gap: '16px' }}>
        <Typography variant='h4'>Link Wallet</Typography>
        <CopyTag text={activeAccount.address} />
      </Box>
      <Typography
        variant='body1'
        sx={{ mt: '16px' }}
        color={theme.custom.colors.neutral.text_secondary}
      >
        Link wallet to a previously active wallet{' '}
        <CopyTag text={sessionAccount.address} /> to receive rewards and access
        lower fees, or sign in with new wallet. No ETH is charged.
      </Typography>

      <Box sx={{ display: 'flex', gap: '8px', mt: '32px' }}>
        <BorderButton sx={{ width: '100%' }} onClick={handleSignInNew}>
          <Typography variant='button'>Sign in New Wallet</Typography>
        </BorderButton>

        <Button
          onClick={handleLink}
          variant='contained'
          size='large'
          sx={{ width: '100%', padding: '0' }}
        >
          Link wallet
        </Button>
      </Box>
      <Close onClose={handleOnClose} />
    </Dialog>
  )
}
