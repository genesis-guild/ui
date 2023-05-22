import { Socket } from 'socket.io-client'
import { ChainEventName } from '../types'
import { enf, emit } from './common'

export const mint = (socket: Socket) => {
  emit(socket, enf.getEventName(ChainEventName.MINT))
}
