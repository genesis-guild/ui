export enum ChainType {
  ETH = 'eth',
  SUI = 'sui',
}

export enum WalletTag {
  Metamask = 'metaMask',
  Phantom = 'phantom',
  Suiet = 'Suiet',
  SuiWallet = 'Sui Wallet',
}

export type MessageTX = `0x${string}`

export interface Account {
  chainType: ChainType
  address: string
}
