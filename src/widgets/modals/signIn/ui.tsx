import { Dialog, Typography } from '@mui/material'

import { ModalCommonProps } from 'shared/types'

import { Close } from '../common/components'

export const SignInModal: React.FC<ModalCommonProps> = ({
  isOpen,
  onClose,
}) => {
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
      <Typography variant='h4'>Sign In</Typography>
      <Close onClose={onClose} />
    </Dialog>
  )
}
