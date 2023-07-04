import { useMemo } from 'react'
import { ChainType, WalletTag } from 'shared/types/chain'
import { log } from 'shared/utils/log'
import { useAccount, useConnect, useDisconnect } from 'wagmi'

import { ConnectAccountType, UseConnectNetType } from './types'

export const useEthConntect = (): UseConnectNetType => {
  const { connect: connectWagmi, connectors, isLoading } = useConnect()
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
