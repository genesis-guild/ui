import { Box, Button, Dialog, Typography, useTheme } from '@mui/material'

import { BorderButton, Close, CopyTag } from 'shared/components'
import { ModalCommonProps } from 'shared/types'

type Props = ModalCommonProps

export const LinkWalletModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const theme = useTheme()

  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      PaperProps={{
        sx: {
          width: '480px',
        },
      }}
    >
      <Box sx={{ display: 'flex', gap: '16px' }}>
        <Typography variant='h4'>Link Wallet</Typography>
        <CopyTag text='12345678910' />
      </Box>
      <Typography
        variant='body1'
        sx={{ mt: '16px' }}
        color={theme.custom.colors.neutral.text_secondary}
      >
        Link wallet to a previously active wallet <CopyTag text='12345678910' />{' '}
        to receive rewards and access lower fees, or sign in with new wallet. No
        ETH is charged.
      </Typography>

      <Box sx={{ display: 'flex', gap: '8px', mt: '32px' }}>
        <BorderButton sx={{ width: '100%' }}>
          <Typography variant='button'>Sign in New Wallet</Typography>
        </BorderButton>

        <Button
          variant='contained'
          size='large'
          sx={{ width: '100%', padding: '0' }}
        >
          Link wallet
        </Button>
      </Box>
      <Close onClose={onClose} />
    </Dialog>
  )
}
