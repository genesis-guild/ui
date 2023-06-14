import { ChainType, TransactionReqParamsType } from '../../types'
import { ethSendTransaction } from './actions/eth'

export const signTransaction = (
  chainType: ChainType,
  reqParams: TransactionReqParamsType,
): void => {
  switch (chainType) {
    case ChainType.ETH:
      ethSendTransaction(reqParams)
  }
}
