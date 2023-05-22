import { Socket } from 'socket.io-client'
import { ChainEventName, ChainType, TransactionReqParamsType } from '../types'
import { enf } from './common'
import { signTransaction } from '../utils/chain'

export const chainHandlers = (socket: Socket) => {
  console.log('init Chain Handlers')

  socket.on(
    enf.getEventName(ChainEventName.SIGN_TRANSACTION),
    (chainType: ChainType, reqParams: TransactionReqParamsType) => {
      signTransaction(chainType, reqParams)
    },
  )
}
