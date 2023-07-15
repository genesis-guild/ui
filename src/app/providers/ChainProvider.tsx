import { WalletProvider as SuiWalletProvider } from '@suiet/wallet-kit'
import { PhantomConnector } from 'phantom-wagmi-connector'
import { WagmiConfig, configureChains, createConfig } from 'wagmi'
import { goerli, mainnet } from 'wagmi/chains'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
import { publicProvider } from 'wagmi/providers/public'

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [mainnet, goerli],
  [publicProvider()],
)

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: [
    new MetaMaskConnector({ chains }),
    new PhantomConnector({ chains }),
  ],
  publicClient,
  webSocketPublicClient,
})

export const ChainProvider: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  return (
    <WagmiConfig config={wagmiConfig}>
      <SuiWalletProvider>{children}</SuiWalletProvider>
    </WagmiConfig>
  )
}
