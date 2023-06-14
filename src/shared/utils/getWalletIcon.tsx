import { WalletTag } from 'app/contexts/wallet/types'
import { MetamaskLogoIcon } from 'shared/assets/icons/metamask_logo'
import { SuiLogoIcon } from 'shared/assets/icons/sui_logo'
import { IconProps } from 'shared/assets/types'

export const getWalletIcon = (
  wallet: WalletTag,
): (({ ...props }: IconProps) => JSX.Element) | null => {
  switch (wallet) {
    case WalletTag.Metamask:
      return MetamaskLogoIcon
    case WalletTag.Sui:
      return SuiLogoIcon
    default:
      return null
  }
}
