import { Box, Dialog, Typography } from '@mui/material'
import { useState } from 'react'

import { useConnect } from 'entities/wallet'

import { CloseIcon, EtheriumIcon, SuietWalletIcon } from 'shared/assets/icons'
import {
  ChainType,
  ModalCommonProps,
  SelectOption,
  WalletTag,
} from 'shared/types'

import { ChainSelect } from './ChainSelect'
import { WalletsList } from './WalletsList'

const walletsByChain: Record<ChainType, WalletTag[]> = {
  [ChainType.ETH]: [WalletTag.Metamask, WalletTag.Phantom],
  [ChainType.SUI]: [WalletTag.Suiet, WalletTag.SuiWallet],
}

const createLabel = (label: string, icon: React.ReactNode): React.ReactNode => {
  return (
    <Box sx={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      {icon}
      <Typography variant='button'>{label}</Typography>
    </Box>
  )
}

const chainOptions: SelectOption<ChainType>[] = [
  {
    label: createLabel('Ethereum', <EtheriumIcon width={24} height={24} />),
    value: ChainType.ETH,
  },
  {
    label: createLabel('Sui', <SuietWalletIcon width={24} height={24} />),
    value: ChainType.SUI,
  },
]

export const SelectWalletModal: React.FC<ModalCommonProps> = ({
  isOpen,
  onClose,
}) => {
  const [selectedChain, setSelectedChain] = useState<ChainType>(ChainType.ETH)
  const { connect } = useConnect()

  const handleConnect = (walletTag: WalletTag): void => {
    connect(selectedChain, walletTag)
    onClose()
  }

  const handleChainChanged = (chain: ChainType): void => {
    setSelectedChain(chain)
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
        <CloseIcon width={14} height={14} />
      </Box>
      <Box sx={{ p: '24px 0' }}>
        <ChainSelect
          options={chainOptions}
          onChainChanged={handleChainChanged}
        />
      </Box>
      <WalletsList
        wallets={walletsByChain[selectedChain]}
        handleConnect={walletTag => handleConnect(walletTag)}
      />
    </Dialog>
  )
}
