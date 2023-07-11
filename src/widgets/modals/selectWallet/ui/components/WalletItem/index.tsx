import {
  Avatar,
  Box,
  ListItem,
  ListItemButton,
  Typography,
} from '@mui/material'
import {
  MetamaskLogoIcon,
  PhantomIcon,
  SuietLogoIcon,
  SuietWalletIcon,
} from 'shared/assets/icons'
import { WalletTag } from 'shared/types/chain'

const labels: Record<WalletTag, string> = {
  [WalletTag.Metamask]: 'Metamask',
  [WalletTag.Suiet]: 'Suiet',
  [WalletTag.SuiWallet]: 'Sui Wallet',
  [WalletTag.Phantom]: 'Phantom',
}

const icons: Record<WalletTag, JSX.Element> = {
  [WalletTag.Metamask]: <MetamaskLogoIcon width={44} height={44} />,
  [WalletTag.Suiet]: <SuietLogoIcon width={44} height={44} />,
  [WalletTag.SuiWallet]: <SuietWalletIcon width={44} height={44} />,
  [WalletTag.Phantom]: <PhantomIcon width={44} height={44} />,
}

interface Props {
  detected?: boolean
  onClick?: () => void
  walletTag: WalletTag
}

export const WalletItem: React.FC<Props> = ({
  onClick,
  detected = false,
  walletTag,
}) => {
  return (
    <ListItem sx={{ p: 0 }}>
      <ListItemButton
        sx={{
          padding: '8px',
          display: 'flex',
          borderRadius: '15px',
          justifyContent: 'space-between',
        }}
        onClick={onClick}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <Avatar sx={{ backgroundColor: 'transparent' }}>
            {icons[walletTag]}
          </Avatar>
          <Typography variant='h6'>{labels[walletTag]}</Typography>
        </Box>

        {detected && (
          <Typography
            variant='overline'
            sx={theme => ({ color: theme.custom.colors.neutral.text_dark })}
          >
            Detected
          </Typography>
        )}
      </ListItemButton>
    </ListItem>
  )
}
