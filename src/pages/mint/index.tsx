import { Box, Button } from '@mui/material'
import { SocketsContext } from 'app/contexts'
import { useContext } from 'react'
import { ChainEmitters } from 'shared/sockets'
import { ChainType } from 'shared/sockets/types'

export const MintPage: React.FC = () => {
  const { socket } = useContext(SocketsContext)

  const onMint = () => {
    if (socket) {
      ChainEmitters.mint(socket)
    }
  }

  const onList = () => {
    if (socket) {
      // mocked data this nft is already LISTED
      ChainEmitters.list(socket, {
        pricePerDay: '1000',
        duration: 14,
        nftDto: {
          chainType: ChainType.ETH,
          contract: {
            address: '0x687b5fe941e45b66efaeab1223cf2e40ec83b13f',
            name: 'RentableNft',
            symbol: 'RNFT',
          },
          tokenId: '8',
          title: '',
          description: '',
          owner: '0x14B6006226437De076A3718eD06623a6E7601F1f',
        },
      })
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
      <Button onClick={onList} variant='outlined' color='error'>
        List
      </Button>
    </Box>
  )
}
