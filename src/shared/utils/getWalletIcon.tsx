import { MetamaskLogoIcon, SuiLogoIcon } from 'shared/assets/icons'
import { IconProps } from 'shared/assets/types'
import { WalletTag } from 'shared/types/chain'

export const getWalletIcon = (
  wallet: WalletTag,
): (({ ...props }: IconProps) => JSX.Element) | null => {
  switch (wallet) {
    case WalletTag.Metamask:
      return MetamaskLogoIcon
    case WalletTag.Suiet:
      return SuiLogoIcon
    default:
      return null
  }
}
