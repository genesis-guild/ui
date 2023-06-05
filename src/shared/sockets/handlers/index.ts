import { Socket } from 'socket.io-client'
import { ChainHandlers } from './chain'

export const initHandlers = (socket: Socket) => {
  new ChainHandlers(socket)
}
