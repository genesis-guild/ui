import { Socket } from 'socket.io-client'
import { chainHandlers } from './chain'

export const initHandlers = (socket: Socket) => {
  chainHandlers(socket)
}
