import { WalletProvider as SuiWalletProvider } from '@suiet/wallet-kit'
import { WagmiConfig } from 'wagmi'

import { wagmiConfig } from './configs/wagmi'

export const ChainProvider: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  return (
    <WagmiConfig config={wagmiConfig}>
      <SuiWalletProvider>{children}</SuiWalletProvider>
    </WagmiConfig>
  )
}
