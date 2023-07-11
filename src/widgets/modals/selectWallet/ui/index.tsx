import { Box, Dialog, Typography } from '@mui/material'
import { useState } from 'react'
import { Close } from 'shared/assets/icons/close'
import { useConnect } from 'shared/hooks/useConnect'
import { ModalCommonProps } from 'shared/types'
import { ChainType, WalletTag } from 'shared/types/chain'

import { WalletsList } from './components'

const walletsByChain: Record<ChainType, WalletTag[]> = {
  [ChainType.ETH]: [WalletTag.Metamask, WalletTag.Phantom],
  [ChainType.SUI]: [WalletTag.Suiet, WalletTag.SuiWallet],
}

export const SelectWalletModal: React.FC<ModalCommonProps> = ({
  isOpen,
  onClose,
}) => {
  const [selectedChain] = useState<ChainType>(ChainType.ETH)
  const { connect } = useConnect()

  const handleConnect = (walletTag: WalletTag): void => {
    connect(selectedChain, walletTag)
    onClose()
  }

  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      PaperProps={{
        sx: {
          width: '480px',
        },
      }}
    >
      <Typography variant='h4'>Connect wallet</Typography>
      <Box
        sx={theme => ({
          position: 'absolute',
          top: '24px',
          right: '24px',
          cursor: 'pointer',
          color: theme.custom.colors.neutral.secondary_icon,
        })}
        onClick={onClose}
      >
        <Close width={14} height={14} />
      </Box>
      <WalletsList
        wallets={walletsByChain[selectedChain]}
        handleConnect={walletTag => handleConnect(walletTag)}
      />
    </Dialog>
  )
}
