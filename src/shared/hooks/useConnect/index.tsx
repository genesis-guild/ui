import { useMemo } from 'react'
import { ChainType, WalletTag } from 'shared/types/chain'

import { ConnectAccountType } from './types'
import { useEthConntect } from './useEthConnect'
import { useSuiConnect } from './useSuiConnect'

interface UseConnectType {
  connect: (chainType: ChainType, walletTag: WalletTag) => void
  disconnect: () => void
  account: ConnectAccountType | undefined
  isLoading: boolean
}

export const useConnect = (): UseConnectType => {
  const {
    connect: ethConnect,
    account: ethAccount,
    disconnect: ethDisconnect,
    isLoading: ethIsLoading,
  } = useEthConntect()
  const {
    connect: suiConnect,
    account: suiAccount,
    disconnect: suiDisconnect,
    isLoading: suiIsLoading,
  } = useSuiConnect()

  const activeAccount = useMemo(
    () => [ethAccount, suiAccount].find(a => a.connected),
    [ethAccount, suiAccount],
  )

  const isLoading = useMemo(
    () => ethIsLoading || suiIsLoading,
    [ethIsLoading, suiIsLoading],
  )

  const disconnects: Record<ChainType, UseConnectType['disconnect']> = {
    [ChainType.ETH]: ethDisconnect,
    [ChainType.SUI]: suiDisconnect,
  }

  const disconnectOther = (chainType: ChainType): void => {
    Object.entries(disconnects).forEach(([_chainType, disFn]) => {
      if ((_chainType as ChainType) !== chainType) {
        disFn()
      }
    })
  }

  const connect = (chainType: ChainType, walletTag: WalletTag): void => {
    switch (chainType) {
      case ChainType.ETH:
        ethConnect(walletTag)
        disconnectOther(chainType)
        break
      case ChainType.SUI:
        suiConnect(walletTag)
        disconnectOther(chainType)
        break
    }
  }

  const disconnect = (): void => {
    if (!activeAccount) return

    switch (activeAccount.chainType) {
      case ChainType.ETH:
        ethDisconnect()
        break
      case ChainType.SUI:
        suiDisconnect()
        break
    }
  }

  return { connect, disconnect, account: activeAccount, isLoading }
}
