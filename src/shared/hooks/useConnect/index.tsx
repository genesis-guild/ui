import { WalletContext } from 'app/contexts'
import { useContext, useMemo } from 'react'
import { ChainType, WalletTag } from 'shared/types'

import { useEthConntect } from './useEthConnect'
import { useSuiConnect } from './useSuiConnect'

interface UseConnectType {
  connect: (chainType: ChainType, walletTag: WalletTag) => void
  disconnect: () => void
  isLoading: boolean
}

export { useEthConntect, useSuiConnect }

export const useConnect = (): UseConnectType => {
  const {
    connect: ethConnect,
    disconnect: ethDisconnect,
    isLoading: ethIsLoading,
  } = useEthConntect()
  const {
    connect: suiConnect,
    disconnect: suiDisconnect,
    isLoading: suiIsLoading,
  } = useSuiConnect()
  const { activeAccount } = useContext(WalletContext)

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
        break
      case ChainType.SUI:
        suiConnect(walletTag)
        break
    }
    disconnectOther(chainType)
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

  return { connect, disconnect, isLoading }
}
