import { useMemo } from 'react'
import { ConnectAccountType } from 'shared/types'
import { ChainType, WalletTag } from 'shared/types/chain'
import { log } from 'shared/utils/log'
import { useAccount, useConnect as useConnectWagmi, useDisconnect } from 'wagmi'

import { UseConnectNetType } from './types'

export const useEthConntect = (): UseConnectNetType => {
  const { connect: connectWagmi, connectors, isLoading } = useConnectWagmi()
  const { address, isConnected } = useAccount()
  const { disconnect: wagmiDisconnect } = useDisconnect()

  const account = useMemo(
    (): ConnectAccountType => ({
      connected: isConnected,
      address,
      chainType: ChainType.ETH,
    }),
    [isConnected, address],
  )

  const connect = (walletTag: WalletTag): void => {
    const connector = connectors.find(c => (c.id as WalletTag) === walletTag)

    if (!connector) {
      log(
        'error',
        'connector not found for walletTag',
        `"${walletTag}"`,
        '//EthProvider//',
      )

      return
    }

    connectWagmi({ connector })
  }

  const disconnect = (): void => {
    wagmiDisconnect()
  }

  return { connect, disconnect, account, isLoading }
}
