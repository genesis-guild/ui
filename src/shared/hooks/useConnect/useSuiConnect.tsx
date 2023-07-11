import { useWallet } from '@suiet/wallet-kit'
import { useMemo } from 'react'
import { ChainType, ConnectAccountType, WalletTag } from 'shared/types'
import { log } from 'shared/utils/log'

import { UseConnectNetType } from './types'

export const useSuiConnect = (): UseConnectNetType => {
  const {
    select,
    connected,
    address,
    configuredWallets,
    status,
    disconnect: suiDisconnect,
  } = useWallet()

  const account = useMemo(
    (): ConnectAccountType => ({
      connected,
      address,
      chainType: ChainType.SUI,
    }),
    [connected, address],
  )

  const connect = (walletTag: WalletTag): void => {
    const wallet = configuredWallets.find(
      w => (w.name as WalletTag) === walletTag,
    )

    if (!wallet) {
      log(
        'error',
        'wallet not found for walletTag',
        `"${walletTag}"`,
        '//SuiProvider//',
      )

      return
    }

    select(wallet.name)
  }

  const disconnect = (): void => {
    if (connected) {
      suiDisconnect()
    }
  }

  return { connect, disconnect, account, isLoading: status === 'connecting' }
}
