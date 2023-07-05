import { ChainType } from 'shared/types/chain'

import { TransactionReqParamsType } from '../../types'
import { ethSendTransaction } from './actions/eth'

export const signTransaction = (
  chainType: ChainType,
  reqParams: TransactionReqParamsType,
): void => {
  switch (chainType) {
    case ChainType.ETH:
      ethSendTransaction(reqParams)
      break
    default:
  }
}
