import { Box, Button, Dialog, Typography, useTheme } from '@mui/material'
import { BorderButton } from 'shared/components'
import { CopyTag } from 'shared/components/copy_tag'
import { ModalCommonProps } from 'shared/types'

import { Close } from '../common/components'

export const SignInModal: React.FC<ModalCommonProps> = ({
  isOpen,
  onClose,
}) => {
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
        <Typography variant='h4'>Sign In</Typography>
        <CopyTag text='12345678910' />
      </Box>
      <Typography
        variant='body1'
        sx={{ mt: '16px' }}
        color={theme.custom.colors.neutral.text_secondary}
      >
        Verify wallet ownership to access rewards and notifications. No ETH is
        charged.
      </Typography>

      <Box sx={{ display: 'flex', gap: '8px', mt: '32px' }}>
        <BorderButton sx={{ width: '100%' }}>
          <Typography variant='button'>Change wallet</Typography>
        </BorderButton>

        <Button
          variant='contained'
          size='large'
          sx={{ width: '100%', padding: '0' }}
        >
          Sign in
        </Button>
      </Box>
      <Close onClose={onClose} />
    </Dialog>
  )
}
