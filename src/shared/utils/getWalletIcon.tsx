import { WalletTag } from 'app/contexts/wallet/types'
import { MetamaskLogoIcon } from 'shared/assets/icons/metamask_logo'
import { SuiLogoIcon } from 'shared/assets/icons/sui_logo'

export const getWalletIcon = (wallet: WalletTag) => {
  switch (wallet) {
    case WalletTag.Metamask:
      return MetamaskLogoIcon
    case WalletTag.Sui:
      return SuiLogoIcon
    default:
      return null
  }
}
