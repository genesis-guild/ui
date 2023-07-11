import { Box, Button } from '@mui/material'
import { useModal } from 'shared/hooks'
import { SelectWalletModal } from 'widgets/modals'

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
