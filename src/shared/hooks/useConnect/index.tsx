import { ChainType, WalletTag } from 'shared/types'

import { useEthConntect } from './useEthConnect'
import { useSuiConnect } from './useSuiConnect'

interface UseConnectType {
  connect: (chainType: ChainType, walletTag: WalletTag) => void
  disconnect: (chainType: ChainType | undefined) => void
  signMessage: (chainType: ChainType | undefined, message: string) => void
}

export { useEthConntect, useSuiConnect }

export const useConnect = (): UseConnectType => {
  const {
    connect: ethConnect,
    signMessage: ethSignMessage,
    disconnect: ethDisconnect,
  } = useEthConntect()
  const { connect: suiConnect, disconnect: suiDisconnect } = useSuiConnect()

  const disconnects: Record<ChainType, UseConnectType['disconnect']> = {
    [ChainType.ETH]: ethDisconnect,
    [ChainType.SUI]: suiDisconnect,
  }

  const disconnectOther = (chainType: ChainType): void => {
    Object.entries(disconnects).forEach(([_chainType, disFn]) => {
      if ((_chainType as ChainType) !== chainType) {
        disFn(chainType)
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

  const disconnect = (chainType: ChainType | undefined): void => {
    if (!chainType) return

    switch (chainType) {
      case ChainType.ETH:
        ethDisconnect()
        break
      case ChainType.SUI:
        suiDisconnect()
        break
    }
  }

  const signMessage = (
    chainType: ChainType | undefined,
    message: string,
  ): void => {
    if (!chainType) return

    switch (chainType) {
      case ChainType.ETH:
        ethSignMessage(message)
        break
      case ChainType.SUI:
        break
    }
  }

  return { connect, disconnect, signMessage }
}
