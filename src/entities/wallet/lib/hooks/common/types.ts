import { Account, WalletTag } from 'shared/types'

export interface UseConnectNetType {
  connect: (walletTag: WalletTag) => void
  disconnect: () => void
  signMessage: (message: string) => void
  account: Account | undefined
}
