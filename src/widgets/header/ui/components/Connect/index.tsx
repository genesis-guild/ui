import { Box, Button } from '@mui/material'

import { SelectWalletModal } from 'widgets/modals'

import { useModal } from 'shared/hooks'

export const Connect: React.FC = () => {
  const [Modal, onOpen] = useModal(SelectWalletModal)

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-end',
        minWidth: '256px',
      }}
    >
      {Modal}
      <Button variant='contained' size='medium' onClick={() => onOpen({})}>
        Connect wallet
      </Button>
    </Box>
  )
}
