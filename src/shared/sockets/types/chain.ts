import { ChainType } from 'shared/types/chain'

export enum ChainEventName {
  MINT = 'mint',
  SIGN_TRANSACTION = 'sign_transaction',
  LIST = 'list',
}

export interface TransactionReqParamsType {
  from: string
  to: string
  data: string
  value?: string
}

export interface ListDto {
  pricePerDay: string

  nftDto: NftDto

  // in days
  duration: number
}

export interface NftContractDto {
  address: string
  name?: string
  symbol?: string
  totalSupply?: string
}

export interface NftDto {
  contract: NftContractDto
  tokenId: string
  title: string
  description: string
  chainType: ChainType
  owner: string
}
