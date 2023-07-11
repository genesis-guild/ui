import { log } from 'shared/utils/log'
import { Socket } from 'socket.io-client'

import { EventName, EventNameFactory, EventNamePostfix } from '../common'

interface ReturnType {
  init: (socket: Socket) => void
}

export const useHandlers = (): ReturnType => {
  const enf = new EventNameFactory(EventNamePostfix.HANDLER_POSTFIX)

  const init = (socket: Socket): void => {
    log('info', 'handlers initialized')

    handleSignMessage(socket)
  }

  const handleSignMessage = (socket: Socket): void => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    // SHOULD BE FIXED IN FUTURE
    socket.on(enf.get(EventName.SIGN_MESSAGE), (data: any) => {
      log(
        'info',
        'handling event',
        enf.get(EventName.SIGN_MESSAGE),
        'with data',
        data,
      )
    })
  }

  return { init }
}
