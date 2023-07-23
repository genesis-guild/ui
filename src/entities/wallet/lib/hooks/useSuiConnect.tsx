import { useWallet } from '@suiet/wallet-kit'
import { useMemo } from 'react'

import { Account, ChainType, WalletTag } from 'shared/types'
import { log } from 'shared/utils'

import { UseConnectNetType } from './common/types'
import { handleConnect } from './common/utils'

export const useSuiConnect = (): UseConnectNetType => {
  const {
    select,
    connected,
    address,
    configuredWallets,
    disconnect: suiDisconnect,
  } = useWallet()

  const account = useMemo(
    (): Account | undefined =>
      connected && address
        ? {
            address,
            chainType: ChainType.SUI,
          }
        : undefined,
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

    handleConnect(select(wallet.name), ChainType.SUI)
  }

  const disconnect = (): void => {
    if (connected) {
      suiDisconnect()
    }
  }

  const signMessage = (): void => {}

  return {
    connect,
    disconnect,
    signMessage,
    account,
  }
}
