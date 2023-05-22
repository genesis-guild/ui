import { Box, Button } from '@mui/material'
import { SocketsContext } from 'app/contexts'
import { useContext } from 'react'
import { mint } from 'shared/sockets'

export const MintPage: React.FC = () => {
  const { socket } = useContext(SocketsContext)

  const onMint = () => {
    if (socket) {
      mint(socket)
    }
  }

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Button onClick={onMint} variant='outlined' color='error'>
        Mint
      </Button>
    </Box>
  )
}
