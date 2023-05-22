import { ethSendTransaction } from './actions/eth'
import { ChainType, TransactionReqParamsType } from '../../types'

export const signTransaction = async (
  chainType: ChainType,
  reqParams: TransactionReqParamsType,
) => {
  switch (chainType) {
    case ChainType.ETH:
      ethSendTransaction(reqParams)
  }
}
