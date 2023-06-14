import { Socket } from 'socket.io-client'

import { ChainEventName, ListDto } from '../types'
import { Emitters } from './common'

class ChainEmitters extends Emitters {
  mint(socket: Socket): void {
    this.emit(socket, this.getEventName(ChainEventName.MINT))
  }

  list(socket: Socket, listDto: ListDto): void {
    this.emit(socket, this.getEventName(ChainEventName.LIST), listDto)
  }
}

export default new ChainEmitters()
