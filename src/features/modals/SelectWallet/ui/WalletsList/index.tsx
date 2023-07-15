import { List } from '@mui/material'

import { WalletTag } from 'shared/types'

import { WalletItem } from '../WalletItem'

interface Props {
  wallets: WalletTag[]
  handleConnect: (walletTag: WalletTag) => void
}

export const WalletsList: React.FC<Props> = ({ wallets, handleConnect }) => {
  return (
    <List
      sx={{
        p: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
      }}
    >
      {wallets.map(walletTag => (
        <WalletItem
          onClick={() => handleConnect(walletTag)}
          key={walletTag}
          walletTag={walletTag}
        />
      ))}
    </List>
  )
}
