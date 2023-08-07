import { Box, Button, Dialog, Typography, useTheme } from '@mui/material'

import { useConnect } from 'entities/wallet'

import { BorderButton, Close, CopyTag } from 'shared/components'
import { Account, ModalCommonProps } from 'shared/types'

type Props = ModalCommonProps & {
  account: Account
  message: string
}

export const SignInModal: React.FC<Props> = ({
  isOpen,
  onClose,
  account,
  message,
}) => {
  const { signMessage, disconnect } = useConnect()
  const theme = useTheme()

  const onSignIn = (): void => {
    signMessage(account.chainType, message)
    onClose()
  }

  const handleClose = (): void => {
    disconnect(account.chainType)
    onClose()
  }

  return (
    <Dialog
      open={isOpen}
      onClose={handleClose}
      PaperProps={{
        sx: {
          width: '480px',
        },
      }}
    >
      <Box sx={{ display: 'flex', gap: '16px' }}>
        <Typography variant='h4'>Sign In</Typography>
        <CopyTag text={account.address} />
      </Box>
      <Typography
        variant='body1'
        sx={{ mt: '16px' }}
        color={theme.custom.colors.neutral.text_secondary}
      >
        Verify wallet ownership to access rewards and notifications.
      </Typography>

      <Box sx={{ display: 'flex', gap: '8px', mt: '32px' }}>
        <BorderButton sx={{ width: '100%' }}>
          <Typography variant='button'>Change wallet</Typography>
        </BorderButton>

        <Button
          variant='contained'
          size='large'
          sx={{ width: '100%', padding: '0' }}
          onClick={onSignIn}
        >
          Sign in
        </Button>
      </Box>
      <Close onClose={handleClose} />
    </Dialog>
  )
}
