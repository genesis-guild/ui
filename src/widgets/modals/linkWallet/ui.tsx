import { Dialog, Typography } from '@mui/material'

import { ConnectAccountType, ModalCommonProps } from 'shared/types'

import { Close } from '../common/components'

type Props = ModalCommonProps & {
  prevAccount: ConnectAccountType
  newAccount: ConnectAccountType
}

export const LinkWalletModal: React.FC<Props> = ({ isOpen, onClose }) => {
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
      <Typography variant='h4'>Link Wallet</Typography>
      <Close onClose={onClose} />
    </Dialog>
  )
}
