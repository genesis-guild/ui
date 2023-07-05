import { ChainType, WalletTag } from 'shared/types/chain'

export interface UseConnectNetType {
  connect: (walletTag: WalletTag) => void
  disconnect: () => void
  account: ConnectAccountType
  isLoading: boolean
}

export interface ConnectAccountType {
  connected: boolean
  address: string | undefined
  chainType: ChainType
}
