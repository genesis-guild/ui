export enum ChainEventName {
  MINT = 'mint',
  SIGN_TRANSACTION = 'sign_transaction',
}

export enum ChainType {
  ETH = 'eth',
}

export interface TransactionReqParamsType {
  from: string
  to: string
  data: string
}
