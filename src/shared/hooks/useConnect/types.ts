import { ConnectAccountType, WalletTag } from 'shared/types'

export interface UseConnectNetType {
  connect: (walletTag: WalletTag) => void
  disconnect: () => void
  account: ConnectAccountType
  isLoading: boolean
}
