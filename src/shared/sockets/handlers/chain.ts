import { Socket } from 'socket.io-client'
import { ChainEventName, ChainType, TransactionReqParamsType } from '../types'
import { signTransaction } from '../utils/chain'
import { Handlers } from './common'

export class ChainHandlers extends Handlers {
  private socket: Socket

  constructor(socket: Socket) {
    super()
    this.socket = socket
    this.init()
  }

  init() {
    console.log('ChainHandlers init')

    this.handleSignTransaction()
  }

  handleSignTransaction() {
    this.socket.on(
      this.getEventName(ChainEventName.SIGN_TRANSACTION),
      (chainType: ChainType, reqParams: TransactionReqParamsType) => {
        signTransaction(chainType, reqParams)
      },
    )
  }
}
