import { Socket } from 'socket.io-client'

import { ChainHandlers } from './chain'

export const initHandlers = (socket: Socket): void => {
  new ChainHandlers(socket)
}
